"use strict";

import html from './awc-loading.html';

export default class AwcLoading extends HTMLElement {
	static get observedAttributes() {
		return ['color', 'size'];
	}

	constructor() {
		super();
        this._render();
	}

	get size() {
		return this.getAttribute('size') || '';
	}

    set size(value) {
		this.setAttribute('size', value);
	}

	get color() {
		return this.getAttribute('color') || '';
	}

	set color(value) {
		this.setAttribute('color', value);
	}

	connectedCallback() {
		this.loadingEl = this.shadowRoot.getElementById('loading');
		this.size && (this.size = this.size);
		this.color && (this.color = this.color);
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name == 'color' && this.loadingEl) {
			this.loadingEl.style.color = newValue;
		}
		if (name == 'size' && this.loadingEl) {
			this.loadingEl.style.fontSize = newValue + 'px';
		}
	}

    _render() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
		shadowRoot.innerHTML = html;
    }
}

if (!customElements.get('awc-loading')) {
	customElements.define('awc-loading', AwcLoading);
}
