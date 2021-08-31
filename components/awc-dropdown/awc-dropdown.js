import '../awc-option/awc-option'
import '../awc-popover/awc-popover';
import html from './awc-dropdown.html';

export default class CSelect extends HTMLElement {
	static get observedAttributes() {
		return ['value', 'disabled', 'type'];
	}

	constructor() {
		super();
		this._render();
	}

	get defaultvalue() {
		return this.getAttribute('defaultvalue') || '';
	}

	set defaultvalue(value) {
		this.setAttribute('defaultvalue', value);
	}

	get value() {
		return this._value || '';
	}

	set value(value) {
		if (value === '') {
			this._value = '';
			this._text = this.placeholder;
			if (this._focusIndex >= 0) {
				const current = this.nodes[this._focusIndex];
				if (current) {
					this._focusIndex = -1;
					current.selected = false;
					current.focusin = false;
				}
			}
			if (this.search) {
				this.selectEl.placeholder = this.placeholder;
				this.selectEl.value = '';
			} else {
				this.valueEl.textContent = this.placeholder;
			}
			return
		}
		if (value !== this.value) {
			this._value = value;
			const pre = this.querySelector(`awc-option[selected]`);
			if (pre) {
				pre.selected = false;
				pre.focusin = false;
			}
			const cur = this.querySelector(`awc-option[value="${value}"]`) || this.querySelector(`awc-option`);
			this._focusIndex = this.nodes.indexOf(cur);
			cur.selected = true;
			cur.focusin = true;
			this._text = cur.textContent;
			if (this.search) {
				this.selectEl.placeholder = this._text;
				this.selectEl.value = this._text;
			} else {
				this.valueEl.textContent = this._text;
			}
			if (this._nativeclick) {
				this._nativeclick = false;
				this.dispatchEvent(
					new CustomEvent('change', {
						detail: {
							value: value,
							text: this._text,
						},
					})
				);
			}
		}
		this.optionsEl.open = false;
	}

	get empty() {
		return this.getAttribute('empty') !== null;
	}

