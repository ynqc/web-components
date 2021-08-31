import '../awc-tooltip/awc-tooltip.js'
import '../awc-button/awc-button.js'
import html from './awc-input.html';

export default class AwcInput extends HTMLElement {
	static get observedAttributes() {
		return [
			'label',
			'disabled',
			'pattern',
			'required',
			'readonly',
			'placeholder',
		];
	}

	constructor({ multi } = {}) {
		super();
		this.multi = multi;
		this.$customValidity = null;
		this._render();
	}

	get customValidity() {
		return (
			this.$customValidity || {
				method: () => true,
			}
		);
	}

	set customValidity(object) {
		this.$customValidity = object;
	}

	get value() {
		return this.inputEl.value;
	}

	set value(value) {
		this.inputEl.value = value;
	}

	get readonly() {
		return this.getAttribute('readonly') !== null;
	}

	set readonly(value) {
		if (value === null || value === false) {
			this.removeAttribute('readonly');
		} else {
			this.setAttribute('readonly', '');
		}
	}

	get required() {
		return this.getAttribute('required') !== null;
	}

	set required(value) {
		if (value === null || value === false) {
			this.removeAttribute('required');
		} else {
			this.setAttribute('required', '');
		}
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

	get label() {
		return this.getAttribute('label') || '';
	}

	set label(value) {
		this.setAttribute('label', value);
	}

	get placeholder() {
		return this.getAttribute('placeholder') || this.label;
	}

	set placeholder(value) {
		this.setAttribute('placeholder', value);
	}

	get icon() {
		return this.getAttribute('icon');
	}

	set icon(value) {
		this.setAttribute('icon', value);
	}

	get invalid() {
		return this.getAttribute('invalid') !== null;
	}

	set invalid(value) {
		if (value === null || value === false) {
			this.removeAttribute('invalid');
		} else {
			this.setAttribute('invalid', '');
		}
	}

	get pattern() {
		return this.getAttribute('pattern');
	}

	set pattern(value) {
		if (value === null || value === false) {
			this.removeAttribute('pattern');
		} else {
			this.setAttribute('pattern', value);
		}
	}

	get novalidate() {
		return this.getAttribute('novalidate') !== null;
	}

	set novalidate(value) {
		if (value === null || value === false) {
			this.removeAttribute('novalidate');
		} else {
			this.setAttribute('novalidate', '');
		}
	}

	get debounce() {
		return this.getAttribute('debounce');
	}

	get name() {
		return this.getAttribute('name') || '';
	}

	get validity() {
		return this.inputEl.checkValidity() && this.customValidity.method(this);
	}

	get errordir() {
		return this.getAttribute('errordir') || 'top';
	}

	get defaultvalue() {
		return this.getAttribute('defaultvalue') || '';
	}
	get rows() {
		return this.getAttribute('rows') || 3;
	}

	get type() {
		return this.getAttribute('type');
	}

	get min() {
		return this.getAttribute('min') || 0;
	}

	get max() {
		return this.getAttribute('max') || Infinity;
	}

	get minlength() {
		return this.getAttribute('minlength') || '';
	}

	get maxlength() {
		return this.getAttribute('maxlength') || '';
	}

	get step() {
		return this.getAttribute('step') || 1;
	}

	get errortips() {
		return this.getAttribute('errortips');
	}

	checkValidity() {
		if (this.novalidate || this.disabled || (this.formEl && this.formEl.novalidate)) {
			return true;
		}
		if (this.validity) {
			this.inputToolTipEl.show = false;
			this.invalid = false;
			return true;
		} else {
			this.inputEl.focus();
			this.inputToolTipEl.show = 'show';
			this.invalid = true;
			const validationMessage = this._formatValidMessage();
			if (this.inputEl.validity.valueMissing) {
				this.inputToolTipEl.tips = validationMessage;
			} else {
				if (!this.customValidity.method(this)) {
					this.inputToolTipEl.tips = this.customValidity.tips;
				} else {
					this.inputToolTipEl.tips = this.errortips || validationMessage;
				}
			}
			return false;
		}
	}

	focus() {
		this.inputEl.focus();
	}

	reset() {
		this.inputEl.value = this.defaultvalue;
		this.inputToolTipEl.show = false;
		this.invalid = false;
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name == 'disabled' && this.inputEl) {
			if (newValue !== null) {
				this.inputEl.parentNode.setAttribute('tabindex', '-1');
			} else {
				this.inputEl.parentNode.removeAttribute('tabindex');
			}
		}
		if (name == 'pattern' && this.inputEl) {
			if (newValue !== null) {
				this.inputEl.setAttribute('pattern', newValue);
			} else {
				this.inputEl.removeAttribute('pattern');
			}
		}
		if (name == 'placeholder' && this.inputEl) {
			if (newValue !== null) {
				this.inputEl.setAttribute('placeholder', newValue);
			} else {
				this.inputEl.removeAttribute('placeholder');
			}
		}
		if (name == 'required' && this.inputEl) {
			if (newValue !== null) {
				this.inputEl.setAttribute('required', 'required');
			} else {
				this.inputEl.removeAttribute('required');
			}
		}
		if (name == 'readonly' && this.inputEl) {
			if (newValue !== null) {
				this.inputEl.setAttribute('readonly', 'readonly');
			} else {
				this.inputEl.removeAttribute('readonly');
			}
		}
	}

