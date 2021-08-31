import '../awc-button/awc-button.js'
import html from './awc-option.html';

class AwcOption extends HTMLElement {
	static get observedAttributes() {
		return ['selected', 'disabled', 'value'];
	}
	constructor() {
		super();
		this._render();
	}

	get value() {
		return this.getAttribute('value');
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

	set selected(value) {
		if (value) {
			this.setAttribute('selected', '');
		} else {
			this.removeAttribute('selected');
		}
	}

	set focusin(value) {
		if (value) {
			this.setAttribute('focusin', '');
			this.optionEl.setAttribute('focus', '');
			this.scrollIntoView({
				block: 'nearest',
			});
		} else {
			this.removeAttribute('focusin');
			this.optionEl.removeAttribute('focus');
		}
	}

	focus() {
		this.optionEl.focus();
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name == 'disabled' && this.optionEl) {
			if (newValue != null) {
				this.optionEl.disabled = newValue;
			}
		}
	}

	connectedCallback() {
		this.optionEl = this.shadowRoot.getElementById('option');
		this.disabled = this.disabled;
		this.optionEl.disabled = this.disabled;
	}

	_render() {
		const shadowRoot = this.attachShadow({ mode: 'open' });
		shadowRoot.innerHTML = html;
	}
}

if (!customElements.get('awc-option')) {
	customElements.define('awc-option', AwcOption);
}
