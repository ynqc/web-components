"use strict";

import html from './awc-checkbox.html';

export default class AwcCheckbox extends HTMLElement {
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

	get indeterminate() {
		return this.checkboxEl.indeterminate;
	}

	set indeterminate(value) {
		if (value === null || value === false) {
			this.checkboxEl.indeterminate = false;
		} else {
			this.checkboxEl.indeterminate = true;
		}
	}

	get value() {
		return this.getAttribute('value') || this.textContent;
	}

	set value(value) {
		this.setAttribute("value", value);
	}

	get name() {
		return this.getAttribute('name');
	}

	set name(value) {
		this.setAttribute("name", value);
	}

	focus() {
		this.checkboxEl.focus();
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name == 'disabled' && this.checkboxEl) {
			if (newValue !== null) {
				this.checkboxEl.setAttribute('disabled', 'disabled');
			} else {
				this.checkboxEl.removeAttribute('disabled');
			}
		}
		if (name == 'checked' && this.checkboxEl) {
			if (newValue !== null) {
				this.checkboxEl.checked = true;
			} else {
				this.checkboxEl.checked = false;
			}
		}
	}

	connectedCallback() {
		this.checkboxEl = this.shadowRoot.getElementById('checkbox');
		this.disabled = this.disabled;
		this.checked = this.checked;
		this.checkboxEl.addEventListener('change', (ev) => {
			this.checked = this.checkboxEl.checked;
			this.dispatchEvent(
				new CustomEvent('change', {
					detail: {
						checked: this.checked,
					},
				})
			);
		});
		this.checkboxEl.addEventListener('focus', (ev) => {
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
		});
		this.checkboxEl.addEventListener('blur', (ev) => {
			ev.stopPropagation()
			if (getComputedStyle(this.checkboxEl).zIndex == 2) {
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
		});
	}

	_render() {
		const shadowRoot = this.attachShadow({ mode: 'open' });
		shadowRoot.innerHTML = html;
	}
}

if (!customElements.get('awc-checkbox')) {
	customElements.define('awc-checkbox', AwcCheckbox);
}