	connectedCallback() {
		this.formEl = this.closest('awc-form');
		this.inputToolTipEl = this.shadowRoot.getElementById('input-tooltip');
		this.inputToolTipEl.dir = this.errordir;
		this._initPage();
		this._addEventListener();
		this.disabled = this.disabled;
		this.required = this.required;
		this.readonly = this.readonly;
	}

	_initInputEl() {
		const textareaEl = this.shadowRoot.getElementById('textarea');
		const inputEl = this.shadowRoot.getElementById('input');
		if (this.multi) {
			this.inputToolTipEl.removeChild(inputEl);
			textareaEl.setAttribute('rows', this.rows);
			this.inputEl = textareaEl;
		} else {
			this.inputToolTipEl.removeChild(textareaEl);
			inputEl.setAttribute('type', this._typeMap(this.type));
			if (this.type === 'number') {
				inputEl.setAttribute('min', this.min);
				inputEl.setAttribute('max', this.max);
				inputEl.setAttribute('step', this.step);
			}
			this.inputEl = inputEl;
		}
		this.inputEl.setAttribute('name', this.name);
		this.inputEl.setAttribute('value', this.defaultvalue);
		this.inputEl.setAttribute('placeholder', this.placeholder);
		this.inputEl.setAttribute('minlength', this.minlength);
		this.inputEl.setAttribute('maxlength', this.maxlength);
	}

	_initLabelEl() {
		const inputLabelEl = this.shadowRoot.getElementById('input-label');
		if (this.label && !this.icon) {
			inputLabelEl.style.display = "block";
			inputLabelEl.innerHTML = this.label;
		} else {
			inputLabelEl.style.display = "none";
		}
	}

	_initBtnEl() {
		if (!this.multi) {
			const btnNumberEl = this.shadowRoot.getElementById('btn-number');
			if(this.type === 'password') {
				const buttonEl = document.createElement('awc-button');
				buttonEl.id = 'btn-password';
				buttonEl.classList.add('btn-right');
				buttonEl.icon = 'eye-close';
				buttonEl.type = 'text';
				this.inputToolTipEl.append(buttonEl);
				this.inputToolTipEl.removeChild(btnNumberEl);
			} else if (this.type === 'search') {
				const buttonEl = document.createElement('awc-button');
				buttonEl.id = 'btn-search';
				buttonEl.classList.add('btn-right');
				buttonEl.icon = 'search';
				buttonEl.type = 'text';
				this.inputToolTipEl.append(buttonEl);
				this.inputToolTipEl.removeChild(btnNumberEl);
			} else if (this.type === 'number') {
				btnNumberEl.style.display = "block";
				const buttonUpEl = document.createElement('awc-button');
				buttonUpEl.id = 'btn-add';
				buttonUpEl.icon = 'up';
				buttonUpEl.type = 'text';
				btnNumberEl.append(buttonUpEl);
				const buttonDownEl = document.createElement('awc-button');
				buttonDownEl.id = 'btn-sub';
				buttonDownEl.icon = 'down';
				buttonDownEl.type = 'text';
				btnNumberEl.append(buttonDownEl);
			} else {
				this.inputToolTipEl.removeChild(btnNumberEl);
			}
		}
	}

