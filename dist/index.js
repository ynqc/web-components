/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./components/awc-button/awc-button.js":
/*!*********************************************!*\
  !*** ./components/awc-button/awc-button.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AwcButton)
/* harmony export */ });
/* harmony import */ var _awc_loading_awc_loading_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../awc-loading/awc-loading.js */ "./components/awc-loading/awc-loading.js");
/* harmony import */ var _awc_icon_awc_icon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../awc-icon/awc-icon.js */ "./components/awc-icon/awc-icon.js");
/* harmony import */ var _awc_button_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./awc-button.html */ "./components/awc-button/awc-button.html");
/* harmony import */ var _awc_button_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_awc_button_html__WEBPACK_IMPORTED_MODULE_2__);






class AwcButton extends HTMLElement {
	static get observedAttributes() {
		return ['disabled', 'icon', 'loading'];
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

	get icon() {
		return this.getAttribute('icon');
	}

    set icon(value) {
		this.setAttribute('icon', value);
	}

	get loading() {
		return this.getAttribute('loading') !== null;
	}

	set loading(value) {
		if (value === null || value === false) {
			this.removeAttribute('loading');
		} else {
			this.setAttribute('loading', '');
		}
	}

    focus() {
		this.btnEl.focus();
	}

	connectedCallback() {
		this.btnEl = this.shadowRoot.getElementById('btn');
		this.disabled = this.disabled;
		this.loading = this.loading;
        if (!this.loading && this.icon && this.icon != 'null') {
            this.iconEl = document.createElement('awc-icon');
            this.iconEl.name = this.icon;
            this.shadowRoot.prepend(this.iconEl);
        }
        if (this.loading) {
            this.loadEL = document.createElement('awc-loading');
            this.loadEL.style.color = 'inherit';
            this.shadowRoot.prepend(this.loadEL);
        }
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name == 'disabled' && this.btnEl) {
			if (newValue !== null) {
				this.btnEl.setAttribute('disabled', 'disabled');
			} else {
				this.btnEl.removeAttribute('disabled');
			}
		}
		if (name == 'loading' && this.loadEL) {
			if (newValue !== null) {
				this.shadowRoot.prepend(this.loadEL);
				this.btnEl.setAttribute('disabled', 'disabled');
			} else {
				this.shadowRoot.removeChild(this.loadEL);
				this.btnEl.removeAttribute('disabled');
			}
		}
		if (name == 'icon' && this.iconEl) {
			this.iconEl.name = newValue
		}
	}

    _render() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
		shadowRoot.innerHTML = (_awc_button_html__WEBPACK_IMPORTED_MODULE_2___default());
    }
}

if (!customElements.get('awc-button')) {
	customElements.define('awc-button', AwcButton)
}


/***/ }),

/***/ "./components/awc-checkbox/awc-checkbox.js":
/*!*************************************************!*\
  !*** ./components/awc-checkbox/awc-checkbox.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AwcCheckbox)
/* harmony export */ });
/* harmony import */ var _awc_checkbox_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./awc-checkbox.html */ "./components/awc-checkbox/awc-checkbox.html");
/* harmony import */ var _awc_checkbox_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_awc_checkbox_html__WEBPACK_IMPORTED_MODULE_0__);




class AwcCheckbox extends HTMLElement {
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

	get indeterminate() {
		return this.checkboxEl.indeterminate;
	}

	set indeterminate(value) {
		if (value === null || value === false) {
			this.checkboxEl.indeterminate = false;
		} else {
			this.checkboxEl.indeterminate = true;
		}
	}

	get value() {
		return this.getAttribute('value') || this.textContent;
	}

	set value(value) {
		this.setAttribute("value", value);
	}

	get name() {
		return this.getAttribute('name');
	}

	set name(value) {
		this.setAttribute("name", value);
	}

	focus() {
		this.checkboxEl.focus();
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name == 'disabled' && this.checkboxEl) {
			if (newValue !== null) {
				this.checkboxEl.setAttribute('disabled', 'disabled');
			} else {
				this.checkboxEl.removeAttribute('disabled');
			}
		}
		if (name == 'checked' && this.checkboxEl) {
			if (newValue !== null) {
				this.checkboxEl.checked = true;
			} else {
				this.checkboxEl.checked = false;
			}
		}
	}

	connectedCallback() {
		this.checkboxEl = this.shadowRoot.getElementById('checkbox');
		this.disabled = this.disabled;
		this.checked = this.checked;
		this.checkboxEl.addEventListener('change', (ev) => {
			this.checked = this.checkboxEl.checked;
			this.dispatchEvent(
				new CustomEvent('change', {
					detail: {
						checked: this.checked,
					},
				})
			);
		});
		this.checkboxEl.addEventListener('focus', (ev) => {
			ev.stopPropagation();
			if (!this._isfocus) {
				this.dispatchEvent(
					new CustomEvent('focus', {
						detail: {
							value: this.value,
						},
					})
				);
			}
		});
		this.checkboxEl.addEventListener('blur', (ev) => {
			ev.stopPropagation()
			if (getComputedStyle(this.checkboxEl).zIndex == 2) {
				this._isfocus = true;
			} else {
				this._isfocus = false;
				this.dispatchEvent(
					new CustomEvent('blur', {
						detail: {
							value: this.value,
						},
					})
				);
			}
		});
	}

	_render() {
		const shadowRoot = this.attachShadow({ mode: 'open' });
		shadowRoot.innerHTML = (_awc_checkbox_html__WEBPACK_IMPORTED_MODULE_0___default());
	}
}

if (!customElements.get('awc-checkbox')) {
	customElements.define('awc-checkbox', AwcCheckbox);
}


/***/ }),

/***/ "./components/awc-dialog/awc-dialog.js":
/*!*********************************************!*\
  !*** ./components/awc-dialog/awc-dialog.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _awc_button_awc_button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../awc-button/awc-button.js */ "./components/awc-button/awc-button.js");
/* harmony import */ var _awc_dialog_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./awc-dialog.html */ "./components/awc-dialog/awc-dialog.html");
/* harmony import */ var _awc_dialog_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_awc_dialog_html__WEBPACK_IMPORTED_MODULE_1__);





class AwcDialog extends HTMLElement {
	static get observedAttributes() {
		return ['open', 'title', 'oktext', 'canceltext', 'type']
	}

	constructor() {
		super();
		this._render();
	}

	get open() {
		return this.getAttribute('open') !== null;
	}

	set open(value) {
		if (value === null || value === false) {
			this.removeAttribute('open');
		} else {
			this.setAttribute('open', '');
		}
	}

	get title() {
		return this.getAttribute('title') || 'dialog';
	}

	set title(value) {
		this.setAttribute('title', value);
	}

	get type() {
		return this.getAttribute('type');
	}

	set type(value) {
		this.setAttribute('type', value);
	}

	get oktext() {
		return this.getAttribute('oktext') || 'ok';
	}

	set oktext(value) {
		this.setAttribute('oktext', value);
	}

	get canceltext() {
		return this.getAttribute('canceltext') || 'cancel';
	}

	set canceltext(value) {
		this.setAttribute('canceltext', value);
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name == 'open' && this.shadowRoot) {
			if (newValue !== null) {
				this.btnActiveEl = document.activeElement;
			}
		}
		if (name == 'title' && this.titleEl) {
			if (newValue !== null) {
				this.titleEl.textContent = newValue;
			}
		}
		if (name == 'oktext' && this.btnSubmitEl) {
			if (newValue !== null) {
				this.btnSubmitEl.textContent = newValue;
			}
		}
		if (name == 'canceltext' && this.btnCancelEl) {
			if (newValue !== null) {
				this.btnCancelEl.textContent = newValue;
			}
		}
		if (name == 'type' && this.dialogIconEl) {
			if (newValue !== null) {
				this.dialogIconEl.name = this._typeMap(newValue).name;
				this.dialogIconEl.color = this._typeMap(newValue).color;
			}
		}
	}

	connectedCallback() {
		this.remove = false;
		this._autoclose = true;
		this.titleEl = this.shadowRoot.getElementById('title');
		this.btnCloseEl = this.shadowRoot.getElementById('btn-close');
		this.btnCancelEl = this.shadowRoot.getElementById('btn-cancel');
		this.btnSubmitEl = this.shadowRoot.getElementById('btn-submit');
		this.dialogIconEl = this.shadowRoot.getElementById('dialog-icon');
		this.titleEl.innerHTML = this.title;
		this.btnCancelEl.innerHTML = this.canceltext;
		this.btnSubmitEl.innerHTML = this.oktext;
		this.shadowRoot.addEventListener('transitionend', (ev) => {
			if (ev.propertyName === 'transform' && this.open) {
				this.btnSubmitEl.focus();
			}
		})
		this.shadowRoot.addEventListener('transitionend', (ev) => {
			if (ev.propertyName === 'transform' && !this.open) {
				if (this.remove) {
					document.body.removeChild(this);
				}
				this.dispatchEvent(new CustomEvent('close'));
				this.btnActiveEl && this.btnActiveEl.focus();
			}
		})
		this.addEventListener('wheel', (ev) => {
			ev.preventDefault();
		});
		this.btnCloseEl.addEventListener('click', () => {
			this.open = false;
		});
		this.btnCancelEl.addEventListener('click', async () => {
			this.dispatchEvent(new CustomEvent('cancel'));
			this.open = false;
		});
		this.btnSubmitEl.addEventListener('click', () => {
			this.dispatchEvent(new CustomEvent('submit'));
			if (this._autoclose) {
				this.open = false;
			}
		});
	}
	_typeMap(type) {
		let name = '';
		let color = '';
		switch (type) {
			case 'info':
				name = 'info-circle';
				color = 'var(--infoColor, #1890ff)';
				break;
			case 'success':
				name = 'check-circle'
				color = 'var(--successColor, #52c41a)';
				break;
			case 'error':
				name = 'close-circle'
				color = 'var(--errorColor, #f4615c)';
				break;
			case 'warning':
				name = 'warning-circle'
				color = 'var(--waringColor, #faad14)';
				break;
			case 'confirm':
				name = 'question-circle'
				color = 'var(--waringColor, #faad14)';
				break;
			default:
				break;
		}
		return {
			name: name,
			color: color,
		};
	}
	_render() {
		const shadowRoot = this.attachShadow({ mode: 'open' });
		shadowRoot.innerHTML = (_awc_dialog_html__WEBPACK_IMPORTED_MODULE_1___default());
	}
}

if (!customElements.get('awc-dialog')) {
	customElements.define('awc-dialog', AwcDialog);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
	alert: (config, okCallback) => {
		const dialog = new AwcDialog();
		document.body.appendChild(dialog);
		dialog.remove = true;
		if (typeof config === 'object') {
			const { title, oktext, content, ok } = config;
			dialog.title = title || 'Alert';
			dialog.oktext = oktext || 'OK';
			dialog.onsubmit = ok || null;
			dialog.innerHTML = content || '';
		} else {
			dialog.title = 'Alert';
			dialog.oktext = 'OK';
			dialog.innerHTML = config || '';
			dialog.onsubmit = okCallback || null;
		}
		dialog.open = true;
		return dialog;
	},

	info: (config, okCallback) => {
		const dialog = new AwcDialog();
		document.body.appendChild(dialog);
		dialog.type = 'info';
		dialog.remove = true;
		if (typeof config === 'object') {
			const { title, oktext, content, ok } = config;
			dialog.title = title || 'Info';
			dialog.oktext = oktext || 'OK';
			dialog.onsubmit = ok || null;
			dialog.innerHTML = content || '';
		} else {
			dialog.title = 'Info';
			dialog.oktext = 'OK';
			dialog.innerHTML = config || '';
			dialog.onsubmit = okCallback || null;
		}
		dialog.open = true;
		return dialog;
	},

	success: (config, okCallback) => {
		const dialog = new AwcDialog();
		document.body.appendChild(dialog);
		dialog.type = 'success';
		dialog.remove = true;
		if (typeof config === 'object') {
			const { title, oktext, content, ok } = config;
			dialog.title = title || 'Success';
			dialog.oktext = oktext || 'OK';
			dialog.onsubmit = ok || null;
			dialog.innerHTML = content || '';
		} else {
			dialog.title = 'Success';
			dialog.oktext = 'OK';
			dialog.innerHTML = config || '';
			dialog.onsubmit = okCallback || null;
		}
		dialog.open = true;
		return dialog;
	},

	error: (config, okCallback) => {
		const dialog = new AwcDialog();
		document.body.appendChild(dialog);
		dialog.type = 'error';
		dialog.remove = true;
		if (typeof config === 'object') {
			const { title, oktext, content, ok } = config;
			dialog.title = title || 'Error';
			dialog.oktext = oktext || 'OK';
			dialog.onsubmit = ok || null;
			dialog.innerHTML = content || '';
		} else {
			dialog.title = 'Error';
			dialog.oktext = 'OK';
			dialog.innerHTML = config || '';
			dialog.onsubmit = okCallback || null;
		}
		dialog.open = true;
		return dialog;
	},

	warning: (config, okCallback) => {
		const dialog = new AwcDialog();
		document.body.appendChild(dialog);
		dialog.type = 'warning';
		dialog.remove = true;
		if (typeof config === 'object') {
			const { title, oktext, content, ok } = config;
			dialog.title = title || 'Warning';
			dialog.oktext = oktext || 'OK';
			dialog.onsubmit = ok || null;
			dialog.innerHTML = content || '';
		} else {
			dialog.title = 'Warning';
			dialog.oktext = 'OK';
			dialog.innerHTML = config || '';
			dialog.onsubmit = okCallback || null;
		}
		dialog.open = true;
		return dialog;
	},

	confirm: (config, okCallback, cancelCallback) => {
		const dialog = new AwcDialog();
		document.body.appendChild(dialog);
		dialog.remove = true;
		dialog.btnCancelEl.style.visibility = 'visible';
		if (typeof config === 'object') {
			const { type, title, content, oktext, canceltext, ok, cancel } = config;
			dialog.type = type || 'confirm';
			dialog.title = title || 'Confirm';
			dialog.oktext = oktext || 'OK';
			dialog.canceltext = canceltext || 'Cancel';
			dialog.innerHTML = content || '';
			dialog.onsubmit = ok || null;
			dialog.oncancel = cancel || null;
		} else {
			dialog.type = 'confirm';
			dialog.title = 'Confirm';
			dialog.oktext = 'OK';
			dialog.canceltext = 'Cancel'
			dialog.innerHTML = config || '';
			dialog.onsubmit = okCallback || null;
			dialog.oncancel = cancelCallback || null;
		}
		dialog.open = true;
		return dialog;
	}
});


/***/ }),

/***/ "./components/awc-dropdown/awc-dropdown.js":
/*!*************************************************!*\
  !*** ./components/awc-dropdown/awc-dropdown.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AwcDropdown)
/* harmony export */ });
/* harmony import */ var _awc_option_awc_option__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../awc-option/awc-option */ "./components/awc-option/awc-option.js");
/* harmony import */ var _awc_popover_awc_popover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../awc-popover/awc-popover */ "./components/awc-popover/awc-popover.js");
/* harmony import */ var _awc_dropdown_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./awc-dropdown.html */ "./components/awc-dropdown/awc-dropdown.html");
/* harmony import */ var _awc_dropdown_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_awc_dropdown_html__WEBPACK_IMPORTED_MODULE_2__);






class AwcDropdown extends HTMLElement {
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

	set type(value) {
		this.setAttribute('type', value);
	}

	get search() {
		return this.getAttribute('search') !== null;
	}

	set search(value) {
		this.setAttribute("search", value);
	}

	get placeholder() {
		return this.getAttribute('placeholder') || 'Please Select Item';
	}

	set placeholder(value) {
		this.setAttribute("placeholder", value);
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
				this.filterEl.textContent = '';
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
			this.filterEl = this.shadowRoot.getElementById('filter');
			this.selectEl.addEventListener('input', (ev) => {
				const value = this.selectEl.value.trim();
				if (value === '') {
					this.nodes = [...this.querySelectorAll(`awc-option:not([disabled])`)];
					this.filterEl.textContent = '';
				} else {
					this.nodes = [
						...this.querySelectorAll(
							`awc-option[value*="${value}" i]:not([disabled])`
						),
					];
					this.filterEl.textContent = `
                    :host([search]) ::slotted(awc-option:not([value*="${value}" i]))
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
		shadowRoot.innerHTML = (_awc_dropdown_html__WEBPACK_IMPORTED_MODULE_2___default());
	}
}

if (!customElements.get('awc-dropdown')) {
	customElements.define('awc-dropdown', AwcDropdown)
}


/***/ }),

/***/ "./components/awc-form/awc-form-item.js":
/*!**********************************************!*\
  !*** ./components/awc-form/awc-form-item.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AwcFormItem)
/* harmony export */ });
/* harmony import */ var _awc_form_item_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./awc-form-item.html */ "./components/awc-form/awc-form-item.html");
/* harmony import */ var _awc_form_item_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_awc_form_item_html__WEBPACK_IMPORTED_MODULE_0__);




class AwcFormItem extends HTMLElement {
	constructor() {
		super();
		this._render();
	}

	get legend() {
		return this.getAttribute('legend') || '';
	}

	set legend(value) {
		this.setAttribute('legend', value);
	}

	connectedCallback() {
		const labelsEl = this.shadowRoot.querySelector('label');
		const slotsEl = this.shadowRoot.querySelector('slot');
        labelsEl.innerHTML = this.legend;
		slotsEl.addEventListener('slotchange', () => {
			const inputEl = this.querySelector('[name]');
			if (inputEl && inputEl.required) {
				labelsEl.classList.add('required');
			}
		})
	}

    _render() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
		shadowRoot.innerHTML = (_awc_form_item_html__WEBPACK_IMPORTED_MODULE_0___default());
    }
}

if (!customElements.get('awc-form-item')) {
	customElements.define('awc-form-item', AwcFormItem);
}

/***/ }),

/***/ "./components/awc-form/awc-form.js":
/*!*****************************************!*\
  !*** ./components/awc-form/awc-form.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AwcForm)
/* harmony export */ });
/* harmony import */ var _awc_form_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./awc-form.html */ "./components/awc-form/awc-form.html");
/* harmony import */ var _awc_form_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_awc_form_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _awc_form_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./awc-form-item */ "./components/awc-form/awc-form-item.js");






class AwcForm extends HTMLElement {
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

	set method(value) {
		this.setAttribute('method', value.toUpperCase());
	}

	get action() {
		return this.getAttribute('action') || '';
	}

	set action(value) {
		this.setAttribute('action', value);
	}

	get type() {
		return this.getAttribute('type');
	}

	set type(value) {
		this.setAttribute('type', value);
	}

	get disabled() {
		return this.getAttribute('disabled') !== null;
	}

	set disabled(value) {
		this.setAttribute('disabled', value);
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

	set name(value) {
		this.setAttribute('name', value);
	}

	get validity() {
		return this.elements.every((el) => el.validity);
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
		shadowRoot.innerHTML = (_awc_form_html__WEBPACK_IMPORTED_MODULE_0___default());
	}
}

if (!customElements.get('awc-form')) {
	customElements.define('awc-form', AwcForm);
}


/***/ }),

/***/ "./components/awc-icon/awc-icon.js":
/*!*****************************************!*\
  !*** ./components/awc-icon/awc-icon.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AwcIcon)
/* harmony export */ });
/* harmony import */ var _awc_icon_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./awc-icon.html */ "./components/awc-icon/awc-icon.html");
/* harmony import */ var _awc_icon_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_awc_icon_html__WEBPACK_IMPORTED_MODULE_0__);




class AwcIcon extends HTMLElement {
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
		shadowRoot.innerHTML = (_awc_icon_html__WEBPACK_IMPORTED_MODULE_0___default());
	}
}

if (!customElements.get('awc-icon')) {
	customElements.define('awc-icon', AwcIcon);
}


/***/ }),

/***/ "./components/awc-img/awc-img.js":
/*!***************************************!*\
  !*** ./components/awc-img/awc-img.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AwcImg)
/* harmony export */ });
/* harmony import */ var _awc_icon_awc_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../awc-icon/awc-icon */ "./components/awc-icon/awc-icon.js");
/* harmony import */ var _awc_img_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./awc-img.html */ "./components/awc-img/awc-img.html");
/* harmony import */ var _awc_img_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_awc_img_html__WEBPACK_IMPORTED_MODULE_1__);





class AwcImg extends HTMLElement {
	static get observedAttributes() {
		return ['lazy', 'src', 'defaultsrc', 'ratio'];
	}

	constructor() {
		super();
		this._render();
	}

	get src() {
		return this.getAttribute('src');
	}

    set src(value) {
		this.setAttribute('src', value);
	}

	get ratio() {
		//16/9
		const ratio = this.getAttribute('ratio');
		if (ratio && ratio.includes('/')) {
			const r = ratio.split('/');
			return (r[1] / r[0]) * 100 + '%';
		}
		return 0;
	}

    set ratio(value) {
		this.setAttribute('ratio', value);
	}

	get fit() {
		return this.getAttribute('fit');
	}

    set fit(value) {
		this.setAttribute('fit', value);
	}

	get default() {
		return this.getAttribute('default') !== null;
	}

    set default(value) {
		if (value) {
			this.setAttribute('default', '');
		} else {
			this.removeAttribute('default');
		}
	}

    get error() {
		return this.getAttribute('error') !== null;
	}

    set error(value) {
		if (value) {
			this.setAttribute('error', '');
		} else {
			this.removeAttribute('error');
		}
	}

    get defaultsrc() {
		return this.getAttribute('defaultsrc');
	}

	set defaultsrc(value) {
		this.setAttribute('defaultsrc', value);
	}

    get lazy() {
		return this.getAttribute('lazy') !== null;
	}

	set lazy(value) {
		this.setAttribute('lazy', value);
	}

	get alt() {
		return this.getAttribute('alt') || 'error';
	}

	set alt(value) {
		this.setAttribute('alt', value);
	}

	load(src, hasload) {
		const img = new Image();
		img.src = src;
		this.error = false;
		img.onload = () => {
			this.imgEl.alt = this.alt;
			this.imgEl.src = src;
		}
		img.onerror = () => {
			this.error = true;
			this.imgEl.removeAttribute('tabindex');
			if (this.defaultsrc && !hasload) {
				this.default = true;
				this.load(this.defaultsrc, true);
			}
		}
	}

    attributeChangedCallback(name, oldValue, newValue) {
		if (name == 'src' && this.imgEl) {
			this.placeholderEl.classList.remove('show');
			this.load(newValue);
		}
		if (name == 'ratio' && this.imgEl) {
			this.placeholderEl.style.paddingTop = this.ratio;
		}
	}

	connectedCallback() {
		if (window.AwcImgIndex > -1) {
			window.AwcImgIndex++;
		} else {
			window.AwcImgIndex = 0;
		}
		this.AwcImgIndex = window.AwcImgIndex;
		this.placeholderEl = this.shadowRoot.getElementById('placeholder');
		this.imgEl = this.shadowRoot.querySelector('img');
        const altEl = this.shadowRoot.getElementById('alt');
        altEl.innerHTML = this.alt;
        if (this.ratio) {
            this.placeholderEl.style.paddingTop = this.ratio;
        }
		if (this.lazy) {
			this.observer = new IntersectionObserver((ioes) => {
				ioes.forEach((ioe) => {
					const el = ioe.target;
					const intersectionRatio = ioe.intersectionRatio;
					if (intersectionRatio > 0 && intersectionRatio <= 1) {
						this.load(this.src);
						this.observer.unobserve(el);
					}
				})
			})
			this.observer.observe(this.imgEl);
		} else {
			this.load(this.src);
		}
	}

    _render() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
		shadowRoot.innerHTML = (_awc_img_html__WEBPACK_IMPORTED_MODULE_1___default());
    }
}

if (!customElements.get('awc-img')) {
	customElements.define('awc-img', AwcImg);
}


/***/ }),

/***/ "./components/awc-input/awc-input.js":
/*!*******************************************!*\
  !*** ./components/awc-input/awc-input.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AwcInput)
/* harmony export */ });
/* harmony import */ var _awc_tooltip_awc_tooltip_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../awc-tooltip/awc-tooltip.js */ "./components/awc-tooltip/awc-tooltip.js");
/* harmony import */ var _awc_button_awc_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../awc-button/awc-button.js */ "./components/awc-button/awc-button.js");
/* harmony import */ var _awc_input_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./awc-input.html */ "./components/awc-input/awc-input.html");
/* harmony import */ var _awc_input_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_awc_input_html__WEBPACK_IMPORTED_MODULE_2__);






class AwcInput extends HTMLElement {
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

	set debounce(value) {
		this.setAttribute('debounce', value);
	}

	get name() {
		return this.getAttribute('name') || '';
	}

	set name(value) {
		this.setAttribute('name', value);
	}

	get errordir() {
		return this.getAttribute('errordir') || 'top';
	}

	set errordir(value) {
		this.setAttribute('errordir', value);
	}

	get defaultvalue() {
		return this.getAttribute('defaultvalue') || '';
	}

	set defaultvalue(value) {
		this.setAttribute('defaultvalue', value);
	}

	get rows() {
		return this.getAttribute('rows') || 3;
	}

	set rows(value) {
		this.setAttribute('rows', value);
	}

	get type() {
		return this.getAttribute('type');
	}

	set type(value) {
		this.setAttribute('type', value);
	}

	get min() {
		return this.getAttribute('min') || 0;
	}

	set min(value) {
		this.setAttribute('min', value);
	}

	get max() {
		return this.getAttribute('max') || Infinity;
	}

	set max(value) {
		this.setAttribute('max', value);
	}

	get minlength() {
		return this.getAttribute('minlength') || '';
	}

	set minlength(value) {
		this.setAttribute('minlength', value);
	}

	get maxlength() {
		return this.getAttribute('maxlength') || '';
	}

	set maxlength(value) {
		this.setAttribute('maxlength', value);
	}

	get step() {
		return this.getAttribute('step') || 1;
	}

	set step(value) {
		this.setAttribute('step', value);
	}

	get errortips() {
		return this.getAttribute('errortips');
	}

	set errortips(value) {
		this.setAttribute('errortips', value);
	}

	get validity() {
		return this.inputEl.checkValidity() && this.customValidity.method(this);
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
		shadowRoot.innerHTML = (_awc_input_html__WEBPACK_IMPORTED_MODULE_2___default());
	}
}

if (!customElements.get('awc-input')) {
	customElements.define('awc-input', AwcInput);
}


/***/ }),

/***/ "./components/awc-loading/awc-loading.js":
/*!***********************************************!*\
  !*** ./components/awc-loading/awc-loading.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AwcLoading)
/* harmony export */ });
/* harmony import */ var _awc_loading_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./awc-loading.html */ "./components/awc-loading/awc-loading.html");
/* harmony import */ var _awc_loading_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_awc_loading_html__WEBPACK_IMPORTED_MODULE_0__);




class AwcLoading extends HTMLElement {
	static get observedAttributes() {
		return ['color', 'size'];
	}

	constructor() {
		super();
        this._render();
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
		this.loadingEl = this.shadowRoot.getElementById('loading');
		this.size && (this.size = this.size);
		this.color && (this.color = this.color);
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name == 'color' && this.loadingEl) {
			this.loadingEl.style.color = newValue;
		}
		if (name == 'size' && this.loadingEl) {
			this.loadingEl.style.fontSize = newValue + 'px';
		}
	}

    _render() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
		shadowRoot.innerHTML = (_awc_loading_html__WEBPACK_IMPORTED_MODULE_0___default());
    }
}

if (!customElements.get('awc-loading')) {
	customElements.define('awc-loading', AwcLoading);
}


/***/ }),

/***/ "./components/awc-message/awc-message.js":
/*!***********************************************!*\
  !*** ./components/awc-message/awc-message.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _awc_icon_awc_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../awc-icon/awc-icon */ "./components/awc-icon/awc-icon.js");
/* harmony import */ var _awc_loading_awc_loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../awc-loading/awc-loading */ "./components/awc-loading/awc-loading.js");
/* harmony import */ var _awc_message_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./awc-message.html */ "./components/awc-message/awc-message.html");
/* harmony import */ var _awc_message_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_awc_message_html__WEBPACK_IMPORTED_MODULE_2__);






class AwcMessage extends HTMLElement {
	static get observedAttributes() {
		return ['type', 'icon'];
	}

	constructor() {
		super();
		this._render();
	}

	get show() {
		return this.getAttribute('show') !== null;
	}

	set show(value) {
		if (value === null || value === false) {
			this.removeAttribute('show');
		} else {
			this.setAttribute('show', '');
		}
	}

	get icon() {
		return this.getAttribute('icon');
	}

	set icon(value) {
		this.setAttribute('icon', value);
	}

	get type() {
		return this.getAttribute('type');
	}

	set type(value) {
		this.setAttribute('type', value);
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name == 'type' && this.messageIconEl) {
			if (newValue !== null) {
				this.messageIconEl.path = this._typeMap(newValue).path;
				this.messageIconEl.color = this._typeMap(newValue).color;
			}
		}
		if (name == 'icon' && this.messageIconEl) {
			if (newValue !== null && newValue !== 'undefined') {
				this.messageIconEl.style.display = "block";
				this.messageIconEl.name = newValue;
			} else {
				this.messageIconEl.style.display = "none";
			}
		}
	}

	connectedCallback() {
		this.messageIconEl = this.shadowRoot.getElementById('message-icon');
		this.shadowRoot.addEventListener('transitionend', (ev) => {
			if (ev.propertyName === 'transform' && !this.show) {
				messageContent.removeChild(this);
				this.dispatchEvent(new CustomEvent('close'));
			}
		})
		this.type = this.type;
	}

	_typeMap(type) {
		let path = '';
		let color = '';
		switch (type) {
			case 'info':
				path = 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272z m-32-344c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z';
				color = 'var(--infoColor, #1890ff)';
				break
			case 'success':
				path = 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m193.5 301.7l-210.6 292c-12.7 17.7-39 17.7-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z';
				color = 'var(--successColor,#52c41a)';
				break
			case 'error':
				path = 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m165.4 618.2l-66-0.3L512 563.4l-99.3 118.4-66.1 0.3c-4.4 0-8-3.5-8-8 0-1.9 0.7-3.7 1.9-5.2l130.1-155L340.5 359c-1.2-1.5-1.9-3.3-1.9-5.2 0-4.4 3.6-8 8-8l66.1 0.3L512 464.6l99.3-118.4 66-0.3c4.4 0 8 3.5 8 8 0 1.9-0.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z';
				color = 'var(--errorColor,#f4615c)';
				break;
			case 'warning':
				path = 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296z m32 440c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z';
				color = 'var(--waringColor,#faad14)';
				break;
			default:
				break;
		}
		return {
			path: path,
			color: color,
		}
	}

	_render() {
		const shadowRoot = this.attachShadow({ mode: 'open' });
		shadowRoot.innerHTML = (_awc_message_html__WEBPACK_IMPORTED_MODULE_2___default());
	}
}

if (!customElements.get('awc-message')) {
	customElements.define('awc-message', AwcMessage);
}

let messageContent = document.getElementById('message-content');
if (!messageContent) {
	messageContent = document.createElement('div');
	messageContent.id = 'message-content';
	messageContent.style = 'position:fixed; pointer-events:none; left:0; right:0; top:10px; z-index:51;';
	document.body.appendChild(messageContent);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
	info: (text = '', duration, onclose) => {
		const message = new AwcMessage();
		message.timer && clearTimeout(message.timer);
		messageContent.appendChild(message);
		message.type = 'info';
		message.textContent = text;
		message.show = true;
		message.onclose = onclose;
		message.timer = setTimeout(() => {
			message.show = false;
		}, duration || 3000);
		return message;
	},

	success: (text = '', duration, onclose) => {
		const message = new AwcMessage();
		message.timer && clearTimeout(message.timer);
		messageContent.appendChild(message);
		message.type = 'success';
		message.textContent = text;
		message.show = true;
		message.onclose = onclose;
		message.timer = setTimeout(() => {
			message.show = false;
		}, duration || 3000);
		return message;
	},

	error: (text = '', duration, onclose) => {
		const message = new AwcMessage();
		message.timer && clearTimeout(message.timer);
		messageContent.appendChild(message);
		message.type = 'error';
		message.textContent = text;
		message.show = true;
		message.onclose = onclose;
		message.timer = setTimeout(() => {
			message.show = false;
		}, duration || 3000);
		return message;
	},

	warning: (text = '', duration, onclose) => {
		const message = new AwcMessage();
		message.timer && clearTimeout(message.timer);
		messageContent.appendChild(message);
		message.type = 'warning';
		message.textContent = text;
		message.show = true;
		message.onclose = onclose;
		message.timer = setTimeout(() => {
			message.show = false;
		}, duration || 3000);
		return message;
	},

	loading: (text = '', duration = 0, onclose) => {
		const message = new AwcMessage();
		message.timer && clearTimeout(message.timer);
		messageContent.appendChild(message);
		message.type = 'loading';
		message.textContent = text;
		message.show = true;
		message.onclose = onclose;
		if (duration !== 0) {
			message.timer = setTimeout(() => {
				message.show = false;
			}, duration || 3000);
		}
		return message;
	},

	show: ({ text, duration, onclose, icon }) => {
		const message = new AwcMessage();
		message.timer && clearTimeout(message.timer);
		messageContent.appendChild(message);
		message.icon = icon;
		message.textContent = text || '';
		message.show = true;
		message.onclose = onclose;
		if (duration !== 0) {
			message.timer = setTimeout(() => {
				message.show = false;
			}, duration || 3000);
		}
		return message;
	},
});


/***/ }),

/***/ "./components/awc-option/awc-option.js":
/*!*********************************************!*\
  !*** ./components/awc-option/awc-option.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _awc_button_awc_button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../awc-button/awc-button.js */ "./components/awc-button/awc-button.js");
/* harmony import */ var _awc_option_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./awc-option.html */ "./components/awc-option/awc-option.html");
/* harmony import */ var _awc_option_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_awc_option_html__WEBPACK_IMPORTED_MODULE_1__);





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

	set value(value) {
		this.setAttribute("value", value);
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
		shadowRoot.innerHTML = (_awc_option_html__WEBPACK_IMPORTED_MODULE_1___default());
	}
}

if (!customElements.get('awc-option')) {
	customElements.define('awc-option', AwcOption);
}


/***/ }),

/***/ "./components/awc-pagination/awc-pagination.js":
/*!*****************************************************!*\
  !*** ./components/awc-pagination/awc-pagination.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AwcPagination)
/* harmony export */ });
/* harmony import */ var _awc_button_awc_button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../awc-button/awc-button.js */ "./components/awc-button/awc-button.js");
/* harmony import */ var _awc_pagination_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./awc-pagination.html */ "./components/awc-pagination/awc-pagination.html");
/* harmony import */ var _awc_pagination_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_awc_pagination_html__WEBPACK_IMPORTED_MODULE_1__);





class AwcPagination extends HTMLElement {
	static get observedAttributes() {
		return ['pagesize', 'total'];
	}

	constructor() {
		super();
		this._render();
	}

	get defaultcurrent() {
		return this.getAttribute('defaultcurrent') || 1;
	}

	set defaultcurrent(value) {
		this.setAttribute('defaultcurrent', value);
	}

	get defaultvalue() {
		return this.getAttribute('defaultcurrent') || 1;
	}

	set defaultvalue(value) {
		this.setAttribute('defaultvalue', value);
	}

	get pagesize() {
		return this.getAttribute('pagesize') || 1;
	}

	set pagesize(value) {
		this.setAttribute('pagesize', value);
	}

	get total() {
		return this.getAttribute('total') || 0;
	}

	set total(value) {
		this.setAttribute('total', value);
	}

	get current() {
		return this.$current;
	}

	set current(current) {
		if (this.$current !== current) {
			current = Math.min(Math.max(1, current), this._count);
			this.$current = current;
			this._updatePage(current);
			if (this._init) {
				this.dispatchEvent(
					new CustomEvent('change', {
						detail: {
							current: current,
							pagesize: this.pagesize,
							total: this.total,
						},
					})
				);
			}
		}
	}

	get simple() {
		return this.getAttribute('simple') !== null;
	}

	set simple(value) {
		this.setAttribute('simple', value);
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name == 'pagesize' && this.pageEl) {
			this._renderPage(newValue, this.total);
		}
		if (name == 'total' && this.pageEl) {
			this._renderPage(this.pagesize, newValue);
		}
	}

	connectedCallback() {
		this.pageEl = this.shadowRoot.getElementById('page');
		this.leftEl = this.shadowRoot.getElementById('left');
		this.rightEl = this.shadowRoot.getElementById('right');
		this.$current = this.defaultcurrent;
		this._renderPage(this.pagesize, this.total);
		this.pageEl.addEventListener('click', (ev) => {
			const item = ev.target.closest('awc-button');
			if (item) {
				this.current = Number(item.dataset.current);
			}
		});
		this.addEventListener('keydown', (ev) => {
			switch (ev.key) {
				case 'ArrowLeft':
					this.current--;
					break;
				case 'ArrowRight':
					this.current++;
					break;
				default:
					break;
			}
		})
		this.leftEl.addEventListener('click', (ev) => {
			this.current--;
		});
		this.rightEl.addEventListener('click', (ev) => {
			this.current++;
		});
		this._init = true;
	}

	_renderPage(pagesize, total) {
		this._count = Math.ceil(total / pagesize);
		const current = Math.min(Math.max(1, this.current), this._count);
		if (this.simple) {
			const html = `<awc-button class="simple-page" tabindex="-1" type="text">${current} / ${this._count}</awc-button>`;
			this.pageEl.innerHTML = html;
		} else {
			const html = Array.from({ length: this._count }, (el, i) => i)
				.splice(0, 9)
				.map(
					(el) =>
						`<awc-button ${el + 1 == current ? 'current' : ''} type="text" data-current="${el + 1}">${el + 1}</awc-button>`
				)
				.join('');
			this.pageEl.innerHTML = html;
		}
		this._updatePage(current);
	}

	_updatePage(current = this.current) {
		this.leftEl.disabled = current == 1;
		this.rightEl.disabled = current == this._count;
		if (this.simple) {
			const simplePageEl = this.pageEl.querySelector('.simple-page');
			if (simplePageEl) {
				simplePageEl.textContent = current + ' / ' + this._count;
			}
		} else {
			if (this._count > 9) {
				let place = [];
				switch (current) {
					case 1:
					case 2:
					case 3:
					case 4:
					case 5:
						place = [1, 2, 3, 4, 5, 6, 7, 'next', this._count];
						break;
					case this._count:
					case this._count - 1:
					case this._count - 2:
					case this._count - 3:
					case this._count - 4:
						place = [
							1,
							'pre',
							this._count - 6,
							this._count - 5,
							this._count - 4,
							this._count - 3,
							this._count - 2,
							this._count - 1,
							this._count,
						];
						break;
					default:
						place = [
							1,
							'pre',
							current - 2,
							current - 1,
							current,
							current + 1,
							current + 2,
							'next',
							this._count,
						];
						break;
				}
				this.pageEl.querySelectorAll('awc-button').forEach((el, i) => {
					if (typeof place[i] === 'number') {
						el.dataset.current = place[i];
						el.textContent = place[i];
						el.disabled = false;
						if (place[i] == current) {
							el.setAttribute('current', '');
							el.focus();
						} else {
							el.removeAttribute('current');
						}
						el.removeAttribute('tabindex');
					} else {
						el.textContent = '...';
						el.removeAttribute('current');
						el.setAttribute('tabindex', -1);
					}
				});
			} else {
				this.pageEl.querySelectorAll('awc-button').forEach((el, i) => {
					if (el.dataset.current == current) {
						el.setAttribute('current', '');
						el.focus();
					} else {
						el.removeAttribute('current');
					}
				});
			}
		}
	}

	_render() {
		const shadowRoot = this.attachShadow({ mode: 'open' });
		shadowRoot.innerHTML = (_awc_pagination_html__WEBPACK_IMPORTED_MODULE_1___default());
	}
}

if (!customElements.get('awc-pagination')) {
	customElements.define('awc-pagination', AwcPagination);
}


/***/ }),

/***/ "./components/awc-popover/awc-popbody.js":
/*!***********************************************!*\
  !*** ./components/awc-popover/awc-popbody.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AwcPopBody)
/* harmony export */ });
/* harmony import */ var _awc_button_awc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../awc-button/awc-button */ "./components/awc-button/awc-button.js");
/* harmony import */ var _awc_popbody_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./awc-popbody.html */ "./components/awc-popover/awc-popbody.html");
/* harmony import */ var _awc_popbody_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_awc_popbody_html__WEBPACK_IMPORTED_MODULE_1__);





class AwcPopBody extends HTMLElement {
    static get observedAttributes() {
        return ['open', 'title', 'oktext', 'canceltext', 'type'];
    }

    constructor(type) {
        super();
        this._type = type;
        this._render();
    }

    get open() {
        return this.getAttribute('open') !== null;
    }

    set open(value) {
        if (value === null || value === false) {
            this.removeAttribute('open');
            this.parentNode.removeAttribute('open');
        } else {
            this.setAttribute('open', '');
            this.parentNode.setAttribute('open', '');
        }
    }

    get title() {
        return this.getAttribute('title') || 'Title';
    }

    set title(value) {
        this.setAttribute('title', value);
    }

    get type() {
        return this.getAttribute('type');
    }

    set type(value) {
        if (value === null || value === false) {
            this.removeAttribute('type');
        } else {
            this.setAttribute('type', value);
        }
    }

    get oktext() {
        return this.getAttribute('oktext') || 'OK';
    }

    set oktext(value) {
        this.setAttribute('oktext', value);
    }

    get canceltext() {
        return this.getAttribute('canceltext') || 'Cancel';
    }

    set canceltext(value) {
        this.setAttribute('canceltext', value);
    }

    connectedCallback() {
        this._remove = false;
        const popBodyEl = this.shadowRoot.getElementById("popbody-content");
        if ((this._type || this.type) === 'confirm') {
            // const iconEL = document.createElement('awc-icon');
            // iconEL.setAttribute("id", "popbody-type");
            // iconEL.classList.add("popbody-type");
            // iconEL.name = "question-circle";
            // iconEL.color = "var(--waringColor,#faad14)";
            // this.shadowRoot.prepend(iconEL);
            const footerEl = `<div class="popbody-footer">
                <awc-button id="btn-cancel">${this.canceltext}</awc-button>
                <awc-button id="btn-submit" type="primary">${this.oktext}</awc-button>
            </div>`;
            popBodyEl.innerHTML += footerEl;
        }

        if ((this._type || this.type) !== null) {
            this.titleEl = document.createElement("div");
            this.titleEl.setAttribute("id", "title");
            this.titleEl.classList.add("popbody-title");
            this.titleEl.innerHTML = this.title;

            this.btnCloseEl = document.createElement("awc-icon");
            this.btnCloseEl.setAttribute("id", "btn-close");
            this.btnCloseEl.classList.add("btn-close");
            this.btnCloseEl.path = "M563.8 512l262.5-312.9c4.4-5.2 0.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9c-4.4 5.2-0.7 13.1 6.1 13.1h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z";
            popBodyEl.prepend(this.btnCloseEl);
            popBodyEl.prepend(this.titleEl);
        }

        if (this.type) {
            this.titleEl = this.shadowRoot.getElementById('title');
            this.btnCloseEl = this.shadowRoot.getElementById('btn-close');
        }
        if (this.type == 'confirm') {
            this.btnCancelEl = this.shadowRoot.getElementById('btn-cancel');
            this.btnSubmitEl = this.shadowRoot.getElementById('btn-submit');
        }
        this.addEventListener('transitionend', (ev) => {
            if (ev.propertyName === 'transform' && this.open) {
                if (this.type == 'confirm') {
                    this.btnSubmitEl.focus();
                }
                if (this.type == 'pane') {
                    this.btnCloseEl.focus();
                }
                this.dispatchEvent(new CustomEvent('open'));
            }
        })
        this.addEventListener('transitionend', (ev) => {
            if (ev.propertyName === 'transform' && !this.open) {
                if (this._remove) {
                    this.parentNode.removeChild(this);
                }
                this.dispatchEvent(new CustomEvent('close'));
            }
        })
        this.addEventListener('click', (ev) => {
            if (ev.target.closest('[autoclose]')) {
                this.open = false;
                window.xyActiveElement.focus();
            }
        })
        if (this.type) {
            this.btnCloseEl.addEventListener('click', () => {
                this.open = false
                window.xyActiveElement.focus();
            })
        }
        if (this.type == 'confirm') {
            this.btnCancelEl.addEventListener('click', async () => {
                this.dispatchEvent(new CustomEvent('cancel'));
                this.open = false;
                window.xyActiveElement.focus();
            })
            this.btnSubmitEl.addEventListener('click', () => {
                this.dispatchEvent(new CustomEvent('submit'));
                this.open = false;
                window.xyActiveElement.focus();
            })
        }
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name == 'title' && this.titleEl) {
            if (newValue !== null) {
                this.titleEl.innerHTML = newValue;
            }
        }
        if (name == 'oktext' && this.btnSubmitEl) {
            if (newValue !== null) {
                this.btnSubmitEl.innerHTML = newValue;
            }
        }
        if (name == 'canceltext' && this.btnCancelEl) {
            if (newValue !== null) {
                this.btnCancelEl.innerHTML = newValue;
            }
        }
    }

    _render() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = (_awc_popbody_html__WEBPACK_IMPORTED_MODULE_1___default());
    }
}

if (!customElements.get('awc-popbody')) {
    customElements.define('awc-popbody', AwcPopBody);
}

/***/ }),

/***/ "./components/awc-popover/awc-popover.js":
/*!***********************************************!*\
  !*** ./components/awc-popover/awc-popover.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _awc_button_awc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../awc-button/awc-button */ "./components/awc-button/awc-button.js");
/* harmony import */ var _awc_popbody__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./awc-popbody */ "./components/awc-popover/awc-popbody.js");
/* harmony import */ var _awc_popover_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./awc-popover.html */ "./components/awc-popover/awc-popover.html");
/* harmony import */ var _awc_popover_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_awc_popover_html__WEBPACK_IMPORTED_MODULE_2__);






class AwcPopover extends HTMLElement {
	static get observedAttributes() {
		return ['title', 'oktext', 'canceltext', 'type']
	}
	constructor() {
		super();
		this.setpop = this.setpop.bind(this);
		this._render();
	}

	get title() {
		return this.getAttribute('title') || 'Title';
	}

	set title(value) {
		this.setAttribute('title', value);
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

	set type(value) {
		this.setAttribute('type', value);
	}

	get dir() {
		return this.getAttribute('dir');
	}

	set dir(value) {
		this.setAttribute('dir', value);
	}

	get oktext() {
		return this.getAttribute('oktext');
	}

	set oktext(value) {
		this.setAttribute('oktext', value);
	}

	get canceltext() {
		return this.getAttribute('canceltext');
	}

	set canceltext(value) {
		this.setAttribute('canceltext', value);
	}

	get trigger() {
		return this.getAttribute('trigger');
	}

	set trigger(value) {
		return this.setAttribute('trigger', value);
	}

	get content() {
		return this.getAttribute('content');
	}

	set content(value) {
		this.setAttribute('content', value);
	}

	show(ev) {
		this.popBodyEl = this.querySelector('awc-popbody');
		if (!this.disabled) {
			if (!this.popBodyEl) {
				this.popBodyEl = new _awc_popbody__WEBPACK_IMPORTED_MODULE_1__.default(this.type);
				this.popBodyEl.type = this.type;
				this.appendChild(this.popBodyEl);
				this.popBodyEl.title = this.title || '';
				this.popBodyEl.innerHTML = this.content || '';
				if (this.type == 'confirm') {
					this.popBodyEl.oktext = this.oktext || 'OK';
					this.popBodyEl.canceltext = this.canceltext || 'Cancel';
					this.popBodyEl.onsubmit = () =>
						this.dispatchEvent(new CustomEvent('submit'));
					this.popBodyEl.oncancel = () =>
						this.dispatchEvent(new CustomEvent('cancel'));
				}
			}
			if (this.trigger === 'contextmenu') {
				const { x, y } = this.getBoundingClientRect();
				this.popBodyEl.style.setProperty('--x', ev.clientX - x + 'px');
				this.popBodyEl.style.setProperty('--y', ev.clientY - y + 'px');
				this.popBodyEl.open = true;
			} else {
				const path = ev.path || (ev.composedPath && ev.composedPath());
				if (!path.includes(this.popBodyEl)) {
					window.xyActiveElement = document.activeElement;
					this.popBodyEl.open = !this.popBodyEl.open;
				}
			}
		} else {
			(this.popBodyEl || this).dispatchEvent(new CustomEvent('submit'));
		}
		return this.popBodyEl;
	}

	setpop(ev) {
		const path = ev.path || (ev.composedPath && ev.composedPath());
		if (
			(this.popBodyEl &&
				!path.includes(this.popBodyEl) &&
				!path.includes(this.children[0])) ||
			(this.trigger === 'contextmenu' &&
				!path.includes(this.popBodyEl) &&
				ev.which == '1')
		) {
			this.popBodyEl.open = false;
		}
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name == 'title' && this.popBodyEl) {
			if (newValue !== null) {
				this.popBodyEl.title = newValue;
			}
		}
		if (name == 'oktext' && this.popBodyEl) {
			if (newValue !== null) {
				this.popBodyEl.oktext = newValue;
			}
		}
		if (name == 'canceltext' && this.popBodyEl) {
			if (newValue !== null) {
				this.popBodyEl.canceltext = newValue;
			}
		}
	}

	connectedCallback() {
		this.popBodyEl = this.querySelector('awc-popbody');
		if (!(this.trigger && this.trigger !== 'click')) {
			this.addEventListener('click', this.show);
		}
		if (this.trigger === 'contextmenu') {
			this.addEventListener('contextmenu', (ev) => {
				ev.preventDefault();
				const path = ev.path || (ev.composedPath && ev.composedPath());
				if (!path.includes(this.popBodyEl)) {
					this.show(ev);
				}
			})
		}
		document.addEventListener('mousedown', this.setpop);
	}

	disconnectedCallback() {
		document.removeEventListener('mousedown', this.popBodyEl);
	}

	_render() {
		const shadowRoot = this.attachShadow({ mode: 'open' });
		shadowRoot.innerHTML = (_awc_popover_html__WEBPACK_IMPORTED_MODULE_2___default());
	}
}

if (!customElements.get('awc-popover')) {
	customElements.define('awc-popover', AwcPopover)
}


/***/ }),

/***/ "./components/awc-radio/awc-radio.js":
/*!*******************************************!*\
  !*** ./components/awc-radio/awc-radio.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AwcRadio)
/* harmony export */ });
/* harmony import */ var _awc_radio_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./awc-radio.html */ "./components/awc-radio/awc-radio.html");
/* harmony import */ var _awc_radio_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_awc_radio_html__WEBPACK_IMPORTED_MODULE_0__);




class AwcRadio extends HTMLElement {
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

	set name(value) {
		this.setAttribute('name', value);
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
		shadowRoot.innerHTML = (_awc_radio_html__WEBPACK_IMPORTED_MODULE_0___default());
	}
}

if (!customElements.get('awc-radio')) {
	customElements.define('awc-radio', AwcRadio);
}


/***/ }),

/***/ "./components/awc-rate/awc-rate.js":
/*!*****************************************!*\
  !*** ./components/awc-rate/awc-rate.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AwcRate)
/* harmony export */ });
/* harmony import */ var _awc_tooltip_awc_tooltip_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../awc-tooltip/awc-tooltip.js */ "./components/awc-tooltip/awc-tooltip.js");
/* harmony import */ var _awc_icon_awc_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../awc-icon/awc-icon */ "./components/awc-icon/awc-icon.js");
/* harmony import */ var _awc_rate_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./awc-rate.html */ "./components/awc-rate/awc-rate.html");
/* harmony import */ var _awc_rate_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_awc_rate_html__WEBPACK_IMPORTED_MODULE_2__);






class AwcRate extends HTMLElement {
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

	set defaultvalue(value) {
		this.setAttribute('defaultvalue', value);
	}

	get icon() {
		return this.getAttribute('icon');
	}

	set icon(value) {
		this.setAttribute('icon', value);
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
		shadowRoot.innerHTML = (_awc_rate_html__WEBPACK_IMPORTED_MODULE_2___default());
	}
}

if (!customElements.get('awc-rate')) {
	customElements.define('awc-rate', AwcRate);
}


/***/ }),

/***/ "./components/awc-slider/awc-slider.js":
/*!*********************************************!*\
  !*** ./components/awc-slider/awc-slider.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AwcSlider)
/* harmony export */ });
/* harmony import */ var _awc_tooltip_awc_tooltip_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../awc-tooltip/awc-tooltip.js */ "./components/awc-tooltip/awc-tooltip.js");
/* harmony import */ var _awc_slider_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./awc-slider.html */ "./components/awc-slider/awc-slider.html");
/* harmony import */ var _awc_slider_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_awc_slider_html__WEBPACK_IMPORTED_MODULE_1__);





class AwcSlider extends HTMLElement {
	static get observedAttributes() {
		return ['min', 'max', 'step', 'disabled', 'showtips', 'suffix'];
	}

	constructor() {
		super();
		this._render();
	}

	get value() {
		return Number(this.sliderEl.value);
	}

	set value(value) {
		this.sliderEl.value = value;
		this.sliderTooltipEl.style.setProperty(
			'--percent',
			(this.value - this.min) / (this.max - this.min)
		);
		if (this.showtips && !this.disabled) {
			this.sliderTooltipEl.tips = this.value;
		} else {
			this.sliderTooltipEl.tips = '';
		}
	}

	get suffix() {
		return this.getAttribute('suffix') || '';
	}

	set suffix(value) {
		this.setAttribute('suffix', value);
	}

	get prefix() {
		return this.getAttribute('prefix') || '';
	}

	set prefix(value) {
		this.setAttribute('prefix', value);
	}

	get min() {
		return this.getAttribute('min') || 0;
	}

	set min(value) {
		this.setAttribute('min', value);
	}

	get max() {
		return this.getAttribute('max') || 100;
	}

	set max(value) {
		this.setAttribute('max', value);
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

	get showtips() {
		return this.getAttribute('showtips') !== null;
	}

	set showtips(value) {
		if (value === null || value === false) {
			this.removeAttribute('showtips');
		} else {
			this.setAttribute('showtips', '');
		}
	}

	get step() {
		return this.getAttribute('step') || 1;
	}

	set step(value) {
		this.setAttribute('step', value);
	}

	get defaultvalue() {
		return this.getAttribute('defaultvalue') || 0;
	}

	set defaultvalue(value) {
		this.setAttribute('defaultvalue', value);
	}

	get vertical() {
		return this.getAttribute('vertical') !== null;
	}

	set vertical(value) {
		this.setAttribute('vertical', value);
	}

	focus() {
		this.sliderEl.focus();
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (this.sliderEl && oldValue !== newValue && !this._oninput) {
			if (name == 'disabled') {
				if (newValue !== null) {
					this.sliderEl.setAttribute('disabled', 'disabled');
				} else {
					this.sliderEl.removeAttribute('disabled');
				}
			} else {
				this.sliderEl[name] = newValue;
				this[name] = newValue;
				this.sliderTooltipEl.style.setProperty(
					'--percent',
					(this.value - this.min) / (this.max - this.min)
				);
				if (name === 'suffix') {
					this.sliderTooltipEl.suffix = newValue;
				}
			}
		}
	}

	connectedCallback() {
		this.sliderEl = this.shadowRoot.getElementById('slider');
		this.sliderEl.value = this.defaultvalue;
		this.sliderEl.min = this.min;
		this.sliderEl.max = this.max;
		this.sliderEl.step = this.step;
		if (this.disabled) {
			this.sliderEl.setAttribute('disabled', '');
		}
		this.sliderTooltipEl = this.shadowRoot.getElementById('slider-tooltip');
		this.sliderTooltipEl.dir = this.vertical ? 'right' : 'top';
		this.sliderTooltipEl.style = `--percent:${(this.defaultvalue - this.min) / (this.max - this.min)}`;
		this.sliderTooltipEl.tips = this.showtips && !this.disabled ? this.defaultvalue : '';
		this.sliderTooltipEl.suffix = this.suffix;
		this.sliderTooltipEl.prefix = this.prefix;

		if (this.vertical) {
			this.resizeObserver = new ResizeObserver((entries) => {
				for (let entry of entries) {
					const { height } = entry.contentRect;
					this.sliderTooltipEl.style.setProperty('--h', height + 'px');
				}
			});
			this.resizeObserver.observe(this);
		}
		this.sliderEl.addEventListener('input', (ev) => {
			this.value = this.sliderEl.value;
			this._oninput = true;
			ev.stopPropagation();
			this.dispatchEvent(
				new CustomEvent('input', {
					detail: {
						value: this.sliderEl.value,
					},
				})
			);
		});
		this.sliderEl.addEventListener('change', (ev) => {
			this.value = this.sliderEl.value;
			this._oninput = false;
			this.dispatchEvent(
				new CustomEvent('change', {
					detail: {
						value: this.sliderEl.value,
					},
				})
			);
		});
		this.addEventListener(
			'wheel',
			(ev) => {
				if (getComputedStyle(this.sliderEl).zIndex == 2) {
					ev.preventDefault();
					if (
						(ev.deltaY < 0 && !this.vertical) ||
						(ev.deltaY > 0 && this.vertical)
					) {
						this.value -= this.step * 5;
					} else {
						this.value += this.step * 5;
					}
					this.dispatchEvent(
						new CustomEvent('change', {
							detail: {
								value: this.value,
							},
						})
					);
				}
			},
			true
		)
	}

	disconnectedCallback() {
		if (this.vertical) {
			this.resizeObserver.unobserve(this);
		}
	}

	_render() {
		const shadowRoot = this.attachShadow({ mode: 'open' });
		shadowRoot.innerHTML = (_awc_slider_html__WEBPACK_IMPORTED_MODULE_1___default());
	}
}

if (!customElements.get('awc-slider')) {
	customElements.define('awc-slider', AwcSlider);
}


/***/ }),

/***/ "./components/awc-switch/awc-switch.js":
/*!*********************************************!*\
  !*** ./components/awc-switch/awc-switch.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AwcSwitch)
/* harmony export */ });
/* harmony import */ var _awc_switch_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./awc-switch.html */ "./components/awc-switch/awc-switch.html");
/* harmony import */ var _awc_switch_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_awc_switch_html__WEBPACK_IMPORTED_MODULE_0__);




class AwcSwitch extends HTMLElement {
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

	get name() {
		return this.getAttribute('name');
	}

	set name(value) {
		this.setAttribute("name", value);
	}

	focus() {
		this.switchEl.focus();
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name == 'disabled' && this.switchEl) {
			if (newValue !== null) {
				this.switchEl.setAttribute('disabled', 'disabled');
			} else {
				this.switchEl.removeAttribute('disabled');
			}
		}
		if (name == 'checked' && this.switchEl) {
			if (newValue !== null) {
				this.switchEl.checked = true;
			} else {
				this.switchEl.checked = false;
			}
		}
	}

	connectedCallback() {
		this.switchEl = this.shadowRoot.getElementById('switch');
		this.disabled = this.disabled;
		this.checked = this.checked;
		this.switchEl.addEventListener('change', (ev) => {
			this.checked = this.switchEl.checked;
			this.dispatchEvent(
				new CustomEvent('change', {
					detail: {
						checked: this.checked,
					},
				})
			);
		});
		this.switchEl.addEventListener('keydown', (ev) => {
			switch (ev.key) {
				case 'Enter':
					this.checked = !this.checked;
					break;
				default:
					break;
			}
		})
		this.switchEl.addEventListener('focus', (ev) => {
			ev.stopPropagation();
			if (!this._isfocus) {
				this.dispatchEvent(
					new CustomEvent('focus', {
						detail: {
							value: this.value,
						},
					})
				);
			}
		})
		this.switchEl.addEventListener('blur', (ev) => {
			ev.stopPropagation();
			if (getComputedStyle(this.switchEl).zIndex == 2) {
				this._isfocus = true;
			} else {
				this._isfocus = false;
				this.dispatchEvent(
					new CustomEvent('blur', {
						detail: {
							value: this.value,
						},
					})
				);
			}
		})
	}

	_render() {
		const shadowRoot = this.attachShadow({ mode: 'open' });
		shadowRoot.innerHTML = (_awc_switch_html__WEBPACK_IMPORTED_MODULE_0___default());
	}
}

if (!customElements.get('awc-switch')) {
	customElements.define('awc-switch', AwcSwitch);
}


/***/ }),

/***/ "./components/awc-tabs/awc-tab.js":
/*!****************************************!*\
  !*** ./components/awc-tabs/awc-tab.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _awc_tab_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./awc-tab.html */ "./components/awc-tabs/awc-tab.html");
/* harmony import */ var _awc_tab_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_awc_tab_html__WEBPACK_IMPORTED_MODULE_0__);




class AwcTab extends HTMLElement {
    static get observedAttributes() {
        return ['label', 'value', 'disabled', 'icon'];
    }
    constructor() {
        super();
        this._render();
    }

    get label() {
        return this.getAttribute('label') || '';
    }

    set label(value) {
        this.setAttribute('label', value);
    }

    get value() {
        return this.getAttribute('value');
    }

    set value(value) {
        this.setAttribute('value', value);
    }

    get disabled() {
        return this.getAttribute('disabled');
    }

    set disabled(value) {
        if (value === null || value === false) {
            this.removeAttribute('disabled');
        } else {
            this.setAttribute('disabled', value);
        }
    }

    get icon() {
        return this.getAttribute('icon');
    }

    set icon(value) {
        this.setAttribute('icon', value);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue && newValue !== undefined && this.parentNode) {
            if (name === 'label') {
                if (this.parentNode.updatalabel) {
                    this.parentNode.updatalabel(this.value, newValue);
                }
            }
            if (name === 'disabled') {
                if (this.parentNode.updatadisabled) {
                    this.parentNode.updatadisabled(this.value, newValue);
                }
            }
        }
    }

    _render() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = (_awc_tab_html__WEBPACK_IMPORTED_MODULE_0___default());
    }
}

if (!customElements.get('awc-tab')) {
    customElements.define('awc-tab', AwcTab);
}


/***/ }),

/***/ "./components/awc-tabs/awc-tabs.js":
/*!*****************************************!*\
  !*** ./components/awc-tabs/awc-tabs.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AwcTabs)
/* harmony export */ });
/* harmony import */ var _awc_button_awc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../awc-button/awc-button */ "./components/awc-button/awc-button.js");
/* harmony import */ var _awc_tab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./awc-tab */ "./components/awc-tabs/awc-tab.js");
/* harmony import */ var _awc_tabs_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./awc-tabs.html */ "./components/awc-tabs/awc-tabs.html");
/* harmony import */ var _awc_tabs_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_awc_tabs_html__WEBPACK_IMPORTED_MODULE_2__);






class AwcTabs extends HTMLElement {
	static get observedAttributes() {
		return ['activekey'];
	}

	constructor() {
		super();
		this._render();
	}

	get align() {
		return this.getAttribute('align') || 'start';
	}

	set align(value) {
		this.setAttribute('align', value);
		this._initTab();
	}

	get type() {
		return this.getAttribute('type') || 'text';
	}

	set type(value) {
		this.setAttribute('type', value);
	}

	get activekey() {
		return this.getAttribute('activekey');
	}

	set activekey(value) {
		this.setAttribute('activekey', value);
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name == 'activekey' && this.tabEl) {
			let active = this.tabPos[newValue];
			if (active === undefined) {
				this.activekey = this.slotsEl.assignedElements()[0].value;
				active = this.tabPos[this.activekey];
			}
			this.tablineEl.style = `width:${active.width}px;transform:translateX(${active.left}px)`;
			this.tabEl.style.transform = `translateX(${-active.index * 100}%)`;
			this.filterEl.textContent = `
            ::slotted(awc-tab:not([value="${this.activekey}"])){
                height:0;
                overflow:visible;
            }`;
			if (oldValue !== newValue) {
				this.navEl.parentNode.scrollLeft =
					active.left + active.width / 2 - this.navEl.parentNode.offsetWidth / 2;
				const pre = this.navEl.querySelector(`.nav-item.active`);
				if (pre) {
					pre.classList.remove('active');
				}
				const cur = this.navEl.querySelector(`.nav-item[data-key='${newValue}']`);
				cur.classList.add('active');
				cur.focus();
				if (this._init && oldValue !== null) {
					this.dispatchEvent(
						new CustomEvent('change', {
							detail: {
								key: this.activekey,
								index: active.index,
								label: active.label,
							},
						})
					);
				}
			}
		}
	}

	connectedCallback() {
		this.tabPos = {};
		this.navEl = this.shadowRoot.getElementById('nav');
		this.tabEl = this.shadowRoot.getElementById('tab-content');
		this.tablineEl = this.shadowRoot.getElementById('tab-line');
		this.slotsEl = this.shadowRoot.getElementById('slot');
		this.filterEl = this.shadowRoot.getElementById('filter');
		this.slotsEl.addEventListener('slotchange', () => {
			const slots = this.slotsEl.assignedElements();
			let html = '';
			slots.forEach((item, index) => {
				if (item.tagName === 'AWC-TAB') {
					if (item.value === null) {
						item.value = index;
					}
					html += `<awc-button class="nav-item ${
						item.value === this.activekey ? 'active' : ''
					}" icon=${item.icon} ${
						item.disabled !== null ? 'disabled' : ''
					} data-key=${item.value}>${item.label}</awc-button>`
				}
			});
			this.navEl.innerHTML = html;
			this._initTab();
			if (this.activekey === null) {
				this.activekey = slots[0].value;
			} else {
				this.activekey = this.activekey;
			}
			this._init = true;
		})
		this.navEl.addEventListener('click', (ev) => {
			const item = ev.target.closest('awc-button');
			if (item) {
				this.activekey = item.dataset.key;
			}
		})
		this.navEl.addEventListener('keydown', (ev) => {
			switch (ev.key) {
				case 'ArrowLeft':
					ev.preventDefault();
					this._movein(-1);
					break;
				case 'ArrowRight': 
					ev.preventDefault();
					this._movein(1);
					break;
				default:
					break;
			}
		});
	}

	_initTab() {
		const items = this.navEl.querySelectorAll('.nav-item');
		Array.from(items).forEach((item, index) => {
			this.tabPos[item.dataset.key] = {
				index: index,
				width: item.offsetWidth,
				left: item.offsetLeft,
				label: item.textContent,
			};
		});
		if (this.activekey) {
			this.tablineEl.style = `width:${
				this.tabPos[this.activekey].width
			}px;transform:translateX(${this.tabPos[this.activekey].left}px)`;
		}
	}

	_movein(index) {
		const cur = this.navEl.querySelector(`.nav-item.active`);
		if (index > 0 && cur.nextElementSibling) {
			this.activekey = cur.nextElementSibling.dataset.key;
		}
		if (index < 0 && cur.previousElementSibling) {
			this.activekey = cur.previousElementSibling.dataset.key;
		}
	}

	_render() {
		const shadowRoot = this.attachShadow({ mode: 'open' });
		shadowRoot.innerHTML = (_awc_tabs_html__WEBPACK_IMPORTED_MODULE_2___default());
	}
}

if (!customElements.get('awc-tabs')) {
	customElements.define('awc-tabs', AwcTabs);
}



/***/ }),

/***/ "./components/awc-textarea/awc-textarea.js":
/*!*************************************************!*\
  !*** ./components/awc-textarea/awc-textarea.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _awc_input_awc_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../awc-input/awc-input */ "./components/awc-input/awc-input.js");




class AwcTextarea extends _awc_input_awc_input__WEBPACK_IMPORTED_MODULE_0__.default {
	constructor() {
		super({ multi: true })
	}
}

if (!customElements.get('awc-textarea')) {
	customElements.define('awc-textarea', AwcTextarea)
}


/***/ }),

/***/ "./components/awc-tooltip/awc-tooltip.js":
/*!***********************************************!*\
  !*** ./components/awc-tooltip/awc-tooltip.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AwcTooltip)
/* harmony export */ });
/* harmony import */ var _awc_tooltip_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./awc-tooltip.html */ "./components/awc-tooltip/awc-tooltip.html");
/* harmony import */ var _awc_tooltip_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_awc_tooltip_html__WEBPACK_IMPORTED_MODULE_0__);




class AwcTooltip extends HTMLElement {
	static get observedAttributes() {
		return ['color'];
	}

	constructor() {
		super();
		this._render();
	}

	get color() {
		return this.getAttribute('color') || '';
	}

    set color(value) {
		this.setAttribute('color', value);
	}

	get dir() {
		return this.getAttribute('dir') || 'top';
	}

    set dir(value) {
		this.setAttribute('dir', value);
	}

	get tips() {
		return this.getAttribute('tips');
	}

    set tips(value) {
		this.setAttribute('tips', value);
	}

	get type() {
		return this.getAttribute('tips');
	}

    set type(value) {
		this.setAttribute('type', value);
	}

	get show() {
		return this.getAttribute('show') !== null;
	}

    set show(value) {
		this.setAttribute('show', value);
	}

    get suffix() {
		return this.getAttribute('suffix') || '';
	}

	set suffix(value) {
		this.setAttribute('suffix', value);
	}

    get prefix() {
		return this.getAttribute('prefix') || '';
	}

	set prefix(value) {
		this.setAttribute('prefix', value);
	}

    attributeChangedCallback(name, oldValue, newValue) {
		if (name == 'color' && this.shadowRoot) {
			this.style.setProperty('--color', newValue);
		}
	}

	connectedCallback() {
		if (this.dir === 'auto') {
			const { left, top, width, height } = this.getBoundingClientRect();
			const w = document.body.scrollWidth;
			const h = document.body.scrollHeight;
			const TIP_SIZE = 50;
			if (top < TIP_SIZE) {
				this.dir = 'bottom';
			}
			if (h - top - height < TIP_SIZE) {
				this.dir = 'top';
			}
			if (left < TIP_SIZE) {
				this.dir = 'right';
			}
			if (w - left - width < TIP_SIZE) {
				this.dir = 'left';
			}
		}
	}

    _render() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
		shadowRoot.innerHTML = (_awc_tooltip_html__WEBPACK_IMPORTED_MODULE_0___default());
    }
}

if (!customElements.get('awc-tooltip')) {
	customElements.define('awc-tooltip', AwcTooltip);
}


/***/ }),

/***/ "./components/awc-button/awc-button.html":
/*!***********************************************!*\
  !*** ./components/awc-button/awc-button.html ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "<style>\n    :host {\n        position: relative;\n        display: inline-flex;\n        padding: .25em .625em;\n        box-sizing: border-box;\n        vertical-align: middle;\n        line-height: 1.8;\n        overflow: hidden;\n        align-items: center;\n        justify-content: center;\n        border: 1px solid var(--borderColor, rgba(0, 0, 0, .2));\n        font-size: 14px;\n        color: var(--fontColor, #333333);\n        border-radius: var(--borderRadius, .25em);\n        transition: background .3s, box-shadow .3s, border-color .3s, color .3s;\n    }\n    :host([disabled]),\n    :host([loading]) {\n        pointer-events: none;\n        opacity: .6;\n    }\n\n    :host([block]) {\n        display: flex;\n    }\n\n    :host([disabled]:not([type])) {\n        background: rgba(0, 0, 0, .1);\n    }\n\n    :host([disabled]) .btn,\n    :host([loading]) .btn {\n        cursor: not-allowed;\n        pointer-events: all;\n    }\n\n    :host(:not([type=\"primary\"]):not([disabled]):hover),\n    :host(:not([type=\"primary\"]):focus-within),\n    :host([type=\"flat\"][focus]) {\n        color: var(--themeColor, #42b983);\n        border-color: var(--themeColor, #42b983);\n    }\n\n    :host(:not([type=\"primary\"])) .btn::after {\n        background-image: radial-gradient(circle, var(--themeColor, #42b983) 10%, transparent 10.01%);\n    }\n\n    :host([type=\"primary\"]) {\n        color: #fff;\n        background: var(--themeBackground, var(--themeColor, #42b983));\n    }\n\n    :host([type=\"dashed\"]) {\n        border-style: dashed\n    }\n\n    :host([type=\"text\"]),\n    :host([type=\"primary\"]) {\n        border: 0;\n        padding: calc(.25em + 1px) calc(.625em + 1px);\n    }\n\n    :host([type=\"text\"]) .btn::before {\n        content: '';\n        position: absolute;\n        background: var(--themeColor, #42b983);\n        pointer-events: none;\n        left: 0;\n        right: 0;\n        top: 0;\n        bottom: 0;\n        opacity: 0;\n        transition: .3s;\n    }\n\n    :host([type=\"text\"]:not([disabled]):hover) .btn::before {\n        opacity: .1\n    }\n\n    :host(:not([disabled]):hover) {\n        z-index: 1\n    }\n\n    :host([type=\"text\"]:focus-within) .btn:before,\n    :host([type=\"text\"][focus]) .btn:before {\n        opacity: .2;\n    }\n\n    .btn {\n        background: none;\n        outline: 0;\n        border: 0;\n        position: absolute;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n        padding: 0;\n        user-select: none;\n        cursor: unset;\n    }\n\n    awc-loading {\n        margin-right: 0.35em;\n    }\n\n    ::-moz-focus-inner {\n        border: 0;\n    }\n\n    .btn:not([disabled]):active::after {\n        transform: translate(-50%, -50%) scale(0);\n        opacity: .3;\n        transition: 0s;\n    }\n\n    awc-icon {\n        margin-right: 0.35em;\n        transition: none;\n    }\n\n    :host(:empty) awc-icon {\n        margin: auto;\n    }\n\n    :host(:empty) {\n        padding: .65em;\n    }\n\n    :host([type=\"text\"]:empty),\n    :host([type=\"primary\"]:empty) {\n        padding: calc(.65em + 1px);\n    }\n\n    ::slotted(awc-icon) {\n        transition: none;\n    }\n\n    :host([href]) {\n        cursor: pointer;\n    }\n</style>\n<button class=\"btn\" id=\"btn\"></button>\n<slot></slot>";

/***/ }),

/***/ "./components/awc-checkbox/awc-checkbox.html":
/*!***************************************************!*\
  !*** ./components/awc-checkbox/awc-checkbox.html ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "<style>\n    :host {\n        display: inline-block;\n        font-size: 14px;\n        color: var(--fontColor, #333);\n        -webkit-tap-highlight-color: transparent;\n    }\n\n    :host([disabled]) {\n        pointer-events: none;\n        opacity: .6;\n    }\n\n    :host([disabled]) label {\n        pointer-events: all;\n        cursor: not-allowed;\n    }\n\n    #checkbox {\n        position: absolute;\n        clip: rect(0, 0, 0, 0);\n    }\n\n    :host(:focus-within) .cheked,\n    :host(:not([disabled])) label:hover .cheked {\n        border-color: var(--themeColor, #42b983);\n        z-index: 1;\n    }\n\n    :host(:focus-within) #checkbox,\n    :host(:active) #checkbox {\n        z-index: 2\n    }\n\n    :host([disabled]) .cheked {\n        background: rgba(0, 0, 0, .1);\n    }\n\n    label {\n        box-sizing: border-box;\n        cursor: pointer;\n        display: flex;\n        align-items: center;\n    }\n\n    .cheked {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        margin-right: .5em;\n        position: relative;\n        width: 1em;\n        height: 1em;\n        border: 0.0875em solid var(--borderColor, rgba(0, 0, 0, .2));\n        border-radius: 0.15em;\n        text-align: initial;\n        transition: .3s;\n    }\n\n    :host(:empty) .cheked {\n        margin-right: 0;\n    }\n\n    .cheked::before {\n        position: absolute;\n        content: '';\n        width: 74%;\n        height: 0.15em;\n        background: #fff;\n        transform: scale(0);\n        border-radius: 0.15em;\n        transition: .2s cubic-bezier(.12, .4, .29, 1.46) .1s;\n    }\n\n    .cheked::after {\n        position: absolute;\n        content: '';\n        width: 100%;\n        height: 100%;\n        background: var(--themeColor, #42b983);\n        border-radius: 50%;\n        opacity: .2;\n        transform: scale(0);\n        z-index: -1;\n        transition: .2s cubic-bezier(.12, .4, .29, 1.46) .1s;\n    }\n    .icon {\n        width: 100%;\n        height: 100%;\n        transform: scale(0);\n        transition: .2s cubic-bezier(.12, .4, .29, 1.46) .1s;\n    }\n\n    #checkbox:focus-visible+label .cheked::after {\n        transform: scale(2.5);\n    }\n\n    #checkbox:checked:not(:indeterminate)+label .cheked .icon {\n        transform: scale(1.5);\n    }\n\n    #checkbox:checked+label .cheked,\n    #checkbox:indeterminate+label .cheked {\n        border-color: transparent;\n        background-color: var(--themeColor, #42b983);\n    }\n\n    #checkbox:indeterminate+label .cheked::before {\n        transform: scale(1);\n    }\n</style>\n<input type=\"checkbox\" id=\"checkbox\">\n<label for=\"checkbox\">\n    <span class=\"cheked\"><svg class=\"icon\" style=\"fill: #fff;overflow: hidden;\" viewBox=\"0 0 1024 1024\"\n            version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"1408\">\n            <path\n                d=\"M700.7232 331.008l73.984 70.7584-329.5744 344.7808-192.6656-190.1056 71.936-72.9088L443.0336 600.576z\">\n            </path>\n        </svg></span>\n    <slot></slot>\n</label>";

/***/ }),

/***/ "./components/awc-dialog/awc-dialog.html":
/*!***********************************************!*\
  !*** ./components/awc-dialog/awc-dialog.html ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "<style>\n    :host {\n        position: fixed;\n        display: flex;\n        left: 0;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        z-index: -1;\n        background: var(--shadowBackground, rgba(0, 0, 0, .3));\n        visibility: hidden;\n        opacity: 0;\n        transition: .3s;\n    }\n\n    :host([open]) {\n        opacity: 1;\n        z-index: 50;\n        visibility: visible;\n    }\n\n    .dialog {\n        display: flex;\n        position: relative;\n        min-width: 360px;\n        margin: auto;\n        box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);\n        box-sizing: border-box;\n        max-width: calc(100vw - 20px);\n        max-height: calc(100vh - 20px);\n        border-radius: 3px;\n        background-color: #fff;\n        opacity: 0;\n        transform: scale(0.5);\n        transition: .3s cubic-bezier(.645, .045, .355, 1);\n    }\n\n    .dialog-content {\n        box-sizing: border-box;\n        display: flex;\n        width: 100%;\n        padding: 0 20px;\n        flex: 1;\n        flex-direction: column;\n    }\n\n    :host([open]) .dialog {\n        opacity: 1;\n        transform: scale(1);\n    }\n\n    .dialog-title {\n        line-height: 30px;\n        padding: 15px 30px 0 0;\n        font-weight: 700;\n        font-size: 14px;\n        color: #4c5161;\n        user-select: none;\n        cursor: default;\n    }\n\n    .dialog-body {\n        flex: 1;\n        overflow: auto;\n        min-height: 50px;\n        padding: 10px 0;\n    }\n\n    .dialog-footer {\n        padding: 3px 0 20px 0;\n        margin-top: -3px;\n        text-align: right;\n    }\n\n    .btn-close {\n        position: absolute;\n        right: 10px;\n        top: 10px;\n        border: 0;\n    }\n\n    .dialog-footer awc-button {\n        margin-left: 10px;\n    }\n\n    .dialog-icon {\n        display: none;\n        margin: 15px -10px 0 20px;\n        width: 30px;\n        height: 30px;\n        font-size: 24px;\n    }\n\n    .dialog-icon[name] {\n        display: flex;\n    }\n\n    #btn-cancel {\n        visibility: hidden;\n    }\n\n    :host(:not([type])) .dialog-icon {\n        display: none;\n    }\n\n    :host([type=\"confirm\"]) #btn-cancel {\n        visibility: visible;\n    }\n\n    :host(:empty) .dialog-body {\n        min-height: 0;\n    }\n</style>\n<div class=\"dialog\">\n    <awc-icon id=\"dialog-icon\" class=\"dialog-icon\"></awc-icon>\n    <div class=\"dialog-content\">\n        <div class=\"dialog-title\" id=\"title\"></div>\n        <awc-button class=\"btn-close\" id=\"btn-close\" icon=\"close\"></awc-button>\n        <div class=\"dialog-body\">\n            <slot></slot>\n        </div>\n        <div class=\"dialog-footer\">\n            <awc-button id=\"btn-cancel\"></awc-button>\n            <awc-button id=\"btn-submit\" type=\"primary\"></awc-button>\n        </div>\n    </div>\n</div>";

/***/ }),

/***/ "./components/awc-dropdown/awc-dropdown.html":
/*!***************************************************!*\
  !*** ./components/awc-dropdown/awc-dropdown.html ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "<style>\n    :host {\n        display: inline-block;\n        font-size: 14px;\n        border-radius: var(--borderRadius, .25em);\n    }\n\n    :host([block]) {\n        display: block;\n    }\n\n    :host(:not([disabled]):not([type=\"primary\"]):focus-within) .select,\n    :host(:not([disabled]):not([type=\"primary\"]):hover) .select {\n        border-color: var(--themeColor, #42b983);\n        color: var(--themeColor, #42b983);\n    }\n\n    :host([search]:focus-within:not([disabled])) .select,\n    :host([search]:not([disabled]):hover) .select {\n        color: var(--themeColor, #42b983);\n    }\n\n    :host([disabled]) {\n        pointer-events: none;\n    }\n\n    :host(:focus-within) awc-popover,\n    :host(:active) awc-popover {\n        z-index: 2;\n    }\n\n    awc-tooltip {\n        display: block;\n        width: 100%;\n        height: 100%;\n        border-radius: inherit;\n    }\n\n    .select:not([type=\"primary\"]) {\n        display: flex;\n        width: 100%;\n        height: 100%;\n        font-size: inherit;\n        color: currentColor;\n        border-radius: inherit;\n    }\n\n    :host([search]) .select {\n        color: currentColor;\n    }\n\n    awc-tooltip[show=show] {\n        --themeColor: var(--errorColor, #f4615c);\n        --borderColor: var(--errorColor, #f4615c);\n    }\n\n    :host([invalid]) .select:not([type=\"primary\"]) {\n        color: var(--errorColor, #f4615c);\n    }\n\n    .select span {\n        flex: 1;\n        text-align: left;\n    }\n\n    awc-input::after {\n        content: '';\n        position: absolute;\n        left: 0;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        cursor: default;\n        pointer-events: none;\n    }\n\n    .select[readonly]::after {\n        pointer-events: all;\n    }\n\n    .arrow {\n        position: relative;\n        font-size: .9em;\n        transform: scaleY(.8);\n        margin-left: .5em;\n        pointer-events: none;\n        width: 1em;\n        height: 1em;\n        fill: currentColor;\n        transition: .3s transform cubic-bezier(.645, .045, .355, 1);\n    }\n\n    :host([search]) .arrow {\n        transition: color .3s cubic-bezier(.645, .045, .355, 1), .3s transform cubic-bezier(.645, .045, .355, 1);\n    }\n\n    awc-popover[open] .arrow {\n        transform: scaleY(-.8);\n    }\n\n    awc-popover {\n        display: block;\n        height: inherit;\n        border-radius: inherit;\n    }\n\n    awc-popbody {\n        min-width: 100%;\n        overflow: auto;\n        max-height: 50vh;\n        scroll-behavior: smooth;\n    }\n\n    :host([search]) awc-popbody::before {\n        display: none;\n        box-sizing: border-box;\n        width: 100%;\n        content: 'Did not match any options';\n        padding: .25em .625em;\n        line-height: 1.8;\n        color: var(--fontColor, #333);\n        white-space: nowrap;\n        opacity: .5;\n    }\n\n    :host([empty]) awc-popbody::before {\n        display: block;\n    }\n</style>\n<style id=\"filter\"></style>\n<awc-popover id=\"root\">\n    <awc-input id=\"selectInput\" class=\"select\" debounce=\"200\" readonly>\n        <svg class=\"arrow\" viewBox=\"0 0 1024 1024\">\n            <path\n                d=\"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3 0.1-12.7-6.4-12.7z\">\n            </path>\n        </svg>\n    </awc-input>\n    <awc-button id=\"selectButton\"  class=\"select\" debounce=\"200\" readonly>\n        <span id=\"value\"></span>\n        <svg class=\"arrow\" viewBox=\"0 0 1024 1024\">\n            <path\n                d=\"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3 0.1-12.7-6.4-12.7z\">\n            </path>\n        </svg>\n    </awc-button>\n    <awc-popbody id=\"options\">\n        <slot id=\"slot\"></slot>\n    </awc-popbody>\n</awc-popover>";

/***/ }),

/***/ "./components/awc-form/awc-form-item.html":
/*!************************************************!*\
  !*** ./components/awc-form/awc-form-item.html ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<style>\n    :host {\n        display: contents;\n    }\n\n    label {\n        color: var(--fontColor, #333);\n    }\n\n    label.required:not(:empty)::before {\n        content: '*';\n        color: var(--errorColor, #f4615c);\n    }\n\n    .item {\n        justify-self: stretch;\n    }\n</style>\n<label></label>\n<div class=\"item\">\n    <slot></slot>\n    </slot>\n</div>";

/***/ }),

/***/ "./components/awc-form/awc-form.html":
/*!*******************************************!*\
  !*** ./components/awc-form/awc-form.html ***!
  \*******************************************/
/***/ ((module) => {

module.exports = "<style>\n    :host {\n        display: block;\n    }\n\n    form {\n        display: grid;\n        grid-template-columns: auto 1fr;\n        grid-gap: .8em;\n        align-items: center;\n        justify-items: end;\n    }\n\n    :host([type=full]) form {\n        grid-template-columns: 1fr;\n        justify-items: start;\n    }\n\n    :host([type=none]) form {\n        display: contents;\n    }\n\n    :host(:not([type=full])) ::slotted(:not(awc-form-item)) {\n        justify-self: stretch;\n        grid-column: span 2;\n    }\n</style>\n<form id=\"form\">\n    <slot></slot>\n</form>";

/***/ }),

/***/ "./components/awc-icon/awc-icon.html":
/*!*******************************************!*\
  !*** ./components/awc-icon/awc-icon.html ***!
  \*******************************************/
/***/ ((module) => {

module.exports = "<style>\n    :host {\n        font-size: inherit;\n        display: inline-block;\n        transition: .3s;\n    }\n\n    .icon {\n        display: block;\n        width: 1em;\n        height: 1em;\n        margin: auto;\n        fill: currentColor;\n        overflow: hidden;\n    }\n\n    :host([loading]) {\n        animation: rotate 1.4s linear infinite;\n    }\n\n    @keyframes rotate {\n        to {\n            transform: rotate(360deg);\n        }\n    }\n</style>\n<svg class=\"icon\" id=\"icon\" aria-hidden=\"true\">\n    <path id=\"path\"></path>\n    <use id=\"use\"></use>\n</svg>";

/***/ }),

/***/ "./components/awc-img/awc-img.html":
/*!*****************************************!*\
  !*** ./components/awc-img/awc-img.html ***!
  \*****************************************/
/***/ ((module) => {

module.exports = "<style>\n    :host {\n        display: inline-block;\n        position: relative;\n        vertical-align: top;\n        overflow: hidden;\n        background: #eee;\n        font-size: 14px;\n        color: #666;\n    }\n\n    :host([alt]:not([default]))::before {\n        content: attr(alt);\n        position: absolute;\n        color: #fff;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        z-index: 1;\n        line-height: 1.5;\n        font-size: 14px;\n        padding: 5px 10px;\n        background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, .5));\n        transform: translateY(100%);\n        transition: .3s;\n    }\n\n    :host([alt]:hover)::before {\n        transform: translateY(0);\n    }\n\n    :host([ratio*=\"/\"]) {\n        width: 100%;\n        height: auto !important;\n    }\n\n    :host([ratio*=\"/\"]) img {\n        position: absolute;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n    }\n\n    :host([ratio*=\"/\"]) .placeholder {\n        position: relative;\n        padding-top: 100%;\n    }\n\n    img {\n        box-sizing: border-box;\n        color: transparent;\n        display: inline-block;\n        width: inherit;\n        height: inherit;\n        vertical-align: top;\n        border: 0;\n        opacity: 0;\n        background: inherit;\n        transform: scale(0);\n        object-fit: cover;\n        transition: .3s;\n    }\n\n    img::before {\n        content: '';\n        left: 0;\n        top: 0;\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        background: inherit;\n        z-index: 1;\n    }\n\n    :host img[src] {\n        opacity: 1;\n        transform: scale(1);\n    }\n\n    :host(:not([error]):not([default]):hover) img[src],\n    :host(:focus-within) img[src] {\n        transform: scale(1.1);\n    }\n\n    :host([fit=\"cover\"]) img {\n        object-fit: cover;\n    }\n\n    :host([fit=\"fill\"]) img {\n        object-fit: fill;\n    }\n\n    :host([fit=\"contain\"]) img {\n        object-fit: contain;\n    }\n\n    .placeholder {\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        box-sizing: border-box;\n        z-index: -1;\n        transition: .3s;\n        background: inherit;\n        visibility: hidden;\n    }\n\n    :host([error]) .placeholder {\n        visibility: visible;\n        z-index: 2;\n    }\n\n    :host([error]) img {\n        padding: 0 20px;\n        min-width: 100px;\n        min-height: 100px;\n        transform: none;\n    }\n\n    .loading {\n        position: absolute;\n        left: 50%;\n        top: 50%;\n        z-index: 3;\n        transform: translate(-50%, -50%);\n        pointer-events: none;\n        opacity: 1;\n        transition: .3s;\n    }\n\n    img[src]+.loading,\n    :host([error]) .loading {\n        opacity: 0;\n        visibility: hidden;\n    }\n\n    .placeholder awc-icon {\n        font-size: 1.15em;\n        margin-right: .4em;\n    }\n\n    .placeholder-icon {\n        position: absolute;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        left: 0;\n        right: 0;\n        top: 50%;\n        transform: translateY(-50%);\n    }\n\n    .view {\n        position: absolute;\n        z-index: 3;\n        left: 50%;\n        top: 50%;\n        transform: translate(-50%, -50%) scale(2);\n        opacity: 0;\n        color: #fff;\n        display: none;\n        font-size: 40px;\n        transition: .3s;\n        pointer-events: none;\n    }\n\n    :host(:focus-within) .view {\n        opacity: 1;\n        transform: translate(-50%, -50%) scale(1);\n    }\n\n    .animation .shape {\n        border-radius: 50%;\n        background: var(--themeBackground, var(--themeColor, #42b983));\n    }\n\n    .animation {\n        width: 2em;\n        height: 2em;\n        display: grid;\n        grid-template-columns: repeat(2, 1fr);\n        grid-gap: .7em;\n        transform: rotate(45deg);\n        animation: rotation 1s infinite;\n    }\n\n    .shape1 {\n        animation: animation4shape1 0.3s ease 0s infinite alternate;\n    }\n\n    @keyframes rotation {\n        from {\n            transform: rotate(0deg);\n        }\n\n        to {\n            transform: rotate(360deg);\n        }\n    }\n\n    @keyframes animation4shape1 {\n        from {\n            transform: translate(0, 0);\n        }\n\n        to {\n            transform: translate(5px, 5px);\n        }\n    }\n\n    .shape2 {\n        opacity: .8;\n        animation: animation4shape2 0.3s ease 0.3s infinite alternate;\n    }\n\n    @keyframes animation4shape2 {\n        from {\n            transform: translate(0, 0);\n        }\n\n        to {\n            transform: translate(-5px, 5px);\n        }\n    }\n\n    .shape3 {\n        opacity: .6;\n        animation: animation4shape3 0.3s ease 0.3s infinite alternate;\n    }\n\n    @keyframes animation4shape3 {\n        from {\n            transform: translate(0, 0);\n        }\n\n        to {\n            transform: translate(5px, -5px);\n        }\n    }\n\n    .shape4 {\n        opacity: .4;\n        animation: animation4shape4 0.3s ease 0s infinite alternate;\n    }\n\n    @keyframes animation4shape4 {\n        from {\n            transform: translate(0, 0);\n        }\n\n        to {\n            transform: translate(-5px, -5px);\n        }\n    }\n</style>\n<div class=\"placeholder\" id=\"placeholder\">\n    <div class=\"placeholder-icon\">\n        <awc-icon\n            path=\"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32z m-40 632H136v-39.9l138.5-164.3 150.1 178L658.1 489 888 761.6V792z m0-129.8L664.2 396.8c-3.2-3.8-9-3.8-12.2 0L424.6 666.4l-144-170.7c-3.2-3.8-9-3.8-12.2 0L136 652.7V232h752v430.2z\">\n        </awc-icon>$\n        <div id=\"alt\"></div>\n    </div>\n</div>\n<img />\n<div class=\"loading\">\n    <div class=\"animation\">\n        <div class=\"shape shape1\"></div>\n        <div class=\"shape shape2\"></div>\n        <div class=\"shape shape3\"></div>\n        <div class=\"shape shape4\"></div>\n    </div>\n</div>";

/***/ }),

/***/ "./components/awc-input/awc-input.html":
/*!*********************************************!*\
  !*** ./components/awc-input/awc-input.html ***!
  \*********************************************/
/***/ ((module) => {

module.exports = "<style>\n    :host {\n        box-sizing: border-box;\n        display: inline-block;\n        border: 1px solid var(--borderColor, rgba(0, 0, 0, .2));\n        border-radius: var(--borderRadius, .25em);\n        line-height: 1.8;\n        transition: border-color .3s, box-shadow .3s;\n        padding: .25em .625em;\n        color: var(--fontColor, #333);\n        font-size: 14px;\n    }\n\n    :host([block]) {\n        display: block\n    }\n\n    awc-tooltip[show=show] {\n        color: var(--errorColor, #f4615c);\n    }\n\n    :host([invalid]) {\n        --themeColor: var(--errorColor, #f4615c);\n        border-color: var(--errorColor, #f4615c);\n    }\n\n    :host([invalid]) awc-icon {\n        color: var(--errorColor, #f4615c);\n    }\n\n    :host(:focus-within:not([disabled])),\n    :host(:not([disabled]):hover) {\n        border-color: var(--themeColor, #42b983);\n    }\n\n    :host([disabled]) {\n        opacity: .8;\n        cursor: not-allowed;\n    }\n\n    :host([disabled]) awc-tooltip {\n        pointer-events: none;\n        background: rgba(0, 0, 0, .1);\n    }\n\n    :host([label]) .input::placeholder {\n        color: transparent;\n    }\n\n    :host .input::placeholder {\n        color: #999;\n    }\n\n    :host(awc-textarea) {\n        line-height: 1.5;\n        padding-right: .25em;\n    }\n\n    awc-tooltip {\n        display: flex;\n        width: 100%;\n        height: 100%;\n        align-items: center;\n        margin: -.25em -.625em;\n        padding: .25em .625em;\n        font-family: inherit;\n        transition: .3s background-color;\n    }\n\n    :host(awc-textarea) awc-tooltip {\n        margin-right: -.25em;\n        padding-right: .25em;\n        align-items: flex-start;\n    }\n\n    .input {\n        padding: 0;\n        text-align: inherit;\n        color: currentColor;\n        border: 0;\n        outline: 0;\n        line-height: inherit;\n        font-size: inherit;\n        font-family: inherit;\n        flex: 1;\n        min-width: 0;\n        -webkit-appearance: none;\n        -moz-appearance: textfield;\n        background: none;\n        overflow-x: hidden;\n        transition: color .3s;\n        animation: removeBg 0s forwards;\n    }\n\n    :host(awc-textarea) .input {\n        margin: 0;\n    }\n\n    input[type=\"number\"]::-webkit-inner-spin-button {\n        display: none;\n    }\n\n    ::-moz-focus-inner,\n    ::-moz-focus-outer {\n        border: 0;\n        outline: 0;\n    }\n\n    :host([showtips]) {\n        pointer-events: all;\n    }\n\n    .input-label {\n        pointer-events: none;\n        margin-left: -0.14em;\n        position: absolute;\n        transition: transform .3s, color .3s, background-color .3s;\n        transform-origin: left;\n        padding: 0 0.14em;\n        color: #999;\n    }\n\n    .input:not(:placeholder-shown)~.input-label,\n    .input:focus~.input-label {\n        transform: translateY(calc(-50% - 0.43em)) scale(0.8);\n        background: #fff;\n    }\n\n    .input:-moz-ui-invalid {\n        box-shadow: none;\n    }\n\n    .input::-ms-reveal {\n        display: none;\n    }\n\n    .icon-pre {\n        display: flex;\n        margin-right: 0.25em;\n        color: #999;\n    }\n\n    :host(awc-textarea) .icon-pre {\n        height: 1.5em;\n    }\n\n    .btn-right {\n        width: 2em;\n        height: 2em;\n        margin: -.25em -.5em -.25em .25em;\n        padding: 0;\n        color: #999;\n        font-size: inherit;\n    }\n\n    .btn-number {\n        display: flex;\n        flex-direction: column;\n        width: 1.5em;\n        visibility: hidden;\n        transition: 0s;\n    }\n\n    .btn-number awc-button {\n        display: flex;\n        color: #999;\n        border-radius: 0;\n        width: 100%;\n        flex: 1;\n        padding: 0;\n        font-size: .8em;\n        transition: .2s;\n    }\n\n    .btn-number awc-button:hover {\n        flex: 1.5;\n    }\n\n    awc-button:not([disabled]):hover,\n    awc-button:not([disabled]):focus-within {\n        color: var(--themeColor, #42b983);\n    }\n\n    :host(:focus-within:not([disabled])) .icon-pre,\n    :host(:not([disabled]):hover) .icon-pre,\n    :host(:not([disabled]):hover) .input-label,\n    :host(:focus-within:not([disabled])) .input-label {\n        color: var(--themeColor, #42b983);\n    }\n\n    :host(:focus-within:not([disabled])) .btn-number,\n    :host(:not([disabled]):hover) .btn-number {\n        visibility: visible;\n    }\n\n    @keyframes removeBg {\n        to {\n            background: transparent;\n        }\n    }\n</style>\n<awc-tooltip id=\"input-tooltip\" type=\"error\">\n    <!-- if multi is true, remove input, else remove textarea -->\n    <textarea id=\"textarea\" class=\"input\" type=\"text\"></textarea>\n    <input id=\"input\" class=\"input\" />\n    <slot></slot>\n    <label class=\"input-label\" id=\"input-label\"></label>\n     <!-- if type is not number, remove div. -->\n    <div class=\"btn-right btn-number\" id=\"btn-number\"></div>\n</awc-tooltip>";

/***/ }),

/***/ "./components/awc-loading/awc-loading.html":
/*!*************************************************!*\
  !*** ./components/awc-loading/awc-loading.html ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "<style>\n    :host {\n        font-size: inherit;\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        color: var(--themeColor, #42b983);\n    }\n\n    .loading {\n        display: block;\n        width: 1em;\n        height: 1em;\n        margin: auto;\n        animation: rotate 1.4s linear infinite;\n    }\n\n    .circle {\n        stroke: currentColor;\n        animation: progress 1.4s ease-in-out infinite;\n        stroke-dasharray: 80px, 200px;\n        stroke-dashoffset: 0px;\n        transition: .3s;\n    }\n\n    :host(:not(:empty)) .loading {\n        margin: .5em;\n    }\n\n    @keyframes rotate {\n        to {\n            transform: rotate(360deg);\n        }\n    }\n\n    @keyframes progress {\n        0% {\n            stroke-dasharray: 1px, 200px;\n            stroke-dashoffset: 0px;\n        }\n\n        50% {\n            stroke-dasharray: 100px, 200px;\n            stroke-dashoffset: -15px;\n        }\n\n        100% {\n            stroke-dasharray: 100px, 200px;\n            stroke-dashoffset: -125px;\n        }\n    }\n</style>\n<svg class=\"loading\" id=\"loading\" viewBox=\"22 22 44 44\">\n    <circle class=\"circle\" cx=\"44\" cy=\"44\" r=\"20.2\" fill=\"none\" stroke-width=\"3.6\"></circle>\n</svg>\n<slot></slot>";

/***/ }),

/***/ "./components/awc-message/awc-message.html":
/*!*************************************************!*\
  !*** ./components/awc-message/awc-message.html ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "<style>\n    :host {\n        display: flex;\n        visibility: hidden;\n        opacity: 0;\n        transition: .3s;\n        z-index: 10;\n    }\n\n    :host([show]) {\n        opacity: 1;\n        visibility: visible;\n    }\n\n    .message {\n        margin: auto;\n        display: flex;\n        padding: 10px 15px;\n        margin-top: 10px;\n        align-items: center;\n        font-size: 14px;\n        color: #666;\n        background: #fff;\n        border-radius: 3px;\n        transform: translateY(-100%);\n        transition: .3s transform cubic-bezier(.645, .045, .355, 1);\n        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n        pointer-events: all;\n    }\n\n    :host([show]) .message {\n        transform: translateY(0);\n    }\n\n    .message>* {\n        margin-right: 5px;\n    }\n\n    awc-loading {\n        display: none;\n    }\n\n    :host([show][type=\"loading\"]) awc-loading {\n        display: block;\n    }\n\n    :host([show][type=\"loading\"]) awc-icon {\n        display: none;\n    }\n\n    :host awc-icon {\n        color: var(--themeColor, #42b983);\n    }\n</style>\n<div class=\"message\">\n    <awc-icon id=\"message-icon\" class=\"message-icon\" size=\"16\"></awc-icon>\n    <awc-loading></awc-loading>\n    <slot></slot>\n</div>";

/***/ }),

/***/ "./components/awc-option/awc-option.html":
/*!***********************************************!*\
  !*** ./components/awc-option/awc-option.html ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "<style>\n    :host {\n        display: block;\n    }\n\n    :host([hidden]) {\n        display: none;\n    }\n\n    .option {\n        display: flex;\n        justify-content: flex-start;\n        border-radius: 0;\n        font-size: inherit;\n        padding-left: var(--paddingLeft, .625em);\n    }\n\n    :host([selected]) .option {\n        color: var(--themeColor, #42b983)\n    }\n</style>\n<awc-button id=\"option\" class=\"option\" type=\"text\">\n    <slot></slot>\n</awc-button>";

/***/ }),

/***/ "./components/awc-pagination/awc-pagination.html":
/*!*******************************************************!*\
  !*** ./components/awc-pagination/awc-pagination.html ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "<style>\n    :host {\n        display: flex;\n        font-size: 14px;\n    }\n\n    awc-button {\n        margin: 0 .3em;\n        width: 2.3em;\n        height: 2.3em;\n        padding: 1px;\n        font-size: inherit;\n        box-sizing: content-box;\n    }\n\n    .simple-page {\n        width: auto;\n        padding: 0 .625em;\n    }\n\n    awc-button[tabindex] {\n        justify-content: center;\n        align-items: center;\n        pointer-events: none;\n    }\n\n    awc-button[current] {\n        background: var(--themeBackground, var(--themeColor, #42b983));\n        border-color: var(--themeColor, #42b983);\n        color: #fff;\n    }\n\n    .page {\n        display: inline-flex;\n    }\n\n    .icon {\n        width: 1em;\n        height: 1em;\n        fill: currentColor;\n    }\n</style>\n<awc-button type=\"text\" id=\"left\">\n    <svg class=\"icon\" viewBox=\"0 0 1024 1024\">\n        <path\n            d=\"M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8c-16.4 12.8-16.4 37.5 0 50.3l450.8 352.1c5.3 4.1 12.9 0.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z\">\n        </path>\n    </svg>\n</awc-button>\n<div class=\"page\" id=\"page\"></div>\n<awc-button type=\"text\" id=\"right\">\n    <svg class=\"icon\" viewBox=\"0 0 1024 1024\">\n        <path\n            d=\"M765.7 486.8L314.9 134.7c-5.3-4.1-12.9-0.4-12.9 6.3v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1c16.4-12.8 16.4-37.6 0-50.4z\">\n        </path>\n    </svg>\n</awc-button>";

/***/ }),

/***/ "./components/awc-popover/awc-popbody.html":
/*!*************************************************!*\
  !*** ./components/awc-popover/awc-popbody.html ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "<style>\n    :host {\n        position: absolute;\n        display: flex;\n        box-shadow: 2px 2px 15px var(--boxShadow, rgba(0, 0, 0, 0.15));\n        box-sizing: border-box;\n        transform: scale(0);\n        opacity: 0.5;\n        border-radius: 3px;\n        z-index: 10;\n        transition: .3s cubic-bezier(.645, .045, .355, 1);\n        transform-origin: inherit;\n        background: #fff;\n        visibility: hidden;\n    }\n\n    .popbody-content {\n        box-sizing: border-box;\n        display: flex;\n        width: max-content;\n        padding: 0 15px;\n        flex: 1;\n        flex-direction: column;\n    }\n\n    .popbody-title {\n        line-height: 30px;\n        padding: 15px 30px 0 0;\n        font-weight: 700;\n        font-size: 14px;\n        color: #4c5161;\n        user-select: none;\n        cursor: default;\n    }\n\n    .popbody-body {\n        flex: 1;\n        padding: 5px 0 15px 0;\n    }\n\n    .popbody-footer {\n        padding: 3px 0 15px 0;\n        margin-top: -3px;\n        text-align: right;\n        white-space: nowrap;\n    }\n\n    .btn-close {\n        position: absolute;\n        right: 10px;\n        top: 10px;\n        border: 0;\n    }\n\n    .popbody-footer awc-button {\n        font-size: .8em;\n        margin-left: .8em;\n    }\n\n    .popbody-type {\n        display: flex;\n        width: 30px;\n        height: 30px;\n        font-size: 22px;\n        margin: 15px -10px 0 15px;\n    }\n\n    :host([type=\"confirm\"]) {\n        min-width: 250px;\n    }\n\n    :host([type=\"confirm\"]) .popbody-body {\n        font-size: 14px;\n    }\n\n    :host(:not([type])) .popbody-content,\n    :host(:not([type])) .popbody-body {\n        padding: 0;\n    }\n</style>\n<div class=\"popbody-content\" id=\"popbody-content\">\n    <div class=\"popbody-body\">\n        <slot></slot>\n    </div>\n</div>";

/***/ }),

/***/ "./components/awc-popover/awc-popover.html":
/*!*************************************************!*\
  !*** ./components/awc-popover/awc-popover.html ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "<style>\n    :host {\n        display: inline-block;\n        position: relative;\n        overflow: visible;\n    }\n\n    :host([dir=\"top\"]) ::slotted(awc-popbody) {\n        bottom: 100%;\n        left: 50%;\n        transform: translate(-50%, -10px) scale(0);\n        transform-origin: center bottom;\n    }\n\n    :host([dir=\"top\"]) ::slotted(awc-popbody[open]),\n    :host([dir=\"top\"][trigger=\"hover\"]:not([disabled]):hover) ::slotted(awc-popbody),\n    :host([dir=\"top\"][trigger=\"focus\"]:not([disabled]):focus-within) ::slotted(awc-popbody) {\n        transform: translate(-50%, -10px) scale(1);\n    }\n\n    :host([dir=\"right\"]) ::slotted(awc-popbody) {\n        left: 100%;\n        top: 50%;\n        transform: translate(10px, -50%) scale(0);\n        transform-origin: left;\n    }\n\n    :host([dir=\"right\"]) ::slotted(awc-popbody[open]),\n    :host([dir=\"right\"][trigger=\"hover\"]:not([disabled]):hover) ::slotted(awc-popbody),\n    :host([dir=\"right\"][trigger=\"focus\"]:not([disabled]):focus-within) ::slotted(awc-popbody) {\n        transform: translate(10px, -50%) scale(1);\n    }\n\n    :host([dir=\"bottom\"]) ::slotted(awc-popbody) {\n        top: 100%;\n        left: 50%;\n        transform: translate(-50%, 10px) scale(0);\n        transform-origin: center top;\n    }\n\n    :host([dir=\"bottom\"]) ::slotted(awc-popbody[open]),\n    :host([dir=\"bottom\"][trigger=\"hover\"]:not([disabled]):hover) ::slotted(awc-popbody),\n    :host([dir=\"bottom\"][trigger=\"focus\"]:not([disabled]):focus-within) ::slotted(awc-popbody) {\n        transform: translate(-50%, 10px) scale(1);\n    }\n\n    :host([dir=\"left\"]) ::slotted(awc-popbody) {\n        right: 100%;\n        top: 50%;\n        transform: translate(-10px, -50%) scale(0);\n        transform-origin: right;\n    }\n\n    :host([dir=\"left\"]) ::slotted(awc-popbody[open]),\n    :host([dir=\"left\"][trigger=\"hover\"]:not([disabled]):hover) ::slotted(awc-popbody),\n    :host([dir=\"left\"][trigger=\"focus\"]:not([disabled]):focus-within) ::slotted(awc-popbody) {\n        transform: translate(-10px, -50%) scale(1);\n    }\n\n    :host([dir=\"lefttop\"]) ::slotted(awc-popbody) {\n        right: 100%;\n        top: 0;\n        transform: translate(-10px) scale(0);\n        transform-origin: right top;\n    }\n\n    :host([dir=\"lefttop\"]) ::slotted(awc-popbody[open]),\n    :host([dir=\"lefttop\"][trigger=\"hover\"]:not([disabled]):hover) ::slotted(awc-popbody),\n    :host([dir=\"lefttop\"][trigger=\"focus\"]:not([disabled]):focus-within) ::slotted(awc-popbody) {\n        transform: translate(-10px) scale(1);\n    }\n\n    :host([dir=\"leftbottom\"]) ::slotted(awc-popbody) {\n        right: 100%;\n        bottom: 0;\n        transform: translate(-10px) scale(0);\n        transform-origin: right bottom;\n    }\n\n    :host([dir=\"leftbottom\"]) ::slotted(awc-popbody[open]),\n    :host([dir=\"leftbottom\"][trigger=\"hover\"]:not([disabled]):hover) ::slotted(awc-popbody),\n    :host([dir=\"leftbottom\"][trigger=\"focus\"]:not([disabled]):focus-within) ::slotted(awc-popbody) {\n        transform: translate(-10px) scale(1);\n    }\n\n    :host([dir=\"topleft\"]) ::slotted(awc-popbody) {\n        bottom: 100%;\n        left: 0;\n        transform: translate(0, -10px) scale(0);\n        transform-origin: left bottom;\n    }\n\n    :host([dir=\"topleft\"]) ::slotted(awc-popbody[open]),\n    :host([dir=\"topleft\"][trigger=\"hover\"]:not([disabled]):hover) ::slotted(awc-popbody),\n    :host([dir=\"topleft\"][trigger=\"focus\"]:not([disabled]):focus-within) ::slotted(awc-popbody) {\n        transform: translate(0, -10px) scale(1);\n    }\n\n    :host([dir=\"topright\"]) ::slotted(awc-popbody) {\n        bottom: 100%;\n        right: 0;\n        transform: translate(0, -10px) scale(0);\n        transform-origin: right bottom;\n    }\n\n    :host([dir=\"topright\"]) ::slotted(awc-popbody[open]),\n    :host([dir=\"topright\"][trigger=\"hover\"]:not([disabled]):hover) ::slotted(awc-popbody),\n    :host([dir=\"topright\"][trigger=\"focus\"]:not([disabled]):focus-within) ::slotted(awc-popbody) {\n        transform: translate(0, -10px) scale(1);\n    }\n\n    :host([dir=\"righttop\"]) ::slotted(awc-popbody) {\n        left: 100%;\n        top: 0;\n        transform: translate(10px) scale(0);\n        transform-origin: left top;\n    }\n\n    :host([dir=\"righttop\"]) ::slotted(awc-popbody[open]),\n    :host([dir=\"righttop\"][trigger=\"hover\"]:not([disabled]):hover) ::slotted(awc-popbody),\n    :host([dir=\"righttop\"][trigger=\"focus\"]:not([disabled]):focus-within) ::slotted(awc-popbody) {\n        transform: translate(10px) scale(1);\n    }\n\n    :host([dir=\"rightbottom\"]) ::slotted(awc-popbody) {\n        left: 100%;\n        bottom: 0;\n        transform: translate(10px) scale(0);\n        transform-origin: left bottom;\n    }\n\n    :host([dir=\"rightbottom\"]) ::slotted(awc-popbody[open]),\n    :host([dir=\"rightbottom\"][trigger=\"hover\"]:not([disabled]):hover) ::slotted(awc-popbody),\n    :host([dir=\"rightbottom\"][trigger=\"focus\"]:not([disabled]):focus-within) ::slotted(awc-popbody) {\n        transform: translate(10px) scale(1);\n    }\n\n    :host([dir=\"bottomleft\"]) ::slotted(awc-popbody),\n    :host(:not([dir])) ::slotted(awc-popbody) {\n        left: 0;\n        top: 100%;\n        transform: translate(0, 10px) scale(0);\n        transform-origin: left top;\n    }\n\n    :host(:not([dir])) ::slotted(awc-popbody[open]),\n    :host(:not([dir])[trigger=\"hover\"]:not([disabled]):hover) ::slotted(awc-popbody),\n    :host(:not([dir])[trigger=\"focus\"]:not([disabled]):focus-within) ::slotted(awc-popbody),\n    :host([dir=\"bottomleft\"]) ::slotted(awc-popbody[open]),\n    :host([dir=\"bottomleft\"][trigger=\"hover\"]:not([disabled]):hover) ::slotted(awc-popbody),\n    :host([dir=\"bottomleft\"][trigger=\"focus\"]:not([disabled]):focus-within) ::slotted(awc-popbody) {\n        transform: translate(0, 10px) scale(1);\n    }\n\n    :host([dir=\"bottomright\"]) ::slotted(awc-popbody) {\n        right: 0;\n        top: 100%;\n        transform: translate(0, 10px) scale(0);\n        transform-origin: right top;\n    }\n\n    :host([dir=\"bottomright\"]) ::slotted(awc-popbody[open]),\n    :host([dir=\"bottomright\"][trigger=\"hover\"]:not([disabled]):hover) ::slotted(awc-popbody),\n    :host([dir=\"bottomright\"][trigger=\"focus\"]:not([disabled]):focus-within) ::slotted(awc-popbody) {\n        transform: translate(0, 10px) scale(1);\n    }\n\n    :host([trigger=\"contextmenu\"]) ::slotted(awc-popbody) {\n        right: auto;\n        bottom: auto;\n        left: var(--x, 0);\n        top: var(--y, 100%);\n        transform-origin: left top;\n        transform: translate(5px, 5px) scale(0);\n        transition: .15s;\n    }\n\n    :host([trigger=\"contextmenu\"]) ::slotted(awc-popbody[open]) {\n        transform: translate(5px, 5px) scale(1);\n    }\n\n    :host ::slotted(awc-popbody[open]),\n    :host([trigger=\"hover\"]:not([disabled]):hover) ::slotted(awc-popbody),\n    :host([trigger=\"focus\"]:not([disabled]):focus-within) ::slotted(awc-popbody) {\n        opacity: 1;\n        visibility: visible;\n    }\n\n    slot {\n        border-radius: inherit;\n    }\n</style>\n<slot></slot>";

/***/ }),

/***/ "./components/awc-radio/awc-radio.html":
/*!*********************************************!*\
  !*** ./components/awc-radio/awc-radio.html ***!
  \*********************************************/
/***/ ((module) => {

module.exports = "<style>\n    :host {\n        display: inline-block;\n        font-size: 14px;\n        color: var(--fontColor, #333);\n        -webkit-tap-highlight-color: transparent;\n    }\n\n    :host([disabled]) {\n        pointer-events: none;\n        opacity: .6;\n    }\n\n    :host([disabled]) label {\n        pointer-events: all;\n        cursor: not-allowed;\n    }\n\n    #radio {\n        position: absolute;\n        clip: rect(0, 0, 0, 0);\n    }\n\n    :host(:focus-within) .cheked,\n    :host(:not([disabled])) label:hover .cheked {\n        border-color: var(--themeColor, #42b983);\n        /*box-shadow: 0 0 10px rgba(0,0,0,0.1);*/\n        z-index: 1;\n    }\n\n    :host([disabled]) .cheked {\n        background: rgba(0, 0, 0, .1);\n    }\n\n    label {\n        box-sizing: border-box;\n        cursor: pointer;\n        display: flex;\n        align-items: center;\n        outline: 0;\n    }\n\n    .cheked {\n        position: relative;\n        box-sizing: border-box;\n        width: 16px;\n        height: 16px;\n        display: flex;\n        border-radius: 50%;\n        border: 1px solid var(--borderColor, rgba(0, 0, 0, .2));\n        transition: .3s;\n        margin-right: .5em;\n    }\n\n    :host(:empty) .cheked {\n        margin-right: 0;\n    }\n\n    .cheked::before {\n        content: '';\n        width: 8px;\n        height: 8px;\n        margin: auto;\n        border-radius: 50%;\n        background: var(--themeColor, #42b983);\n        transform: scale(0);\n        transition: .2s cubic-bezier(.12, .4, .29, 1.46) .1s;\n    }\n\n    .cheked::after {\n        position: absolute;\n        content: '';\n        width: 100%;\n        height: 100%;\n        background: var(--themeColor, #42b983);\n        border-radius: 50%;\n        opacity: .2;\n        transform: scale(0);\n        z-index: -1;\n        transition: .2s cubic-bezier(.12, .4, .29, 1.46) .1s;\n    }\n\n    #radio:focus-visible+label .cheked::after {\n        transform: scale(2.5);\n    }\n\n    #radio:checked+label .cheked::before {\n        transform: scale(1);\n    }\n\n    #radio:checked+label .cheked {\n        border-color: var(--themeColor, #42b983);\n    }\n</style>\n<input type=\"checkbox\" id=\"radio\" />\n<label id=\"label\" for=\"radio\">\n    <span class=\"cheked\"></span>\n    <slot></slot>\n</label>";

/***/ }),

/***/ "./components/awc-rate/awc-rate.html":
/*!*******************************************!*\
  !*** ./components/awc-rate/awc-rate.html ***!
  \*******************************************/
/***/ ((module) => {

module.exports = "<style>\n    :host {\n        display: inline-flex;\n        font-size: 20px;\n        direction: rtl;\n        color: #eee;\n    }\n\n    label {\n        cursor: pointer;\n        display: block;\n        line-height: 0;\n        -webkit-tap-highlight-color: transparent;\n    }\n\n    input[type=\"radio\"] {\n        position: absolute;\n        clip: rect(0, 0, 0, 0)\n    }\n\n    input[type=\"radio\"]:checked~.star-item {\n        color: var(--themeColor, #42b983);\n    }\n\n    .star-item:hover awc-icon {\n        transform: scale(1.2)\n    }\n\n    :host(:not([disabled]):hover) awc-tooltip.star-item {\n        color: inherit;\n    }\n\n    :host(:not([disabled])) awc-tooltip.star-item:hover,\n    :host(:not([disabled])) awc-tooltip.star-item:hover~.star-item {\n        color: var(--themeColor, #42b983);\n    }\n\n    :host([disabled]) input[type=\"radio\"] {\n        visibility: hidden;\n    }\n\n    :host([disabled]) label {\n        pointer-events: none;\n    }\n</style>\n<input tabindex=\"5\" type=\"radio\" name=\"item\" id=\"item05\" value=\"5\" />\n<awc-tooltip class=\"star-item\">\n    <label for=\"item05\">\n        <awc-icon></awc-icon>\n    </label>\n</awc-tooltip>\n<input tabindex=\"4\" type=\"radio\" name=\"item\" id=\"item04\" value=\"4\" />\n<awc-tooltip class=\"star-item\">\n    <label for=\"item04\">\n        <awc-icon></awc-icon>\n    </label>\n</awc-tooltip>\n<input tabindex=\"3\" type=\"radio\" name=\"item\" id=\"item03\" value=\"3\" />\n<awc-tooltip class=\"star-item\">\n    <label for=\"item03\">\n        <awc-icon></awc-icon>\n    </label>\n</awc-tooltip>\n<input tabindex=\"2\" type=\"radio\" name=\"item\" id=\"item02\" value=\"2\" />\n<awc-tooltip class=\"star-item\">\n    <label for=\"item02\">\n        <awc-icon></awc-icon>\n    </label>\n</awc-tooltip>\n<input tabindex=\"1\" type=\"radio\" name=\"item\" id=\"item01\" value=\"1\" />\n<awc-tooltip class=\"star-item\">\n    <label for=\"item01\">\n        <awc-icon></awc-icon>\n    </label>\n</awc-tooltip>";

/***/ }),

/***/ "./components/awc-slider/awc-slider.html":
/*!***********************************************!*\
  !*** ./components/awc-slider/awc-slider.html ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "<style>\n    :host {\n        box-sizing: border-box;\n        display: flex;\n        padding: 0 5px;\n    }\n\n    :host([vertical]) {\n        height:var(--height, 300px);\n    }\n\n    :host([disabled]) {\n        opacity: .8;\n        --themeColor: #999;\n        cursor: not-allowed;\n    }\n\n    :host([disabled]) input[type=\"range\"] {\n        pointer-events: none;\n    }\n\n    #slider-tooltip {\n        display: flex;\n        padding: 5px 0;\n        width: 100%;\n        margin: auto;\n    }\n\n    ::-moz-focus-inner,\n    ::-moz-focus-outer {\n        border: 0;\n        outline: 0;\n    }\n\n    :host([showtips]) {\n        pointer-events: all;\n    }\n\n    input[type=\"range\"] {\n        pointer-events: all;\n        margin: 0 -5px;\n        width: calc(100% + 10px);\n        -webkit-appearance: none;\n        outline: 0;\n        height: 12px;\n        background: none;\n        border-radius: 2px;\n    }\n\n    input[type=\"range\"]::-webkit-slider-runnable-track {\n        display: flex;\n        align-items: center;\n        position: relative;\n        height: 2px;\n        border-radius: 2px;\n        background: linear-gradient(to right, var(--themeColor, #42b983) calc(100% * var(--percent)), rgba(0, 0, 0, .1) 0%)\n    }\n\n    input[type=\"range\"]::-moz-range-progress {\n        display: flex;\n        align-items: center;\n        position: relative;\n        height: 2px;\n        border-radius: 2px;\n        outline: 0;\n        background: var(--themeColor, #42b983)\n    }\n\n    input[type=\"range\"]::-moz-range-track {\n        height: 2px;\n        background: rgba(0, 0, 0, .1);\n    }\n\n    input[type=\"range\"]::-webkit-slider-thumb {\n        -webkit-appearance: none;\n        border: 2px solid var(--themeColor, #42b983);\n        position: relative;\n        margin-top: -4px;\n        width: 10px;\n        height: 10px;\n        border-radius: 50%;\n        background: var(--themeColor, #42b983);\n        transition: .2s cubic-bezier(.12, .4, .29, 1.46);\n    }\n\n    input[type=\"range\"]::-moz-range-thumb {\n        box-sizing: border-box;\n        pointer-events: none;\n        border: 2px solid var(--themeColor, #42b983);\n        position: relative;\n        width: 10px;\n        height: 10px;\n        border-radius: 50%;\n        background: var(--themeColor, #42b983);\n        transition: .2s cubic-bezier(.12, .4, .29, 1.46);\n    }\n\n    input[type=\"range\"]:focus {\n        z-index: 2;\n    }\n\n    input[type=\"range\"]::-webkit-slider-thumb:active,\n    input[type=\"range\"]:focus::-webkit-slider-thumb {\n        transform: scale(1.2);\n        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n        background: #fff;\n    }\n\n    input[type=\"range\"]::-moz-range-thumb:active,\n    input[type=\"range\"]:focus::-moz-range-thumb {\n        transform: scale(1.2);\n        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n        background: #fff;\n    }\n\n    :host([vertical]) #slider-tooltip {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%) rotate(-90deg);\n        width: calc(var(--h, 300px) - 10px)\n    }\n\n    :host([vertical]) #slider-tooltip::before {\n        writing-mode: vertical-lr;\n        padding: 10px 6px;\n    }\n\n    :host([vertical]) {\n        display: inline-flex;\n        position: relative;\n        width: 20px;\n    }\n\n    :host([vertical]) awc-tooltip::before,\n    :host([vertical]) awc-tooltip::after {\n        left: calc(var(--percent, .5) * 100% + 5px);\n    }\n\n    :host(:focus-within) #slider-tooltip,\n    :host(:hover) #slider-tooltip {\n        z-index: 10\n    }\n</style>\n<awc-tooltip id='slider-tooltip'>\n    <input id='slider'  type='range' />\n</awc-tooltip>";

/***/ }),

/***/ "./components/awc-switch/awc-switch.html":
/*!***********************************************!*\
  !*** ./components/awc-switch/awc-switch.html ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "<style>\n    :host {\n        display: inline-block;\n        -webkit-tap-highlight-color: transparent;\n    }\n\n    :host([disabled]) {\n        pointer-events: none;\n        opacity: .6;\n    }\n\n    :host([disabled]) label {\n        pointer-events: all;\n        cursor: not-allowed;\n    }\n\n    #switch {\n        position: absolute;\n        clip: rect(0, 0, 0, 0);\n    }\n\n    :host(:focus-within) label::after,\n    :host(:active) ::after {\n        background: var(--themeColor, #42b983);\n    }\n\n    :host(:focus-within) #switch,\n    :host(:active) #switch {\n        z-index: 2\n    }\n\n    label {\n        cursor: pointer;\n        display: flex;\n        width: 2.4em;\n        height: 1.2em;\n        padding: .125em;\n        border-radius: 1.2em;\n        background: #eee;\n        transition: .3s width, .3s height, .3s background-color;\n    }\n\n    label::before {\n        content: '';\n        flex: 0;\n        transition: .2s cubic-bezier(.12, .4, .29, 1.46) flex;\n    }\n\n    label::after {\n        content: '';\n        width: .4em;\n        height: .4em;\n        border-radius: 1.2em;\n        border: .4em solid #fff;\n        background: #fff;\n        transition: .3s background, .3s padding, .3s width, .3s height, .3s border-radius, .3s border;\n        box-shadow: 0 2px 4px 0 rgba(0, 35, 11, 0.2);\n    }\n\n    label:active::after {\n        padding: 0 .3em;\n    }\n\n    #switch:checked+label {\n        background: var(--themeBackground, var(--themeColor, #42b983));\n    }\n\n    #switch:checked+label::before {\n        flex: 1;\n    }\n</style>\n<input type=\"checkbox\" id=\"switch\"><label for=\"switch\"></label>";

/***/ }),

/***/ "./components/awc-tabs/awc-tab.html":
/*!******************************************!*\
  !*** ./components/awc-tabs/awc-tab.html ***!
  \******************************************/
/***/ ((module) => {

module.exports = "<slot></slot>";

/***/ }),

/***/ "./components/awc-tabs/awc-tabs.html":
/*!*******************************************!*\
  !*** ./components/awc-tabs/awc-tabs.html ***!
  \*******************************************/
/***/ ((module) => {

module.exports = "<style>\n    :host {\n        display: block;\n        text-align: unset;\n    }\n\n    .tab {\n        display: flex;\n        flex-direction: column;\n        height: 100%;\n        overflow: hidden;\n    }\n\n    .tab-nav-con {\n        position: relative;\n        overflow: hidden;\n        scroll-behavior: smooth;\n    }\n\n    .tab-nav {\n        display: flex;\n    }\n\n    .nav-item {\n        font-size: inherit;\n        border-radius: 0;\n        box-shadow: none;\n        flex-shrink: 0;\n        border-color: transparent;\n    }\n\n    :host(:not([type=\"line\"])) .nav-item.active {\n        color: var(--themeColor, #42b983);\n    }\n\n    .tab-line {\n        position: absolute;\n        width: 0;\n        margin-top: -2px;\n        height: 2px;\n        border-radius: 2px;\n        background: var(--themeColor, #42b983);\n        transition: .2s;\n    }\n\n    .tab-content {\n        overflow: hidden;\n        flex: 1;\n        transition: .2s;\n    }\n\n    .tab-content-wrap {\n        display: flex;\n        width: 100%;\n        height: 100%;\n        transition: .2s;\n    }\n\n    :host([type=\"card\"]) .tab-line,\n    :host([type=\"line\"]) .tab-line {\n        visibility: hidden;\n    }\n\n    :host([type=\"card\"]) .nav-item {\n        border-radius: .5em .5em 0 0;\n    }\n\n    :host([type=\"line\"]) .nav-item {\n        border-radius: var(--borderRadius, .25em) var(--borderRadius, .25em) 0 0;\n    }\n\n    :host([type=\"card\"]) .nav-item.active,\n    :host([type=\"card\"]) .tab-content {\n        background-color: #fff;\n    }\n\n    :host([type=\"line\"]) .nav-item.active {\n        border-color: var(--borderColor, rgba(0, 0, 0, .2)) var(--borderColor, rgba(0, 0, 0, .2)) transparent;\n    }\n\n    :host([type=\"line\"]) .tab-nav-con {\n        oveflow: hidden;\n    }\n\n    :host([type=\"line\"]) .tab-line {\n        transition: none;\n    }\n\n    :host([type=\"line\"]) .tab-line::before,\n    :host([type=\"line\"]) .tab-line::after {\n        content: '';\n        position: absolute;\n        visibility: visible;\n        width: 9999px;\n        height: 1px;\n        bottom: 0;\n        background: var(--borderColor, rgba(0, 0, 0, .2));\n    }\n\n    :host([type=\"line\"]) .tab-line::before {\n        right: 100%;\n    }\n\n    :host([type=\"line\"]) .tab-line::after {\n        left: 100%;\n    }\n\n    :host([type=\"card\"]) .tab-content-wrap,\n    :host([type=\"line\"]) .tab-content-wrap {\n        transition: none;\n    }\n\n    :host([align=\"center\"]) .tab-nav {\n        justify-content: center;\n    }\n\n    :host([align=\"end\"]) .tab-nav {\n        justify-content: flex-end;\n    }\n\n    ::slotted(awc-tab) {\n        box-sizing: border-box;\n        width: 100%;\n        height: 100%;\n        padding: 10px;\n        flex-shrink: 0;\n        overflow: auto;\n    }\n</style>\n<style id=\"filter\"></style>\n<div class=\"tab\">\n    <div class=\"tab-nav-con\">\n        <div class=\"tab-nav\" id=\"nav\"></div>\n        <i class=\"tab-line\" id=\"tab-line\"></i>\n    </div>\n    <div class=\"tab-content\">\n        <div class=\"tab-content-wrap\" id=\"tab-content\">\n            <slot id=\"slot\">NEED CONTENT</slot>\n        </div>\n    </div>\n</div>";

/***/ }),

/***/ "./components/awc-tooltip/awc-tooltip.html":
/*!*************************************************!*\
  !*** ./components/awc-tooltip/awc-tooltip.html ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "<style>\n    :host {\n        display: inline-block;\n        position: relative;\n        overflow: visible;\n    }\n\n    :host::before,\n    :host::after {\n        content: '';\n        display: block;\n        position: absolute;\n        z-index: 1;\n        transform: translate(-50%, -20px);\n        opacity: 0;\n        transition: all .15s .15s, left 0s, top 0s;\n        color: var(--color, rgba(0, 0, 0, 0.75));\n        visibility: hidden;\n        pointer-events: none;\n    }\n\n    :host::before {\n        content: attr(prefix) attr(tips) attr(suffix);\n        border-radius: 3px;\n        padding: 6px 10px;\n        line-height: 18px;\n        text-align: left;\n        background-color: var(--color, rgba(0, 0, 0, 0.75));\n        color: #fff;\n        font-size: 12px;\n        font-style: normal;\n        width: max-content;\n        max-width: 200px;\n    }\n\n    :host::after {\n        width: 0;\n        height: 0;\n        overflow: hidden;\n        border: 6px solid transparent;\n    }\n\n    :host([tips]:not([tips='']):hover:not([show=false]))::before,\n    :host([tips]:not([tips=''])[show=true])::before,\n    :host([tips]:not([tips='']):focus-within:not([show=false]))::before,\n    :host([tips]:not([tips='']):hover:not([show=false]))::after,\n    :host([tips]:not([tips=''])[show=true])::after,\n    :host([tips]:not([tips='']):focus-within:not([show=false]))::after {\n        visibility: visible;\n        opacity: 1;\n    }\n\n    /* top */\n    :host([dir=\"top\"])::before,\n    :host(:not([dir]))::before,\n    :host(:not([dir]))::after,\n    :host([dir=\"top\"])::after {\n        left: calc(var(--percent, .5) * 100%);\n        bottom: 100%;\n        transform: translate(-50%, -20px);\n    }\n\n    :host([dir=\"top\"]):after,\n    :host(:not([dir])):after {\n        margin-bottom: -12px;\n        border-top-color: currentColor;\n    }\n\n    :host(:not([dir]):hover:not([show=false]))::before,\n    :host(:not([dir])[show=true])::before,\n    :host(:not([dir]):focus-within:not([show=false]))::before,\n    :host(:not([dir]):hover:not([show=false]))::after,\n    :host(:not([dir])[show=true])::after,\n    :host(:not([dir]):focus-within:not([show=false]))::after,\n    :host([dir=\"top\"]:hover:not([show=false]))::before,\n    :host([dir=\"top\"][show=true])::before,\n    :host([dir=\"top\"]:focus-within:not([show=false]))::before,\n    :host([dir=\"top\"]:hover:not([show=false]))::after,\n    :host([dir=\"top\"][show=true])::after,\n    :host([dir=\"top\"]:focus-within:not([show=false]))::after {\n        transform: translate(-50%, -10px);\n    }\n\n    /* right */\n    :host([dir=\"right\"])::before,\n    :host([dir=\"right\"])::after {\n        left: 100%;\n        top: 50%;\n        transform: translate(20px, -50%);\n    }\n\n    :host([dir=\"right\"]):after {\n        margin-left: -12px;\n        border-right-color: currentColor;\n    }\n\n    :host([dir=\"right\"]:hover:not([show=false]))::before,\n    :host([dir=\"right\"][show=true])::before,\n    :host([dir=\"right\"]:focus-within:not([show=false]))::before,\n    :host([dir=\"right\"]:hover:not([show=false]))::after,\n    :host([dir=\"right\"][show=true])::after,\n    :host([dir=\"right\"]:focus-within:not([show=false]))::after {\n        transform: translate(10px, -50%);\n    }\n\n    /* bottom */\n    :host([dir=\"bottom\"])::before,\n    :host([dir=\"bottom\"])::after {\n        left: calc(var(--percent, .5) * 100%);\n        top: 100%;\n        transform: translate(-50%, 20px);\n    }\n\n    :host([dir=\"bottom\"])::after {\n        margin-top: -12px;\n        border-bottom-color: currentColor;\n    }\n\n    :host([dir=\"bottom\"]:hover:not([show=false]))::before,\n    :host([dir=\"bottom\"][show=true])::before,\n    :host([dir=\"bottom\"]:focus-within:not([show=false]))::before,\n    :host([dir=\"bottom\"]:hover:not([show=false]))::after,\n    :host([dir=\"bottom\"][show=true])::after,\n    :host([dir=\"bottom\"]:focus-within:not([show=false]))::after {\n        transform: translate(-50%, 10px);\n    }\n\n    /* left */\n    :host([dir=\"left\"])::before,\n    :host([dir=\"left\"])::after {\n        right: 100%;\n        top: 50%;\n        transform: translate(-20px, -50%);\n    }\n\n    :host([dir=\"left\"])::after {\n        margin-right: -12px;\n        border-left-color: currentColor;\n    }\n\n    :host([dir=\"left\"]:hover:not([show=false]))::before,\n    :host([dir=\"left\"][show=true])::before,\n    :host([dir=\"left\"]:focus-within:not([show=false]))::before,\n    :host([dir=\"left\"]:hover:not([show=false]))::after,\n    :host([dir=\"left\"][show=true])::after,\n    :host([dir=\"left\"]:focus-within:not([show=false]))::after {\n        transform: translate(-10px, -50%);\n    }\n\n    /* topleft */\n    :host([dir=\"topleft\"])::before,\n    :host([dir=\"topleft\"])::after {\n        left: 0;\n        bottom: 100%;\n        transform: translate(0, -20px);\n    }\n\n    :host([dir=\"topleft\"]):after {\n        left: 10px;\n        margin-bottom: -12px;\n        border-top-color: currentColor;\n    }\n\n    :host([dir=\"topleft\"]:hover:not([show=false]))::before,\n    :host([dir=\"topleft\"][show=true])::before,\n    :host([dir=\"topleft\"]:focus-within:not([show=false]))::before,\n    :host([dir=\"topleft\"]:hover:not([show=false]))::after,\n    :host([dir=\"topleft\"][show=true])::after,\n    :host([dir=\"topleft\"]:focus-within:not([show=false]))::after {\n        transform: translate(0, -10px);\n    }\n\n    /* topright */\n    :host([dir=\"topright\"])::before,\n    :host([dir=\"topright\"])::after {\n        right: 0;\n        bottom: 100%;\n        transform: translate(0, -20px);\n    }\n\n    :host([dir=\"topright\"]):after {\n        right: 10px;\n        margin-bottom: -12px;\n        border-top-color: currentColor;\n    }\n\n    :host([dir=\"topright\"]:hover:not([show=false]))::before,\n    :host([dir=\"topright\"][show=true])::before,\n    :host([dir=\"topright\"]:focus-within:not([show=false]))::before,\n    :host([dir=\"topright\"]:hover:not([show=false]))::after,\n    :host([dir=\"topright\"][show=true])::after,\n    :host([dir=\"topright\"]:focus-within:not([show=false]))::after {\n        transform: translate(0, -10px);\n    }\n\n    /* righttop */\n    :host([dir=\"righttop\"])::before,\n    :host([dir=\"righttop\"])::after {\n        left: 100%;\n        top: 0;\n        transform: translate(20px, 0);\n    }\n\n    :host([dir=\"righttop\"]):after {\n        top: 10px;\n        margin-left: -12px;\n        border-right-color: currentColor;\n    }\n\n    :host([dir=\"righttop\"]:hover:not([show=false]))::before,\n    :host([dir=\"righttop\"][show=true])::before,\n    :host([dir=\"righttop\"]:focus-within:not([show=false]))::before,\n    :host([dir=\"righttop\"]:hover:not([show=false]))::after,\n    :host([dir=\"righttop\"][show=true])::after,\n    :host([dir=\"righttop\"]:focus-within:not([show=false]))::after {\n        transform: translate(10px, 0);\n    }\n\n    /* rightbottom */\n    :host([dir=\"rightbottom\"])::before,\n    :host([dir=\"rightbottom\"])::after {\n        left: 100%;\n        bottom: 0;\n        transform: translate(20px, 0);\n    }\n\n    :host([dir=\"rightbottom\"]):after {\n        bottom: 10px;\n        margin-left: -12px;\n        border-right-color: currentColor;\n    }\n\n    :host([dir=\"rightbottom\"]:hover:not([show=false]))::before,\n    :host([dir=\"rightbottom\"][show=true])::before,\n    :host([dir=\"rightbottom\"]:focus-within:not([show=false]))::before,\n    :host([dir=\"rightbottom\"]:hover:not([show=false]))::after,\n    :host([dir=\"rightbottom\"][show=true])::after,\n    :host([dir=\"rightbottom\"]:focus-within:not([show=false]))::after {\n        transform: translate(10px, 0);\n    }\n\n    /* bottomleft */\n    :host([dir=\"bottomleft\"])::before,\n    :host([dir=\"bottomleft\"])::after {\n        left: 0;\n        top: 100%;\n        transform: translate(0, 20px);\n    }\n\n    :host([dir=\"bottomleft\"])::after {\n        left: 10px;\n        margin-top: -12px;\n        border-bottom-color: currentColor;\n    }\n\n    :host([dir=\"bottomleft\"]:hover:not([show=false]))::before,\n    :host([dir=\"bottomleft\"][show=true])::before,\n    :host([dir=\"bottomleft\"]:focus-within:not([show=false]))::before,\n    :host([dir=\"bottomleft\"]:hover:not([show=false]))::after,\n    :host([dir=\"bottomleft\"][show=true])::after,\n    :host([dir=\"bottomleft\"]:focus-within:not([show=false]))::after {\n        transform: translate(0, 10px);\n    }\n\n    /* bottomright */\n    :host([dir=\"bottomright\"])::before,\n    :host([dir=\"bottomright\"])::after {\n        right: 0;\n        top: 100%;\n        transform: translate(0, 20px);\n    }\n\n    :host([dir=\"bottomright\"])::after {\n        right: 10px;\n        margin-top: -12px;\n        border-bottom-color: currentColor;\n    }\n\n    :host([dir=\"bottomright\"]:hover:not([show=false]))::before,\n    :host([dir=\"bottomright\"][show=true])::before,\n    :host([dir=\"bottomright\"]:focus-within:not([show=false]))::before,\n    :host([dir=\"bottomright\"]:hover:not([show=false]))::after,\n    :host([dir=\"bottomright\"][show=true])::after,\n    :host([dir=\"bottomright\"]:focus-within:not([show=false]))::after {\n        transform: translate(0, 10px);\n    }\n\n    /* lefttop */\n    :host([dir=\"lefttop\"])::before,\n    :host([dir=\"lefttop\"])::after {\n        right: 100%;\n        top: 0;\n        transform: translate(-20px, 0);\n    }\n\n    :host([dir=\"lefttop\"]):after {\n        top: 10px;\n        margin-right: -12px;\n        border-left-color: currentColor;\n    }\n\n    :host([dir=\"lefttop\"]:hover:not([show=false]))::before,\n    :host([dir=\"lefttop\"][show=true])::before,\n    :host([dir=\"lefttop\"]:focus-within:not([show=false]))::before,\n    :host([dir=\"lefttop\"]:hover:not([show=false]))::after,\n    :host([dir=\"lefttop\"][show=true])::after,\n    :host([dir=\"lefttop\"]:focus-within:not([show=false]))::after {\n        transform: translate(-10px, 0);\n    }\n\n    /* leftbottom */\n    :host([dir=\"leftbottom\"])::before,\n    :host([dir=\"leftbottom\"])::after {\n        right: 100%;\n        bottom: 0;\n        transform: translate(-20px, 0);\n    }\n\n    :host([dir=\"leftbottom\"]):after {\n        bottom: 10px;\n        margin-right: -12px;\n        border-left-color: currentColor;\n    }\n\n    :host([dir=\"leftbottom\"]:hover:not([show=false]))::before,\n    :host([dir=\"leftbottom\"][show=true])::before,\n    :host([dir=\"leftbottom\"]:focus-within:not([show=false]))::before,\n    :host([dir=\"leftbottom\"]:hover:not([show=false]))::after,\n    :host([dir=\"leftbottom\"][show=true])::after,\n    :host([dir=\"leftbottom\"]:focus-within:not([show=false]))::after {\n        transform: translate(-10px, 0);\n    }\n\n    /* success */\n    :host([type=\"success\"]) {\n        --color: var(--successColor, #52c41a);\n    }\n\n    /* error */\n    :host([type=\"error\"]) {\n        --color: var(--errorColor, #f4615c);\n    }\n\n    /* warning */\n    :host([type=\"warning\"]) {\n        --color: var(--waringColor, #faad14);\n    }\n\n    slot {\n        border-radius: inherit;\n    }\n</style>\n<slot></slot>";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_awc_button_awc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/awc-button/awc-button */ "./components/awc-button/awc-button.js");
/* harmony import */ var _components_awc_slider_awc_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/awc-slider/awc-slider */ "./components/awc-slider/awc-slider.js");
/* harmony import */ var _components_awc_dropdown_awc_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/awc-dropdown/awc-dropdown */ "./components/awc-dropdown/awc-dropdown.js");
/* harmony import */ var _components_awc_loading_awc_loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/awc-loading/awc-loading */ "./components/awc-loading/awc-loading.js");
/* harmony import */ var _components_awc_tabs_awc_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/awc-tabs/awc-tabs */ "./components/awc-tabs/awc-tabs.js");
/* harmony import */ var _components_awc_switch_awc_switch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/awc-switch/awc-switch */ "./components/awc-switch/awc-switch.js");
/* harmony import */ var _components_awc_checkbox_awc_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/awc-checkbox/awc-checkbox */ "./components/awc-checkbox/awc-checkbox.js");
/* harmony import */ var _components_awc_radio_awc_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/awc-radio/awc-radio */ "./components/awc-radio/awc-radio.js");
/* harmony import */ var _components_awc_tooltip_awc_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/awc-tooltip/awc-tooltip */ "./components/awc-tooltip/awc-tooltip.js");
/* harmony import */ var _components_awc_icon_awc_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/awc-icon/awc-icon */ "./components/awc-icon/awc-icon.js");
/* harmony import */ var _components_awc_input_awc_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/awc-input/awc-input */ "./components/awc-input/awc-input.js");
/* harmony import */ var _components_awc_textarea_awc_textarea__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/awc-textarea/awc-textarea */ "./components/awc-textarea/awc-textarea.js");
/* harmony import */ var _components_awc_img_awc_img__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/awc-img/awc-img */ "./components/awc-img/awc-img.js");
/* harmony import */ var _components_awc_rate_awc_rate__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/awc-rate/awc-rate */ "./components/awc-rate/awc-rate.js");
/* harmony import */ var _components_awc_popover_awc_popover__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/awc-popover/awc-popover */ "./components/awc-popover/awc-popover.js");
/* harmony import */ var _components_awc_form_awc_form__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/awc-form/awc-form */ "./components/awc-form/awc-form.js");
/* harmony import */ var _components_awc_pagination_awc_pagination__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/awc-pagination/awc-pagination */ "./components/awc-pagination/awc-pagination.js");
/* harmony import */ var _components_awc_dialog_awc_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/awc-dialog/awc-dialog */ "./components/awc-dialog/awc-dialog.js");
/* harmony import */ var _components_awc_message_awc_message__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/awc-message/awc-message */ "./components/awc-message/awc-message.js");





















window.AwcDialog = _components_awc_dialog_awc_dialog__WEBPACK_IMPORTED_MODULE_17__.default;
window.AwcMessage = _components_awc_message_awc_message__WEBPACK_IMPORTED_MODULE_18__.default;

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsNkJBQTZCLE1BQU07QUFDbkM7QUFDQTtBQUNBO0FBQ0Esd0VBQXdFLE1BQU07QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0NBQStDLGNBQWM7QUFDN0QseUJBQXlCLHNEQUFJO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hLYTs7QUFFeUI7QUFDRjtBQUNBOztBQUVyQjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWUsUUFBUSxJQUFJO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxTQUFTO0FBQzNDOztBQUVBO0FBQ0Esa0NBQWtDLFNBQVM7QUFDM0M7O0FBRUE7QUFDQSwrQkFBK0IsZUFBZTtBQUM5Qzs7QUFFQTtBQUNBLHFDQUFxQyxlQUFlO0FBQ3BEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHlDQUF5QyxjQUFjO0FBQ3ZELHlCQUF5Qix3REFBSTtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM2pCYTs7QUFFeUI7O0FBRXZCO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQ0FBK0MsY0FBYztBQUM3RCx5QkFBeUIsMERBQUk7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckRhOztBQUVpQjtBQUNNO0FBQ0U7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5Q0FBeUMsY0FBYztBQUN2RCx5QkFBeUIsMERBQUk7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMscUJBQXFCLFFBQVEsU0FBUyxVQUFVLFdBQVc7QUFDcEc7QUFDQTs7QUFFQSxpRUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxFQUFFOztBQUVGLFVBQVUsK0JBQStCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQy9NWTs7QUFFdUI7QUFDQzs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlDQUF5QyxjQUFjO0FBQ3ZELHlCQUF5Qix5REFBSTtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pGYTs7QUFFdUI7QUFDSzs7QUFFMUI7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkVBQTZFLFNBQVMsSUFBSSxZQUFZO0FBQ3RHO0FBQ0EsSUFBSTtBQUNKLDZCQUE2QixxQkFBcUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG9DQUFvQyw0QkFBNEIsT0FBTyxJQUFJLE9BQU87QUFDdkc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlDQUF5QyxjQUFjO0FBQ3ZELHlCQUF5Qiw2REFBSTtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BPYTs7QUFFcUI7QUFDSTs7QUFFdkI7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxnQkFBZ0I7QUFDOUQsNkRBQTZELFlBQVk7QUFDekU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtDQUErQyxjQUFjO0FBQzdELCtCQUErQiwwREFBSTtBQUNuQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hMYTs7QUFFcUI7QUFDSztBQUNEOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixpREFBVTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlDQUF5QyxjQUFjO0FBQ3ZELHlCQUF5QiwwREFBSTtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckxhOztBQUV1Qjs7QUFFckI7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSxzQ0FBc0MsVUFBVTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5Q0FBeUMsY0FBYztBQUN2RCx5QkFBeUIsd0RBQUk7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0dhOztBQUV5QjtBQUNSO0FBQ0s7O0FBRXBCO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0EsSUFBSTtBQUNKLEdBQUc7QUFDSDs7QUFFQTtBQUNBLHlDQUF5QyxjQUFjO0FBQ3ZELHlCQUF5Qix1REFBSTtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdJYTs7QUFFeUI7QUFDRDs7QUFFdEI7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0Qyx1REFBdUQ7QUFDbkc7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLE9BQU87QUFDUDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUNBQXlDLGNBQWM7QUFDdkQseUJBQXlCLHlEQUFJO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsT2E7O0FBRXdCOztBQUV0QjtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLHlDQUF5QyxjQUFjO0FBQ3ZELHlCQUF5Qix5REFBSTtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDL0hhOztBQUVxQjs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0NBQStDLGNBQWM7QUFDN0QsK0JBQStCLHNEQUFJO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hFYTs7QUFFcUI7QUFDZjtBQUNnQjs7QUFFcEI7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxhQUFhLEdBQUcsdUJBQXVCLFlBQVk7QUFDdEYsOENBQThDLG9CQUFvQjtBQUNsRTtBQUNBLDRDQUE0QyxlQUFlO0FBQzNEO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0UsU0FBUztBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sU0FBUyxXQUFXO0FBQzFCO0FBQ0EsT0FBTyxXQUFXLFdBQVcsR0FBRyxXQUFXO0FBQzNDO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFJLEdBQUcsdUJBQXVCLGlDQUFpQztBQUMvRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlDQUF5QyxjQUFjO0FBQ3ZELHlCQUF5Qix1REFBSTtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDeEthOztBQUVpQzs7QUFFOUMsMEJBQTBCLHlEQUFRO0FBQ2xDO0FBQ0EsVUFBVSxhQUFhO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaYTs7QUFFeUI7O0FBRXZCO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVywyQkFBMkI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtDQUErQyxjQUFjO0FBQzdELHlCQUF5QiwwREFBSTtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN6R0Esc0NBQXNDLDZCQUE2QiwrQkFBK0IsZ0NBQWdDLGlDQUFpQyxpQ0FBaUMsMkJBQTJCLDJCQUEyQiw4QkFBOEIsa0NBQWtDLGtFQUFrRSwwQkFBMEIsMkNBQTJDLG9EQUFvRCxrRkFBa0YsT0FBTyxnREFBZ0QsK0JBQStCLHNCQUFzQixPQUFPLHdCQUF3Qix3QkFBd0IsT0FBTyx1Q0FBdUMsd0NBQXdDLE9BQU8sNERBQTRELDhCQUE4Qiw4QkFBOEIsT0FBTyxzSkFBc0osNENBQTRDLG1EQUFtRCxPQUFPLHFEQUFxRCx3R0FBd0csT0FBTyxtQ0FBbUMsc0JBQXNCLHlFQUF5RSxPQUFPLGtDQUFrQyxxQ0FBcUMsZ0VBQWdFLG9CQUFvQix3REFBd0QsT0FBTyw2Q0FBNkMsc0JBQXNCLDZCQUE2QixpREFBaUQsK0JBQStCLGtCQUFrQixtQkFBbUIsaUJBQWlCLG9CQUFvQixxQkFBcUIsMEJBQTBCLE9BQU8sbUVBQW1FLDRCQUE0Qix1Q0FBdUMsMkJBQTJCLHlHQUF5RyxzQkFBc0IsT0FBTyxjQUFjLDJCQUEyQixxQkFBcUIsb0JBQW9CLDZCQUE2QixrQkFBa0IsaUJBQWlCLHNCQUFzQix1QkFBdUIscUJBQXFCLDRCQUE0Qix3QkFBd0IsT0FBTyxxQkFBcUIsK0JBQStCLE9BQU8sNEJBQTRCLG9CQUFvQixPQUFPLDRDQUE0QyxvREFBb0Qsc0JBQXNCLHlCQUF5QixPQUFPLGtCQUFrQiwrQkFBK0IsMkJBQTJCLE9BQU8sZ0NBQWdDLHVCQUF1QixPQUFPLHVCQUF1Qix5QkFBeUIsT0FBTyw0RUFBNEUscUNBQXFDLE9BQU8sNkJBQTZCLDJCQUEyQixPQUFPLHVCQUF1QiwwQkFBMEIsT0FBTzs7Ozs7Ozs7OztBQ0E5dUcsc0NBQXNDLGdDQUFnQywwQkFBMEIsd0NBQXdDLG1EQUFtRCxPQUFPLDJCQUEyQiwrQkFBK0Isc0JBQXNCLE9BQU8saUNBQWlDLDhCQUE4Qiw4QkFBOEIsT0FBTyxtQkFBbUIsNkJBQTZCLGlDQUFpQyxPQUFPLHdGQUF3RixtREFBbUQscUJBQXFCLE9BQU8sdUVBQXVFLDJCQUEyQixtQ0FBbUMsd0NBQXdDLE9BQU8sZUFBZSxpQ0FBaUMsMEJBQTBCLHdCQUF3Qiw4QkFBOEIsT0FBTyxpQkFBaUIsd0JBQXdCLGtDQUFrQyw4QkFBOEIsNkJBQTZCLDZCQUE2QixxQkFBcUIsc0JBQXNCLHVFQUF1RSxnQ0FBZ0MsOEJBQThCLDBCQUEwQixPQUFPLCtCQUErQiwwQkFBMEIsT0FBTyx5QkFBeUIsNkJBQTZCLHNCQUFzQixxQkFBcUIseUJBQXlCLDJCQUEyQiw4QkFBOEIsZ0NBQWdDLCtEQUErRCxPQUFPLHdCQUF3Qiw2QkFBNkIsc0JBQXNCLHNCQUFzQix1QkFBdUIsaURBQWlELDZCQUE2QixzQkFBc0IsOEJBQThCLHNCQUFzQiwrREFBK0QsT0FBTyxhQUFhLHNCQUFzQix1QkFBdUIsOEJBQThCLCtEQUErRCxPQUFPLHNEQUFzRCxnQ0FBZ0MsT0FBTyxtRUFBbUUsZ0NBQWdDLE9BQU8scUZBQXFGLG9DQUFvQyx1REFBdUQsT0FBTyx1REFBdUQsOEJBQThCLE9BQU8sbUpBQW1KLGlCQUFpQjs7Ozs7Ozs7OztBQ0F0dkYsc0NBQXNDLDBCQUEwQix3QkFBd0Isa0JBQWtCLGlCQUFpQixtQkFBbUIsb0JBQW9CLHNCQUFzQixpRUFBaUUsNkJBQTZCLHFCQUFxQiwwQkFBMEIsT0FBTyx1QkFBdUIscUJBQXFCLHNCQUFzQiw4QkFBOEIsT0FBTyxpQkFBaUIsd0JBQXdCLDZCQUE2QiwyQkFBMkIsdUJBQXVCLHlJQUF5SSxpQ0FBaUMsd0NBQXdDLHlDQUF5Qyw2QkFBNkIsaUNBQWlDLHFCQUFxQixnQ0FBZ0MsNERBQTRELE9BQU8seUJBQXlCLGlDQUFpQyx3QkFBd0Isc0JBQXNCLDBCQUEwQixrQkFBa0IsaUNBQWlDLE9BQU8sK0JBQStCLHFCQUFxQiw4QkFBOEIsT0FBTyx1QkFBdUIsNEJBQTRCLGlDQUFpQywyQkFBMkIsMEJBQTBCLHlCQUF5Qiw0QkFBNEIsMEJBQTBCLE9BQU8sc0JBQXNCLGtCQUFrQix5QkFBeUIsMkJBQTJCLDBCQUEwQixPQUFPLHdCQUF3QixnQ0FBZ0MsMkJBQTJCLDRCQUE0QixPQUFPLG9CQUFvQiw2QkFBNkIsc0JBQXNCLG9CQUFvQixvQkFBb0IsT0FBTyxtQ0FBbUMsNEJBQTRCLE9BQU8sc0JBQXNCLHdCQUF3QixvQ0FBb0Msc0JBQXNCLHVCQUF1QiwwQkFBMEIsT0FBTyw0QkFBNEIsd0JBQXdCLE9BQU8scUJBQXFCLDZCQUE2QixPQUFPLDBDQUEwQyx3QkFBd0IsT0FBTywrQ0FBK0MsOEJBQThCLE9BQU8sb0NBQW9DLHdCQUF3QixPQUFPOzs7Ozs7Ozs7O0FDQW4zRSxzQ0FBc0MsZ0NBQWdDLDBCQUEwQixvREFBb0QsT0FBTyx3QkFBd0IseUJBQXlCLE9BQU8sa0pBQWtKLG1EQUFtRCw0Q0FBNEMsT0FBTyxrSEFBa0gsNENBQTRDLE9BQU8sMkJBQTJCLCtCQUErQixPQUFPLDJFQUEyRSxxQkFBcUIsT0FBTyxxQkFBcUIseUJBQXlCLHNCQUFzQix1QkFBdUIsaUNBQWlDLE9BQU8seUNBQXlDLHdCQUF3QixzQkFBc0IsdUJBQXVCLDZCQUE2Qiw4QkFBOEIsaUNBQWlDLE9BQU8saUNBQWlDLDhCQUE4QixPQUFPLGdDQUFnQyxtREFBbUQsb0RBQW9ELE9BQU8sMERBQTBELDRDQUE0QyxPQUFPLHNCQUFzQixrQkFBa0IsMkJBQTJCLE9BQU8sMEJBQTBCLHNCQUFzQiw2QkFBNkIsa0JBQWtCLGlCQUFpQixtQkFBbUIsb0JBQW9CLDBCQUEwQiwrQkFBK0IsT0FBTyxrQ0FBa0MsOEJBQThCLE9BQU8sZ0JBQWdCLDZCQUE2QiwwQkFBMEIsZ0NBQWdDLDRCQUE0QiwrQkFBK0IscUJBQXFCLHNCQUFzQiw2QkFBNkIsc0VBQXNFLE9BQU8sZ0NBQWdDLG1IQUFtSCxPQUFPLGtDQUFrQyxpQ0FBaUMsT0FBTyxxQkFBcUIseUJBQXlCLDBCQUEwQixpQ0FBaUMsT0FBTyxxQkFBcUIsMEJBQTBCLHlCQUF5QiwyQkFBMkIsa0NBQWtDLE9BQU8sNkNBQTZDLHdCQUF3QixpQ0FBaUMsc0JBQXNCLCtDQUErQyxnQ0FBZ0MsMkJBQTJCLHdDQUF3Qyw4QkFBOEIsc0JBQXNCLE9BQU8sNENBQTRDLHlCQUF5QixPQUFPOzs7Ozs7Ozs7O0FDQWo4RixzQ0FBc0MsNEJBQTRCLE9BQU8sZUFBZSx3Q0FBd0MsT0FBTyw0Q0FBNEMsdUJBQXVCLDRDQUE0QyxPQUFPLGVBQWUsZ0NBQWdDLE9BQU87Ozs7Ozs7Ozs7QUNBblQsc0NBQXNDLHlCQUF5QixPQUFPLGNBQWMsd0JBQXdCLDBDQUEwQyx5QkFBeUIsOEJBQThCLDZCQUE2QixPQUFPLGlDQUFpQyxxQ0FBcUMsK0JBQStCLE9BQU8saUNBQWlDLDRCQUE0QixPQUFPLGlFQUFpRSxnQ0FBZ0MsOEJBQThCLE9BQU87Ozs7Ozs7Ozs7QUNBdmlCLHNDQUFzQyw2QkFBNkIsZ0NBQWdDLDBCQUEwQixPQUFPLGVBQWUseUJBQXlCLHFCQUFxQixzQkFBc0IsdUJBQXVCLDZCQUE2QiwyQkFBMkIsT0FBTywwQkFBMEIsaURBQWlELE9BQU8sMkJBQTJCLGNBQWMsd0NBQXdDLFdBQVcsT0FBTzs7Ozs7Ozs7OztBQ0FsZSxzQ0FBc0MsZ0NBQWdDLDZCQUE2Qiw4QkFBOEIsMkJBQTJCLDJCQUEyQiwwQkFBMEIsc0JBQXNCLE9BQU8sNkNBQTZDLDZCQUE2Qiw2QkFBNkIsc0JBQXNCLGtCQUFrQixtQkFBbUIsb0JBQW9CLHFCQUFxQiwyQkFBMkIsMEJBQTBCLDRCQUE0QixpRkFBaUYsc0NBQXNDLDBCQUEwQixPQUFPLG9DQUFvQyxtQ0FBbUMsT0FBTywrQkFBK0Isc0JBQXNCLGtDQUFrQyxPQUFPLG1DQUFtQyw2QkFBNkIsa0JBQWtCLGlCQUFpQixzQkFBc0IsdUJBQXVCLE9BQU8sNENBQTRDLDZCQUE2Qiw0QkFBNEIsT0FBTyxhQUFhLGlDQUFpQyw2QkFBNkIsZ0NBQWdDLHlCQUF5QiwwQkFBMEIsOEJBQThCLG9CQUFvQixxQkFBcUIsOEJBQThCLDhCQUE4Qiw0QkFBNEIsMEJBQTBCLE9BQU8scUJBQXFCLHNCQUFzQixrQkFBa0IsaUJBQWlCLDZCQUE2QixzQkFBc0IsdUJBQXVCLDhCQUE4QixxQkFBcUIsT0FBTyx3QkFBd0IscUJBQXFCLDhCQUE4QixPQUFPLGdHQUFnRyxnQ0FBZ0MsT0FBTyxvQ0FBb0MsNEJBQTRCLE9BQU8sbUNBQW1DLDJCQUEyQixPQUFPLHNDQUFzQyw4QkFBOEIsT0FBTyxzQkFBc0IsNkJBQTZCLHNCQUFzQix1QkFBdUIsaUNBQWlDLHNCQUFzQiwwQkFBMEIsOEJBQThCLDZCQUE2QixPQUFPLHFDQUFxQyw4QkFBOEIscUJBQXFCLE9BQU8sNEJBQTRCLDBCQUEwQiwyQkFBMkIsNEJBQTRCLDBCQUEwQixPQUFPLGtCQUFrQiw2QkFBNkIsb0JBQW9CLG1CQUFtQixxQkFBcUIsMkNBQTJDLCtCQUErQixxQkFBcUIsMEJBQTBCLE9BQU8seURBQXlELHFCQUFxQiw2QkFBNkIsT0FBTywrQkFBK0IsNEJBQTRCLDZCQUE2QixPQUFPLDJCQUEyQiw2QkFBNkIsd0JBQXdCLGtDQUFrQyw4QkFBOEIsa0JBQWtCLG1CQUFtQixtQkFBbUIsc0NBQXNDLE9BQU8sZUFBZSw2QkFBNkIscUJBQXFCLG9CQUFvQixtQkFBbUIsb0RBQW9ELHFCQUFxQixzQkFBc0Isd0JBQXdCLDBCQUEwQiwwQkFBMEIsK0JBQStCLE9BQU8sb0NBQW9DLHFCQUFxQixvREFBb0QsT0FBTywyQkFBMkIsNkJBQTZCLHlFQUF5RSxPQUFPLG9CQUFvQixxQkFBcUIsc0JBQXNCLHdCQUF3QixnREFBZ0QseUJBQXlCLG1DQUFtQywwQ0FBMEMsT0FBTyxpQkFBaUIsc0VBQXNFLE9BQU8sNkJBQTZCLGdCQUFnQixzQ0FBc0MsV0FBVyxnQkFBZ0Isd0NBQXdDLFdBQVcsT0FBTyxxQ0FBcUMsZ0JBQWdCLHlDQUF5QyxXQUFXLGdCQUFnQiw2Q0FBNkMsV0FBVyxPQUFPLGlCQUFpQixzQkFBc0Isd0VBQXdFLE9BQU8scUNBQXFDLGdCQUFnQix5Q0FBeUMsV0FBVyxnQkFBZ0IsOENBQThDLFdBQVcsT0FBTyxpQkFBaUIsc0JBQXNCLHdFQUF3RSxPQUFPLHFDQUFxQyxnQkFBZ0IseUNBQXlDLFdBQVcsZ0JBQWdCLDhDQUE4QyxXQUFXLE9BQU8saUJBQWlCLHNCQUFzQixzRUFBc0UsT0FBTyxxQ0FBcUMsZ0JBQWdCLHlDQUF5QyxXQUFXLGdCQUFnQiwrQ0FBK0MsV0FBVyxPQUFPOzs7Ozs7Ozs7O0FDQXJ6SyxzQ0FBc0MsaUNBQWlDLGdDQUFnQyxrRUFBa0Usb0RBQW9ELDJCQUEyQix1REFBdUQsZ0NBQWdDLHdDQUF3QywwQkFBMEIsT0FBTyx3QkFBd0IsK0JBQStCLGdDQUFnQyw0Q0FBNEMsT0FBTywwQkFBMEIsbURBQW1ELG1EQUFtRCxPQUFPLG1DQUFtQyw0Q0FBNEMsT0FBTyxrRkFBa0YsbURBQW1ELE9BQU8sMkJBQTJCLHNCQUFzQiw4QkFBOEIsT0FBTyx1Q0FBdUMsK0JBQStCLHdDQUF3QyxPQUFPLDRDQUE0Qyw2QkFBNkIsT0FBTyxtQ0FBbUMsc0JBQXNCLE9BQU8sNkJBQTZCLDJCQUEyQiwrQkFBK0IsT0FBTyxxQkFBcUIsd0JBQXdCLHNCQUFzQix1QkFBdUIsOEJBQThCLGlDQUFpQyxnQ0FBZ0MsK0JBQStCLDJDQUEyQyxPQUFPLHlDQUF5QywrQkFBK0IsK0JBQStCLGtDQUFrQyxPQUFPLGdCQUFnQixxQkFBcUIsOEJBQThCLDhCQUE4QixvQkFBb0IscUJBQXFCLCtCQUErQiw2QkFBNkIsK0JBQStCLGtCQUFrQix1QkFBdUIsbUNBQW1DLHFDQUFxQywyQkFBMkIsNkJBQTZCLGdDQUFnQywwQ0FBMEMsT0FBTyxvQ0FBb0Msb0JBQW9CLE9BQU8sMkRBQTJELHdCQUF3QixPQUFPLHFEQUFxRCxvQkFBb0IscUJBQXFCLE9BQU8sMkJBQTJCLDhCQUE4QixPQUFPLHNCQUFzQiwrQkFBK0IsK0JBQStCLDZCQUE2QixxRUFBcUUsaUNBQWlDLDRCQUE0QixzQkFBc0IsT0FBTyxxRkFBcUYsZ0VBQWdFLDJCQUEyQixPQUFPLGdDQUFnQywyQkFBMkIsT0FBTyw0QkFBNEIsd0JBQXdCLE9BQU8sbUJBQW1CLHdCQUF3QiwrQkFBK0Isc0JBQXNCLE9BQU8sdUNBQXVDLHdCQUF3QixPQUFPLG9CQUFvQixxQkFBcUIsc0JBQXNCLDRDQUE0QyxxQkFBcUIsc0JBQXNCLDZCQUE2QixPQUFPLHFCQUFxQix3QkFBd0IsaUNBQWlDLHVCQUF1Qiw2QkFBNkIseUJBQXlCLE9BQU8sZ0NBQWdDLHdCQUF3QixzQkFBc0IsMkJBQTJCLHNCQUFzQixrQkFBa0IscUJBQXFCLDBCQUEwQiwwQkFBMEIsT0FBTyxzQ0FBc0Msb0JBQW9CLE9BQU8sd0ZBQXdGLDRDQUE0QyxPQUFPLCtNQUErTSw0Q0FBNEMsT0FBTywwR0FBMEcsOEJBQThCLE9BQU8sNkJBQTZCLGNBQWMsc0NBQXNDLFdBQVcsT0FBTzs7Ozs7Ozs7OztBQ0F6K0ksc0NBQXNDLDZCQUE2QiwrQkFBK0IsOEJBQThCLGtDQUFrQyw0Q0FBNEMsT0FBTyxrQkFBa0IseUJBQXlCLHFCQUFxQixzQkFBc0IsdUJBQXVCLGlEQUFpRCxPQUFPLGlCQUFpQiwrQkFBK0Isd0RBQXdELHdDQUF3QyxpQ0FBaUMsMEJBQTBCLE9BQU8sc0NBQXNDLHVCQUF1QixPQUFPLDJCQUEyQixjQUFjLHdDQUF3QyxXQUFXLE9BQU8sNkJBQTZCLGNBQWMsMkNBQTJDLHFDQUFxQyxXQUFXLGlCQUFpQiw2Q0FBNkMsdUNBQXVDLFdBQVcsa0JBQWtCLDZDQUE2Qyx3Q0FBd0MsV0FBVyxPQUFPOzs7Ozs7Ozs7O0FDQWxtQyxzQ0FBc0Msd0JBQXdCLDZCQUE2QixxQkFBcUIsMEJBQTBCLHNCQUFzQixPQUFPLHVCQUF1QixxQkFBcUIsOEJBQThCLE9BQU8sa0JBQWtCLHVCQUF1Qix3QkFBd0IsNkJBQTZCLDJCQUEyQiw4QkFBOEIsMEJBQTBCLHNCQUFzQiwyQkFBMkIsNkJBQTZCLHVDQUF1QyxzRUFBc0UscURBQXFELDhCQUE4QixPQUFPLGdDQUFnQyxtQ0FBbUMsT0FBTyxvQkFBb0IsNEJBQTRCLE9BQU8scUJBQXFCLHdCQUF3QixPQUFPLHFEQUFxRCx5QkFBeUIsT0FBTyxrREFBa0Qsd0JBQXdCLE9BQU8sd0JBQXdCLDRDQUE0QyxPQUFPOzs7Ozs7Ozs7O0FDQXBtQyxzQ0FBc0MseUJBQXlCLE9BQU8seUJBQXlCLHdCQUF3QixPQUFPLGlCQUFpQix3QkFBd0Isc0NBQXNDLDJCQUEyQiw2QkFBNkIsbURBQW1ELE9BQU8sbUNBQW1DLGtEQUFrRDs7Ozs7Ozs7OztBQ0FwWixzQ0FBc0Msd0JBQXdCLDBCQUEwQixPQUFPLG9CQUFvQix5QkFBeUIsdUJBQXVCLHdCQUF3Qix1QkFBdUIsNkJBQTZCLGtDQUFrQyxPQUFPLHNCQUFzQixzQkFBc0IsNEJBQTRCLE9BQU8sOEJBQThCLGtDQUFrQyw4QkFBOEIsK0JBQStCLE9BQU8sNkJBQTZCLHlFQUF5RSxtREFBbUQsc0JBQXNCLE9BQU8sZUFBZSwrQkFBK0IsT0FBTyxlQUFlLHFCQUFxQixzQkFBc0IsNkJBQTZCLE9BQU87Ozs7Ozs7Ozs7QUNBcHpCLHNDQUFzQyw2QkFBNkIsd0JBQXdCLHlFQUF5RSxpQ0FBaUMsOEJBQThCLHVCQUF1Qiw2QkFBNkIsc0JBQXNCLDREQUE0RCxvQ0FBb0MsMkJBQTJCLDZCQUE2QixPQUFPLDBCQUEwQixpQ0FBaUMsd0JBQXdCLDZCQUE2QiwwQkFBMEIsa0JBQWtCLGlDQUFpQyxPQUFPLHdCQUF3Qiw0QkFBNEIsaUNBQWlDLDJCQUEyQiwwQkFBMEIseUJBQXlCLDRCQUE0QiwwQkFBMEIsT0FBTyx1QkFBdUIsa0JBQWtCLGdDQUFnQyxPQUFPLHlCQUF5QixnQ0FBZ0MsMkJBQTJCLDRCQUE0Qiw4QkFBOEIsT0FBTyxvQkFBb0IsNkJBQTZCLHNCQUFzQixvQkFBb0Isb0JBQW9CLE9BQU8sb0NBQW9DLDBCQUEwQiw0QkFBNEIsT0FBTyx1QkFBdUIsd0JBQXdCLHNCQUFzQix1QkFBdUIsMEJBQTBCLG9DQUFvQyxPQUFPLG1DQUFtQywyQkFBMkIsT0FBTyxpREFBaUQsMEJBQTBCLE9BQU8sc0ZBQXNGLHFCQUFxQixPQUFPOzs7Ozs7Ozs7O0FDQXR0RCxzQ0FBc0MsZ0NBQWdDLDZCQUE2Qiw0QkFBNEIsT0FBTyxxREFBcUQsdUJBQXVCLG9CQUFvQixxREFBcUQsMENBQTBDLE9BQU8sd1BBQXdQLHFEQUFxRCxPQUFPLHVEQUF1RCxxQkFBcUIsbUJBQW1CLG9EQUFvRCxpQ0FBaUMsT0FBTyw4UEFBOFAsb0RBQW9ELE9BQU8sd0RBQXdELG9CQUFvQixvQkFBb0Isb0RBQW9ELHVDQUF1QyxPQUFPLGlRQUFpUSxvREFBb0QsT0FBTyxzREFBc0Qsc0JBQXNCLG1CQUFtQixxREFBcUQsa0NBQWtDLE9BQU8sMlBBQTJQLHFEQUFxRCxPQUFPLHlEQUF5RCxzQkFBc0IsaUJBQWlCLCtDQUErQyxzQ0FBc0MsT0FBTyxvUUFBb1EsK0NBQStDLE9BQU8sNERBQTRELHNCQUFzQixvQkFBb0IsK0NBQStDLHlDQUF5QyxPQUFPLDZRQUE2USwrQ0FBK0MsT0FBTyx5REFBeUQsdUJBQXVCLGtCQUFrQixrREFBa0Qsd0NBQXdDLE9BQU8sb1FBQW9RLGtEQUFrRCxPQUFPLDBEQUEwRCx1QkFBdUIsbUJBQW1CLGtEQUFrRCx5Q0FBeUMsT0FBTyx1UUFBdVEsa0RBQWtELE9BQU8sMERBQTBELHFCQUFxQixpQkFBaUIsOENBQThDLHFDQUFxQyxPQUFPLHVRQUF1USw4Q0FBOEMsT0FBTyw2REFBNkQscUJBQXFCLG9CQUFvQiw4Q0FBOEMsd0NBQXdDLE9BQU8sZ1JBQWdSLDhDQUE4QyxPQUFPLDRHQUE0RyxrQkFBa0Isb0JBQW9CLGlEQUFpRCxxQ0FBcUMsT0FBTyw0ZkFBNGYsaURBQWlELE9BQU8sNkRBQTZELG1CQUFtQixvQkFBb0IsaURBQWlELHNDQUFzQyxPQUFPLGdSQUFnUixpREFBaUQsT0FBTyxpRUFBaUUsc0JBQXNCLHVCQUF1Qiw0QkFBNEIsOEJBQThCLHFDQUFxQyxrREFBa0QsMkJBQTJCLE9BQU8sdUVBQXVFLGtEQUFrRCxPQUFPLCtNQUErTSxxQkFBcUIsOEJBQThCLE9BQU8sY0FBYyxpQ0FBaUMsT0FBTzs7Ozs7Ozs7OztBQ0Fybk8sc0NBQXNDLGdDQUFnQywwQkFBMEIsd0NBQXdDLG1EQUFtRCxPQUFPLDJCQUEyQiwrQkFBK0Isc0JBQXNCLE9BQU8saUNBQWlDLDhCQUE4Qiw4QkFBOEIsT0FBTyxnQkFBZ0IsNkJBQTZCLGlDQUFpQyxPQUFPLHdGQUF3RixtREFBbUQsaURBQWlELHVCQUF1QixPQUFPLG1DQUFtQyx3Q0FBd0MsT0FBTyxlQUFlLGlDQUFpQywwQkFBMEIsd0JBQXdCLDhCQUE4QixxQkFBcUIsT0FBTyxpQkFBaUIsNkJBQTZCLGlDQUFpQyxzQkFBc0IsdUJBQXVCLHdCQUF3Qiw2QkFBNkIsa0VBQWtFLDBCQUEwQiw2QkFBNkIsT0FBTywrQkFBK0IsMEJBQTBCLE9BQU8seUJBQXlCLHNCQUFzQixxQkFBcUIsc0JBQXNCLHVCQUF1Qiw2QkFBNkIsaURBQWlELDhCQUE4QiwrREFBK0QsT0FBTyx3QkFBd0IsNkJBQTZCLHNCQUFzQixzQkFBc0IsdUJBQXVCLGlEQUFpRCw2QkFBNkIsc0JBQXNCLDhCQUE4QixzQkFBc0IsK0RBQStELE9BQU8sbURBQW1ELGdDQUFnQyxPQUFPLDhDQUE4Qyw4QkFBOEIsT0FBTyxzQ0FBc0MsbURBQW1ELE9BQU87Ozs7Ozs7Ozs7QUNBanBFLHNDQUFzQywrQkFBK0IsMEJBQTBCLHlCQUF5QixzQkFBc0IsT0FBTyxlQUFlLDBCQUEwQix5QkFBeUIseUJBQXlCLG1EQUFtRCxPQUFPLCtCQUErQiw2QkFBNkIsdUNBQXVDLGtEQUFrRCw0Q0FBNEMsT0FBTyxtQ0FBbUMsc0NBQXNDLDZEQUE2RCx5QkFBeUIsT0FBTyxrSUFBa0ksNENBQTRDLE9BQU8saURBQWlELDZCQUE2QixPQUFPLGlDQUFpQywrQkFBK0IsT0FBTzs7Ozs7Ozs7OztBQ0F6K0Isc0NBQXNDLGlDQUFpQyx3QkFBd0IseUJBQXlCLE9BQU8sMkJBQTJCLHNDQUFzQyxPQUFPLDJCQUEyQixzQkFBc0IsNkJBQTZCLDhCQUE4QixPQUFPLGlEQUFpRCwrQkFBK0IsT0FBTyx5QkFBeUIsd0JBQXdCLHlCQUF5QixzQkFBc0IsdUJBQXVCLE9BQU8scURBQXFELG9CQUFvQixxQkFBcUIsT0FBTywyQkFBMkIsOEJBQThCLE9BQU8sK0JBQStCLDhCQUE4Qix5QkFBeUIsbUNBQW1DLG1DQUFtQyxxQkFBcUIsdUJBQXVCLDJCQUEyQiw2QkFBNkIsT0FBTyw4REFBOEQsd0JBQXdCLDhCQUE4Qiw2QkFBNkIsc0JBQXNCLDZCQUE2QixvSUFBb0ksb0RBQW9ELHdCQUF3Qiw4QkFBOEIsNkJBQTZCLHNCQUFzQiw2QkFBNkIscUJBQXFCLHVEQUF1RCxpREFBaUQsc0JBQXNCLHdDQUF3QyxPQUFPLHFEQUFxRCxtQ0FBbUMsdURBQXVELDZCQUE2QiwyQkFBMkIsc0JBQXNCLHVCQUF1Qiw2QkFBNkIsaURBQWlELDJEQUEyRCxPQUFPLGlEQUFpRCxpQ0FBaUMsK0JBQStCLHVEQUF1RCw2QkFBNkIsc0JBQXNCLHVCQUF1Qiw2QkFBNkIsaURBQWlELDJEQUEyRCxPQUFPLHFDQUFxQyxxQkFBcUIsT0FBTyxvSEFBb0gsZ0NBQWdDLGtEQUFrRCwyQkFBMkIsT0FBTyw0R0FBNEcsZ0NBQWdDLGtEQUFrRCwyQkFBMkIsT0FBTywyQ0FBMkMsNkJBQTZCLG1CQUFtQixvQkFBb0IsMERBQTBELG9EQUFvRCxtREFBbUQsb0NBQW9DLDRCQUE0QixPQUFPLDJCQUEyQiwrQkFBK0IsNkJBQTZCLHNCQUFzQixPQUFPLDBGQUEwRixzREFBc0QsT0FBTyxrRkFBa0YsNEJBQTRCOzs7Ozs7Ozs7O0FDQTlsSCxzQ0FBc0MsZ0NBQWdDLG1EQUFtRCxPQUFPLDJCQUEyQiwrQkFBK0Isc0JBQXNCLE9BQU8saUNBQWlDLDhCQUE4Qiw4QkFBOEIsT0FBTyxpQkFBaUIsNkJBQTZCLGlDQUFpQyxPQUFPLHdFQUF3RSxpREFBaUQsT0FBTyxtRUFBbUUsMkJBQTJCLGVBQWUsMEJBQTBCLHdCQUF3Qix1QkFBdUIsd0JBQXdCLDBCQUEwQiwrQkFBK0IsMkJBQTJCLGtFQUFrRSxPQUFPLHVCQUF1QixzQkFBc0Isa0JBQWtCLGdFQUFnRSxPQUFPLHNCQUFzQixzQkFBc0Isc0JBQXNCLHVCQUF1QiwrQkFBK0Isa0NBQWtDLDJCQUEyQix3R0FBd0csdURBQXVELE9BQU8sNkJBQTZCLDBCQUEwQixPQUFPLCtCQUErQix5RUFBeUUsT0FBTyx1Q0FBdUMsa0JBQWtCLE9BQU87Ozs7Ozs7Ozs7QUNBMWtEOzs7Ozs7Ozs7O0FDQUEsc0NBQXNDLHlCQUF5Qiw0QkFBNEIsT0FBTyxjQUFjLHdCQUF3QixpQ0FBaUMsdUJBQXVCLDJCQUEyQixPQUFPLHNCQUFzQiw2QkFBNkIsMkJBQTJCLGtDQUFrQyxPQUFPLGtCQUFrQix3QkFBd0IsT0FBTyxtQkFBbUIsNkJBQTZCLDJCQUEyQiwyQkFBMkIseUJBQXlCLG9DQUFvQyxPQUFPLHVEQUF1RCw0Q0FBNEMsT0FBTyxtQkFBbUIsNkJBQTZCLG1CQUFtQiwyQkFBMkIsc0JBQXNCLDZCQUE2QixpREFBaUQsMEJBQTBCLE9BQU8sc0JBQXNCLDJCQUEyQixrQkFBa0IsMEJBQTBCLE9BQU8sMkJBQTJCLHdCQUF3QixzQkFBc0IsdUJBQXVCLDBCQUEwQixPQUFPLGlGQUFpRiw2QkFBNkIsT0FBTywwQ0FBMEMsdUNBQXVDLE9BQU8sMENBQTBDLG1GQUFtRixPQUFPLDJGQUEyRixpQ0FBaUMsT0FBTyxpREFBaUQsZ0hBQWdILE9BQU8sNkNBQTZDLDBCQUEwQixPQUFPLDBDQUEwQywyQkFBMkIsT0FBTyxnR0FBZ0csc0JBQXNCLDZCQUE2Qiw4QkFBOEIsd0JBQXdCLHNCQUFzQixvQkFBb0IsNERBQTRELE9BQU8sa0RBQWtELHNCQUFzQixPQUFPLGlEQUFpRCxxQkFBcUIsT0FBTyxpR0FBaUcsMkJBQTJCLE9BQU8sNENBQTRDLGtDQUFrQyxPQUFPLHlDQUF5QyxvQ0FBb0MsT0FBTyw0QkFBNEIsaUNBQWlDLHNCQUFzQix1QkFBdUIsd0JBQXdCLHlCQUF5Qix5QkFBeUIsT0FBTzs7Ozs7Ozs7OztBQ0FyekYsc0NBQXNDLGdDQUFnQyw2QkFBNkIsNEJBQTRCLE9BQU8sMENBQTBDLHNCQUFzQix5QkFBeUIsNkJBQTZCLHFCQUFxQiw0Q0FBNEMscUJBQXFCLHFEQUFxRCxtREFBbUQsNkJBQTZCLCtCQUErQixPQUFPLHVCQUF1Qix3REFBd0QsNkJBQTZCLDRCQUE0Qiw0QkFBNEIsMkJBQTJCLDhEQUE4RCxzQkFBc0IsMEJBQTBCLDZCQUE2Qiw2QkFBNkIsMkJBQTJCLE9BQU8sc0JBQXNCLG1CQUFtQixvQkFBb0IsMkJBQTJCLHdDQUF3QyxPQUFPLHNZQUFzWSw4QkFBOEIscUJBQXFCLE9BQU8sd0pBQXdKLGdEQUFnRCx1QkFBdUIsNENBQTRDLE9BQU8sbUVBQW1FLCtCQUErQix5Q0FBeUMsT0FBTyw2cEJBQTZwQiw0Q0FBNEMsT0FBTyw2RkFBNkYscUJBQXFCLG1CQUFtQiwyQ0FBMkMsT0FBTyxzQ0FBc0MsNkJBQTZCLDJDQUEyQyxPQUFPLGtXQUFrVywyQ0FBMkMsT0FBTyxnR0FBZ0csZ0RBQWdELG9CQUFvQiwyQ0FBMkMsT0FBTyx3Q0FBd0MsNEJBQTRCLDRDQUE0QyxPQUFPLHdXQUF3VywyQ0FBMkMsT0FBTywwRkFBMEYsc0JBQXNCLG1CQUFtQiw0Q0FBNEMsT0FBTyxzQ0FBc0MsOEJBQThCLDBDQUEwQyxPQUFPLDRWQUE0Viw0Q0FBNEMsT0FBTyxtR0FBbUcsa0JBQWtCLHVCQUF1Qix5Q0FBeUMsT0FBTyx3Q0FBd0MscUJBQXFCLCtCQUErQix5Q0FBeUMsT0FBTyw4V0FBOFcseUNBQXlDLE9BQU8sc0dBQXNHLG1CQUFtQix1QkFBdUIseUNBQXlDLE9BQU8seUNBQXlDLHNCQUFzQiwrQkFBK0IseUNBQXlDLE9BQU8sb1hBQW9YLHlDQUF5QyxPQUFPLHNHQUFzRyxxQkFBcUIsaUJBQWlCLHdDQUF3QyxPQUFPLHlDQUF5QyxvQkFBb0IsNkJBQTZCLDJDQUEyQyxPQUFPLG9YQUFvWCx3Q0FBd0MsT0FBTywrR0FBK0cscUJBQXFCLG9CQUFvQix3Q0FBd0MsT0FBTyw0Q0FBNEMsdUJBQXVCLDZCQUE2QiwyQ0FBMkMsT0FBTyxzWUFBc1ksd0NBQXdDLE9BQU8sNEdBQTRHLGtCQUFrQixvQkFBb0Isd0NBQXdDLE9BQU8sNENBQTRDLHFCQUFxQiw0QkFBNEIsNENBQTRDLE9BQU8sZ1lBQWdZLHdDQUF3QyxPQUFPLCtHQUErRyxtQkFBbUIsb0JBQW9CLHdDQUF3QyxPQUFPLDZDQUE2QyxzQkFBc0IsNEJBQTRCLDRDQUE0QyxPQUFPLHNZQUFzWSx3Q0FBd0MsT0FBTyxtR0FBbUcsc0JBQXNCLGlCQUFpQix5Q0FBeUMsT0FBTyx3Q0FBd0Msb0JBQW9CLDhCQUE4QiwwQ0FBMEMsT0FBTyw4V0FBOFcseUNBQXlDLE9BQU8sNEdBQTRHLHNCQUFzQixvQkFBb0IseUNBQXlDLE9BQU8sMkNBQTJDLHVCQUF1Qiw4QkFBOEIsMENBQTBDLE9BQU8sZ1lBQWdZLHlDQUF5QyxPQUFPLHNEQUFzRCxnREFBZ0QsT0FBTyxrREFBa0QsOENBQThDLE9BQU8sc0RBQXNELCtDQUErQyxPQUFPLGNBQWMsaUNBQWlDLE9BQU87Ozs7OztVQ0E5OVY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOYTs7QUFFK0I7QUFDQTtBQUNJO0FBQ0Y7QUFDTjtBQUNJO0FBQ0k7QUFDTjtBQUNJO0FBQ047QUFDRTtBQUNNO0FBQ1Y7QUFDRTtBQUNNO0FBQ047QUFDWTtBQUNPO0FBQ0c7QUFDOUQsbUJBQW1CLHVFQUFTO0FBQzVCLG9CQUFvQix5RUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL0B5bnFjL3dlYi1jb21wb25lbnRzLWpzLy4vY29tcG9uZW50cy9hd2MtYnV0dG9uL2F3Yy1idXR0b24uanMiLCJ3ZWJwYWNrOi8vQHlucWMvd2ViLWNvbXBvbmVudHMtanMvLi9jb21wb25lbnRzL2F3Yy1jaGVja2JveC9hd2MtY2hlY2tib3guanMiLCJ3ZWJwYWNrOi8vQHlucWMvd2ViLWNvbXBvbmVudHMtanMvLi9jb21wb25lbnRzL2F3Yy1kaWFsb2cvYXdjLWRpYWxvZy5qcyIsIndlYnBhY2s6Ly9AeW5xYy93ZWItY29tcG9uZW50cy1qcy8uL2NvbXBvbmVudHMvYXdjLWRyb3Bkb3duL2F3Yy1kcm9wZG93bi5qcyIsIndlYnBhY2s6Ly9AeW5xYy93ZWItY29tcG9uZW50cy1qcy8uL2NvbXBvbmVudHMvYXdjLWZvcm0vYXdjLWZvcm0taXRlbS5qcyIsIndlYnBhY2s6Ly9AeW5xYy93ZWItY29tcG9uZW50cy1qcy8uL2NvbXBvbmVudHMvYXdjLWZvcm0vYXdjLWZvcm0uanMiLCJ3ZWJwYWNrOi8vQHlucWMvd2ViLWNvbXBvbmVudHMtanMvLi9jb21wb25lbnRzL2F3Yy1pY29uL2F3Yy1pY29uLmpzIiwid2VicGFjazovL0B5bnFjL3dlYi1jb21wb25lbnRzLWpzLy4vY29tcG9uZW50cy9hd2MtaW1nL2F3Yy1pbWcuanMiLCJ3ZWJwYWNrOi8vQHlucWMvd2ViLWNvbXBvbmVudHMtanMvLi9jb21wb25lbnRzL2F3Yy1pbnB1dC9hd2MtaW5wdXQuanMiLCJ3ZWJwYWNrOi8vQHlucWMvd2ViLWNvbXBvbmVudHMtanMvLi9jb21wb25lbnRzL2F3Yy1sb2FkaW5nL2F3Yy1sb2FkaW5nLmpzIiwid2VicGFjazovL0B5bnFjL3dlYi1jb21wb25lbnRzLWpzLy4vY29tcG9uZW50cy9hd2MtbWVzc2FnZS9hd2MtbWVzc2FnZS5qcyIsIndlYnBhY2s6Ly9AeW5xYy93ZWItY29tcG9uZW50cy1qcy8uL2NvbXBvbmVudHMvYXdjLW9wdGlvbi9hd2Mtb3B0aW9uLmpzIiwid2VicGFjazovL0B5bnFjL3dlYi1jb21wb25lbnRzLWpzLy4vY29tcG9uZW50cy9hd2MtcGFnaW5hdGlvbi9hd2MtcGFnaW5hdGlvbi5qcyIsIndlYnBhY2s6Ly9AeW5xYy93ZWItY29tcG9uZW50cy1qcy8uL2NvbXBvbmVudHMvYXdjLXBvcG92ZXIvYXdjLXBvcGJvZHkuanMiLCJ3ZWJwYWNrOi8vQHlucWMvd2ViLWNvbXBvbmVudHMtanMvLi9jb21wb25lbnRzL2F3Yy1wb3BvdmVyL2F3Yy1wb3BvdmVyLmpzIiwid2VicGFjazovL0B5bnFjL3dlYi1jb21wb25lbnRzLWpzLy4vY29tcG9uZW50cy9hd2MtcmFkaW8vYXdjLXJhZGlvLmpzIiwid2VicGFjazovL0B5bnFjL3dlYi1jb21wb25lbnRzLWpzLy4vY29tcG9uZW50cy9hd2MtcmF0ZS9hd2MtcmF0ZS5qcyIsIndlYnBhY2s6Ly9AeW5xYy93ZWItY29tcG9uZW50cy1qcy8uL2NvbXBvbmVudHMvYXdjLXNsaWRlci9hd2Mtc2xpZGVyLmpzIiwid2VicGFjazovL0B5bnFjL3dlYi1jb21wb25lbnRzLWpzLy4vY29tcG9uZW50cy9hd2Mtc3dpdGNoL2F3Yy1zd2l0Y2guanMiLCJ3ZWJwYWNrOi8vQHlucWMvd2ViLWNvbXBvbmVudHMtanMvLi9jb21wb25lbnRzL2F3Yy10YWJzL2F3Yy10YWIuanMiLCJ3ZWJwYWNrOi8vQHlucWMvd2ViLWNvbXBvbmVudHMtanMvLi9jb21wb25lbnRzL2F3Yy10YWJzL2F3Yy10YWJzLmpzIiwid2VicGFjazovL0B5bnFjL3dlYi1jb21wb25lbnRzLWpzLy4vY29tcG9uZW50cy9hd2MtdGV4dGFyZWEvYXdjLXRleHRhcmVhLmpzIiwid2VicGFjazovL0B5bnFjL3dlYi1jb21wb25lbnRzLWpzLy4vY29tcG9uZW50cy9hd2MtdG9vbHRpcC9hd2MtdG9vbHRpcC5qcyIsIndlYnBhY2s6Ly9AeW5xYy93ZWItY29tcG9uZW50cy1qcy8uL2NvbXBvbmVudHMvYXdjLWJ1dHRvbi9hd2MtYnV0dG9uLmh0bWwiLCJ3ZWJwYWNrOi8vQHlucWMvd2ViLWNvbXBvbmVudHMtanMvLi9jb21wb25lbnRzL2F3Yy1jaGVja2JveC9hd2MtY2hlY2tib3guaHRtbCIsIndlYnBhY2s6Ly9AeW5xYy93ZWItY29tcG9uZW50cy1qcy8uL2NvbXBvbmVudHMvYXdjLWRpYWxvZy9hd2MtZGlhbG9nLmh0bWwiLCJ3ZWJwYWNrOi8vQHlucWMvd2ViLWNvbXBvbmVudHMtanMvLi9jb21wb25lbnRzL2F3Yy1kcm9wZG93bi9hd2MtZHJvcGRvd24uaHRtbCIsIndlYnBhY2s6Ly9AeW5xYy93ZWItY29tcG9uZW50cy1qcy8uL2NvbXBvbmVudHMvYXdjLWZvcm0vYXdjLWZvcm0taXRlbS5odG1sIiwid2VicGFjazovL0B5bnFjL3dlYi1jb21wb25lbnRzLWpzLy4vY29tcG9uZW50cy9hd2MtZm9ybS9hd2MtZm9ybS5odG1sIiwid2VicGFjazovL0B5bnFjL3dlYi1jb21wb25lbnRzLWpzLy4vY29tcG9uZW50cy9hd2MtaWNvbi9hd2MtaWNvbi5odG1sIiwid2VicGFjazovL0B5bnFjL3dlYi1jb21wb25lbnRzLWpzLy4vY29tcG9uZW50cy9hd2MtaW1nL2F3Yy1pbWcuaHRtbCIsIndlYnBhY2s6Ly9AeW5xYy93ZWItY29tcG9uZW50cy1qcy8uL2NvbXBvbmVudHMvYXdjLWlucHV0L2F3Yy1pbnB1dC5odG1sIiwid2VicGFjazovL0B5bnFjL3dlYi1jb21wb25lbnRzLWpzLy4vY29tcG9uZW50cy9hd2MtbG9hZGluZy9hd2MtbG9hZGluZy5odG1sIiwid2VicGFjazovL0B5bnFjL3dlYi1jb21wb25lbnRzLWpzLy4vY29tcG9uZW50cy9hd2MtbWVzc2FnZS9hd2MtbWVzc2FnZS5odG1sIiwid2VicGFjazovL0B5bnFjL3dlYi1jb21wb25lbnRzLWpzLy4vY29tcG9uZW50cy9hd2Mtb3B0aW9uL2F3Yy1vcHRpb24uaHRtbCIsIndlYnBhY2s6Ly9AeW5xYy93ZWItY29tcG9uZW50cy1qcy8uL2NvbXBvbmVudHMvYXdjLXBhZ2luYXRpb24vYXdjLXBhZ2luYXRpb24uaHRtbCIsIndlYnBhY2s6Ly9AeW5xYy93ZWItY29tcG9uZW50cy1qcy8uL2NvbXBvbmVudHMvYXdjLXBvcG92ZXIvYXdjLXBvcGJvZHkuaHRtbCIsIndlYnBhY2s6Ly9AeW5xYy93ZWItY29tcG9uZW50cy1qcy8uL2NvbXBvbmVudHMvYXdjLXBvcG92ZXIvYXdjLXBvcG92ZXIuaHRtbCIsIndlYnBhY2s6Ly9AeW5xYy93ZWItY29tcG9uZW50cy1qcy8uL2NvbXBvbmVudHMvYXdjLXJhZGlvL2F3Yy1yYWRpby5odG1sIiwid2VicGFjazovL0B5bnFjL3dlYi1jb21wb25lbnRzLWpzLy4vY29tcG9uZW50cy9hd2MtcmF0ZS9hd2MtcmF0ZS5odG1sIiwid2VicGFjazovL0B5bnFjL3dlYi1jb21wb25lbnRzLWpzLy4vY29tcG9uZW50cy9hd2Mtc2xpZGVyL2F3Yy1zbGlkZXIuaHRtbCIsIndlYnBhY2s6Ly9AeW5xYy93ZWItY29tcG9uZW50cy1qcy8uL2NvbXBvbmVudHMvYXdjLXN3aXRjaC9hd2Mtc3dpdGNoLmh0bWwiLCJ3ZWJwYWNrOi8vQHlucWMvd2ViLWNvbXBvbmVudHMtanMvLi9jb21wb25lbnRzL2F3Yy10YWJzL2F3Yy10YWIuaHRtbCIsIndlYnBhY2s6Ly9AeW5xYy93ZWItY29tcG9uZW50cy1qcy8uL2NvbXBvbmVudHMvYXdjLXRhYnMvYXdjLXRhYnMuaHRtbCIsIndlYnBhY2s6Ly9AeW5xYy93ZWItY29tcG9uZW50cy1qcy8uL2NvbXBvbmVudHMvYXdjLXRvb2x0aXAvYXdjLXRvb2x0aXAuaHRtbCIsIndlYnBhY2s6Ly9AeW5xYy93ZWItY29tcG9uZW50cy1qcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AeW5xYy93ZWItY29tcG9uZW50cy1qcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9AeW5xYy93ZWItY29tcG9uZW50cy1qcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vQHlucWMvd2ViLWNvbXBvbmVudHMtanMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9AeW5xYy93ZWItY29tcG9uZW50cy1qcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0B5bnFjL3dlYi1jb21wb25lbnRzLWpzLy4vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCAnLi4vYXdjLWxvYWRpbmcvYXdjLWxvYWRpbmcuanMnXG5pbXBvcnQgJy4uL2F3Yy1pY29uL2F3Yy1pY29uLmpzJ1xuaW1wb3J0IGh0bWwgZnJvbSAnLi9hd2MtYnV0dG9uLmh0bWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBd2NCdXR0b24gZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG5cdHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xuXHRcdHJldHVybiBbJ2Rpc2FibGVkJywgJ2ljb24nLCAnbG9hZGluZyddO1xuXHR9XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLl9yZW5kZXIoKTtcblx0fVxuXG5cdGdldCBkaXNhYmxlZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJykgIT09IG51bGw7XG5cdH1cblxuICAgIHNldCBkaXNhYmxlZCh2YWx1ZSkge1xuXHRcdGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gZmFsc2UpIHtcblx0XHRcdHRoaXMucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJyk7XG5cdFx0fVxuXHR9XG5cblx0Z2V0IGljb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdpY29uJyk7XG5cdH1cblxuICAgIHNldCBpY29uKHZhbHVlKSB7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGUoJ2ljb24nLCB2YWx1ZSk7XG5cdH1cblxuXHRnZXQgbG9hZGluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2xvYWRpbmcnKSAhPT0gbnVsbDtcblx0fVxuXG5cdHNldCBsb2FkaW5nKHZhbHVlKSB7XG5cdFx0aWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSBmYWxzZSkge1xuXHRcdFx0dGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ2xvYWRpbmcnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zZXRBdHRyaWJ1dGUoJ2xvYWRpbmcnLCAnJyk7XG5cdFx0fVxuXHR9XG5cbiAgICBmb2N1cygpIHtcblx0XHR0aGlzLmJ0bkVsLmZvY3VzKCk7XG5cdH1cblxuXHRjb25uZWN0ZWRDYWxsYmFjaygpIHtcblx0XHR0aGlzLmJ0bkVsID0gdGhpcy5zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKCdidG4nKTtcblx0XHR0aGlzLmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZDtcblx0XHR0aGlzLmxvYWRpbmcgPSB0aGlzLmxvYWRpbmc7XG4gICAgICAgIGlmICghdGhpcy5sb2FkaW5nICYmIHRoaXMuaWNvbiAmJiB0aGlzLmljb24gIT0gJ251bGwnKSB7XG4gICAgICAgICAgICB0aGlzLmljb25FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2F3Yy1pY29uJyk7XG4gICAgICAgICAgICB0aGlzLmljb25FbC5uYW1lID0gdGhpcy5pY29uO1xuICAgICAgICAgICAgdGhpcy5zaGFkb3dSb290LnByZXBlbmQodGhpcy5pY29uRWwpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxvYWRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZEVMID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXdjLWxvYWRpbmcnKTtcbiAgICAgICAgICAgIHRoaXMubG9hZEVMLnN0eWxlLmNvbG9yID0gJ2luaGVyaXQnO1xuICAgICAgICAgICAgdGhpcy5zaGFkb3dSb290LnByZXBlbmQodGhpcy5sb2FkRUwpO1xuICAgICAgICB9XG5cdH1cblxuXHRhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG5cdFx0aWYgKG5hbWUgPT0gJ2Rpc2FibGVkJyAmJiB0aGlzLmJ0bkVsKSB7XG5cdFx0XHRpZiAobmV3VmFsdWUgIT09IG51bGwpIHtcblx0XHRcdFx0dGhpcy5idG5FbC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmJ0bkVsLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKG5hbWUgPT0gJ2xvYWRpbmcnICYmIHRoaXMubG9hZEVMKSB7XG5cdFx0XHRpZiAobmV3VmFsdWUgIT09IG51bGwpIHtcblx0XHRcdFx0dGhpcy5zaGFkb3dSb290LnByZXBlbmQodGhpcy5sb2FkRUwpO1xuXHRcdFx0XHR0aGlzLmJ0bkVsLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuc2hhZG93Um9vdC5yZW1vdmVDaGlsZCh0aGlzLmxvYWRFTCk7XG5cdFx0XHRcdHRoaXMuYnRuRWwucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAobmFtZSA9PSAnaWNvbicgJiYgdGhpcy5pY29uRWwpIHtcblx0XHRcdHRoaXMuaWNvbkVsLm5hbWUgPSBuZXdWYWx1ZVxuXHRcdH1cblx0fVxuXG4gICAgX3JlbmRlcigpIHtcbiAgICAgICAgY29uc3Qgc2hhZG93Um9vdCA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuXHRcdHNoYWRvd1Jvb3QuaW5uZXJIVE1MID0gaHRtbDtcbiAgICB9XG59XG5cbmlmICghY3VzdG9tRWxlbWVudHMuZ2V0KCdhd2MtYnV0dG9uJykpIHtcblx0Y3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhd2MtYnV0dG9uJywgQXdjQnV0dG9uKVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBodG1sIGZyb20gJy4vYXdjLWNoZWNrYm94Lmh0bWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBd2NDaGVja2JveCBleHRlbmRzIEhUTUxFbGVtZW50IHtcblx0c3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XG5cdFx0cmV0dXJuIFsnZGlzYWJsZWQnLCAnY2hlY2tlZCddO1xuXHR9XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLl9yZW5kZXIoKTtcblx0fVxuXG5cdGdldCBkaXNhYmxlZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJykgIT09IG51bGw7XG5cdH1cblxuXHRzZXQgZGlzYWJsZWQodmFsdWUpIHtcblx0XHRpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IGZhbHNlKSB7XG5cdFx0XHR0aGlzLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpO1xuXHRcdH1cblx0fVxuXG5cdGdldCBjaGVja2VkKCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnY2hlY2tlZCcpICE9PSBudWxsO1xuXHR9XG5cblx0c2V0IGNoZWNrZWQodmFsdWUpIHtcblx0XHRpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IGZhbHNlKSB7XG5cdFx0XHR0aGlzLnJlbW92ZUF0dHJpYnV0ZSgnY2hlY2tlZCcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICcnKTtcblx0XHR9XG5cdH1cblxuXHRnZXQgaW5kZXRlcm1pbmF0ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5jaGVja2JveEVsLmluZGV0ZXJtaW5hdGU7XG5cdH1cblxuXHRzZXQgaW5kZXRlcm1pbmF0ZSh2YWx1ZSkge1xuXHRcdGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gZmFsc2UpIHtcblx0XHRcdHRoaXMuY2hlY2tib3hFbC5pbmRldGVybWluYXRlID0gZmFsc2U7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuY2hlY2tib3hFbC5pbmRldGVybWluYXRlID0gdHJ1ZTtcblx0XHR9XG5cdH1cblxuXHRnZXQgdmFsdWUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCd2YWx1ZScpIHx8IHRoaXMudGV4dENvbnRlbnQ7XG5cdH1cblxuXHRzZXQgdmFsdWUodmFsdWUpIHtcblx0XHR0aGlzLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHZhbHVlKTtcblx0fVxuXG5cdGdldCBuYW1lKCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnbmFtZScpO1xuXHR9XG5cblx0c2V0IG5hbWUodmFsdWUpIHtcblx0XHR0aGlzLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgdmFsdWUpO1xuXHR9XG5cblx0Zm9jdXMoKSB7XG5cdFx0dGhpcy5jaGVja2JveEVsLmZvY3VzKCk7XG5cdH1cblxuXHRhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG5cdFx0aWYgKG5hbWUgPT0gJ2Rpc2FibGVkJyAmJiB0aGlzLmNoZWNrYm94RWwpIHtcblx0XHRcdGlmIChuZXdWYWx1ZSAhPT0gbnVsbCkge1xuXHRcdFx0XHR0aGlzLmNoZWNrYm94RWwuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5jaGVja2JveEVsLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKG5hbWUgPT0gJ2NoZWNrZWQnICYmIHRoaXMuY2hlY2tib3hFbCkge1xuXHRcdFx0aWYgKG5ld1ZhbHVlICE9PSBudWxsKSB7XG5cdFx0XHRcdHRoaXMuY2hlY2tib3hFbC5jaGVja2VkID0gdHJ1ZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuY2hlY2tib3hFbC5jaGVja2VkID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Y29ubmVjdGVkQ2FsbGJhY2soKSB7XG5cdFx0dGhpcy5jaGVja2JveEVsID0gdGhpcy5zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKCdjaGVja2JveCcpO1xuXHRcdHRoaXMuZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkO1xuXHRcdHRoaXMuY2hlY2tlZCA9IHRoaXMuY2hlY2tlZDtcblx0XHR0aGlzLmNoZWNrYm94RWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2KSA9PiB7XG5cdFx0XHR0aGlzLmNoZWNrZWQgPSB0aGlzLmNoZWNrYm94RWwuY2hlY2tlZDtcblx0XHRcdHRoaXMuZGlzcGF0Y2hFdmVudChcblx0XHRcdFx0bmV3IEN1c3RvbUV2ZW50KCdjaGFuZ2UnLCB7XG5cdFx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0XHRjaGVja2VkOiB0aGlzLmNoZWNrZWQsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdFx0fSk7XG5cdFx0dGhpcy5jaGVja2JveEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKGV2KSA9PiB7XG5cdFx0XHRldi5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdGlmICghdGhpcy5faXNmb2N1cykge1xuXHRcdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoXG5cdFx0XHRcdFx0bmV3IEN1c3RvbUV2ZW50KCdmb2N1cycsIHtcblx0XHRcdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdFx0XHR2YWx1ZTogdGhpcy52YWx1ZSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHR0aGlzLmNoZWNrYm94RWwuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIChldikgPT4ge1xuXHRcdFx0ZXYuc3RvcFByb3BhZ2F0aW9uKClcblx0XHRcdGlmIChnZXRDb21wdXRlZFN0eWxlKHRoaXMuY2hlY2tib3hFbCkuekluZGV4ID09IDIpIHtcblx0XHRcdFx0dGhpcy5faXNmb2N1cyA9IHRydWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLl9pc2ZvY3VzID0gZmFsc2U7XG5cdFx0XHRcdHRoaXMuZGlzcGF0Y2hFdmVudChcblx0XHRcdFx0XHRuZXcgQ3VzdG9tRXZlbnQoJ2JsdXInLCB7XG5cdFx0XHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRcdFx0dmFsdWU6IHRoaXMudmFsdWUsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRfcmVuZGVyKCkge1xuXHRcdGNvbnN0IHNoYWRvd1Jvb3QgPSB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcblx0XHRzaGFkb3dSb290LmlubmVySFRNTCA9IGh0bWw7XG5cdH1cbn1cblxuaWYgKCFjdXN0b21FbGVtZW50cy5nZXQoJ2F3Yy1jaGVja2JveCcpKSB7XG5cdGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXdjLWNoZWNrYm94JywgQXdjQ2hlY2tib3gpO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCAnLi4vYXdjLWJ1dHRvbi9hd2MtYnV0dG9uLmpzJ1xuaW1wb3J0IGh0bWwgZnJvbSAnLi9hd2MtZGlhbG9nLmh0bWwnO1xuXG5jbGFzcyBBd2NEaWFsb2cgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG5cdHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xuXHRcdHJldHVybiBbJ29wZW4nLCAndGl0bGUnLCAnb2t0ZXh0JywgJ2NhbmNlbHRleHQnLCAndHlwZSddXG5cdH1cblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuX3JlbmRlcigpO1xuXHR9XG5cblx0Z2V0IG9wZW4oKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdvcGVuJykgIT09IG51bGw7XG5cdH1cblxuXHRzZXQgb3Blbih2YWx1ZSkge1xuXHRcdGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gZmFsc2UpIHtcblx0XHRcdHRoaXMucmVtb3ZlQXR0cmlidXRlKCdvcGVuJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2V0QXR0cmlidXRlKCdvcGVuJywgJycpO1xuXHRcdH1cblx0fVxuXG5cdGdldCB0aXRsZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ3RpdGxlJykgfHwgJ2RpYWxvZyc7XG5cdH1cblxuXHRzZXQgdGl0bGUodmFsdWUpIHtcblx0XHR0aGlzLnNldEF0dHJpYnV0ZSgndGl0bGUnLCB2YWx1ZSk7XG5cdH1cblxuXHRnZXQgdHlwZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ3R5cGUnKTtcblx0fVxuXG5cdHNldCB0eXBlKHZhbHVlKSB7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCB2YWx1ZSk7XG5cdH1cblxuXHRnZXQgb2t0ZXh0KCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnb2t0ZXh0JykgfHwgJ29rJztcblx0fVxuXG5cdHNldCBva3RleHQodmFsdWUpIHtcblx0XHR0aGlzLnNldEF0dHJpYnV0ZSgnb2t0ZXh0JywgdmFsdWUpO1xuXHR9XG5cblx0Z2V0IGNhbmNlbHRleHQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdjYW5jZWx0ZXh0JykgfHwgJ2NhbmNlbCc7XG5cdH1cblxuXHRzZXQgY2FuY2VsdGV4dCh2YWx1ZSkge1xuXHRcdHRoaXMuc2V0QXR0cmlidXRlKCdjYW5jZWx0ZXh0JywgdmFsdWUpO1xuXHR9XG5cblx0YXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSkge1xuXHRcdGlmIChuYW1lID09ICdvcGVuJyAmJiB0aGlzLnNoYWRvd1Jvb3QpIHtcblx0XHRcdGlmIChuZXdWYWx1ZSAhPT0gbnVsbCkge1xuXHRcdFx0XHR0aGlzLmJ0bkFjdGl2ZUVsID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKG5hbWUgPT0gJ3RpdGxlJyAmJiB0aGlzLnRpdGxlRWwpIHtcblx0XHRcdGlmIChuZXdWYWx1ZSAhPT0gbnVsbCkge1xuXHRcdFx0XHR0aGlzLnRpdGxlRWwudGV4dENvbnRlbnQgPSBuZXdWYWx1ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKG5hbWUgPT0gJ29rdGV4dCcgJiYgdGhpcy5idG5TdWJtaXRFbCkge1xuXHRcdFx0aWYgKG5ld1ZhbHVlICE9PSBudWxsKSB7XG5cdFx0XHRcdHRoaXMuYnRuU3VibWl0RWwudGV4dENvbnRlbnQgPSBuZXdWYWx1ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKG5hbWUgPT0gJ2NhbmNlbHRleHQnICYmIHRoaXMuYnRuQ2FuY2VsRWwpIHtcblx0XHRcdGlmIChuZXdWYWx1ZSAhPT0gbnVsbCkge1xuXHRcdFx0XHR0aGlzLmJ0bkNhbmNlbEVsLnRleHRDb250ZW50ID0gbmV3VmFsdWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChuYW1lID09ICd0eXBlJyAmJiB0aGlzLmRpYWxvZ0ljb25FbCkge1xuXHRcdFx0aWYgKG5ld1ZhbHVlICE9PSBudWxsKSB7XG5cdFx0XHRcdHRoaXMuZGlhbG9nSWNvbkVsLm5hbWUgPSB0aGlzLl90eXBlTWFwKG5ld1ZhbHVlKS5uYW1lO1xuXHRcdFx0XHR0aGlzLmRpYWxvZ0ljb25FbC5jb2xvciA9IHRoaXMuX3R5cGVNYXAobmV3VmFsdWUpLmNvbG9yO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGNvbm5lY3RlZENhbGxiYWNrKCkge1xuXHRcdHRoaXMucmVtb3ZlID0gZmFsc2U7XG5cdFx0dGhpcy5fYXV0b2Nsb3NlID0gdHJ1ZTtcblx0XHR0aGlzLnRpdGxlRWwgPSB0aGlzLnNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJyk7XG5cdFx0dGhpcy5idG5DbG9zZUVsID0gdGhpcy5zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKCdidG4tY2xvc2UnKTtcblx0XHR0aGlzLmJ0bkNhbmNlbEVsID0gdGhpcy5zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKCdidG4tY2FuY2VsJyk7XG5cdFx0dGhpcy5idG5TdWJtaXRFbCA9IHRoaXMuc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZCgnYnRuLXN1Ym1pdCcpO1xuXHRcdHRoaXMuZGlhbG9nSWNvbkVsID0gdGhpcy5zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKCdkaWFsb2ctaWNvbicpO1xuXHRcdHRoaXMudGl0bGVFbC5pbm5lckhUTUwgPSB0aGlzLnRpdGxlO1xuXHRcdHRoaXMuYnRuQ2FuY2VsRWwuaW5uZXJIVE1MID0gdGhpcy5jYW5jZWx0ZXh0O1xuXHRcdHRoaXMuYnRuU3VibWl0RWwuaW5uZXJIVE1MID0gdGhpcy5va3RleHQ7XG5cdFx0dGhpcy5zaGFkb3dSb290LmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCAoZXYpID0+IHtcblx0XHRcdGlmIChldi5wcm9wZXJ0eU5hbWUgPT09ICd0cmFuc2Zvcm0nICYmIHRoaXMub3Blbikge1xuXHRcdFx0XHR0aGlzLmJ0blN1Ym1pdEVsLmZvY3VzKCk7XG5cdFx0XHR9XG5cdFx0fSlcblx0XHR0aGlzLnNoYWRvd1Jvb3QuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIChldikgPT4ge1xuXHRcdFx0aWYgKGV2LnByb3BlcnR5TmFtZSA9PT0gJ3RyYW5zZm9ybScgJiYgIXRoaXMub3Blbikge1xuXHRcdFx0XHRpZiAodGhpcy5yZW1vdmUpIHtcblx0XHRcdFx0XHRkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2Nsb3NlJykpO1xuXHRcdFx0XHR0aGlzLmJ0bkFjdGl2ZUVsICYmIHRoaXMuYnRuQWN0aXZlRWwuZm9jdXMoKTtcblx0XHRcdH1cblx0XHR9KVxuXHRcdHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCAoZXYpID0+IHtcblx0XHRcdGV2LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0fSk7XG5cdFx0dGhpcy5idG5DbG9zZUVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5vcGVuID0gZmFsc2U7XG5cdFx0fSk7XG5cdFx0dGhpcy5idG5DYW5jZWxFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcblx0XHRcdHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2NhbmNlbCcpKTtcblx0XHRcdHRoaXMub3BlbiA9IGZhbHNlO1xuXHRcdH0pO1xuXHRcdHRoaXMuYnRuU3VibWl0RWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdzdWJtaXQnKSk7XG5cdFx0XHRpZiAodGhpcy5fYXV0b2Nsb3NlKSB7XG5cdFx0XHRcdHRoaXMub3BlbiA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cdF90eXBlTWFwKHR5cGUpIHtcblx0XHRsZXQgbmFtZSA9ICcnO1xuXHRcdGxldCBjb2xvciA9ICcnO1xuXHRcdHN3aXRjaCAodHlwZSkge1xuXHRcdFx0Y2FzZSAnaW5mbyc6XG5cdFx0XHRcdG5hbWUgPSAnaW5mby1jaXJjbGUnO1xuXHRcdFx0XHRjb2xvciA9ICd2YXIoLS1pbmZvQ29sb3IsICMxODkwZmYpJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdzdWNjZXNzJzpcblx0XHRcdFx0bmFtZSA9ICdjaGVjay1jaXJjbGUnXG5cdFx0XHRcdGNvbG9yID0gJ3ZhcigtLXN1Y2Nlc3NDb2xvciwgIzUyYzQxYSknO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2Vycm9yJzpcblx0XHRcdFx0bmFtZSA9ICdjbG9zZS1jaXJjbGUnXG5cdFx0XHRcdGNvbG9yID0gJ3ZhcigtLWVycm9yQ29sb3IsICNmNDYxNWMpJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICd3YXJuaW5nJzpcblx0XHRcdFx0bmFtZSA9ICd3YXJuaW5nLWNpcmNsZSdcblx0XHRcdFx0Y29sb3IgPSAndmFyKC0td2FyaW5nQ29sb3IsICNmYWFkMTQpJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdjb25maXJtJzpcblx0XHRcdFx0bmFtZSA9ICdxdWVzdGlvbi1jaXJjbGUnXG5cdFx0XHRcdGNvbG9yID0gJ3ZhcigtLXdhcmluZ0NvbG9yLCAjZmFhZDE0KSc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdHJldHVybiB7XG5cdFx0XHRuYW1lOiBuYW1lLFxuXHRcdFx0Y29sb3I6IGNvbG9yLFxuXHRcdH07XG5cdH1cblx0X3JlbmRlcigpIHtcblx0XHRjb25zdCBzaGFkb3dSb290ID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG5cdFx0c2hhZG93Um9vdC5pbm5lckhUTUwgPSBodG1sO1xuXHR9XG59XG5cbmlmICghY3VzdG9tRWxlbWVudHMuZ2V0KCdhd2MtZGlhbG9nJykpIHtcblx0Y3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhd2MtZGlhbG9nJywgQXdjRGlhbG9nKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuXHRhbGVydDogKGNvbmZpZywgb2tDYWxsYmFjaykgPT4ge1xuXHRcdGNvbnN0IGRpYWxvZyA9IG5ldyBBd2NEaWFsb2coKTtcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpYWxvZyk7XG5cdFx0ZGlhbG9nLnJlbW92ZSA9IHRydWU7XG5cdFx0aWYgKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRjb25zdCB7IHRpdGxlLCBva3RleHQsIGNvbnRlbnQsIG9rIH0gPSBjb25maWc7XG5cdFx0XHRkaWFsb2cudGl0bGUgPSB0aXRsZSB8fCAnQWxlcnQnO1xuXHRcdFx0ZGlhbG9nLm9rdGV4dCA9IG9rdGV4dCB8fCAnT0snO1xuXHRcdFx0ZGlhbG9nLm9uc3VibWl0ID0gb2sgfHwgbnVsbDtcblx0XHRcdGRpYWxvZy5pbm5lckhUTUwgPSBjb250ZW50IHx8ICcnO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkaWFsb2cudGl0bGUgPSAnQWxlcnQnO1xuXHRcdFx0ZGlhbG9nLm9rdGV4dCA9ICdPSyc7XG5cdFx0XHRkaWFsb2cuaW5uZXJIVE1MID0gY29uZmlnIHx8ICcnO1xuXHRcdFx0ZGlhbG9nLm9uc3VibWl0ID0gb2tDYWxsYmFjayB8fCBudWxsO1xuXHRcdH1cblx0XHRkaWFsb2cub3BlbiA9IHRydWU7XG5cdFx0cmV0dXJuIGRpYWxvZztcblx0fSxcblxuXHRpbmZvOiAoY29uZmlnLCBva0NhbGxiYWNrKSA9PiB7XG5cdFx0Y29uc3QgZGlhbG9nID0gbmV3IEF3Y0RpYWxvZygpO1xuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGlhbG9nKTtcblx0XHRkaWFsb2cudHlwZSA9ICdpbmZvJztcblx0XHRkaWFsb2cucmVtb3ZlID0gdHJ1ZTtcblx0XHRpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcpIHtcblx0XHRcdGNvbnN0IHsgdGl0bGUsIG9rdGV4dCwgY29udGVudCwgb2sgfSA9IGNvbmZpZztcblx0XHRcdGRpYWxvZy50aXRsZSA9IHRpdGxlIHx8ICdJbmZvJztcblx0XHRcdGRpYWxvZy5va3RleHQgPSBva3RleHQgfHwgJ09LJztcblx0XHRcdGRpYWxvZy5vbnN1Ym1pdCA9IG9rIHx8IG51bGw7XG5cdFx0XHRkaWFsb2cuaW5uZXJIVE1MID0gY29udGVudCB8fCAnJztcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZGlhbG9nLnRpdGxlID0gJ0luZm8nO1xuXHRcdFx0ZGlhbG9nLm9rdGV4dCA9ICdPSyc7XG5cdFx0XHRkaWFsb2cuaW5uZXJIVE1MID0gY29uZmlnIHx8ICcnO1xuXHRcdFx0ZGlhbG9nLm9uc3VibWl0ID0gb2tDYWxsYmFjayB8fCBudWxsO1xuXHRcdH1cblx0XHRkaWFsb2cub3BlbiA9IHRydWU7XG5cdFx0cmV0dXJuIGRpYWxvZztcblx0fSxcblxuXHRzdWNjZXNzOiAoY29uZmlnLCBva0NhbGxiYWNrKSA9PiB7XG5cdFx0Y29uc3QgZGlhbG9nID0gbmV3IEF3Y0RpYWxvZygpO1xuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGlhbG9nKTtcblx0XHRkaWFsb2cudHlwZSA9ICdzdWNjZXNzJztcblx0XHRkaWFsb2cucmVtb3ZlID0gdHJ1ZTtcblx0XHRpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcpIHtcblx0XHRcdGNvbnN0IHsgdGl0bGUsIG9rdGV4dCwgY29udGVudCwgb2sgfSA9IGNvbmZpZztcblx0XHRcdGRpYWxvZy50aXRsZSA9IHRpdGxlIHx8ICdTdWNjZXNzJztcblx0XHRcdGRpYWxvZy5va3RleHQgPSBva3RleHQgfHwgJ09LJztcblx0XHRcdGRpYWxvZy5vbnN1Ym1pdCA9IG9rIHx8IG51bGw7XG5cdFx0XHRkaWFsb2cuaW5uZXJIVE1MID0gY29udGVudCB8fCAnJztcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZGlhbG9nLnRpdGxlID0gJ1N1Y2Nlc3MnO1xuXHRcdFx0ZGlhbG9nLm9rdGV4dCA9ICdPSyc7XG5cdFx0XHRkaWFsb2cuaW5uZXJIVE1MID0gY29uZmlnIHx8ICcnO1xuXHRcdFx0ZGlhbG9nLm9uc3VibWl0ID0gb2tDYWxsYmFjayB8fCBudWxsO1xuXHRcdH1cblx0XHRkaWFsb2cub3BlbiA9IHRydWU7XG5cdFx0cmV0dXJuIGRpYWxvZztcblx0fSxcblxuXHRlcnJvcjogKGNvbmZpZywgb2tDYWxsYmFjaykgPT4ge1xuXHRcdGNvbnN0IGRpYWxvZyA9IG5ldyBBd2NEaWFsb2coKTtcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpYWxvZyk7XG5cdFx0ZGlhbG9nLnR5cGUgPSAnZXJyb3InO1xuXHRcdGRpYWxvZy5yZW1vdmUgPSB0cnVlO1xuXHRcdGlmICh0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0Jykge1xuXHRcdFx0Y29uc3QgeyB0aXRsZSwgb2t0ZXh0LCBjb250ZW50LCBvayB9ID0gY29uZmlnO1xuXHRcdFx0ZGlhbG9nLnRpdGxlID0gdGl0bGUgfHwgJ0Vycm9yJztcblx0XHRcdGRpYWxvZy5va3RleHQgPSBva3RleHQgfHwgJ09LJztcblx0XHRcdGRpYWxvZy5vbnN1Ym1pdCA9IG9rIHx8IG51bGw7XG5cdFx0XHRkaWFsb2cuaW5uZXJIVE1MID0gY29udGVudCB8fCAnJztcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZGlhbG9nLnRpdGxlID0gJ0Vycm9yJztcblx0XHRcdGRpYWxvZy5va3RleHQgPSAnT0snO1xuXHRcdFx0ZGlhbG9nLmlubmVySFRNTCA9IGNvbmZpZyB8fCAnJztcblx0XHRcdGRpYWxvZy5vbnN1Ym1pdCA9IG9rQ2FsbGJhY2sgfHwgbnVsbDtcblx0XHR9XG5cdFx0ZGlhbG9nLm9wZW4gPSB0cnVlO1xuXHRcdHJldHVybiBkaWFsb2c7XG5cdH0sXG5cblx0d2FybmluZzogKGNvbmZpZywgb2tDYWxsYmFjaykgPT4ge1xuXHRcdGNvbnN0IGRpYWxvZyA9IG5ldyBBd2NEaWFsb2coKTtcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpYWxvZyk7XG5cdFx0ZGlhbG9nLnR5cGUgPSAnd2FybmluZyc7XG5cdFx0ZGlhbG9nLnJlbW92ZSA9IHRydWU7XG5cdFx0aWYgKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRjb25zdCB7IHRpdGxlLCBva3RleHQsIGNvbnRlbnQsIG9rIH0gPSBjb25maWc7XG5cdFx0XHRkaWFsb2cudGl0bGUgPSB0aXRsZSB8fCAnV2FybmluZyc7XG5cdFx0XHRkaWFsb2cub2t0ZXh0ID0gb2t0ZXh0IHx8ICdPSyc7XG5cdFx0XHRkaWFsb2cub25zdWJtaXQgPSBvayB8fCBudWxsO1xuXHRcdFx0ZGlhbG9nLmlubmVySFRNTCA9IGNvbnRlbnQgfHwgJyc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRpYWxvZy50aXRsZSA9ICdXYXJuaW5nJztcblx0XHRcdGRpYWxvZy5va3RleHQgPSAnT0snO1xuXHRcdFx0ZGlhbG9nLmlubmVySFRNTCA9IGNvbmZpZyB8fCAnJztcblx0XHRcdGRpYWxvZy5vbnN1Ym1pdCA9IG9rQ2FsbGJhY2sgfHwgbnVsbDtcblx0XHR9XG5cdFx0ZGlhbG9nLm9wZW4gPSB0cnVlO1xuXHRcdHJldHVybiBkaWFsb2c7XG5cdH0sXG5cblx0Y29uZmlybTogKGNvbmZpZywgb2tDYWxsYmFjaywgY2FuY2VsQ2FsbGJhY2spID0+IHtcblx0XHRjb25zdCBkaWFsb2cgPSBuZXcgQXdjRGlhbG9nKCk7XG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaWFsb2cpO1xuXHRcdGRpYWxvZy5yZW1vdmUgPSB0cnVlO1xuXHRcdGRpYWxvZy5idG5DYW5jZWxFbC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuXHRcdGlmICh0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0Jykge1xuXHRcdFx0Y29uc3QgeyB0eXBlLCB0aXRsZSwgY29udGVudCwgb2t0ZXh0LCBjYW5jZWx0ZXh0LCBvaywgY2FuY2VsIH0gPSBjb25maWc7XG5cdFx0XHRkaWFsb2cudHlwZSA9IHR5cGUgfHwgJ2NvbmZpcm0nO1xuXHRcdFx0ZGlhbG9nLnRpdGxlID0gdGl0bGUgfHwgJ0NvbmZpcm0nO1xuXHRcdFx0ZGlhbG9nLm9rdGV4dCA9IG9rdGV4dCB8fCAnT0snO1xuXHRcdFx0ZGlhbG9nLmNhbmNlbHRleHQgPSBjYW5jZWx0ZXh0IHx8ICdDYW5jZWwnO1xuXHRcdFx0ZGlhbG9nLmlubmVySFRNTCA9IGNvbnRlbnQgfHwgJyc7XG5cdFx0XHRkaWFsb2cub25zdWJtaXQgPSBvayB8fCBudWxsO1xuXHRcdFx0ZGlhbG9nLm9uY2FuY2VsID0gY2FuY2VsIHx8IG51bGw7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRpYWxvZy50eXBlID0gJ2NvbmZpcm0nO1xuXHRcdFx0ZGlhbG9nLnRpdGxlID0gJ0NvbmZpcm0nO1xuXHRcdFx0ZGlhbG9nLm9rdGV4dCA9ICdPSyc7XG5cdFx0XHRkaWFsb2cuY2FuY2VsdGV4dCA9ICdDYW5jZWwnXG5cdFx0XHRkaWFsb2cuaW5uZXJIVE1MID0gY29uZmlnIHx8ICcnO1xuXHRcdFx0ZGlhbG9nLm9uc3VibWl0ID0gb2tDYWxsYmFjayB8fCBudWxsO1xuXHRcdFx0ZGlhbG9nLm9uY2FuY2VsID0gY2FuY2VsQ2FsbGJhY2sgfHwgbnVsbDtcblx0XHR9XG5cdFx0ZGlhbG9nLm9wZW4gPSB0cnVlO1xuXHRcdHJldHVybiBkaWFsb2c7XG5cdH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgJy4uL2F3Yy1vcHRpb24vYXdjLW9wdGlvbidcbmltcG9ydCAnLi4vYXdjLXBvcG92ZXIvYXdjLXBvcG92ZXInO1xuaW1wb3J0IGh0bWwgZnJvbSAnLi9hd2MtZHJvcGRvd24uaHRtbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF3Y0Ryb3Bkb3duIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuXHRzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcblx0XHRyZXR1cm4gWyd2YWx1ZScsICdkaXNhYmxlZCcsICd0eXBlJ107XG5cdH1cblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuX3JlbmRlcigpO1xuXHR9XG5cblx0Z2V0IGRlZmF1bHR2YWx1ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RlZmF1bHR2YWx1ZScpIHx8ICcnO1xuXHR9XG5cblx0c2V0IGRlZmF1bHR2YWx1ZSh2YWx1ZSkge1xuXHRcdHRoaXMuc2V0QXR0cmlidXRlKCdkZWZhdWx0dmFsdWUnLCB2YWx1ZSk7XG5cdH1cblxuXHRnZXQgdmFsdWUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3ZhbHVlIHx8ICcnO1xuXHR9XG5cblx0c2V0IHZhbHVlKHZhbHVlKSB7XG5cdFx0aWYgKHZhbHVlID09PSAnJykge1xuXHRcdFx0dGhpcy5fdmFsdWUgPSAnJztcblx0XHRcdHRoaXMuX3RleHQgPSB0aGlzLnBsYWNlaG9sZGVyO1xuXHRcdFx0aWYgKHRoaXMuX2ZvY3VzSW5kZXggPj0gMCkge1xuXHRcdFx0XHRjb25zdCBjdXJyZW50ID0gdGhpcy5ub2Rlc1t0aGlzLl9mb2N1c0luZGV4XTtcblx0XHRcdFx0aWYgKGN1cnJlbnQpIHtcblx0XHRcdFx0XHR0aGlzLl9mb2N1c0luZGV4ID0gLTE7XG5cdFx0XHRcdFx0Y3VycmVudC5zZWxlY3RlZCA9IGZhbHNlO1xuXHRcdFx0XHRcdGN1cnJlbnQuZm9jdXNpbiA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5zZWFyY2gpIHtcblx0XHRcdFx0dGhpcy5zZWxlY3RFbC5wbGFjZWhvbGRlciA9IHRoaXMucGxhY2Vob2xkZXI7XG5cdFx0XHRcdHRoaXMuc2VsZWN0RWwudmFsdWUgPSAnJztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMudmFsdWVFbC50ZXh0Q29udGVudCA9IHRoaXMucGxhY2Vob2xkZXI7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cdFx0aWYgKHZhbHVlICE9PSB0aGlzLnZhbHVlKSB7XG5cdFx0XHR0aGlzLl92YWx1ZSA9IHZhbHVlO1xuXHRcdFx0Y29uc3QgcHJlID0gdGhpcy5xdWVyeVNlbGVjdG9yKGBhd2Mtb3B0aW9uW3NlbGVjdGVkXWApO1xuXHRcdFx0aWYgKHByZSkge1xuXHRcdFx0XHRwcmUuc2VsZWN0ZWQgPSBmYWxzZTtcblx0XHRcdFx0cHJlLmZvY3VzaW4gPSBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IGN1ciA9IHRoaXMucXVlcnlTZWxlY3RvcihgYXdjLW9wdGlvblt2YWx1ZT1cIiR7dmFsdWV9XCJdYCkgfHwgdGhpcy5xdWVyeVNlbGVjdG9yKGBhd2Mtb3B0aW9uYCk7XG5cdFx0XHR0aGlzLl9mb2N1c0luZGV4ID0gdGhpcy5ub2Rlcy5pbmRleE9mKGN1cik7XG5cdFx0XHRjdXIuc2VsZWN0ZWQgPSB0cnVlO1xuXHRcdFx0Y3VyLmZvY3VzaW4gPSB0cnVlO1xuXHRcdFx0dGhpcy5fdGV4dCA9IGN1ci50ZXh0Q29udGVudDtcblx0XHRcdGlmICh0aGlzLnNlYXJjaCkge1xuXHRcdFx0XHR0aGlzLnNlbGVjdEVsLnBsYWNlaG9sZGVyID0gdGhpcy5fdGV4dDtcblx0XHRcdFx0dGhpcy5zZWxlY3RFbC52YWx1ZSA9IHRoaXMuX3RleHQ7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnZhbHVlRWwudGV4dENvbnRlbnQgPSB0aGlzLl90ZXh0O1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuX25hdGl2ZWNsaWNrKSB7XG5cdFx0XHRcdHRoaXMuX25hdGl2ZWNsaWNrID0gZmFsc2U7XG5cdFx0XHRcdHRoaXMuZGlzcGF0Y2hFdmVudChcblx0XHRcdFx0XHRuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZScsIHtcblx0XHRcdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdFx0XHR2YWx1ZTogdmFsdWUsXG5cdFx0XHRcdFx0XHRcdHRleHQ6IHRoaXMuX3RleHQsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHRoaXMub3B0aW9uc0VsLm9wZW4gPSBmYWxzZTtcblx0fVxuXG5cdGdldCBlbXB0eSgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2VtcHR5JykgIT09IG51bGw7XG5cdH1cblxuXHRzZXQgZW1wdHkodmFsdWUpIHtcblx0XHRpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IGZhbHNlKSB7XG5cdFx0XHR0aGlzLnJlbW92ZUF0dHJpYnV0ZSgnZW1wdHknKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zZXRBdHRyaWJ1dGUoJ2VtcHR5JywgJycpO1xuXHRcdH1cblx0fVxuXG5cdGdldCBkaXNhYmxlZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJykgIT09IG51bGw7XG5cdH1cblxuXHRzZXQgZGlzYWJsZWQodmFsdWUpIHtcblx0XHRpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IGZhbHNlKSB7XG5cdFx0XHR0aGlzLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpO1xuXHRcdH1cblx0fVxuXG5cdGdldCB0eXBlKCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgndHlwZScpO1xuXHR9XG5cblx0c2V0IHR5cGUodmFsdWUpIHtcblx0XHR0aGlzLnNldEF0dHJpYnV0ZSgndHlwZScsIHZhbHVlKTtcblx0fVxuXG5cdGdldCBzZWFyY2goKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdzZWFyY2gnKSAhPT0gbnVsbDtcblx0fVxuXG5cdHNldCBzZWFyY2godmFsdWUpIHtcblx0XHR0aGlzLnNldEF0dHJpYnV0ZShcInNlYXJjaFwiLCB2YWx1ZSk7XG5cdH1cblxuXHRnZXQgcGxhY2Vob2xkZXIoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicpIHx8ICdQbGVhc2UgU2VsZWN0IEl0ZW0nO1xuXHR9XG5cblx0c2V0IHBsYWNlaG9sZGVyKHZhbHVlKSB7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCB2YWx1ZSk7XG5cdH1cblxuXHRmb2N1cygpIHtcblx0XHR0aGlzLnNlbGVjdEVsLmZvY3VzKCk7XG5cdH1cblxuXHRyZXNldCgpIHtcblx0XHR0aGlzLnZhbHVlID0gdGhpcy5kZWZhdWx0dmFsdWU7XG5cdH1cblxuXHRhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG5cdFx0aWYgKG5hbWUgPT0gJ2Rpc2FibGVkJyAmJiB0aGlzLnNlbGVjdEVsKSB7XG5cdFx0XHRpZiAobmV3VmFsdWUgIT0gbnVsbCkge1xuXHRcdFx0XHR0aGlzLnNlbGVjdEVsLmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuc2VsZWN0RWwuZGlzYWJsZWQgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRjb25uZWN0ZWRDYWxsYmFjaygpIHtcblx0XHR0aGlzLnJvb3RFbCA9IHRoaXMuc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuXHRcdHRoaXMub3B0aW9uc0VsID0gdGhpcy5zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKCdvcHRpb25zJyk7XG5cdFx0dGhpcy5zbG90RWwgPSB0aGlzLnNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoJ3Nsb3QnKTtcblx0XHR0aGlzLnZhbHVlRWwgPSB0aGlzLnNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoJ3ZhbHVlJyk7XG5cdFx0Y29uc3Qgc2VsZWN0SW5wdXRFbCA9IHRoaXMuc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0SW5wdXQnKTtcblx0XHRjb25zdCBzZWxlY3RCdXR0b25FbCA9IHRoaXMuc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0QnV0dG9uJyk7XG5cdFx0aWYgKHRoaXMuc2VhcmNoKSB7XG5cdFx0XHR0aGlzLnNlbGVjdEVsID0gc2VsZWN0SW5wdXRFbDtcblx0XHRcdHNlbGVjdElucHV0RWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuXHRcdFx0c2VsZWN0QnV0dG9uRWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNlbGVjdEVsID0gc2VsZWN0QnV0dG9uRWw7XG5cdFx0XHRzZWxlY3RJbnB1dEVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRcdHNlbGVjdEJ1dHRvbkVsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcblx0XHR9XG5cdFx0dGhpcy5fZm9jdXNJbmRleCA9IC0xO1xuXHRcdHRoaXMuZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkO1xuXHRcdHRoaXMuc2VsZWN0RWwuZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkO1xuXHRcdHRoaXMuc2VsZWN0RWwuc2V0QXR0cmlidXRlKCd0eXBlJywgdGhpcy50eXBlKTtcblx0XHR0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXYpID0+IHtcblx0XHRcdGlmICh0aGlzLm9wdGlvbnNFbC5vcGVuKSB7XG5cdFx0XHRcdHN3aXRjaCAoZXYua2V5KSB7XG5cdFx0XHRcdFx0Y2FzZSAnVGFiJzpcblx0XHRcdFx0XHRcdGV2LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICdBcnJvd1VwJzpcblx0XHRcdFx0XHRcdGV2LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHR0aGlzLl9tb3ZlKC0xKVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnQXJyb3dEb3duJzpcblx0XHRcdFx0XHRcdGV2LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHR0aGlzLl9tb3ZlKDEpXG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICdFc2NhcGUnOlxuXHRcdFx0XHRcdFx0ZXYucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdHRoaXMub3B0aW9uc0VsLm9wZW4gPSBmYWxzZTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c3dpdGNoIChldi5rZXkpIHtcblx0XHRcdFx0XHRjYXNlICdBcnJvd1VwJzpcblx0XHRcdFx0XHRcdGV2LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHR0aGlzLl9tb3ZlaW4oLTEpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnQXJyb3dEb3duJzpcblx0XHRcdFx0XHRcdGV2LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHR0aGlzLl9tb3ZlaW4oMSk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KVxuXHRcdHRoaXMuc2VsZWN0RWwuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoZXYpID0+IHtcblx0XHRcdGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0aWYgKCF0aGlzLmlzZm9jdXMpIHtcblx0XHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KFxuXHRcdFx0XHRcdG5ldyBDdXN0b21FdmVudCgnZm9jdXMnLCB7XG5cdFx0XHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRcdFx0dmFsdWU6IHRoaXMudmFsdWUsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fSlcblx0XHR0aGlzLm9wdGlvbnNFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldikgPT4ge1xuXHRcdFx0dGhpcy5mb2N1cygpO1xuXHRcdFx0Y29uc3QgaXRlbSA9IGV2LnRhcmdldC5jbG9zZXN0KCdhd2Mtb3B0aW9uJyk7XG5cdFx0XHRpZiAoaXRlbSkge1xuXHRcdFx0XHR0aGlzLl9uYXRpdmVjbGljayA9IHRydWU7XG5cdFx0XHRcdHRoaXMudmFsdWUgPSBpdGVtLnZhbHVlO1xuXHRcdFx0fVxuXHRcdH0pXG5cdFx0dGhpcy5vcHRpb25zRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xvc2UnLCAoZXYpID0+IHtcblx0XHRcdGlmICh0aGlzLnNlYXJjaCkge1xuXHRcdFx0XHR0aGlzLnNlbGVjdEVsLnJlYWRvbmx5ID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy5zZWxlY3RFbC52YWx1ZSA9IHRoaXMuX3RleHQ7XG5cdFx0XHRcdHRoaXMubm9kZXMgPSBbLi4udGhpcy5xdWVyeVNlbGVjdG9yQWxsKGBhd2Mtb3B0aW9uOm5vdChbZGlzYWJsZWRdKWApXTtcblx0XHRcdFx0dGhpcy5maWx0ZXJFbC50ZXh0Q29udGVudCA9ICcnO1xuXHRcdFx0XHR0aGlzLmVtcHR5ID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBwbGFjZSA9IHRoaXMucXVlcnlTZWxlY3RvcihgYXdjLW9wdGlvbltmb2N1c2luXWApO1xuXHRcdFx0Y29uc3QgY3VycmVudCA9IHRoaXMucXVlcnlTZWxlY3RvcihgYXdjLW9wdGlvbltzZWxlY3RlZF1gKTtcblx0XHRcdGlmIChwbGFjZSkge1xuXHRcdFx0XHRwbGFjZS5mb2N1c2luID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY3VycmVudCkge1xuXHRcdFx0XHRjdXJyZW50LmZvY3VzaW4gPSB0cnVlO1xuXHRcdFx0XHR0aGlzLl9mb2N1c0luZGV4ID0gdGhpcy5ub2Rlcy5pbmRleE9mKGN1cnJlbnQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5fZm9jdXNJbmRleCA9IC0xO1xuXHRcdFx0fVxuXHRcdH0pXG5cdFx0dGhpcy5vcHRpb25zRWwuYWRkRXZlbnRMaXN0ZW5lcignb3BlbicsIChldikgPT4ge1xuXHRcdFx0aWYgKHRoaXMuc2VhcmNoKSB7XG5cdFx0XHRcdHRoaXMuc2VsZWN0RWwudmFsdWUgPSAnJztcblx0XHRcdFx0dGhpcy5zZWxlY3RFbC5yZWFkb25seSA9IGZhbHNlO1xuXHRcdFx0XHR0aGlzLmZvY3VzKCk7XG5cdFx0XHR9XG5cdFx0fSlcblx0XHRpZiAodGhpcy5zZWFyY2gpIHtcblx0XHRcdHRoaXMuZmlsdGVyRWwgPSB0aGlzLnNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoJ2ZpbHRlcicpO1xuXHRcdFx0dGhpcy5zZWxlY3RFbC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChldikgPT4ge1xuXHRcdFx0XHRjb25zdCB2YWx1ZSA9IHRoaXMuc2VsZWN0RWwudmFsdWUudHJpbSgpO1xuXHRcdFx0XHRpZiAodmFsdWUgPT09ICcnKSB7XG5cdFx0XHRcdFx0dGhpcy5ub2RlcyA9IFsuLi50aGlzLnF1ZXJ5U2VsZWN0b3JBbGwoYGF3Yy1vcHRpb246bm90KFtkaXNhYmxlZF0pYCldO1xuXHRcdFx0XHRcdHRoaXMuZmlsdGVyRWwudGV4dENvbnRlbnQgPSAnJztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLm5vZGVzID0gW1xuXHRcdFx0XHRcdFx0Li4udGhpcy5xdWVyeVNlbGVjdG9yQWxsKFxuXHRcdFx0XHRcdFx0XHRgYXdjLW9wdGlvblt2YWx1ZSo9XCIke3ZhbHVlfVwiIGldOm5vdChbZGlzYWJsZWRdKWBcblx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XTtcblx0XHRcdFx0XHR0aGlzLmZpbHRlckVsLnRleHRDb250ZW50ID0gYFxuICAgICAgICAgICAgICAgICAgICA6aG9zdChbc2VhcmNoXSkgOjpzbG90dGVkKGF3Yy1vcHRpb246bm90KFt2YWx1ZSo9XCIke3ZhbHVlfVwiIGldKSlcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGA7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgcGxhY2UgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoYGF3Yy1vcHRpb25bZm9jdXNpbl1gKTtcblx0XHRcdFx0aWYgKHBsYWNlKSB7XG5cdFx0XHRcdFx0cGxhY2UuZm9jdXNpbiA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0aGlzLm5vZGVzWzBdKSB7XG5cdFx0XHRcdFx0dGhpcy5ub2Rlc1swXS5mb2N1c2luID0gdHJ1ZTtcblx0XHRcdFx0XHR0aGlzLmVtcHR5ID0gZmFsc2U7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5lbXB0eSA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5fZm9jdXNJbmRleCA9IDA7XG5cdFx0XHR9KVxuXHRcdFx0dGhpcy5zZWxlY3RFbC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXYpID0+IHtcblx0XHRcdFx0aWYgKCF0aGlzLm9wdGlvbnNFbC5vcGVuKSB7XG5cdFx0XHRcdFx0dGhpcy5vcHRpb25zRWwub3BlbiA9IHRydWU7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y29uc3QgaXRlbSA9IHRoaXMubm9kZXNbdGhpcy5fZm9jdXNJbmRleF07XG5cdFx0XHRcdFx0dGhpcy5fbmF0aXZlY2xpY2sgPSB0cnVlO1xuXHRcdFx0XHRcdGlmIChpdGVtKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnZhbHVlID0gaXRlbS52YWx1ZTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy52YWx1ZSA9IHRoaXMuX3ZhbHVlO1xuXHRcdFx0XHRcdFx0dGhpcy5vcHRpb25zRWwub3BlbiA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldikgPT4ge1xuXHRcdFx0XHRpZiAoIXRoaXMub3B0aW9uc0VsLm9wZW4pIHtcblx0XHRcdFx0XHRjb25zdCBpdGVtID0gdGhpcy5ub2Rlc1t0aGlzLl9mb2N1c0luZGV4XTtcblx0XHRcdFx0XHRpZiAoaXRlbSkge1xuXHRcdFx0XHRcdFx0dGhpcy5fbmF0aXZlY2xpY2sgPSB0cnVlO1xuXHRcdFx0XHRcdFx0dGhpcy52YWx1ZSA9IGl0ZW0udmFsdWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdH1cblx0XHR0aGlzLnNlbGVjdEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoZXYpID0+IHtcblx0XHRcdGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0aWYgKGdldENvbXB1dGVkU3R5bGUodGhpcy5yb290RWwpLnpJbmRleCA9PSAyKSB7XG5cdFx0XHRcdHRoaXMuaXNmb2N1cyA9IHRydWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmlzZm9jdXMgPSBmYWxzZTtcblx0XHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KFxuXHRcdFx0XHRcdG5ldyBDdXN0b21FdmVudCgnYmx1cicsIHtcblx0XHRcdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdFx0XHR2YWx1ZTogdGhpcy52YWx1ZSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KVxuXHRcdFx0fVxuXHRcdH0pXG5cdFx0dGhpcy5zbG90RWwuYWRkRXZlbnRMaXN0ZW5lcignc2xvdGNoYW5nZScsICgpID0+IHtcblx0XHRcdHRoaXMubm9kZXMgPSBbLi4udGhpcy5xdWVyeVNlbGVjdG9yQWxsKGBhd2Mtb3B0aW9uOm5vdChbZGlzYWJsZWRdKWApXTtcblx0XHRcdGlmICghdGhpcy5kZWZhdWx0dmFsdWUpIHtcblx0XHRcdFx0dGhpcy52YWx1ZSA9ICcnO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy52YWx1ZSA9IHRoaXMuZGVmYXVsdHZhbHVlO1xuXHRcdFx0fVxuXHRcdH0pXG5cdH1cblxuXHRfbW92ZShkaXIpIHtcblx0XHRjb25zdCBwcmUgPSB0aGlzLm5vZGVzW3RoaXMuX2ZvY3VzSW5kZXhdO1xuXHRcdGNvbnN0IGZvY3VzSW5kZXggPSBkaXIgKyB0aGlzLl9mb2N1c0luZGV4O1xuXHRcdGNvbnN0IGN1cnJlbnQgPSB0aGlzLm5vZGVzW2ZvY3VzSW5kZXhdO1xuXHRcdGlmIChjdXJyZW50KSB7XG5cdFx0XHRpZiAocHJlKSB7XG5cdFx0XHRcdHByZS5mb2N1c2luID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRjdXJyZW50LmZvY3VzaW4gPSB0cnVlO1xuXHRcdFx0dGhpcy5fZm9jdXNJbmRleCA9IGZvY3VzSW5kZXg7XG5cdFx0fVxuXHR9XG5cblx0X21vdmVpbihkaXIpIHtcblx0XHR0aGlzLl9mb2N1c0luZGV4ID0gZGlyICsgdGhpcy5fZm9jdXNJbmRleDtcblx0XHRpZiAodGhpcy5fZm9jdXNJbmRleCA8IDApIHtcblx0XHRcdHRoaXMuX2ZvY3VzSW5kZXggPSB0aGlzLm5vZGVzLmxlbmd0aCAtIDE7XG5cdFx0fVxuXHRcdGlmICh0aGlzLl9mb2N1c0luZGV4ID09PSB0aGlzLm5vZGVzLmxlbmd0aCkge1xuXHRcdFx0dGhpcy5fZm9jdXNJbmRleCA9IDA7XG5cdFx0fVxuXHRcdHRoaXMuX25hdGl2ZWNsaWNrID0gdHJ1ZTtcblx0XHR0aGlzLnZhbHVlID0gdGhpcy5ub2Rlc1t0aGlzLl9mb2N1c0luZGV4XS52YWx1ZTtcblx0fVxuXG5cdF9yZW5kZXIoKSB7XG5cdFx0Y29uc3Qgc2hhZG93Um9vdCA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuXHRcdHNoYWRvd1Jvb3QuaW5uZXJIVE1MID0gaHRtbDtcblx0fVxufVxuXG5pZiAoIWN1c3RvbUVsZW1lbnRzLmdldCgnYXdjLWRyb3Bkb3duJykpIHtcblx0Y3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhd2MtZHJvcGRvd24nLCBBd2NEcm9wZG93bilcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgaHRtbCBmcm9tICcuL2F3Yy1mb3JtLWl0ZW0uaHRtbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF3Y0Zvcm1JdGVtIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuX3JlbmRlcigpO1xuXHR9XG5cblx0Z2V0IGxlZ2VuZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2xlZ2VuZCcpIHx8ICcnO1xuXHR9XG5cblx0c2V0IGxlZ2VuZCh2YWx1ZSkge1xuXHRcdHRoaXMuc2V0QXR0cmlidXRlKCdsZWdlbmQnLCB2YWx1ZSk7XG5cdH1cblxuXHRjb25uZWN0ZWRDYWxsYmFjaygpIHtcblx0XHRjb25zdCBsYWJlbHNFbCA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCdsYWJlbCcpO1xuXHRcdGNvbnN0IHNsb3RzRWwgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3Rvcignc2xvdCcpO1xuICAgICAgICBsYWJlbHNFbC5pbm5lckhUTUwgPSB0aGlzLmxlZ2VuZDtcblx0XHRzbG90c0VsLmFkZEV2ZW50TGlzdGVuZXIoJ3Nsb3RjaGFuZ2UnLCAoKSA9PiB7XG5cdFx0XHRjb25zdCBpbnB1dEVsID0gdGhpcy5xdWVyeVNlbGVjdG9yKCdbbmFtZV0nKTtcblx0XHRcdGlmIChpbnB1dEVsICYmIGlucHV0RWwucmVxdWlyZWQpIHtcblx0XHRcdFx0bGFiZWxzRWwuY2xhc3NMaXN0LmFkZCgncmVxdWlyZWQnKTtcblx0XHRcdH1cblx0XHR9KVxuXHR9XG5cbiAgICBfcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBzaGFkb3dSb290ID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG5cdFx0c2hhZG93Um9vdC5pbm5lckhUTUwgPSBodG1sO1xuICAgIH1cbn1cblxuaWYgKCFjdXN0b21FbGVtZW50cy5nZXQoJ2F3Yy1mb3JtLWl0ZW0nKSkge1xuXHRjdXN0b21FbGVtZW50cy5kZWZpbmUoJ2F3Yy1mb3JtLWl0ZW0nLCBBd2NGb3JtSXRlbSk7XG59IiwiXG5cInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGh0bWwgZnJvbSAnLi9hd2MtZm9ybS5odG1sJztcbmltcG9ydCAnLi9hd2MtZm9ybS1pdGVtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXdjRm9ybSBleHRlbmRzIEhUTUxFbGVtZW50IHtcblx0c3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XG5cdFx0cmV0dXJuIFsnZGlzYWJsZWQnXTtcblx0fVxuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5fcmVuZGVyKCk7XG5cdH1cblxuXHRnZXQgbWV0aG9kKCkge1xuXHRcdGNvbnN0IG1ldGhvZCA9ICh0aGlzLmdldEF0dHJpYnV0ZSgnbWV0aG9kJykgfHwgJ2dldCcpLnRvVXBwZXJDYXNlKCk7XG5cdFx0aWYgKFsnR0VUJywgJ1BPU1QnXS5pbmNsdWRlcyhtZXRob2QpKSB7XG5cdFx0XHRyZXR1cm4gbWV0aG9kO1xuXHRcdH1cblx0XHRyZXR1cm4gJ0dFVCc7XG5cdH1cblxuXHRzZXQgbWV0aG9kKHZhbHVlKSB7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGUoJ21ldGhvZCcsIHZhbHVlLnRvVXBwZXJDYXNlKCkpO1xuXHR9XG5cblx0Z2V0IGFjdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpIHx8ICcnO1xuXHR9XG5cblx0c2V0IGFjdGlvbih2YWx1ZSkge1xuXHRcdHRoaXMuc2V0QXR0cmlidXRlKCdhY3Rpb24nLCB2YWx1ZSk7XG5cdH1cblxuXHRnZXQgdHlwZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ3R5cGUnKTtcblx0fVxuXG5cdHNldCB0eXBlKHZhbHVlKSB7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCB2YWx1ZSk7XG5cdH1cblxuXHRnZXQgZGlzYWJsZWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdkaXNhYmxlZCcpICE9PSBudWxsO1xuXHR9XG5cblx0c2V0IGRpc2FibGVkKHZhbHVlKSB7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdmFsdWUpO1xuXHR9XG5cblx0Z2V0IG5vdmFsaWRhdGUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdub3ZhbGlkYXRlJykgIT09IG51bGw7XG5cdH1cblxuXHRzZXQgbm92YWxpZGF0ZSh2YWx1ZSkge1xuXHRcdGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gZmFsc2UpIHtcblx0XHRcdHRoaXMucmVtb3ZlQXR0cmlidXRlKCdub3ZhbGlkYXRlJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2V0QXR0cmlidXRlKCdub3ZhbGlkYXRlJywgJycpO1xuXHRcdH1cblx0fVxuXG5cdGdldCBpbnZhbGlkKCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnaW52YWxpZCcpICE9PSBudWxsO1xuXHR9XG5cblx0c2V0IGludmFsaWQodmFsdWUpIHtcblx0XHRpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IGZhbHNlKSB7XG5cdFx0XHR0aGlzLnJlbW92ZUF0dHJpYnV0ZSgnaW52YWxpZCcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNldEF0dHJpYnV0ZSgnaW52YWxpZCcsICcnKTtcblx0XHR9XG5cdH1cblxuXHRnZXQgbmFtZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcblx0fVxuXG5cdHNldCBuYW1lKHZhbHVlKSB7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGUoJ25hbWUnLCB2YWx1ZSk7XG5cdH1cblxuXHRnZXQgdmFsaWRpdHkoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudHMuZXZlcnkoKGVsKSA9PiBlbC52YWxpZGl0eSk7XG5cdH1cblxuXHRnZXQgZm9ybWRhdGEoKSB7XG5cdFx0Y29uc3QgZm9ybWRhdGEgPSBuZXcgRm9ybURhdGEoKTtcblx0XHRjb25zdCBqc29uZGF0YSA9IHt9O1xuXHRcdGlmICghdGhpcy5kaXNhYmxlZCkge1xuXHRcdFx0dGhpcy5lbGVtZW50cy5mb3JFYWNoKChlbCkgPT4ge1xuXHRcdFx0XHRmb3JtZGF0YS5zZXQoZWwubmFtZSwgZWwudmFsdWUpO1xuXHRcdFx0XHRqc29uZGF0YVtlbC5uYW1lXSA9IGVsLnZhbHVlO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdGZvcm1kYXRhLmpzb24gPSBqc29uZGF0YTtcblx0XHRyZXR1cm4gZm9ybWRhdGE7XG5cdH1cblxuXHRjaGVja1ZhbGlkaXR5KCkge1xuXHRcdGlmICh0aGlzLm5vdmFsaWRhdGUpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRjb25zdCBlbGVtZW50cyA9IFsuLi50aGlzLmVsZW1lbnRzXS5yZXZlcnNlKCk7XG5cdFx0bGV0IHZhbGlkaXR5ID0gdHJ1ZTtcblx0XHRlbGVtZW50cy5mb3JFYWNoKChlbCkgPT4ge1xuXHRcdFx0aWYgKGVsLmNoZWNrVmFsaWRpdHkgJiYgIWVsLmNoZWNrVmFsaWRpdHkoKSkge1xuXHRcdFx0XHR2YWxpZGl0eSA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0pXG5cdFx0dGhpcy5pbnZhbGlkID0gIXZhbGlkaXR5O1xuXHRcdHJldHVybiB2YWxpZGl0eTtcblx0fVxuXG5cdGFzeW5jIHN1Ym1pdCgpIHtcblx0XHRpZiAodGhpcy5jaGVja1ZhbGlkaXR5KCkgJiYgIXRoaXMuZGlzYWJsZWQpIHtcblx0XHRcdC8vdmFsaWRpdHlcblx0XHRcdGlmICh0aGlzLmFjdGlvbikge1xuXHRcdFx0XHR0aGlzLnN1Ym1pdEJ0bkVsICYmICh0aGlzLnN1Ym1pdEJ0bkVsLmxvYWRpbmcgPSB0cnVlKVxuXHRcdFx0XHRpZiAodGhpcy5tZXRob2QgPT0gJ0dFVCcpIHtcblx0XHRcdFx0XHRjb25zdCBmb3JtZGF0YSA9IG5ldyBVUkxTZWFyY2hQYXJhbXModGhpcy5mb3JtRWxkYXRhKS50b1N0cmluZygpO1xuXHRcdFx0XHRcdGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChgJHt0aGlzLmFjdGlvbn0/JHtmb3JtZGF0YX1gKTtcblx0XHRcdFx0XHR0aGlzLnN1Ym1pdEJ0bkVsICYmICh0aGlzLnN1Ym1pdEJ0bkVsLmxvYWRpbmcgPSBmYWxzZSk7XG5cdFx0XHRcdFx0aWYgKGRhdGEuaGVhZGVycy5nZXQoJ2NvbnRlbnQtdHlwZScpID09ICdhcHBsaWNhdGlvbi9qc29uJykge1xuXHRcdFx0XHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KFxuXHRcdFx0XHRcdFx0XHRuZXcgQ3VzdG9tRXZlbnQoJ3N1Ym1pdCcsIHtcblx0XHRcdFx0XHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGE6IGRhdGEuanNvbigpLFxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2godGhpcy5hY3Rpb24sIHtcblx0XHRcdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0XHRcdFx0Ym9keTogdGhpcy5mb3JtRWxkYXRhLFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdGlmICh0aGlzLnN1Ym1pdEJ0bkVsKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnN1Ym1pdEJ0bkVsLmxvYWRpbmcgPSBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGRhdGEuaGVhZGVycy5nZXQoJ2NvbnRlbnQtdHlwZScpID09ICdhcHBsaWNhdGlvbi9qc29uJykge1xuXHRcdFx0XHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KFxuXHRcdFx0XHRcdFx0XHRuZXcgQ3VzdG9tRXZlbnQoJ3N1Ym1pdCcsIHtcblx0XHRcdFx0XHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGE6IGRhdGEuanNvbigpLFxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJlc2V0KCkge1xuXHRcdHRoaXMuaW52YWxpZCA9IGZhbHNlO1xuXHRcdHRoaXMuZWxlbWVudHMuZm9yRWFjaCgoZWwpID0+IHtcblx0XHRcdGVsLnJlc2V0ICYmIGVsLnJlc2V0KCk7XG5cdFx0fSk7XG5cdH1cblxuXHRjb25uZWN0ZWRDYWxsYmFjaygpIHtcblx0XHR0aGlzLmZvcm1FbCA9IHRoaXMuc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZCgnZm9ybScpO1xuXHRcdHRoaXMuZWxlbWVudHMgPSBbLi4udGhpcy5xdWVyeVNlbGVjdG9yQWxsKCdbbmFtZV06bm90KFtkaXNhYmxlZF0pJyldO1xuXHRcdHRoaXMuc3VibWl0QnRuRWwgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ1todG1sdHlwZT1zdWJtaXRdJyk7XG5cdFx0dGhpcy5yZXNldEJ0bkVsID0gdGhpcy5xdWVyeVNlbGVjdG9yKCdbaHRtbHR5cGU9cmVzZXRdJyk7XG5cdFx0dGhpcy5mb3JtRWwuc2V0QXR0cmlidXRlKCdtZXRob2QnLCB0aGlzLm1ldGhvZCk7XG5cdFx0dGhpcy5mb3JtRWwuc2V0QXR0cmlidXRlKCdhY3Rpb24nLCB0aGlzLmFjdGlvbik7XG5cdFx0aWYgKHRoaXMubm92YWxpZGF0ZSkge1xuXHRcdFx0dGhpcy5mb3JtRWwuc2V0QXR0cmlidXRlKCdub3ZhbGlkYXRlJywgJycpO1xuXHRcdH1cblx0XHRpZiAodGhpcy5zdWJtaXRCdG5FbCkge1xuXHRcdFx0dGhpcy5zdWJtaXRCdG5FbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdFx0dGhpcy5zdWJtaXQoKTtcblx0XHRcdH0pXG5cdFx0fVxuXHRcdGlmICh0aGlzLnJlc2V0QnRuRWwpIHtcblx0XHRcdHRoaXMucmVzZXRCdG5FbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdFx0dGhpcy5yZXNldCgpO1xuXHRcdFx0fSlcblx0XHR9XG5cdFx0dGhpcy5mb3JtRWwuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldikgPT4ge1xuXHRcdFx0aWYgKGV2LnRhcmdldCA9PSB0aGlzLnJlc2V0QnRuRWwpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0c3dpdGNoIChldi5rZXkpIHtcblx0XHRcdFx0Y2FzZSAnRW50ZXInOlxuXHRcdFx0XHRcdHRoaXMuc3VibWl0KCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fSlcblx0XHRpZiAoIXRoaXMubm92YWxpZGF0ZSkge1xuXHRcdFx0dGhpcy5lbGVtZW50cy5mb3JFYWNoKChlbCkgPT4ge1xuXHRcdFx0XHRpZiAoZWwudGFnTmFtZSA9PSAnQVdDLUlOUFVUJykge1xuXHRcdFx0XHRcdGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5pbnZhbGlkID0gIXRoaXMudmFsaWRpdHk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5pbnZhbGlkID0gIXRoaXMudmFsaWRpdHk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0fVxuXHR9XG5cblx0X3JlbmRlcigpIHtcblx0XHRjb25zdCBzaGFkb3dSb290ID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG5cdFx0c2hhZG93Um9vdC5pbm5lckhUTUwgPSBodG1sO1xuXHR9XG59XG5cbmlmICghY3VzdG9tRWxlbWVudHMuZ2V0KCdhd2MtZm9ybScpKSB7XG5cdGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXdjLWZvcm0nLCBBd2NGb3JtKTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgaHRtbCBmcm9tICcuL2F3Yy1pY29uLmh0bWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBd2NJY29uIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuXHRzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcblx0XHRyZXR1cm4gWyduYW1lJywgJ3NpemUnLCAnY29sb3InLCAncGF0aCddO1xuXHR9XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLl9yZW5kZXIoKTtcblx0fVxuXG5cdGdldCB2aWV3KCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgndmlldycpIHx8IDEwMjQ7XG5cdH1cblxuXHRnZXQgbmFtZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcblx0fVxuXG5cdHNldCBuYW1lKHZhbHVlKSB7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGUoJ25hbWUnLCB2YWx1ZSk7XG5cdH1cblxuXHRnZXQgc2l6ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ3NpemUnKSB8fCAnJztcblx0fVxuXG5cdHNldCBzaXplKHZhbHVlKSB7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGUoJ3NpemUnLCB2YWx1ZSk7XG5cdH1cblxuXHRnZXQgY29sb3IoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdjb2xvcicpIHx8ICcnO1xuXHR9XG5cblx0c2V0IGNvbG9yKHZhbHVlKSB7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgdmFsdWUpO1xuXHR9XG5cblx0Z2V0IHBhdGgoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdwYXRoJykgfHwgJyc7XG5cdH1cblxuXHRzZXQgcGF0aCh2YWx1ZSkge1xuXHRcdHRoaXMuc2V0QXR0cmlidXRlKCdwYXRoJywgdmFsdWUpO1xuXHR9XG5cblx0Y29ubmVjdGVkQ2FsbGJhY2soKSB7XG5cdFx0dGhpcy5pY29uRWwgPSB0aGlzLnNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoJ2ljb24nKTtcblx0XHR0aGlzLmljb25FbC5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCBgMCAwICR7dGhpcy52aWV3fSAke3RoaXMudmlld31gKTtcblx0XHR0aGlzLnVzZUVsID0gdGhpcy5pY29uRWwucXVlcnlTZWxlY3RvcigndXNlJyk7XG5cdFx0dGhpcy5wYXRoRWwgPSB0aGlzLmljb25FbC5xdWVyeVNlbGVjdG9yKCdwYXRoJyk7XG5cdFx0Ly8gcmUtY2FsbCBzZXRcblx0XHR0aGlzLnNpemUgJiYgKHRoaXMuc2l6ZSA9IHRoaXMuc2l6ZSk7XG5cdFx0dGhpcy5jb2xvciAmJiAodGhpcy5jb2xvciA9IHRoaXMuY29sb3IpO1xuXHRcdHRoaXMubmFtZSAmJiAodGhpcy5uYW1lID0gdGhpcy5uYW1lKTtcblx0XHR0aGlzLnBhdGggJiYgKHRoaXMucGF0aCA9IHRoaXMucGF0aCk7XG5cdFx0aWYgKHRoaXMucGF0aCkge1xuXHRcdFx0dGhpcy5wYXRoRWwuc2V0QXR0cmlidXRlKCdkJywgdGhpcy5wYXRoKTtcblx0XHR9XG5cdH1cblxuXHRhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG5cdFx0aWYgKG5hbWUgPT0gJ25hbWUnICYmIHRoaXMudXNlRWwpIHtcblx0XHRcdHRoaXMudXNlRWwuc2V0QXR0cmlidXRlTlMoJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnLCAneGxpbms6aHJlZicsIGAuLi9hc3NldHMvaWNvbi5zdmcjaWNvbi0ke25ld1ZhbHVlfWApO1xuXHRcdH1cblx0XHRpZiAobmFtZSA9PSAnY29sb3InICYmIHRoaXMuaWNvbkVsKSB7XG5cdFx0XHR0aGlzLmljb25FbC5zdHlsZS5jb2xvciA9IG5ld1ZhbHVlO1xuXHRcdH1cblx0XHRpZiAobmFtZSA9PSAnc2l6ZScgJiYgdGhpcy5pY29uRWwpIHtcblx0XHRcdHRoaXMuaWNvbkVsLnN0eWxlLmZvbnRTaXplID0gbmV3VmFsdWUgKyAncHgnO1xuXHRcdH1cblx0XHRpZiAobmFtZSA9PSAncGF0aCcgJiYgdGhpcy5wYXRoRWwpIHtcblx0XHRcdHRoaXMucGF0aEVsLnNldEF0dHJpYnV0ZSgnZCcsIG5ld1ZhbHVlKTtcblx0XHR9XG5cdH1cblxuXHRfcmVuZGVyKCkge1xuXHRcdGNvbnN0IHNoYWRvd1Jvb3QgPSB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcblx0XHRzaGFkb3dSb290LmlubmVySFRNTCA9IGh0bWw7XG5cdH1cbn1cblxuaWYgKCFjdXN0b21FbGVtZW50cy5nZXQoJ2F3Yy1pY29uJykpIHtcblx0Y3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhd2MtaWNvbicsIEF3Y0ljb24pO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCAnLi4vYXdjLWljb24vYXdjLWljb24nO1xuaW1wb3J0IGh0bWwgZnJvbSAnLi9hd2MtaW1nLmh0bWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBd2NJbWcgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG5cdHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xuXHRcdHJldHVybiBbJ2xhenknLCAnc3JjJywgJ2RlZmF1bHRzcmMnLCAncmF0aW8nXTtcblx0fVxuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5fcmVuZGVyKCk7XG5cdH1cblxuXHRnZXQgc3JjKCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnc3JjJyk7XG5cdH1cblxuICAgIHNldCBzcmModmFsdWUpIHtcblx0XHR0aGlzLnNldEF0dHJpYnV0ZSgnc3JjJywgdmFsdWUpO1xuXHR9XG5cblx0Z2V0IHJhdGlvKCkge1xuXHRcdC8vMTYvOVxuXHRcdGNvbnN0IHJhdGlvID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ3JhdGlvJyk7XG5cdFx0aWYgKHJhdGlvICYmIHJhdGlvLmluY2x1ZGVzKCcvJykpIHtcblx0XHRcdGNvbnN0IHIgPSByYXRpby5zcGxpdCgnLycpO1xuXHRcdFx0cmV0dXJuIChyWzFdIC8gclswXSkgKiAxMDAgKyAnJSc7XG5cdFx0fVxuXHRcdHJldHVybiAwO1xuXHR9XG5cbiAgICBzZXQgcmF0aW8odmFsdWUpIHtcblx0XHR0aGlzLnNldEF0dHJpYnV0ZSgncmF0aW8nLCB2YWx1ZSk7XG5cdH1cblxuXHRnZXQgZml0KCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnZml0Jyk7XG5cdH1cblxuICAgIHNldCBmaXQodmFsdWUpIHtcblx0XHR0aGlzLnNldEF0dHJpYnV0ZSgnZml0JywgdmFsdWUpO1xuXHR9XG5cblx0Z2V0IGRlZmF1bHQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdkZWZhdWx0JykgIT09IG51bGw7XG5cdH1cblxuICAgIHNldCBkZWZhdWx0KHZhbHVlKSB7XG5cdFx0aWYgKHZhbHVlKSB7XG5cdFx0XHR0aGlzLnNldEF0dHJpYnV0ZSgnZGVmYXVsdCcsICcnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ2RlZmF1bHQnKTtcblx0XHR9XG5cdH1cblxuICAgIGdldCBlcnJvcigpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2Vycm9yJykgIT09IG51bGw7XG5cdH1cblxuICAgIHNldCBlcnJvcih2YWx1ZSkge1xuXHRcdGlmICh2YWx1ZSkge1xuXHRcdFx0dGhpcy5zZXRBdHRyaWJ1dGUoJ2Vycm9yJywgJycpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnJlbW92ZUF0dHJpYnV0ZSgnZXJyb3InKTtcblx0XHR9XG5cdH1cblxuICAgIGdldCBkZWZhdWx0c3JjKCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnZGVmYXVsdHNyYycpO1xuXHR9XG5cblx0c2V0IGRlZmF1bHRzcmModmFsdWUpIHtcblx0XHR0aGlzLnNldEF0dHJpYnV0ZSgnZGVmYXVsdHNyYycsIHZhbHVlKTtcblx0fVxuXG4gICAgZ2V0IGxhenkoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdsYXp5JykgIT09IG51bGw7XG5cdH1cblxuXHRzZXQgbGF6eSh2YWx1ZSkge1xuXHRcdHRoaXMuc2V0QXR0cmlidXRlKCdsYXp5JywgdmFsdWUpO1xuXHR9XG5cblx0Z2V0IGFsdCgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2FsdCcpIHx8ICdlcnJvcic7XG5cdH1cblxuXHRzZXQgYWx0KHZhbHVlKSB7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGUoJ2FsdCcsIHZhbHVlKTtcblx0fVxuXG5cdGxvYWQoc3JjLCBoYXNsb2FkKSB7XG5cdFx0Y29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG5cdFx0aW1nLnNyYyA9IHNyYztcblx0XHR0aGlzLmVycm9yID0gZmFsc2U7XG5cdFx0aW1nLm9ubG9hZCA9ICgpID0+IHtcblx0XHRcdHRoaXMuaW1nRWwuYWx0ID0gdGhpcy5hbHQ7XG5cdFx0XHR0aGlzLmltZ0VsLnNyYyA9IHNyYztcblx0XHR9XG5cdFx0aW1nLm9uZXJyb3IgPSAoKSA9PiB7XG5cdFx0XHR0aGlzLmVycm9yID0gdHJ1ZTtcblx0XHRcdHRoaXMuaW1nRWwucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xuXHRcdFx0aWYgKHRoaXMuZGVmYXVsdHNyYyAmJiAhaGFzbG9hZCkge1xuXHRcdFx0XHR0aGlzLmRlZmF1bHQgPSB0cnVlO1xuXHRcdFx0XHR0aGlzLmxvYWQodGhpcy5kZWZhdWx0c3JjLCB0cnVlKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpIHtcblx0XHRpZiAobmFtZSA9PSAnc3JjJyAmJiB0aGlzLmltZ0VsKSB7XG5cdFx0XHR0aGlzLnBsYWNlaG9sZGVyRWwuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuXHRcdFx0dGhpcy5sb2FkKG5ld1ZhbHVlKTtcblx0XHR9XG5cdFx0aWYgKG5hbWUgPT0gJ3JhdGlvJyAmJiB0aGlzLmltZ0VsKSB7XG5cdFx0XHR0aGlzLnBsYWNlaG9sZGVyRWwuc3R5bGUucGFkZGluZ1RvcCA9IHRoaXMucmF0aW87XG5cdFx0fVxuXHR9XG5cblx0Y29ubmVjdGVkQ2FsbGJhY2soKSB7XG5cdFx0aWYgKHdpbmRvdy5Bd2NJbWdJbmRleCA+IC0xKSB7XG5cdFx0XHR3aW5kb3cuQXdjSW1nSW5kZXgrKztcblx0XHR9IGVsc2Uge1xuXHRcdFx0d2luZG93LkF3Y0ltZ0luZGV4ID0gMDtcblx0XHR9XG5cdFx0dGhpcy5Bd2NJbWdJbmRleCA9IHdpbmRvdy5Bd2NJbWdJbmRleDtcblx0XHR0aGlzLnBsYWNlaG9sZGVyRWwgPSB0aGlzLnNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoJ3BsYWNlaG9sZGVyJyk7XG5cdFx0dGhpcy5pbWdFbCA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcbiAgICAgICAgY29uc3QgYWx0RWwgPSB0aGlzLnNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoJ2FsdCcpO1xuICAgICAgICBhbHRFbC5pbm5lckhUTUwgPSB0aGlzLmFsdDtcbiAgICAgICAgaWYgKHRoaXMucmF0aW8pIHtcbiAgICAgICAgICAgIHRoaXMucGxhY2Vob2xkZXJFbC5zdHlsZS5wYWRkaW5nVG9wID0gdGhpcy5yYXRpbztcbiAgICAgICAgfVxuXHRcdGlmICh0aGlzLmxhenkpIHtcblx0XHRcdHRoaXMub2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGlvZXMpID0+IHtcblx0XHRcdFx0aW9lcy5mb3JFYWNoKChpb2UpID0+IHtcblx0XHRcdFx0XHRjb25zdCBlbCA9IGlvZS50YXJnZXQ7XG5cdFx0XHRcdFx0Y29uc3QgaW50ZXJzZWN0aW9uUmF0aW8gPSBpb2UuaW50ZXJzZWN0aW9uUmF0aW87XG5cdFx0XHRcdFx0aWYgKGludGVyc2VjdGlvblJhdGlvID4gMCAmJiBpbnRlcnNlY3Rpb25SYXRpbyA8PSAxKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmxvYWQodGhpcy5zcmMpO1xuXHRcdFx0XHRcdFx0dGhpcy5vYnNlcnZlci51bm9ic2VydmUoZWwpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdH0pXG5cdFx0XHR0aGlzLm9ic2VydmVyLm9ic2VydmUodGhpcy5pbWdFbCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMubG9hZCh0aGlzLnNyYyk7XG5cdFx0fVxuXHR9XG5cbiAgICBfcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBzaGFkb3dSb290ID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG5cdFx0c2hhZG93Um9vdC5pbm5lckhUTUwgPSBodG1sO1xuICAgIH1cbn1cblxuaWYgKCFjdXN0b21FbGVtZW50cy5nZXQoJ2F3Yy1pbWcnKSkge1xuXHRjdXN0b21FbGVtZW50cy5kZWZpbmUoJ2F3Yy1pbWcnLCBBd2NJbWcpO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCAnLi4vYXdjLXRvb2x0aXAvYXdjLXRvb2x0aXAuanMnXG5pbXBvcnQgJy4uL2F3Yy1idXR0b24vYXdjLWJ1dHRvbi5qcydcbmltcG9ydCBodG1sIGZyb20gJy4vYXdjLWlucHV0Lmh0bWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBd2NJbnB1dCBleHRlbmRzIEhUTUxFbGVtZW50IHtcblx0c3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdCdsYWJlbCcsXG5cdFx0XHQnZGlzYWJsZWQnLFxuXHRcdFx0J3BhdHRlcm4nLFxuXHRcdFx0J3JlcXVpcmVkJyxcblx0XHRcdCdyZWFkb25seScsXG5cdFx0XHQncGxhY2Vob2xkZXInLFxuXHRcdF07XG5cdH1cblxuXHRjb25zdHJ1Y3Rvcih7IG11bHRpIH0gPSB7fSkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5tdWx0aSA9IG11bHRpO1xuXHRcdHRoaXMuJGN1c3RvbVZhbGlkaXR5ID0gbnVsbDtcblx0XHR0aGlzLl9yZW5kZXIoKTtcblx0fVxuXG5cdGdldCBjdXN0b21WYWxpZGl0eSgpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0dGhpcy4kY3VzdG9tVmFsaWRpdHkgfHwge1xuXHRcdFx0XHRtZXRob2Q6ICgpID0+IHRydWUsXG5cdFx0XHR9XG5cdFx0KTtcblx0fVxuXG5cdHNldCBjdXN0b21WYWxpZGl0eShvYmplY3QpIHtcblx0XHR0aGlzLiRjdXN0b21WYWxpZGl0eSA9IG9iamVjdDtcblx0fVxuXG5cdGdldCB2YWx1ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5pbnB1dEVsLnZhbHVlO1xuXHR9XG5cblx0c2V0IHZhbHVlKHZhbHVlKSB7XG5cdFx0dGhpcy5pbnB1dEVsLnZhbHVlID0gdmFsdWU7XG5cdH1cblxuXHRnZXQgcmVhZG9ubHkoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdyZWFkb25seScpICE9PSBudWxsO1xuXHR9XG5cblx0c2V0IHJlYWRvbmx5KHZhbHVlKSB7XG5cdFx0aWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSBmYWxzZSkge1xuXHRcdFx0dGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ3JlYWRvbmx5Jyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2V0QXR0cmlidXRlKCdyZWFkb25seScsICcnKTtcblx0XHR9XG5cdH1cblxuXHRnZXQgcmVxdWlyZWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdyZXF1aXJlZCcpICE9PSBudWxsO1xuXHR9XG5cblx0c2V0IHJlcXVpcmVkKHZhbHVlKSB7XG5cdFx0aWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSBmYWxzZSkge1xuXHRcdFx0dGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ3JlcXVpcmVkJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcblx0XHR9XG5cdH1cblxuXHRnZXQgZGlzYWJsZWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdkaXNhYmxlZCcpICE9PSBudWxsO1xuXHR9XG5cblx0c2V0IGRpc2FibGVkKHZhbHVlKSB7XG5cdFx0aWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSBmYWxzZSkge1xuXHRcdFx0dGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKTtcblx0XHR9XG5cdH1cblxuXHRnZXQgbGFiZWwoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdsYWJlbCcpIHx8ICcnO1xuXHR9XG5cblx0c2V0IGxhYmVsKHZhbHVlKSB7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGUoJ2xhYmVsJywgdmFsdWUpO1xuXHR9XG5cblx0Z2V0IHBsYWNlaG9sZGVyKCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInKSB8fCB0aGlzLmxhYmVsO1xuXHR9XG5cblx0c2V0IHBsYWNlaG9sZGVyKHZhbHVlKSB7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgdmFsdWUpO1xuXHR9XG5cblx0Z2V0IGljb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdpY29uJyk7XG5cdH1cblxuXHRzZXQgaWNvbih2YWx1ZSkge1xuXHRcdHRoaXMuc2V0QXR0cmlidXRlKCdpY29uJywgdmFsdWUpO1xuXHR9XG5cblx0Z2V0IGludmFsaWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdpbnZhbGlkJykgIT09IG51bGw7XG5cdH1cblxuXHRzZXQgaW52YWxpZCh2YWx1ZSkge1xuXHRcdGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gZmFsc2UpIHtcblx0XHRcdHRoaXMucmVtb3ZlQXR0cmlidXRlKCdpbnZhbGlkJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2V0QXR0cmlidXRlKCdpbnZhbGlkJywgJycpO1xuXHRcdH1cblx0fVxuXG5cdGdldCBwYXR0ZXJuKCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgncGF0dGVybicpO1xuXHR9XG5cblx0c2V0IHBhdHRlcm4odmFsdWUpIHtcblx0XHRpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IGZhbHNlKSB7XG5cdFx0XHR0aGlzLnJlbW92ZUF0dHJpYnV0ZSgncGF0dGVybicpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNldEF0dHJpYnV0ZSgncGF0dGVybicsIHZhbHVlKTtcblx0XHR9XG5cdH1cblxuXHRnZXQgbm92YWxpZGF0ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ25vdmFsaWRhdGUnKSAhPT0gbnVsbDtcblx0fVxuXG5cdHNldCBub3ZhbGlkYXRlKHZhbHVlKSB7XG5cdFx0aWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSBmYWxzZSkge1xuXHRcdFx0dGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ25vdmFsaWRhdGUnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zZXRBdHRyaWJ1dGUoJ25vdmFsaWRhdGUnLCAnJyk7XG5cdFx0fVxuXHR9XG5cblx0Z2V0IGRlYm91bmNlKCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnZGVib3VuY2UnKTtcblx0fVxuXG5cdHNldCBkZWJvdW5jZSh2YWx1ZSkge1xuXHRcdHRoaXMuc2V0QXR0cmlidXRlKCdkZWJvdW5jZScsIHZhbHVlKTtcblx0fVxuXG5cdGdldCBuYW1lKCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnbmFtZScpIHx8ICcnO1xuXHR9XG5cblx0c2V0IG5hbWUodmFsdWUpIHtcblx0XHR0aGlzLnNldEF0dHJpYnV0ZSgnbmFtZScsIHZhbHVlKTtcblx0fVxuXG5cdGdldCBlcnJvcmRpcigpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2Vycm9yZGlyJykgfHwgJ3RvcCc7XG5cdH1cblxuXHRzZXQgZXJyb3JkaXIodmFsdWUpIHtcblx0XHR0aGlzLnNldEF0dHJpYnV0ZSgnZXJyb3JkaXInLCB2YWx1ZSk7XG5cdH1cblxuXHRnZXQgZGVmYXVsdHZhbHVlKCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnZGVmYXVsdHZhbHVlJykgfHwgJyc7XG5cdH1cblxuXHRzZXQgZGVmYXVsdHZhbHVlKHZhbHVlKSB7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGUoJ2RlZmF1bHR2YWx1ZScsIHZhbHVlKTtcblx0fVxuXG5cdGdldCByb3dzKCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgncm93cycpIHx8IDM7XG5cdH1cblxuXHRzZXQgcm93cyh2YWx1ZSkge1xuXHRcdHRoaXMuc2V0QXR0cmlidXRlKCdyb3dzJywgdmFsdWUpO1xuXHR9XG5cblx0Z2V0IHR5cGUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCd0eXBlJyk7XG5cdH1cblxuXHRzZXQgdHlwZSh2YWx1ZSkge1xuXHRcdHRoaXMuc2V0QXR0cmlidXRlKCd0eXBlJywgdmFsdWUpO1xuXHR9XG5cblx0Z2V0IG1pbigpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ21pbicpIHx8IDA7XG5cdH1cblxuXHRzZXQgbWluKHZhbHVlKSB7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGUoJ21pbicsIHZhbHVlKTtcblx0fVxuXG5cdGdldCBtYXgoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdtYXgnKSB8fCBJbmZpbml0eTtcblx0fVxuXG5cdHNldCBtYXgodmFsdWUpIHtcblx0XHR0aGlzLnNldEF0dHJpYnV0ZSgnbWF4JywgdmFsdWUpO1xuXHR9XG5cblx0Z2V0IG1pbmxlbmd0aCgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ21pbmxlbmd0aCcpIHx8ICcnO1xuXHR9XG5cblx0c2V0IG1pbmxlbmd0aCh2YWx1ZSkge1xuXHRcdHRoaXMuc2V0QXR0cmlidXRlKCdtaW5sZW5ndGgnLCB2YWx1ZSk7XG5cdH1cblxuXHRnZXQgbWF4bGVuZ3RoKCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnbWF4bGVuZ3RoJykgfHwgJyc7XG5cdH1cblxuXHRzZXQgbWF4bGVuZ3RoKHZhbHVlKSB7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGUoJ21heGxlbmd0aCcsIHZhbHVlKTtcblx0fVxuXG5cdGdldCBzdGVwKCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnc3RlcCcpIHx8IDE7XG5cdH1cblxuXHRzZXQgc3RlcCh2YWx1ZSkge1xuXHRcdHRoaXMuc2V0QXR0cmlidXRlKCdzdGVwJywgdmFsdWUpO1xuXHR9XG5cblx0Z2V0IGVycm9ydGlwcygpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2Vycm9ydGlwcycpO1xuXHR9XG5cblx0c2V0IGVycm9ydGlwcyh2YWx1ZSkge1xuXHRcdHRoaXMuc2V0QXR0cmlidXRlKCdlcnJvcnRpcHMnLCB2YWx1ZSk7XG5cdH1cblxuXHRnZXQgdmFsaWRpdHkoKSB7XG5cdFx0cmV0dXJuIHRoaXMuaW5wdXRFbC5jaGVja1ZhbGlkaXR5KCkgJiYgdGhpcy5jdXN0b21WYWxpZGl0eS5tZXRob2QodGhpcyk7XG5cdH1cblxuXHRjaGVja1ZhbGlkaXR5KCkge1xuXHRcdGlmICh0aGlzLm5vdmFsaWRhdGUgfHwgdGhpcy5kaXNhYmxlZCB8fCAodGhpcy5mb3JtRWwgJiYgdGhpcy5mb3JtRWwubm92YWxpZGF0ZSkpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRpZiAodGhpcy52YWxpZGl0eSkge1xuXHRcdFx0dGhpcy5pbnB1dFRvb2xUaXBFbC5zaG93ID0gZmFsc2U7XG5cdFx0XHR0aGlzLmludmFsaWQgPSBmYWxzZTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmlucHV0RWwuZm9jdXMoKTtcblx0XHRcdHRoaXMuaW5wdXRUb29sVGlwRWwuc2hvdyA9ICdzaG93Jztcblx0XHRcdHRoaXMuaW52YWxpZCA9IHRydWU7XG5cdFx0XHRjb25zdCB2YWxpZGF0aW9uTWVzc2FnZSA9IHRoaXMuX2Zvcm1hdFZhbGlkTWVzc2FnZSgpO1xuXHRcdFx0aWYgKHRoaXMuaW5wdXRFbC52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcblx0XHRcdFx0dGhpcy5pbnB1dFRvb2xUaXBFbC50aXBzID0gdmFsaWRhdGlvbk1lc3NhZ2U7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAoIXRoaXMuY3VzdG9tVmFsaWRpdHkubWV0aG9kKHRoaXMpKSB7XG5cdFx0XHRcdFx0dGhpcy5pbnB1dFRvb2xUaXBFbC50aXBzID0gdGhpcy5jdXN0b21WYWxpZGl0eS50aXBzO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuaW5wdXRUb29sVGlwRWwudGlwcyA9IHRoaXMuZXJyb3J0aXBzIHx8IHZhbGlkYXRpb25NZXNzYWdlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0Zm9jdXMoKSB7XG5cdFx0dGhpcy5pbnB1dEVsLmZvY3VzKCk7XG5cdH1cblxuXHRyZXNldCgpIHtcblx0XHR0aGlzLmlucHV0RWwudmFsdWUgPSB0aGlzLmRlZmF1bHR2YWx1ZTtcblx0XHR0aGlzLmlucHV0VG9vbFRpcEVsLnNob3cgPSBmYWxzZTtcblx0XHR0aGlzLmludmFsaWQgPSBmYWxzZTtcblx0fVxuXG5cdGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpIHtcblx0XHRpZiAobmFtZSA9PSAnZGlzYWJsZWQnICYmIHRoaXMuaW5wdXRFbCkge1xuXHRcdFx0aWYgKG5ld1ZhbHVlICE9PSBudWxsKSB7XG5cdFx0XHRcdHRoaXMuaW5wdXRFbC5wYXJlbnROb2RlLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuaW5wdXRFbC5wYXJlbnROb2RlLnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKG5hbWUgPT0gJ3BhdHRlcm4nICYmIHRoaXMuaW5wdXRFbCkge1xuXHRcdFx0aWYgKG5ld1ZhbHVlICE9PSBudWxsKSB7XG5cdFx0XHRcdHRoaXMuaW5wdXRFbC5zZXRBdHRyaWJ1dGUoJ3BhdHRlcm4nLCBuZXdWYWx1ZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmlucHV0RWwucmVtb3ZlQXR0cmlidXRlKCdwYXR0ZXJuJyk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChuYW1lID09ICdwbGFjZWhvbGRlcicgJiYgdGhpcy5pbnB1dEVsKSB7XG5cdFx0XHRpZiAobmV3VmFsdWUgIT09IG51bGwpIHtcblx0XHRcdFx0dGhpcy5pbnB1dEVsLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCBuZXdWYWx1ZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmlucHV0RWwucmVtb3ZlQXR0cmlidXRlKCdwbGFjZWhvbGRlcicpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAobmFtZSA9PSAncmVxdWlyZWQnICYmIHRoaXMuaW5wdXRFbCkge1xuXHRcdFx0aWYgKG5ld1ZhbHVlICE9PSBudWxsKSB7XG5cdFx0XHRcdHRoaXMuaW5wdXRFbC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJ3JlcXVpcmVkJyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmlucHV0RWwucmVtb3ZlQXR0cmlidXRlKCdyZXF1aXJlZCcpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAobmFtZSA9PSAncmVhZG9ubHknICYmIHRoaXMuaW5wdXRFbCkge1xuXHRcdFx0aWYgKG5ld1ZhbHVlICE9PSBudWxsKSB7XG5cdFx0XHRcdHRoaXMuaW5wdXRFbC5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgJ3JlYWRvbmx5Jyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmlucHV0RWwucmVtb3ZlQXR0cmlidXRlKCdyZWFkb25seScpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGNvbm5lY3RlZENhbGxiYWNrKCkge1xuXHRcdHRoaXMuZm9ybUVsID0gdGhpcy5jbG9zZXN0KCdhd2MtZm9ybScpO1xuXHRcdHRoaXMuaW5wdXRUb29sVGlwRWwgPSB0aGlzLnNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LXRvb2x0aXAnKTtcblx0XHR0aGlzLmlucHV0VG9vbFRpcEVsLmRpciA9IHRoaXMuZXJyb3JkaXI7XG5cdFx0dGhpcy5faW5pdFBhZ2UoKTtcblx0XHR0aGlzLl9hZGRFdmVudExpc3RlbmVyKCk7XG5cdFx0dGhpcy5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWQ7XG5cdFx0dGhpcy5yZXF1aXJlZCA9IHRoaXMucmVxdWlyZWQ7XG5cdFx0dGhpcy5yZWFkb25seSA9IHRoaXMucmVhZG9ubHk7XG5cdH1cblxuXHRfaW5pdElucHV0RWwoKSB7XG5cdFx0Y29uc3QgdGV4dGFyZWFFbCA9IHRoaXMuc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZCgndGV4dGFyZWEnKTtcblx0XHRjb25zdCBpbnB1dEVsID0gdGhpcy5zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKCdpbnB1dCcpO1xuXHRcdGlmICh0aGlzLm11bHRpKSB7XG5cdFx0XHR0aGlzLmlucHV0VG9vbFRpcEVsLnJlbW92ZUNoaWxkKGlucHV0RWwpO1xuXHRcdFx0dGV4dGFyZWFFbC5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCB0aGlzLnJvd3MpO1xuXHRcdFx0dGhpcy5pbnB1dEVsID0gdGV4dGFyZWFFbDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5pbnB1dFRvb2xUaXBFbC5yZW1vdmVDaGlsZCh0ZXh0YXJlYUVsKTtcblx0XHRcdGlucHV0RWwuc2V0QXR0cmlidXRlKCd0eXBlJywgdGhpcy5fdHlwZU1hcCh0aGlzLnR5cGUpKTtcblx0XHRcdGlmICh0aGlzLnR5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGlucHV0RWwuc2V0QXR0cmlidXRlKCdtaW4nLCB0aGlzLm1pbik7XG5cdFx0XHRcdGlucHV0RWwuc2V0QXR0cmlidXRlKCdtYXgnLCB0aGlzLm1heCk7XG5cdFx0XHRcdGlucHV0RWwuc2V0QXR0cmlidXRlKCdzdGVwJywgdGhpcy5zdGVwKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuaW5wdXRFbCA9IGlucHV0RWw7XG5cdFx0fVxuXHRcdHRoaXMuaW5wdXRFbC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCB0aGlzLm5hbWUpO1xuXHRcdHRoaXMuaW5wdXRFbC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdGhpcy5kZWZhdWx0dmFsdWUpO1xuXHRcdHRoaXMuaW5wdXRFbC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgdGhpcy5wbGFjZWhvbGRlcik7XG5cdFx0dGhpcy5pbnB1dEVsLnNldEF0dHJpYnV0ZSgnbWlubGVuZ3RoJywgdGhpcy5taW5sZW5ndGgpO1xuXHRcdHRoaXMuaW5wdXRFbC5zZXRBdHRyaWJ1dGUoJ21heGxlbmd0aCcsIHRoaXMubWF4bGVuZ3RoKTtcblx0fVxuXG5cdF9pbml0TGFiZWxFbCgpIHtcblx0XHRjb25zdCBpbnB1dExhYmVsRWwgPSB0aGlzLnNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWxhYmVsJyk7XG5cdFx0aWYgKHRoaXMubGFiZWwgJiYgIXRoaXMuaWNvbikge1xuXHRcdFx0aW5wdXRMYWJlbEVsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cdFx0XHRpbnB1dExhYmVsRWwuaW5uZXJIVE1MID0gdGhpcy5sYWJlbDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aW5wdXRMYWJlbEVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHR9XG5cdH1cblxuXHRfaW5pdEJ0bkVsKCkge1xuXHRcdGlmICghdGhpcy5tdWx0aSkge1xuXHRcdFx0Y29uc3QgYnRuTnVtYmVyRWwgPSB0aGlzLnNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1udW1iZXInKTtcblx0XHRcdGlmKHRoaXMudHlwZSA9PT0gJ3Bhc3N3b3JkJykge1xuXHRcdFx0XHRjb25zdCBidXR0b25FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2F3Yy1idXR0b24nKTtcblx0XHRcdFx0YnV0dG9uRWwuaWQgPSAnYnRuLXBhc3N3b3JkJztcblx0XHRcdFx0YnV0dG9uRWwuY2xhc3NMaXN0LmFkZCgnYnRuLXJpZ2h0Jyk7XG5cdFx0XHRcdGJ1dHRvbkVsLmljb24gPSAnZXllLWNsb3NlJztcblx0XHRcdFx0YnV0dG9uRWwudHlwZSA9ICd0ZXh0Jztcblx0XHRcdFx0dGhpcy5pbnB1dFRvb2xUaXBFbC5hcHBlbmQoYnV0dG9uRWwpO1xuXHRcdFx0XHR0aGlzLmlucHV0VG9vbFRpcEVsLnJlbW92ZUNoaWxkKGJ0bk51bWJlckVsKTtcblx0XHRcdH0gZWxzZSBpZiAodGhpcy50eXBlID09PSAnc2VhcmNoJykge1xuXHRcdFx0XHRjb25zdCBidXR0b25FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2F3Yy1idXR0b24nKTtcblx0XHRcdFx0YnV0dG9uRWwuaWQgPSAnYnRuLXNlYXJjaCc7XG5cdFx0XHRcdGJ1dHRvbkVsLmNsYXNzTGlzdC5hZGQoJ2J0bi1yaWdodCcpO1xuXHRcdFx0XHRidXR0b25FbC5pY29uID0gJ3NlYXJjaCc7XG5cdFx0XHRcdGJ1dHRvbkVsLnR5cGUgPSAndGV4dCc7XG5cdFx0XHRcdHRoaXMuaW5wdXRUb29sVGlwRWwuYXBwZW5kKGJ1dHRvbkVsKTtcblx0XHRcdFx0dGhpcy5pbnB1dFRvb2xUaXBFbC5yZW1vdmVDaGlsZChidG5OdW1iZXJFbCk7XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMudHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0YnRuTnVtYmVyRWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0XHRcdFx0Y29uc3QgYnV0dG9uVXBFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2F3Yy1idXR0b24nKTtcblx0XHRcdFx0YnV0dG9uVXBFbC5pZCA9ICdidG4tYWRkJztcblx0XHRcdFx0YnV0dG9uVXBFbC5pY29uID0gJ3VwJztcblx0XHRcdFx0YnV0dG9uVXBFbC50eXBlID0gJ3RleHQnO1xuXHRcdFx0XHRidG5OdW1iZXJFbC5hcHBlbmQoYnV0dG9uVXBFbCk7XG5cdFx0XHRcdGNvbnN0IGJ1dHRvbkRvd25FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2F3Yy1idXR0b24nKTtcblx0XHRcdFx0YnV0dG9uRG93bkVsLmlkID0gJ2J0bi1zdWInO1xuXHRcdFx0XHRidXR0b25Eb3duRWwuaWNvbiA9ICdkb3duJztcblx0XHRcdFx0YnV0dG9uRG93bkVsLnR5cGUgPSAndGV4dCc7XG5cdFx0XHRcdGJ0bk51bWJlckVsLmFwcGVuZChidXR0b25Eb3duRWwpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5pbnB1dFRvb2xUaXBFbC5yZW1vdmVDaGlsZChidG5OdW1iZXJFbCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0X2luaXRJY29uRWwoKSB7XG5cdFx0aWYgKHRoaXMuaWNvbikge1xuXHRcdFx0dGhpcy5pY29uRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhd2MtaWNvbicpO1xuICAgICAgICAgICAgdGhpcy5pY29uRWwubmFtZSA9IHRoaXMuaWNvbjtcblx0XHRcdHRoaXMuaWNvbkVsLmNsYXNzTGlzdC5hZGQoJ2ljb24tcHJlJyk7XG4gICAgICAgICAgICB0aGlzLmlucHV0VG9vbFRpcEVsLnByZXBlbmQodGhpcy5pY29uRWwpO1xuXHRcdH1cblx0fVxuXG5cdF9pbml0UGFnZSgpIHtcblx0XHR0aGlzLl9pbml0SW5wdXRFbCgpO1xuXHRcdHRoaXMuX2luaXRMYWJlbEVsKCk7XG5cdFx0dGhpcy5faW5pdEJ0bkVsKCk7XG5cdFx0dGhpcy5faW5pdEljb25FbCgpO1xuXHR9XG5cblx0X2FkZEV2ZW50TGlzdGVuZXIoKSB7XG5cdFx0dGhpcy5pbnB1dEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGV2KSA9PiB7XG5cdFx0XHRldi5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdHRoaXMuY2hlY2tWYWxpZGl0eSgpO1xuXHRcdFx0aWYgKHRoaXMuZGVib3VuY2UpIHtcblx0XHRcdFx0dGhpcy50aW1lciAmJiBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XG5cdFx0XHRcdHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoXG5cdFx0XHRcdFx0XHRuZXcgQ3VzdG9tRXZlbnQoJ2lucHV0Jywge1xuXHRcdFx0XHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogdGhpcy52YWx1ZSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSwgdGhpcy5kZWJvdW5jZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoXG5cdFx0XHRcdFx0bmV3IEN1c3RvbUV2ZW50KCdpbnB1dCcsIHtcblx0XHRcdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdFx0XHR2YWx1ZTogdGhpcy52YWx1ZSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9KVxuXHRcdHRoaXMuaW5wdXRFbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoXG5cdFx0XHRcdG5ldyBDdXN0b21FdmVudCgnY2hhbmdlJywge1xuXHRcdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdFx0dmFsdWU6IHRoaXMudmFsdWUsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdFx0fSlcblx0XHR0aGlzLmlucHV0RWwuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoZXYpID0+IHtcblx0XHRcdHRoaXMuY2hlY2tWYWxpZGl0eSgpO1xuXHRcdH0pXG5cdFx0dGhpcy5pbnB1dEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXYpID0+IHtcblx0XHRcdHN3aXRjaCAoZXYua2V5KSB7XG5cdFx0XHRcdGNhc2UgJ0VudGVyJzpcblx0XHRcdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoXG5cdFx0XHRcdFx0XHRuZXcgQ3VzdG9tRXZlbnQoJ3N1Ym1pdCcsIHtcblx0XHRcdFx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU6IHRoaXMudmFsdWUsXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0aWYgKCF0aGlzLm11bHRpKSB7XG5cdFx0XHR0aGlzLmJ0blBhc3N3b3JkRWwgPSB0aGlzLnNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1wYXNzd29yZCcpXG5cdFx0XHR0aGlzLmJ0bkFkZEVsID0gdGhpcy5zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKCdidG4tYWRkJyk7XG5cdFx0XHR0aGlzLmJ0blN1YkVsID0gdGhpcy5zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKCdidG4tc3ViJyk7XG5cdFx0XHR0aGlzLmJ0blNlYXJjaEVsID0gdGhpcy5zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKCdidG4tc2VhcmNoJyk7XG5cdFx0XHRpZiAodGhpcy5idG5TZWFyY2hFbCkge1xuXHRcdFx0XHR0aGlzLmJ0blNlYXJjaEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuZGlzcGF0Y2hFdmVudChcblx0XHRcdFx0XHRcdG5ldyBDdXN0b21FdmVudCgnc3VibWl0Jywge1xuXHRcdFx0XHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogdGhpcy52YWx1ZSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5idG5QYXNzd29yZEVsKSB7XG5cdFx0XHRcdHRoaXMuYnRuUGFzc3dvcmRFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdFx0XHR0aGlzLnBhc3N3b3JkID0gIXRoaXMucGFzc3dvcmRcblx0XHRcdFx0XHRpZiAodGhpcy5wYXNzd29yZCkge1xuXHRcdFx0XHRcdFx0dGhpcy5pbnB1dEVsLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG5cdFx0XHRcdFx0XHR0aGlzLmJ0blBhc3N3b3JkRWwuaWNvbiA9ICdleWUnO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLmlucHV0RWwuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3Bhc3N3b3JkJyk7XG5cdFx0XHRcdFx0XHR0aGlzLmJ0blBhc3N3b3JkRWwuaWNvbiA9ICdleWUtY2xvc2UnO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLmlucHV0RWwuZm9jdXMoKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5idG5BZGRFbCkge1xuXHRcdFx0XHR0aGlzLmJ0bkFkZEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuaW5wdXRFbC5zdGVwVXAoKTtcblx0XHRcdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoXG5cdFx0XHRcdFx0XHRuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZScsIHtcblx0XHRcdFx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU6IHRoaXMudmFsdWUsXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5idG5TdWJFbCkge1xuXHRcdFx0XHR0aGlzLmJ0blN1YkVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuaW5wdXRFbC5zdGVwRG93bigpO1xuXHRcdFx0XHRcdHRoaXMuZGlzcGF0Y2hFdmVudChcblx0XHRcdFx0XHRcdG5ldyBDdXN0b21FdmVudCgnY2hhbmdlJywge1xuXHRcdFx0XHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogdGhpcy52YWx1ZSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHRcdHRoaXMucGF0dGVybiA9IHRoaXMucGF0dGVybjtcblx0XHR9XG5cdH1cblxuXHRfdHlwZU1hcCh0eXBlKSB7XG5cdFx0c3dpdGNoICh0eXBlKSB7XG5cdFx0XHRjYXNlICdwYXNzd29yZCc6XG5cdFx0XHRjYXNlICdudW1iZXInOlxuXHRcdFx0Y2FzZSAnZW1haWwnOlxuXHRcdFx0Y2FzZSAndGVsJzpcblx0XHRcdGNhc2UgJ3VybCc6XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0dHlwZSA9ICd0ZXh0Jztcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdHJldHVybiB0eXBlO1xuXHR9XG5cblx0X2Zvcm1hdFZhbGlkTWVzc2FnZSgpIHtcblx0XHRpZiAodGhpcy5yZXF1aXJlZCAmJiAhdGhpcy52YWx1ZSkge1xuXHRcdFx0cmV0dXJuICdUaGlzIGlzIHJlcXVpcmVkJztcblx0XHR9XG5cdFx0aWYgKCh0aGlzLm1pbiB8fCB0aGlzLm1pbiA9PT0gMCkgJiYgdGhpcy52YWx1ZSA8IHRoaXMubWluKSB7XG5cdFx0XHRyZXR1cm4gYFRoZSBtaW5pbXVtIHZhbHVlIGlzICR7dGhpcy5taW59YDtcblx0XHR9XG5cblx0XHRpZiAoKHRoaXMubWF4IHx8IHRoaXMubWF4ID09PSAwKSAmJiB0aGlzLnZhbHVlID4gdGhpcy5tYXgpIHtcblx0XHRcdHJldHVybiBgVGhlIG1heGltdW0gdmFsdWUgaXMgJHt0aGlzLm1heH1gO1xuXHRcdH1cblxuXHRcdGlmICgodGhpcy5taW5sZW5ndGggfHwgdGhpcy5taW5sZW5ndGggPT09IDApICYmIHRoaXMudmFsdWUubGVuZ3RoIDwgdGhpcy5taW5sZW5ndGgpIHtcblx0XHRcdHJldHVybiBgVGhlIG1pbiBsZW5ndGggaXMgJHt0aGlzLm1pbmxlbmd0aH1gO1xuXHRcdH1cblxuXHRcdGlmICgodGhpcy5tYXhsZW5ndGggfHwgdGhpcy5tYXhsZW5ndGggPT09IDApICYmIHRoaXMudmFsdWUubGVuZ3RoID4gdGhpcy5tYXhsZW5ndGgpIHtcblx0XHRcdHJldHVybiBgVGhlIG1heCBsZW5ndGggdmFsdWUgaXMgJHt0aGlzLm1heGxlbmd0aH1gO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmludmFsaWQpIHtcblx0XHRcdHJldHVybiAnUGxlYXNlIGZpbGwgaW4gdGhlIGNvcnJlY3QgZm9ybWF0Jztcblx0XHR9XG5cblx0fVxuXG5cdF9yZW5kZXIoKSB7XG5cdFx0Y29uc3Qgc2hhZG93Um9vdCA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuXHRcdHNoYWRvd1Jvb3QuaW5uZXJIVE1MID0gaHRtbDtcblx0fVxufVxuXG5pZiAoIWN1c3RvbUVsZW1lbnRzLmdldCgnYXdjLWlucHV0JykpIHtcblx0Y3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhd2MtaW5wdXQnLCBBd2NJbnB1dCk7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGh0bWwgZnJvbSAnLi9hd2MtbG9hZGluZy5odG1sJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXdjTG9hZGluZyBleHRlbmRzIEhUTUxFbGVtZW50IHtcblx0c3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XG5cdFx0cmV0dXJuIFsnY29sb3InLCAnc2l6ZSddO1xuXHR9XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyKCk7XG5cdH1cblxuXHRnZXQgc2l6ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ3NpemUnKSB8fCAnJztcblx0fVxuXG4gICAgc2V0IHNpemUodmFsdWUpIHtcblx0XHR0aGlzLnNldEF0dHJpYnV0ZSgnc2l6ZScsIHZhbHVlKTtcblx0fVxuXG5cdGdldCBjb2xvcigpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2NvbG9yJykgfHwgJyc7XG5cdH1cblxuXHRzZXQgY29sb3IodmFsdWUpIHtcblx0XHR0aGlzLnNldEF0dHJpYnV0ZSgnY29sb3InLCB2YWx1ZSk7XG5cdH1cblxuXHRjb25uZWN0ZWRDYWxsYmFjaygpIHtcblx0XHR0aGlzLmxvYWRpbmdFbCA9IHRoaXMuc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZCgnbG9hZGluZycpO1xuXHRcdHRoaXMuc2l6ZSAmJiAodGhpcy5zaXplID0gdGhpcy5zaXplKTtcblx0XHR0aGlzLmNvbG9yICYmICh0aGlzLmNvbG9yID0gdGhpcy5jb2xvcik7XG5cdH1cblxuXHRhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG5cdFx0aWYgKG5hbWUgPT0gJ2NvbG9yJyAmJiB0aGlzLmxvYWRpbmdFbCkge1xuXHRcdFx0dGhpcy5sb2FkaW5nRWwuc3R5bGUuY29sb3IgPSBuZXdWYWx1ZTtcblx0XHR9XG5cdFx0aWYgKG5hbWUgPT0gJ3NpemUnICYmIHRoaXMubG9hZGluZ0VsKSB7XG5cdFx0XHR0aGlzLmxvYWRpbmdFbC5zdHlsZS5mb250U2l6ZSA9IG5ld1ZhbHVlICsgJ3B4Jztcblx0XHR9XG5cdH1cblxuICAgIF9yZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcblx0XHRzaGFkb3dSb290LmlubmVySFRNTCA9IGh0bWw7XG4gICAgfVxufVxuXG5pZiAoIWN1c3RvbUVsZW1lbnRzLmdldCgnYXdjLWxvYWRpbmcnKSkge1xuXHRjdXN0b21FbGVtZW50cy5kZWZpbmUoJ2F3Yy1sb2FkaW5nJywgQXdjTG9hZGluZyk7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0ICcuLi9hd2MtaWNvbi9hd2MtaWNvbic7XG5pbXBvcnQgJy4uL2F3Yy1sb2FkaW5nL2F3Yy1sb2FkaW5nJztcbmltcG9ydCBodG1sIGZyb20gJy4vYXdjLW1lc3NhZ2UuaHRtbCc7XG5cbmNsYXNzIEF3Y01lc3NhZ2UgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG5cdHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xuXHRcdHJldHVybiBbJ3R5cGUnLCAnaWNvbiddO1xuXHR9XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLl9yZW5kZXIoKTtcblx0fVxuXG5cdGdldCBzaG93KCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnc2hvdycpICE9PSBudWxsO1xuXHR9XG5cblx0c2V0IHNob3codmFsdWUpIHtcblx0XHRpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IGZhbHNlKSB7XG5cdFx0XHR0aGlzLnJlbW92ZUF0dHJpYnV0ZSgnc2hvdycpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNldEF0dHJpYnV0ZSgnc2hvdycsICcnKTtcblx0XHR9XG5cdH1cblxuXHRnZXQgaWNvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2ljb24nKTtcblx0fVxuXG5cdHNldCBpY29uKHZhbHVlKSB7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGUoJ2ljb24nLCB2YWx1ZSk7XG5cdH1cblxuXHRnZXQgdHlwZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ3R5cGUnKTtcblx0fVxuXG5cdHNldCB0eXBlKHZhbHVlKSB7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCB2YWx1ZSk7XG5cdH1cblxuXHRhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG5cdFx0aWYgKG5hbWUgPT0gJ3R5cGUnICYmIHRoaXMubWVzc2FnZUljb25FbCkge1xuXHRcdFx0aWYgKG5ld1ZhbHVlICE9PSBudWxsKSB7XG5cdFx0XHRcdHRoaXMubWVzc2FnZUljb25FbC5wYXRoID0gdGhpcy5fdHlwZU1hcChuZXdWYWx1ZSkucGF0aDtcblx0XHRcdFx0dGhpcy5tZXNzYWdlSWNvbkVsLmNvbG9yID0gdGhpcy5fdHlwZU1hcChuZXdWYWx1ZSkuY29sb3I7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChuYW1lID09ICdpY29uJyAmJiB0aGlzLm1lc3NhZ2VJY29uRWwpIHtcblx0XHRcdGlmIChuZXdWYWx1ZSAhPT0gbnVsbCAmJiBuZXdWYWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0dGhpcy5tZXNzYWdlSWNvbkVsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cdFx0XHRcdHRoaXMubWVzc2FnZUljb25FbC5uYW1lID0gbmV3VmFsdWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLm1lc3NhZ2VJY29uRWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGNvbm5lY3RlZENhbGxiYWNrKCkge1xuXHRcdHRoaXMubWVzc2FnZUljb25FbCA9IHRoaXMuc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZCgnbWVzc2FnZS1pY29uJyk7XG5cdFx0dGhpcy5zaGFkb3dSb290LmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCAoZXYpID0+IHtcblx0XHRcdGlmIChldi5wcm9wZXJ0eU5hbWUgPT09ICd0cmFuc2Zvcm0nICYmICF0aGlzLnNob3cpIHtcblx0XHRcdFx0bWVzc2FnZUNvbnRlbnQucmVtb3ZlQ2hpbGQodGhpcyk7XG5cdFx0XHRcdHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2Nsb3NlJykpO1xuXHRcdFx0fVxuXHRcdH0pXG5cdFx0dGhpcy50eXBlID0gdGhpcy50eXBlO1xuXHR9XG5cblx0X3R5cGVNYXAodHlwZSkge1xuXHRcdGxldCBwYXRoID0gJyc7XG5cdFx0bGV0IGNvbG9yID0gJyc7XG5cdFx0c3dpdGNoICh0eXBlKSB7XG5cdFx0XHRjYXNlICdpbmZvJzpcblx0XHRcdFx0cGF0aCA9ICdNNTEyIDY0QzI2NC42IDY0IDY0IDI2NC42IDY0IDUxMnMyMDAuNiA0NDggNDQ4IDQ0OCA0NDgtMjAwLjYgNDQ4LTQ0OFM3NTkuNCA2NCA1MTIgNjR6IG0zMiA2NjRjMCA0LjQtMy42IDgtOCA4aC00OGMtNC40IDAtOC0zLjYtOC04VjQ1NmMwLTQuNCAzLjYtOCA4LThoNDhjNC40IDAgOCAzLjYgOCA4djI3MnogbS0zMi0zNDRjLTI2LjUgMC00OC0yMS41LTQ4LTQ4czIxLjUtNDggNDgtNDggNDggMjEuNSA0OCA0OC0yMS41IDQ4LTQ4IDQ4eic7XG5cdFx0XHRcdGNvbG9yID0gJ3ZhcigtLWluZm9Db2xvciwgIzE4OTBmZiknO1xuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAnc3VjY2Vzcyc6XG5cdFx0XHRcdHBhdGggPSAnTTUxMiA2NEMyNjQuNiA2NCA2NCAyNjQuNiA2NCA1MTJzMjAwLjYgNDQ4IDQ0OCA0NDggNDQ4LTIwMC42IDQ0OC00NDhTNzU5LjQgNjQgNTEyIDY0eiBtMTkzLjUgMzAxLjdsLTIxMC42IDI5MmMtMTIuNyAxNy43LTM5IDE3LjctNTEuNyAwTDMxOC41IDQ4NC45Yy0zLjgtNS4zIDAtMTIuNyA2LjUtMTIuN2g0Ni45YzEwLjIgMCAxOS45IDQuOSAyNS45IDEzLjNsNzEuMiA5OC44IDE1Ny4yLTIxOGM2LTguMyAxNS42LTEzLjMgMjUuOS0xMy4zSDY5OWM2LjUgMCAxMC4zIDcuNCA2LjUgMTIuN3onO1xuXHRcdFx0XHRjb2xvciA9ICd2YXIoLS1zdWNjZXNzQ29sb3IsIzUyYzQxYSknO1xuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAnZXJyb3InOlxuXHRcdFx0XHRwYXRoID0gJ001MTIgNjRDMjY0LjYgNjQgNjQgMjY0LjYgNjQgNTEyczIwMC42IDQ0OCA0NDggNDQ4IDQ0OC0yMDAuNiA0NDgtNDQ4Uzc1OS40IDY0IDUxMiA2NHogbTE2NS40IDYxOC4ybC02Ni0wLjNMNTEyIDU2My40bC05OS4zIDExOC40LTY2LjEgMC4zYy00LjQgMC04LTMuNS04LTggMC0xLjkgMC43LTMuNyAxLjktNS4ybDEzMC4xLTE1NUwzNDAuNSAzNTljLTEuMi0xLjUtMS45LTMuMy0xLjktNS4yIDAtNC40IDMuNi04IDgtOGw2Ni4xIDAuM0w1MTIgNDY0LjZsOTkuMy0xMTguNCA2Ni0wLjNjNC40IDAgOCAzLjUgOCA4IDAgMS45LTAuNyAzLjctMS45IDUuMkw1NTMuNSA1MTRsMTMwIDE1NWMxLjIgMS41IDEuOSAzLjMgMS45IDUuMiAwIDQuNC0zLjYgOC04IDh6Jztcblx0XHRcdFx0Y29sb3IgPSAndmFyKC0tZXJyb3JDb2xvciwjZjQ2MTVjKSc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnd2FybmluZyc6XG5cdFx0XHRcdHBhdGggPSAnTTUxMiA2NEMyNjQuNiA2NCA2NCAyNjQuNiA2NCA1MTJzMjAwLjYgNDQ4IDQ0OCA0NDggNDQ4LTIwMC42IDQ0OC00NDhTNzU5LjQgNjQgNTEyIDY0eiBtLTMyIDIzMmMwLTQuNCAzLjYtOCA4LThoNDhjNC40IDAgOCAzLjYgOCA4djI3MmMwIDQuNC0zLjYgOC04IDhoLTQ4Yy00LjQgMC04LTMuNi04LThWMjk2eiBtMzIgNDQwYy0yNi41IDAtNDgtMjEuNS00OC00OHMyMS41LTQ4IDQ4LTQ4IDQ4IDIxLjUgNDggNDgtMjEuNSA0OC00OCA0OHonO1xuXHRcdFx0XHRjb2xvciA9ICd2YXIoLS13YXJpbmdDb2xvciwjZmFhZDE0KSc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdHJldHVybiB7XG5cdFx0XHRwYXRoOiBwYXRoLFxuXHRcdFx0Y29sb3I6IGNvbG9yLFxuXHRcdH1cblx0fVxuXG5cdF9yZW5kZXIoKSB7XG5cdFx0Y29uc3Qgc2hhZG93Um9vdCA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuXHRcdHNoYWRvd1Jvb3QuaW5uZXJIVE1MID0gaHRtbDtcblx0fVxufVxuXG5pZiAoIWN1c3RvbUVsZW1lbnRzLmdldCgnYXdjLW1lc3NhZ2UnKSkge1xuXHRjdXN0b21FbGVtZW50cy5kZWZpbmUoJ2F3Yy1tZXNzYWdlJywgQXdjTWVzc2FnZSk7XG59XG5cbmxldCBtZXNzYWdlQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXNzYWdlLWNvbnRlbnQnKTtcbmlmICghbWVzc2FnZUNvbnRlbnQpIHtcblx0bWVzc2FnZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0bWVzc2FnZUNvbnRlbnQuaWQgPSAnbWVzc2FnZS1jb250ZW50Jztcblx0bWVzc2FnZUNvbnRlbnQuc3R5bGUgPSAncG9zaXRpb246Zml4ZWQ7IHBvaW50ZXItZXZlbnRzOm5vbmU7IGxlZnQ6MDsgcmlnaHQ6MDsgdG9wOjEwcHg7IHotaW5kZXg6NTE7Jztcblx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtZXNzYWdlQ29udGVudCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0aW5mbzogKHRleHQgPSAnJywgZHVyYXRpb24sIG9uY2xvc2UpID0+IHtcblx0XHRjb25zdCBtZXNzYWdlID0gbmV3IEF3Y01lc3NhZ2UoKTtcblx0XHRtZXNzYWdlLnRpbWVyICYmIGNsZWFyVGltZW91dChtZXNzYWdlLnRpbWVyKTtcblx0XHRtZXNzYWdlQ29udGVudC5hcHBlbmRDaGlsZChtZXNzYWdlKTtcblx0XHRtZXNzYWdlLnR5cGUgPSAnaW5mbyc7XG5cdFx0bWVzc2FnZS50ZXh0Q29udGVudCA9IHRleHQ7XG5cdFx0bWVzc2FnZS5zaG93ID0gdHJ1ZTtcblx0XHRtZXNzYWdlLm9uY2xvc2UgPSBvbmNsb3NlO1xuXHRcdG1lc3NhZ2UudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdG1lc3NhZ2Uuc2hvdyA9IGZhbHNlO1xuXHRcdH0sIGR1cmF0aW9uIHx8IDMwMDApO1xuXHRcdHJldHVybiBtZXNzYWdlO1xuXHR9LFxuXG5cdHN1Y2Nlc3M6ICh0ZXh0ID0gJycsIGR1cmF0aW9uLCBvbmNsb3NlKSA9PiB7XG5cdFx0Y29uc3QgbWVzc2FnZSA9IG5ldyBBd2NNZXNzYWdlKCk7XG5cdFx0bWVzc2FnZS50aW1lciAmJiBjbGVhclRpbWVvdXQobWVzc2FnZS50aW1lcik7XG5cdFx0bWVzc2FnZUNvbnRlbnQuYXBwZW5kQ2hpbGQobWVzc2FnZSk7XG5cdFx0bWVzc2FnZS50eXBlID0gJ3N1Y2Nlc3MnO1xuXHRcdG1lc3NhZ2UudGV4dENvbnRlbnQgPSB0ZXh0O1xuXHRcdG1lc3NhZ2Uuc2hvdyA9IHRydWU7XG5cdFx0bWVzc2FnZS5vbmNsb3NlID0gb25jbG9zZTtcblx0XHRtZXNzYWdlLnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRtZXNzYWdlLnNob3cgPSBmYWxzZTtcblx0XHR9LCBkdXJhdGlvbiB8fCAzMDAwKTtcblx0XHRyZXR1cm4gbWVzc2FnZTtcblx0fSxcblxuXHRlcnJvcjogKHRleHQgPSAnJywgZHVyYXRpb24sIG9uY2xvc2UpID0+IHtcblx0XHRjb25zdCBtZXNzYWdlID0gbmV3IEF3Y01lc3NhZ2UoKTtcblx0XHRtZXNzYWdlLnRpbWVyICYmIGNsZWFyVGltZW91dChtZXNzYWdlLnRpbWVyKTtcblx0XHRtZXNzYWdlQ29udGVudC5hcHBlbmRDaGlsZChtZXNzYWdlKTtcblx0XHRtZXNzYWdlLnR5cGUgPSAnZXJyb3InO1xuXHRcdG1lc3NhZ2UudGV4dENvbnRlbnQgPSB0ZXh0O1xuXHRcdG1lc3NhZ2Uuc2hvdyA9IHRydWU7XG5cdFx0bWVzc2FnZS5vbmNsb3NlID0gb25jbG9zZTtcblx0XHRtZXNzYWdlLnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRtZXNzYWdlLnNob3cgPSBmYWxzZTtcblx0XHR9LCBkdXJhdGlvbiB8fCAzMDAwKTtcblx0XHRyZXR1cm4gbWVzc2FnZTtcblx0fSxcblxuXHR3YXJuaW5nOiAodGV4dCA9ICcnLCBkdXJhdGlvbiwgb25jbG9zZSkgPT4ge1xuXHRcdGNvbnN0IG1lc3NhZ2UgPSBuZXcgQXdjTWVzc2FnZSgpO1xuXHRcdG1lc3NhZ2UudGltZXIgJiYgY2xlYXJUaW1lb3V0KG1lc3NhZ2UudGltZXIpO1xuXHRcdG1lc3NhZ2VDb250ZW50LmFwcGVuZENoaWxkKG1lc3NhZ2UpO1xuXHRcdG1lc3NhZ2UudHlwZSA9ICd3YXJuaW5nJztcblx0XHRtZXNzYWdlLnRleHRDb250ZW50ID0gdGV4dDtcblx0XHRtZXNzYWdlLnNob3cgPSB0cnVlO1xuXHRcdG1lc3NhZ2Uub25jbG9zZSA9IG9uY2xvc2U7XG5cdFx0bWVzc2FnZS50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0bWVzc2FnZS5zaG93ID0gZmFsc2U7XG5cdFx0fSwgZHVyYXRpb24gfHwgMzAwMCk7XG5cdFx0cmV0dXJuIG1lc3NhZ2U7XG5cdH0sXG5cblx0bG9hZGluZzogKHRleHQgPSAnJywgZHVyYXRpb24gPSAwLCBvbmNsb3NlKSA9PiB7XG5cdFx0Y29uc3QgbWVzc2FnZSA9IG5ldyBBd2NNZXNzYWdlKCk7XG5cdFx0bWVzc2FnZS50aW1lciAmJiBjbGVhclRpbWVvdXQobWVzc2FnZS50aW1lcik7XG5cdFx0bWVzc2FnZUNvbnRlbnQuYXBwZW5kQ2hpbGQobWVzc2FnZSk7XG5cdFx0bWVzc2FnZS50eXBlID0gJ2xvYWRpbmcnO1xuXHRcdG1lc3NhZ2UudGV4dENvbnRlbnQgPSB0ZXh0O1xuXHRcdG1lc3NhZ2Uuc2hvdyA9IHRydWU7XG5cdFx0bWVzc2FnZS5vbmNsb3NlID0gb25jbG9zZTtcblx0XHRpZiAoZHVyYXRpb24gIT09IDApIHtcblx0XHRcdG1lc3NhZ2UudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0bWVzc2FnZS5zaG93ID0gZmFsc2U7XG5cdFx0XHR9LCBkdXJhdGlvbiB8fCAzMDAwKTtcblx0XHR9XG5cdFx0cmV0dXJuIG1lc3NhZ2U7XG5cdH0sXG5cblx0c2hvdzogKHsgdGV4dCwgZHVyYXRpb24sIG9uY2xvc2UsIGljb24gfSkgPT4ge1xuXHRcdGNvbnN0IG1lc3NhZ2UgPSBuZXcgQXdjTWVzc2FnZSgpO1xuXHRcdG1lc3NhZ2UudGltZXIgJiYgY2xlYXJUaW1lb3V0KG1lc3NhZ2UudGltZXIpO1xuXHRcdG1lc3NhZ2VDb250ZW50LmFwcGVuZENoaWxkKG1lc3NhZ2UpO1xuXHRcdG1lc3NhZ2UuaWNvbiA9IGljb247XG5cdFx0bWVzc2FnZS50ZXh0Q29udGVudCA9IHRleHQgfHwgJyc7XG5cdFx0bWVzc2FnZS5zaG93ID0gdHJ1ZTtcblx0XHRtZXNzYWdlLm9uY2xvc2UgPSBvbmNsb3NlO1xuXHRcdGlmIChkdXJhdGlvbiAhPT0gMCkge1xuXHRcdFx0bWVzc2FnZS50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRtZXNzYWdlLnNob3cgPSBmYWxzZTtcblx0XHRcdH0sIGR1cmF0aW9uIHx8IDMwMDApO1xuXHRcdH1cblx0XHRyZXR1cm4gbWVzc2FnZTtcblx0fSxcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgJy4uL2F3Yy1idXR0b24vYXdjLWJ1dHRvbi5qcydcbmltcG9ydCBodG1sIGZyb20gJy4vYXdjLW9wdGlvbi5odG1sJztcblxuY2xhc3MgQXdjT3B0aW9uIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuXHRzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcblx0XHRyZXR1cm4gWydzZWxlY3RlZCcsICdkaXNhYmxlZCcsICd2YWx1ZSddO1xuXHR9XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5fcmVuZGVyKCk7XG5cdH1cblxuXHRnZXQgdmFsdWUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCd2YWx1ZScpO1xuXHR9XG5cblx0c2V0IHZhbHVlKHZhbHVlKSB7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCB2YWx1ZSk7XG5cdH1cblxuXHRnZXQgZGlzYWJsZWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdkaXNhYmxlZCcpICE9PSBudWxsO1xuXHR9XG5cblx0c2V0IGRpc2FibGVkKHZhbHVlKSB7XG5cdFx0aWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSBmYWxzZSkge1xuXHRcdFx0dGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKTtcblx0XHR9XG5cdH1cblxuXHRzZXQgc2VsZWN0ZWQodmFsdWUpIHtcblx0XHRpZiAodmFsdWUpIHtcblx0XHRcdHRoaXMuc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICcnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ3NlbGVjdGVkJyk7XG5cdFx0fVxuXHR9XG5cblx0c2V0IGZvY3VzaW4odmFsdWUpIHtcblx0XHRpZiAodmFsdWUpIHtcblx0XHRcdHRoaXMuc2V0QXR0cmlidXRlKCdmb2N1c2luJywgJycpO1xuXHRcdFx0dGhpcy5vcHRpb25FbC5zZXRBdHRyaWJ1dGUoJ2ZvY3VzJywgJycpO1xuXHRcdFx0dGhpcy5zY3JvbGxJbnRvVmlldyh7XG5cdFx0XHRcdGJsb2NrOiAnbmVhcmVzdCcsXG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ2ZvY3VzaW4nKTtcblx0XHRcdHRoaXMub3B0aW9uRWwucmVtb3ZlQXR0cmlidXRlKCdmb2N1cycpO1xuXHRcdH1cblx0fVxuXG5cdGZvY3VzKCkge1xuXHRcdHRoaXMub3B0aW9uRWwuZm9jdXMoKTtcblx0fVxuXG5cdGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpIHtcblx0XHRpZiAobmFtZSA9PSAnZGlzYWJsZWQnICYmIHRoaXMub3B0aW9uRWwpIHtcblx0XHRcdGlmIChuZXdWYWx1ZSAhPSBudWxsKSB7XG5cdFx0XHRcdHRoaXMub3B0aW9uRWwuZGlzYWJsZWQgPSBuZXdWYWx1ZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRjb25uZWN0ZWRDYWxsYmFjaygpIHtcblx0XHR0aGlzLm9wdGlvbkVsID0gdGhpcy5zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKCdvcHRpb24nKTtcblx0XHR0aGlzLmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZDtcblx0XHR0aGlzLm9wdGlvbkVsLmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZDtcblx0fVxuXG5cdF9yZW5kZXIoKSB7XG5cdFx0Y29uc3Qgc2hhZG93Um9vdCA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuXHRcdHNoYWRvd1Jvb3QuaW5uZXJIVE1MID0gaHRtbDtcblx0fVxufVxuXG5pZiAoIWN1c3RvbUVsZW1lbnRzLmdldCgnYXdjLW9wdGlvbicpKSB7XG5cdGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXdjLW9wdGlvbicsIEF3Y09wdGlvbik7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0ICcuLi9hd2MtYnV0dG9uL2F3Yy1idXR0b24uanMnXG5pbXBvcnQgaHRtbCBmcm9tICcuL2F3Yy1wYWdpbmF0aW9uLmh0bWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBd2NQYWdpbmF0aW9uIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuXHRzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcblx0XHRyZXR1cm4gWydwYWdlc2l6ZScsICd0b3RhbCddO1xuXHR9XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLl9yZW5kZXIoKTtcblx0fVxuXG5cdGdldCBkZWZhdWx0Y3VycmVudCgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RlZmF1bHRjdXJyZW50JykgfHwgMTtcblx0fVxuXG5cdHNldCBkZWZhdWx0Y3VycmVudCh2YWx1ZSkge1xuXHRcdHRoaXMuc2V0QXR0cmlidXRlKCdkZWZhdWx0Y3VycmVudCcsIHZhbHVlKTtcblx0fVxuXG5cdGdldCBkZWZhdWx0dmFsdWUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdkZWZhdWx0Y3VycmVudCcpIHx8IDE7XG5cdH1cblxuXHRzZXQgZGVmYXVsdHZhbHVlKHZhbHVlKSB7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGUoJ2RlZmF1bHR2YWx1ZScsIHZhbHVlKTtcblx0fVxuXG5cdGdldCBwYWdlc2l6ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ3BhZ2VzaXplJykgfHwgMTtcblx0fVxuXG5cdHNldCBwYWdlc2l6ZSh2YWx1ZSkge1xuXHRcdHRoaXMuc2V0QXR0cmlidXRlKCdwYWdlc2l6ZScsIHZhbHVlKTtcblx0fVxuXG5cdGdldCB0b3RhbCgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ3RvdGFsJykgfHwgMDtcblx0fVxuXG5cdHNldCB0b3RhbCh2YWx1ZSkge1xuXHRcdHRoaXMuc2V0QXR0cmlidXRlKCd0b3RhbCcsIHZhbHVlKTtcblx0fVxuXG5cdGdldCBjdXJyZW50KCkge1xuXHRcdHJldHVybiB0aGlzLiRjdXJyZW50O1xuXHR9XG5cblx0c2V0IGN1cnJlbnQoY3VycmVudCkge1xuXHRcdGlmICh0aGlzLiRjdXJyZW50ICE9PSBjdXJyZW50KSB7XG5cdFx0XHRjdXJyZW50ID0gTWF0aC5taW4oTWF0aC5tYXgoMSwgY3VycmVudCksIHRoaXMuX2NvdW50KTtcblx0XHRcdHRoaXMuJGN1cnJlbnQgPSBjdXJyZW50O1xuXHRcdFx0dGhpcy5fdXBkYXRlUGFnZShjdXJyZW50KTtcblx0XHRcdGlmICh0aGlzLl9pbml0KSB7XG5cdFx0XHRcdHRoaXMuZGlzcGF0Y2hFdmVudChcblx0XHRcdFx0XHRuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZScsIHtcblx0XHRcdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdFx0XHRjdXJyZW50OiBjdXJyZW50LFxuXHRcdFx0XHRcdFx0XHRwYWdlc2l6ZTogdGhpcy5wYWdlc2l6ZSxcblx0XHRcdFx0XHRcdFx0dG90YWw6IHRoaXMudG90YWwsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Z2V0IHNpbXBsZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ3NpbXBsZScpICE9PSBudWxsO1xuXHR9XG5cblx0c2V0IHNpbXBsZSh2YWx1ZSkge1xuXHRcdHRoaXMuc2V0QXR0cmlidXRlKCdzaW1wbGUnLCB2YWx1ZSk7XG5cdH1cblxuXHRhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG5cdFx0aWYgKG5hbWUgPT0gJ3BhZ2VzaXplJyAmJiB0aGlzLnBhZ2VFbCkge1xuXHRcdFx0dGhpcy5fcmVuZGVyUGFnZShuZXdWYWx1ZSwgdGhpcy50b3RhbCk7XG5cdFx0fVxuXHRcdGlmIChuYW1lID09ICd0b3RhbCcgJiYgdGhpcy5wYWdlRWwpIHtcblx0XHRcdHRoaXMuX3JlbmRlclBhZ2UodGhpcy5wYWdlc2l6ZSwgbmV3VmFsdWUpO1xuXHRcdH1cblx0fVxuXG5cdGNvbm5lY3RlZENhbGxiYWNrKCkge1xuXHRcdHRoaXMucGFnZUVsID0gdGhpcy5zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKCdwYWdlJyk7XG5cdFx0dGhpcy5sZWZ0RWwgPSB0aGlzLnNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoJ2xlZnQnKTtcblx0XHR0aGlzLnJpZ2h0RWwgPSB0aGlzLnNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoJ3JpZ2h0Jyk7XG5cdFx0dGhpcy4kY3VycmVudCA9IHRoaXMuZGVmYXVsdGN1cnJlbnQ7XG5cdFx0dGhpcy5fcmVuZGVyUGFnZSh0aGlzLnBhZ2VzaXplLCB0aGlzLnRvdGFsKTtcblx0XHR0aGlzLnBhZ2VFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldikgPT4ge1xuXHRcdFx0Y29uc3QgaXRlbSA9IGV2LnRhcmdldC5jbG9zZXN0KCdhd2MtYnV0dG9uJyk7XG5cdFx0XHRpZiAoaXRlbSkge1xuXHRcdFx0XHR0aGlzLmN1cnJlbnQgPSBOdW1iZXIoaXRlbS5kYXRhc2V0LmN1cnJlbnQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldikgPT4ge1xuXHRcdFx0c3dpdGNoIChldi5rZXkpIHtcblx0XHRcdFx0Y2FzZSAnQXJyb3dMZWZ0Jzpcblx0XHRcdFx0XHR0aGlzLmN1cnJlbnQtLTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnQXJyb3dSaWdodCc6XG5cdFx0XHRcdFx0dGhpcy5jdXJyZW50Kys7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fSlcblx0XHR0aGlzLmxlZnRFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldikgPT4ge1xuXHRcdFx0dGhpcy5jdXJyZW50LS07XG5cdFx0fSk7XG5cdFx0dGhpcy5yaWdodEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2KSA9PiB7XG5cdFx0XHR0aGlzLmN1cnJlbnQrKztcblx0XHR9KTtcblx0XHR0aGlzLl9pbml0ID0gdHJ1ZTtcblx0fVxuXG5cdF9yZW5kZXJQYWdlKHBhZ2VzaXplLCB0b3RhbCkge1xuXHRcdHRoaXMuX2NvdW50ID0gTWF0aC5jZWlsKHRvdGFsIC8gcGFnZXNpemUpO1xuXHRcdGNvbnN0IGN1cnJlbnQgPSBNYXRoLm1pbihNYXRoLm1heCgxLCB0aGlzLmN1cnJlbnQpLCB0aGlzLl9jb3VudCk7XG5cdFx0aWYgKHRoaXMuc2ltcGxlKSB7XG5cdFx0XHRjb25zdCBodG1sID0gYDxhd2MtYnV0dG9uIGNsYXNzPVwic2ltcGxlLXBhZ2VcIiB0YWJpbmRleD1cIi0xXCIgdHlwZT1cInRleHRcIj4ke2N1cnJlbnR9IC8gJHt0aGlzLl9jb3VudH08L2F3Yy1idXR0b24+YDtcblx0XHRcdHRoaXMucGFnZUVsLmlubmVySFRNTCA9IGh0bWw7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IGh0bWwgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiB0aGlzLl9jb3VudCB9LCAoZWwsIGkpID0+IGkpXG5cdFx0XHRcdC5zcGxpY2UoMCwgOSlcblx0XHRcdFx0Lm1hcChcblx0XHRcdFx0XHQoZWwpID0+XG5cdFx0XHRcdFx0XHRgPGF3Yy1idXR0b24gJHtlbCArIDEgPT0gY3VycmVudCA/ICdjdXJyZW50JyA6ICcnfSB0eXBlPVwidGV4dFwiIGRhdGEtY3VycmVudD1cIiR7ZWwgKyAxfVwiPiR7ZWwgKyAxfTwvYXdjLWJ1dHRvbj5gXG5cdFx0XHRcdClcblx0XHRcdFx0LmpvaW4oJycpO1xuXHRcdFx0dGhpcy5wYWdlRWwuaW5uZXJIVE1MID0gaHRtbDtcblx0XHR9XG5cdFx0dGhpcy5fdXBkYXRlUGFnZShjdXJyZW50KTtcblx0fVxuXG5cdF91cGRhdGVQYWdlKGN1cnJlbnQgPSB0aGlzLmN1cnJlbnQpIHtcblx0XHR0aGlzLmxlZnRFbC5kaXNhYmxlZCA9IGN1cnJlbnQgPT0gMTtcblx0XHR0aGlzLnJpZ2h0RWwuZGlzYWJsZWQgPSBjdXJyZW50ID09IHRoaXMuX2NvdW50O1xuXHRcdGlmICh0aGlzLnNpbXBsZSkge1xuXHRcdFx0Y29uc3Qgc2ltcGxlUGFnZUVsID0gdGhpcy5wYWdlRWwucXVlcnlTZWxlY3RvcignLnNpbXBsZS1wYWdlJyk7XG5cdFx0XHRpZiAoc2ltcGxlUGFnZUVsKSB7XG5cdFx0XHRcdHNpbXBsZVBhZ2VFbC50ZXh0Q29udGVudCA9IGN1cnJlbnQgKyAnIC8gJyArIHRoaXMuX2NvdW50O1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAodGhpcy5fY291bnQgPiA5KSB7XG5cdFx0XHRcdGxldCBwbGFjZSA9IFtdO1xuXHRcdFx0XHRzd2l0Y2ggKGN1cnJlbnQpIHtcblx0XHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHRcdGNhc2UgMzpcblx0XHRcdFx0XHRjYXNlIDQ6XG5cdFx0XHRcdFx0Y2FzZSA1OlxuXHRcdFx0XHRcdFx0cGxhY2UgPSBbMSwgMiwgMywgNCwgNSwgNiwgNywgJ25leHQnLCB0aGlzLl9jb3VudF07XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIHRoaXMuX2NvdW50OlxuXHRcdFx0XHRcdGNhc2UgdGhpcy5fY291bnQgLSAxOlxuXHRcdFx0XHRcdGNhc2UgdGhpcy5fY291bnQgLSAyOlxuXHRcdFx0XHRcdGNhc2UgdGhpcy5fY291bnQgLSAzOlxuXHRcdFx0XHRcdGNhc2UgdGhpcy5fY291bnQgLSA0OlxuXHRcdFx0XHRcdFx0cGxhY2UgPSBbXG5cdFx0XHRcdFx0XHRcdDEsXG5cdFx0XHRcdFx0XHRcdCdwcmUnLFxuXHRcdFx0XHRcdFx0XHR0aGlzLl9jb3VudCAtIDYsXG5cdFx0XHRcdFx0XHRcdHRoaXMuX2NvdW50IC0gNSxcblx0XHRcdFx0XHRcdFx0dGhpcy5fY291bnQgLSA0LFxuXHRcdFx0XHRcdFx0XHR0aGlzLl9jb3VudCAtIDMsXG5cdFx0XHRcdFx0XHRcdHRoaXMuX2NvdW50IC0gMixcblx0XHRcdFx0XHRcdFx0dGhpcy5fY291bnQgLSAxLFxuXHRcdFx0XHRcdFx0XHR0aGlzLl9jb3VudCxcblx0XHRcdFx0XHRcdF07XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0cGxhY2UgPSBbXG5cdFx0XHRcdFx0XHRcdDEsXG5cdFx0XHRcdFx0XHRcdCdwcmUnLFxuXHRcdFx0XHRcdFx0XHRjdXJyZW50IC0gMixcblx0XHRcdFx0XHRcdFx0Y3VycmVudCAtIDEsXG5cdFx0XHRcdFx0XHRcdGN1cnJlbnQsXG5cdFx0XHRcdFx0XHRcdGN1cnJlbnQgKyAxLFxuXHRcdFx0XHRcdFx0XHRjdXJyZW50ICsgMixcblx0XHRcdFx0XHRcdFx0J25leHQnLFxuXHRcdFx0XHRcdFx0XHR0aGlzLl9jb3VudCxcblx0XHRcdFx0XHRcdF07XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnBhZ2VFbC5xdWVyeVNlbGVjdG9yQWxsKCdhd2MtYnV0dG9uJykuZm9yRWFjaCgoZWwsIGkpID0+IHtcblx0XHRcdFx0XHRpZiAodHlwZW9mIHBsYWNlW2ldID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRcdFx0ZWwuZGF0YXNldC5jdXJyZW50ID0gcGxhY2VbaV07XG5cdFx0XHRcdFx0XHRlbC50ZXh0Q29udGVudCA9IHBsYWNlW2ldO1xuXHRcdFx0XHRcdFx0ZWwuZGlzYWJsZWQgPSBmYWxzZTtcblx0XHRcdFx0XHRcdGlmIChwbGFjZVtpXSA9PSBjdXJyZW50KSB7XG5cdFx0XHRcdFx0XHRcdGVsLnNldEF0dHJpYnV0ZSgnY3VycmVudCcsICcnKTtcblx0XHRcdFx0XHRcdFx0ZWwuZm9jdXMoKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGVsLnJlbW92ZUF0dHJpYnV0ZSgnY3VycmVudCcpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ZWwucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRlbC50ZXh0Q29udGVudCA9ICcuLi4nO1xuXHRcdFx0XHRcdFx0ZWwucmVtb3ZlQXR0cmlidXRlKCdjdXJyZW50Jyk7XG5cdFx0XHRcdFx0XHRlbC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgLTEpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnBhZ2VFbC5xdWVyeVNlbGVjdG9yQWxsKCdhd2MtYnV0dG9uJykuZm9yRWFjaCgoZWwsIGkpID0+IHtcblx0XHRcdFx0XHRpZiAoZWwuZGF0YXNldC5jdXJyZW50ID09IGN1cnJlbnQpIHtcblx0XHRcdFx0XHRcdGVsLnNldEF0dHJpYnV0ZSgnY3VycmVudCcsICcnKTtcblx0XHRcdFx0XHRcdGVsLmZvY3VzKCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGVsLnJlbW92ZUF0dHJpYnV0ZSgnY3VycmVudCcpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0X3JlbmRlcigpIHtcblx0XHRjb25zdCBzaGFkb3dSb290ID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG5cdFx0c2hhZG93Um9vdC5pbm5lckhUTUwgPSBodG1sO1xuXHR9XG59XG5cbmlmICghY3VzdG9tRWxlbWVudHMuZ2V0KCdhd2MtcGFnaW5hdGlvbicpKSB7XG5cdGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXdjLXBhZ2luYXRpb24nLCBBd2NQYWdpbmF0aW9uKTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgJy4uL2F3Yy1idXR0b24vYXdjLWJ1dHRvbic7XG5pbXBvcnQgaHRtbCBmcm9tICcuL2F3Yy1wb3Bib2R5Lmh0bWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBd2NQb3BCb2R5IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xuICAgICAgICByZXR1cm4gWydvcGVuJywgJ3RpdGxlJywgJ29rdGV4dCcsICdjYW5jZWx0ZXh0JywgJ3R5cGUnXTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcih0eXBlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX3R5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLl9yZW5kZXIoKTtcbiAgICB9XG5cbiAgICBnZXQgb3BlbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdvcGVuJykgIT09IG51bGw7XG4gICAgfVxuXG4gICAgc2V0IG9wZW4odmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ29wZW4nKTtcbiAgICAgICAgICAgIHRoaXMucGFyZW50Tm9kZS5yZW1vdmVBdHRyaWJ1dGUoJ29wZW4nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdvcGVuJywgJycpO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnROb2RlLnNldEF0dHJpYnV0ZSgnb3BlbicsICcnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCB0aXRsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCd0aXRsZScpIHx8ICdUaXRsZSc7XG4gICAgfVxuXG4gICAgc2V0IHRpdGxlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCd0aXRsZScsIHZhbHVlKTtcbiAgICB9XG5cbiAgICBnZXQgdHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCd0eXBlJyk7XG4gICAgfVxuXG4gICAgc2V0IHR5cGUodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ3R5cGUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCd0eXBlJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IG9rdGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdva3RleHQnKSB8fCAnT0snO1xuICAgIH1cblxuICAgIHNldCBva3RleHQodmFsdWUpIHtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ29rdGV4dCcsIHZhbHVlKTtcbiAgICB9XG5cbiAgICBnZXQgY2FuY2VsdGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdjYW5jZWx0ZXh0JykgfHwgJ0NhbmNlbCc7XG4gICAgfVxuXG4gICAgc2V0IGNhbmNlbHRleHQodmFsdWUpIHtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2NhbmNlbHRleHQnLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHRoaXMuX3JlbW92ZSA9IGZhbHNlO1xuICAgICAgICBjb25zdCBwb3BCb2R5RWwgPSB0aGlzLnNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoXCJwb3Bib2R5LWNvbnRlbnRcIik7XG4gICAgICAgIGlmICgodGhpcy5fdHlwZSB8fCB0aGlzLnR5cGUpID09PSAnY29uZmlybScpIHtcbiAgICAgICAgICAgIC8vIGNvbnN0IGljb25FTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2F3Yy1pY29uJyk7XG4gICAgICAgICAgICAvLyBpY29uRUwuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwb3Bib2R5LXR5cGVcIik7XG4gICAgICAgICAgICAvLyBpY29uRUwuY2xhc3NMaXN0LmFkZChcInBvcGJvZHktdHlwZVwiKTtcbiAgICAgICAgICAgIC8vIGljb25FTC5uYW1lID0gXCJxdWVzdGlvbi1jaXJjbGVcIjtcbiAgICAgICAgICAgIC8vIGljb25FTC5jb2xvciA9IFwidmFyKC0td2FyaW5nQ29sb3IsI2ZhYWQxNClcIjtcbiAgICAgICAgICAgIC8vIHRoaXMuc2hhZG93Um9vdC5wcmVwZW5kKGljb25FTCk7XG4gICAgICAgICAgICBjb25zdCBmb290ZXJFbCA9IGA8ZGl2IGNsYXNzPVwicG9wYm9keS1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICA8YXdjLWJ1dHRvbiBpZD1cImJ0bi1jYW5jZWxcIj4ke3RoaXMuY2FuY2VsdGV4dH08L2F3Yy1idXR0b24+XG4gICAgICAgICAgICAgICAgPGF3Yy1idXR0b24gaWQ9XCJidG4tc3VibWl0XCIgdHlwZT1cInByaW1hcnlcIj4ke3RoaXMub2t0ZXh0fTwvYXdjLWJ1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICAgICAgICBwb3BCb2R5RWwuaW5uZXJIVE1MICs9IGZvb3RlckVsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCh0aGlzLl90eXBlIHx8IHRoaXMudHlwZSkgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMudGl0bGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB0aGlzLnRpdGxlRWwuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0aXRsZVwiKTtcbiAgICAgICAgICAgIHRoaXMudGl0bGVFbC5jbGFzc0xpc3QuYWRkKFwicG9wYm9keS10aXRsZVwiKTtcbiAgICAgICAgICAgIHRoaXMudGl0bGVFbC5pbm5lckhUTUwgPSB0aGlzLnRpdGxlO1xuXG4gICAgICAgICAgICB0aGlzLmJ0bkNsb3NlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXdjLWljb25cIik7XG4gICAgICAgICAgICB0aGlzLmJ0bkNsb3NlRWwuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJidG4tY2xvc2VcIik7XG4gICAgICAgICAgICB0aGlzLmJ0bkNsb3NlRWwuY2xhc3NMaXN0LmFkZChcImJ0bi1jbG9zZVwiKTtcbiAgICAgICAgICAgIHRoaXMuYnRuQ2xvc2VFbC5wYXRoID0gXCJNNTYzLjggNTEybDI2Mi41LTMxMi45YzQuNC01LjIgMC43LTEzLjEtNi4xLTEzLjFoLTc5LjhjLTQuNyAwLTkuMiAyLjEtMTIuMyA1LjdMNTExLjYgNDQ5LjggMjk1LjEgMTkxLjdjLTMtMy42LTcuNS01LjctMTIuMy01LjdIMjAzYy02LjggMC0xMC41IDcuOS02LjEgMTMuMUw0NTkuNCA1MTIgMTk2LjkgODI0LjljLTQuNCA1LjItMC43IDEzLjEgNi4xIDEzLjFoNzkuOGM0LjcgMCA5LjItMi4xIDEyLjMtNS43bDIxNi41LTI1OC4xIDIxNi41IDI1OC4xYzMgMy42IDcuNSA1LjcgMTIuMyA1LjdoNzkuOGM2LjggMCAxMC41LTcuOSA2LjEtMTMuMUw1NjMuOCA1MTJ6XCI7XG4gICAgICAgICAgICBwb3BCb2R5RWwucHJlcGVuZCh0aGlzLmJ0bkNsb3NlRWwpO1xuICAgICAgICAgICAgcG9wQm9keUVsLnByZXBlbmQodGhpcy50aXRsZUVsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnR5cGUpIHtcbiAgICAgICAgICAgIHRoaXMudGl0bGVFbCA9IHRoaXMuc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKTtcbiAgICAgICAgICAgIHRoaXMuYnRuQ2xvc2VFbCA9IHRoaXMuc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZCgnYnRuLWNsb3NlJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PSAnY29uZmlybScpIHtcbiAgICAgICAgICAgIHRoaXMuYnRuQ2FuY2VsRWwgPSB0aGlzLnNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1jYW5jZWwnKTtcbiAgICAgICAgICAgIHRoaXMuYnRuU3VibWl0RWwgPSB0aGlzLnNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1zdWJtaXQnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCAoZXYpID0+IHtcbiAgICAgICAgICAgIGlmIChldi5wcm9wZXJ0eU5hbWUgPT09ICd0cmFuc2Zvcm0nICYmIHRoaXMub3Blbikge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnR5cGUgPT0gJ2NvbmZpcm0nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuU3VibWl0RWwuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudHlwZSA9PSAncGFuZScpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5DbG9zZUVsLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ29wZW4nKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIChldikgPT4ge1xuICAgICAgICAgICAgaWYgKGV2LnByb3BlcnR5TmFtZSA9PT0gJ3RyYW5zZm9ybScgJiYgIXRoaXMub3Blbikge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9yZW1vdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjbG9zZScpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldikgPT4ge1xuICAgICAgICAgICAgaWYgKGV2LnRhcmdldC5jbG9zZXN0KCdbYXV0b2Nsb3NlXScpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgd2luZG93Lnh5QWN0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBpZiAodGhpcy50eXBlKSB7XG4gICAgICAgICAgICB0aGlzLmJ0bkNsb3NlRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuID0gZmFsc2VcbiAgICAgICAgICAgICAgICB3aW5kb3cueHlBY3RpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT0gJ2NvbmZpcm0nKSB7XG4gICAgICAgICAgICB0aGlzLmJ0bkNhbmNlbEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2NhbmNlbCcpKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB3aW5kb3cueHlBY3RpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdGhpcy5idG5TdWJtaXRFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdzdWJtaXQnKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgd2luZG93Lnh5QWN0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpIHtcbiAgICAgICAgaWYgKG5hbWUgPT0gJ3RpdGxlJyAmJiB0aGlzLnRpdGxlRWwpIHtcbiAgICAgICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMudGl0bGVFbC5pbm5lckhUTUwgPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobmFtZSA9PSAnb2t0ZXh0JyAmJiB0aGlzLmJ0blN1Ym1pdEVsKSB7XG4gICAgICAgICAgICBpZiAobmV3VmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJ0blN1Ym1pdEVsLmlubmVySFRNTCA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChuYW1lID09ICdjYW5jZWx0ZXh0JyAmJiB0aGlzLmJ0bkNhbmNlbEVsKSB7XG4gICAgICAgICAgICBpZiAobmV3VmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bkNhbmNlbEVsLmlubmVySFRNTCA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgX3JlbmRlcigpIHtcbiAgICAgICAgY29uc3Qgc2hhZG93Um9vdCA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuICAgICAgICBzaGFkb3dSb290LmlubmVySFRNTCA9IGh0bWw7XG4gICAgfVxufVxuXG5pZiAoIWN1c3RvbUVsZW1lbnRzLmdldCgnYXdjLXBvcGJvZHknKSkge1xuICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXdjLXBvcGJvZHknLCBBd2NQb3BCb2R5KTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0ICcuLi9hd2MtYnV0dG9uL2F3Yy1idXR0b24nO1xuaW1wb3J0IEF3Y1BvcEJvZHkgZnJvbSAnLi9hd2MtcG9wYm9keSc7XG5pbXBvcnQgaHRtbCBmcm9tICcuL2F3Yy1wb3BvdmVyLmh0bWwnO1xuXG5jbGFzcyBBd2NQb3BvdmVyIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuXHRzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcblx0XHRyZXR1cm4gWyd0aXRsZScsICdva3RleHQnLCAnY2FuY2VsdGV4dCcsICd0eXBlJ11cblx0fVxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuc2V0cG9wID0gdGhpcy5zZXRwb3AuYmluZCh0aGlzKTtcblx0XHR0aGlzLl9yZW5kZXIoKTtcblx0fVxuXG5cdGdldCB0aXRsZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ3RpdGxlJykgfHwgJ1RpdGxlJztcblx0fVxuXG5cdHNldCB0aXRsZSh2YWx1ZSkge1xuXHRcdHRoaXMuc2V0QXR0cmlidXRlKCd0aXRsZScsIHZhbHVlKTtcblx0fVxuXG5cdGdldCBkaXNhYmxlZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJykgIT09IG51bGw7XG5cdH1cblxuXHRzZXQgZGlzYWJsZWQodmFsdWUpIHtcblx0XHRpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IGZhbHNlKSB7XG5cdFx0XHR0aGlzLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpO1xuXHRcdH1cblx0fVxuXG5cdGdldCB0eXBlKCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgndHlwZScpO1xuXHR9XG5cblx0c2V0IHR5cGUodmFsdWUpIHtcblx0XHR0aGlzLnNldEF0dHJpYnV0ZSgndHlwZScsIHZhbHVlKTtcblx0fVxuXG5cdGdldCBkaXIoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdkaXInKTtcblx0fVxuXG5cdHNldCBkaXIodmFsdWUpIHtcblx0XHR0aGlzLnNldEF0dHJpYnV0ZSgnZGlyJywgdmFsdWUpO1xuXHR9XG5cblx0Z2V0IG9rdGV4dCgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ29rdGV4dCcpO1xuXHR9XG5cblx0c2V0IG9rdGV4dCh2YWx1ZSkge1xuXHRcdHRoaXMuc2V0QXR0cmlidXRlKCdva3RleHQnLCB2YWx1ZSk7XG5cdH1cblxuXHRnZXQgY2FuY2VsdGV4dCgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2NhbmNlbHRleHQnKTtcblx0fVxuXG5cdHNldCBjYW5jZWx0ZXh0KHZhbHVlKSB7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGUoJ2NhbmNlbHRleHQnLCB2YWx1ZSk7XG5cdH1cblxuXHRnZXQgdHJpZ2dlcigpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ3RyaWdnZXInKTtcblx0fVxuXG5cdHNldCB0cmlnZ2VyKHZhbHVlKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0QXR0cmlidXRlKCd0cmlnZ2VyJywgdmFsdWUpO1xuXHR9XG5cblx0Z2V0IGNvbnRlbnQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdjb250ZW50Jyk7XG5cdH1cblxuXHRzZXQgY29udGVudCh2YWx1ZSkge1xuXHRcdHRoaXMuc2V0QXR0cmlidXRlKCdjb250ZW50JywgdmFsdWUpO1xuXHR9XG5cblx0c2hvdyhldikge1xuXHRcdHRoaXMucG9wQm9keUVsID0gdGhpcy5xdWVyeVNlbGVjdG9yKCdhd2MtcG9wYm9keScpO1xuXHRcdGlmICghdGhpcy5kaXNhYmxlZCkge1xuXHRcdFx0aWYgKCF0aGlzLnBvcEJvZHlFbCkge1xuXHRcdFx0XHR0aGlzLnBvcEJvZHlFbCA9IG5ldyBBd2NQb3BCb2R5KHRoaXMudHlwZSk7XG5cdFx0XHRcdHRoaXMucG9wQm9keUVsLnR5cGUgPSB0aGlzLnR5cGU7XG5cdFx0XHRcdHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5wb3BCb2R5RWwpO1xuXHRcdFx0XHR0aGlzLnBvcEJvZHlFbC50aXRsZSA9IHRoaXMudGl0bGUgfHwgJyc7XG5cdFx0XHRcdHRoaXMucG9wQm9keUVsLmlubmVySFRNTCA9IHRoaXMuY29udGVudCB8fCAnJztcblx0XHRcdFx0aWYgKHRoaXMudHlwZSA9PSAnY29uZmlybScpIHtcblx0XHRcdFx0XHR0aGlzLnBvcEJvZHlFbC5va3RleHQgPSB0aGlzLm9rdGV4dCB8fCAnT0snO1xuXHRcdFx0XHRcdHRoaXMucG9wQm9keUVsLmNhbmNlbHRleHQgPSB0aGlzLmNhbmNlbHRleHQgfHwgJ0NhbmNlbCc7XG5cdFx0XHRcdFx0dGhpcy5wb3BCb2R5RWwub25zdWJtaXQgPSAoKSA9PlxuXHRcdFx0XHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnc3VibWl0JykpO1xuXHRcdFx0XHRcdHRoaXMucG9wQm9keUVsLm9uY2FuY2VsID0gKCkgPT5cblx0XHRcdFx0XHRcdHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2NhbmNlbCcpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMudHJpZ2dlciA9PT0gJ2NvbnRleHRtZW51Jykge1xuXHRcdFx0XHRjb25zdCB7IHgsIHkgfSA9IHRoaXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRcdHRoaXMucG9wQm9keUVsLnN0eWxlLnNldFByb3BlcnR5KCctLXgnLCBldi5jbGllbnRYIC0geCArICdweCcpO1xuXHRcdFx0XHR0aGlzLnBvcEJvZHlFbC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS15JywgZXYuY2xpZW50WSAtIHkgKyAncHgnKTtcblx0XHRcdFx0dGhpcy5wb3BCb2R5RWwub3BlbiA9IHRydWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zdCBwYXRoID0gZXYucGF0aCB8fCAoZXYuY29tcG9zZWRQYXRoICYmIGV2LmNvbXBvc2VkUGF0aCgpKTtcblx0XHRcdFx0aWYgKCFwYXRoLmluY2x1ZGVzKHRoaXMucG9wQm9keUVsKSkge1xuXHRcdFx0XHRcdHdpbmRvdy54eUFjdGl2ZUVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuXHRcdFx0XHRcdHRoaXMucG9wQm9keUVsLm9wZW4gPSAhdGhpcy5wb3BCb2R5RWwub3Blbjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHQodGhpcy5wb3BCb2R5RWwgfHwgdGhpcykuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3N1Ym1pdCcpKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMucG9wQm9keUVsO1xuXHR9XG5cblx0c2V0cG9wKGV2KSB7XG5cdFx0Y29uc3QgcGF0aCA9IGV2LnBhdGggfHwgKGV2LmNvbXBvc2VkUGF0aCAmJiBldi5jb21wb3NlZFBhdGgoKSk7XG5cdFx0aWYgKFxuXHRcdFx0KHRoaXMucG9wQm9keUVsICYmXG5cdFx0XHRcdCFwYXRoLmluY2x1ZGVzKHRoaXMucG9wQm9keUVsKSAmJlxuXHRcdFx0XHQhcGF0aC5pbmNsdWRlcyh0aGlzLmNoaWxkcmVuWzBdKSkgfHxcblx0XHRcdCh0aGlzLnRyaWdnZXIgPT09ICdjb250ZXh0bWVudScgJiZcblx0XHRcdFx0IXBhdGguaW5jbHVkZXModGhpcy5wb3BCb2R5RWwpICYmXG5cdFx0XHRcdGV2LndoaWNoID09ICcxJylcblx0XHQpIHtcblx0XHRcdHRoaXMucG9wQm9keUVsLm9wZW4gPSBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHRhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG5cdFx0aWYgKG5hbWUgPT0gJ3RpdGxlJyAmJiB0aGlzLnBvcEJvZHlFbCkge1xuXHRcdFx0aWYgKG5ld1ZhbHVlICE9PSBudWxsKSB7XG5cdFx0XHRcdHRoaXMucG9wQm9keUVsLnRpdGxlID0gbmV3VmFsdWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChuYW1lID09ICdva3RleHQnICYmIHRoaXMucG9wQm9keUVsKSB7XG5cdFx0XHRpZiAobmV3VmFsdWUgIT09IG51bGwpIHtcblx0XHRcdFx0dGhpcy5wb3BCb2R5RWwub2t0ZXh0ID0gbmV3VmFsdWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChuYW1lID09ICdjYW5jZWx0ZXh0JyAmJiB0aGlzLnBvcEJvZHlFbCkge1xuXHRcdFx0aWYgKG5ld1ZhbHVlICE9PSBudWxsKSB7XG5cdFx0XHRcdHRoaXMucG9wQm9keUVsLmNhbmNlbHRleHQgPSBuZXdWYWx1ZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRjb25uZWN0ZWRDYWxsYmFjaygpIHtcblx0XHR0aGlzLnBvcEJvZHlFbCA9IHRoaXMucXVlcnlTZWxlY3RvcignYXdjLXBvcGJvZHknKTtcblx0XHRpZiAoISh0aGlzLnRyaWdnZXIgJiYgdGhpcy50cmlnZ2VyICE9PSAnY2xpY2snKSkge1xuXHRcdFx0dGhpcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc2hvdyk7XG5cdFx0fVxuXHRcdGlmICh0aGlzLnRyaWdnZXIgPT09ICdjb250ZXh0bWVudScpIHtcblx0XHRcdHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCAoZXYpID0+IHtcblx0XHRcdFx0ZXYucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0Y29uc3QgcGF0aCA9IGV2LnBhdGggfHwgKGV2LmNvbXBvc2VkUGF0aCAmJiBldi5jb21wb3NlZFBhdGgoKSk7XG5cdFx0XHRcdGlmICghcGF0aC5pbmNsdWRlcyh0aGlzLnBvcEJvZHlFbCkpIHtcblx0XHRcdFx0XHR0aGlzLnNob3coZXYpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdH1cblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLnNldHBvcCk7XG5cdH1cblxuXHRkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLnBvcEJvZHlFbCk7XG5cdH1cblxuXHRfcmVuZGVyKCkge1xuXHRcdGNvbnN0IHNoYWRvd1Jvb3QgPSB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcblx0XHRzaGFkb3dSb290LmlubmVySFRNTCA9IGh0bWw7XG5cdH1cbn1cblxuaWYgKCFjdXN0b21FbGVtZW50cy5nZXQoJ2F3Yy1wb3BvdmVyJykpIHtcblx0Y3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhd2MtcG9wb3ZlcicsIEF3Y1BvcG92ZXIpXG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGh0bWwgZnJvbSAnLi9hd2MtcmFkaW8uaHRtbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF3Y1JhZGlvIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuXHRzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcblx0XHRyZXR1cm4gWydkaXNhYmxlZCcsICdjaGVja2VkJ107XG5cdH1cblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuX3JlbmRlcigpO1xuXHR9XG5cblx0Z2V0IGRpc2FibGVkKCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnZGlzYWJsZWQnKSAhPT0gbnVsbDtcblx0fVxuXG5cdHNldCBkaXNhYmxlZCh2YWx1ZSkge1xuXHRcdGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gZmFsc2UpIHtcblx0XHRcdHRoaXMucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJyk7XG5cdFx0fVxuXHR9XG5cblx0Z2V0IGNoZWNrZWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdjaGVja2VkJykgIT09IG51bGw7XG5cdH1cblxuXHRzZXQgY2hlY2tlZCh2YWx1ZSkge1xuXHRcdGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gZmFsc2UpIHtcblx0XHRcdHRoaXMucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJycpO1xuXHRcdH1cblx0fVxuXG5cdGdldCB2YWx1ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykgfHwgdGhpcy50ZXh0Q29udGVudDtcblx0fVxuXG5cdHNldCB2YWx1ZSh2YWx1ZSkge1xuXHRcdHRoaXMuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlKTtcblx0fVxuXG5cdGdldCBuYW1lKCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnbmFtZScpO1xuXHR9XG5cblx0c2V0IG5hbWUodmFsdWUpIHtcblx0XHR0aGlzLnNldEF0dHJpYnV0ZSgnbmFtZScsIHZhbHVlKTtcblx0fVxuXG5cdGZvY3VzKCkge1xuXHRcdHRoaXMucmFkaW9FbC5mb2N1cygpO1xuXHR9XG5cblx0YXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSkge1xuXHRcdGlmIChuYW1lID09ICdkaXNhYmxlZCcgJiYgdGhpcy5yYWRpb0VsKSB7XG5cdFx0XHRpZiAobmV3VmFsdWUgIT09IG51bGwpIHtcblx0XHRcdFx0dGhpcy5yYWRpb0VsLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMucmFkaW9FbC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChuYW1lID09ICdjaGVja2VkJyAmJiB0aGlzLnJhZGlvRWwpIHtcblx0XHRcdGlmIChuZXdWYWx1ZSAhPT0gbnVsbCkge1xuXHRcdFx0XHR0aGlzLnJhZGlvRWwuY2hlY2tlZCA9IHRydWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnJhZGlvRWwuY2hlY2tlZCA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGNvbm5lY3RlZENhbGxiYWNrKCkge1xuXHRcdHRoaXMucmFkaW9FbCA9IHRoaXMuc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZCgncmFkaW8nKTtcblx0XHR0aGlzLnBhcmVudEVsID0gdGhpcy5nZXRSb290Tm9kZSgpO1xuXHRcdHRoaXMuZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkO1xuXHRcdHRoaXMuY2hlY2tlZCA9IHRoaXMuY2hlY2tlZDtcblx0XHR0aGlzLnJhZGlvRWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2KSA9PiB7XG5cdFx0XHR0aGlzLnRvY2hlY2soKTtcblx0XHRcdHRoaXMuZGlzcGF0Y2hFdmVudChcblx0XHRcdFx0bmV3IEN1c3RvbUV2ZW50KCdjaGFuZ2UnLCB7XG5cdFx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0XHRjaGVja2VkOiB0aGlzLmNoZWNrZWQsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdFx0fSk7XG5cdH1cblxuXHR0b2NoZWNrKCkge1xuXHRcdGNvbnN0IHNlbGVjdG9yID0gYGF3Yy1yYWRpb1tuYW1lPVwiJHt0aGlzLm5hbWV9XCJdW2NoZWNrZWRdYDtcblx0XHRjb25zdCBwcmV2ID0gdGhpcy5wYXJlbnRFbC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcblx0XHRpZiAocHJldikge1xuXHRcdFx0cHJldi5jaGVja2VkID0gZmFsc2U7XG5cdFx0fVxuXHRcdHRoaXMuY2hlY2tlZCA9IHRydWU7XG5cdH1cblxuXHRfcmVuZGVyKCkge1xuXHRcdGNvbnN0IHNoYWRvd1Jvb3QgPSB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcblx0XHRzaGFkb3dSb290LmlubmVySFRNTCA9IGh0bWw7XG5cdH1cbn1cblxuaWYgKCFjdXN0b21FbGVtZW50cy5nZXQoJ2F3Yy1yYWRpbycpKSB7XG5cdGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXdjLXJhZGlvJywgQXdjUmFkaW8pO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCAnLi4vYXdjLXRvb2x0aXAvYXdjLXRvb2x0aXAuanMnXG5pbXBvcnQgJy4uL2F3Yy1pY29uL2F3Yy1pY29uJztcbmltcG9ydCBodG1sIGZyb20gJy4vYXdjLXJhdGUuaHRtbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF3Y1JhdGUgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG5cdHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xuXHRcdHJldHVybiBbJ2NvbG9yJywgJ3NpemUnXTtcblx0fVxuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5fcmVuZGVyKCk7XG5cdH1cblxuXHRnZXQgdmFsdWUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2hhZG93Um9vdC52YWx1ZTtcblx0fVxuXG5cdHNldCB2YWx1ZSh2YWx1ZSkge1xuXHRcdGlmICh2YWx1ZSA9PT0gMCkge1xuXHRcdFx0dGhpcy5yYWRpb0Vsc1t0aGlzLnZhbHVlIC0gMV0uY2hlY2tlZCA9IGZhbHNlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnJhZGlvRWxzW051bWJlcih2YWx1ZSkgLSAxXS5jaGVja2VkID0gdHJ1ZTtcblx0XHR9XG5cdFx0dGhpcy5zaGFkb3dSb290LnZhbHVlID0gdmFsdWU7XG5cdH1cblxuXHRnZXQgc2l6ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ3NpemUnKSB8fCAnJztcblx0fVxuXG5cdHNldCBzaXplKHZhbHVlKSB7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGUoJ3NpemUnLCB2YWx1ZSk7XG5cdH1cblxuXHRnZXQgZGlzYWJsZWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdkaXNhYmxlZCcpICE9PSBudWxsO1xuXHR9XG5cblx0c2V0IGRpc2FibGVkKHZhbHVlKSB7XG5cdFx0aWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSBmYWxzZSkge1xuXHRcdFx0dGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKTtcblx0XHR9XG5cdH1cblxuXHRnZXQgY29sb3IoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdjb2xvcicpIHx8ICcnO1xuXHR9XG5cblx0c2V0IGNvbG9yKHZhbHVlKSB7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgdmFsdWUpO1xuXHR9XG5cblx0c2V0IHRpcHModmFsdWUpIHtcblx0XHR0aGlzLnNldEF0dHJpYnV0ZSgndGlwcycsIHZhbHVlKTtcblx0fVxuXG5cdGdldCB0aXBzKCkge1xuXHRcdGNvbnN0IHRpcHMgPSB0aGlzLmdldEF0dHJpYnV0ZSgndGlwcycpO1xuXHRcdGlmICh0aXBzKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ3RpcHMnKS5zcGxpdCgnLCcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gWycnLCAnJywgJycsICcnLCAnJ107XG5cdFx0fVxuXHR9XG5cblx0Z2V0IGRlZmF1bHR2YWx1ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RlZmF1bHR2YWx1ZScpIHx8IDA7XG5cdH1cblxuXHRzZXQgZGVmYXVsdHZhbHVlKHZhbHVlKSB7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGUoJ2RlZmF1bHR2YWx1ZScsIHZhbHVlKTtcblx0fVxuXG5cdGdldCBpY29uKCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnaWNvbicpO1xuXHR9XG5cblx0c2V0IGljb24odmFsdWUpIHtcblx0XHR0aGlzLnNldEF0dHJpYnV0ZSgnaWNvbicsIHZhbHVlKTtcblx0fVxuXHRcblx0Zm9jdXMoKSB7XG5cdFx0dGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpLmZvY3VzKCk7XG5cdH1cblxuXHRhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG5cdFx0aWYgKG5hbWUgPT0gJ2NvbG9yJyAmJiB0aGlzLnNoYWRvd1Jvb3QpIHtcblx0XHRcdHRoaXMuc3R5bGUuc2V0UHJvcGVydHkoJy0tdGhlbWVDb2xvcicsIG5ld1ZhbHVlKTtcblx0XHR9XG5cdFx0aWYgKG5hbWUgPT0gJ3NpemUnICYmIHRoaXMuc2hhZG93Um9vdCkge1xuXHRcdFx0dGhpcy5zdHlsZS5mb250U2l6ZSA9IG5ld1ZhbHVlICsgJ3B4Jztcblx0XHR9XG5cdH1cblxuXHRjb25uZWN0ZWRDYWxsYmFjaygpIHtcblx0XHR0aGlzLnJhZGlvRWxzID0gW1xuXHRcdFx0Li4udGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpLFxuXHRcdF0ucmV2ZXJzZSgpO1xuXHRcdGNvbnN0IHRvb2x0aXBFbHMgPSBbLi4udGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3JBbGwoJ2F3Yy10b29sdGlwJyldLnJldmVyc2UoKTtcblx0XHR0b29sdGlwRWxzLmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xuXHRcdFx0ZWwudGlwcyA9IHRoaXMudGlwc1tpbmRleF07XG5cdFx0fSk7XG5cdFx0Y29uc3QgaWNvbkVscyA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yQWxsKCdhd2MtaWNvbicpO1xuXHRcdGljb25FbHMuZm9yRWFjaChpY29uID0+IHtcblx0XHRcdGlmICh0aGlzLmljb24pIHtcblx0XHRcdFx0aWNvbi5uYW1lID0gdGhpcy5pY29uO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWNvbi5wYXRoID0gXCJNOTA4LjEgMzUzLjFsLTI1My45LTM2LjlMNTQwLjcgODYuMWMtMy4xLTYuMy04LjItMTEuNC0xNC41LTE0LjUtMTUuOC03LjgtMzUtMS4zLTQyLjkgMTQuNUwzNjkuOCAzMTYuMmwtMjUzLjkgMzYuOWMtNyAxLTEzLjQgNC4zLTE4LjMgOS4zLTEyLjMgMTIuNy0xMi4xIDMyLjkgMC42IDQ1LjNsMTgzLjcgMTc5LjEtNDMuNCAyNTIuOWMtMS4yIDYuOS0wLjEgMTQuMSAzLjIgMjAuMyA4LjIgMTUuNiAyNy42IDIxLjcgNDMuMiAxMy40TDUxMiA3NTRsMjI3LjEgMTE5LjRjNi4yIDMuMyAxMy40IDQuNCAyMC4zIDMuMiAxNy40LTMgMjkuMS0xOS41IDI2LjEtMzYuOWwtNDMuNC0yNTIuOSAxODMuNy0xNzkuMWM1LTQuOSA4LjMtMTEuMyA5LjMtMTguMyAyLjctMTcuNS05LjUtMzMuNy0yNy0zNi4zelwiO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGlmICh0aGlzLmRlZmF1bHR2YWx1ZSkge1xuXHRcdFx0dGhpcy5zaGFkb3dSb290LnZhbHVlID0gdGhpcy5kZWZhdWx0dmFsdWU7XG5cdFx0XHR0aGlzLnJhZGlvRWxzW051bWJlcih0aGlzLmRlZmF1bHR2YWx1ZSkgLSAxXS5jaGVja2VkID0gdHJ1ZTtcblx0XHR9XG5cdFx0dGhpcy5yYWRpb0Vscy5mb3JFYWNoKChlbCkgPT4ge1xuXHRcdFx0ZWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2KSA9PiB7XG5cdFx0XHRcdHRoaXMudmFsdWUgPSBlbC52YWx1ZTtcblx0XHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KFxuXHRcdFx0XHRcdG5ldyBDdXN0b21FdmVudCgnY2hhbmdlJywge1xuXHRcdFx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0XHRcdHZhbHVlOiB0aGlzLnZhbHVlLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpO1xuXHRcdFx0fSk7XG5cdFx0fSlcblx0fVxuXG5cdF9yZW5kZXIoKSB7XG5cdFx0Y29uc3Qgc2hhZG93Um9vdCA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuXHRcdHNoYWRvd1Jvb3QuaW5uZXJIVE1MID0gaHRtbDtcblx0fVxufVxuXG5pZiAoIWN1c3RvbUVsZW1lbnRzLmdldCgnYXdjLXJhdGUnKSkge1xuXHRjdXN0b21FbGVtZW50cy5kZWZpbmUoJ2F3Yy1yYXRlJywgQXdjUmF0ZSk7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0ICcuLi9hd2MtdG9vbHRpcC9hd2MtdG9vbHRpcC5qcydcbmltcG9ydCBodG1sIGZyb20gJy4vYXdjLXNsaWRlci5odG1sJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXdjU2xpZGVyIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuXHRzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcblx0XHRyZXR1cm4gWydtaW4nLCAnbWF4JywgJ3N0ZXAnLCAnZGlzYWJsZWQnLCAnc2hvd3RpcHMnLCAnc3VmZml4J107XG5cdH1cblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuX3JlbmRlcigpO1xuXHR9XG5cblx0Z2V0IHZhbHVlKCkge1xuXHRcdHJldHVybiBOdW1iZXIodGhpcy5zbGlkZXJFbC52YWx1ZSk7XG5cdH1cblxuXHRzZXQgdmFsdWUodmFsdWUpIHtcblx0XHR0aGlzLnNsaWRlckVsLnZhbHVlID0gdmFsdWU7XG5cdFx0dGhpcy5zbGlkZXJUb29sdGlwRWwuc3R5bGUuc2V0UHJvcGVydHkoXG5cdFx0XHQnLS1wZXJjZW50Jyxcblx0XHRcdCh0aGlzLnZhbHVlIC0gdGhpcy5taW4pIC8gKHRoaXMubWF4IC0gdGhpcy5taW4pXG5cdFx0KTtcblx0XHRpZiAodGhpcy5zaG93dGlwcyAmJiAhdGhpcy5kaXNhYmxlZCkge1xuXHRcdFx0dGhpcy5zbGlkZXJUb29sdGlwRWwudGlwcyA9IHRoaXMudmFsdWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2xpZGVyVG9vbHRpcEVsLnRpcHMgPSAnJztcblx0XHR9XG5cdH1cblxuXHRnZXQgc3VmZml4KCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnc3VmZml4JykgfHwgJyc7XG5cdH1cblxuXHRzZXQgc3VmZml4KHZhbHVlKSB7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGUoJ3N1ZmZpeCcsIHZhbHVlKTtcblx0fVxuXG5cdGdldCBwcmVmaXgoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdwcmVmaXgnKSB8fCAnJztcblx0fVxuXG5cdHNldCBwcmVmaXgodmFsdWUpIHtcblx0XHR0aGlzLnNldEF0dHJpYnV0ZSgncHJlZml4JywgdmFsdWUpO1xuXHR9XG5cblx0Z2V0IG1pbigpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ21pbicpIHx8IDA7XG5cdH1cblxuXHRzZXQgbWluKHZhbHVlKSB7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGUoJ21pbicsIHZhbHVlKTtcblx0fVxuXG5cdGdldCBtYXgoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdtYXgnKSB8fCAxMDA7XG5cdH1cblxuXHRzZXQgbWF4KHZhbHVlKSB7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGUoJ21heCcsIHZhbHVlKTtcblx0fVxuXG5cdGdldCBkaXNhYmxlZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJykgIT09IG51bGw7XG5cdH1cblxuXHRzZXQgZGlzYWJsZWQodmFsdWUpIHtcblx0XHRpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IGZhbHNlKSB7XG5cdFx0XHR0aGlzLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpO1xuXHRcdH1cblx0fVxuXG5cdGdldCBzaG93dGlwcygpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ3Nob3d0aXBzJykgIT09IG51bGw7XG5cdH1cblxuXHRzZXQgc2hvd3RpcHModmFsdWUpIHtcblx0XHRpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IGZhbHNlKSB7XG5cdFx0XHR0aGlzLnJlbW92ZUF0dHJpYnV0ZSgnc2hvd3RpcHMnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zZXRBdHRyaWJ1dGUoJ3Nob3d0aXBzJywgJycpO1xuXHRcdH1cblx0fVxuXG5cdGdldCBzdGVwKCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnc3RlcCcpIHx8IDE7XG5cdH1cblxuXHRzZXQgc3RlcCh2YWx1ZSkge1xuXHRcdHRoaXMuc2V0QXR0cmlidXRlKCdzdGVwJywgdmFsdWUpO1xuXHR9XG5cblx0Z2V0IGRlZmF1bHR2YWx1ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RlZmF1bHR2YWx1ZScpIHx8IDA7XG5cdH1cblxuXHRzZXQgZGVmYXVsdHZhbHVlKHZhbHVlKSB7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGUoJ2RlZmF1bHR2YWx1ZScsIHZhbHVlKTtcblx0fVxuXG5cdGdldCB2ZXJ0aWNhbCgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ3ZlcnRpY2FsJykgIT09IG51bGw7XG5cdH1cblxuXHRzZXQgdmVydGljYWwodmFsdWUpIHtcblx0XHR0aGlzLnNldEF0dHJpYnV0ZSgndmVydGljYWwnLCB2YWx1ZSk7XG5cdH1cblxuXHRmb2N1cygpIHtcblx0XHR0aGlzLnNsaWRlckVsLmZvY3VzKCk7XG5cdH1cblxuXHRhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG5cdFx0aWYgKHRoaXMuc2xpZGVyRWwgJiYgb2xkVmFsdWUgIT09IG5ld1ZhbHVlICYmICF0aGlzLl9vbmlucHV0KSB7XG5cdFx0XHRpZiAobmFtZSA9PSAnZGlzYWJsZWQnKSB7XG5cdFx0XHRcdGlmIChuZXdWYWx1ZSAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdHRoaXMuc2xpZGVyRWwuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuc2xpZGVyRWwucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnNsaWRlckVsW25hbWVdID0gbmV3VmFsdWU7XG5cdFx0XHRcdHRoaXNbbmFtZV0gPSBuZXdWYWx1ZTtcblx0XHRcdFx0dGhpcy5zbGlkZXJUb29sdGlwRWwuc3R5bGUuc2V0UHJvcGVydHkoXG5cdFx0XHRcdFx0Jy0tcGVyY2VudCcsXG5cdFx0XHRcdFx0KHRoaXMudmFsdWUgLSB0aGlzLm1pbikgLyAodGhpcy5tYXggLSB0aGlzLm1pbilcblx0XHRcdFx0KTtcblx0XHRcdFx0aWYgKG5hbWUgPT09ICdzdWZmaXgnKSB7XG5cdFx0XHRcdFx0dGhpcy5zbGlkZXJUb29sdGlwRWwuc3VmZml4ID0gbmV3VmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRjb25uZWN0ZWRDYWxsYmFjaygpIHtcblx0XHR0aGlzLnNsaWRlckVsID0gdGhpcy5zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKCdzbGlkZXInKTtcblx0XHR0aGlzLnNsaWRlckVsLnZhbHVlID0gdGhpcy5kZWZhdWx0dmFsdWU7XG5cdFx0dGhpcy5zbGlkZXJFbC5taW4gPSB0aGlzLm1pbjtcblx0XHR0aGlzLnNsaWRlckVsLm1heCA9IHRoaXMubWF4O1xuXHRcdHRoaXMuc2xpZGVyRWwuc3RlcCA9IHRoaXMuc3RlcDtcblx0XHRpZiAodGhpcy5kaXNhYmxlZCkge1xuXHRcdFx0dGhpcy5zbGlkZXJFbC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpO1xuXHRcdH1cblx0XHR0aGlzLnNsaWRlclRvb2x0aXBFbCA9IHRoaXMuc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZCgnc2xpZGVyLXRvb2x0aXAnKTtcblx0XHR0aGlzLnNsaWRlclRvb2x0aXBFbC5kaXIgPSB0aGlzLnZlcnRpY2FsID8gJ3JpZ2h0JyA6ICd0b3AnO1xuXHRcdHRoaXMuc2xpZGVyVG9vbHRpcEVsLnN0eWxlID0gYC0tcGVyY2VudDokeyh0aGlzLmRlZmF1bHR2YWx1ZSAtIHRoaXMubWluKSAvICh0aGlzLm1heCAtIHRoaXMubWluKX1gO1xuXHRcdHRoaXMuc2xpZGVyVG9vbHRpcEVsLnRpcHMgPSB0aGlzLnNob3d0aXBzICYmICF0aGlzLmRpc2FibGVkID8gdGhpcy5kZWZhdWx0dmFsdWUgOiAnJztcblx0XHR0aGlzLnNsaWRlclRvb2x0aXBFbC5zdWZmaXggPSB0aGlzLnN1ZmZpeDtcblx0XHR0aGlzLnNsaWRlclRvb2x0aXBFbC5wcmVmaXggPSB0aGlzLnByZWZpeDtcblxuXHRcdGlmICh0aGlzLnZlcnRpY2FsKSB7XG5cdFx0XHR0aGlzLnJlc2l6ZU9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG5cdFx0XHRcdGZvciAobGV0IGVudHJ5IG9mIGVudHJpZXMpIHtcblx0XHRcdFx0XHRjb25zdCB7IGhlaWdodCB9ID0gZW50cnkuY29udGVudFJlY3Q7XG5cdFx0XHRcdFx0dGhpcy5zbGlkZXJUb29sdGlwRWwuc3R5bGUuc2V0UHJvcGVydHkoJy0taCcsIGhlaWdodCArICdweCcpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdHRoaXMucmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzKTtcblx0XHR9XG5cdFx0dGhpcy5zbGlkZXJFbC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChldikgPT4ge1xuXHRcdFx0dGhpcy52YWx1ZSA9IHRoaXMuc2xpZGVyRWwudmFsdWU7XG5cdFx0XHR0aGlzLl9vbmlucHV0ID0gdHJ1ZTtcblx0XHRcdGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KFxuXHRcdFx0XHRuZXcgQ3VzdG9tRXZlbnQoJ2lucHV0Jywge1xuXHRcdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdFx0dmFsdWU6IHRoaXMuc2xpZGVyRWwudmFsdWUsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdFx0fSk7XG5cdFx0dGhpcy5zbGlkZXJFbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXYpID0+IHtcblx0XHRcdHRoaXMudmFsdWUgPSB0aGlzLnNsaWRlckVsLnZhbHVlO1xuXHRcdFx0dGhpcy5fb25pbnB1dCA9IGZhbHNlO1xuXHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KFxuXHRcdFx0XHRuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZScsIHtcblx0XHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRcdHZhbHVlOiB0aGlzLnNsaWRlckVsLnZhbHVlLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHRcdH0pO1xuXHRcdHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcdCd3aGVlbCcsXG5cdFx0XHQoZXYpID0+IHtcblx0XHRcdFx0aWYgKGdldENvbXB1dGVkU3R5bGUodGhpcy5zbGlkZXJFbCkuekluZGV4ID09IDIpIHtcblx0XHRcdFx0XHRldi5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdGlmIChcblx0XHRcdFx0XHRcdChldi5kZWx0YVkgPCAwICYmICF0aGlzLnZlcnRpY2FsKSB8fFxuXHRcdFx0XHRcdFx0KGV2LmRlbHRhWSA+IDAgJiYgdGhpcy52ZXJ0aWNhbClcblx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdHRoaXMudmFsdWUgLT0gdGhpcy5zdGVwICogNTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy52YWx1ZSArPSB0aGlzLnN0ZXAgKiA1O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoXG5cdFx0XHRcdFx0XHRuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZScsIHtcblx0XHRcdFx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU6IHRoaXMudmFsdWUsXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHR0cnVlXG5cdFx0KVxuXHR9XG5cblx0ZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG5cdFx0aWYgKHRoaXMudmVydGljYWwpIHtcblx0XHRcdHRoaXMucmVzaXplT2JzZXJ2ZXIudW5vYnNlcnZlKHRoaXMpO1xuXHRcdH1cblx0fVxuXG5cdF9yZW5kZXIoKSB7XG5cdFx0Y29uc3Qgc2hhZG93Um9vdCA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuXHRcdHNoYWRvd1Jvb3QuaW5uZXJIVE1MID0gaHRtbDtcblx0fVxufVxuXG5pZiAoIWN1c3RvbUVsZW1lbnRzLmdldCgnYXdjLXNsaWRlcicpKSB7XG5cdGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXdjLXNsaWRlcicsIEF3Y1NsaWRlcik7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGh0bWwgZnJvbSAnLi9hd2Mtc3dpdGNoLmh0bWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBd2NTd2l0Y2ggZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG5cdHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xuXHRcdHJldHVybiBbJ2Rpc2FibGVkJywgJ2NoZWNrZWQnXTtcblx0fVxuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5fcmVuZGVyKCk7XG5cdH1cblxuXHRnZXQgZGlzYWJsZWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdkaXNhYmxlZCcpICE9PSBudWxsO1xuXHR9XG5cblx0c2V0IGRpc2FibGVkKHZhbHVlKSB7XG5cdFx0aWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSBmYWxzZSkge1xuXHRcdFx0dGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKTtcblx0XHR9XG5cdH1cblxuXHRnZXQgY2hlY2tlZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnKSAhPT0gbnVsbDtcblx0fVxuXG5cdHNldCBjaGVja2VkKHZhbHVlKSB7XG5cdFx0aWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSBmYWxzZSkge1xuXHRcdFx0dGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnJyk7XG5cdFx0fVxuXHR9XG5cblx0Z2V0IG5hbWUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCduYW1lJyk7XG5cdH1cblxuXHRzZXQgbmFtZSh2YWx1ZSkge1xuXHRcdHRoaXMuc2V0QXR0cmlidXRlKFwibmFtZVwiLCB2YWx1ZSk7XG5cdH1cblxuXHRmb2N1cygpIHtcblx0XHR0aGlzLnN3aXRjaEVsLmZvY3VzKCk7XG5cdH1cblxuXHRhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG5cdFx0aWYgKG5hbWUgPT0gJ2Rpc2FibGVkJyAmJiB0aGlzLnN3aXRjaEVsKSB7XG5cdFx0XHRpZiAobmV3VmFsdWUgIT09IG51bGwpIHtcblx0XHRcdFx0dGhpcy5zd2l0Y2hFbC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnN3aXRjaEVsLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKG5hbWUgPT0gJ2NoZWNrZWQnICYmIHRoaXMuc3dpdGNoRWwpIHtcblx0XHRcdGlmIChuZXdWYWx1ZSAhPT0gbnVsbCkge1xuXHRcdFx0XHR0aGlzLnN3aXRjaEVsLmNoZWNrZWQgPSB0cnVlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5zd2l0Y2hFbC5jaGVja2VkID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Y29ubmVjdGVkQ2FsbGJhY2soKSB7XG5cdFx0dGhpcy5zd2l0Y2hFbCA9IHRoaXMuc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZCgnc3dpdGNoJyk7XG5cdFx0dGhpcy5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWQ7XG5cdFx0dGhpcy5jaGVja2VkID0gdGhpcy5jaGVja2VkO1xuXHRcdHRoaXMuc3dpdGNoRWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2KSA9PiB7XG5cdFx0XHR0aGlzLmNoZWNrZWQgPSB0aGlzLnN3aXRjaEVsLmNoZWNrZWQ7XG5cdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoXG5cdFx0XHRcdG5ldyBDdXN0b21FdmVudCgnY2hhbmdlJywge1xuXHRcdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdFx0Y2hlY2tlZDogdGhpcy5jaGVja2VkLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHRcdH0pO1xuXHRcdHRoaXMuc3dpdGNoRWwuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldikgPT4ge1xuXHRcdFx0c3dpdGNoIChldi5rZXkpIHtcblx0XHRcdFx0Y2FzZSAnRW50ZXInOlxuXHRcdFx0XHRcdHRoaXMuY2hlY2tlZCA9ICF0aGlzLmNoZWNrZWQ7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fSlcblx0XHR0aGlzLnN3aXRjaEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKGV2KSA9PiB7XG5cdFx0XHRldi5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdGlmICghdGhpcy5faXNmb2N1cykge1xuXHRcdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoXG5cdFx0XHRcdFx0bmV3IEN1c3RvbUV2ZW50KCdmb2N1cycsIHtcblx0XHRcdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdFx0XHR2YWx1ZTogdGhpcy52YWx1ZSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9KVxuXHRcdHRoaXMuc3dpdGNoRWwuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIChldikgPT4ge1xuXHRcdFx0ZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRpZiAoZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLnN3aXRjaEVsKS56SW5kZXggPT0gMikge1xuXHRcdFx0XHR0aGlzLl9pc2ZvY3VzID0gdHJ1ZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuX2lzZm9jdXMgPSBmYWxzZTtcblx0XHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KFxuXHRcdFx0XHRcdG5ldyBDdXN0b21FdmVudCgnYmx1cicsIHtcblx0XHRcdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdFx0XHR2YWx1ZTogdGhpcy52YWx1ZSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9KVxuXHR9XG5cblx0X3JlbmRlcigpIHtcblx0XHRjb25zdCBzaGFkb3dSb290ID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG5cdFx0c2hhZG93Um9vdC5pbm5lckhUTUwgPSBodG1sO1xuXHR9XG59XG5cbmlmICghY3VzdG9tRWxlbWVudHMuZ2V0KCdhd2Mtc3dpdGNoJykpIHtcblx0Y3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhd2Mtc3dpdGNoJywgQXdjU3dpdGNoKTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgaHRtbCBmcm9tICcuL2F3Yy10YWIuaHRtbCc7XG5cbmNsYXNzIEF3Y1RhYiBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcbiAgICAgICAgcmV0dXJuIFsnbGFiZWwnLCAndmFsdWUnLCAnZGlzYWJsZWQnLCAnaWNvbiddO1xuICAgIH1cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyKCk7XG4gICAgfVxuXG4gICAgZ2V0IGxhYmVsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2xhYmVsJykgfHwgJyc7XG4gICAgfVxuXG4gICAgc2V0IGxhYmVsKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdsYWJlbCcsIHZhbHVlKTtcbiAgICB9XG5cbiAgICBnZXQgdmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgndmFsdWUnKTtcbiAgICB9XG5cbiAgICBzZXQgdmFsdWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUpO1xuICAgIH1cblxuICAgIGdldCBkaXNhYmxlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgIH1cblxuICAgIHNldCBkaXNhYmxlZCh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBpY29uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2ljb24nKTtcbiAgICB9XG5cbiAgICBzZXQgaWNvbih2YWx1ZSkge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnaWNvbicsIHZhbHVlKTtcbiAgICB9XG5cbiAgICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG4gICAgICAgIGlmIChvbGRWYWx1ZSAhPT0gbmV3VmFsdWUgJiYgbmV3VmFsdWUgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgIGlmIChuYW1lID09PSAnbGFiZWwnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50Tm9kZS51cGRhdGFsYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudE5vZGUudXBkYXRhbGFiZWwodGhpcy52YWx1ZSwgbmV3VmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChuYW1lID09PSAnZGlzYWJsZWQnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50Tm9kZS51cGRhdGFkaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudE5vZGUudXBkYXRhZGlzYWJsZWQodGhpcy52YWx1ZSwgbmV3VmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9yZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcbiAgICAgICAgc2hhZG93Um9vdC5pbm5lckhUTUwgPSBodG1sO1xuICAgIH1cbn1cblxuaWYgKCFjdXN0b21FbGVtZW50cy5nZXQoJ2F3Yy10YWInKSkge1xuICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXdjLXRhYicsIEF3Y1RhYik7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0ICcuLi9hd2MtYnV0dG9uL2F3Yy1idXR0b24nO1xuaW1wb3J0ICcuL2F3Yy10YWInO1xuaW1wb3J0IGh0bWwgZnJvbSAnLi9hd2MtdGFicy5odG1sJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXdjVGFicyBleHRlbmRzIEhUTUxFbGVtZW50IHtcblx0c3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XG5cdFx0cmV0dXJuIFsnYWN0aXZla2V5J107XG5cdH1cblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuX3JlbmRlcigpO1xuXHR9XG5cblx0Z2V0IGFsaWduKCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnYWxpZ24nKSB8fCAnc3RhcnQnO1xuXHR9XG5cblx0c2V0IGFsaWduKHZhbHVlKSB7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGUoJ2FsaWduJywgdmFsdWUpO1xuXHRcdHRoaXMuX2luaXRUYWIoKTtcblx0fVxuXG5cdGdldCB0eXBlKCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgndHlwZScpIHx8ICd0ZXh0Jztcblx0fVxuXG5cdHNldCB0eXBlKHZhbHVlKSB7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCB2YWx1ZSk7XG5cdH1cblxuXHRnZXQgYWN0aXZla2V5KCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnYWN0aXZla2V5Jyk7XG5cdH1cblxuXHRzZXQgYWN0aXZla2V5KHZhbHVlKSB7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGUoJ2FjdGl2ZWtleScsIHZhbHVlKTtcblx0fVxuXG5cdGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpIHtcblx0XHRpZiAobmFtZSA9PSAnYWN0aXZla2V5JyAmJiB0aGlzLnRhYkVsKSB7XG5cdFx0XHRsZXQgYWN0aXZlID0gdGhpcy50YWJQb3NbbmV3VmFsdWVdO1xuXHRcdFx0aWYgKGFjdGl2ZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRoaXMuYWN0aXZla2V5ID0gdGhpcy5zbG90c0VsLmFzc2lnbmVkRWxlbWVudHMoKVswXS52YWx1ZTtcblx0XHRcdFx0YWN0aXZlID0gdGhpcy50YWJQb3NbdGhpcy5hY3RpdmVrZXldO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy50YWJsaW5lRWwuc3R5bGUgPSBgd2lkdGg6JHthY3RpdmUud2lkdGh9cHg7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoJHthY3RpdmUubGVmdH1weClgO1xuXHRcdFx0dGhpcy50YWJFbC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgkey1hY3RpdmUuaW5kZXggKiAxMDB9JSlgO1xuXHRcdFx0dGhpcy5maWx0ZXJFbC50ZXh0Q29udGVudCA9IGBcbiAgICAgICAgICAgIDo6c2xvdHRlZChhd2MtdGFiOm5vdChbdmFsdWU9XCIke3RoaXMuYWN0aXZla2V5fVwiXSkpe1xuICAgICAgICAgICAgICAgIGhlaWdodDowO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OnZpc2libGU7XG4gICAgICAgICAgICB9YDtcblx0XHRcdGlmIChvbGRWYWx1ZSAhPT0gbmV3VmFsdWUpIHtcblx0XHRcdFx0dGhpcy5uYXZFbC5wYXJlbnROb2RlLnNjcm9sbExlZnQgPVxuXHRcdFx0XHRcdGFjdGl2ZS5sZWZ0ICsgYWN0aXZlLndpZHRoIC8gMiAtIHRoaXMubmF2RWwucGFyZW50Tm9kZS5vZmZzZXRXaWR0aCAvIDI7XG5cdFx0XHRcdGNvbnN0IHByZSA9IHRoaXMubmF2RWwucXVlcnlTZWxlY3RvcihgLm5hdi1pdGVtLmFjdGl2ZWApO1xuXHRcdFx0XHRpZiAocHJlKSB7XG5cdFx0XHRcdFx0cHJlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IGN1ciA9IHRoaXMubmF2RWwucXVlcnlTZWxlY3RvcihgLm5hdi1pdGVtW2RhdGEta2V5PScke25ld1ZhbHVlfSddYCk7XG5cdFx0XHRcdGN1ci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblx0XHRcdFx0Y3VyLmZvY3VzKCk7XG5cdFx0XHRcdGlmICh0aGlzLl9pbml0ICYmIG9sZFZhbHVlICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KFxuXHRcdFx0XHRcdFx0bmV3IEN1c3RvbUV2ZW50KCdjaGFuZ2UnLCB7XG5cdFx0XHRcdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdFx0XHRcdGtleTogdGhpcy5hY3RpdmVrZXksXG5cdFx0XHRcdFx0XHRcdFx0aW5kZXg6IGFjdGl2ZS5pbmRleCxcblx0XHRcdFx0XHRcdFx0XHRsYWJlbDogYWN0aXZlLmxhYmVsLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Y29ubmVjdGVkQ2FsbGJhY2soKSB7XG5cdFx0dGhpcy50YWJQb3MgPSB7fTtcblx0XHR0aGlzLm5hdkVsID0gdGhpcy5zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKCduYXYnKTtcblx0XHR0aGlzLnRhYkVsID0gdGhpcy5zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKCd0YWItY29udGVudCcpO1xuXHRcdHRoaXMudGFibGluZUVsID0gdGhpcy5zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKCd0YWItbGluZScpO1xuXHRcdHRoaXMuc2xvdHNFbCA9IHRoaXMuc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZCgnc2xvdCcpO1xuXHRcdHRoaXMuZmlsdGVyRWwgPSB0aGlzLnNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoJ2ZpbHRlcicpO1xuXHRcdHRoaXMuc2xvdHNFbC5hZGRFdmVudExpc3RlbmVyKCdzbG90Y2hhbmdlJywgKCkgPT4ge1xuXHRcdFx0Y29uc3Qgc2xvdHMgPSB0aGlzLnNsb3RzRWwuYXNzaWduZWRFbGVtZW50cygpO1xuXHRcdFx0bGV0IGh0bWwgPSAnJztcblx0XHRcdHNsb3RzLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG5cdFx0XHRcdGlmIChpdGVtLnRhZ05hbWUgPT09ICdBV0MtVEFCJykge1xuXHRcdFx0XHRcdGlmIChpdGVtLnZhbHVlID09PSBudWxsKSB7XG5cdFx0XHRcdFx0XHRpdGVtLnZhbHVlID0gaW5kZXg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGh0bWwgKz0gYDxhd2MtYnV0dG9uIGNsYXNzPVwibmF2LWl0ZW0gJHtcblx0XHRcdFx0XHRcdGl0ZW0udmFsdWUgPT09IHRoaXMuYWN0aXZla2V5ID8gJ2FjdGl2ZScgOiAnJ1xuXHRcdFx0XHRcdH1cIiBpY29uPSR7aXRlbS5pY29ufSAke1xuXHRcdFx0XHRcdFx0aXRlbS5kaXNhYmxlZCAhPT0gbnVsbCA/ICdkaXNhYmxlZCcgOiAnJ1xuXHRcdFx0XHRcdH0gZGF0YS1rZXk9JHtpdGVtLnZhbHVlfT4ke2l0ZW0ubGFiZWx9PC9hd2MtYnV0dG9uPmBcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLm5hdkVsLmlubmVySFRNTCA9IGh0bWw7XG5cdFx0XHR0aGlzLl9pbml0VGFiKCk7XG5cdFx0XHRpZiAodGhpcy5hY3RpdmVrZXkgPT09IG51bGwpIHtcblx0XHRcdFx0dGhpcy5hY3RpdmVrZXkgPSBzbG90c1swXS52YWx1ZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuYWN0aXZla2V5ID0gdGhpcy5hY3RpdmVrZXk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl9pbml0ID0gdHJ1ZTtcblx0XHR9KVxuXHRcdHRoaXMubmF2RWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXYpID0+IHtcblx0XHRcdGNvbnN0IGl0ZW0gPSBldi50YXJnZXQuY2xvc2VzdCgnYXdjLWJ1dHRvbicpO1xuXHRcdFx0aWYgKGl0ZW0pIHtcblx0XHRcdFx0dGhpcy5hY3RpdmVrZXkgPSBpdGVtLmRhdGFzZXQua2V5O1xuXHRcdFx0fVxuXHRcdH0pXG5cdFx0dGhpcy5uYXZFbC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2KSA9PiB7XG5cdFx0XHRzd2l0Y2ggKGV2LmtleSkge1xuXHRcdFx0XHRjYXNlICdBcnJvd0xlZnQnOlxuXHRcdFx0XHRcdGV2LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0dGhpcy5fbW92ZWluKC0xKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnQXJyb3dSaWdodCc6IFxuXHRcdFx0XHRcdGV2LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0dGhpcy5fbW92ZWluKDEpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0X2luaXRUYWIoKSB7XG5cdFx0Y29uc3QgaXRlbXMgPSB0aGlzLm5hdkVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYtaXRlbScpO1xuXHRcdEFycmF5LmZyb20oaXRlbXMpLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG5cdFx0XHR0aGlzLnRhYlBvc1tpdGVtLmRhdGFzZXQua2V5XSA9IHtcblx0XHRcdFx0aW5kZXg6IGluZGV4LFxuXHRcdFx0XHR3aWR0aDogaXRlbS5vZmZzZXRXaWR0aCxcblx0XHRcdFx0bGVmdDogaXRlbS5vZmZzZXRMZWZ0LFxuXHRcdFx0XHRsYWJlbDogaXRlbS50ZXh0Q29udGVudCxcblx0XHRcdH07XG5cdFx0fSk7XG5cdFx0aWYgKHRoaXMuYWN0aXZla2V5KSB7XG5cdFx0XHR0aGlzLnRhYmxpbmVFbC5zdHlsZSA9IGB3aWR0aDoke1xuXHRcdFx0XHR0aGlzLnRhYlBvc1t0aGlzLmFjdGl2ZWtleV0ud2lkdGhcblx0XHRcdH1weDt0cmFuc2Zvcm06dHJhbnNsYXRlWCgke3RoaXMudGFiUG9zW3RoaXMuYWN0aXZla2V5XS5sZWZ0fXB4KWA7XG5cdFx0fVxuXHR9XG5cblx0X21vdmVpbihpbmRleCkge1xuXHRcdGNvbnN0IGN1ciA9IHRoaXMubmF2RWwucXVlcnlTZWxlY3RvcihgLm5hdi1pdGVtLmFjdGl2ZWApO1xuXHRcdGlmIChpbmRleCA+IDAgJiYgY3VyLm5leHRFbGVtZW50U2libGluZykge1xuXHRcdFx0dGhpcy5hY3RpdmVrZXkgPSBjdXIubmV4dEVsZW1lbnRTaWJsaW5nLmRhdGFzZXQua2V5O1xuXHRcdH1cblx0XHRpZiAoaW5kZXggPCAwICYmIGN1ci5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKSB7XG5cdFx0XHR0aGlzLmFjdGl2ZWtleSA9IGN1ci5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmRhdGFzZXQua2V5O1xuXHRcdH1cblx0fVxuXG5cdF9yZW5kZXIoKSB7XG5cdFx0Y29uc3Qgc2hhZG93Um9vdCA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuXHRcdHNoYWRvd1Jvb3QuaW5uZXJIVE1MID0gaHRtbDtcblx0fVxufVxuXG5pZiAoIWN1c3RvbUVsZW1lbnRzLmdldCgnYXdjLXRhYnMnKSkge1xuXHRjdXN0b21FbGVtZW50cy5kZWZpbmUoJ2F3Yy10YWJzJywgQXdjVGFicyk7XG59XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQXdjSW5wdXQgZnJvbSAnLi4vYXdjLWlucHV0L2F3Yy1pbnB1dCc7XG5cbmNsYXNzIEF3Y1RleHRhcmVhIGV4dGVuZHMgQXdjSW5wdXQge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcih7IG11bHRpOiB0cnVlIH0pXG5cdH1cbn1cblxuaWYgKCFjdXN0b21FbGVtZW50cy5nZXQoJ2F3Yy10ZXh0YXJlYScpKSB7XG5cdGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXdjLXRleHRhcmVhJywgQXdjVGV4dGFyZWEpXG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGh0bWwgZnJvbSAnLi9hd2MtdG9vbHRpcC5odG1sJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXdjVG9vbHRpcCBleHRlbmRzIEhUTUxFbGVtZW50IHtcblx0c3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XG5cdFx0cmV0dXJuIFsnY29sb3InXTtcblx0fVxuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5fcmVuZGVyKCk7XG5cdH1cblxuXHRnZXQgY29sb3IoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdjb2xvcicpIHx8ICcnO1xuXHR9XG5cbiAgICBzZXQgY29sb3IodmFsdWUpIHtcblx0XHR0aGlzLnNldEF0dHJpYnV0ZSgnY29sb3InLCB2YWx1ZSk7XG5cdH1cblxuXHRnZXQgZGlyKCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnZGlyJykgfHwgJ3RvcCc7XG5cdH1cblxuICAgIHNldCBkaXIodmFsdWUpIHtcblx0XHR0aGlzLnNldEF0dHJpYnV0ZSgnZGlyJywgdmFsdWUpO1xuXHR9XG5cblx0Z2V0IHRpcHMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCd0aXBzJyk7XG5cdH1cblxuICAgIHNldCB0aXBzKHZhbHVlKSB7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGUoJ3RpcHMnLCB2YWx1ZSk7XG5cdH1cblxuXHRnZXQgdHlwZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ3RpcHMnKTtcblx0fVxuXG4gICAgc2V0IHR5cGUodmFsdWUpIHtcblx0XHR0aGlzLnNldEF0dHJpYnV0ZSgndHlwZScsIHZhbHVlKTtcblx0fVxuXG5cdGdldCBzaG93KCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnc2hvdycpICE9PSBudWxsO1xuXHR9XG5cbiAgICBzZXQgc2hvdyh2YWx1ZSkge1xuXHRcdHRoaXMuc2V0QXR0cmlidXRlKCdzaG93JywgdmFsdWUpO1xuXHR9XG5cbiAgICBnZXQgc3VmZml4KCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnc3VmZml4JykgfHwgJyc7XG5cdH1cblxuXHRzZXQgc3VmZml4KHZhbHVlKSB7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGUoJ3N1ZmZpeCcsIHZhbHVlKTtcblx0fVxuXG4gICAgZ2V0IHByZWZpeCgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ3ByZWZpeCcpIHx8ICcnO1xuXHR9XG5cblx0c2V0IHByZWZpeCh2YWx1ZSkge1xuXHRcdHRoaXMuc2V0QXR0cmlidXRlKCdwcmVmaXgnLCB2YWx1ZSk7XG5cdH1cblxuICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpIHtcblx0XHRpZiAobmFtZSA9PSAnY29sb3InICYmIHRoaXMuc2hhZG93Um9vdCkge1xuXHRcdFx0dGhpcy5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1jb2xvcicsIG5ld1ZhbHVlKTtcblx0XHR9XG5cdH1cblxuXHRjb25uZWN0ZWRDYWxsYmFjaygpIHtcblx0XHRpZiAodGhpcy5kaXIgPT09ICdhdXRvJykge1xuXHRcdFx0Y29uc3QgeyBsZWZ0LCB0b3AsIHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRjb25zdCB3ID0gZG9jdW1lbnQuYm9keS5zY3JvbGxXaWR0aDtcblx0XHRcdGNvbnN0IGggPSBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodDtcblx0XHRcdGNvbnN0IFRJUF9TSVpFID0gNTA7XG5cdFx0XHRpZiAodG9wIDwgVElQX1NJWkUpIHtcblx0XHRcdFx0dGhpcy5kaXIgPSAnYm90dG9tJztcblx0XHRcdH1cblx0XHRcdGlmIChoIC0gdG9wIC0gaGVpZ2h0IDwgVElQX1NJWkUpIHtcblx0XHRcdFx0dGhpcy5kaXIgPSAndG9wJztcblx0XHRcdH1cblx0XHRcdGlmIChsZWZ0IDwgVElQX1NJWkUpIHtcblx0XHRcdFx0dGhpcy5kaXIgPSAncmlnaHQnO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHcgLSBsZWZ0IC0gd2lkdGggPCBUSVBfU0laRSkge1xuXHRcdFx0XHR0aGlzLmRpciA9ICdsZWZ0Jztcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuICAgIF9yZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcblx0XHRzaGFkb3dSb290LmlubmVySFRNTCA9IGh0bWw7XG4gICAgfVxufVxuXG5pZiAoIWN1c3RvbUVsZW1lbnRzLmdldCgnYXdjLXRvb2x0aXAnKSkge1xuXHRjdXN0b21FbGVtZW50cy5kZWZpbmUoJ2F3Yy10b29sdGlwJywgQXdjVG9vbHRpcCk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN0eWxlPlxcbiAgICA6aG9zdCB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAgICAgIHBhZGRpbmc6IC4yNWVtIC42MjVlbTtcXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuODtcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXJDb2xvciwgcmdiYSgwLCAwLCAwLCAuMikpO1xcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICAgICAgY29sb3I6IHZhcigtLWZvbnRDb2xvciwgIzMzMzMzMyk7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXJSYWRpdXMsIC4yNWVtKTtcXG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjNzLCBib3gtc2hhZG93IC4zcywgYm9yZGVyLWNvbG9yIC4zcywgY29sb3IgLjNzO1xcbiAgICB9XFxuICAgIDpob3N0KFtkaXNhYmxlZF0pLFxcbiAgICA6aG9zdChbbG9hZGluZ10pIHtcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICAgICAgb3BhY2l0eTogLjY7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW2Jsb2NrXSkge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbZGlzYWJsZWRdOm5vdChbdHlwZV0pKSB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC4xKTtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbZGlzYWJsZWRdKSAuYnRuLFxcbiAgICA6aG9zdChbbG9hZGluZ10pIC5idG4ge1xcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoOm5vdChbdHlwZT1cXFwicHJpbWFyeVxcXCJdKTpub3QoW2Rpc2FibGVkXSk6aG92ZXIpLFxcbiAgICA6aG9zdCg6bm90KFt0eXBlPVxcXCJwcmltYXJ5XFxcIl0pOmZvY3VzLXdpdGhpbiksXFxuICAgIDpob3N0KFt0eXBlPVxcXCJmbGF0XFxcIl1bZm9jdXNdKSB7XFxuICAgICAgICBjb2xvcjogdmFyKC0tdGhlbWVDb2xvciwgIzQyYjk4Myk7XFxuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXRoZW1lQ29sb3IsICM0MmI5ODMpO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KDpub3QoW3R5cGU9XFxcInByaW1hcnlcXFwiXSkpIC5idG46OmFmdGVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHZhcigtLXRoZW1lQ29sb3IsICM0MmI5ODMpIDEwJSwgdHJhbnNwYXJlbnQgMTAuMDElKTtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbdHlwZT1cXFwicHJpbWFyeVxcXCJdKSB7XFxuICAgICAgICBjb2xvcjogI2ZmZjtcXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXRoZW1lQmFja2dyb3VuZCwgdmFyKC0tdGhlbWVDb2xvciwgIzQyYjk4MykpO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFt0eXBlPVxcXCJkYXNoZWRcXFwiXSkge1xcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBkYXNoZWRcXG4gICAgfVxcblxcbiAgICA6aG9zdChbdHlwZT1cXFwidGV4dFxcXCJdKSxcXG4gICAgOmhvc3QoW3R5cGU9XFxcInByaW1hcnlcXFwiXSkge1xcbiAgICAgICAgYm9yZGVyOiAwO1xcbiAgICAgICAgcGFkZGluZzogY2FsYyguMjVlbSArIDFweCkgY2FsYyguNjI1ZW0gKyAxcHgpO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFt0eXBlPVxcXCJ0ZXh0XFxcIl0pIC5idG46OmJlZm9yZSB7XFxuICAgICAgICBjb250ZW50OiAnJztcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXRoZW1lQ29sb3IsICM0MmI5ODMpO1xcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgcmlnaHQ6IDA7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICBib3R0b206IDA7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgdHJhbnNpdGlvbjogLjNzO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFt0eXBlPVxcXCJ0ZXh0XFxcIl06bm90KFtkaXNhYmxlZF0pOmhvdmVyKSAuYnRuOjpiZWZvcmUge1xcbiAgICAgICAgb3BhY2l0eTogLjFcXG4gICAgfVxcblxcbiAgICA6aG9zdCg6bm90KFtkaXNhYmxlZF0pOmhvdmVyKSB7XFxuICAgICAgICB6LWluZGV4OiAxXFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW3R5cGU9XFxcInRleHRcXFwiXTpmb2N1cy13aXRoaW4pIC5idG46YmVmb3JlLFxcbiAgICA6aG9zdChbdHlwZT1cXFwidGV4dFxcXCJdW2ZvY3VzXSkgLmJ0bjpiZWZvcmUge1xcbiAgICAgICAgb3BhY2l0eTogLjI7XFxuICAgIH1cXG5cXG4gICAgLmJ0biB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICAgICAgb3V0bGluZTogMDtcXG4gICAgICAgIGJvcmRlcjogMDtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgIGN1cnNvcjogdW5zZXQ7XFxuICAgIH1cXG5cXG4gICAgYXdjLWxvYWRpbmcge1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjM1ZW07XFxuICAgIH1cXG5cXG4gICAgOjotbW96LWZvY3VzLWlubmVyIHtcXG4gICAgICAgIGJvcmRlcjogMDtcXG4gICAgfVxcblxcbiAgICAuYnRuOm5vdChbZGlzYWJsZWRdKTphY3RpdmU6OmFmdGVyIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDApO1xcbiAgICAgICAgb3BhY2l0eTogLjM7XFxuICAgICAgICB0cmFuc2l0aW9uOiAwcztcXG4gICAgfVxcblxcbiAgICBhd2MtaWNvbiB7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuMzVlbTtcXG4gICAgICAgIHRyYW5zaXRpb246IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoOmVtcHR5KSBhd2MtaWNvbiB7XFxuICAgICAgICBtYXJnaW46IGF1dG87XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoOmVtcHR5KSB7XFxuICAgICAgICBwYWRkaW5nOiAuNjVlbTtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbdHlwZT1cXFwidGV4dFxcXCJdOmVtcHR5KSxcXG4gICAgOmhvc3QoW3R5cGU9XFxcInByaW1hcnlcXFwiXTplbXB0eSkge1xcbiAgICAgICAgcGFkZGluZzogY2FsYyguNjVlbSArIDFweCk7XFxuICAgIH1cXG5cXG4gICAgOjpzbG90dGVkKGF3Yy1pY29uKSB7XFxuICAgICAgICB0cmFuc2l0aW9uOiBub25lO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFtocmVmXSkge1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuPC9zdHlsZT5cXG48YnV0dG9uIGNsYXNzPVxcXCJidG5cXFwiIGlkPVxcXCJidG5cXFwiPjwvYnV0dG9uPlxcbjxzbG90Pjwvc2xvdD5cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN0eWxlPlxcbiAgICA6aG9zdCB7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgICBjb2xvcjogdmFyKC0tZm9udENvbG9yLCAjMzMzKTtcXG4gICAgICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW2Rpc2FibGVkXSkge1xcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgICAgICBvcGFjaXR5OiAuNjtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbZGlzYWJsZWRdKSBsYWJlbCB7XFxuICAgICAgICBwb2ludGVyLWV2ZW50czogYWxsO1xcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gICAgfVxcblxcbiAgICAjY2hlY2tib3gge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcXG4gICAgfVxcblxcbiAgICA6aG9zdCg6Zm9jdXMtd2l0aGluKSAuY2hla2VkLFxcbiAgICA6aG9zdCg6bm90KFtkaXNhYmxlZF0pKSBsYWJlbDpob3ZlciAuY2hla2VkIHtcXG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdGhlbWVDb2xvciwgIzQyYjk4Myk7XFxuICAgICAgICB6LWluZGV4OiAxO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KDpmb2N1cy13aXRoaW4pICNjaGVja2JveCxcXG4gICAgOmhvc3QoOmFjdGl2ZSkgI2NoZWNrYm94IHtcXG4gICAgICAgIHotaW5kZXg6IDJcXG4gICAgfVxcblxcbiAgICA6aG9zdChbZGlzYWJsZWRdKSAuY2hla2VkIHtcXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjEpO1xcbiAgICB9XFxuXFxuICAgIGxhYmVsIHtcXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAuY2hla2VkIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IC41ZW07XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICB3aWR0aDogMWVtO1xcbiAgICAgICAgaGVpZ2h0OiAxZW07XFxuICAgICAgICBib3JkZXI6IDAuMDg3NWVtIHNvbGlkIHZhcigtLWJvcmRlckNvbG9yLCByZ2JhKDAsIDAsIDAsIC4yKSk7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjE1ZW07XFxuICAgICAgICB0ZXh0LWFsaWduOiBpbml0aWFsO1xcbiAgICAgICAgdHJhbnNpdGlvbjogLjNzO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KDplbXB0eSkgLmNoZWtlZCB7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuICAgIH1cXG5cXG4gICAgLmNoZWtlZDo6YmVmb3JlIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgICAgd2lkdGg6IDc0JTtcXG4gICAgICAgIGhlaWdodDogMC4xNWVtO1xcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjE1ZW07XFxuICAgICAgICB0cmFuc2l0aW9uOiAuMnMgY3ViaWMtYmV6aWVyKC4xMiwgLjQsIC4yOSwgMS40NikgLjFzO1xcbiAgICB9XFxuXFxuICAgIC5jaGVrZWQ6OmFmdGVyIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZUNvbG9yLCAjNDJiOTgzKTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgIG9wYWNpdHk6IC4yO1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgICAgIHotaW5kZXg6IC0xO1xcbiAgICAgICAgdHJhbnNpdGlvbjogLjJzIGN1YmljLWJlemllciguMTIsIC40LCAuMjksIDEuNDYpIC4xcztcXG4gICAgfVxcbiAgICAuaWNvbiB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgICAgICB0cmFuc2l0aW9uOiAuMnMgY3ViaWMtYmV6aWVyKC4xMiwgLjQsIC4yOSwgMS40NikgLjFzO1xcbiAgICB9XFxuXFxuICAgICNjaGVja2JveDpmb2N1cy12aXNpYmxlK2xhYmVsIC5jaGVrZWQ6OmFmdGVyIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMi41KTtcXG4gICAgfVxcblxcbiAgICAjY2hlY2tib3g6Y2hlY2tlZDpub3QoOmluZGV0ZXJtaW5hdGUpK2xhYmVsIC5jaGVrZWQgLmljb24ge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcbiAgICB9XFxuXFxuICAgICNjaGVja2JveDpjaGVja2VkK2xhYmVsIC5jaGVrZWQsXFxuICAgICNjaGVja2JveDppbmRldGVybWluYXRlK2xhYmVsIC5jaGVrZWQge1xcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoZW1lQ29sb3IsICM0MmI5ODMpO1xcbiAgICB9XFxuXFxuICAgICNjaGVja2JveDppbmRldGVybWluYXRlK2xhYmVsIC5jaGVrZWQ6OmJlZm9yZSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB9XFxuPC9zdHlsZT5cXG48aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGlkPVxcXCJjaGVja2JveFxcXCI+XFxuPGxhYmVsIGZvcj1cXFwiY2hlY2tib3hcXFwiPlxcbiAgICA8c3BhbiBjbGFzcz1cXFwiY2hla2VkXFxcIj48c3ZnIGNsYXNzPVxcXCJpY29uXFxcIiBzdHlsZT1cXFwiZmlsbDogI2ZmZjtvdmVyZmxvdzogaGlkZGVuO1xcXCIgdmlld0JveD1cXFwiMCAwIDEwMjQgMTAyNFxcXCJcXG4gICAgICAgICAgICB2ZXJzaW9uPVxcXCIxLjFcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgcC1pZD1cXFwiMTQwOFxcXCI+XFxuICAgICAgICAgICAgPHBhdGhcXG4gICAgICAgICAgICAgICAgZD1cXFwiTTcwMC43MjMyIDMzMS4wMDhsNzMuOTg0IDcwLjc1ODQtMzI5LjU3NDQgMzQ0Ljc4MDgtMTkyLjY2NTYtMTkwLjEwNTYgNzEuOTM2LTcyLjkwODhMNDQzLjAzMzYgNjAwLjU3NnpcXFwiPlxcbiAgICAgICAgICAgIDwvcGF0aD5cXG4gICAgICAgIDwvc3ZnPjwvc3Bhbj5cXG4gICAgPHNsb3Q+PC9zbG90PlxcbjwvbGFiZWw+XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdHlsZT5cXG4gICAgOmhvc3Qge1xcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICByaWdodDogMDtcXG4gICAgICAgIGJvdHRvbTogMDtcXG4gICAgICAgIHotaW5kZXg6IC0xO1xcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tc2hhZG93QmFja2dyb3VuZCwgcmdiYSgwLCAwLCAwLCAuMykpO1xcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIHRyYW5zaXRpb246IC4zcztcXG4gICAgfVxcblxcbiAgICA6aG9zdChbb3Blbl0pIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB6LWluZGV4OiA1MDtcXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgIH1cXG5cXG4gICAgLmRpYWxvZyB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgbWluLXdpZHRoOiAzNjBweDtcXG4gICAgICAgIG1hcmdpbjogYXV0bztcXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAxMXB4IDE1cHggLTdweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAyNHB4IDM4cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA5cHggNDZweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwdncgLSAyMHB4KTtcXG4gICAgICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAyMHB4KTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xcbiAgICAgICAgdHJhbnNpdGlvbjogLjNzIGN1YmljLWJlemllciguNjQ1LCAuMDQ1LCAuMzU1LCAxKTtcXG4gICAgfVxcblxcbiAgICAuZGlhbG9nLWNvbnRlbnQge1xcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIHBhZGRpbmc6IDAgMjBweDtcXG4gICAgICAgIGZsZXg6IDE7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFtvcGVuXSkgLmRpYWxvZyB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgfVxcblxcbiAgICAuZGlhbG9nLXRpdGxlIHtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbiAgICAgICAgcGFkZGluZzogMTVweCAzMHB4IDAgMDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgICBjb2xvcjogIzRjNTE2MTtcXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgICB9XFxuXFxuICAgIC5kaWFsb2ctYm9keSB7XFxuICAgICAgICBmbGV4OiAxO1xcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgICAgICBtaW4taGVpZ2h0OiA1MHB4O1xcbiAgICAgICAgcGFkZGluZzogMTBweCAwO1xcbiAgICB9XFxuXFxuICAgIC5kaWFsb2ctZm9vdGVyIHtcXG4gICAgICAgIHBhZGRpbmc6IDNweCAwIDIwcHggMDtcXG4gICAgICAgIG1hcmdpbi10b3A6IC0zcHg7XFxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgfVxcblxcbiAgICAuYnRuLWNsb3NlIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHJpZ2h0OiAxMHB4O1xcbiAgICAgICAgdG9wOiAxMHB4O1xcbiAgICAgICAgYm9yZGVyOiAwO1xcbiAgICB9XFxuXFxuICAgIC5kaWFsb2ctZm9vdGVyIGF3Yy1idXR0b24ge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgIH1cXG5cXG4gICAgLmRpYWxvZy1pY29uIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICBtYXJnaW46IDE1cHggLTEwcHggMCAyMHB4O1xcbiAgICAgICAgd2lkdGg6IDMwcHg7XFxuICAgICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIH1cXG5cXG4gICAgLmRpYWxvZy1pY29uW25hbWVdIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIH1cXG5cXG4gICAgI2J0bi1jYW5jZWwge1xcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KDpub3QoW3R5cGVdKSkgLmRpYWxvZy1pY29uIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW3R5cGU9XFxcImNvbmZpcm1cXFwiXSkgI2J0bi1jYW5jZWwge1xcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgfVxcblxcbiAgICA6aG9zdCg6ZW1wdHkpIC5kaWFsb2ctYm9keSB7XFxuICAgICAgICBtaW4taGVpZ2h0OiAwO1xcbiAgICB9XFxuPC9zdHlsZT5cXG48ZGl2IGNsYXNzPVxcXCJkaWFsb2dcXFwiPlxcbiAgICA8YXdjLWljb24gaWQ9XFxcImRpYWxvZy1pY29uXFxcIiBjbGFzcz1cXFwiZGlhbG9nLWljb25cXFwiPjwvYXdjLWljb24+XFxuICAgIDxkaXYgY2xhc3M9XFxcImRpYWxvZy1jb250ZW50XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImRpYWxvZy10aXRsZVxcXCIgaWQ9XFxcInRpdGxlXFxcIj48L2Rpdj5cXG4gICAgICAgIDxhd2MtYnV0dG9uIGNsYXNzPVxcXCJidG4tY2xvc2VcXFwiIGlkPVxcXCJidG4tY2xvc2VcXFwiIGljb249XFxcImNsb3NlXFxcIj48L2F3Yy1idXR0b24+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkaWFsb2ctYm9keVxcXCI+XFxuICAgICAgICAgICAgPHNsb3Q+PC9zbG90PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkaWFsb2ctZm9vdGVyXFxcIj5cXG4gICAgICAgICAgICA8YXdjLWJ1dHRvbiBpZD1cXFwiYnRuLWNhbmNlbFxcXCI+PC9hd2MtYnV0dG9uPlxcbiAgICAgICAgICAgIDxhd2MtYnV0dG9uIGlkPVxcXCJidG4tc3VibWl0XFxcIiB0eXBlPVxcXCJwcmltYXJ5XFxcIj48L2F3Yy1idXR0b24+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuPC9kaXY+XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdHlsZT5cXG4gICAgOmhvc3Qge1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyUmFkaXVzLCAuMjVlbSk7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW2Jsb2NrXSkge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoOm5vdChbZGlzYWJsZWRdKTpub3QoW3R5cGU9XFxcInByaW1hcnlcXFwiXSk6Zm9jdXMtd2l0aGluKSAuc2VsZWN0LFxcbiAgICA6aG9zdCg6bm90KFtkaXNhYmxlZF0pOm5vdChbdHlwZT1cXFwicHJpbWFyeVxcXCJdKTpob3ZlcikgLnNlbGVjdCB7XFxuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXRoZW1lQ29sb3IsICM0MmI5ODMpO1xcbiAgICAgICAgY29sb3I6IHZhcigtLXRoZW1lQ29sb3IsICM0MmI5ODMpO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFtzZWFyY2hdOmZvY3VzLXdpdGhpbjpub3QoW2Rpc2FibGVkXSkpIC5zZWxlY3QsXFxuICAgIDpob3N0KFtzZWFyY2hdOm5vdChbZGlzYWJsZWRdKTpob3ZlcikgLnNlbGVjdCB7XFxuICAgICAgICBjb2xvcjogdmFyKC0tdGhlbWVDb2xvciwgIzQyYjk4Myk7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW2Rpc2FibGVkXSkge1xcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoOmZvY3VzLXdpdGhpbikgYXdjLXBvcG92ZXIsXFxuICAgIDpob3N0KDphY3RpdmUpIGF3Yy1wb3BvdmVyIHtcXG4gICAgICAgIHotaW5kZXg6IDI7XFxuICAgIH1cXG5cXG4gICAgYXdjLXRvb2x0aXAge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XFxuICAgIH1cXG5cXG4gICAgLnNlbGVjdDpub3QoW3R5cGU9XFxcInByaW1hcnlcXFwiXSkge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgICAgICAgY29sb3I6IGN1cnJlbnRDb2xvcjtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW3NlYXJjaF0pIC5zZWxlY3Qge1xcbiAgICAgICAgY29sb3I6IGN1cnJlbnRDb2xvcjtcXG4gICAgfVxcblxcbiAgICBhd2MtdG9vbHRpcFtzaG93PXNob3ddIHtcXG4gICAgICAgIC0tdGhlbWVDb2xvcjogdmFyKC0tZXJyb3JDb2xvciwgI2Y0NjE1Yyk7XFxuICAgICAgICAtLWJvcmRlckNvbG9yOiB2YXIoLS1lcnJvckNvbG9yLCAjZjQ2MTVjKTtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbaW52YWxpZF0pIC5zZWxlY3Q6bm90KFt0eXBlPVxcXCJwcmltYXJ5XFxcIl0pIHtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1lcnJvckNvbG9yLCAjZjQ2MTVjKTtcXG4gICAgfVxcblxcbiAgICAuc2VsZWN0IHNwYW4ge1xcbiAgICAgICAgZmxleDogMTtcXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIH1cXG5cXG4gICAgYXdjLWlucHV0OjphZnRlciB7XFxuICAgICAgICBjb250ZW50OiAnJztcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICByaWdodDogMDtcXG4gICAgICAgIGJvdHRvbTogMDtcXG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB9XFxuXFxuICAgIC5zZWxlY3RbcmVhZG9ubHldOjphZnRlciB7XFxuICAgICAgICBwb2ludGVyLWV2ZW50czogYWxsO1xcbiAgICB9XFxuXFxuICAgIC5hcnJvdyB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBmb250LXNpemU6IC45ZW07XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSguOCk7XFxuICAgICAgICBtYXJnaW4tbGVmdDogLjVlbTtcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICAgICAgd2lkdGg6IDFlbTtcXG4gICAgICAgIGhlaWdodDogMWVtO1xcbiAgICAgICAgZmlsbDogY3VycmVudENvbG9yO1xcbiAgICAgICAgdHJhbnNpdGlvbjogLjNzIHRyYW5zZm9ybSBjdWJpYy1iZXppZXIoLjY0NSwgLjA0NSwgLjM1NSwgMSk7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW3NlYXJjaF0pIC5hcnJvdyB7XFxuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAuM3MgY3ViaWMtYmV6aWVyKC42NDUsIC4wNDUsIC4zNTUsIDEpLCAuM3MgdHJhbnNmb3JtIGN1YmljLWJlemllciguNjQ1LCAuMDQ1LCAuMzU1LCAxKTtcXG4gICAgfVxcblxcbiAgICBhd2MtcG9wb3ZlcltvcGVuXSAuYXJyb3cge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoLS44KTtcXG4gICAgfVxcblxcbiAgICBhd2MtcG9wb3ZlciB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIGhlaWdodDogaW5oZXJpdDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XFxuICAgIH1cXG5cXG4gICAgYXdjLXBvcGJvZHkge1xcbiAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgICAgICBtYXgtaGVpZ2h0OiA1MHZoO1xcbiAgICAgICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW3NlYXJjaF0pIGF3Yy1wb3Bib2R5OjpiZWZvcmUge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGNvbnRlbnQ6ICdEaWQgbm90IG1hdGNoIGFueSBvcHRpb25zJztcXG4gICAgICAgIHBhZGRpbmc6IC4yNWVtIC42MjVlbTtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjg7XFxuICAgICAgICBjb2xvcjogdmFyKC0tZm9udENvbG9yLCAjMzMzKTtcXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgICAgICBvcGFjaXR5OiAuNTtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbZW1wdHldKSBhd2MtcG9wYm9keTo6YmVmb3JlIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB9XFxuPC9zdHlsZT5cXG48c3R5bGUgaWQ9XFxcImZpbHRlclxcXCI+PC9zdHlsZT5cXG48YXdjLXBvcG92ZXIgaWQ9XFxcInJvb3RcXFwiPlxcbiAgICA8YXdjLWlucHV0IGlkPVxcXCJzZWxlY3RJbnB1dFxcXCIgY2xhc3M9XFxcInNlbGVjdFxcXCIgZGVib3VuY2U9XFxcIjIwMFxcXCIgcmVhZG9ubHk+XFxuICAgICAgICA8c3ZnIGNsYXNzPVxcXCJhcnJvd1xcXCIgdmlld0JveD1cXFwiMCAwIDEwMjQgMTAyNFxcXCI+XFxuICAgICAgICAgICAgPHBhdGhcXG4gICAgICAgICAgICAgICAgZD1cXFwiTTg4NCAyNTZoLTc1Yy01LjEgMC05LjkgMi41LTEyLjkgNi42TDUxMiA2NTQuMiAyMjcuOSAyNjIuNmMtMy00LjEtNy44LTYuNi0xMi45LTYuNmgtNzVjLTYuNSAwLTEwLjMgNy40LTYuNSAxMi43bDM1Mi42IDQ4Ni4xYzEyLjggMTcuNiAzOSAxNy42IDUxLjcgMGwzNTIuNi00ODYuMWMzLjktNS4zIDAuMS0xMi43LTYuNC0xMi43elxcXCI+XFxuICAgICAgICAgICAgPC9wYXRoPlxcbiAgICAgICAgPC9zdmc+XFxuICAgIDwvYXdjLWlucHV0PlxcbiAgICA8YXdjLWJ1dHRvbiBpZD1cXFwic2VsZWN0QnV0dG9uXFxcIiAgY2xhc3M9XFxcInNlbGVjdFxcXCIgZGVib3VuY2U9XFxcIjIwMFxcXCIgcmVhZG9ubHk+XFxuICAgICAgICA8c3BhbiBpZD1cXFwidmFsdWVcXFwiPjwvc3Bhbj5cXG4gICAgICAgIDxzdmcgY2xhc3M9XFxcImFycm93XFxcIiB2aWV3Qm94PVxcXCIwIDAgMTAyNCAxMDI0XFxcIj5cXG4gICAgICAgICAgICA8cGF0aFxcbiAgICAgICAgICAgICAgICBkPVxcXCJNODg0IDI1NmgtNzVjLTUuMSAwLTkuOSAyLjUtMTIuOSA2LjZMNTEyIDY1NC4yIDIyNy45IDI2Mi42Yy0zLTQuMS03LjgtNi42LTEyLjktNi42aC03NWMtNi41IDAtMTAuMyA3LjQtNi41IDEyLjdsMzUyLjYgNDg2LjFjMTIuOCAxNy42IDM5IDE3LjYgNTEuNyAwbDM1Mi42LTQ4Ni4xYzMuOS01LjMgMC4xLTEyLjctNi40LTEyLjd6XFxcIj5cXG4gICAgICAgICAgICA8L3BhdGg+XFxuICAgICAgICA8L3N2Zz5cXG4gICAgPC9hd2MtYnV0dG9uPlxcbiAgICA8YXdjLXBvcGJvZHkgaWQ9XFxcIm9wdGlvbnNcXFwiPlxcbiAgICAgICAgPHNsb3QgaWQ9XFxcInNsb3RcXFwiPjwvc2xvdD5cXG4gICAgPC9hd2MtcG9wYm9keT5cXG48L2F3Yy1wb3BvdmVyPlwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3R5bGU+XFxuICAgIDpob3N0IHtcXG4gICAgICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xcbiAgICB9XFxuXFxuICAgIGxhYmVsIHtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1mb250Q29sb3IsICMzMzMpO1xcbiAgICB9XFxuXFxuICAgIGxhYmVsLnJlcXVpcmVkOm5vdCg6ZW1wdHkpOjpiZWZvcmUge1xcbiAgICAgICAgY29udGVudDogJyonO1xcbiAgICAgICAgY29sb3I6IHZhcigtLWVycm9yQ29sb3IsICNmNDYxNWMpO1xcbiAgICB9XFxuXFxuICAgIC5pdGVtIHtcXG4gICAgICAgIGp1c3RpZnktc2VsZjogc3RyZXRjaDtcXG4gICAgfVxcbjwvc3R5bGU+XFxuPGxhYmVsPjwvbGFiZWw+XFxuPGRpdiBjbGFzcz1cXFwiaXRlbVxcXCI+XFxuICAgIDxzbG90Pjwvc2xvdD5cXG4gICAgPC9zbG90PlxcbjwvZGl2PlwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3R5bGU+XFxuICAgIDpob3N0IHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB9XFxuXFxuICAgIGZvcm0ge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxuICAgICAgICBncmlkLWdhcDogLjhlbTtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBlbmQ7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW3R5cGU9ZnVsbF0pIGZvcm0ge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbdHlwZT1ub25lXSkgZm9ybSB7XFxuICAgICAgICBkaXNwbGF5OiBjb250ZW50cztcXG4gICAgfVxcblxcbiAgICA6aG9zdCg6bm90KFt0eXBlPWZ1bGxdKSkgOjpzbG90dGVkKDpub3QoYXdjLWZvcm0taXRlbSkpIHtcXG4gICAgICAgIGp1c3RpZnktc2VsZjogc3RyZXRjaDtcXG4gICAgICAgIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxuICAgIH1cXG48L3N0eWxlPlxcbjxmb3JtIGlkPVxcXCJmb3JtXFxcIj5cXG4gICAgPHNsb3Q+PC9zbG90PlxcbjwvZm9ybT5cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN0eWxlPlxcbiAgICA6aG9zdCB7XFxuICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICB0cmFuc2l0aW9uOiAuM3M7XFxuICAgIH1cXG5cXG4gICAgLmljb24ge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICB3aWR0aDogMWVtO1xcbiAgICAgICAgaGVpZ2h0OiAxZW07XFxuICAgICAgICBtYXJnaW46IGF1dG87XFxuICAgICAgICBmaWxsOiBjdXJyZW50Q29sb3I7XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFtsb2FkaW5nXSkge1xcbiAgICAgICAgYW5pbWF0aW9uOiByb3RhdGUgMS40cyBsaW5lYXIgaW5maW5pdGU7XFxuICAgIH1cXG5cXG4gICAgQGtleWZyYW1lcyByb3RhdGUge1xcbiAgICAgICAgdG8ge1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgICAgICB9XFxuICAgIH1cXG48L3N0eWxlPlxcbjxzdmcgY2xhc3M9XFxcImljb25cXFwiIGlkPVxcXCJpY29uXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+XFxuICAgIDxwYXRoIGlkPVxcXCJwYXRoXFxcIj48L3BhdGg+XFxuICAgIDx1c2UgaWQ9XFxcInVzZVxcXCI+PC91c2U+XFxuPC9zdmc+XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdHlsZT5cXG4gICAgOmhvc3Qge1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjZWVlO1xcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICAgICAgY29sb3I6ICM2NjY7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW2FsdF06bm90KFtkZWZhdWx0XSkpOjpiZWZvcmUge1xcbiAgICAgICAgY29udGVudDogYXR0cihhbHQpO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgY29sb3I6ICNmZmY7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgcmlnaHQ6IDA7XFxuICAgICAgICBib3R0b206IDA7XFxuICAgICAgICB6LWluZGV4OiAxO1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgdHJhbnNwYXJlbnQsIHJnYmEoMCwgMCwgMCwgLjUpKTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcXG4gICAgICAgIHRyYW5zaXRpb246IC4zcztcXG4gICAgfVxcblxcbiAgICA6aG9zdChbYWx0XTpob3Zlcik6OmJlZm9yZSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW3JhdGlvKj1cXFwiL1xcXCJdKSB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFtyYXRpbyo9XFxcIi9cXFwiXSkgaW1nIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbcmF0aW8qPVxcXCIvXFxcIl0pIC5wbGFjZWhvbGRlciB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMTAwJTtcXG4gICAgfVxcblxcbiAgICBpbWcge1xcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgIHdpZHRoOiBpbmhlcml0O1xcbiAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gICAgICAgIGJvcmRlcjogMDtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICAgICAgdHJhbnNpdGlvbjogLjNzO1xcbiAgICB9XFxuXFxuICAgIGltZzo6YmVmb3JlIHtcXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcXG4gICAgICAgIHotaW5kZXg6IDE7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QgaW1nW3NyY10ge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoOm5vdChbZXJyb3JdKTpub3QoW2RlZmF1bHRdKTpob3ZlcikgaW1nW3NyY10sXFxuICAgIDpob3N0KDpmb2N1cy13aXRoaW4pIGltZ1tzcmNdIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbZml0PVxcXCJjb3ZlclxcXCJdKSBpbWcge1xcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW2ZpdD1cXFwiZmlsbFxcXCJdKSBpbWcge1xcbiAgICAgICAgb2JqZWN0LWZpdDogZmlsbDtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbZml0PVxcXCJjb250YWluXFxcIl0pIGltZyB7XFxuICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xcbiAgICB9XFxuXFxuICAgIC5wbGFjZWhvbGRlciB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICB6LWluZGV4OiAtMTtcXG4gICAgICAgIHRyYW5zaXRpb246IC4zcztcXG4gICAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XFxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW2Vycm9yXSkgLnBsYWNlaG9sZGVyIHtcXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgICAgICB6LWluZGV4OiAyO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFtlcnJvcl0pIGltZyB7XFxuICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XFxuICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xcbiAgICAgICAgbWluLWhlaWdodDogMTAwcHg7XFxuICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgLmxvYWRpbmcge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgbGVmdDogNTAlO1xcbiAgICAgICAgdG9wOiA1MCU7XFxuICAgICAgICB6LWluZGV4OiAzO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB0cmFuc2l0aW9uOiAuM3M7XFxuICAgIH1cXG5cXG4gICAgaW1nW3NyY10rLmxvYWRpbmcsXFxuICAgIDpob3N0KFtlcnJvcl0pIC5sb2FkaW5nIHtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIH1cXG5cXG4gICAgLnBsYWNlaG9sZGVyIGF3Yy1pY29uIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xNWVtO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAuNGVtO1xcbiAgICB9XFxuXFxuICAgIC5wbGFjZWhvbGRlci1pY29uIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgcmlnaHQ6IDA7XFxuICAgICAgICB0b3A6IDUwJTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gICAgfVxcblxcbiAgICAudmlldyB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB6LWluZGV4OiAzO1xcbiAgICAgICAgbGVmdDogNTAlO1xcbiAgICAgICAgdG9wOiA1MCU7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgyKTtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICBjb2xvcjogI2ZmZjtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICBmb250LXNpemU6IDQwcHg7XFxuICAgICAgICB0cmFuc2l0aW9uOiAuM3M7XFxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgfVxcblxcbiAgICA6aG9zdCg6Zm9jdXMtd2l0aGluKSAudmlldyB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxuICAgIH1cXG5cXG4gICAgLmFuaW1hdGlvbiAuc2hhcGUge1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWVCYWNrZ3JvdW5kLCB2YXIoLS10aGVtZUNvbG9yLCAjNDJiOTgzKSk7XFxuICAgIH1cXG5cXG4gICAgLmFuaW1hdGlvbiB7XFxuICAgICAgICB3aWR0aDogMmVtO1xcbiAgICAgICAgaGVpZ2h0OiAyZW07XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgICAgIGdyaWQtZ2FwOiAuN2VtO1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICAgICAgYW5pbWF0aW9uOiByb3RhdGlvbiAxcyBpbmZpbml0ZTtcXG4gICAgfVxcblxcbiAgICAuc2hhcGUxIHtcXG4gICAgICAgIGFuaW1hdGlvbjogYW5pbWF0aW9uNHNoYXBlMSAwLjNzIGVhc2UgMHMgaW5maW5pdGUgYWx0ZXJuYXRlO1xcbiAgICB9XFxuXFxuICAgIEBrZXlmcmFtZXMgcm90YXRpb24ge1xcbiAgICAgICAgZnJvbSB7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICB0byB7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICBAa2V5ZnJhbWVzIGFuaW1hdGlvbjRzaGFwZTEge1xcbiAgICAgICAgZnJvbSB7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICB0byB7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNXB4LCA1cHgpO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5zaGFwZTIge1xcbiAgICAgICAgb3BhY2l0eTogLjg7XFxuICAgICAgICBhbmltYXRpb246IGFuaW1hdGlvbjRzaGFwZTIgMC4zcyBlYXNlIDAuM3MgaW5maW5pdGUgYWx0ZXJuYXRlO1xcbiAgICB9XFxuXFxuICAgIEBrZXlmcmFtZXMgYW5pbWF0aW9uNHNoYXBlMiB7XFxuICAgICAgICBmcm9tIHtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIHRvIHtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNXB4LCA1cHgpO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5zaGFwZTMge1xcbiAgICAgICAgb3BhY2l0eTogLjY7XFxuICAgICAgICBhbmltYXRpb246IGFuaW1hdGlvbjRzaGFwZTMgMC4zcyBlYXNlIDAuM3MgaW5maW5pdGUgYWx0ZXJuYXRlO1xcbiAgICB9XFxuXFxuICAgIEBrZXlmcmFtZXMgYW5pbWF0aW9uNHNoYXBlMyB7XFxuICAgICAgICBmcm9tIHtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIHRvIHtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1cHgsIC01cHgpO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5zaGFwZTQge1xcbiAgICAgICAgb3BhY2l0eTogLjQ7XFxuICAgICAgICBhbmltYXRpb246IGFuaW1hdGlvbjRzaGFwZTQgMC4zcyBlYXNlIDBzIGluZmluaXRlIGFsdGVybmF0ZTtcXG4gICAgfVxcblxcbiAgICBAa2V5ZnJhbWVzIGFuaW1hdGlvbjRzaGFwZTQge1xcbiAgICAgICAgZnJvbSB7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICB0byB7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTVweCwgLTVweCk7XFxuICAgICAgICB9XFxuICAgIH1cXG48L3N0eWxlPlxcbjxkaXYgY2xhc3M9XFxcInBsYWNlaG9sZGVyXFxcIiBpZD1cXFwicGxhY2Vob2xkZXJcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwbGFjZWhvbGRlci1pY29uXFxcIj5cXG4gICAgICAgIDxhd2MtaWNvblxcbiAgICAgICAgICAgIHBhdGg9XFxcIk05MjggMTYwSDk2Yy0xNy43IDAtMzIgMTQuMy0zMiAzMnY2NDBjMCAxNy43IDE0LjMgMzIgMzIgMzJoODMyYzE3LjcgMCAzMi0xNC4zIDMyLTMyVjE5MmMwLTE3LjctMTQuMy0zMi0zMi0zMnogbS00MCA2MzJIMTM2di0zOS45bDEzOC41LTE2NC4zIDE1MC4xIDE3OEw2NTguMSA0ODkgODg4IDc2MS42Vjc5MnogbTAtMTI5LjhMNjY0LjIgMzk2LjhjLTMuMi0zLjgtOS0zLjgtMTIuMiAwTDQyNC42IDY2Ni40bC0xNDQtMTcwLjdjLTMuMi0zLjgtOS0zLjgtMTIuMiAwTDEzNiA2NTIuN1YyMzJoNzUydjQzMC4yelxcXCI+XFxuICAgICAgICA8L2F3Yy1pY29uPiRcXG4gICAgICAgIDxkaXYgaWQ9XFxcImFsdFxcXCI+PC9kaXY+XFxuICAgIDwvZGl2PlxcbjwvZGl2PlxcbjxpbWcgLz5cXG48ZGl2IGNsYXNzPVxcXCJsb2FkaW5nXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiYW5pbWF0aW9uXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInNoYXBlIHNoYXBlMVxcXCI+PC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzaGFwZSBzaGFwZTJcXFwiPjwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwic2hhcGUgc2hhcGUzXFxcIj48L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInNoYXBlIHNoYXBlNFxcXCI+PC9kaXY+XFxuICAgIDwvZGl2PlxcbjwvZGl2PlwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3R5bGU+XFxuICAgIDpob3N0IHtcXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXJDb2xvciwgcmdiYSgwLCAwLCAwLCAuMikpO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyUmFkaXVzLCAuMjVlbSk7XFxuICAgICAgICBsaW5lLWhlaWdodDogMS44O1xcbiAgICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC4zcywgYm94LXNoYWRvdyAuM3M7XFxuICAgICAgICBwYWRkaW5nOiAuMjVlbSAuNjI1ZW07XFxuICAgICAgICBjb2xvcjogdmFyKC0tZm9udENvbG9yLCAjMzMzKTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbYmxvY2tdKSB7XFxuICAgICAgICBkaXNwbGF5OiBibG9ja1xcbiAgICB9XFxuXFxuICAgIGF3Yy10b29sdGlwW3Nob3c9c2hvd10ge1xcbiAgICAgICAgY29sb3I6IHZhcigtLWVycm9yQ29sb3IsICNmNDYxNWMpO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFtpbnZhbGlkXSkge1xcbiAgICAgICAgLS10aGVtZUNvbG9yOiB2YXIoLS1lcnJvckNvbG9yLCAjZjQ2MTVjKTtcXG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tZXJyb3JDb2xvciwgI2Y0NjE1Yyk7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW2ludmFsaWRdKSBhd2MtaWNvbiB7XFxuICAgICAgICBjb2xvcjogdmFyKC0tZXJyb3JDb2xvciwgI2Y0NjE1Yyk7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoOmZvY3VzLXdpdGhpbjpub3QoW2Rpc2FibGVkXSkpLFxcbiAgICA6aG9zdCg6bm90KFtkaXNhYmxlZF0pOmhvdmVyKSB7XFxuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXRoZW1lQ29sb3IsICM0MmI5ODMpO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFtkaXNhYmxlZF0pIHtcXG4gICAgICAgIG9wYWNpdHk6IC44O1xcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbZGlzYWJsZWRdKSBhd2MtdG9vbHRpcCB7XFxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjEpO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFtsYWJlbF0pIC5pbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICB9XFxuXFxuICAgIDpob3N0IC5pbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgICAgICAgY29sb3I6ICM5OTk7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoYXdjLXRleHRhcmVhKSB7XFxuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xcbiAgICAgICAgcGFkZGluZy1yaWdodDogLjI1ZW07XFxuICAgIH1cXG5cXG4gICAgYXdjLXRvb2x0aXAge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIG1hcmdpbjogLS4yNWVtIC0uNjI1ZW07XFxuICAgICAgICBwYWRkaW5nOiAuMjVlbSAuNjI1ZW07XFxuICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgICAgIHRyYW5zaXRpb246IC4zcyBiYWNrZ3JvdW5kLWNvbG9yO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KGF3Yy10ZXh0YXJlYSkgYXdjLXRvb2x0aXAge1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAtLjI1ZW07XFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAuMjVlbTtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICB9XFxuXFxuICAgIC5pbnB1dCB7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgdGV4dC1hbGlnbjogaW5oZXJpdDtcXG4gICAgICAgIGNvbG9yOiBjdXJyZW50Q29sb3I7XFxuICAgICAgICBib3JkZXI6IDA7XFxuICAgICAgICBvdXRsaW5lOiAwO1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxuICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XFxuICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgICAgIGZsZXg6IDE7XFxuICAgICAgICBtaW4td2lkdGg6IDA7XFxuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAgICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAuM3M7XFxuICAgICAgICBhbmltYXRpb246IHJlbW92ZUJnIDBzIGZvcndhcmRzO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KGF3Yy10ZXh0YXJlYSkgLmlucHV0IHtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgfVxcblxcbiAgICBpbnB1dFt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgIDo6LW1vei1mb2N1cy1pbm5lcixcXG4gICAgOjotbW96LWZvY3VzLW91dGVyIHtcXG4gICAgICAgIGJvcmRlcjogMDtcXG4gICAgICAgIG91dGxpbmU6IDA7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW3Nob3d0aXBzXSkge1xcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG4gICAgfVxcblxcbiAgICAuaW5wdXQtbGFiZWwge1xcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgICAgICBtYXJnaW4tbGVmdDogLTAuMTRlbTtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3MsIGNvbG9yIC4zcywgYmFja2dyb3VuZC1jb2xvciAuM3M7XFxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xcbiAgICAgICAgcGFkZGluZzogMCAwLjE0ZW07XFxuICAgICAgICBjb2xvcjogIzk5OTtcXG4gICAgfVxcblxcbiAgICAuaW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bil+LmlucHV0LWxhYmVsLFxcbiAgICAuaW5wdXQ6Zm9jdXN+LmlucHV0LWxhYmVsIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWShjYWxjKC01MCUgLSAwLjQzZW0pKSBzY2FsZSgwLjgpO1xcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgfVxcblxcbiAgICAuaW5wdXQ6LW1vei11aS1pbnZhbGlkIHtcXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgLmlucHV0OjotbXMtcmV2ZWFsIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgLmljb24tcHJlIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuMjVlbTtcXG4gICAgICAgIGNvbG9yOiAjOTk5O1xcbiAgICB9XFxuXFxuICAgIDpob3N0KGF3Yy10ZXh0YXJlYSkgLmljb24tcHJlIHtcXG4gICAgICAgIGhlaWdodDogMS41ZW07XFxuICAgIH1cXG5cXG4gICAgLmJ0bi1yaWdodCB7XFxuICAgICAgICB3aWR0aDogMmVtO1xcbiAgICAgICAgaGVpZ2h0OiAyZW07XFxuICAgICAgICBtYXJnaW46IC0uMjVlbSAtLjVlbSAtLjI1ZW0gLjI1ZW07XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgY29sb3I6ICM5OTk7XFxuICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XFxuICAgIH1cXG5cXG4gICAgLmJ0bi1udW1iZXIge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICB3aWR0aDogMS41ZW07XFxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgICAgICB0cmFuc2l0aW9uOiAwcztcXG4gICAgfVxcblxcbiAgICAuYnRuLW51bWJlciBhd2MtYnV0dG9uIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBjb2xvcjogIzk5OTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGZsZXg6IDE7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgZm9udC1zaXplOiAuOGVtO1xcbiAgICAgICAgdHJhbnNpdGlvbjogLjJzO1xcbiAgICB9XFxuXFxuICAgIC5idG4tbnVtYmVyIGF3Yy1idXR0b246aG92ZXIge1xcbiAgICAgICAgZmxleDogMS41O1xcbiAgICB9XFxuXFxuICAgIGF3Yy1idXR0b246bm90KFtkaXNhYmxlZF0pOmhvdmVyLFxcbiAgICBhd2MtYnV0dG9uOm5vdChbZGlzYWJsZWRdKTpmb2N1cy13aXRoaW4ge1xcbiAgICAgICAgY29sb3I6IHZhcigtLXRoZW1lQ29sb3IsICM0MmI5ODMpO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KDpmb2N1cy13aXRoaW46bm90KFtkaXNhYmxlZF0pKSAuaWNvbi1wcmUsXFxuICAgIDpob3N0KDpub3QoW2Rpc2FibGVkXSk6aG92ZXIpIC5pY29uLXByZSxcXG4gICAgOmhvc3QoOm5vdChbZGlzYWJsZWRdKTpob3ZlcikgLmlucHV0LWxhYmVsLFxcbiAgICA6aG9zdCg6Zm9jdXMtd2l0aGluOm5vdChbZGlzYWJsZWRdKSkgLmlucHV0LWxhYmVsIHtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS10aGVtZUNvbG9yLCAjNDJiOTgzKTtcXG4gICAgfVxcblxcbiAgICA6aG9zdCg6Zm9jdXMtd2l0aGluOm5vdChbZGlzYWJsZWRdKSkgLmJ0bi1udW1iZXIsXFxuICAgIDpob3N0KDpub3QoW2Rpc2FibGVkXSk6aG92ZXIpIC5idG4tbnVtYmVyIHtcXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgIH1cXG5cXG4gICAgQGtleWZyYW1lcyByZW1vdmVCZyB7XFxuICAgICAgICB0byB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgICAgICB9XFxuICAgIH1cXG48L3N0eWxlPlxcbjxhd2MtdG9vbHRpcCBpZD1cXFwiaW5wdXQtdG9vbHRpcFxcXCIgdHlwZT1cXFwiZXJyb3JcXFwiPlxcbiAgICA8IS0tIGlmIG11bHRpIGlzIHRydWUsIHJlbW92ZSBpbnB1dCwgZWxzZSByZW1vdmUgdGV4dGFyZWEgLS0+XFxuICAgIDx0ZXh0YXJlYSBpZD1cXFwidGV4dGFyZWFcXFwiIGNsYXNzPVxcXCJpbnB1dFxcXCIgdHlwZT1cXFwidGV4dFxcXCI+PC90ZXh0YXJlYT5cXG4gICAgPGlucHV0IGlkPVxcXCJpbnB1dFxcXCIgY2xhc3M9XFxcImlucHV0XFxcIiAvPlxcbiAgICA8c2xvdD48L3Nsb3Q+XFxuICAgIDxsYWJlbCBjbGFzcz1cXFwiaW5wdXQtbGFiZWxcXFwiIGlkPVxcXCJpbnB1dC1sYWJlbFxcXCI+PC9sYWJlbD5cXG4gICAgIDwhLS0gaWYgdHlwZSBpcyBub3QgbnVtYmVyLCByZW1vdmUgZGl2LiAtLT5cXG4gICAgPGRpdiBjbGFzcz1cXFwiYnRuLXJpZ2h0IGJ0bi1udW1iZXJcXFwiIGlkPVxcXCJidG4tbnVtYmVyXFxcIj48L2Rpdj5cXG48L2F3Yy10b29sdGlwPlwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3R5bGU+XFxuICAgIDpob3N0IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgY29sb3I6IHZhcigtLXRoZW1lQ29sb3IsICM0MmI5ODMpO1xcbiAgICB9XFxuXFxuICAgIC5sb2FkaW5nIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgd2lkdGg6IDFlbTtcXG4gICAgICAgIGhlaWdodDogMWVtO1xcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xcbiAgICAgICAgYW5pbWF0aW9uOiByb3RhdGUgMS40cyBsaW5lYXIgaW5maW5pdGU7XFxuICAgIH1cXG5cXG4gICAgLmNpcmNsZSB7XFxuICAgICAgICBzdHJva2U6IGN1cnJlbnRDb2xvcjtcXG4gICAgICAgIGFuaW1hdGlvbjogcHJvZ3Jlc3MgMS40cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcXG4gICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDgwcHgsIDIwMHB4O1xcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDBweDtcXG4gICAgICAgIHRyYW5zaXRpb246IC4zcztcXG4gICAgfVxcblxcbiAgICA6aG9zdCg6bm90KDplbXB0eSkpIC5sb2FkaW5nIHtcXG4gICAgICAgIG1hcmdpbjogLjVlbTtcXG4gICAgfVxcblxcbiAgICBAa2V5ZnJhbWVzIHJvdGF0ZSB7XFxuICAgICAgICB0byB7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICBAa2V5ZnJhbWVzIHByb2dyZXNzIHtcXG4gICAgICAgIDAlIHtcXG4gICAgICAgICAgICBzdHJva2UtZGFzaGFycmF5OiAxcHgsIDIwMHB4O1xcbiAgICAgICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwcHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICA1MCUge1xcbiAgICAgICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDEwMHB4LCAyMDBweDtcXG4gICAgICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogLTE1cHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAxMDAlIHtcXG4gICAgICAgICAgICBzdHJva2UtZGFzaGFycmF5OiAxMDBweCwgMjAwcHg7XFxuICAgICAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0xMjVweDtcXG4gICAgICAgIH1cXG4gICAgfVxcbjwvc3R5bGU+XFxuPHN2ZyBjbGFzcz1cXFwibG9hZGluZ1xcXCIgaWQ9XFxcImxvYWRpbmdcXFwiIHZpZXdCb3g9XFxcIjIyIDIyIDQ0IDQ0XFxcIj5cXG4gICAgPGNpcmNsZSBjbGFzcz1cXFwiY2lyY2xlXFxcIiBjeD1cXFwiNDRcXFwiIGN5PVxcXCI0NFxcXCIgcj1cXFwiMjAuMlxcXCIgZmlsbD1cXFwibm9uZVxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIzLjZcXFwiPjwvY2lyY2xlPlxcbjwvc3ZnPlxcbjxzbG90Pjwvc2xvdD5cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN0eWxlPlxcbiAgICA6aG9zdCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIHRyYW5zaXRpb246IC4zcztcXG4gICAgICAgIHotaW5kZXg6IDEwO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFtzaG93XSkge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgIH1cXG5cXG4gICAgLm1lc3NhZ2Uge1xcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICAgICAgY29sb3I6ICM2NjY7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcXG4gICAgICAgIHRyYW5zaXRpb246IC4zcyB0cmFuc2Zvcm0gY3ViaWMtYmV6aWVyKC42NDUsIC4wNDUsIC4zNTUsIDEpO1xcbiAgICAgICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbc2hvd10pIC5tZXNzYWdlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgfVxcblxcbiAgICAubWVzc2FnZT4qIHtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgICB9XFxuXFxuICAgIGF3Yy1sb2FkaW5nIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW3Nob3ddW3R5cGU9XFxcImxvYWRpbmdcXFwiXSkgYXdjLWxvYWRpbmcge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW3Nob3ddW3R5cGU9XFxcImxvYWRpbmdcXFwiXSkgYXdjLWljb24ge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICA6aG9zdCBhd2MtaWNvbiB7XFxuICAgICAgICBjb2xvcjogdmFyKC0tdGhlbWVDb2xvciwgIzQyYjk4Myk7XFxuICAgIH1cXG48L3N0eWxlPlxcbjxkaXYgY2xhc3M9XFxcIm1lc3NhZ2VcXFwiPlxcbiAgICA8YXdjLWljb24gaWQ9XFxcIm1lc3NhZ2UtaWNvblxcXCIgY2xhc3M9XFxcIm1lc3NhZ2UtaWNvblxcXCIgc2l6ZT1cXFwiMTZcXFwiPjwvYXdjLWljb24+XFxuICAgIDxhd2MtbG9hZGluZz48L2F3Yy1sb2FkaW5nPlxcbiAgICA8c2xvdD48L3Nsb3Q+XFxuPC9kaXY+XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdHlsZT5cXG4gICAgOmhvc3Qge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW2hpZGRlbl0pIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgLm9wdGlvbiB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcXG4gICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogdmFyKC0tcGFkZGluZ0xlZnQsIC42MjVlbSk7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW3NlbGVjdGVkXSkgLm9wdGlvbiB7XFxuICAgICAgICBjb2xvcjogdmFyKC0tdGhlbWVDb2xvciwgIzQyYjk4MylcXG4gICAgfVxcbjwvc3R5bGU+XFxuPGF3Yy1idXR0b24gaWQ9XFxcIm9wdGlvblxcXCIgY2xhc3M9XFxcIm9wdGlvblxcXCIgdHlwZT1cXFwidGV4dFxcXCI+XFxuICAgIDxzbG90Pjwvc2xvdD5cXG48L2F3Yy1idXR0b24+XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdHlsZT5cXG4gICAgOmhvc3Qge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgfVxcblxcbiAgICBhd2MtYnV0dG9uIHtcXG4gICAgICAgIG1hcmdpbjogMCAuM2VtO1xcbiAgICAgICAgd2lkdGg6IDIuM2VtO1xcbiAgICAgICAgaGVpZ2h0OiAyLjNlbTtcXG4gICAgICAgIHBhZGRpbmc6IDFweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgICB9XFxuXFxuICAgIC5zaW1wbGUtcGFnZSB7XFxuICAgICAgICB3aWR0aDogYXV0bztcXG4gICAgICAgIHBhZGRpbmc6IDAgLjYyNWVtO1xcbiAgICB9XFxuXFxuICAgIGF3Yy1idXR0b25bdGFiaW5kZXhdIHtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB9XFxuXFxuICAgIGF3Yy1idXR0b25bY3VycmVudF0ge1xcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWVCYWNrZ3JvdW5kLCB2YXIoLS10aGVtZUNvbG9yLCAjNDJiOTgzKSk7XFxuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXRoZW1lQ29sb3IsICM0MmI5ODMpO1xcbiAgICAgICAgY29sb3I6ICNmZmY7XFxuICAgIH1cXG5cXG4gICAgLnBhZ2Uge1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAgIH1cXG5cXG4gICAgLmljb24ge1xcbiAgICAgICAgd2lkdGg6IDFlbTtcXG4gICAgICAgIGhlaWdodDogMWVtO1xcbiAgICAgICAgZmlsbDogY3VycmVudENvbG9yO1xcbiAgICB9XFxuPC9zdHlsZT5cXG48YXdjLWJ1dHRvbiB0eXBlPVxcXCJ0ZXh0XFxcIiBpZD1cXFwibGVmdFxcXCI+XFxuICAgIDxzdmcgY2xhc3M9XFxcImljb25cXFwiIHZpZXdCb3g9XFxcIjAgMCAxMDI0IDEwMjRcXFwiPlxcbiAgICAgICAgPHBhdGhcXG4gICAgICAgICAgICBkPVxcXCJNNzI0IDIxOC4zVjE0MWMwLTYuNy03LjctMTAuNC0xMi45LTYuM0wyNjAuMyA0ODYuOGMtMTYuNCAxMi44LTE2LjQgMzcuNSAwIDUwLjNsNDUwLjggMzUyLjFjNS4zIDQuMSAxMi45IDAuNCAxMi45LTYuM3YtNzcuM2MwLTQuOS0yLjMtOS42LTYuMS0xMi42bC0zNjAtMjgxIDM2MC0yODEuMWMzLjgtMyA2LjEtNy43IDYuMS0xMi42elxcXCI+XFxuICAgICAgICA8L3BhdGg+XFxuICAgIDwvc3ZnPlxcbjwvYXdjLWJ1dHRvbj5cXG48ZGl2IGNsYXNzPVxcXCJwYWdlXFxcIiBpZD1cXFwicGFnZVxcXCI+PC9kaXY+XFxuPGF3Yy1idXR0b24gdHlwZT1cXFwidGV4dFxcXCIgaWQ9XFxcInJpZ2h0XFxcIj5cXG4gICAgPHN2ZyBjbGFzcz1cXFwiaWNvblxcXCIgdmlld0JveD1cXFwiMCAwIDEwMjQgMTAyNFxcXCI+XFxuICAgICAgICA8cGF0aFxcbiAgICAgICAgICAgIGQ9XFxcIk03NjUuNyA0ODYuOEwzMTQuOSAxMzQuN2MtNS4zLTQuMS0xMi45LTAuNC0xMi45IDYuM3Y3Ny4zYzAgNC45IDIuMyA5LjYgNi4xIDEyLjZsMzYwIDI4MS4xLTM2MCAyODEuMWMtMy45IDMtNi4xIDcuNy02LjEgMTIuNlY4ODNjMCA2LjcgNy43IDEwLjQgMTIuOSA2LjNsNDUwLjgtMzUyLjFjMTYuNC0xMi44IDE2LjQtMzcuNiAwLTUwLjR6XFxcIj5cXG4gICAgICAgIDwvcGF0aD5cXG4gICAgPC9zdmc+XFxuPC9hd2MtYnV0dG9uPlwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3R5bGU+XFxuICAgIDpob3N0IHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDE1cHggdmFyKC0tYm94U2hhZG93LCByZ2JhKDAsIDAsIDAsIDAuMTUpKTtcXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICAgICAgb3BhY2l0eTogMC41O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICAgICAgei1pbmRleDogMTA7XFxuICAgICAgICB0cmFuc2l0aW9uOiAuM3MgY3ViaWMtYmV6aWVyKC42NDUsIC4wNDUsIC4zNTUsIDEpO1xcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogaW5oZXJpdDtcXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIH1cXG5cXG4gICAgLnBvcGJvZHktY29udGVudCB7XFxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgICAgIHBhZGRpbmc6IDAgMTVweDtcXG4gICAgICAgIGZsZXg6IDE7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuICAgIC5wb3Bib2R5LXRpdGxlIHtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbiAgICAgICAgcGFkZGluZzogMTVweCAzMHB4IDAgMDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgICBjb2xvcjogIzRjNTE2MTtcXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgICB9XFxuXFxuICAgIC5wb3Bib2R5LWJvZHkge1xcbiAgICAgICAgZmxleDogMTtcXG4gICAgICAgIHBhZGRpbmc6IDVweCAwIDE1cHggMDtcXG4gICAgfVxcblxcbiAgICAucG9wYm9keS1mb290ZXIge1xcbiAgICAgICAgcGFkZGluZzogM3B4IDAgMTVweCAwO1xcbiAgICAgICAgbWFyZ2luLXRvcDogLTNweDtcXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgfVxcblxcbiAgICAuYnRuLWNsb3NlIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHJpZ2h0OiAxMHB4O1xcbiAgICAgICAgdG9wOiAxMHB4O1xcbiAgICAgICAgYm9yZGVyOiAwO1xcbiAgICB9XFxuXFxuICAgIC5wb3Bib2R5LWZvb3RlciBhd2MtYnV0dG9uIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogLjhlbTtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAuOGVtO1xcbiAgICB9XFxuXFxuICAgIC5wb3Bib2R5LXR5cGUge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIHdpZHRoOiAzMHB4O1xcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICAgICAgbWFyZ2luOiAxNXB4IC0xMHB4IDAgMTVweDtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbdHlwZT1cXFwiY29uZmlybVxcXCJdKSB7XFxuICAgICAgICBtaW4td2lkdGg6IDI1MHB4O1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFt0eXBlPVxcXCJjb25maXJtXFxcIl0pIC5wb3Bib2R5LWJvZHkge1xcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICB9XFxuXFxuICAgIDpob3N0KDpub3QoW3R5cGVdKSkgLnBvcGJvZHktY29udGVudCxcXG4gICAgOmhvc3QoOm5vdChbdHlwZV0pKSAucG9wYm9keS1ib2R5IHtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgIH1cXG48L3N0eWxlPlxcbjxkaXYgY2xhc3M9XFxcInBvcGJvZHktY29udGVudFxcXCIgaWQ9XFxcInBvcGJvZHktY29udGVudFxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcInBvcGJvZHktYm9keVxcXCI+XFxuICAgICAgICA8c2xvdD48L3Nsb3Q+XFxuICAgIDwvZGl2PlxcbjwvZGl2PlwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3R5bGU+XFxuICAgIDpob3N0IHtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFtkaXI9XFxcInRvcFxcXCJdKSA6OnNsb3R0ZWQoYXdjLXBvcGJvZHkpIHtcXG4gICAgICAgIGJvdHRvbTogMTAwJTtcXG4gICAgICAgIGxlZnQ6IDUwJTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0xMHB4KSBzY2FsZSgwKTtcXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBib3R0b207XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW2Rpcj1cXFwidG9wXFxcIl0pIDo6c2xvdHRlZChhd2MtcG9wYm9keVtvcGVuXSksXFxuICAgIDpob3N0KFtkaXI9XFxcInRvcFxcXCJdW3RyaWdnZXI9XFxcImhvdmVyXFxcIl06bm90KFtkaXNhYmxlZF0pOmhvdmVyKSA6OnNsb3R0ZWQoYXdjLXBvcGJvZHkpLFxcbiAgICA6aG9zdChbZGlyPVxcXCJ0b3BcXFwiXVt0cmlnZ2VyPVxcXCJmb2N1c1xcXCJdOm5vdChbZGlzYWJsZWRdKTpmb2N1cy13aXRoaW4pIDo6c2xvdHRlZChhd2MtcG9wYm9keSkge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTEwcHgpIHNjYWxlKDEpO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFtkaXI9XFxcInJpZ2h0XFxcIl0pIDo6c2xvdHRlZChhd2MtcG9wYm9keSkge1xcbiAgICAgICAgbGVmdDogMTAwJTtcXG4gICAgICAgIHRvcDogNTAlO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTBweCwgLTUwJSkgc2NhbGUoMCk7XFxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFtkaXI9XFxcInJpZ2h0XFxcIl0pIDo6c2xvdHRlZChhd2MtcG9wYm9keVtvcGVuXSksXFxuICAgIDpob3N0KFtkaXI9XFxcInJpZ2h0XFxcIl1bdHJpZ2dlcj1cXFwiaG92ZXJcXFwiXTpub3QoW2Rpc2FibGVkXSk6aG92ZXIpIDo6c2xvdHRlZChhd2MtcG9wYm9keSksXFxuICAgIDpob3N0KFtkaXI9XFxcInJpZ2h0XFxcIl1bdHJpZ2dlcj1cXFwiZm9jdXNcXFwiXTpub3QoW2Rpc2FibGVkXSk6Zm9jdXMtd2l0aGluKSA6OnNsb3R0ZWQoYXdjLXBvcGJvZHkpIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwcHgsIC01MCUpIHNjYWxlKDEpO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFtkaXI9XFxcImJvdHRvbVxcXCJdKSA6OnNsb3R0ZWQoYXdjLXBvcGJvZHkpIHtcXG4gICAgICAgIHRvcDogMTAwJTtcXG4gICAgICAgIGxlZnQ6IDUwJTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDEwcHgpIHNjYWxlKDApO1xcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIHRvcDtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbZGlyPVxcXCJib3R0b21cXFwiXSkgOjpzbG90dGVkKGF3Yy1wb3Bib2R5W29wZW5dKSxcXG4gICAgOmhvc3QoW2Rpcj1cXFwiYm90dG9tXFxcIl1bdHJpZ2dlcj1cXFwiaG92ZXJcXFwiXTpub3QoW2Rpc2FibGVkXSk6aG92ZXIpIDo6c2xvdHRlZChhd2MtcG9wYm9keSksXFxuICAgIDpob3N0KFtkaXI9XFxcImJvdHRvbVxcXCJdW3RyaWdnZXI9XFxcImZvY3VzXFxcIl06bm90KFtkaXNhYmxlZF0pOmZvY3VzLXdpdGhpbikgOjpzbG90dGVkKGF3Yy1wb3Bib2R5KSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAxMHB4KSBzY2FsZSgxKTtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbZGlyPVxcXCJsZWZ0XFxcIl0pIDo6c2xvdHRlZChhd2MtcG9wYm9keSkge1xcbiAgICAgICAgcmlnaHQ6IDEwMCU7XFxuICAgICAgICB0b3A6IDUwJTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMHB4LCAtNTAlKSBzY2FsZSgwKTtcXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0O1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFtkaXI9XFxcImxlZnRcXFwiXSkgOjpzbG90dGVkKGF3Yy1wb3Bib2R5W29wZW5dKSxcXG4gICAgOmhvc3QoW2Rpcj1cXFwibGVmdFxcXCJdW3RyaWdnZXI9XFxcImhvdmVyXFxcIl06bm90KFtkaXNhYmxlZF0pOmhvdmVyKSA6OnNsb3R0ZWQoYXdjLXBvcGJvZHkpLFxcbiAgICA6aG9zdChbZGlyPVxcXCJsZWZ0XFxcIl1bdHJpZ2dlcj1cXFwiZm9jdXNcXFwiXTpub3QoW2Rpc2FibGVkXSk6Zm9jdXMtd2l0aGluKSA6OnNsb3R0ZWQoYXdjLXBvcGJvZHkpIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMHB4LCAtNTAlKSBzY2FsZSgxKTtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbZGlyPVxcXCJsZWZ0dG9wXFxcIl0pIDo6c2xvdHRlZChhd2MtcG9wYm9keSkge1xcbiAgICAgICAgcmlnaHQ6IDEwMCU7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTBweCkgc2NhbGUoMCk7XFxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCB0b3A7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW2Rpcj1cXFwibGVmdHRvcFxcXCJdKSA6OnNsb3R0ZWQoYXdjLXBvcGJvZHlbb3Blbl0pLFxcbiAgICA6aG9zdChbZGlyPVxcXCJsZWZ0dG9wXFxcIl1bdHJpZ2dlcj1cXFwiaG92ZXJcXFwiXTpub3QoW2Rpc2FibGVkXSk6aG92ZXIpIDo6c2xvdHRlZChhd2MtcG9wYm9keSksXFxuICAgIDpob3N0KFtkaXI9XFxcImxlZnR0b3BcXFwiXVt0cmlnZ2VyPVxcXCJmb2N1c1xcXCJdOm5vdChbZGlzYWJsZWRdKTpmb2N1cy13aXRoaW4pIDo6c2xvdHRlZChhd2MtcG9wYm9keSkge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwcHgpIHNjYWxlKDEpO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFtkaXI9XFxcImxlZnRib3R0b21cXFwiXSkgOjpzbG90dGVkKGF3Yy1wb3Bib2R5KSB7XFxuICAgICAgICByaWdodDogMTAwJTtcXG4gICAgICAgIGJvdHRvbTogMDtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMHB4KSBzY2FsZSgwKTtcXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbZGlyPVxcXCJsZWZ0Ym90dG9tXFxcIl0pIDo6c2xvdHRlZChhd2MtcG9wYm9keVtvcGVuXSksXFxuICAgIDpob3N0KFtkaXI9XFxcImxlZnRib3R0b21cXFwiXVt0cmlnZ2VyPVxcXCJob3ZlclxcXCJdOm5vdChbZGlzYWJsZWRdKTpob3ZlcikgOjpzbG90dGVkKGF3Yy1wb3Bib2R5KSxcXG4gICAgOmhvc3QoW2Rpcj1cXFwibGVmdGJvdHRvbVxcXCJdW3RyaWdnZXI9XFxcImZvY3VzXFxcIl06bm90KFtkaXNhYmxlZF0pOmZvY3VzLXdpdGhpbikgOjpzbG90dGVkKGF3Yy1wb3Bib2R5KSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTBweCkgc2NhbGUoMSk7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW2Rpcj1cXFwidG9wbGVmdFxcXCJdKSA6OnNsb3R0ZWQoYXdjLXBvcGJvZHkpIHtcXG4gICAgICAgIGJvdHRvbTogMTAwJTtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMTBweCkgc2NhbGUoMCk7XFxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbZGlyPVxcXCJ0b3BsZWZ0XFxcIl0pIDo6c2xvdHRlZChhd2MtcG9wYm9keVtvcGVuXSksXFxuICAgIDpob3N0KFtkaXI9XFxcInRvcGxlZnRcXFwiXVt0cmlnZ2VyPVxcXCJob3ZlclxcXCJdOm5vdChbZGlzYWJsZWRdKTpob3ZlcikgOjpzbG90dGVkKGF3Yy1wb3Bib2R5KSxcXG4gICAgOmhvc3QoW2Rpcj1cXFwidG9wbGVmdFxcXCJdW3RyaWdnZXI9XFxcImZvY3VzXFxcIl06bm90KFtkaXNhYmxlZF0pOmZvY3VzLXdpdGhpbikgOjpzbG90dGVkKGF3Yy1wb3Bib2R5KSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMTBweCkgc2NhbGUoMSk7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW2Rpcj1cXFwidG9wcmlnaHRcXFwiXSkgOjpzbG90dGVkKGF3Yy1wb3Bib2R5KSB7XFxuICAgICAgICBib3R0b206IDEwMCU7XFxuICAgICAgICByaWdodDogMDtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xMHB4KSBzY2FsZSgwKTtcXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbZGlyPVxcXCJ0b3ByaWdodFxcXCJdKSA6OnNsb3R0ZWQoYXdjLXBvcGJvZHlbb3Blbl0pLFxcbiAgICA6aG9zdChbZGlyPVxcXCJ0b3ByaWdodFxcXCJdW3RyaWdnZXI9XFxcImhvdmVyXFxcIl06bm90KFtkaXNhYmxlZF0pOmhvdmVyKSA6OnNsb3R0ZWQoYXdjLXBvcGJvZHkpLFxcbiAgICA6aG9zdChbZGlyPVxcXCJ0b3ByaWdodFxcXCJdW3RyaWdnZXI9XFxcImZvY3VzXFxcIl06bm90KFtkaXNhYmxlZF0pOmZvY3VzLXdpdGhpbikgOjpzbG90dGVkKGF3Yy1wb3Bib2R5KSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMTBweCkgc2NhbGUoMSk7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW2Rpcj1cXFwicmlnaHR0b3BcXFwiXSkgOjpzbG90dGVkKGF3Yy1wb3Bib2R5KSB7XFxuICAgICAgICBsZWZ0OiAxMDAlO1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTBweCkgc2NhbGUoMCk7XFxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcDtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbZGlyPVxcXCJyaWdodHRvcFxcXCJdKSA6OnNsb3R0ZWQoYXdjLXBvcGJvZHlbb3Blbl0pLFxcbiAgICA6aG9zdChbZGlyPVxcXCJyaWdodHRvcFxcXCJdW3RyaWdnZXI9XFxcImhvdmVyXFxcIl06bm90KFtkaXNhYmxlZF0pOmhvdmVyKSA6OnNsb3R0ZWQoYXdjLXBvcGJvZHkpLFxcbiAgICA6aG9zdChbZGlyPVxcXCJyaWdodHRvcFxcXCJdW3RyaWdnZXI9XFxcImZvY3VzXFxcIl06bm90KFtkaXNhYmxlZF0pOmZvY3VzLXdpdGhpbikgOjpzbG90dGVkKGF3Yy1wb3Bib2R5KSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMHB4KSBzY2FsZSgxKTtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbZGlyPVxcXCJyaWdodGJvdHRvbVxcXCJdKSA6OnNsb3R0ZWQoYXdjLXBvcGJvZHkpIHtcXG4gICAgICAgIGxlZnQ6IDEwMCU7XFxuICAgICAgICBib3R0b206IDA7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMHB4KSBzY2FsZSgwKTtcXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFtkaXI9XFxcInJpZ2h0Ym90dG9tXFxcIl0pIDo6c2xvdHRlZChhd2MtcG9wYm9keVtvcGVuXSksXFxuICAgIDpob3N0KFtkaXI9XFxcInJpZ2h0Ym90dG9tXFxcIl1bdHJpZ2dlcj1cXFwiaG92ZXJcXFwiXTpub3QoW2Rpc2FibGVkXSk6aG92ZXIpIDo6c2xvdHRlZChhd2MtcG9wYm9keSksXFxuICAgIDpob3N0KFtkaXI9XFxcInJpZ2h0Ym90dG9tXFxcIl1bdHJpZ2dlcj1cXFwiZm9jdXNcXFwiXTpub3QoW2Rpc2FibGVkXSk6Zm9jdXMtd2l0aGluKSA6OnNsb3R0ZWQoYXdjLXBvcGJvZHkpIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwcHgpIHNjYWxlKDEpO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFtkaXI9XFxcImJvdHRvbWxlZnRcXFwiXSkgOjpzbG90dGVkKGF3Yy1wb3Bib2R5KSxcXG4gICAgOmhvc3QoOm5vdChbZGlyXSkpIDo6c2xvdHRlZChhd2MtcG9wYm9keSkge1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIHRvcDogMTAwJTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDEwcHgpIHNjYWxlKDApO1xcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoOm5vdChbZGlyXSkpIDo6c2xvdHRlZChhd2MtcG9wYm9keVtvcGVuXSksXFxuICAgIDpob3N0KDpub3QoW2Rpcl0pW3RyaWdnZXI9XFxcImhvdmVyXFxcIl06bm90KFtkaXNhYmxlZF0pOmhvdmVyKSA6OnNsb3R0ZWQoYXdjLXBvcGJvZHkpLFxcbiAgICA6aG9zdCg6bm90KFtkaXJdKVt0cmlnZ2VyPVxcXCJmb2N1c1xcXCJdOm5vdChbZGlzYWJsZWRdKTpmb2N1cy13aXRoaW4pIDo6c2xvdHRlZChhd2MtcG9wYm9keSksXFxuICAgIDpob3N0KFtkaXI9XFxcImJvdHRvbWxlZnRcXFwiXSkgOjpzbG90dGVkKGF3Yy1wb3Bib2R5W29wZW5dKSxcXG4gICAgOmhvc3QoW2Rpcj1cXFwiYm90dG9tbGVmdFxcXCJdW3RyaWdnZXI9XFxcImhvdmVyXFxcIl06bm90KFtkaXNhYmxlZF0pOmhvdmVyKSA6OnNsb3R0ZWQoYXdjLXBvcGJvZHkpLFxcbiAgICA6aG9zdChbZGlyPVxcXCJib3R0b21sZWZ0XFxcIl1bdHJpZ2dlcj1cXFwiZm9jdXNcXFwiXTpub3QoW2Rpc2FibGVkXSk6Zm9jdXMtd2l0aGluKSA6OnNsb3R0ZWQoYXdjLXBvcGJvZHkpIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDEwcHgpIHNjYWxlKDEpO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFtkaXI9XFxcImJvdHRvbXJpZ2h0XFxcIl0pIDo6c2xvdHRlZChhd2MtcG9wYm9keSkge1xcbiAgICAgICAgcmlnaHQ6IDA7XFxuICAgICAgICB0b3A6IDEwMCU7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxMHB4KSBzY2FsZSgwKTtcXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IHRvcDtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbZGlyPVxcXCJib3R0b21yaWdodFxcXCJdKSA6OnNsb3R0ZWQoYXdjLXBvcGJvZHlbb3Blbl0pLFxcbiAgICA6aG9zdChbZGlyPVxcXCJib3R0b21yaWdodFxcXCJdW3RyaWdnZXI9XFxcImhvdmVyXFxcIl06bm90KFtkaXNhYmxlZF0pOmhvdmVyKSA6OnNsb3R0ZWQoYXdjLXBvcGJvZHkpLFxcbiAgICA6aG9zdChbZGlyPVxcXCJib3R0b21yaWdodFxcXCJdW3RyaWdnZXI9XFxcImZvY3VzXFxcIl06bm90KFtkaXNhYmxlZF0pOmZvY3VzLXdpdGhpbikgOjpzbG90dGVkKGF3Yy1wb3Bib2R5KSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxMHB4KSBzY2FsZSgxKTtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbdHJpZ2dlcj1cXFwiY29udGV4dG1lbnVcXFwiXSkgOjpzbG90dGVkKGF3Yy1wb3Bib2R5KSB7XFxuICAgICAgICByaWdodDogYXV0bztcXG4gICAgICAgIGJvdHRvbTogYXV0bztcXG4gICAgICAgIGxlZnQ6IHZhcigtLXgsIDApO1xcbiAgICAgICAgdG9wOiB2YXIoLS15LCAxMDAlKTtcXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNXB4LCA1cHgpIHNjYWxlKDApO1xcbiAgICAgICAgdHJhbnNpdGlvbjogLjE1cztcXG4gICAgfVxcblxcbiAgICA6aG9zdChbdHJpZ2dlcj1cXFwiY29udGV4dG1lbnVcXFwiXSkgOjpzbG90dGVkKGF3Yy1wb3Bib2R5W29wZW5dKSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1cHgsIDVweCkgc2NhbGUoMSk7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QgOjpzbG90dGVkKGF3Yy1wb3Bib2R5W29wZW5dKSxcXG4gICAgOmhvc3QoW3RyaWdnZXI9XFxcImhvdmVyXFxcIl06bm90KFtkaXNhYmxlZF0pOmhvdmVyKSA6OnNsb3R0ZWQoYXdjLXBvcGJvZHkpLFxcbiAgICA6aG9zdChbdHJpZ2dlcj1cXFwiZm9jdXNcXFwiXTpub3QoW2Rpc2FibGVkXSk6Zm9jdXMtd2l0aGluKSA6OnNsb3R0ZWQoYXdjLXBvcGJvZHkpIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICB9XFxuXFxuICAgIHNsb3Qge1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcXG4gICAgfVxcbjwvc3R5bGU+XFxuPHNsb3Q+PC9zbG90PlwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3R5bGU+XFxuICAgIDpob3N0IHtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1mb250Q29sb3IsICMzMzMpO1xcbiAgICAgICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbZGlzYWJsZWRdKSB7XFxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgICAgIG9wYWNpdHk6IC42O1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFtkaXNhYmxlZF0pIGxhYmVsIHtcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbiAgICB9XFxuXFxuICAgICNyYWRpbyB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBjbGlwOiByZWN0KDAsIDAsIDAsIDApO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KDpmb2N1cy13aXRoaW4pIC5jaGVrZWQsXFxuICAgIDpob3N0KDpub3QoW2Rpc2FibGVkXSkpIGxhYmVsOmhvdmVyIC5jaGVrZWQge1xcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10aGVtZUNvbG9yLCAjNDJiOTgzKTtcXG4gICAgICAgIC8qYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLDAsMCwwLjEpOyovXFxuICAgICAgICB6LWluZGV4OiAxO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFtkaXNhYmxlZF0pIC5jaGVrZWQge1xcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuMSk7XFxuICAgIH1cXG5cXG4gICAgbGFiZWwge1xcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgb3V0bGluZTogMDtcXG4gICAgfVxcblxcbiAgICAuY2hla2VkIHtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICB3aWR0aDogMTZweDtcXG4gICAgICAgIGhlaWdodDogMTZweDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXJDb2xvciwgcmdiYSgwLCAwLCAwLCAuMikpO1xcbiAgICAgICAgdHJhbnNpdGlvbjogLjNzO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAuNWVtO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KDplbXB0eSkgLmNoZWtlZCB7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuICAgIH1cXG5cXG4gICAgLmNoZWtlZDo6YmVmb3JlIHtcXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgICAgd2lkdGg6IDhweDtcXG4gICAgICAgIGhlaWdodDogOHB4O1xcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWVDb2xvciwgIzQyYjk4Myk7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICAgICAgdHJhbnNpdGlvbjogLjJzIGN1YmljLWJlemllciguMTIsIC40LCAuMjksIDEuNDYpIC4xcztcXG4gICAgfVxcblxcbiAgICAuY2hla2VkOjphZnRlciB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBjb250ZW50OiAnJztcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWVDb2xvciwgIzQyYjk4Myk7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICBvcGFjaXR5OiAuMjtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgICAgICB6LWluZGV4OiAtMTtcXG4gICAgICAgIHRyYW5zaXRpb246IC4ycyBjdWJpYy1iZXppZXIoLjEyLCAuNCwgLjI5LCAxLjQ2KSAuMXM7XFxuICAgIH1cXG5cXG4gICAgI3JhZGlvOmZvY3VzLXZpc2libGUrbGFiZWwgLmNoZWtlZDo6YWZ0ZXIge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgyLjUpO1xcbiAgICB9XFxuXFxuICAgICNyYWRpbzpjaGVja2VkK2xhYmVsIC5jaGVrZWQ6OmJlZm9yZSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB9XFxuXFxuICAgICNyYWRpbzpjaGVja2VkK2xhYmVsIC5jaGVrZWQge1xcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10aGVtZUNvbG9yLCAjNDJiOTgzKTtcXG4gICAgfVxcbjwvc3R5bGU+XFxuPGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiBpZD1cXFwicmFkaW9cXFwiIC8+XFxuPGxhYmVsIGlkPVxcXCJsYWJlbFxcXCIgZm9yPVxcXCJyYWRpb1xcXCI+XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJjaGVrZWRcXFwiPjwvc3Bhbj5cXG4gICAgPHNsb3Q+PC9zbG90PlxcbjwvbGFiZWw+XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdHlsZT5cXG4gICAgOmhvc3Qge1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICBkaXJlY3Rpb246IHJ0bDtcXG4gICAgICAgIGNvbG9yOiAjZWVlO1xcbiAgICB9XFxuXFxuICAgIGxhYmVsIHtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDA7XFxuICAgICAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICB9XFxuXFxuICAgIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKVxcbiAgICB9XFxuXFxuICAgIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl06Y2hlY2tlZH4uc3Rhci1pdGVtIHtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS10aGVtZUNvbG9yLCAjNDJiOTgzKTtcXG4gICAgfVxcblxcbiAgICAuc3Rhci1pdGVtOmhvdmVyIGF3Yy1pY29uIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKVxcbiAgICB9XFxuXFxuICAgIDpob3N0KDpub3QoW2Rpc2FibGVkXSk6aG92ZXIpIGF3Yy10b29sdGlwLnN0YXItaXRlbSB7XFxuICAgICAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgfVxcblxcbiAgICA6aG9zdCg6bm90KFtkaXNhYmxlZF0pKSBhd2MtdG9vbHRpcC5zdGFyLWl0ZW06aG92ZXIsXFxuICAgIDpob3N0KDpub3QoW2Rpc2FibGVkXSkpIGF3Yy10b29sdGlwLnN0YXItaXRlbTpob3Zlcn4uc3Rhci1pdGVtIHtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS10aGVtZUNvbG9yLCAjNDJiOTgzKTtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbZGlzYWJsZWRdKSBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbZGlzYWJsZWRdKSBsYWJlbCB7XFxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgfVxcbjwvc3R5bGU+XFxuPGlucHV0IHRhYmluZGV4PVxcXCI1XFxcIiB0eXBlPVxcXCJyYWRpb1xcXCIgbmFtZT1cXFwiaXRlbVxcXCIgaWQ9XFxcIml0ZW0wNVxcXCIgdmFsdWU9XFxcIjVcXFwiIC8+XFxuPGF3Yy10b29sdGlwIGNsYXNzPVxcXCJzdGFyLWl0ZW1cXFwiPlxcbiAgICA8bGFiZWwgZm9yPVxcXCJpdGVtMDVcXFwiPlxcbiAgICAgICAgPGF3Yy1pY29uPjwvYXdjLWljb24+XFxuICAgIDwvbGFiZWw+XFxuPC9hd2MtdG9vbHRpcD5cXG48aW5wdXQgdGFiaW5kZXg9XFxcIjRcXFwiIHR5cGU9XFxcInJhZGlvXFxcIiBuYW1lPVxcXCJpdGVtXFxcIiBpZD1cXFwiaXRlbTA0XFxcIiB2YWx1ZT1cXFwiNFxcXCIgLz5cXG48YXdjLXRvb2x0aXAgY2xhc3M9XFxcInN0YXItaXRlbVxcXCI+XFxuICAgIDxsYWJlbCBmb3I9XFxcIml0ZW0wNFxcXCI+XFxuICAgICAgICA8YXdjLWljb24+PC9hd2MtaWNvbj5cXG4gICAgPC9sYWJlbD5cXG48L2F3Yy10b29sdGlwPlxcbjxpbnB1dCB0YWJpbmRleD1cXFwiM1xcXCIgdHlwZT1cXFwicmFkaW9cXFwiIG5hbWU9XFxcIml0ZW1cXFwiIGlkPVxcXCJpdGVtMDNcXFwiIHZhbHVlPVxcXCIzXFxcIiAvPlxcbjxhd2MtdG9vbHRpcCBjbGFzcz1cXFwic3Rhci1pdGVtXFxcIj5cXG4gICAgPGxhYmVsIGZvcj1cXFwiaXRlbTAzXFxcIj5cXG4gICAgICAgIDxhd2MtaWNvbj48L2F3Yy1pY29uPlxcbiAgICA8L2xhYmVsPlxcbjwvYXdjLXRvb2x0aXA+XFxuPGlucHV0IHRhYmluZGV4PVxcXCIyXFxcIiB0eXBlPVxcXCJyYWRpb1xcXCIgbmFtZT1cXFwiaXRlbVxcXCIgaWQ9XFxcIml0ZW0wMlxcXCIgdmFsdWU9XFxcIjJcXFwiIC8+XFxuPGF3Yy10b29sdGlwIGNsYXNzPVxcXCJzdGFyLWl0ZW1cXFwiPlxcbiAgICA8bGFiZWwgZm9yPVxcXCJpdGVtMDJcXFwiPlxcbiAgICAgICAgPGF3Yy1pY29uPjwvYXdjLWljb24+XFxuICAgIDwvbGFiZWw+XFxuPC9hd2MtdG9vbHRpcD5cXG48aW5wdXQgdGFiaW5kZXg9XFxcIjFcXFwiIHR5cGU9XFxcInJhZGlvXFxcIiBuYW1lPVxcXCJpdGVtXFxcIiBpZD1cXFwiaXRlbTAxXFxcIiB2YWx1ZT1cXFwiMVxcXCIgLz5cXG48YXdjLXRvb2x0aXAgY2xhc3M9XFxcInN0YXItaXRlbVxcXCI+XFxuICAgIDxsYWJlbCBmb3I9XFxcIml0ZW0wMVxcXCI+XFxuICAgICAgICA8YXdjLWljb24+PC9hd2MtaWNvbj5cXG4gICAgPC9sYWJlbD5cXG48L2F3Yy10b29sdGlwPlwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3R5bGU+XFxuICAgIDpob3N0IHtcXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgcGFkZGluZzogMCA1cHg7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW3ZlcnRpY2FsXSkge1xcbiAgICAgICAgaGVpZ2h0OnZhcigtLWhlaWdodCwgMzAwcHgpO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFtkaXNhYmxlZF0pIHtcXG4gICAgICAgIG9wYWNpdHk6IC44O1xcbiAgICAgICAgLS10aGVtZUNvbG9yOiAjOTk5O1xcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbZGlzYWJsZWRdKSBpbnB1dFt0eXBlPVxcXCJyYW5nZVxcXCJdIHtcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB9XFxuXFxuICAgICNzbGlkZXItdG9vbHRpcCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgcGFkZGluZzogNXB4IDA7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIG1hcmdpbjogYXV0bztcXG4gICAgfVxcblxcbiAgICA6Oi1tb3otZm9jdXMtaW5uZXIsXFxuICAgIDo6LW1vei1mb2N1cy1vdXRlciB7XFxuICAgICAgICBib3JkZXI6IDA7XFxuICAgICAgICBvdXRsaW5lOiAwO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFtzaG93dGlwc10pIHtcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxuICAgIH1cXG5cXG4gICAgaW5wdXRbdHlwZT1cXFwicmFuZ2VcXFwiXSB7XFxuICAgICAgICBwb2ludGVyLWV2ZW50czogYWxsO1xcbiAgICAgICAgbWFyZ2luOiAwIC01cHg7XFxuICAgICAgICB3aWR0aDogY2FsYygxMDAlICsgMTBweCk7XFxuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAgICBvdXRsaW5lOiAwO1xcbiAgICAgICAgaGVpZ2h0OiAxMnB4O1xcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgfVxcblxcbiAgICBpbnB1dFt0eXBlPVxcXCJyYW5nZVxcXCJdOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjayB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIGhlaWdodDogMnB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10aGVtZUNvbG9yLCAjNDJiOTgzKSBjYWxjKDEwMCUgKiB2YXIoLS1wZXJjZW50KSksIHJnYmEoMCwgMCwgMCwgLjEpIDAlKVxcbiAgICB9XFxuXFxuICAgIGlucHV0W3R5cGU9XFxcInJhbmdlXFxcIl06Oi1tb3otcmFuZ2UtcHJvZ3Jlc3Mge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBoZWlnaHQ6IDJweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgICAgIG91dGxpbmU6IDA7XFxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZUNvbG9yLCAjNDJiOTgzKVxcbiAgICB9XFxuXFxuICAgIGlucHV0W3R5cGU9XFxcInJhbmdlXFxcIl06Oi1tb3otcmFuZ2UtdHJhY2sge1xcbiAgICAgICAgaGVpZ2h0OiAycHg7XFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC4xKTtcXG4gICAgfVxcblxcbiAgICBpbnB1dFt0eXBlPVxcXCJyYW5nZVxcXCJdOjotd2Via2l0LXNsaWRlci10aHVtYiB7XFxuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS10aGVtZUNvbG9yLCAjNDJiOTgzKTtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIG1hcmdpbi10b3A6IC00cHg7XFxuICAgICAgICB3aWR0aDogMTBweDtcXG4gICAgICAgIGhlaWdodDogMTBweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXRoZW1lQ29sb3IsICM0MmI5ODMpO1xcbiAgICAgICAgdHJhbnNpdGlvbjogLjJzIGN1YmljLWJlemllciguMTIsIC40LCAuMjksIDEuNDYpO1xcbiAgICB9XFxuXFxuICAgIGlucHV0W3R5cGU9XFxcInJhbmdlXFxcIl06Oi1tb3otcmFuZ2UtdGh1bWIge1xcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tdGhlbWVDb2xvciwgIzQyYjk4Myk7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICB3aWR0aDogMTBweDtcXG4gICAgICAgIGhlaWdodDogMTBweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXRoZW1lQ29sb3IsICM0MmI5ODMpO1xcbiAgICAgICAgdHJhbnNpdGlvbjogLjJzIGN1YmljLWJlemllciguMTIsIC40LCAuMjksIDEuNDYpO1xcbiAgICB9XFxuXFxuICAgIGlucHV0W3R5cGU9XFxcInJhbmdlXFxcIl06Zm9jdXMge1xcbiAgICAgICAgei1pbmRleDogMjtcXG4gICAgfVxcblxcbiAgICBpbnB1dFt0eXBlPVxcXCJyYW5nZVxcXCJdOjotd2Via2l0LXNsaWRlci10aHVtYjphY3RpdmUsXFxuICAgIGlucHV0W3R5cGU9XFxcInJhbmdlXFxcIl06Zm9jdXM6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgIH1cXG5cXG4gICAgaW5wdXRbdHlwZT1cXFwicmFuZ2VcXFwiXTo6LW1vei1yYW5nZS10aHVtYjphY3RpdmUsXFxuICAgIGlucHV0W3R5cGU9XFxcInJhbmdlXFxcIl06Zm9jdXM6Oi1tb3otcmFuZ2UtdGh1bWIge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbdmVydGljYWxdKSAjc2xpZGVyLXRvb2x0aXAge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiA1MCU7XFxuICAgICAgICBsZWZ0OiA1MCU7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoLTkwZGVnKTtcXG4gICAgICAgIHdpZHRoOiBjYWxjKHZhcigtLWgsIDMwMHB4KSAtIDEwcHgpXFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW3ZlcnRpY2FsXSkgI3NsaWRlci10b29sdGlwOjpiZWZvcmUge1xcbiAgICAgICAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1scjtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHggNnB4O1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFt2ZXJ0aWNhbF0pIHtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgd2lkdGg6IDIwcHg7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW3ZlcnRpY2FsXSkgYXdjLXRvb2x0aXA6OmJlZm9yZSxcXG4gICAgOmhvc3QoW3ZlcnRpY2FsXSkgYXdjLXRvb2x0aXA6OmFmdGVyIHtcXG4gICAgICAgIGxlZnQ6IGNhbGModmFyKC0tcGVyY2VudCwgLjUpICogMTAwJSArIDVweCk7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoOmZvY3VzLXdpdGhpbikgI3NsaWRlci10b29sdGlwLFxcbiAgICA6aG9zdCg6aG92ZXIpICNzbGlkZXItdG9vbHRpcCB7XFxuICAgICAgICB6LWluZGV4OiAxMFxcbiAgICB9XFxuPC9zdHlsZT5cXG48YXdjLXRvb2x0aXAgaWQ9J3NsaWRlci10b29sdGlwJz5cXG4gICAgPGlucHV0IGlkPSdzbGlkZXInICB0eXBlPSdyYW5nZScgLz5cXG48L2F3Yy10b29sdGlwPlwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3R5bGU+XFxuICAgIDpob3N0IHtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW2Rpc2FibGVkXSkge1xcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgICAgICBvcGFjaXR5OiAuNjtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbZGlzYWJsZWRdKSBsYWJlbCB7XFxuICAgICAgICBwb2ludGVyLWV2ZW50czogYWxsO1xcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gICAgfVxcblxcbiAgICAjc3dpdGNoIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoOmZvY3VzLXdpdGhpbikgbGFiZWw6OmFmdGVyLFxcbiAgICA6aG9zdCg6YWN0aXZlKSA6OmFmdGVyIHtcXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXRoZW1lQ29sb3IsICM0MmI5ODMpO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KDpmb2N1cy13aXRoaW4pICNzd2l0Y2gsXFxuICAgIDpob3N0KDphY3RpdmUpICNzd2l0Y2gge1xcbiAgICAgICAgei1pbmRleDogMlxcbiAgICB9XFxuXFxuICAgIGxhYmVsIHtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICB3aWR0aDogMi40ZW07XFxuICAgICAgICBoZWlnaHQ6IDEuMmVtO1xcbiAgICAgICAgcGFkZGluZzogLjEyNWVtO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMS4yZW07XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjZWVlO1xcbiAgICAgICAgdHJhbnNpdGlvbjogLjNzIHdpZHRoLCAuM3MgaGVpZ2h0LCAuM3MgYmFja2dyb3VuZC1jb2xvcjtcXG4gICAgfVxcblxcbiAgICBsYWJlbDo6YmVmb3JlIHtcXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgICAgZmxleDogMDtcXG4gICAgICAgIHRyYW5zaXRpb246IC4ycyBjdWJpYy1iZXppZXIoLjEyLCAuNCwgLjI5LCAxLjQ2KSBmbGV4O1xcbiAgICB9XFxuXFxuICAgIGxhYmVsOjphZnRlciB7XFxuICAgICAgICBjb250ZW50OiAnJztcXG4gICAgICAgIHdpZHRoOiAuNGVtO1xcbiAgICAgICAgaGVpZ2h0OiAuNGVtO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMS4yZW07XFxuICAgICAgICBib3JkZXI6IC40ZW0gc29saWQgI2ZmZjtcXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgICAgICB0cmFuc2l0aW9uOiAuM3MgYmFja2dyb3VuZCwgLjNzIHBhZGRpbmcsIC4zcyB3aWR0aCwgLjNzIGhlaWdodCwgLjNzIGJvcmRlci1yYWRpdXMsIC4zcyBib3JkZXI7XFxuICAgICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDAsIDM1LCAxMSwgMC4yKTtcXG4gICAgfVxcblxcbiAgICBsYWJlbDphY3RpdmU6OmFmdGVyIHtcXG4gICAgICAgIHBhZGRpbmc6IDAgLjNlbTtcXG4gICAgfVxcblxcbiAgICAjc3dpdGNoOmNoZWNrZWQrbGFiZWwge1xcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWVCYWNrZ3JvdW5kLCB2YXIoLS10aGVtZUNvbG9yLCAjNDJiOTgzKSk7XFxuICAgIH1cXG5cXG4gICAgI3N3aXRjaDpjaGVja2VkK2xhYmVsOjpiZWZvcmUge1xcbiAgICAgICAgZmxleDogMTtcXG4gICAgfVxcbjwvc3R5bGU+XFxuPGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiBpZD1cXFwic3dpdGNoXFxcIj48bGFiZWwgZm9yPVxcXCJzd2l0Y2hcXFwiPjwvbGFiZWw+XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzbG90Pjwvc2xvdD5cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN0eWxlPlxcbiAgICA6aG9zdCB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHRleHQtYWxpZ246IHVuc2V0O1xcbiAgICB9XFxuXFxuICAgIC50YWIge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB9XFxuXFxuICAgIC50YWItbmF2LWNvbiB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxuICAgIH1cXG5cXG4gICAgLnRhYi1uYXYge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgfVxcblxcbiAgICAubmF2LWl0ZW0ge1xcbiAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgICAgICBmbGV4LXNocmluazogMDtcXG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoOm5vdChbdHlwZT1cXFwibGluZVxcXCJdKSkgLm5hdi1pdGVtLmFjdGl2ZSB7XFxuICAgICAgICBjb2xvcjogdmFyKC0tdGhlbWVDb2xvciwgIzQyYjk4Myk7XFxuICAgIH1cXG5cXG4gICAgLnRhYi1saW5lIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHdpZHRoOiAwO1xcbiAgICAgICAgbWFyZ2luLXRvcDogLTJweDtcXG4gICAgICAgIGhlaWdodDogMnB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWVDb2xvciwgIzQyYjk4Myk7XFxuICAgICAgICB0cmFuc2l0aW9uOiAuMnM7XFxuICAgIH1cXG5cXG4gICAgLnRhYi1jb250ZW50IHtcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICBmbGV4OiAxO1xcbiAgICAgICAgdHJhbnNpdGlvbjogLjJzO1xcbiAgICB9XFxuXFxuICAgIC50YWItY29udGVudC13cmFwIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIHRyYW5zaXRpb246IC4ycztcXG4gICAgfVxcblxcbiAgICA6aG9zdChbdHlwZT1cXFwiY2FyZFxcXCJdKSAudGFiLWxpbmUsXFxuICAgIDpob3N0KFt0eXBlPVxcXCJsaW5lXFxcIl0pIC50YWItbGluZSB7XFxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW3R5cGU9XFxcImNhcmRcXFwiXSkgLm5hdi1pdGVtIHtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IC41ZW0gLjVlbSAwIDA7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW3R5cGU9XFxcImxpbmVcXFwiXSkgLm5hdi1pdGVtIHtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlclJhZGl1cywgLjI1ZW0pIHZhcigtLWJvcmRlclJhZGl1cywgLjI1ZW0pIDAgMDtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbdHlwZT1cXFwiY2FyZFxcXCJdKSAubmF2LWl0ZW0uYWN0aXZlLFxcbiAgICA6aG9zdChbdHlwZT1cXFwiY2FyZFxcXCJdKSAudGFiLWNvbnRlbnQge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbdHlwZT1cXFwibGluZVxcXCJdKSAubmF2LWl0ZW0uYWN0aXZlIHtcXG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyQ29sb3IsIHJnYmEoMCwgMCwgMCwgLjIpKSB2YXIoLS1ib3JkZXJDb2xvciwgcmdiYSgwLCAwLCAwLCAuMikpIHRyYW5zcGFyZW50O1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFt0eXBlPVxcXCJsaW5lXFxcIl0pIC50YWItbmF2LWNvbiB7XFxuICAgICAgICBvdmVmbG93OiBoaWRkZW47XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW3R5cGU9XFxcImxpbmVcXFwiXSkgLnRhYi1saW5lIHtcXG4gICAgICAgIHRyYW5zaXRpb246IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW3R5cGU9XFxcImxpbmVcXFwiXSkgLnRhYi1saW5lOjpiZWZvcmUsXFxuICAgIDpob3N0KFt0eXBlPVxcXCJsaW5lXFxcIl0pIC50YWItbGluZTo6YWZ0ZXIge1xcbiAgICAgICAgY29udGVudDogJyc7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICAgICAgd2lkdGg6IDk5OTlweDtcXG4gICAgICAgIGhlaWdodDogMXB4O1xcbiAgICAgICAgYm90dG9tOiAwO1xcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYm9yZGVyQ29sb3IsIHJnYmEoMCwgMCwgMCwgLjIpKTtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbdHlwZT1cXFwibGluZVxcXCJdKSAudGFiLWxpbmU6OmJlZm9yZSB7XFxuICAgICAgICByaWdodDogMTAwJTtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbdHlwZT1cXFwibGluZVxcXCJdKSAudGFiLWxpbmU6OmFmdGVyIHtcXG4gICAgICAgIGxlZnQ6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW3R5cGU9XFxcImNhcmRcXFwiXSkgLnRhYi1jb250ZW50LXdyYXAsXFxuICAgIDpob3N0KFt0eXBlPVxcXCJsaW5lXFxcIl0pIC50YWItY29udGVudC13cmFwIHtcXG4gICAgICAgIHRyYW5zaXRpb246IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW2FsaWduPVxcXCJjZW50ZXJcXFwiXSkgLnRhYi1uYXYge1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW2FsaWduPVxcXCJlbmRcXFwiXSkgLnRhYi1uYXYge1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgfVxcblxcbiAgICA6OnNsb3R0ZWQoYXdjLXRhYikge1xcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIH1cXG48L3N0eWxlPlxcbjxzdHlsZSBpZD1cXFwiZmlsdGVyXFxcIj48L3N0eWxlPlxcbjxkaXYgY2xhc3M9XFxcInRhYlxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcInRhYi1uYXYtY29uXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRhYi1uYXZcXFwiIGlkPVxcXCJuYXZcXFwiPjwvZGl2PlxcbiAgICAgICAgPGkgY2xhc3M9XFxcInRhYi1saW5lXFxcIiBpZD1cXFwidGFiLWxpbmVcXFwiPjwvaT5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInRhYi1jb250ZW50XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRhYi1jb250ZW50LXdyYXBcXFwiIGlkPVxcXCJ0YWItY29udGVudFxcXCI+XFxuICAgICAgICAgICAgPHNsb3QgaWQ9XFxcInNsb3RcXFwiPk5FRUQgQ09OVEVOVDwvc2xvdD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG48L2Rpdj5cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN0eWxlPlxcbiAgICA6aG9zdCB7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gICAgfVxcblxcbiAgICA6aG9zdDo6YmVmb3JlLFxcbiAgICA6aG9zdDo6YWZ0ZXIge1xcbiAgICAgICAgY29udGVudDogJyc7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHotaW5kZXg6IDE7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMjBweCk7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4xNXMgLjE1cywgbGVmdCAwcywgdG9wIDBzO1xcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLCByZ2JhKDAsIDAsIDAsIDAuNzUpKTtcXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB9XFxuXFxuICAgIDpob3N0OjpiZWZvcmUge1xcbiAgICAgICAgY29udGVudDogYXR0cihwcmVmaXgpIGF0dHIodGlwcykgYXR0cihzdWZmaXgpO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICAgICAgcGFkZGluZzogNnB4IDEwcHg7XFxuICAgICAgICBsaW5lLWhlaWdodDogMThweDtcXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvciwgcmdiYSgwLCAwLCAwLCAwLjc1KSk7XFxuICAgICAgICBjb2xvcjogI2ZmZjtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgICAgIG1heC13aWR0aDogMjAwcHg7XFxuICAgIH1cXG5cXG4gICAgOmhvc3Q6OmFmdGVyIHtcXG4gICAgICAgIHdpZHRoOiAwO1xcbiAgICAgICAgaGVpZ2h0OiAwO1xcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgIGJvcmRlcjogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFt0aXBzXTpub3QoW3RpcHM9JyddKTpob3Zlcjpub3QoW3Nob3c9ZmFsc2VdKSk6OmJlZm9yZSxcXG4gICAgOmhvc3QoW3RpcHNdOm5vdChbdGlwcz0nJ10pW3Nob3c9dHJ1ZV0pOjpiZWZvcmUsXFxuICAgIDpob3N0KFt0aXBzXTpub3QoW3RpcHM9JyddKTpmb2N1cy13aXRoaW46bm90KFtzaG93PWZhbHNlXSkpOjpiZWZvcmUsXFxuICAgIDpob3N0KFt0aXBzXTpub3QoW3RpcHM9JyddKTpob3Zlcjpub3QoW3Nob3c9ZmFsc2VdKSk6OmFmdGVyLFxcbiAgICA6aG9zdChbdGlwc106bm90KFt0aXBzPScnXSlbc2hvdz10cnVlXSk6OmFmdGVyLFxcbiAgICA6aG9zdChbdGlwc106bm90KFt0aXBzPScnXSk6Zm9jdXMtd2l0aGluOm5vdChbc2hvdz1mYWxzZV0pKTo6YWZ0ZXIge1xcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG5cXG4gICAgLyogdG9wICovXFxuICAgIDpob3N0KFtkaXI9XFxcInRvcFxcXCJdKTo6YmVmb3JlLFxcbiAgICA6aG9zdCg6bm90KFtkaXJdKSk6OmJlZm9yZSxcXG4gICAgOmhvc3QoOm5vdChbZGlyXSkpOjphZnRlcixcXG4gICAgOmhvc3QoW2Rpcj1cXFwidG9wXFxcIl0pOjphZnRlciB7XFxuICAgICAgICBsZWZ0OiBjYWxjKHZhcigtLXBlcmNlbnQsIC41KSAqIDEwMCUpO1xcbiAgICAgICAgYm90dG9tOiAxMDAlO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTIwcHgpO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFtkaXI9XFxcInRvcFxcXCJdKTphZnRlcixcXG4gICAgOmhvc3QoOm5vdChbZGlyXSkpOmFmdGVyIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IC0xMnB4O1xcbiAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogY3VycmVudENvbG9yO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KDpub3QoW2Rpcl0pOmhvdmVyOm5vdChbc2hvdz1mYWxzZV0pKTo6YmVmb3JlLFxcbiAgICA6aG9zdCg6bm90KFtkaXJdKVtzaG93PXRydWVdKTo6YmVmb3JlLFxcbiAgICA6aG9zdCg6bm90KFtkaXJdKTpmb2N1cy13aXRoaW46bm90KFtzaG93PWZhbHNlXSkpOjpiZWZvcmUsXFxuICAgIDpob3N0KDpub3QoW2Rpcl0pOmhvdmVyOm5vdChbc2hvdz1mYWxzZV0pKTo6YWZ0ZXIsXFxuICAgIDpob3N0KDpub3QoW2Rpcl0pW3Nob3c9dHJ1ZV0pOjphZnRlcixcXG4gICAgOmhvc3QoOm5vdChbZGlyXSk6Zm9jdXMtd2l0aGluOm5vdChbc2hvdz1mYWxzZV0pKTo6YWZ0ZXIsXFxuICAgIDpob3N0KFtkaXI9XFxcInRvcFxcXCJdOmhvdmVyOm5vdChbc2hvdz1mYWxzZV0pKTo6YmVmb3JlLFxcbiAgICA6aG9zdChbZGlyPVxcXCJ0b3BcXFwiXVtzaG93PXRydWVdKTo6YmVmb3JlLFxcbiAgICA6aG9zdChbZGlyPVxcXCJ0b3BcXFwiXTpmb2N1cy13aXRoaW46bm90KFtzaG93PWZhbHNlXSkpOjpiZWZvcmUsXFxuICAgIDpob3N0KFtkaXI9XFxcInRvcFxcXCJdOmhvdmVyOm5vdChbc2hvdz1mYWxzZV0pKTo6YWZ0ZXIsXFxuICAgIDpob3N0KFtkaXI9XFxcInRvcFxcXCJdW3Nob3c9dHJ1ZV0pOjphZnRlcixcXG4gICAgOmhvc3QoW2Rpcj1cXFwidG9wXFxcIl06Zm9jdXMtd2l0aGluOm5vdChbc2hvdz1mYWxzZV0pKTo6YWZ0ZXIge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTEwcHgpO1xcbiAgICB9XFxuXFxuICAgIC8qIHJpZ2h0ICovXFxuICAgIDpob3N0KFtkaXI9XFxcInJpZ2h0XFxcIl0pOjpiZWZvcmUsXFxuICAgIDpob3N0KFtkaXI9XFxcInJpZ2h0XFxcIl0pOjphZnRlciB7XFxuICAgICAgICBsZWZ0OiAxMDAlO1xcbiAgICAgICAgdG9wOiA1MCU7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyMHB4LCAtNTAlKTtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbZGlyPVxcXCJyaWdodFxcXCJdKTphZnRlciB7XFxuICAgICAgICBtYXJnaW4tbGVmdDogLTEycHg7XFxuICAgICAgICBib3JkZXItcmlnaHQtY29sb3I6IGN1cnJlbnRDb2xvcjtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbZGlyPVxcXCJyaWdodFxcXCJdOmhvdmVyOm5vdChbc2hvdz1mYWxzZV0pKTo6YmVmb3JlLFxcbiAgICA6aG9zdChbZGlyPVxcXCJyaWdodFxcXCJdW3Nob3c9dHJ1ZV0pOjpiZWZvcmUsXFxuICAgIDpob3N0KFtkaXI9XFxcInJpZ2h0XFxcIl06Zm9jdXMtd2l0aGluOm5vdChbc2hvdz1mYWxzZV0pKTo6YmVmb3JlLFxcbiAgICA6aG9zdChbZGlyPVxcXCJyaWdodFxcXCJdOmhvdmVyOm5vdChbc2hvdz1mYWxzZV0pKTo6YWZ0ZXIsXFxuICAgIDpob3N0KFtkaXI9XFxcInJpZ2h0XFxcIl1bc2hvdz10cnVlXSk6OmFmdGVyLFxcbiAgICA6aG9zdChbZGlyPVxcXCJyaWdodFxcXCJdOmZvY3VzLXdpdGhpbjpub3QoW3Nob3c9ZmFsc2VdKSk6OmFmdGVyIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwcHgsIC01MCUpO1xcbiAgICB9XFxuXFxuICAgIC8qIGJvdHRvbSAqL1xcbiAgICA6aG9zdChbZGlyPVxcXCJib3R0b21cXFwiXSk6OmJlZm9yZSxcXG4gICAgOmhvc3QoW2Rpcj1cXFwiYm90dG9tXFxcIl0pOjphZnRlciB7XFxuICAgICAgICBsZWZ0OiBjYWxjKHZhcigtLXBlcmNlbnQsIC41KSAqIDEwMCUpO1xcbiAgICAgICAgdG9wOiAxMDAlO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMjBweCk7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW2Rpcj1cXFwiYm90dG9tXFxcIl0pOjphZnRlciB7XFxuICAgICAgICBtYXJnaW4tdG9wOiAtMTJweDtcXG4gICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IGN1cnJlbnRDb2xvcjtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbZGlyPVxcXCJib3R0b21cXFwiXTpob3Zlcjpub3QoW3Nob3c9ZmFsc2VdKSk6OmJlZm9yZSxcXG4gICAgOmhvc3QoW2Rpcj1cXFwiYm90dG9tXFxcIl1bc2hvdz10cnVlXSk6OmJlZm9yZSxcXG4gICAgOmhvc3QoW2Rpcj1cXFwiYm90dG9tXFxcIl06Zm9jdXMtd2l0aGluOm5vdChbc2hvdz1mYWxzZV0pKTo6YmVmb3JlLFxcbiAgICA6aG9zdChbZGlyPVxcXCJib3R0b21cXFwiXTpob3Zlcjpub3QoW3Nob3c9ZmFsc2VdKSk6OmFmdGVyLFxcbiAgICA6aG9zdChbZGlyPVxcXCJib3R0b21cXFwiXVtzaG93PXRydWVdKTo6YWZ0ZXIsXFxuICAgIDpob3N0KFtkaXI9XFxcImJvdHRvbVxcXCJdOmZvY3VzLXdpdGhpbjpub3QoW3Nob3c9ZmFsc2VdKSk6OmFmdGVyIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDEwcHgpO1xcbiAgICB9XFxuXFxuICAgIC8qIGxlZnQgKi9cXG4gICAgOmhvc3QoW2Rpcj1cXFwibGVmdFxcXCJdKTo6YmVmb3JlLFxcbiAgICA6aG9zdChbZGlyPVxcXCJsZWZ0XFxcIl0pOjphZnRlciB7XFxuICAgICAgICByaWdodDogMTAwJTtcXG4gICAgICAgIHRvcDogNTAlO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTIwcHgsIC01MCUpO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFtkaXI9XFxcImxlZnRcXFwiXSk6OmFmdGVyIHtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogLTEycHg7XFxuICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogY3VycmVudENvbG9yO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFtkaXI9XFxcImxlZnRcXFwiXTpob3Zlcjpub3QoW3Nob3c9ZmFsc2VdKSk6OmJlZm9yZSxcXG4gICAgOmhvc3QoW2Rpcj1cXFwibGVmdFxcXCJdW3Nob3c9dHJ1ZV0pOjpiZWZvcmUsXFxuICAgIDpob3N0KFtkaXI9XFxcImxlZnRcXFwiXTpmb2N1cy13aXRoaW46bm90KFtzaG93PWZhbHNlXSkpOjpiZWZvcmUsXFxuICAgIDpob3N0KFtkaXI9XFxcImxlZnRcXFwiXTpob3Zlcjpub3QoW3Nob3c9ZmFsc2VdKSk6OmFmdGVyLFxcbiAgICA6aG9zdChbZGlyPVxcXCJsZWZ0XFxcIl1bc2hvdz10cnVlXSk6OmFmdGVyLFxcbiAgICA6aG9zdChbZGlyPVxcXCJsZWZ0XFxcIl06Zm9jdXMtd2l0aGluOm5vdChbc2hvdz1mYWxzZV0pKTo6YWZ0ZXIge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwcHgsIC01MCUpO1xcbiAgICB9XFxuXFxuICAgIC8qIHRvcGxlZnQgKi9cXG4gICAgOmhvc3QoW2Rpcj1cXFwidG9wbGVmdFxcXCJdKTo6YmVmb3JlLFxcbiAgICA6aG9zdChbZGlyPVxcXCJ0b3BsZWZ0XFxcIl0pOjphZnRlciB7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgYm90dG9tOiAxMDAlO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTIwcHgpO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFtkaXI9XFxcInRvcGxlZnRcXFwiXSk6YWZ0ZXIge1xcbiAgICAgICAgbGVmdDogMTBweDtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IC0xMnB4O1xcbiAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogY3VycmVudENvbG9yO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFtkaXI9XFxcInRvcGxlZnRcXFwiXTpob3Zlcjpub3QoW3Nob3c9ZmFsc2VdKSk6OmJlZm9yZSxcXG4gICAgOmhvc3QoW2Rpcj1cXFwidG9wbGVmdFxcXCJdW3Nob3c9dHJ1ZV0pOjpiZWZvcmUsXFxuICAgIDpob3N0KFtkaXI9XFxcInRvcGxlZnRcXFwiXTpmb2N1cy13aXRoaW46bm90KFtzaG93PWZhbHNlXSkpOjpiZWZvcmUsXFxuICAgIDpob3N0KFtkaXI9XFxcInRvcGxlZnRcXFwiXTpob3Zlcjpub3QoW3Nob3c9ZmFsc2VdKSk6OmFmdGVyLFxcbiAgICA6aG9zdChbZGlyPVxcXCJ0b3BsZWZ0XFxcIl1bc2hvdz10cnVlXSk6OmFmdGVyLFxcbiAgICA6aG9zdChbZGlyPVxcXCJ0b3BsZWZ0XFxcIl06Zm9jdXMtd2l0aGluOm5vdChbc2hvdz1mYWxzZV0pKTo6YWZ0ZXIge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTEwcHgpO1xcbiAgICB9XFxuXFxuICAgIC8qIHRvcHJpZ2h0ICovXFxuICAgIDpob3N0KFtkaXI9XFxcInRvcHJpZ2h0XFxcIl0pOjpiZWZvcmUsXFxuICAgIDpob3N0KFtkaXI9XFxcInRvcHJpZ2h0XFxcIl0pOjphZnRlciB7XFxuICAgICAgICByaWdodDogMDtcXG4gICAgICAgIGJvdHRvbTogMTAwJTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0yMHB4KTtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbZGlyPVxcXCJ0b3ByaWdodFxcXCJdKTphZnRlciB7XFxuICAgICAgICByaWdodDogMTBweDtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IC0xMnB4O1xcbiAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogY3VycmVudENvbG9yO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFtkaXI9XFxcInRvcHJpZ2h0XFxcIl06aG92ZXI6bm90KFtzaG93PWZhbHNlXSkpOjpiZWZvcmUsXFxuICAgIDpob3N0KFtkaXI9XFxcInRvcHJpZ2h0XFxcIl1bc2hvdz10cnVlXSk6OmJlZm9yZSxcXG4gICAgOmhvc3QoW2Rpcj1cXFwidG9wcmlnaHRcXFwiXTpmb2N1cy13aXRoaW46bm90KFtzaG93PWZhbHNlXSkpOjpiZWZvcmUsXFxuICAgIDpob3N0KFtkaXI9XFxcInRvcHJpZ2h0XFxcIl06aG92ZXI6bm90KFtzaG93PWZhbHNlXSkpOjphZnRlcixcXG4gICAgOmhvc3QoW2Rpcj1cXFwidG9wcmlnaHRcXFwiXVtzaG93PXRydWVdKTo6YWZ0ZXIsXFxuICAgIDpob3N0KFtkaXI9XFxcInRvcHJpZ2h0XFxcIl06Zm9jdXMtd2l0aGluOm5vdChbc2hvdz1mYWxzZV0pKTo6YWZ0ZXIge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTEwcHgpO1xcbiAgICB9XFxuXFxuICAgIC8qIHJpZ2h0dG9wICovXFxuICAgIDpob3N0KFtkaXI9XFxcInJpZ2h0dG9wXFxcIl0pOjpiZWZvcmUsXFxuICAgIDpob3N0KFtkaXI9XFxcInJpZ2h0dG9wXFxcIl0pOjphZnRlciB7XFxuICAgICAgICBsZWZ0OiAxMDAlO1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjBweCwgMCk7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW2Rpcj1cXFwicmlnaHR0b3BcXFwiXSk6YWZ0ZXIge1xcbiAgICAgICAgdG9wOiAxMHB4O1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xMnB4O1xcbiAgICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiBjdXJyZW50Q29sb3I7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW2Rpcj1cXFwicmlnaHR0b3BcXFwiXTpob3Zlcjpub3QoW3Nob3c9ZmFsc2VdKSk6OmJlZm9yZSxcXG4gICAgOmhvc3QoW2Rpcj1cXFwicmlnaHR0b3BcXFwiXVtzaG93PXRydWVdKTo6YmVmb3JlLFxcbiAgICA6aG9zdChbZGlyPVxcXCJyaWdodHRvcFxcXCJdOmZvY3VzLXdpdGhpbjpub3QoW3Nob3c9ZmFsc2VdKSk6OmJlZm9yZSxcXG4gICAgOmhvc3QoW2Rpcj1cXFwicmlnaHR0b3BcXFwiXTpob3Zlcjpub3QoW3Nob3c9ZmFsc2VdKSk6OmFmdGVyLFxcbiAgICA6aG9zdChbZGlyPVxcXCJyaWdodHRvcFxcXCJdW3Nob3c9dHJ1ZV0pOjphZnRlcixcXG4gICAgOmhvc3QoW2Rpcj1cXFwicmlnaHR0b3BcXFwiXTpmb2N1cy13aXRoaW46bm90KFtzaG93PWZhbHNlXSkpOjphZnRlciB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMHB4LCAwKTtcXG4gICAgfVxcblxcbiAgICAvKiByaWdodGJvdHRvbSAqL1xcbiAgICA6aG9zdChbZGlyPVxcXCJyaWdodGJvdHRvbVxcXCJdKTo6YmVmb3JlLFxcbiAgICA6aG9zdChbZGlyPVxcXCJyaWdodGJvdHRvbVxcXCJdKTo6YWZ0ZXIge1xcbiAgICAgICAgbGVmdDogMTAwJTtcXG4gICAgICAgIGJvdHRvbTogMDtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDIwcHgsIDApO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFtkaXI9XFxcInJpZ2h0Ym90dG9tXFxcIl0pOmFmdGVyIHtcXG4gICAgICAgIGJvdHRvbTogMTBweDtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTJweDtcXG4gICAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogY3VycmVudENvbG9yO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFtkaXI9XFxcInJpZ2h0Ym90dG9tXFxcIl06aG92ZXI6bm90KFtzaG93PWZhbHNlXSkpOjpiZWZvcmUsXFxuICAgIDpob3N0KFtkaXI9XFxcInJpZ2h0Ym90dG9tXFxcIl1bc2hvdz10cnVlXSk6OmJlZm9yZSxcXG4gICAgOmhvc3QoW2Rpcj1cXFwicmlnaHRib3R0b21cXFwiXTpmb2N1cy13aXRoaW46bm90KFtzaG93PWZhbHNlXSkpOjpiZWZvcmUsXFxuICAgIDpob3N0KFtkaXI9XFxcInJpZ2h0Ym90dG9tXFxcIl06aG92ZXI6bm90KFtzaG93PWZhbHNlXSkpOjphZnRlcixcXG4gICAgOmhvc3QoW2Rpcj1cXFwicmlnaHRib3R0b21cXFwiXVtzaG93PXRydWVdKTo6YWZ0ZXIsXFxuICAgIDpob3N0KFtkaXI9XFxcInJpZ2h0Ym90dG9tXFxcIl06Zm9jdXMtd2l0aGluOm5vdChbc2hvdz1mYWxzZV0pKTo6YWZ0ZXIge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTBweCwgMCk7XFxuICAgIH1cXG5cXG4gICAgLyogYm90dG9tbGVmdCAqL1xcbiAgICA6aG9zdChbZGlyPVxcXCJib3R0b21sZWZ0XFxcIl0pOjpiZWZvcmUsXFxuICAgIDpob3N0KFtkaXI9XFxcImJvdHRvbWxlZnRcXFwiXSk6OmFmdGVyIHtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICB0b3A6IDEwMCU7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAyMHB4KTtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbZGlyPVxcXCJib3R0b21sZWZ0XFxcIl0pOjphZnRlciB7XFxuICAgICAgICBsZWZ0OiAxMHB4O1xcbiAgICAgICAgbWFyZ2luLXRvcDogLTEycHg7XFxuICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiBjdXJyZW50Q29sb3I7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW2Rpcj1cXFwiYm90dG9tbGVmdFxcXCJdOmhvdmVyOm5vdChbc2hvdz1mYWxzZV0pKTo6YmVmb3JlLFxcbiAgICA6aG9zdChbZGlyPVxcXCJib3R0b21sZWZ0XFxcIl1bc2hvdz10cnVlXSk6OmJlZm9yZSxcXG4gICAgOmhvc3QoW2Rpcj1cXFwiYm90dG9tbGVmdFxcXCJdOmZvY3VzLXdpdGhpbjpub3QoW3Nob3c9ZmFsc2VdKSk6OmJlZm9yZSxcXG4gICAgOmhvc3QoW2Rpcj1cXFwiYm90dG9tbGVmdFxcXCJdOmhvdmVyOm5vdChbc2hvdz1mYWxzZV0pKTo6YWZ0ZXIsXFxuICAgIDpob3N0KFtkaXI9XFxcImJvdHRvbWxlZnRcXFwiXVtzaG93PXRydWVdKTo6YWZ0ZXIsXFxuICAgIDpob3N0KFtkaXI9XFxcImJvdHRvbWxlZnRcXFwiXTpmb2N1cy13aXRoaW46bm90KFtzaG93PWZhbHNlXSkpOjphZnRlciB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxMHB4KTtcXG4gICAgfVxcblxcbiAgICAvKiBib3R0b21yaWdodCAqL1xcbiAgICA6aG9zdChbZGlyPVxcXCJib3R0b21yaWdodFxcXCJdKTo6YmVmb3JlLFxcbiAgICA6aG9zdChbZGlyPVxcXCJib3R0b21yaWdodFxcXCJdKTo6YWZ0ZXIge1xcbiAgICAgICAgcmlnaHQ6IDA7XFxuICAgICAgICB0b3A6IDEwMCU7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAyMHB4KTtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbZGlyPVxcXCJib3R0b21yaWdodFxcXCJdKTo6YWZ0ZXIge1xcbiAgICAgICAgcmlnaHQ6IDEwcHg7XFxuICAgICAgICBtYXJnaW4tdG9wOiAtMTJweDtcXG4gICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IGN1cnJlbnRDb2xvcjtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbZGlyPVxcXCJib3R0b21yaWdodFxcXCJdOmhvdmVyOm5vdChbc2hvdz1mYWxzZV0pKTo6YmVmb3JlLFxcbiAgICA6aG9zdChbZGlyPVxcXCJib3R0b21yaWdodFxcXCJdW3Nob3c9dHJ1ZV0pOjpiZWZvcmUsXFxuICAgIDpob3N0KFtkaXI9XFxcImJvdHRvbXJpZ2h0XFxcIl06Zm9jdXMtd2l0aGluOm5vdChbc2hvdz1mYWxzZV0pKTo6YmVmb3JlLFxcbiAgICA6aG9zdChbZGlyPVxcXCJib3R0b21yaWdodFxcXCJdOmhvdmVyOm5vdChbc2hvdz1mYWxzZV0pKTo6YWZ0ZXIsXFxuICAgIDpob3N0KFtkaXI9XFxcImJvdHRvbXJpZ2h0XFxcIl1bc2hvdz10cnVlXSk6OmFmdGVyLFxcbiAgICA6aG9zdChbZGlyPVxcXCJib3R0b21yaWdodFxcXCJdOmZvY3VzLXdpdGhpbjpub3QoW3Nob3c9ZmFsc2VdKSk6OmFmdGVyIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDEwcHgpO1xcbiAgICB9XFxuXFxuICAgIC8qIGxlZnR0b3AgKi9cXG4gICAgOmhvc3QoW2Rpcj1cXFwibGVmdHRvcFxcXCJdKTo6YmVmb3JlLFxcbiAgICA6aG9zdChbZGlyPVxcXCJsZWZ0dG9wXFxcIl0pOjphZnRlciB7XFxuICAgICAgICByaWdodDogMTAwJTtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0yMHB4LCAwKTtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbZGlyPVxcXCJsZWZ0dG9wXFxcIl0pOmFmdGVyIHtcXG4gICAgICAgIHRvcDogMTBweDtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogLTEycHg7XFxuICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogY3VycmVudENvbG9yO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFtkaXI9XFxcImxlZnR0b3BcXFwiXTpob3Zlcjpub3QoW3Nob3c9ZmFsc2VdKSk6OmJlZm9yZSxcXG4gICAgOmhvc3QoW2Rpcj1cXFwibGVmdHRvcFxcXCJdW3Nob3c9dHJ1ZV0pOjpiZWZvcmUsXFxuICAgIDpob3N0KFtkaXI9XFxcImxlZnR0b3BcXFwiXTpmb2N1cy13aXRoaW46bm90KFtzaG93PWZhbHNlXSkpOjpiZWZvcmUsXFxuICAgIDpob3N0KFtkaXI9XFxcImxlZnR0b3BcXFwiXTpob3Zlcjpub3QoW3Nob3c9ZmFsc2VdKSk6OmFmdGVyLFxcbiAgICA6aG9zdChbZGlyPVxcXCJsZWZ0dG9wXFxcIl1bc2hvdz10cnVlXSk6OmFmdGVyLFxcbiAgICA6aG9zdChbZGlyPVxcXCJsZWZ0dG9wXFxcIl06Zm9jdXMtd2l0aGluOm5vdChbc2hvdz1mYWxzZV0pKTo6YWZ0ZXIge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwcHgsIDApO1xcbiAgICB9XFxuXFxuICAgIC8qIGxlZnRib3R0b20gKi9cXG4gICAgOmhvc3QoW2Rpcj1cXFwibGVmdGJvdHRvbVxcXCJdKTo6YmVmb3JlLFxcbiAgICA6aG9zdChbZGlyPVxcXCJsZWZ0Ym90dG9tXFxcIl0pOjphZnRlciB7XFxuICAgICAgICByaWdodDogMTAwJTtcXG4gICAgICAgIGJvdHRvbTogMDtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0yMHB4LCAwKTtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbZGlyPVxcXCJsZWZ0Ym90dG9tXFxcIl0pOmFmdGVyIHtcXG4gICAgICAgIGJvdHRvbTogMTBweDtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogLTEycHg7XFxuICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogY3VycmVudENvbG9yO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFtkaXI9XFxcImxlZnRib3R0b21cXFwiXTpob3Zlcjpub3QoW3Nob3c9ZmFsc2VdKSk6OmJlZm9yZSxcXG4gICAgOmhvc3QoW2Rpcj1cXFwibGVmdGJvdHRvbVxcXCJdW3Nob3c9dHJ1ZV0pOjpiZWZvcmUsXFxuICAgIDpob3N0KFtkaXI9XFxcImxlZnRib3R0b21cXFwiXTpmb2N1cy13aXRoaW46bm90KFtzaG93PWZhbHNlXSkpOjpiZWZvcmUsXFxuICAgIDpob3N0KFtkaXI9XFxcImxlZnRib3R0b21cXFwiXTpob3Zlcjpub3QoW3Nob3c9ZmFsc2VdKSk6OmFmdGVyLFxcbiAgICA6aG9zdChbZGlyPVxcXCJsZWZ0Ym90dG9tXFxcIl1bc2hvdz10cnVlXSk6OmFmdGVyLFxcbiAgICA6aG9zdChbZGlyPVxcXCJsZWZ0Ym90dG9tXFxcIl06Zm9jdXMtd2l0aGluOm5vdChbc2hvdz1mYWxzZV0pKTo6YWZ0ZXIge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwcHgsIDApO1xcbiAgICB9XFxuXFxuICAgIC8qIHN1Y2Nlc3MgKi9cXG4gICAgOmhvc3QoW3R5cGU9XFxcInN1Y2Nlc3NcXFwiXSkge1xcbiAgICAgICAgLS1jb2xvcjogdmFyKC0tc3VjY2Vzc0NvbG9yLCAjNTJjNDFhKTtcXG4gICAgfVxcblxcbiAgICAvKiBlcnJvciAqL1xcbiAgICA6aG9zdChbdHlwZT1cXFwiZXJyb3JcXFwiXSkge1xcbiAgICAgICAgLS1jb2xvcjogdmFyKC0tZXJyb3JDb2xvciwgI2Y0NjE1Yyk7XFxuICAgIH1cXG5cXG4gICAgLyogd2FybmluZyAqL1xcbiAgICA6aG9zdChbdHlwZT1cXFwid2FybmluZ1xcXCJdKSB7XFxuICAgICAgICAtLWNvbG9yOiB2YXIoLS13YXJpbmdDb2xvciwgI2ZhYWQxNCk7XFxuICAgIH1cXG5cXG4gICAgc2xvdCB7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xcbiAgICB9XFxuPC9zdHlsZT5cXG48c2xvdD48L3Nsb3Q+XCI7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgJy4vY29tcG9uZW50cy9hd2MtYnV0dG9uL2F3Yy1idXR0b24nO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvYXdjLXNsaWRlci9hd2Mtc2xpZGVyJztcbmltcG9ydCAnLi9jb21wb25lbnRzL2F3Yy1kcm9wZG93bi9hd2MtZHJvcGRvd24nO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvYXdjLWxvYWRpbmcvYXdjLWxvYWRpbmcnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvYXdjLXRhYnMvYXdjLXRhYnMnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvYXdjLXN3aXRjaC9hd2Mtc3dpdGNoJztcbmltcG9ydCAnLi9jb21wb25lbnRzL2F3Yy1jaGVja2JveC9hd2MtY2hlY2tib3gnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvYXdjLXJhZGlvL2F3Yy1yYWRpbyc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9hd2MtdG9vbHRpcC9hd2MtdG9vbHRpcCc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9hd2MtaWNvbi9hd2MtaWNvbic7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9hd2MtaW5wdXQvYXdjLWlucHV0JztcbmltcG9ydCAnLi9jb21wb25lbnRzL2F3Yy10ZXh0YXJlYS9hd2MtdGV4dGFyZWEnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvYXdjLWltZy9hd2MtaW1nJztcbmltcG9ydCAnLi9jb21wb25lbnRzL2F3Yy1yYXRlL2F3Yy1yYXRlJztcbmltcG9ydCAnLi9jb21wb25lbnRzL2F3Yy1wb3BvdmVyL2F3Yy1wb3BvdmVyJztcbmltcG9ydCAnLi9jb21wb25lbnRzL2F3Yy1mb3JtL2F3Yy1mb3JtJztcbmltcG9ydCAnLi9jb21wb25lbnRzL2F3Yy1wYWdpbmF0aW9uL2F3Yy1wYWdpbmF0aW9uJztcbmltcG9ydCBBd2NEaWFsb2cgZnJvbSAnLi9jb21wb25lbnRzL2F3Yy1kaWFsb2cvYXdjLWRpYWxvZyc7XG5pbXBvcnQgQXdjTWVzc2FnZSBmcm9tICcuL2NvbXBvbmVudHMvYXdjLW1lc3NhZ2UvYXdjLW1lc3NhZ2UnO1xud2luZG93LkF3Y0RpYWxvZyA9IEF3Y0RpYWxvZztcbndpbmRvdy5Bd2NNZXNzYWdlID0gQXdjTWVzc2FnZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==