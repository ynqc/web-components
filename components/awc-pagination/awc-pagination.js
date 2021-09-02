"use strict";

import '../awc-button/awc-button.js'
import html from './awc-pagination.html';

export default class AwcPagination extends HTMLElement {
	static get observedAttributes() {
		return ['pagesize', 'total'];
	}

	constructor() {
		super();
		this._render();
	}

	get defaultcurrent() {
		return this.getAttribute('defaultcurrent') || 1;
	}

	set defaultcurrent(value) {
		this.setAttribute('defaultcurrent', value);
	}

	get defaultvalue() {
		return this.getAttribute('defaultcurrent') || 1;
	}

	set defaultvalue(value) {
		this.setAttribute('defaultvalue', value);
	}

	get pagesize() {
		return this.getAttribute('pagesize') || 1;
	}

	set pagesize(value) {
		this.setAttribute('pagesize', value);
	}

	get total() {
		return this.getAttribute('total') || 0;
	}

	set total(value) {
		this.setAttribute('total', value);
	}

	get current() {
		return this.$current;
	}

	set current(current) {
		if (this.$current !== current) {
			current = Math.min(Math.max(1, current), this._count);
			this.$current = current;
			this._updatePage(current);
			if (this._init) {
				this.dispatchEvent(
					new CustomEvent('change', {
						detail: {
							current: current,
							pagesize: this.pagesize,
							total: this.total,
						},
					})
				);
			}
		}
	}

	get simple() {
		return this.getAttribute('simple') !== null;
	}

	set simple(value) {
		this.setAttribute('simple', value);
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name == 'pagesize' && this.pageEl) {
			this._renderPage(newValue, this.total);
		}
		if (name == 'total' && this.pageEl) {
			this._renderPage(this.pagesize, newValue);
		}
	}

	connectedCallback() {
		this.pageEl = this.shadowRoot.getElementById('page');
		this.leftEl = this.shadowRoot.getElementById('left');
		this.rightEl = this.shadowRoot.getElementById('right');
		this.$current = this.defaultcurrent;
		this._renderPage(this.pagesize, this.total);
		this.pageEl.addEventListener('click', (ev) => {
			const item = ev.target.closest('awc-button');
			if (item) {
				this.current = Number(item.dataset.current);
			}
		});
		this.addEventListener('keydown', (ev) => {
			switch (ev.key) {
				case 'ArrowLeft':
					this.current--;
					break;
				case 'ArrowRight':
					this.current++;
					break;
				default:
					break;
			}
		})
		this.leftEl.addEventListener('click', (ev) => {
			this.current--;
		});
		this.rightEl.addEventListener('click', (ev) => {
			this.current++;
		});
		this._init = true;
	}

	_renderPage(pagesize, total) {
		this._count = Math.ceil(total / pagesize);
		const current = Math.min(Math.max(1, this.current), this._count);
		if (this.simple) {
			const html = `<awc-button class="simple-page" tabindex="-1" type="text">${current} / ${this._count}</awc-button>`;
			this.pageEl.innerHTML = html;
		} else {
			const html = Array.from({ length: this._count }, (el, i) => i)
				.splice(0, 9)
				.map(
					(el) =>
						`<awc-button ${el + 1 == current ? 'current' : ''} type="text" data-current="${el + 1}">${el + 1}</awc-button>`
				)
				.join('');
			this.pageEl.innerHTML = html;
		}
		this._updatePage(current);
	}

	_updatePage(current = this.current) {
		this.leftEl.disabled = current == 1;
		this.rightEl.disabled = current == this._count;
		if (this.simple) {
			const simplePageEl = this.pageEl.querySelector('.simple-page');
			if (simplePageEl) {
				simplePageEl.textContent = current + ' / ' + this._count;
			}
		} else {
			if (this._count > 9) {
				let place = [];
				switch (current) {
					case 1:
					case 2:
					case 3:
					case 4:
					case 5:
						place = [1, 2, 3, 4, 5, 6, 7, 'next', this._count];
						break;
					case this._count:
					case this._count - 1:
					case this._count - 2:
					case this._count - 3:
					case this._count - 4:
						place = [
							1,
							'pre',
							this._count - 6,
							this._count - 5,
							this._count - 4,
							this._count - 3,
							this._count - 2,
							this._count - 1,
							this._count,
						];
						break;
					default:
						place = [
							1,
							'pre',
							current - 2,
							current - 1,
							current,
							current + 1,
							current + 2,
							'next',
							this._count,
						];
						break;
				}
				this.pageEl.querySelectorAll('awc-button').forEach((el, i) => {
					if (typeof place[i] === 'number') {
						el.dataset.current = place[i];
						el.textContent = place[i];
						el.disabled = false;
						if (place[i] == current) {
							el.setAttribute('current', '');
							el.focus();
						} else {
							el.removeAttribute('current');
						}
						el.removeAttribute('tabindex');
					} else {
						el.textContent = '...';
						el.removeAttribute('current');
						el.setAttribute('tabindex', -1);
					}
				});
			} else {
				this.pageEl.querySelectorAll('awc-button').forEach((el, i) => {
					if (el.dataset.current == current) {
						el.setAttribute('current', '');
						el.focus();
					} else {
						el.removeAttribute('current');
					}
				});
			}
		}
	}

	_render() {
		const shadowRoot = this.attachShadow({ mode: 'open' });
		shadowRoot.innerHTML = html;
	}
}

if (!customElements.get('awc-pagination')) {
	customElements.define('awc-pagination', AwcPagination);
}
