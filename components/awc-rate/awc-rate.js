import '../awc-tooltip/awc-tooltip.js'
import '../awc-icon/awc-icon';
import html from './awc-rate.html';

export default class AwcRate extends HTMLElement {
	static get observedAttributes() {
		return ['color', 'size'];
	}

	constructor() {
		super();
		this._render();
	}

	get value() {
		return this.shadowRoot.value;
	}

	set value(value) {
		if (value === 0) {
			this.radioEls[this.value - 1].checked = false;
		} else {
			this.radioEls[Number(value) - 1].checked = true;
		}
		this.shadowRoot.value = value;
	}

	get size() {
		return this.getAttribute('size') || '';
	}

	set size(value) {
		this.setAttribute('size', value);
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

	get color() {
		return this.getAttribute('color') || '';
	}

	set color(value) {
		this.setAttribute('color', value);
	}

	set tips(value) {
		this.setAttribute('tips', value);
	}

	get tips() {
		const tips = this.getAttribute('tips');
		if (tips) {
			return this.getAttribute('tips').split(',');
		} else {
			return ['', '', '', '', ''];
		}
	}

	get defaultvalue() {
		return this.getAttribute('defaultvalue') || 0;
	}

	get icon() {
		return this.getAttribute('icon');
	}
	
	focus() {
		this.shadowRoot.querySelector('input[type="radio"]').focus();
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name == 'color' && this.shadowRoot) {
			this.style.setProperty('--themeColor', newValue);
		}
		if (name == 'size' && this.shadowRoot) {
			this.style.fontSize = newValue + 'px';
		}
	}

	connectedCallback() {
		this.radioEls = [
			...this.shadowRoot.querySelectorAll('input[type="radio"]'),
		].reverse();
		const tooltipEls = [...this.shadowRoot.querySelectorAll('awc-tooltip')].reverse();
		tooltipEls.forEach((el, index) => {
			el.tips = this.tips[index];
		});
		const iconEls = this.shadowRoot.querySelectorAll('awc-icon');
		iconEls.forEach(icon => {
			if (this.icon) {
				icon.name = this.icon;
			} else {
				icon.path = "M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3-12.3 12.7-12.1 32.9 0.6 45.3l183.7 179.1-43.4 252.9c-1.2 6.9-0.1 14.1 3.2 20.3 8.2 15.6 27.6 21.7 43.2 13.4L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z";
			}
		});
		if (this.defaultvalue) {
			this.shadowRoot.value = this.defaultvalue;
			this.radioEls[Number(this.defaultvalue) - 1].checked = true;
		}
		this.radioEls.forEach((el) => {
			el.addEventListener('change', (ev) => {
				this.value = el.value;
				this.dispatchEvent(
					new CustomEvent('change', {
						detail: {
							value: this.value,
						},
					})
				);
			});
		})
	}

	_render() {
		const shadowRoot = this.attachShadow({ mode: 'open' });
		shadowRoot.innerHTML = html;
	}
}

if (!customElements.get('awc-rate')) {
	customElements.define('awc-rate', AwcRate);
}
