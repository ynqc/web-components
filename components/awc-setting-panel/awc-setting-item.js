"use strict";

import html from './awc-setting-item.html';

export default class AwcSettingItem extends HTMLElement {
	constructor() {
		super();
		this._render();
	}

	get legend() {
		return this.getAttribute('legend') || '';
	}

	set legend(value) {
		this.setAttribute('legend', value);
	}

	connectedCallback() {
		const labelsEl = this.shadowRoot.querySelector('label');
        labelsEl.innerHTML = this.legend;
	}

    _render() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
		shadowRoot.innerHTML = html;
    }
}

if (!customElements.get('awc-setting-item')) {
	customElements.define('awc-setting-item', AwcSettingItem);
}