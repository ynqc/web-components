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
		return this.getAttribute('icon') || 'star-fill';
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
			icon.name = this.icon;
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
