import html from './awc-icon.html';

export default class AwcIcon extends HTMLElement {
	static get observedAttributes() {
		return ['name', 'size', 'color', 'path'];
	}

	constructor() {
		super();
		this._render();
	}

	get view() {
		return this.getAttribute('view') || 1024;
	}

	get name() {
		return this.getAttribute('name');
	}

	set name(value) {
		this.setAttribute('name', value);
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

	get path() {
		return this.getAttribute('path') || '';
	}

	set path(value) {
		this.setAttribute('path', value);
	}

	connectedCallback() {
		this.iconEl = this.shadowRoot.getElementById('icon');
		this.iconEl.setAttribute('viewBox', `0 0 ${this.view} ${this.view}`);
		this.useEl = this.iconEl.querySelector('use');
		this.pathEl = this.iconEl.querySelector('path');
		// re-call set
		this.size && (this.size = this.size);
		this.color && (this.color = this.color);
		this.name && (this.name = this.name);
		this.path && (this.path = this.path);
		if (this.path) {
			this.pathEl.setAttribute('d', this.path);
		}
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name == 'name' && this.useEl) {
			this.useEl.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', `../assets/icon.svg#icon-${newValue}`);
		}
		if (name == 'color' && this.iconEl) {
			this.iconEl.style.color = newValue;
		}
		if (name == 'size' && this.iconEl) {
			this.iconEl.style.fontSize = newValue + 'px';
		}
		if (name == 'path' && this.pathEl) {
			this.pathEl.setAttribute('d', newValue);
		}
	}

	_render() {
		const shadowRoot = this.attachShadow({ mode: 'open' });
		shadowRoot.innerHTML = html;
	}
}

if (!customElements.get('awc-icon')) {
	customElements.define('awc-icon', AwcIcon);
}
