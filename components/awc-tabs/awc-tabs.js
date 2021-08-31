import '../awc-button/awc-button';
import './awc-tab';
import html from './awc-tabs.html';

export default class AwcTabs extends HTMLElement {
	static get observedAttributes() {
		return ['activekey'];
	}

	constructor() {
		super();
		this._render();
	}

	get align() {
		return this.getAttribute('align') || 'start';
	}

	set align(value) {
		this.setAttribute('align', value);
		this._initTab();
	}

	get type() {
		return this.getAttribute('type') || 'text';
	}

	set type(value) {
		this.setAttribute('type', value);
	}

	get activekey() {
		return this.getAttribute('activekey');
	}

	set activekey(value) {
		this.setAttribute('activekey', value);
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name == 'activekey' && this.tabEl) {
			let active = this.tabPos[newValue];
			if (active === undefined) {
				this.activekey = this.slotsEl.assignedElements()[0].key;
				active = this.tabPos[this.activekey];
			}
			this.tablineEl.style = `width:${active.width}px;transform:translateX(${active.left}px)`;
			this.tabEl.style.transform = `translateX(${-active.index * 100}%)`;
			this.filterEl.textContent = `
            ::slotted(awc-tab:not([key="${this.activekey}"])){
                height:0;
                overflow:visible;
            }`;
			if (oldValue !== newValue) {
				this.navEl.parentNode.scrollLeft =
					active.left + active.width / 2 - this.navEl.parentNode.offsetWidth / 2;
				const pre = this.navEl.querySelector(`.nav-item.active`);
				if (pre) {
					pre.classList.remove('active');
				}
				const cur = this.navEl.querySelector(`.nav-item[data-key='${newValue}']`);
				cur.classList.add('active');
				cur.focus();
				if (this._init && oldValue !== null) {
					this.dispatchEvent(
						new CustomEvent('change', {
							detail: {
								key: this.activekey,
								index: active.index,
								label: active.label,
							},
						})
					);
				}
			}
		}
	}

	connectedCallback() {
		this.tabPos = {};
		this.navEl = this.shadowRoot.getElementById('nav');
		this.tabEl = this.shadowRoot.getElementById('tab-content');
		this.tablineEl = this.shadowRoot.getElementById('tab-line');
		this.slotsEl = this.shadowRoot.getElementById('slot');
		this.filterEl = this.shadowRoot.getElementById('filter');
		this.slotsEl.addEventListener('slotchange', () => {
			const slots = this.slotsEl.assignedElements();
			let html = '';
			slots.forEach((item, index) => {
				if (item.tagName === 'AWC-TAB') {
					if (item.key === null) {
						item.key = index;
					}
					html += `<awc-button class="nav-item ${
						item.key === this.activekey ? 'active' : ''
					}" icon=${item.icon} ${
						item.disabled !== null ? 'disabled' : ''
					} data-key=${item.key}>${item.label}</awc-button>`
				}
			});
			this.navEl.innerHTML = html;
			this._initTab();
			if (this.activekey === null) {
				this.activekey = slots[0].key;
			} else {
				this.activekey = this.activekey;
			}
			this._init = true;
		})
		this.navEl.addEventListener('click', (ev) => {
			const item = ev.target.closest('awc-button');
			if (item) {
				this.activekey = item.dataset.key;
			}
		})
		this.navEl.addEventListener('keydown', (ev) => {
			switch (ev.key) {
				case 'ArrowLeft':
					ev.preventDefault();
					this._movein(-1);
					break;
				case 'ArrowRight': 
					ev.preventDefault();
					this._movein(1);
					break;
				default:
					break;
			}
		});
	}

	_initTab() {
		const items = this.navEl.querySelectorAll('.nav-item');
		Array.from(items).forEach((item, index) => {
			this.tabPos[item.dataset.key] = {
				index: index,
				width: item.offsetWidth,
				left: item.offsetLeft,
				label: item.textContent,
			};
		});
		if (this.activekey) {
			this.tablineEl.style = `width:${
				this.tabPos[this.activekey].width
			}px;transform:translateX(${this.tabPos[this.activekey].left}px)`;
		}
	}

	_movein(index) {
		const cur = this.navEl.querySelector(`.nav-item.active`);
		if (index > 0 && cur.nextElementSibling) {
			this.activekey = cur.nextElementSibling.dataset.key;
		}
		if (index < 0 && cur.previousElementSibling) {
			this.activekey = cur.previousElementSibling.dataset.key;
		}
	}

	_render() {
		const shadowRoot = this.attachShadow({ mode: 'open' });
		shadowRoot.innerHTML = html;
	}
}

if (!customElements.get('awc-tabs')) {
	customElements.define('awc-tabs', AwcTabs);
}

