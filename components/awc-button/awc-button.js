"use strict";

import '../awc-loading/awc-loading.js'
import '../awc-icon/awc-icon.js'
import html from './awc-button.html';

export default class AwcButton extends HTMLElement {
	static get observedAttributes() {
		return ['disabled', 'icon', 'loading'];
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

	get icon() {
		return this.getAttribute('icon');
	}

    set icon(value) {
		this.setAttribute('icon', value);
	}

	get loading() {
		return this.getAttribute('loading') !== null;
	}

	set loading(value) {
		if (value === null || value === false) {
			this.removeAttribute('loading');
		} else {
			this.setAttribute('loading', '');
		}
	}

    focus() {
		this.btnEl.focus();
	}

	connectedCallback() {
		this.btnEl = this.shadowRoot.getElementById('btn');
		this.disabled = this.disabled;
		this.loading = this.loading;
        if (!this.loading && this.icon && this.icon != 'null') {
            this.iconEl = document.createElement('awc-icon');
            this.iconEl.name = this.icon;
            this.shadowRoot.prepend(this.iconEl);
        }
        if (this.loading) {
            this.loadEL = document.createElement('awc-loading');
            this.loadEL.style.color = 'inherit';
            this.shadowRoot.prepend(this.loadEL);
        }
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name == 'disabled' && this.btnEl) {
			if (newValue !== null) {
				this.btnEl.setAttribute('disabled', 'disabled');
			} else {
				this.btnEl.removeAttribute('disabled');
			}
		}
		if (name == 'loading' && this.loadEL) {
			if (newValue !== null) {
				this.shadowRoot.prepend(this.loadEL);
				this.btnEl.setAttribute('disabled', 'disabled');
			} else {
				this.shadowRoot.removeChild(this.loadEL);
				this.btnEl.removeAttribute('disabled');
			}
		}
		if (name == 'icon' && this.iconEl) {
			this.iconEl.name = newValue
		}
	}

    _render() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
		shadowRoot.innerHTML = html;
    }
}

if (!customElements.get('awc-button')) {
	customElements.define('awc-button', AwcButton)
}
