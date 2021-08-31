import html from './awc-icon.html';

export default class AwcIcon extends HTMLElement {
	static get observedAttributes() {
		return ['name', 'size', 'color'];
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

	connectedCallback() {
		this.iconEl = this.shadowRoot.getElementById('icon');
		this.iconEl.setAttribute('viewBox', `0 0 ${this.view} ${this.view}`);
		this.use = this.iconEl.querySelector('use');
		// re-call set
		this.size && (this.size = this.size);
		this.color && (this.color = this.color);
		this.name && (this.name = this.name);
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name == 'name' && this.use) {
			this.use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', `../assets/icon.svg#icon-${newValue}`);
		}
		if (name == 'color' && this.iconEl) {
			this.iconEl.style.color = newValue;
		}
		if (name == 'size' && this.iconEl) {
			this.iconEl.style.fontSize = newValue + 'px';
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
