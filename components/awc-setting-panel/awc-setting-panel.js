
"use strict";

import html from './awc-setting-panel.html';
import './awc-setting-item';

export default class AwcSettingPanel extends HTMLElement {
	static get observedAttributes() {
		return ['name'];
	}

	constructor() {
		super();
		this._render();
	}

	get name() {
		return this.getAttribute('name');
	}

	set name(value) {
		this.setAttribute('name', value);
	}

	get formdata() {
		const formdata = new FormData();
		const jsondata = {};
        this.elements.forEach((el) => {
            formdata.set(el.name, el.value);
            jsondata[el.name] = el.value;
        });
		formdata.json = jsondata;
		return formdata;
	}

	connectedCallback() {
		this.panelEl = this.shadowRoot.getElementById('panel');
        this.nameEl = this.shadowRoot.getElementById("panel-name");
        this.nameEl.innerHTML = this.name;
		this.elements = [...this.querySelectorAll('[name]:not([disabled])')];
	}

	_render() {
		const shadowRoot = this.attachShadow({ mode: 'open' });
		shadowRoot.innerHTML = html;
	}
}

if (!customElements.get('awc-setting-panel')) {
	customElements.define('awc-setting-panel', AwcSettingPanel);
}