	_initIconEl() {
		if (this.icon) {
			this.iconEl = document.createElement('awc-icon');
            this.iconEl.name = this.icon;
			this.iconEl.classList.add('icon-pre');
            this.inputToolTipEl.prepend(this.iconEl);
		}
	}

	_initPage() {
		this._initInputEl();
		this._initLabelEl();
		this._initBtnEl();
		this._initIconEl();
	}

	_addEventListener() {
		this.inputEl.addEventListener('input', (ev) => {
			ev.stopPropagation();
			this.checkValidity();
			if (this.debounce) {
				this.timer && clearTimeout(this.timer);
				this.timer = setTimeout(() => {
					this.dispatchEvent(
						new CustomEvent('input', {
							detail: {
								value: this.value,
							},
						})
					);
				}, this.debounce);
			} else {
				this.dispatchEvent(
					new CustomEvent('input', {
						detail: {
							value: this.value,
						},
					})
				);
			}
		})
		this.inputEl.addEventListener('change', () => {
			this.dispatchEvent(
				new CustomEvent('change', {
					detail: {
						value: this.value,
					},
				})
			);
		})
		this.inputEl.addEventListener('focus', (ev) => {
			this.checkValidity();
		})
		this.inputEl.addEventListener('keydown', (ev) => {
			switch (ev.key) {
				case 'Enter':
					this.dispatchEvent(
						new CustomEvent('submit', {
							detail: {
								value: this.value,
							},
						})
					);
					break;
				default:
					break;
			}
		});
		if (!this.multi) {
			this.btnPasswordEl = this.shadowRoot.getElementById('btn-password')
			this.btnAddEl = this.shadowRoot.getElementById('btn-add');
			this.btnSubEl = this.shadowRoot.getElementById('btn-sub');
			this.btnSearchEl = this.shadowRoot.getElementById('btn-search');
			if (this.btnSearchEl) {
				this.btnSearchEl.addEventListener('click', () => {
					this.dispatchEvent(
						new CustomEvent('submit', {
							detail: {
								value: this.value,
							},
						})
					);
				});
			}
			if (this.btnPasswordEl) {
				this.btnPasswordEl.addEventListener('click', () => {
					this.password = !this.password
					if (this.password) {
						this.inputEl.setAttribute('type', 'text');
						this.btnPasswordEl.icon = 'eye';
					} else {
						this.inputEl.setAttribute('type', 'password');
						this.btnPasswordEl.icon = 'eye-close';
					}
					this.inputEl.focus();
				});
			}
			if (this.btnAddEl) {
				this.btnAddEl.addEventListener('click', () => {
					this.inputEl.stepUp();
					this.dispatchEvent(
						new CustomEvent('change', {
							detail: {
								value: this.value,
							},
						})
					);
				})
			}
			if (this.btnSubEl) {
				this.btnSubEl.addEventListener('click', () => {
					this.inputEl.stepDown();
					this.dispatchEvent(
						new CustomEvent('change', {
							detail: {
								value: this.value,
							},
						})
					);
				})
			}
			this.pattern = this.pattern;
		}
	}

	_typeMap(type) {
		switch (type) {
			case 'password':
			case 'number':
			case 'email':
			case 'tel':
			case 'url':
				break;
			default:
				type = 'text';
				break;
		}
		return type;
	}

	_formatValidMessage() {
		if (this.required && !this.value) {
			return 'This is required';
		}
		if ((this.min || this.min === 0) && this.value < this.min) {
			return `The minimum value is ${this.min}`;
		}

		if ((this.max || this.max === 0) && this.value > this.max) {
			return `The maximum value is ${this.max}`;
		}

		if ((this.minlength || this.minlength === 0) && this.value.length < this.minlength) {
			return `The min length is ${this.minlength}`;
		}

		if ((this.maxlength || this.maxlength === 0) && this.value.length > this.maxlength) {
			return `The max length value is ${this.maxlength}`;
		}

		if (this.invalid) {
			return 'Please fill in the correct format';
		}

	}

	_render() {
		const shadowRoot = this.attachShadow({ mode: 'open' });
		shadowRoot.innerHTML = html;
	}
}

if (!customElements.get('awc-input')) {
	customElements.define('awc-input', AwcInput);
}
