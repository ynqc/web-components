import html from './awc-form.html';
import './awc-form-item';

export default class AwcForm extends HTMLElement {
	static get observedAttributes() {
		return ['disabled'];
	}

	constructor() {
		super();
		this._render();
	}

	get method() {
		const method = (this.getAttribute('method') || 'get').toUpperCase();
		if (['GET', 'POST'].includes(method)) {
			return method;
		}
		return 'GET';
	}

	get action() {
		return this.getAttribute('action') || '';
	}

	set type(value) {
		this.setAttribute('type', value);
	}

	get validity() {
		return this.elements.every((el) => el.validity);
	}

	get disabled() {
		return this.getAttribute('disabled') !== null;
	}

	get formdata() {
		const formdata = new FormData();
		const jsondata = {};
		if (!this.disabled) {
			this.elements.forEach((el) => {
				formdata.set(el.name, el.value);
				jsondata[el.name] = el.value;
			});
		}
		formdata.json = jsondata;
		return formdata;
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

	get name() {
		return this.getAttribute('name');
	}

	checkValidity() {
		if (this.novalidate) {
			return true;
		}
		const elements = [...this.elements].reverse();
		let validity = true;
		elements.forEach((el) => {
			if (el.checkValidity && !el.checkValidity()) {
				validity = false;
			}
		})
		this.invalid = !validity;
		return validity;
	}

	async submit() {
		if (this.checkValidity() && !this.disabled) {
			//validity
			if (this.action) {
				this.submitBtnEl && (this.submitBtnEl.loading = true)
				if (this.method == 'GET') {
					const formdata = new URLSearchParams(this.formEldata).toString();
					const data = await fetch(`${this.action}?${formdata}`);
					this.submitBtnEl && (this.submitBtnEl.loading = false);
					if (data.headers.get('content-type') == 'application/json') {
						this.dispatchEvent(
							new CustomEvent('submit', {
								detail: {
									data: data.json(),
								},
							})
						);
					}
				} else {
					const data = await fetch(this.action, {
						method: 'POST',
						body: this.formEldata,
					});
					if (this.submitBtnEl) {
						this.submitBtnEl.loading = false;
					}
					if (data.headers.get('content-type') == 'application/json') {
						this.dispatchEvent(
							new CustomEvent('submit', {
								detail: {
									data: data.json(),
								},
							})
						);
					}
				}
			}
		}
	}

	reset() {
		this.invalid = false;
		this.elements.forEach((el) => {
			el.reset && el.reset();
		});
	}

	connectedCallback() {
		this.formEl = this.shadowRoot.getElementById('form');
		this.elements = [...this.querySelectorAll('[name]:not([disabled])')];
		this.submitBtnEl = this.querySelector('[htmltype=submit]');
		this.resetBtnEl = this.querySelector('[htmltype=reset]');
		this.formEl.setAttribute('method', this.method);
		this.formEl.setAttribute('action', this.action);
		if (this.novalidate) {
			this.formEl.setAttribute('novalidate', '');
		}
		if (this.submitBtnEl) {
			this.submitBtnEl.addEventListener('click', () => {
				this.submit();
			})
		}
		if (this.resetBtnEl) {
			this.resetBtnEl.addEventListener('click', () => {
				this.reset();
			})
		}
		this.formEl.addEventListener('keydown', (ev) => {
			if (ev.target == this.resetBtnEl) {
				return;
			}
			switch (ev.key) {
				case 'Enter':
					this.submit();
					break;
				default:
					break;
			}
		})
		if (!this.novalidate) {
			this.elements.forEach((el) => {
				if (el.tagName == 'AWC-INPUT') {
					el.addEventListener('input', () => {
						this.invalid = !this.validity;
					});
				} else {
					el.addEventListener('change', () => {
						this.invalid = !this.validity;
					});
				}
			})
		}
	}

	_render() {
		const shadowRoot = this.attachShadow({ mode: 'open' });
		shadowRoot.innerHTML = html;
	}
}

if (!customElements.get('awc-form')) {
	customElements.define('awc-form', AwcForm);
}
