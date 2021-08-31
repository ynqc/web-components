import html from './awc-radio.html';

export default class AwcRadio extends HTMLElement {
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

	get value() {
		return this.getAttribute('value') || this.textContent;
	}

	set value(value) {
		this.setAttribute('value', value);
	}

	get name() {
		return this.getAttribute('name');
	}

	focus() {
		this.radioEl.focus();
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name == 'disabled' && this.radioEl) {
			if (newValue !== null) {
				this.radioEl.setAttribute('disabled', 'disabled');
			} else {
				this.radioEl.removeAttribute('disabled');
			}
		}
		if (name == 'checked' && this.radioEl) {
			if (newValue !== null) {
				this.radioEl.checked = true;
			} else {
				this.radioEl.checked = false;
			}
		}
	}

	connectedCallback() {
		this.radioEl = this.shadowRoot.getElementById('radio');
		this.parentEl = this.getRootNode();
		this.disabled = this.disabled;
		this.checked = this.checked;
		this.radioEl.addEventListener('change', (ev) => {
			this.tocheck();
			this.dispatchEvent(
				new CustomEvent('change', {
					detail: {
						checked: this.checked,
					},
				})
			);
		});
	}

	tocheck() {
		const selector = `awc-radio[name="${this.name}"][checked]`;
		const prev = this.parentEl.querySelector(selector);
		if (prev) {
			prev.checked = false;
		}
		this.checked = true;
	}

	_render() {
		const shadowRoot = this.attachShadow({ mode: 'open' });
		shadowRoot.innerHTML = html;
	}
}

if (!customElements.get('awc-radio')) {
	customElements.define('awc-radio', AwcRadio);
}
