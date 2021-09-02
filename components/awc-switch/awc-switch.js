"use strict";

import html from './awc-switch.html';

export default class AwcSwitch extends HTMLElement {
	static get observedAttributes() {
		return ['disabled', 'checked'];
	}

	constructor() {
		super();
		this._render();
	}

	get disabled() {
		return this.getAttribute('disabled') !== null;
	}

	set disabled(value) {
		if (value === null || value === false) {
			this.removeAttribute('disabled');
		} else {
			this.setAttribute('disabled', '');
		}
	}

	get checked() {
		return this.getAttribute('checked') !== null;
	}

	set checked(value) {
		if (value === null || value === false) {
			this.removeAttribute('checked');
		} else {
			this.setAttribute('checked', '');
		}
	}

	get name() {
		return this.getAttribute('name');
	}

	set name(value) {
		this.setAttribute("name", value);
	}

	focus() {
		this.switchEl.focus();
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name == 'disabled' && this.switchEl) {
			if (newValue !== null) {
				this.switchEl.setAttribute('disabled', 'disabled');
			} else {
				this.switchEl.removeAttribute('disabled');
			}
		}
		if (name == 'checked' && this.switchEl) {
			if (newValue !== null) {
				this.switchEl.checked = true;
			} else {
				this.switchEl.checked = false;
			}
		}
	}

	connectedCallback() {
		this.switchEl = this.shadowRoot.getElementById('switch');
		this.disabled = this.disabled;
		this.checked = this.checked;
		this.switchEl.addEventListener('change', (ev) => {
			this.checked = this.switchEl.checked;
			this.dispatchEvent(
				new CustomEvent('change', {
					detail: {
						checked: this.checked,
					},
				})
			);
		});
		this.switchEl.addEventListener('keydown', (ev) => {
			switch (ev.key) {
				case 'Enter':
					this.checked = !this.checked;
					break;
				default:
					break;
			}
		})
		this.switchEl.addEventListener('focus', (ev) => {
			ev.stopPropagation();
			if (!this._isfocus) {
				this.dispatchEvent(
					new CustomEvent('focus', {
						detail: {
							value: this.value,
						},
					})
				);
			}
		})
		this.switchEl.addEventListener('blur', (ev) => {
			ev.stopPropagation();
			if (getComputedStyle(this.switchEl).zIndex == 2) {
				this._isfocus = true;
			} else {
				this._isfocus = false;
				this.dispatchEvent(
					new CustomEvent('blur', {
						detail: {
							value: this.value,
						},
					})
				);
			}
		})
	}

	_render() {
		const shadowRoot = this.attachShadow({ mode: 'open' });
		shadowRoot.innerHTML = html;
	}
}

if (!customElements.get('awc-switch')) {
	customElements.define('awc-switch', AwcSwitch);
}