	set empty(value) {
		if (value === null || value === false) {
			this.removeAttribute('empty');
		} else {
			this.setAttribute('empty', '');
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

	get type() {
		return this.getAttribute('type');
	}

	get search() {
		return this.getAttribute('search') !== null;
	}

	get placeholder() {
		return this.getAttribute('placeholder') || 'Please Select Item';
	}

	focus() {
		this.selectEl.focus();
	}

	reset() {
		this.value = this.defaultvalue;
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name == 'disabled' && this.selectEl) {
			if (newValue != null) {
				this.selectEl.disabled = true;
			} else {
				this.selectEl.disabled = false;
			}
		}
	}

	connectedCallback() {
		this.rootEl = this.shadowRoot.getElementById('root');
		this.optionsEl = this.shadowRoot.getElementById('options');
		this.slotEl = this.shadowRoot.getElementById('slot');
		this.valueEl = this.shadowRoot.getElementById('value');
		const selectInputEl = this.shadowRoot.getElementById('selectInput');
		const selectButtonEl = this.shadowRoot.getElementById('selectButton');
		if (this.search) {
			this.selectEl = selectInputEl;
			selectInputEl.style.display = "flex";
			selectButtonEl.style.display = "none";
		} else {
			this.selectEl = selectButtonEl;
			selectInputEl.style.display = "none";
			selectButtonEl.style.display = "flex";
		}
		this._focusIndex = -1;
		this.disabled = this.disabled;
		this.selectEl.disabled = this.disabled;
		this.selectEl.setAttribute('type', this.type);
		this.addEventListener('keydown', (ev) => {
			if (this.optionsEl.open) {
				switch (ev.key) {
					case 'Tab':
						ev.preventDefault();
						break;
					case 'ArrowUp':
						ev.preventDefault();
						this._move(-1)
						break;
					case 'ArrowDown':
						ev.preventDefault();
						this._move(1)
						break;
					case 'Escape':
						ev.preventDefault();
						this.optionsEl.open = false;
						break;
					default:
						break;
				}
			} else {
				switch (ev.key) {
					case 'ArrowUp':
						ev.preventDefault();
						this._movein(-1);
						break;
					case 'ArrowDown':
						ev.preventDefault();
						this._movein(1);
						break;
					default:
						break;
				}
			}
		})
		this.selectEl.addEventListener('focus', (ev) => {
			ev.stopPropagation();
			if (!this.isfocus) {
				this.dispatchEvent(
					new CustomEvent('focus', {
						detail: {
							value: this.value,
						},
					})
				);
			}
		})
		this.optionsEl.addEventListener('click', (ev) => {
			this.focus();
			const item = ev.target.closest('awc-option');
			if (item) {
				this._nativeclick = true;
				this.value = item.value;
			}
		})
		this.optionsEl.addEventListener('close', (ev) => {
			if (this.search) {
				this.selectEl.readonly = true;
				this.selectEl.value = this._text;
				this.nodes = [...this.querySelectorAll(`awc-option:not([disabled])`)];
				this.filter.textContent = '';
				this.empty = false;
			}
			const place = this.querySelector(`awc-option[focusin]`);
			const current = this.querySelector(`awc-option[selected]`);
			if (place) {
				place.focusin = false;
			}
			if (current) {
				current.focusin = true;
				this._focusIndex = this.nodes.indexOf(current);
			} else {
				this._focusIndex = -1;
			}
		})
		this.optionsEl.addEventListener('open', (ev) => {
			if (this.search) {
				this.selectEl.value = '';
				this.selectEl.readonly = false;
				this.focus();
			}
		})
		if (this.search) {
			this.filter = this.shadowRoot.getElementById('filter');
			this.selectEl.addEventListener('input', (ev) => {
				const value = this.selectEl.value.trim();
				if (value === '') {
					this.nodes = [...this.querySelectorAll(`awc-option:not([disabled])`)];
					this.filter.textContent = '';
				} else {
					this.nodes = [
						...this.querySelectorAll(
							`awc-option[key*="${value}" i]:not([disabled])`
						),
					];
					this.filter.textContent = `
                    :host([search]) ::slotted(awc-option:not([key*="${value}" i]))
                    {
                        display:none;
                    }
                    `;
				}
				const place = this.querySelector(`awc-option[focusin]`);
				if (place) {
					place.focusin = false;
				}
				if (this.nodes[0]) {
					this.nodes[0].focusin = true;
					this.empty = false;
				} else {
					this.empty = true;
				}
				this._focusIndex = 0;
			})
			this.selectEl.addEventListener('submit', (ev) => {
				if (!this.optionsEl.open) {
					this.optionsEl.open = true;
				} else {
					const item = this.nodes[this._focusIndex];
					this._nativeclick = true;
					if (item) {
						this.value = item.value;
					} else {
						this.value = this._value;
						this.optionsEl.open = false;
					}
				}
			})
		} else {
			this.addEventListener('click', (ev) => {
				if (!this.optionsEl.open) {
					const item = this.nodes[this._focusIndex];
					if (item) {
						this._nativeclick = true;
						this.value = item.value;
					}
				}
			})
		}
		this.selectEl.addEventListener('blur', (ev) => {
			ev.stopPropagation();
			if (getComputedStyle(this.rootEl).zIndex == 2) {
				this.isfocus = true;
			} else {
				this.isfocus = false;
				this.dispatchEvent(
					new CustomEvent('blur', {
						detail: {
							value: this.value,
						},
					})
				)
			}
		})
		this.slotEl.addEventListener('slotchange', () => {
			this.nodes = [...this.querySelectorAll(`awc-option:not([disabled])`)];
			if (!this.defaultvalue) {
				this.value = '';
			} else {
				this.value = this.defaultvalue;
			}
		})
	}

	_move(dir) {
		const pre = this.nodes[this._focusIndex];
		const focusIndex = dir + this._focusIndex;
		const current = this.nodes[focusIndex];
		if (current) {
			if (pre) {
				pre.focusin = false;
			}
			current.focusin = true;
			this._focusIndex = focusIndex;
		}
	}

	_movein(dir) {
		this._focusIndex = dir + this._focusIndex;
		if (this._focusIndex < 0) {
			this._focusIndex = this.nodes.length - 1;
		}
		if (this._focusIndex === this.nodes.length) {
			this._focusIndex = 0;
		}
		this._nativeclick = true;
		this.value = this.nodes[this._focusIndex].value;
	}

	_render() {
		const shadowRoot = this.attachShadow({ mode: 'open' });
		shadowRoot.innerHTML = html;
	}
}

if (!customElements.get('awc-dropdown')) {
	customElements.define('awc-dropdown', CSelect)
}
