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

	get name() {
		return this.getAttribute('name');
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
/* harmony export */   "default": () => (/* binding */ CSelect)
/* harmony export */ });
/* harmony import */ var _awc_option_awc_option__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../awc-option/awc-option */ "./components/awc-option/awc-option.js");
/* harmony import */ var _awc_popover_awc_popover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../awc-popover/awc-popover */ "./components/awc-popover/awc-popover.js");
/* harmony import */ var _awc_dropdown_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./awc-dropdown.html */ "./components/awc-dropdown/awc-dropdown.html");
/* harmony import */ var _awc_dropdown_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_awc_dropdown_html__WEBPACK_IMPORTED_MODULE_2__);




class CSelect extends HTMLElement {
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
		shadowRoot.innerHTML = (_awc_dropdown_html__WEBPACK_IMPORTED_MODULE_2___default());
	}
}

if (!customElements.get('awc-dropdown')) {
	customElements.define('awc-dropdown', CSelect)
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

    get lazy() {
		return this.getAttribute('lazy') !== null;
	}

	get alt() {
		return this.getAttribute('alt') || 'error';
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
				this.messageIconEl.name = this._typeMap(newValue).name;
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
		let name = '';
		let color = '';
		switch (type) {
			case 'info':
				name = 'info-circle-fill';
				color = 'var(--infoColor, #1890ff)';
				break
			case 'success':
				name = 'check-circle-fill';
				color = 'var(--successColor,#52c41a)';
				break
			case 'error':
				name = 'close-circle-fill';
				color = 'var(--errorColor,#f4615c)';
				break;
			case 'warning':
				name = 'warning-circle-fill';
				color = 'var(--waringColor,#faad14)';
				break;
			default:
				break;
		}
		return {
			name: name,
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
        this._render(type);
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
        this._remove = false
        if (this.type) {
            this.titles = this.shadowRoot.getElementById('title');
            this.btnClose = this.shadowRoot.getElementById('btn-close');
        }
        if (this.type == 'confirm') {
            this.btnCancel = this.shadowRoot.getElementById('btn-cancel');
            this.btnSubmit = this.shadowRoot.getElementById('btn-submit');
        }
        this.addEventListener('transitionend', (ev) => {
            if (ev.propertyName === 'transform' && this.open) {
                if (this.type == 'confirm') {
                    this.btnSubmit.focus();
                }
                if (this.type == 'pane') {
                    this.btnClose.focus();
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
            this.btnClose.addEventListener('click', () => {
                this.open = false
                window.xyActiveElement.focus();
            })
        }
        if (this.type == 'confirm') {
            this.btnCancel.addEventListener('click', async () => {
                this.dispatchEvent(new CustomEvent('cancel'));
                this.open = false;
                window.xyActiveElement.focus();
            })
            this.btnSubmit.addEventListener('click', () => {
                this.dispatchEvent(new CustomEvent('submit'));
                this.open = false;
                window.xyActiveElement.focus();
            })
        }
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name == 'title' && this.titles) {
            if (newValue !== null) {
                this.titles.innerHTML = newValue;
            }
        }
        if (name == 'oktext' && this.btnSubmit) {
            if (newValue !== null) {
                this.btnSubmit.innerHTML = newValue;
            }
        }
        if (name == 'canceltext' && this.btnCancel) {
            if (newValue !== null) {
                this.btnCancel.innerHTML = newValue;
            }
        }
    }

    _render(type) {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
            ${(_awc_popbody_html__WEBPACK_IMPORTED_MODULE_1___default())}
            ${(type || this.type) === 'confirm'
                ? '<awc-icon id="popbody-type" class="popbody-type" name="question-circle" color="var(--waringColor,#faad14)"></awc-icon>'
                : ''
            }
            <div class="popbody-content">
                ${(type || this.type) !== null
                            ? '<div class="popbody-title" id="title">' +
                            this.title +
                            '</div><awc-button class="btn-close" id="btn-close" icon="close"></awc-button>'
                            : ''
                        }
                <div class="popbody-body">
                    <slot></slot>
                </div>
                ${(type || this.type) === 'confirm'
                            ? '<div class="popbody-footer"><awc-button id="btn-cancel">' +
                            this.canceltext +
                            '</awc-button><awc-button id="btn-submit" type="primary">' +
                            this.oktext +
                            '</awc-button></div>'
                            : ''
                        }
            </div>
        `;
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

	get content() {
		return this.getAttribute('content');
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
			this.popBodyEl.clientWidth;
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


	get vertical() {
		return this.getAttribute('vertical') !== null;
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
        return ['label', 'key', 'disabled', 'icon'];
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

    get key() {
        return this.getAttribute('key');
    }

    set key(value) {
        this.setAttribute('key', value);
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

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue && newValue !== undefined) {
            if (name === 'label') {
                if (this.parentNode.updatalabel) {
                    this.parentNode.updatalabel(this.key, newValue);
                }
            }
            if (name === 'disabled') {
                if (this.parentNode.updatadisabled) {
                    this.parentNode.updatadisabled(this.key, newValue);
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
				this.activekey = this.slotsEl.assignedElements()[0].key;
				active = this.tabPos[this.activekey];
			}
			this.tablineEl.style = `width:${active.width}px;transform:translateX(${active.left}px)`;
			this.tabEl.style.transform = `translateX(${-active.index * 100}%)`;
			this.filterEl.textContent = `
            ::slotted(awc-tab:not([key="${this.activekey}"])){
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
					if (item.key === null) {
						item.key = index;
					}
					html += `<awc-button class="nav-item ${
						item.key === this.activekey ? 'active' : ''
					}" icon=${item.icon} ${
						item.disabled !== null ? 'disabled' : ''
					} data-key=${item.key}>${item.label}</awc-button>`
				}
			});
			this.navEl.innerHTML = html;
			this._initTab();
			if (this.activekey === null) {
				this.activekey = slots[0].key;
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

module.exports = "<style>\n    :host {\n        display: inline-block;\n        font-size: 14px;\n        border-radius: var(--borderRadius, .25em);\n    }\n\n    :host([block]) {\n        display: block;\n    }\n\n    :host(:not([disabled]):not([type=\"primary\"]):focus-within) .select,\n    :host(:not([disabled]):not([type=\"primary\"]):hover) .select {\n        border-color: var(--themeColor, #42b983);\n        color: var(--themeColor, #42b983);\n    }\n\n    :host([search]:focus-within:not([disabled])) .select,\n    :host([search]:not([disabled]):hover) .select {\n        color: var(--themeColor, #42b983);\n    }\n\n    :host([disabled]) {\n        pointer-events: none;\n    }\n\n    :host(:focus-within) awc-popover,\n    :host(:active) awc-popover {\n        z-index: 2;\n    }\n\n    awc-tooltip {\n        display: block;\n        width: 100%;\n        height: 100%;\n        border-radius: inherit;\n    }\n\n    .select:not([type=\"primary\"]) {\n        display: flex;\n        width: 100%;\n        height: 100%;\n        font-size: inherit;\n        color: currentColor;\n        border-radius: inherit;\n    }\n\n    :host([search]) .select {\n        color: currentColor;\n    }\n\n    awc-tooltip[show=show] {\n        --themeColor: var(--errorColor, #f4615c);\n        --borderColor: var(--errorColor, #f4615c);\n    }\n\n    :host([invalid]) .select:not([type=\"primary\"]) {\n        color: var(--errorColor, #f4615c);\n    }\n\n    .select span {\n        flex: 1;\n        text-align: left;\n    }\n\n    awc-input::after {\n        content: '';\n        position: absolute;\n        left: 0;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        cursor: default;\n        pointer-events: none;\n    }\n\n    .select[readonly]::after {\n        pointer-events: all;\n    }\n\n    .arrow {\n        position: relative;\n        font-size: .9em;\n        transform: scaleY(.8);\n        margin-left: .5em;\n        pointer-events: none;\n        width: 1em;\n        height: 1em;\n        fill: currentColor;\n        transition: .3s transform cubic-bezier(.645, .045, .355, 1);\n    }\n\n    :host([search]) .arrow {\n        transition: color .3s cubic-bezier(.645, .045, .355, 1), .3s transform cubic-bezier(.645, .045, .355, 1);\n    }\n\n    awc-popover[open] .arrow {\n        transform: scaleY(-.8);\n    }\n\n    awc-popover {\n        display: block;\n        height: inherit;\n        border-radius: inherit;\n    }\n\n    awc-popbody {\n        min-width: 100%;\n        overflow: auto;\n        max-height: 50vh;\n        scroll-behavior: smooth;\n    }\n\n    :host([search]) awc-popbody::before {\n        display: none;\n        box-sizing: border-box;\n        width: 100%;\n        content: '没有匹配到任何选项';\n        padding: .25em .625em;\n        line-height: 1.8;\n        color: var(--fontColor, #333);\n        white-space: nowrap;\n        opacity: .5;\n    }\n\n    :host([empty]) awc-popbody::before {\n        display: block;\n    }\n</style>\n<style id=\"filter\"></style>\n<awc-popover id=\"root\">\n    <awc-input id=\"selectInput\" class=\"select\" debounce=\"200\" readonly>\n        <svg class=\"arrow\" viewBox=\"0 0 1024 1024\">\n            <path\n                d=\"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3 0.1-12.7-6.4-12.7z\">\n            </path>\n        </svg>\n    </awc-input>\n    <awc-button id=\"selectButton\"  class=\"select\" debounce=\"200\" readonly>\n        <span id=\"value\"></span>\n        <svg class=\"arrow\" viewBox=\"0 0 1024 1024\">\n            <path\n                d=\"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3 0.1-12.7-6.4-12.7z\">\n            </path>\n        </svg>\n    </awc-button>\n    <awc-popbody id=\"options\">\n        <slot id=\"slot\"></slot>\n    </awc-popbody>\n</awc-popover>";

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

module.exports = "<style>\n    :host {\n        font-size: inherit;\n        display: inline-block;\n        transition: .3s;\n    }\n\n    .icon {\n        display: block;\n        width: 1em;\n        height: 1em;\n        margin: auto;\n        fill: currentColor;\n        overflow: hidden;\n    }\n\n    :host([loading]) {\n        animation: rotate 1.4s linear infinite;\n    }\n\n    @keyframes rotate {\n        to {\n            transform: rotate(360deg);\n        }\n    }\n</style>\n<svg class=\"icon\" id=\"icon\" aria-hidden=\"true\">\n    <use id=\"use\"></use>\n</svg>";

/***/ }),

/***/ "./components/awc-img/awc-img.html":
/*!*****************************************!*\
  !*** ./components/awc-img/awc-img.html ***!
  \*****************************************/
/***/ ((module) => {

module.exports = "<style>\n    :host {\n        display: inline-block;\n        position: relative;\n        vertical-align: top;\n        overflow: hidden;\n        background: #eee;\n        font-size: 14px;\n        color: #666;\n    }\n\n    :host([alt]:not([default]))::before {\n        content: attr(alt);\n        position: absolute;\n        color: #fff;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        z-index: 1;\n        line-height: 1.5;\n        font-size: 14px;\n        padding: 5px 10px;\n        background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, .5));\n        transform: translateY(100%);\n        transition: .3s;\n    }\n\n    :host([alt]:hover)::before {\n        transform: translateY(0);\n    }\n\n    :host([ratio*=\"/\"]) {\n        width: 100%;\n        height: auto !important;\n    }\n\n    :host([ratio*=\"/\"]) img {\n        position: absolute;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n    }\n\n    :host([ratio*=\"/\"]) .placeholder {\n        position: relative;\n        padding-top: 100%;\n    }\n\n    img {\n        box-sizing: border-box;\n        color: transparent;\n        display: inline-block;\n        width: inherit;\n        height: inherit;\n        vertical-align: top;\n        border: 0;\n        opacity: 0;\n        background: inherit;\n        transform: scale(0);\n        object-fit: cover;\n        transition: .3s;\n    }\n\n    img::before {\n        content: '';\n        left: 0;\n        top: 0;\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        background: inherit;\n        z-index: 1;\n    }\n\n    :host img[src] {\n        opacity: 1;\n        transform: scale(1);\n    }\n\n    :host(:not([error]):not([default]):hover) img[src],\n    :host(:focus-within) img[src] {\n        transform: scale(1.1);\n    }\n\n    :host([fit=\"cover\"]) img {\n        object-fit: cover;\n    }\n\n    :host([fit=\"fill\"]) img {\n        object-fit: fill;\n    }\n\n    :host([fit=\"contain\"]) img {\n        object-fit: contain;\n    }\n\n    .placeholder {\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        box-sizing: border-box;\n        z-index: -1;\n        transition: .3s;\n        background: inherit;\n        visibility: hidden;\n    }\n\n    :host([error]) .placeholder {\n        visibility: visible;\n        z-index: 2;\n    }\n\n    :host([error]) img {\n        padding: 0 20px;\n        min-width: 100px;\n        min-height: 100px;\n        transform: none;\n    }\n\n    .loading {\n        position: absolute;\n        left: 50%;\n        top: 50%;\n        z-index: 3;\n        transform: translate(-50%, -50%);\n        pointer-events: none;\n        opacity: 1;\n        transition: .3s;\n    }\n\n    img[src]+.loading,\n    :host([error]) .loading {\n        opacity: 0;\n        visibility: hidden;\n    }\n\n    .placeholder awc-icon {\n        font-size: 1.15em;\n        margin-right: .4em;\n    }\n\n    .placeholder-icon {\n        position: absolute;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        left: 0;\n        right: 0;\n        top: 50%;\n        transform: translateY(-50%);\n    }\n\n    .view {\n        position: absolute;\n        z-index: 3;\n        left: 50%;\n        top: 50%;\n        transform: translate(-50%, -50%) scale(2);\n        opacity: 0;\n        color: #fff;\n        display: none;\n        font-size: 40px;\n        transition: .3s;\n        pointer-events: none;\n    }\n\n    :host(:focus-within) .view {\n        opacity: 1;\n        transform: translate(-50%, -50%) scale(1);\n    }\n\n    .animation .shape {\n        border-radius: 50%;\n        background: var(--themeBackground, var(--themeColor, #42b983));\n    }\n\n    .animation {\n        width: 2em;\n        height: 2em;\n        display: grid;\n        grid-template-columns: repeat(2, 1fr);\n        grid-gap: .7em;\n        transform: rotate(45deg);\n        animation: rotation 1s infinite;\n    }\n\n    .shape1 {\n        animation: animation4shape1 0.3s ease 0s infinite alternate;\n    }\n\n    @keyframes rotation {\n        from {\n            transform: rotate(0deg);\n        }\n\n        to {\n            transform: rotate(360deg);\n        }\n    }\n\n    @keyframes animation4shape1 {\n        from {\n            transform: translate(0, 0);\n        }\n\n        to {\n            transform: translate(5px, 5px);\n        }\n    }\n\n    .shape2 {\n        opacity: .8;\n        animation: animation4shape2 0.3s ease 0.3s infinite alternate;\n    }\n\n    @keyframes animation4shape2 {\n        from {\n            transform: translate(0, 0);\n        }\n\n        to {\n            transform: translate(-5px, 5px);\n        }\n    }\n\n    .shape3 {\n        opacity: .6;\n        animation: animation4shape3 0.3s ease 0.3s infinite alternate;\n    }\n\n    @keyframes animation4shape3 {\n        from {\n            transform: translate(0, 0);\n        }\n\n        to {\n            transform: translate(5px, -5px);\n        }\n    }\n\n    .shape4 {\n        opacity: .4;\n        animation: animation4shape4 0.3s ease 0s infinite alternate;\n    }\n\n    @keyframes animation4shape4 {\n        from {\n            transform: translate(0, 0);\n        }\n\n        to {\n            transform: translate(-5px, -5px);\n        }\n    }\n</style>\n<div class=\"placeholder\" id=\"placeholder\">\n    <div class=\"placeholder-icon\">\n        <awc-icon\n            path=\"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32z m-40 632H136v-39.9l138.5-164.3 150.1 178L658.1 489 888 761.6V792z m0-129.8L664.2 396.8c-3.2-3.8-9-3.8-12.2 0L424.6 666.4l-144-170.7c-3.2-3.8-9-3.8-12.2 0L136 652.7V232h752v430.2z\">\n        </awc-icon>$\n        <div id=\"alt\"></div>\n    </div>\n</div>\n<awc-icon class=\"view\" name='View'></awc-icon>\n<img>\n<div class=\"loading\">\n    <div class=\"animation\">\n        <div class=\"shape shape1\"></div>\n        <div class=\"shape shape2\"></div>\n        <div class=\"shape shape3\"></div>\n        <div class=\"shape shape4\"></div>\n    </div>\n</div>";

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

module.exports = "<style>\n    :host {\n        display: flex;\n        font-size: 14px;\n    }\n\n    awc-button {\n        margin: 0 .3em;\n        width: 2.3em;\n        height: 2.3em;\n        padding: 1px;\n        font-size: inherit;\n        box-sizing: content-box;\n    }\n\n    .simple-page {\n        width: auto;\n        padding: 0 .625em;\n    }\n\n    awc-button[tabindex] {\n        justify-content: center;\n        align-items: center;\n        pointer-events: none;\n    }\n\n    .page-ellipsis awc-icon {\n        margin: auto;\n    }\n\n    awc-button[current] {\n        background: var(--themeBackground, var(--themeColor, #42b983));\n        border-color: var(--themeColor, #42b983);\n        color: #fff;\n    }\n\n    .page {\n        display: inline-flex;\n    }\n\n    .icon {\n        width: 1em;\n        height: 1em;\n        fill: currentColor;\n    }\n</style>\n<awc-button type=\"text\" id=\"left\">\n    <svg class=\"icon\" viewBox=\"0 0 1024 1024\">\n        <path\n            d=\"M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8c-16.4 12.8-16.4 37.5 0 50.3l450.8 352.1c5.3 4.1 12.9 0.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z\">\n        </path>\n    </svg>\n</awc-button>\n<div class=\"page\" id=\"page\"></div>\n<awc-button type=\"text\" id=\"right\">\n    <svg class=\"icon\" viewBox=\"0 0 1024 1024\">\n        <path\n            d=\"M765.7 486.8L314.9 134.7c-5.3-4.1-12.9-0.4-12.9 6.3v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1c16.4-12.8 16.4-37.6 0-50.4z\">\n        </path>\n    </svg>\n</awc-button>";

/***/ }),

/***/ "./components/awc-popover/awc-popbody.html":
/*!*************************************************!*\
  !*** ./components/awc-popover/awc-popbody.html ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "<style>\n    :host {\n        position: absolute;\n        display: flex;\n        box-shadow: 2px 2px 15px var(--boxShadow, rgba(0, 0, 0, 0.15));\n        box-sizing: border-box;\n        transform: scale(0);\n        opacity: 0.5;\n        border-radius: 3px;\n        z-index: 10;\n        transition: .3s cubic-bezier(.645, .045, .355, 1);\n        transform-origin: inherit;\n        background: #fff;\n        visibility: hidden;\n    }\n\n    .popbody-content {\n        box-sizing: border-box;\n        display: flex;\n        width: max-content;\n        padding: 0 15px;\n        flex: 1;\n        flex-direction: column;\n    }\n\n    .popbody-title {\n        line-height: 30px;\n        padding: 15px 30px 0 0;\n        font-weight: 700;\n        font-size: 14px;\n        color: #4c5161;\n        user-select: none;\n        cursor: default;\n    }\n\n    .popbody-body {\n        flex: 1;\n        padding: 5px 0 15px 0;\n    }\n\n    .popbody-footer {\n        padding: 3px 0 15px 0;\n        margin-top: -3px;\n        text-align: right;\n        white-space: nowrap;\n    }\n\n    .btn-close {\n        position: absolute;\n        right: 10px;\n        top: 10px;\n        border: 0;\n    }\n\n    .popbody-footer awc-button {\n        font-size: .8em;\n        margin-left: .8em;\n    }\n\n    .popbody-type {\n        display: flex;\n        width: 30px;\n        height: 30px;\n        font-size: 22px;\n        margin: 15px -10px 0 15px;\n    }\n\n    :host([type=\"confirm\"]) {\n        min-width: 250px;\n    }\n\n    :host([type=\"confirm\"]) .popbody-body {\n        font-size: 14px;\n    }\n\n    :host(:not([type])) .popbody-content,\n    :host(:not([type])) .popbody-body {\n        padding: 0;\n    }\n</style>";

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

module.exports = "<style>\n    :host {\n        display: inline-block;\n        position: relative;\n        overflow: visible;\n    }\n\n    :host::before,\n    :host::after {\n        content: '';\n        display: block;\n        position: absolute;\n        z-index: 1;\n        transform: translate(-50%, -20px);\n        opacity: 0;\n        transition: all .15s .15s, left 0s, top 0s;\n        color: var(--grayColor, rgba(0, 0, 0, 0.75));\n        visibility: hidden;\n        pointer-events: none;\n    }\n\n    :host::before {\n        content: attr(prefix) attr(tips) attr(suffix);\n        border-radius: 3px;\n        padding: 6px 10px;\n        line-height: 18px;\n        text-align: left;\n        background-color: var(--grayColor, rgba(0, 0, 0, 0.75));\n        color: #fff;\n        font-size: 12px;\n        font-style: normal;\n        width: max-content;\n        max-width: 200px;\n    }\n\n    :host::after {\n        width: 0;\n        height: 0;\n        overflow: hidden;\n        border: 6px solid transparent;\n    }\n\n    :host([tips]:not([tips='']):hover:not([show=false]))::before,\n    :host([tips]:not([tips=''])[show=true])::before,\n    :host([tips]:not([tips='']):focus-within:not([show=false]))::before,\n    :host([tips]:not([tips='']):hover:not([show=false]))::after,\n    :host([tips]:not([tips=''])[show=true])::after,\n    :host([tips]:not([tips='']):focus-within:not([show=false]))::after {\n        visibility: visible;\n        opacity: 1;\n    }\n\n    /* top */\n    :host([dir=\"top\"])::before,\n    :host(:not([dir]))::before,\n    :host(:not([dir]))::after,\n    :host([dir=\"top\"])::after {\n        left: calc(var(--percent, .5) * 100%);\n        bottom: 100%;\n        transform: translate(-50%, -20px);\n    }\n\n    :host([dir=\"top\"]):after,\n    :host(:not([dir])):after {\n        margin-bottom: -12px;\n        border-top-color: currentColor;\n    }\n\n    :host(:not([dir]):hover:not([show=false]))::before,\n    :host(:not([dir])[show=true])::before,\n    :host(:not([dir]):focus-within:not([show=false]))::before,\n    :host(:not([dir]):hover:not([show=false]))::after,\n    :host(:not([dir])[show=true])::after,\n    :host(:not([dir]):focus-within:not([show=false]))::after,\n    :host([dir=\"top\"]:hover:not([show=false]))::before,\n    :host([dir=\"top\"][show=true])::before,\n    :host([dir=\"top\"]:focus-within:not([show=false]))::before,\n    :host([dir=\"top\"]:hover:not([show=false]))::after,\n    :host([dir=\"top\"][show=true])::after,\n    :host([dir=\"top\"]:focus-within:not([show=false]))::after {\n        transform: translate(-50%, -10px);\n    }\n\n    /* right */\n    :host([dir=\"right\"])::before,\n    :host([dir=\"right\"])::after {\n        left: 100%;\n        top: 50%;\n        transform: translate(20px, -50%);\n    }\n\n    :host([dir=\"right\"]):after {\n        margin-left: -12px;\n        border-right-color: currentColor;\n    }\n\n    :host([dir=\"right\"]:hover:not([show=false]))::before,\n    :host([dir=\"right\"][show=true])::before,\n    :host([dir=\"right\"]:focus-within:not([show=false]))::before,\n    :host([dir=\"right\"]:hover:not([show=false]))::after,\n    :host([dir=\"right\"][show=true])::after,\n    :host([dir=\"right\"]:focus-within:not([show=false]))::after {\n        transform: translate(10px, -50%);\n    }\n\n    /* bottom */\n    :host([dir=\"bottom\"])::before,\n    :host([dir=\"bottom\"])::after {\n        left: calc(var(--percent, .5) * 100%);\n        top: 100%;\n        transform: translate(-50%, 20px);\n    }\n\n    :host([dir=\"bottom\"])::after {\n        margin-top: -12px;\n        border-bottom-color: currentColor;\n    }\n\n    :host([dir=\"bottom\"]:hover:not([show=false]))::before,\n    :host([dir=\"bottom\"][show=true])::before,\n    :host([dir=\"bottom\"]:focus-within:not([show=false]))::before,\n    :host([dir=\"bottom\"]:hover:not([show=false]))::after,\n    :host([dir=\"bottom\"][show=true])::after,\n    :host([dir=\"bottom\"]:focus-within:not([show=false]))::after {\n        transform: translate(-50%, 10px);\n    }\n\n    /* left */\n    :host([dir=\"left\"])::before,\n    :host([dir=\"left\"])::after {\n        right: 100%;\n        top: 50%;\n        transform: translate(-20px, -50%);\n    }\n\n    :host([dir=\"left\"])::after {\n        margin-right: -12px;\n        border-left-color: currentColor;\n    }\n\n    :host([dir=\"left\"]:hover:not([show=false]))::before,\n    :host([dir=\"left\"][show=true])::before,\n    :host([dir=\"left\"]:focus-within:not([show=false]))::before,\n    :host([dir=\"left\"]:hover:not([show=false]))::after,\n    :host([dir=\"left\"][show=true])::after,\n    :host([dir=\"left\"]:focus-within:not([show=false]))::after {\n        transform: translate(-10px, -50%);\n    }\n\n    /* topleft */\n    :host([dir=\"topleft\"])::before,\n    :host([dir=\"topleft\"])::after {\n        left: 0;\n        bottom: 100%;\n        transform: translate(0, -20px);\n    }\n\n    :host([dir=\"topleft\"]):after {\n        left: 10px;\n        margin-bottom: -12px;\n        border-top-color: currentColor;\n    }\n\n    :host([dir=\"topleft\"]:hover:not([show=false]))::before,\n    :host([dir=\"topleft\"][show=true])::before,\n    :host([dir=\"topleft\"]:focus-within:not([show=false]))::before,\n    :host([dir=\"topleft\"]:hover:not([show=false]))::after,\n    :host([dir=\"topleft\"][show=true])::after,\n    :host([dir=\"topleft\"]:focus-within:not([show=false]))::after {\n        transform: translate(0, -10px);\n    }\n\n    /* topright */\n    :host([dir=\"topright\"])::before,\n    :host([dir=\"topright\"])::after {\n        right: 0;\n        bottom: 100%;\n        transform: translate(0, -20px);\n    }\n\n    :host([dir=\"topright\"]):after {\n        right: 10px;\n        margin-bottom: -12px;\n        border-top-color: currentColor;\n    }\n\n    :host([dir=\"topright\"]:hover:not([show=false]))::before,\n    :host([dir=\"topright\"][show=true])::before,\n    :host([dir=\"topright\"]:focus-within:not([show=false]))::before,\n    :host([dir=\"topright\"]:hover:not([show=false]))::after,\n    :host([dir=\"topright\"][show=true])::after,\n    :host([dir=\"topright\"]:focus-within:not([show=false]))::after {\n        transform: translate(0, -10px);\n    }\n\n    /* righttop */\n    :host([dir=\"righttop\"])::before,\n    :host([dir=\"righttop\"])::after {\n        left: 100%;\n        top: 0;\n        transform: translate(20px, 0);\n    }\n\n    :host([dir=\"righttop\"]):after {\n        top: 10px;\n        margin-left: -12px;\n        border-right-color: currentColor;\n    }\n\n    :host([dir=\"righttop\"]:hover:not([show=false]))::before,\n    :host([dir=\"righttop\"][show=true])::before,\n    :host([dir=\"righttop\"]:focus-within:not([show=false]))::before,\n    :host([dir=\"righttop\"]:hover:not([show=false]))::after,\n    :host([dir=\"righttop\"][show=true])::after,\n    :host([dir=\"righttop\"]:focus-within:not([show=false]))::after {\n        transform: translate(10px, 0);\n    }\n\n    /* rightbottom */\n    :host([dir=\"rightbottom\"])::before,\n    :host([dir=\"rightbottom\"])::after {\n        left: 100%;\n        bottom: 0;\n        transform: translate(20px, 0);\n    }\n\n    :host([dir=\"rightbottom\"]):after {\n        bottom: 10px;\n        margin-left: -12px;\n        border-right-color: currentColor;\n    }\n\n    :host([dir=\"rightbottom\"]:hover:not([show=false]))::before,\n    :host([dir=\"rightbottom\"][show=true])::before,\n    :host([dir=\"rightbottom\"]:focus-within:not([show=false]))::before,\n    :host([dir=\"rightbottom\"]:hover:not([show=false]))::after,\n    :host([dir=\"rightbottom\"][show=true])::after,\n    :host([dir=\"rightbottom\"]:focus-within:not([show=false]))::after {\n        transform: translate(10px, 0);\n    }\n\n    /* bottomleft */\n    :host([dir=\"bottomleft\"])::before,\n    :host([dir=\"bottomleft\"])::after {\n        left: 0;\n        top: 100%;\n        transform: translate(0, 20px);\n    }\n\n    :host([dir=\"bottomleft\"])::after {\n        left: 10px;\n        margin-top: -12px;\n        border-bottom-color: currentColor;\n    }\n\n    :host([dir=\"bottomleft\"]:hover:not([show=false]))::before,\n    :host([dir=\"bottomleft\"][show=true])::before,\n    :host([dir=\"bottomleft\"]:focus-within:not([show=false]))::before,\n    :host([dir=\"bottomleft\"]:hover:not([show=false]))::after,\n    :host([dir=\"bottomleft\"][show=true])::after,\n    :host([dir=\"bottomleft\"]:focus-within:not([show=false]))::after {\n        transform: translate(0, 10px);\n    }\n\n    /* bottomright */\n    :host([dir=\"bottomright\"])::before,\n    :host([dir=\"bottomright\"])::after {\n        right: 0;\n        top: 100%;\n        transform: translate(0, 20px);\n    }\n\n    :host([dir=\"bottomright\"])::after {\n        right: 10px;\n        margin-top: -12px;\n        border-bottom-color: currentColor;\n    }\n\n    :host([dir=\"bottomright\"]:hover:not([show=false]))::before,\n    :host([dir=\"bottomright\"][show=true])::before,\n    :host([dir=\"bottomright\"]:focus-within:not([show=false]))::before,\n    :host([dir=\"bottomright\"]:hover:not([show=false]))::after,\n    :host([dir=\"bottomright\"][show=true])::after,\n    :host([dir=\"bottomright\"]:focus-within:not([show=false]))::after {\n        transform: translate(0, 10px);\n    }\n\n    /* lefttop */\n    :host([dir=\"lefttop\"])::before,\n    :host([dir=\"lefttop\"])::after {\n        right: 100%;\n        top: 0;\n        transform: translate(-20px, 0);\n    }\n\n    :host([dir=\"lefttop\"]):after {\n        top: 10px;\n        margin-right: -12px;\n        border-left-color: currentColor;\n    }\n\n    :host([dir=\"lefttop\"]:hover:not([show=false]))::before,\n    :host([dir=\"lefttop\"][show=true])::before,\n    :host([dir=\"lefttop\"]:focus-within:not([show=false]))::before,\n    :host([dir=\"lefttop\"]:hover:not([show=false]))::after,\n    :host([dir=\"lefttop\"][show=true])::after,\n    :host([dir=\"lefttop\"]:focus-within:not([show=false]))::after {\n        transform: translate(-10px, 0);\n    }\n\n    /* leftbottom */\n    :host([dir=\"leftbottom\"])::before,\n    :host([dir=\"leftbottom\"])::after {\n        right: 100%;\n        bottom: 0;\n        transform: translate(-20px, 0);\n    }\n\n    :host([dir=\"leftbottom\"]):after {\n        bottom: 10px;\n        margin-right: -12px;\n        border-left-color: currentColor;\n    }\n\n    :host([dir=\"leftbottom\"]:hover:not([show=false]))::before,\n    :host([dir=\"leftbottom\"][show=true])::before,\n    :host([dir=\"leftbottom\"]:focus-within:not([show=false]))::before,\n    :host([dir=\"leftbottom\"]:hover:not([show=false]))::after,\n    :host([dir=\"leftbottom\"][show=true])::after,\n    :host([dir=\"leftbottom\"]:focus-within:not([show=false]))::after {\n        transform: translate(-10px, 0);\n    }\n\n    /* success */\n    :host([type=\"success\"]) {\n        --color: var(--successColor, #52c41a);\n    }\n\n    /* error */\n    :host([type=\"error\"]) {\n        --color: var(--errorColor, #f4615c);\n    }\n\n    /* warning */\n    :host([type=\"warning\"]) {\n        --color: var(--waringColor, #faad14);\n    }\n\n    slot {\n        border-radius: inherit;\n    }\n</style>\n<slot></slot>";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHVEQUF1RDtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3U2dDO0FBQ0c7QUFDRzs7QUFFeEI7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsTUFBTTtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLDJCQUEyQixNQUFNO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRSxNQUFNO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUNBQXlDLGNBQWM7QUFDdkQseUJBQXlCLDJEQUFJO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvVndDOztBQUV6QjtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0EsK0NBQStDLGNBQWM7QUFDN0QseUJBQXlCLDREQUFJO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ21DO0FBQ1Y7O0FBRVY7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsWUFBWSxHQUFHLFNBQVM7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFFBQVE7QUFDUjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBLHlDQUF5QyxjQUFjO0FBQ3ZELHlCQUF5Qix1REFBSTtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbk1tQzs7QUFFcEI7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2Q0FBNkMsV0FBVyxFQUFFLFVBQVU7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvR0FBb0csU0FBUztBQUM3RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUNBQXlDLGNBQWM7QUFDdkQseUJBQXlCLHVEQUFJO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEU4QjtBQUNJOztBQUVuQjtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtDQUErQyxjQUFjO0FBQzdELHlCQUF5QixzREFBSTtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsSnNDO0FBQ0Y7QUFDQTs7QUFFckI7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlLFFBQVEsSUFBSTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxTQUFTO0FBQzNDOztBQUVBO0FBQ0Esa0NBQWtDLFNBQVM7QUFDM0M7O0FBRUE7QUFDQSwrQkFBK0IsZUFBZTtBQUM5Qzs7QUFFQTtBQUNBLHFDQUFxQyxlQUFlO0FBQ3BEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHlDQUF5QyxjQUFjO0FBQ3ZELHlCQUF5Qix3REFBSTtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeGdCc0M7O0FBRXZCO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQ0FBK0MsY0FBYztBQUM3RCx5QkFBeUIsMERBQUk7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkQ4QjtBQUNNO0FBQ0U7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5Q0FBeUMsY0FBYztBQUN2RCx5QkFBeUIsMERBQUk7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMscUJBQXFCLFFBQVEsU0FBUyxVQUFVLFdBQVc7QUFDcEc7QUFDQTs7QUFFQSxpRUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxFQUFFOztBQUVGLFVBQVUsK0JBQStCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQzdNbUM7QUFDQzs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUNBQXlDLGNBQWM7QUFDdkQseUJBQXlCLHlEQUFJO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0VvQztBQUNLOztBQUUxQjtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2RUFBNkUsU0FBUyxJQUFJLFlBQVk7QUFDdEc7QUFDQSxJQUFJO0FBQ0osNkJBQTZCLHFCQUFxQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsb0NBQW9DLDRCQUE0QixPQUFPLElBQUksT0FBTztBQUN2RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUNBQXlDLGNBQWM7QUFDdkQseUJBQXlCLDZEQUFJO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdE5rQztBQUNJOztBQUV2QjtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQ0FBK0MsY0FBYztBQUM3RDtBQUNBLGNBQWMsMERBQUk7QUFDbEIsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6S2tDO0FBQ0s7QUFDRDs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGlEQUFVO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5Q0FBeUMsY0FBYztBQUN2RCx5QkFBeUIsMERBQUk7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVLb0M7O0FBRXJCO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSxzQ0FBc0MsVUFBVTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5Q0FBeUMsY0FBYztBQUN2RCx5QkFBeUIsd0RBQUk7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkdzQztBQUNSO0FBQ0s7O0FBRXBCO0FBQ2Y7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QUFzRCwrQ0FBK0MsT0FBTyxjQUFjLGlDQUFpQyxPQUFPOzs7Ozs7VUNBdCtWO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTjRDO0FBQ0E7QUFDSTtBQUNGO0FBQ047QUFDSTtBQUNJO0FBQ047QUFDSTtBQUNOO0FBQ0U7QUFDTTtBQUNWO0FBQ0U7QUFDTTtBQUNOO0FBQ1k7QUFDTztBQUNHO0FBQzlELG1CQUFtQix1RUFBUztBQUM1QixvQkFBb0IseUVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWItY29tcG9uZW50cy1qcy8uL2NvbXBvbmVudHMvYXdjLWJ1dHRvbi9hd2MtYnV0dG9uLmpzIiwid2VicGFjazovL3dlYi1jb21wb25lbnRzLWpzLy4vY29tcG9uZW50cy9hd2MtY2hlY2tib3gvYXdjLWNoZWNrYm94LmpzIiwid2VicGFjazovL3dlYi1jb21wb25lbnRzLWpzLy4vY29tcG9uZW50cy9hd2MtZGlhbG9nL2F3Yy1kaWFsb2cuanMiLCJ3ZWJwYWNrOi8vd2ViLWNvbXBvbmVudHMtanMvLi9jb21wb25lbnRzL2F3Yy1kcm9wZG93bi9hd2MtZHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vd2ViLWNvbXBvbmVudHMtanMvLi9jb21wb25lbnRzL2F3Yy1mb3JtL2F3Yy1mb3JtLWl0ZW0uanMiLCJ3ZWJwYWNrOi8vd2ViLWNvbXBvbmVudHMtanMvLi9jb21wb25lbnRzL2F3Yy1mb3JtL2F3Yy1mb3JtLmpzIiwid2VicGFjazovL3dlYi1jb21wb25lbnRzLWpzLy4vY29tcG9uZW50cy9hd2MtaWNvbi9hd2MtaWNvbi5qcyIsIndlYnBhY2s6Ly93ZWItY29tcG9uZW50cy1qcy8uL2NvbXBvbmVudHMvYXdjLWltZy9hd2MtaW1nLmpzIiwid2VicGFjazovL3dlYi1jb21wb25lbnRzLWpzLy4vY29tcG9uZW50cy9hd2MtaW5wdXQvYXdjLWlucHV0LmpzIiwid2VicGFjazovL3dlYi1jb21wb25lbnRzLWpzLy4vY29tcG9uZW50cy9hd2MtbG9hZGluZy9hd2MtbG9hZGluZy5qcyIsIndlYnBhY2s6Ly93ZWItY29tcG9uZW50cy1qcy8uL2NvbXBvbmVudHMvYXdjLW1lc3NhZ2UvYXdjLW1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vd2ViLWNvbXBvbmVudHMtanMvLi9jb21wb25lbnRzL2F3Yy1vcHRpb24vYXdjLW9wdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWItY29tcG9uZW50cy1qcy8uL2NvbXBvbmVudHMvYXdjLXBhZ2luYXRpb24vYXdjLXBhZ2luYXRpb24uanMiLCJ3ZWJwYWNrOi8vd2ViLWNvbXBvbmVudHMtanMvLi9jb21wb25lbnRzL2F3Yy1wb3BvdmVyL2F3Yy1wb3Bib2R5LmpzIiwid2VicGFjazovL3dlYi1jb21wb25lbnRzLWpzLy4vY29tcG9uZW50cy9hd2MtcG9wb3Zlci9hd2MtcG9wb3Zlci5qcyIsIndlYnBhY2s6Ly93ZWItY29tcG9uZW50cy1qcy8uL2NvbXBvbmVudHMvYXdjLXJhZGlvL2F3Yy1yYWRpby5qcyIsIndlYnBhY2s6Ly93ZWItY29tcG9uZW50cy1qcy8uL2NvbXBvbmVudHMvYXdjLXJhdGUvYXdjLXJhdGUuanMiLCJ3ZWJwYWNrOi8vd2ViLWNvbXBvbmVudHMtanMvLi9jb21wb25lbnRzL2F3Yy1zbGlkZXIvYXdjLXNsaWRlci5qcyIsIndlYnBhY2s6Ly93ZWItY29tcG9uZW50cy1qcy8uL2NvbXBvbmVudHMvYXdjLXN3aXRjaC9hd2Mtc3dpdGNoLmpzIiwid2VicGFjazovL3dlYi1jb21wb25lbnRzLWpzLy4vY29tcG9uZW50cy9hd2MtdGFicy9hd2MtdGFiLmpzIiwid2VicGFjazovL3dlYi1jb21wb25lbnRzLWpzLy4vY29tcG9uZW50cy9hd2MtdGFicy9hd2MtdGFicy5qcyIsIndlYnBhY2s6Ly93ZWItY29tcG9uZW50cy1qcy8uL2NvbXBvbmVudHMvYXdjLXRleHRhcmVhL2F3Yy10ZXh0YXJlYS5qcyIsIndlYnBhY2s6Ly93ZWItY29tcG9uZW50cy1qcy8uL2NvbXBvbmVudHMvYXdjLXRvb2x0aXAvYXdjLXRvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vd2ViLWNvbXBvbmVudHMtanMvLi9jb21wb25lbnRzL2F3Yy1idXR0b24vYXdjLWJ1dHRvbi5odG1sIiwid2VicGFjazovL3dlYi1jb21wb25lbnRzLWpzLy4vY29tcG9uZW50cy9hd2MtY2hlY2tib3gvYXdjLWNoZWNrYm94Lmh0bWwiLCJ3ZWJwYWNrOi8vd2ViLWNvbXBvbmVudHMtanMvLi9jb21wb25lbnRzL2F3Yy1kaWFsb2cvYXdjLWRpYWxvZy5odG1sIiwid2VicGFjazovL3dlYi1jb21wb25lbnRzLWpzLy4vY29tcG9uZW50cy9hd2MtZHJvcGRvd24vYXdjLWRyb3Bkb3duLmh0bWwiLCJ3ZWJwYWNrOi8vd2ViLWNvbXBvbmVudHMtanMvLi9jb21wb25lbnRzL2F3Yy1mb3JtL2F3Yy1mb3JtLWl0ZW0uaHRtbCIsIndlYnBhY2s6Ly93ZWItY29tcG9uZW50cy1qcy8uL2NvbXBvbmVudHMvYXdjLWZvcm0vYXdjLWZvcm0uaHRtbCIsIndlYnBhY2s6Ly93ZWItY29tcG9uZW50cy1qcy8uL2NvbXBvbmVudHMvYXdjLWljb24vYXdjLWljb24uaHRtbCIsIndlYnBhY2s6Ly93ZWItY29tcG9uZW50cy1qcy8uL2NvbXBvbmVudHMvYXdjLWltZy9hd2MtaW1nLmh0bWwiLCJ3ZWJwYWNrOi8vd2ViLWNvbXBvbmVudHMtanMvLi9jb21wb25lbnRzL2F3Yy1pbnB1dC9hd2MtaW5wdXQuaHRtbCIsIndlYnBhY2s6Ly93ZWItY29tcG9uZW50cy1qcy8uL2NvbXBvbmVudHMvYXdjLWxvYWRpbmcvYXdjLWxvYWRpbmcuaHRtbCIsIndlYnBhY2s6Ly93ZWItY29tcG9uZW50cy1qcy8uL2NvbXBvbmVudHMvYXdjLW1lc3NhZ2UvYXdjLW1lc3NhZ2UuaHRtbCIsIndlYnBhY2s6Ly93ZWItY29tcG9uZW50cy1qcy8uL2NvbXBvbmVudHMvYXdjLW9wdGlvbi9hd2Mtb3B0aW9uLmh0bWwiLCJ3ZWJwYWNrOi8vd2ViLWNvbXBvbmVudHMtanMvLi9jb21wb25lbnRzL2F3Yy1wYWdpbmF0aW9uL2F3Yy1wYWdpbmF0aW9uLmh0bWwiLCJ3ZWJwYWNrOi8vd2ViLWNvbXBvbmVudHMtanMvLi9jb21wb25lbnRzL2F3Yy1wb3BvdmVyL2F3Yy1wb3Bib2R5Lmh0bWwiLCJ3ZWJwYWNrOi8vd2ViLWNvbXBvbmVudHMtanMvLi9jb21wb25lbnRzL2F3Yy1wb3BvdmVyL2F3Yy1wb3BvdmVyLmh0bWwiLCJ3ZWJwYWNrOi8vd2ViLWNvbXBvbmVudHMtanMvLi9jb21wb25lbnRzL2F3Yy1yYWRpby9hd2MtcmFkaW8uaHRtbCIsIndlYnBhY2s6Ly93ZWItY29tcG9uZW50cy1qcy8uL2NvbXBvbmVudHMvYXdjLXJhdGUvYXdjLXJhdGUuaHRtbCIsIndlYnBhY2s6Ly93ZWItY29tcG9uZW50cy1qcy8uL2NvbXBvbmVudHMvYXdjLXNsaWRlci9hd2Mtc2xpZGVyLmh0bWwiLCJ3ZWJwYWNrOi8vd2ViLWNvbXBvbmVudHMtanMvLi9jb21wb25lbnRzL2F3Yy1zd2l0Y2gvYXdjLXN3aXRjaC5odG1sIiwid2VicGFjazovL3dlYi1jb21wb25lbnRzLWpzLy4vY29tcG9uZW50cy9hd2MtdGFicy9hd2MtdGFiLmh0bWwiLCJ3ZWJwYWNrOi8vd2ViLWNvbXBvbmVudHMtanMvLi9jb21wb25lbnRzL2F3Yy10YWJzL2F3Yy10YWJzLmh0bWwiLCJ3ZWJwYWNrOi8vd2ViLWNvbXBvbmVudHMtanMvLi9jb21wb25lbnRzL2F3Yy10b29sdGlwL2F3Yy10b29sdGlwLmh0bWwiLCJ3ZWJwYWNrOi8vd2ViLWNvbXBvbmVudHMtanMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2ViLWNvbXBvbmVudHMtanMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2ViLWNvbXBvbmVudHMtanMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYi1jb21wb25lbnRzLWpzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2ViLWNvbXBvbmVudHMtanMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWItY29tcG9uZW50cy1qcy8uL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vYXdjLWxvYWRpbmcvYXdjLWxvYWRpbmcuanMnXG5pbXBvcnQgJy4uL2F3Yy1pY29uL2F3Yy1pY29uLmpzJ1xuaW1wb3J0IGh0bWwgZnJvbSAnLi9hd2MtYnV0dG9uLmh0bWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBd2NCdXR0b24gZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG5cdHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xuXHRcdHJldHVybiBbJ2Rpc2FibGVkJywgJ2ljb24nLCAnbG9hZGluZyddO1xuXHR9XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLl9yZW5kZXIoKTtcblx0fVxuXG5cdGdldCBkaXNhYmxlZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJykgIT09IG51bGw7XG5cdH1cblxuICAgIHNldCBkaXNhYmxlZCh2YWx1ZSkge1xuXHRcdGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gZmFsc2UpIHtcblx0XHRcdHRoaXMucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJyk7XG5cdFx0fVxuXHR9XG5cblx0Z2V0IGljb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdpY29uJyk7XG5cdH1cblxuICAgIHNldCBpY29uKHZhbHVlKSB7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGUoJ2ljb24nLCB2YWx1ZSk7XG5cdH1cblxuXHRnZXQgbG9hZGluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2xvYWRpbmcnKSAhPT0gbnVsbDtcblx0fVxuXG5cdHNldCBsb2FkaW5nKHZhbHVlKSB7XG5cdFx0aWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSBmYWxzZSkge1xuXHRcdFx0dGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ2xvYWRpbmcnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zZXRBdHRyaWJ1dGUoJ2xvYWRpbmcnLCAnJyk7XG5cdFx0fVxuXHR9XG5cbiAgICBmb2N1cygpIHtcblx0XHR0aGlzLmJ0bkVsLmZvY3VzKCk7XG5cdH1cblxuXHRjb25uZWN0ZWRDYWxsYmFjaygpIHtcblx0XHR0aGlzLmJ0bkVsID0gdGhpcy5zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKCdidG4nKTtcblx0XHR0aGlzLmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZDtcblx0XHR0aGlzLmxvYWRpbmcgPSB0aGlzLmxvYWRpbmc7XG4gICAgICAgIGlmICghdGhpcy5sb2FkaW5nICYmIHRoaXMuaWNvbiAmJiB0aGlzLmljb24gIT0gJ251bGwnKSB7XG4gICAgICAgICAgICB0aGlzLmljb25FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2F3Yy1pY29uJyk7XG4gICAgICAgICAgICB0aGlzLmljb25FbC5uYW1lID0gdGhpcy5pY29uO1xuICAgICAgICAgICAgdGhpcy5zaGFkb3dSb290LnByZXBlbmQodGhpcy5pY29uRWwpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxvYWRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZEVMID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXdjLWxvYWRpbmcnKTtcbiAgICAgICAgICAgIHRoaXMubG9hZEVMLnN0eWxlLmNvbG9yID0gJ2luaGVyaXQnO1xuICAgICAgICAgICAgdGhpcy5zaGFkb3dSb290LnByZXBlbmQodGhpcy5sb2FkRUwpO1xuICAgICAgICB9XG5cdH1cblxuXHRhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG5cdFx0aWYgKG5hbWUgPT0gJ2Rpc2FibGVkJyAmJiB0aGlzLmJ0bkVsKSB7XG5cdFx0XHRpZiAobmV3VmFsdWUgIT09IG51bGwpIHtcblx0XHRcdFx0dGhpcy5idG5FbC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmJ0bkVsLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKG5hbWUgPT0gJ2xvYWRpbmcnICYmIHRoaXMubG9hZEVMKSB7XG5cdFx0XHRpZiAobmV3VmFsdWUgIT09IG51bGwpIHtcblx0XHRcdFx0dGhpcy5zaGFkb3dSb290LnByZXBlbmQodGhpcy5sb2FkRUwpO1xuXHRcdFx0XHR0aGlzLmJ0bkVsLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuc2hhZG93Um9vdC5yZW1vdmVDaGlsZCh0aGlzLmxvYWRFTCk7XG5cdFx0XHRcdHRoaXMuYnRuRWwucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAobmFtZSA9PSAnaWNvbicgJiYgdGhpcy5pY29uRWwpIHtcblx0XHRcdHRoaXMuaWNvbkVsLm5hbWUgPSBuZXdWYWx1ZVxuXHRcdH1cblx0fVxuXG4gICAgX3JlbmRlcigpIHtcbiAgICAgICAgY29uc3Qgc2hhZG93Um9vdCA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuXHRcdHNoYWRvd1Jvb3QuaW5uZXJIVE1MID0gaHRtbDtcbiAgICB9XG59XG5cbmlmICghY3VzdG9tRWxlbWVudHMuZ2V0KCdhd2MtYnV0dG9uJykpIHtcblx0Y3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhd2MtYnV0dG9uJywgQXdjQnV0dG9uKVxufVxuIiwiaW1wb3J0IGh0bWwgZnJvbSAnLi9hd2MtY2hlY2tib3guaHRtbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF3Y0NoZWNrYm94IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuXHRzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcblx0XHRyZXR1cm4gWydkaXNhYmxlZCcsICdjaGVja2VkJ107XG5cdH1cblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuX3JlbmRlcigpO1xuXHR9XG5cblx0Z2V0IGRpc2FibGVkKCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnZGlzYWJsZWQnKSAhPT0gbnVsbDtcblx0fVxuXG5cdHNldCBkaXNhYmxlZCh2YWx1ZSkge1xuXHRcdGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gZmFsc2UpIHtcblx0XHRcdHRoaXMucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJyk7XG5cdFx0fVxuXHR9XG5cblx0Z2V0IGNoZWNrZWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdjaGVja2VkJykgIT09IG51bGw7XG5cdH1cblxuXHRzZXQgY2hlY2tlZCh2YWx1ZSkge1xuXHRcdGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gZmFsc2UpIHtcblx0XHRcdHRoaXMucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJycpO1xuXHRcdH1cblx0fVxuXG5cdGdldCBpbmRldGVybWluYXRlKCkge1xuXHRcdHJldHVybiB0aGlzLmNoZWNrYm94RWwuaW5kZXRlcm1pbmF0ZTtcblx0fVxuXG5cdHNldCBpbmRldGVybWluYXRlKHZhbHVlKSB7XG5cdFx0aWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSBmYWxzZSkge1xuXHRcdFx0dGhpcy5jaGVja2JveEVsLmluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5jaGVja2JveEVsLmluZGV0ZXJtaW5hdGUgPSB0cnVlO1xuXHRcdH1cblx0fVxuXG5cdGdldCB2YWx1ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykgfHwgdGhpcy50ZXh0Q29udGVudDtcblx0fVxuXG5cdGdldCBuYW1lKCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnbmFtZScpO1xuXHR9XG5cblx0Zm9jdXMoKSB7XG5cdFx0dGhpcy5jaGVja2JveEVsLmZvY3VzKCk7XG5cdH1cblxuXHRhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG5cdFx0aWYgKG5hbWUgPT0gJ2Rpc2FibGVkJyAmJiB0aGlzLmNoZWNrYm94RWwpIHtcblx0XHRcdGlmIChuZXdWYWx1ZSAhPT0gbnVsbCkge1xuXHRcdFx0XHR0aGlzLmNoZWNrYm94RWwuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5jaGVja2JveEVsLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKG5hbWUgPT0gJ2NoZWNrZWQnICYmIHRoaXMuY2hlY2tib3hFbCkge1xuXHRcdFx0aWYgKG5ld1ZhbHVlICE9PSBudWxsKSB7XG5cdFx0XHRcdHRoaXMuY2hlY2tib3hFbC5jaGVja2VkID0gdHJ1ZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuY2hlY2tib3hFbC5jaGVja2VkID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Y29ubmVjdGVkQ2FsbGJhY2soKSB7XG5cdFx0dGhpcy5jaGVja2JveEVsID0gdGhpcy5zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKCdjaGVja2JveCcpO1xuXHRcdHRoaXMuZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkO1xuXHRcdHRoaXMuY2hlY2tlZCA9IHRoaXMuY2hlY2tlZDtcblx0XHR0aGlzLmNoZWNrYm94RWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2KSA9PiB7XG5cdFx0XHR0aGlzLmNoZWNrZWQgPSB0aGlzLmNoZWNrYm94RWwuY2hlY2tlZDtcblx0XHRcdHRoaXMuZGlzcGF0Y2hFdmVudChcblx0XHRcdFx0bmV3IEN1c3RvbUV2ZW50KCdjaGFuZ2UnLCB7XG5cdFx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0XHRjaGVja2VkOiB0aGlzLmNoZWNrZWQsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdFx0fSk7XG5cdFx0dGhpcy5jaGVja2JveEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKGV2KSA9PiB7XG5cdFx0XHRldi5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdGlmICghdGhpcy5faXNmb2N1cykge1xuXHRcdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoXG5cdFx0XHRcdFx0bmV3IEN1c3RvbUV2ZW50KCdmb2N1cycsIHtcblx0XHRcdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdFx0XHR2YWx1ZTogdGhpcy52YWx1ZSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHR0aGlzLmNoZWNrYm94RWwuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIChldikgPT4ge1xuXHRcdFx0ZXYuc3RvcFByb3BhZ2F0aW9uKClcblx0XHRcdGlmIChnZXRDb21wdXRlZFN0eWxlKHRoaXMuY2hlY2tib3hFbCkuekluZGV4ID09IDIpIHtcblx0XHRcdFx0dGhpcy5faXNmb2N1cyA9IHRydWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLl9pc2ZvY3VzID0gZmFsc2U7XG5cdFx0XHRcdHRoaXMuZGlzcGF0Y2hFdmVudChcblx0XHRcdFx0XHRuZXcgQ3VzdG9tRXZlbnQoJ2JsdXInLCB7XG5cdFx0XHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRcdFx0dmFsdWU6IHRoaXMudmFsdWUsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRfcmVuZGVyKCkge1xuXHRcdGNvbnN0IHNoYWRvd1Jvb3QgPSB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcblx0XHRzaGFkb3dSb290LmlubmVySFRNTCA9IGh0bWw7XG5cdH1cbn1cblxuaWYgKCFjdXN0b21FbGVtZW50cy5nZXQoJ2F3Yy1jaGVja2JveCcpKSB7XG5cdGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXdjLWNoZWNrYm94JywgQXdjQ2hlY2tib3gpO1xufVxuIiwiaW1wb3J0ICcuLi9hd2MtYnV0dG9uL2F3Yy1idXR0b24uanMnXG5pbXBvcnQgaHRtbCBmcm9tICcuL2F3Yy1kaWFsb2cuaHRtbCc7XG5cbmNsYXNzIEF3Y0RpYWxvZyBleHRlbmRzIEhUTUxFbGVtZW50IHtcblx0c3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XG5cdFx0cmV0dXJuIFsnb3BlbicsICd0aXRsZScsICdva3RleHQnLCAnY2FuY2VsdGV4dCcsICd0eXBlJ11cblx0fVxuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5fcmVuZGVyKCk7XG5cdH1cblxuXHRnZXQgb3BlbigpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ29wZW4nKSAhPT0gbnVsbDtcblx0fVxuXG5cdHNldCBvcGVuKHZhbHVlKSB7XG5cdFx0aWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSBmYWxzZSkge1xuXHRcdFx0dGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ29wZW4nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zZXRBdHRyaWJ1dGUoJ29wZW4nLCAnJyk7XG5cdFx0fVxuXHR9XG5cblx0Z2V0IHRpdGxlKCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgndGl0bGUnKSB8fCAnZGlhbG9nJztcblx0fVxuXG5cdHNldCB0aXRsZSh2YWx1ZSkge1xuXHRcdHRoaXMuc2V0QXR0cmlidXRlKCd0aXRsZScsIHZhbHVlKTtcblx0fVxuXG5cdGdldCB0eXBlKCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgndHlwZScpO1xuXHR9XG5cblx0c2V0IHR5cGUodmFsdWUpIHtcblx0XHR0aGlzLnNldEF0dHJpYnV0ZSgndHlwZScsIHZhbHVlKTtcblx0fVxuXG5cdGdldCBva3RleHQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdva3RleHQnKSB8fCAnb2snO1xuXHR9XG5cblx0c2V0IG9rdGV4dCh2YWx1ZSkge1xuXHRcdHRoaXMuc2V0QXR0cmlidXRlKCdva3RleHQnLCB2YWx1ZSk7XG5cdH1cblxuXHRnZXQgY2FuY2VsdGV4dCgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2NhbmNlbHRleHQnKSB8fCAnY2FuY2VsJztcblx0fVxuXG5cdHNldCBjYW5jZWx0ZXh0KHZhbHVlKSB7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGUoJ2NhbmNlbHRleHQnLCB2YWx1ZSk7XG5cdH1cblxuXHRhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG5cdFx0aWYgKG5hbWUgPT0gJ29wZW4nICYmIHRoaXMuc2hhZG93Um9vdCkge1xuXHRcdFx0aWYgKG5ld1ZhbHVlICE9PSBudWxsKSB7XG5cdFx0XHRcdHRoaXMuYnRuQWN0aXZlRWwgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAobmFtZSA9PSAndGl0bGUnICYmIHRoaXMudGl0bGVFbCkge1xuXHRcdFx0aWYgKG5ld1ZhbHVlICE9PSBudWxsKSB7XG5cdFx0XHRcdHRoaXMudGl0bGVFbC50ZXh0Q29udGVudCA9IG5ld1ZhbHVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAobmFtZSA9PSAnb2t0ZXh0JyAmJiB0aGlzLmJ0blN1Ym1pdEVsKSB7XG5cdFx0XHRpZiAobmV3VmFsdWUgIT09IG51bGwpIHtcblx0XHRcdFx0dGhpcy5idG5TdWJtaXRFbC50ZXh0Q29udGVudCA9IG5ld1ZhbHVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAobmFtZSA9PSAnY2FuY2VsdGV4dCcgJiYgdGhpcy5idG5DYW5jZWxFbCkge1xuXHRcdFx0aWYgKG5ld1ZhbHVlICE9PSBudWxsKSB7XG5cdFx0XHRcdHRoaXMuYnRuQ2FuY2VsRWwudGV4dENvbnRlbnQgPSBuZXdWYWx1ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKG5hbWUgPT0gJ3R5cGUnICYmIHRoaXMuZGlhbG9nSWNvbkVsKSB7XG5cdFx0XHRpZiAobmV3VmFsdWUgIT09IG51bGwpIHtcblx0XHRcdFx0dGhpcy5kaWFsb2dJY29uRWwubmFtZSA9IHRoaXMuX3R5cGVNYXAobmV3VmFsdWUpLm5hbWU7XG5cdFx0XHRcdHRoaXMuZGlhbG9nSWNvbkVsLmNvbG9yID0gdGhpcy5fdHlwZU1hcChuZXdWYWx1ZSkuY29sb3I7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Y29ubmVjdGVkQ2FsbGJhY2soKSB7XG5cdFx0dGhpcy5yZW1vdmUgPSBmYWxzZTtcblx0XHR0aGlzLl9hdXRvY2xvc2UgPSB0cnVlO1xuXHRcdHRoaXMudGl0bGVFbCA9IHRoaXMuc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKTtcblx0XHR0aGlzLmJ0bkNsb3NlRWwgPSB0aGlzLnNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1jbG9zZScpO1xuXHRcdHRoaXMuYnRuQ2FuY2VsRWwgPSB0aGlzLnNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1jYW5jZWwnKTtcblx0XHR0aGlzLmJ0blN1Ym1pdEVsID0gdGhpcy5zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKCdidG4tc3VibWl0Jyk7XG5cdFx0dGhpcy5kaWFsb2dJY29uRWwgPSB0aGlzLnNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoJ2RpYWxvZy1pY29uJyk7XG5cdFx0dGhpcy50aXRsZUVsLmlubmVySFRNTCA9IHRoaXMudGl0bGU7XG5cdFx0dGhpcy5idG5DYW5jZWxFbC5pbm5lckhUTUwgPSB0aGlzLmNhbmNlbHRleHQ7XG5cdFx0dGhpcy5idG5TdWJtaXRFbC5pbm5lckhUTUwgPSB0aGlzLm9rdGV4dDtcblx0XHR0aGlzLnNoYWRvd1Jvb3QuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIChldikgPT4ge1xuXHRcdFx0aWYgKGV2LnByb3BlcnR5TmFtZSA9PT0gJ3RyYW5zZm9ybScgJiYgdGhpcy5vcGVuKSB7XG5cdFx0XHRcdHRoaXMuYnRuU3VibWl0RWwuZm9jdXMoKTtcblx0XHRcdH1cblx0XHR9KVxuXHRcdHRoaXMuc2hhZG93Um9vdC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgKGV2KSA9PiB7XG5cdFx0XHRpZiAoZXYucHJvcGVydHlOYW1lID09PSAndHJhbnNmb3JtJyAmJiAhdGhpcy5vcGVuKSB7XG5cdFx0XHRcdGlmICh0aGlzLnJlbW92ZSkge1xuXHRcdFx0XHRcdGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2xvc2UnKSk7XG5cdFx0XHRcdHRoaXMuYnRuQWN0aXZlRWwgJiYgdGhpcy5idG5BY3RpdmVFbC5mb2N1cygpO1xuXHRcdFx0fVxuXHRcdH0pXG5cdFx0dGhpcy5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIChldikgPT4ge1xuXHRcdFx0ZXYucHJldmVudERlZmF1bHQoKTtcblx0XHR9KTtcblx0XHR0aGlzLmJ0bkNsb3NlRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHR0aGlzLm9wZW4gPSBmYWxzZTtcblx0XHR9KTtcblx0XHR0aGlzLmJ0bkNhbmNlbEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuXHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2FuY2VsJykpO1xuXHRcdFx0dGhpcy5vcGVuID0gZmFsc2U7XG5cdFx0fSk7XG5cdFx0dGhpcy5idG5TdWJtaXRFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3N1Ym1pdCcpKTtcblx0XHRcdGlmICh0aGlzLl9hdXRvY2xvc2UpIHtcblx0XHRcdFx0dGhpcy5vcGVuID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblx0X3R5cGVNYXAodHlwZSkge1xuXHRcdGxldCBuYW1lID0gJyc7XG5cdFx0bGV0IGNvbG9yID0gJyc7XG5cdFx0c3dpdGNoICh0eXBlKSB7XG5cdFx0XHRjYXNlICdpbmZvJzpcblx0XHRcdFx0bmFtZSA9ICdpbmZvLWNpcmNsZSc7XG5cdFx0XHRcdGNvbG9yID0gJ3ZhcigtLWluZm9Db2xvciwgIzE4OTBmZiknO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ3N1Y2Nlc3MnOlxuXHRcdFx0XHRuYW1lID0gJ2NoZWNrLWNpcmNsZSdcblx0XHRcdFx0Y29sb3IgPSAndmFyKC0tc3VjY2Vzc0NvbG9yLCAjNTJjNDFhKSc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnZXJyb3InOlxuXHRcdFx0XHRuYW1lID0gJ2Nsb3NlLWNpcmNsZSdcblx0XHRcdFx0Y29sb3IgPSAndmFyKC0tZXJyb3JDb2xvciwgI2Y0NjE1YyknO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ3dhcm5pbmcnOlxuXHRcdFx0XHRuYW1lID0gJ3dhcm5pbmctY2lyY2xlJ1xuXHRcdFx0XHRjb2xvciA9ICd2YXIoLS13YXJpbmdDb2xvciwgI2ZhYWQxNCknO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2NvbmZpcm0nOlxuXHRcdFx0XHRuYW1lID0gJ3F1ZXN0aW9uLWNpcmNsZSdcblx0XHRcdFx0Y29sb3IgPSAndmFyKC0td2FyaW5nQ29sb3IsICNmYWFkMTQpJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdFx0cmV0dXJuIHtcblx0XHRcdG5hbWU6IG5hbWUsXG5cdFx0XHRjb2xvcjogY29sb3IsXG5cdFx0fTtcblx0fVxuXHRfcmVuZGVyKCkge1xuXHRcdGNvbnN0IHNoYWRvd1Jvb3QgPSB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcblx0XHRzaGFkb3dSb290LmlubmVySFRNTCA9IGh0bWw7XG5cdH1cbn1cblxuaWYgKCFjdXN0b21FbGVtZW50cy5nZXQoJ2F3Yy1kaWFsb2cnKSkge1xuXHRjdXN0b21FbGVtZW50cy5kZWZpbmUoJ2F3Yy1kaWFsb2cnLCBBd2NEaWFsb2cpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGFsZXJ0OiAoY29uZmlnLCBva0NhbGxiYWNrKSA9PiB7XG5cdFx0Y29uc3QgZGlhbG9nID0gbmV3IEF3Y0RpYWxvZygpO1xuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGlhbG9nKTtcblx0XHRkaWFsb2cucmVtb3ZlID0gdHJ1ZTtcblx0XHRpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcpIHtcblx0XHRcdGNvbnN0IHsgdGl0bGUsIG9rdGV4dCwgY29udGVudCwgb2sgfSA9IGNvbmZpZztcblx0XHRcdGRpYWxvZy50aXRsZSA9IHRpdGxlIHx8ICdBbGVydCc7XG5cdFx0XHRkaWFsb2cub2t0ZXh0ID0gb2t0ZXh0IHx8ICdPSyc7XG5cdFx0XHRkaWFsb2cub25zdWJtaXQgPSBvayB8fCBudWxsO1xuXHRcdFx0ZGlhbG9nLmlubmVySFRNTCA9IGNvbnRlbnQgfHwgJyc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRpYWxvZy50aXRsZSA9ICdBbGVydCc7XG5cdFx0XHRkaWFsb2cub2t0ZXh0ID0gJ09LJztcblx0XHRcdGRpYWxvZy5pbm5lckhUTUwgPSBjb25maWcgfHwgJyc7XG5cdFx0XHRkaWFsb2cub25zdWJtaXQgPSBva0NhbGxiYWNrIHx8IG51bGw7XG5cdFx0fVxuXHRcdGRpYWxvZy5vcGVuID0gdHJ1ZTtcblx0XHRyZXR1cm4gZGlhbG9nO1xuXHR9LFxuXG5cdGluZm86IChjb25maWcsIG9rQ2FsbGJhY2spID0+IHtcblx0XHRjb25zdCBkaWFsb2cgPSBuZXcgQXdjRGlhbG9nKCk7XG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaWFsb2cpO1xuXHRcdGRpYWxvZy50eXBlID0gJ2luZm8nO1xuXHRcdGRpYWxvZy5yZW1vdmUgPSB0cnVlO1xuXHRcdGlmICh0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0Jykge1xuXHRcdFx0Y29uc3QgeyB0aXRsZSwgb2t0ZXh0LCBjb250ZW50LCBvayB9ID0gY29uZmlnO1xuXHRcdFx0ZGlhbG9nLnRpdGxlID0gdGl0bGUgfHwgJ0luZm8nO1xuXHRcdFx0ZGlhbG9nLm9rdGV4dCA9IG9rdGV4dCB8fCAnT0snO1xuXHRcdFx0ZGlhbG9nLm9uc3VibWl0ID0gb2sgfHwgbnVsbDtcblx0XHRcdGRpYWxvZy5pbm5lckhUTUwgPSBjb250ZW50IHx8ICcnO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkaWFsb2cudGl0bGUgPSAnSW5mbyc7XG5cdFx0XHRkaWFsb2cub2t0ZXh0ID0gJ09LJztcblx0XHRcdGRpYWxvZy5pbm5lckhUTUwgPSBjb25maWcgfHwgJyc7XG5cdFx0XHRkaWFsb2cub25zdWJtaXQgPSBva0NhbGxiYWNrIHx8IG51bGw7XG5cdFx0fVxuXHRcdGRpYWxvZy5vcGVuID0gdHJ1ZTtcblx0XHRyZXR1cm4gZGlhbG9nO1xuXHR9LFxuXG5cdHN1Y2Nlc3M6IChjb25maWcsIG9rQ2FsbGJhY2spID0+IHtcblx0XHRjb25zdCBkaWFsb2cgPSBuZXcgQXdjRGlhbG9nKCk7XG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaWFsb2cpO1xuXHRcdGRpYWxvZy50eXBlID0gJ3N1Y2Nlc3MnO1xuXHRcdGRpYWxvZy5yZW1vdmUgPSB0cnVlO1xuXHRcdGlmICh0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0Jykge1xuXHRcdFx0Y29uc3QgeyB0aXRsZSwgb2t0ZXh0LCBjb250ZW50LCBvayB9ID0gY29uZmlnO1xuXHRcdFx0ZGlhbG9nLnRpdGxlID0gdGl0bGUgfHwgJ1N1Y2Nlc3MnO1xuXHRcdFx0ZGlhbG9nLm9rdGV4dCA9IG9rdGV4dCB8fCAnT0snO1xuXHRcdFx0ZGlhbG9nLm9uc3VibWl0ID0gb2sgfHwgbnVsbDtcblx0XHRcdGRpYWxvZy5pbm5lckhUTUwgPSBjb250ZW50IHx8ICcnO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkaWFsb2cudGl0bGUgPSAnU3VjY2Vzcyc7XG5cdFx0XHRkaWFsb2cub2t0ZXh0ID0gJ09LJztcblx0XHRcdGRpYWxvZy5pbm5lckhUTUwgPSBjb25maWcgfHwgJyc7XG5cdFx0XHRkaWFsb2cub25zdWJtaXQgPSBva0NhbGxiYWNrIHx8IG51bGw7XG5cdFx0fVxuXHRcdGRpYWxvZy5vcGVuID0gdHJ1ZTtcblx0XHRyZXR1cm4gZGlhbG9nO1xuXHR9LFxuXG5cdGVycm9yOiAoY29uZmlnLCBva0NhbGxiYWNrKSA9PiB7XG5cdFx0Y29uc3QgZGlhbG9nID0gbmV3IEF3Y0RpYWxvZygpO1xuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGlhbG9nKTtcblx0XHRkaWFsb2cudHlwZSA9ICdlcnJvcic7XG5cdFx0ZGlhbG9nLnJlbW92ZSA9IHRydWU7XG5cdFx0aWYgKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRjb25zdCB7IHRpdGxlLCBva3RleHQsIGNvbnRlbnQsIG9rIH0gPSBjb25maWc7XG5cdFx0XHRkaWFsb2cudGl0bGUgPSB0aXRsZSB8fCAnRXJyb3InO1xuXHRcdFx0ZGlhbG9nLm9rdGV4dCA9IG9rdGV4dCB8fCAnT0snO1xuXHRcdFx0ZGlhbG9nLm9uc3VibWl0ID0gb2sgfHwgbnVsbDtcblx0XHRcdGRpYWxvZy5pbm5lckhUTUwgPSBjb250ZW50IHx8ICcnO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkaWFsb2cudGl0bGUgPSAnRXJyb3InO1xuXHRcdFx0ZGlhbG9nLm9rdGV4dCA9ICdPSyc7XG5cdFx0XHRkaWFsb2cuaW5uZXJIVE1MID0gY29uZmlnIHx8ICcnO1xuXHRcdFx0ZGlhbG9nLm9uc3VibWl0ID0gb2tDYWxsYmFjayB8fCBudWxsO1xuXHRcdH1cblx0XHRkaWFsb2cub3BlbiA9IHRydWU7XG5cdFx0cmV0dXJuIGRpYWxvZztcblx0fSxcblxuXHR3YXJuaW5nOiAoY29uZmlnLCBva0NhbGxiYWNrKSA9PiB7XG5cdFx0Y29uc3QgZGlhbG9nID0gbmV3IEF3Y0RpYWxvZygpO1xuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGlhbG9nKTtcblx0XHRkaWFsb2cudHlwZSA9ICd3YXJuaW5nJztcblx0XHRkaWFsb2cucmVtb3ZlID0gdHJ1ZTtcblx0XHRpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcpIHtcblx0XHRcdGNvbnN0IHsgdGl0bGUsIG9rdGV4dCwgY29udGVudCwgb2sgfSA9IGNvbmZpZztcblx0XHRcdGRpYWxvZy50aXRsZSA9IHRpdGxlIHx8ICdXYXJuaW5nJztcblx0XHRcdGRpYWxvZy5va3RleHQgPSBva3RleHQgfHwgJ09LJztcblx0XHRcdGRpYWxvZy5vbnN1Ym1pdCA9IG9rIHx8IG51bGw7XG5cdFx0XHRkaWFsb2cuaW5uZXJIVE1MID0gY29udGVudCB8fCAnJztcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZGlhbG9nLnRpdGxlID0gJ1dhcm5pbmcnO1xuXHRcdFx0ZGlhbG9nLm9rdGV4dCA9ICdPSyc7XG5cdFx0XHRkaWFsb2cuaW5uZXJIVE1MID0gY29uZmlnIHx8ICcnO1xuXHRcdFx0ZGlhbG9nLm9uc3VibWl0ID0gb2tDYWxsYmFjayB8fCBudWxsO1xuXHRcdH1cblx0XHRkaWFsb2cub3BlbiA9IHRydWU7XG5cdFx0cmV0dXJuIGRpYWxvZztcblx0fSxcblxuXHRjb25maXJtOiAoY29uZmlnLCBva0NhbGxiYWNrLCBjYW5jZWxDYWxsYmFjaykgPT4ge1xuXHRcdGNvbnN0IGRpYWxvZyA9IG5ldyBBd2NEaWFsb2coKTtcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpYWxvZyk7XG5cdFx0ZGlhbG9nLnJlbW92ZSA9IHRydWU7XG5cdFx0ZGlhbG9nLmJ0bkNhbmNlbEVsLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG5cdFx0aWYgKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRjb25zdCB7IHR5cGUsIHRpdGxlLCBjb250ZW50LCBva3RleHQsIGNhbmNlbHRleHQsIG9rLCBjYW5jZWwgfSA9IGNvbmZpZztcblx0XHRcdGRpYWxvZy50eXBlID0gdHlwZSB8fCAnY29uZmlybSc7XG5cdFx0XHRkaWFsb2cudGl0bGUgPSB0aXRsZSB8fCAnQ29uZmlybSc7XG5cdFx0XHRkaWFsb2cub2t0ZXh0ID0gb2t0ZXh0IHx8ICdPSyc7XG5cdFx0XHRkaWFsb2cuY2FuY2VsdGV4dCA9IGNhbmNlbHRleHQgfHwgJ0NhbmNlbCc7XG5cdFx0XHRkaWFsb2cuaW5uZXJIVE1MID0gY29udGVudCB8fCAnJztcblx0XHRcdGRpYWxvZy5vbnN1Ym1pdCA9IG9rIHx8IG51bGw7XG5cdFx0XHRkaWFsb2cub25jYW5jZWwgPSBjYW5jZWwgfHwgbnVsbDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZGlhbG9nLnR5cGUgPSAnY29uZmlybSc7XG5cdFx0XHRkaWFsb2cudGl0bGUgPSAnQ29uZmlybSc7XG5cdFx0XHRkaWFsb2cub2t0ZXh0ID0gJ09LJztcblx0XHRcdGRpYWxvZy5jYW5jZWx0ZXh0ID0gJ0NhbmNlbCdcblx0XHRcdGRpYWxvZy5pbm5lckhUTUwgPSBjb25maWcgfHwgJyc7XG5cdFx0XHRkaWFsb2cub25zdWJtaXQgPSBva0NhbGxiYWNrIHx8IG51bGw7XG5cdFx0XHRkaWFsb2cub25jYW5jZWwgPSBjYW5jZWxDYWxsYmFjayB8fCBudWxsO1xuXHRcdH1cblx0XHRkaWFsb2cub3BlbiA9IHRydWU7XG5cdFx0cmV0dXJuIGRpYWxvZztcblx0fVxufVxuIiwiaW1wb3J0ICcuLi9hd2Mtb3B0aW9uL2F3Yy1vcHRpb24nXG5pbXBvcnQgJy4uL2F3Yy1wb3BvdmVyL2F3Yy1wb3BvdmVyJztcbmltcG9ydCBodG1sIGZyb20gJy4vYXdjLWRyb3Bkb3duLmh0bWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDU2VsZWN0IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuXHRzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcblx0XHRyZXR1cm4gWyd2YWx1ZScsICdkaXNhYmxlZCcsICd0eXBlJ107XG5cdH1cblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuX3JlbmRlcigpO1xuXHR9XG5cblx0Z2V0IGRlZmF1bHR2YWx1ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RlZmF1bHR2YWx1ZScpIHx8ICcnO1xuXHR9XG5cblx0c2V0IGRlZmF1bHR2YWx1ZSh2YWx1ZSkge1xuXHRcdHRoaXMuc2V0QXR0cmlidXRlKCdkZWZhdWx0dmFsdWUnLCB2YWx1ZSk7XG5cdH1cblxuXHRnZXQgdmFsdWUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3ZhbHVlIHx8ICcnO1xuXHR9XG5cblx0c2V0IHZhbHVlKHZhbHVlKSB7XG5cdFx0aWYgKHZhbHVlID09PSAnJykge1xuXHRcdFx0dGhpcy5fdmFsdWUgPSAnJztcblx0XHRcdHRoaXMuX3RleHQgPSB0aGlzLnBsYWNlaG9sZGVyO1xuXHRcdFx0aWYgKHRoaXMuX2ZvY3VzSW5kZXggPj0gMCkge1xuXHRcdFx0XHRjb25zdCBjdXJyZW50ID0gdGhpcy5ub2Rlc1t0aGlzLl9mb2N1c0luZGV4XTtcblx0XHRcdFx0aWYgKGN1cnJlbnQpIHtcblx0XHRcdFx0XHR0aGlzLl9mb2N1c0luZGV4ID0gLTE7XG5cdFx0XHRcdFx0Y3VycmVudC5zZWxlY3RlZCA9IGZhbHNlO1xuXHRcdFx0XHRcdGN1cnJlbnQuZm9jdXNpbiA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5zZWFyY2gpIHtcblx0XHRcdFx0dGhpcy5zZWxlY3RFbC5wbGFjZWhvbGRlciA9IHRoaXMucGxhY2Vob2xkZXI7XG5cdFx0XHRcdHRoaXMuc2VsZWN0RWwudmFsdWUgPSAnJztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMudmFsdWVFbC50ZXh0Q29udGVudCA9IHRoaXMucGxhY2Vob2xkZXI7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cdFx0aWYgKHZhbHVlICE9PSB0aGlzLnZhbHVlKSB7XG5cdFx0XHR0aGlzLl92YWx1ZSA9IHZhbHVlO1xuXHRcdFx0Y29uc3QgcHJlID0gdGhpcy5xdWVyeVNlbGVjdG9yKGBhd2Mtb3B0aW9uW3NlbGVjdGVkXWApO1xuXHRcdFx0aWYgKHByZSkge1xuXHRcdFx0XHRwcmUuc2VsZWN0ZWQgPSBmYWxzZTtcblx0XHRcdFx0cHJlLmZvY3VzaW4gPSBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IGN1ciA9IHRoaXMucXVlcnlTZWxlY3RvcihgYXdjLW9wdGlvblt2YWx1ZT1cIiR7dmFsdWV9XCJdYCkgfHwgdGhpcy5xdWVyeVNlbGVjdG9yKGBhd2Mtb3B0aW9uYCk7XG5cdFx0XHR0aGlzLl9mb2N1c0luZGV4ID0gdGhpcy5ub2Rlcy5pbmRleE9mKGN1cik7XG5cdFx0XHRjdXIuc2VsZWN0ZWQgPSB0cnVlO1xuXHRcdFx0Y3VyLmZvY3VzaW4gPSB0cnVlO1xuXHRcdFx0dGhpcy5fdGV4dCA9IGN1ci50ZXh0Q29udGVudDtcblx0XHRcdGlmICh0aGlzLnNlYXJjaCkge1xuXHRcdFx0XHR0aGlzLnNlbGVjdEVsLnBsYWNlaG9sZGVyID0gdGhpcy5fdGV4dDtcblx0XHRcdFx0dGhpcy5zZWxlY3RFbC52YWx1ZSA9IHRoaXMuX3RleHQ7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnZhbHVlRWwudGV4dENvbnRlbnQgPSB0aGlzLl90ZXh0O1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuX25hdGl2ZWNsaWNrKSB7XG5cdFx0XHRcdHRoaXMuX25hdGl2ZWNsaWNrID0gZmFsc2U7XG5cdFx0XHRcdHRoaXMuZGlzcGF0Y2hFdmVudChcblx0XHRcdFx0XHRuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZScsIHtcblx0XHRcdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdFx0XHR2YWx1ZTogdmFsdWUsXG5cdFx0XHRcdFx0XHRcdHRleHQ6IHRoaXMuX3RleHQsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHRoaXMub3B0aW9uc0VsLm9wZW4gPSBmYWxzZTtcblx0fVxuXG5cdGdldCBlbXB0eSgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2VtcHR5JykgIT09IG51bGw7XG5cdH1cblxuXHRzZXQgZW1wdHkodmFsdWUpIHtcblx0XHRpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IGZhbHNlKSB7XG5cdFx0XHR0aGlzLnJlbW92ZUF0dHJpYnV0ZSgnZW1wdHknKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zZXRBdHRyaWJ1dGUoJ2VtcHR5JywgJycpO1xuXHRcdH1cblx0fVxuXG5cdGdldCBkaXNhYmxlZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJykgIT09IG51bGw7XG5cdH1cblxuXHRzZXQgZGlzYWJsZWQodmFsdWUpIHtcblx0XHRpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IGZhbHNlKSB7XG5cdFx0XHR0aGlzLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpO1xuXHRcdH1cblx0fVxuXG5cdGdldCB0eXBlKCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgndHlwZScpO1xuXHR9XG5cblx0Z2V0IHNlYXJjaCgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ3NlYXJjaCcpICE9PSBudWxsO1xuXHR9XG5cblx0Z2V0IHBsYWNlaG9sZGVyKCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInKSB8fCAnUGxlYXNlIFNlbGVjdCBJdGVtJztcblx0fVxuXG5cdGZvY3VzKCkge1xuXHRcdHRoaXMuc2VsZWN0RWwuZm9jdXMoKTtcblx0fVxuXG5cdHJlc2V0KCkge1xuXHRcdHRoaXMudmFsdWUgPSB0aGlzLmRlZmF1bHR2YWx1ZTtcblx0fVxuXG5cdGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpIHtcblx0XHRpZiAobmFtZSA9PSAnZGlzYWJsZWQnICYmIHRoaXMuc2VsZWN0RWwpIHtcblx0XHRcdGlmIChuZXdWYWx1ZSAhPSBudWxsKSB7XG5cdFx0XHRcdHRoaXMuc2VsZWN0RWwuZGlzYWJsZWQgPSB0cnVlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5zZWxlY3RFbC5kaXNhYmxlZCA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGNvbm5lY3RlZENhbGxiYWNrKCkge1xuXHRcdHRoaXMucm9vdEVsID0gdGhpcy5zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XG5cdFx0dGhpcy5vcHRpb25zRWwgPSB0aGlzLnNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoJ29wdGlvbnMnKTtcblx0XHR0aGlzLnNsb3RFbCA9IHRoaXMuc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZCgnc2xvdCcpO1xuXHRcdHRoaXMudmFsdWVFbCA9IHRoaXMuc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZCgndmFsdWUnKTtcblx0XHRjb25zdCBzZWxlY3RJbnB1dEVsID0gdGhpcy5zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKCdzZWxlY3RJbnB1dCcpO1xuXHRcdGNvbnN0IHNlbGVjdEJ1dHRvbkVsID0gdGhpcy5zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKCdzZWxlY3RCdXR0b24nKTtcblx0XHRpZiAodGhpcy5zZWFyY2gpIHtcblx0XHRcdHRoaXMuc2VsZWN0RWwgPSBzZWxlY3RJbnB1dEVsO1xuXHRcdFx0c2VsZWN0SW5wdXRFbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG5cdFx0XHRzZWxlY3RCdXR0b25FbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2VsZWN0RWwgPSBzZWxlY3RCdXR0b25FbDtcblx0XHRcdHNlbGVjdElucHV0RWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0c2VsZWN0QnV0dG9uRWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuXHRcdH1cblx0XHR0aGlzLl9mb2N1c0luZGV4ID0gLTE7XG5cdFx0dGhpcy5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWQ7XG5cdFx0dGhpcy5zZWxlY3RFbC5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWQ7XG5cdFx0dGhpcy5zZWxlY3RFbC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCB0aGlzLnR5cGUpO1xuXHRcdHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldikgPT4ge1xuXHRcdFx0aWYgKHRoaXMub3B0aW9uc0VsLm9wZW4pIHtcblx0XHRcdFx0c3dpdGNoIChldi5rZXkpIHtcblx0XHRcdFx0XHRjYXNlICdUYWInOlxuXHRcdFx0XHRcdFx0ZXYucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ0Fycm93VXAnOlxuXHRcdFx0XHRcdFx0ZXYucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdHRoaXMuX21vdmUoLTEpXG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICdBcnJvd0Rvd24nOlxuXHRcdFx0XHRcdFx0ZXYucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdHRoaXMuX21vdmUoMSlcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ0VzY2FwZSc6XG5cdFx0XHRcdFx0XHRldi5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0dGhpcy5vcHRpb25zRWwub3BlbiA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzd2l0Y2ggKGV2LmtleSkge1xuXHRcdFx0XHRcdGNhc2UgJ0Fycm93VXAnOlxuXHRcdFx0XHRcdFx0ZXYucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdHRoaXMuX21vdmVpbigtMSk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICdBcnJvd0Rvd24nOlxuXHRcdFx0XHRcdFx0ZXYucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdHRoaXMuX21vdmVpbigxKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pXG5cdFx0dGhpcy5zZWxlY3RFbC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIChldikgPT4ge1xuXHRcdFx0ZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRpZiAoIXRoaXMuaXNmb2N1cykge1xuXHRcdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoXG5cdFx0XHRcdFx0bmV3IEN1c3RvbUV2ZW50KCdmb2N1cycsIHtcblx0XHRcdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdFx0XHR2YWx1ZTogdGhpcy52YWx1ZSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9KVxuXHRcdHRoaXMub3B0aW9uc0VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2KSA9PiB7XG5cdFx0XHR0aGlzLmZvY3VzKCk7XG5cdFx0XHRjb25zdCBpdGVtID0gZXYudGFyZ2V0LmNsb3Nlc3QoJ2F3Yy1vcHRpb24nKTtcblx0XHRcdGlmIChpdGVtKSB7XG5cdFx0XHRcdHRoaXMuX25hdGl2ZWNsaWNrID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy52YWx1ZSA9IGl0ZW0udmFsdWU7XG5cdFx0XHR9XG5cdFx0fSlcblx0XHR0aGlzLm9wdGlvbnNFbC5hZGRFdmVudExpc3RlbmVyKCdjbG9zZScsIChldikgPT4ge1xuXHRcdFx0aWYgKHRoaXMuc2VhcmNoKSB7XG5cdFx0XHRcdHRoaXMuc2VsZWN0RWwucmVhZG9ubHkgPSB0cnVlO1xuXHRcdFx0XHR0aGlzLnNlbGVjdEVsLnZhbHVlID0gdGhpcy5fdGV4dDtcblx0XHRcdFx0dGhpcy5ub2RlcyA9IFsuLi50aGlzLnF1ZXJ5U2VsZWN0b3JBbGwoYGF3Yy1vcHRpb246bm90KFtkaXNhYmxlZF0pYCldO1xuXHRcdFx0XHR0aGlzLmZpbHRlci50ZXh0Q29udGVudCA9ICcnO1xuXHRcdFx0XHR0aGlzLmVtcHR5ID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBwbGFjZSA9IHRoaXMucXVlcnlTZWxlY3RvcihgYXdjLW9wdGlvbltmb2N1c2luXWApO1xuXHRcdFx0Y29uc3QgY3VycmVudCA9IHRoaXMucXVlcnlTZWxlY3RvcihgYXdjLW9wdGlvbltzZWxlY3RlZF1gKTtcblx0XHRcdGlmIChwbGFjZSkge1xuXHRcdFx0XHRwbGFjZS5mb2N1c2luID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY3VycmVudCkge1xuXHRcdFx0XHRjdXJyZW50LmZvY3VzaW4gPSB0cnVlO1xuXHRcdFx0XHR0aGlzLl9mb2N1c0luZGV4ID0gdGhpcy5ub2Rlcy5pbmRleE9mKGN1cnJlbnQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5fZm9jdXNJbmRleCA9IC0xO1xuXHRcdFx0fVxuXHRcdH0pXG5cdFx0dGhpcy5vcHRpb25zRWwuYWRkRXZlbnRMaXN0ZW5lcignb3BlbicsIChldikgPT4ge1xuXHRcdFx0aWYgKHRoaXMuc2VhcmNoKSB7XG5cdFx0XHRcdHRoaXMuc2VsZWN0RWwudmFsdWUgPSAnJztcblx0XHRcdFx0dGhpcy5zZWxlY3RFbC5yZWFkb25seSA9IGZhbHNlO1xuXHRcdFx0XHR0aGlzLmZvY3VzKCk7XG5cdFx0XHR9XG5cdFx0fSlcblx0XHRpZiAodGhpcy5zZWFyY2gpIHtcblx0XHRcdHRoaXMuZmlsdGVyID0gdGhpcy5zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXInKTtcblx0XHRcdHRoaXMuc2VsZWN0RWwuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZXYpID0+IHtcblx0XHRcdFx0Y29uc3QgdmFsdWUgPSB0aGlzLnNlbGVjdEVsLnZhbHVlLnRyaW0oKTtcblx0XHRcdFx0aWYgKHZhbHVlID09PSAnJykge1xuXHRcdFx0XHRcdHRoaXMubm9kZXMgPSBbLi4udGhpcy5xdWVyeVNlbGVjdG9yQWxsKGBhd2Mtb3B0aW9uOm5vdChbZGlzYWJsZWRdKWApXTtcblx0XHRcdFx0XHR0aGlzLmZpbHRlci50ZXh0Q29udGVudCA9ICcnO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMubm9kZXMgPSBbXG5cdFx0XHRcdFx0XHQuLi50aGlzLnF1ZXJ5U2VsZWN0b3JBbGwoXG5cdFx0XHRcdFx0XHRcdGBhd2Mtb3B0aW9uW2tleSo9XCIke3ZhbHVlfVwiIGldOm5vdChbZGlzYWJsZWRdKWBcblx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XTtcblx0XHRcdFx0XHR0aGlzLmZpbHRlci50ZXh0Q29udGVudCA9IGBcbiAgICAgICAgICAgICAgICAgICAgOmhvc3QoW3NlYXJjaF0pIDo6c2xvdHRlZChhd2Mtb3B0aW9uOm5vdChba2V5Kj1cIiR7dmFsdWV9XCIgaV0pKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5Om5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYDtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBwbGFjZSA9IHRoaXMucXVlcnlTZWxlY3RvcihgYXdjLW9wdGlvbltmb2N1c2luXWApO1xuXHRcdFx0XHRpZiAocGxhY2UpIHtcblx0XHRcdFx0XHRwbGFjZS5mb2N1c2luID0gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHRoaXMubm9kZXNbMF0pIHtcblx0XHRcdFx0XHR0aGlzLm5vZGVzWzBdLmZvY3VzaW4gPSB0cnVlO1xuXHRcdFx0XHRcdHRoaXMuZW1wdHkgPSBmYWxzZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLmVtcHR5ID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLl9mb2N1c0luZGV4ID0gMDtcblx0XHRcdH0pXG5cdFx0XHR0aGlzLnNlbGVjdEVsLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldikgPT4ge1xuXHRcdFx0XHRpZiAoIXRoaXMub3B0aW9uc0VsLm9wZW4pIHtcblx0XHRcdFx0XHR0aGlzLm9wdGlvbnNFbC5vcGVuID0gdHJ1ZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjb25zdCBpdGVtID0gdGhpcy5ub2Rlc1t0aGlzLl9mb2N1c0luZGV4XTtcblx0XHRcdFx0XHR0aGlzLl9uYXRpdmVjbGljayA9IHRydWU7XG5cdFx0XHRcdFx0aWYgKGl0ZW0pIHtcblx0XHRcdFx0XHRcdHRoaXMudmFsdWUgPSBpdGVtLnZhbHVlO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLnZhbHVlID0gdGhpcy5fdmFsdWU7XG5cdFx0XHRcdFx0XHR0aGlzLm9wdGlvbnNFbC5vcGVuID0gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2KSA9PiB7XG5cdFx0XHRcdGlmICghdGhpcy5vcHRpb25zRWwub3Blbikge1xuXHRcdFx0XHRcdGNvbnN0IGl0ZW0gPSB0aGlzLm5vZGVzW3RoaXMuX2ZvY3VzSW5kZXhdO1xuXHRcdFx0XHRcdGlmIChpdGVtKSB7XG5cdFx0XHRcdFx0XHR0aGlzLl9uYXRpdmVjbGljayA9IHRydWU7XG5cdFx0XHRcdFx0XHR0aGlzLnZhbHVlID0gaXRlbS52YWx1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0fVxuXHRcdHRoaXMuc2VsZWN0RWwuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIChldikgPT4ge1xuXHRcdFx0ZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRpZiAoZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLnJvb3RFbCkuekluZGV4ID09IDIpIHtcblx0XHRcdFx0dGhpcy5pc2ZvY3VzID0gdHJ1ZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuaXNmb2N1cyA9IGZhbHNlO1xuXHRcdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoXG5cdFx0XHRcdFx0bmV3IEN1c3RvbUV2ZW50KCdibHVyJywge1xuXHRcdFx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0XHRcdHZhbHVlOiB0aGlzLnZhbHVlLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpXG5cdFx0XHR9XG5cdFx0fSlcblx0XHR0aGlzLnNsb3RFbC5hZGRFdmVudExpc3RlbmVyKCdzbG90Y2hhbmdlJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5ub2RlcyA9IFsuLi50aGlzLnF1ZXJ5U2VsZWN0b3JBbGwoYGF3Yy1vcHRpb246bm90KFtkaXNhYmxlZF0pYCldO1xuXHRcdFx0aWYgKCF0aGlzLmRlZmF1bHR2YWx1ZSkge1xuXHRcdFx0XHR0aGlzLnZhbHVlID0gJyc7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnZhbHVlID0gdGhpcy5kZWZhdWx0dmFsdWU7XG5cdFx0XHR9XG5cdFx0fSlcblx0fVxuXG5cdF9tb3ZlKGRpcikge1xuXHRcdGNvbnN0IHByZSA9IHRoaXMubm9kZXNbdGhpcy5fZm9jdXNJbmRleF07XG5cdFx0Y29uc3QgZm9jdXNJbmRleCA9IGRpciArIHRoaXMuX2ZvY3VzSW5kZXg7XG5cdFx0Y29uc3QgY3VycmVudCA9IHRoaXMubm9kZXNbZm9jdXNJbmRleF07XG5cdFx0aWYgKGN1cnJlbnQpIHtcblx0XHRcdGlmIChwcmUpIHtcblx0XHRcdFx0cHJlLmZvY3VzaW4gPSBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGN1cnJlbnQuZm9jdXNpbiA9IHRydWU7XG5cdFx0XHR0aGlzLl9mb2N1c0luZGV4ID0gZm9jdXNJbmRleDtcblx0XHR9XG5cdH1cblxuXHRfbW92ZWluKGRpcikge1xuXHRcdHRoaXMuX2ZvY3VzSW5kZXggPSBkaXIgKyB0aGlzLl9mb2N1c0luZGV4O1xuXHRcdGlmICh0aGlzLl9mb2N1c0luZGV4IDwgMCkge1xuXHRcdFx0dGhpcy5fZm9jdXNJbmRleCA9IHRoaXMubm9kZXMubGVuZ3RoIC0gMTtcblx0XHR9XG5cdFx0aWYgKHRoaXMuX2ZvY3VzSW5kZXggPT09IHRoaXMubm9kZXMubGVuZ3RoKSB7XG5cdFx0XHR0aGlzLl9mb2N1c0luZGV4ID0gMDtcblx0XHR9XG5cdFx0dGhpcy5fbmF0aXZlY2xpY2sgPSB0cnVlO1xuXHRcdHRoaXMudmFsdWUgPSB0aGlzLm5vZGVzW3RoaXMuX2ZvY3VzSW5kZXhdLnZhbHVlO1xuXHR9XG5cblx0X3JlbmRlcigpIHtcblx0XHRjb25zdCBzaGFkb3dSb290ID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG5cdFx0c2hhZG93Um9vdC5pbm5lckhUTUwgPSBodG1sO1xuXHR9XG59XG5cbmlmICghY3VzdG9tRWxlbWVudHMuZ2V0KCdhd2MtZHJvcGRvd24nKSkge1xuXHRjdXN0b21FbGVtZW50cy5kZWZpbmUoJ2F3Yy1kcm9wZG93bicsIENTZWxlY3QpXG59XG4iLCJpbXBvcnQgaHRtbCBmcm9tICcuL2F3Yy1mb3JtLWl0ZW0uaHRtbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF3Y0Zvcm1JdGVtIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuX3JlbmRlcigpO1xuXHR9XG5cblx0Z2V0IGxlZ2VuZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2xlZ2VuZCcpIHx8ICcnO1xuXHR9XG5cblx0c2V0IGxlZ2VuZCh2YWx1ZSkge1xuXHRcdHRoaXMuc2V0QXR0cmlidXRlKCdsZWdlbmQnLCB2YWx1ZSk7XG5cdH1cblxuXHRjb25uZWN0ZWRDYWxsYmFjaygpIHtcblx0XHRjb25zdCBsYWJlbHNFbCA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCdsYWJlbCcpO1xuXHRcdGNvbnN0IHNsb3RzRWwgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3Rvcignc2xvdCcpO1xuICAgICAgICBsYWJlbHNFbC5pbm5lckhUTUwgPSB0aGlzLmxlZ2VuZDtcblx0XHRzbG90c0VsLmFkZEV2ZW50TGlzdGVuZXIoJ3Nsb3RjaGFuZ2UnLCAoKSA9PiB7XG5cdFx0XHRjb25zdCBpbnB1dEVsID0gdGhpcy5xdWVyeVNlbGVjdG9yKCdbbmFtZV0nKTtcblx0XHRcdGlmIChpbnB1dEVsICYmIGlucHV0RWwucmVxdWlyZWQpIHtcblx0XHRcdFx0bGFiZWxzRWwuY2xhc3NMaXN0LmFkZCgncmVxdWlyZWQnKTtcblx0XHRcdH1cblx0XHR9KVxuXHR9XG5cbiAgICBfcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBzaGFkb3dSb290ID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG5cdFx0c2hhZG93Um9vdC5pbm5lckhUTUwgPSBodG1sO1xuICAgIH1cbn1cblxuaWYgKCFjdXN0b21FbGVtZW50cy5nZXQoJ2F3Yy1mb3JtLWl0ZW0nKSkge1xuXHRjdXN0b21FbGVtZW50cy5kZWZpbmUoJ2F3Yy1mb3JtLWl0ZW0nLCBBd2NGb3JtSXRlbSk7XG59IiwiaW1wb3J0IGh0bWwgZnJvbSAnLi9hd2MtZm9ybS5odG1sJztcbmltcG9ydCAnLi9hd2MtZm9ybS1pdGVtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXdjRm9ybSBleHRlbmRzIEhUTUxFbGVtZW50IHtcblx0c3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XG5cdFx0cmV0dXJuIFsnZGlzYWJsZWQnXTtcblx0fVxuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5fcmVuZGVyKCk7XG5cdH1cblxuXHRnZXQgbWV0aG9kKCkge1xuXHRcdGNvbnN0IG1ldGhvZCA9ICh0aGlzLmdldEF0dHJpYnV0ZSgnbWV0aG9kJykgfHwgJ2dldCcpLnRvVXBwZXJDYXNlKCk7XG5cdFx0aWYgKFsnR0VUJywgJ1BPU1QnXS5pbmNsdWRlcyhtZXRob2QpKSB7XG5cdFx0XHRyZXR1cm4gbWV0aG9kO1xuXHRcdH1cblx0XHRyZXR1cm4gJ0dFVCc7XG5cdH1cblxuXHRnZXQgYWN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnYWN0aW9uJykgfHwgJyc7XG5cdH1cblxuXHRzZXQgdHlwZSh2YWx1ZSkge1xuXHRcdHRoaXMuc2V0QXR0cmlidXRlKCd0eXBlJywgdmFsdWUpO1xuXHR9XG5cblx0Z2V0IHZhbGlkaXR5KCkge1xuXHRcdHJldHVybiB0aGlzLmVsZW1lbnRzLmV2ZXJ5KChlbCkgPT4gZWwudmFsaWRpdHkpO1xuXHR9XG5cblx0Z2V0IGRpc2FibGVkKCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnZGlzYWJsZWQnKSAhPT0gbnVsbDtcblx0fVxuXG5cdGdldCBmb3JtZGF0YSgpIHtcblx0XHRjb25zdCBmb3JtZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXHRcdGNvbnN0IGpzb25kYXRhID0ge307XG5cdFx0aWYgKCF0aGlzLmRpc2FibGVkKSB7XG5cdFx0XHR0aGlzLmVsZW1lbnRzLmZvckVhY2goKGVsKSA9PiB7XG5cdFx0XHRcdGZvcm1kYXRhLnNldChlbC5uYW1lLCBlbC52YWx1ZSk7XG5cdFx0XHRcdGpzb25kYXRhW2VsLm5hbWVdID0gZWwudmFsdWU7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0Zm9ybWRhdGEuanNvbiA9IGpzb25kYXRhO1xuXHRcdHJldHVybiBmb3JtZGF0YTtcblx0fVxuXG5cdGdldCBub3ZhbGlkYXRlKCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnbm92YWxpZGF0ZScpICE9PSBudWxsO1xuXHR9XG5cblx0c2V0IG5vdmFsaWRhdGUodmFsdWUpIHtcblx0XHRpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IGZhbHNlKSB7XG5cdFx0XHR0aGlzLnJlbW92ZUF0dHJpYnV0ZSgnbm92YWxpZGF0ZScpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNldEF0dHJpYnV0ZSgnbm92YWxpZGF0ZScsICcnKTtcblx0XHR9XG5cdH1cblxuXHRnZXQgaW52YWxpZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2ludmFsaWQnKSAhPT0gbnVsbDtcblx0fVxuXG5cdHNldCBpbnZhbGlkKHZhbHVlKSB7XG5cdFx0aWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSBmYWxzZSkge1xuXHRcdFx0dGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ2ludmFsaWQnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zZXRBdHRyaWJ1dGUoJ2ludmFsaWQnLCAnJyk7XG5cdFx0fVxuXHR9XG5cblx0Z2V0IG5hbWUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCduYW1lJyk7XG5cdH1cblxuXHRjaGVja1ZhbGlkaXR5KCkge1xuXHRcdGlmICh0aGlzLm5vdmFsaWRhdGUpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRjb25zdCBlbGVtZW50cyA9IFsuLi50aGlzLmVsZW1lbnRzXS5yZXZlcnNlKCk7XG5cdFx0bGV0IHZhbGlkaXR5ID0gdHJ1ZTtcblx0XHRlbGVtZW50cy5mb3JFYWNoKChlbCkgPT4ge1xuXHRcdFx0aWYgKGVsLmNoZWNrVmFsaWRpdHkgJiYgIWVsLmNoZWNrVmFsaWRpdHkoKSkge1xuXHRcdFx0XHR2YWxpZGl0eSA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0pXG5cdFx0dGhpcy5pbnZhbGlkID0gIXZhbGlkaXR5O1xuXHRcdHJldHVybiB2YWxpZGl0eTtcblx0fVxuXG5cdGFzeW5jIHN1Ym1pdCgpIHtcblx0XHRpZiAodGhpcy5jaGVja1ZhbGlkaXR5KCkgJiYgIXRoaXMuZGlzYWJsZWQpIHtcblx0XHRcdC8vdmFsaWRpdHlcblx0XHRcdGlmICh0aGlzLmFjdGlvbikge1xuXHRcdFx0XHR0aGlzLnN1Ym1pdEJ0bkVsICYmICh0aGlzLnN1Ym1pdEJ0bkVsLmxvYWRpbmcgPSB0cnVlKVxuXHRcdFx0XHRpZiAodGhpcy5tZXRob2QgPT0gJ0dFVCcpIHtcblx0XHRcdFx0XHRjb25zdCBmb3JtZGF0YSA9IG5ldyBVUkxTZWFyY2hQYXJhbXModGhpcy5mb3JtRWxkYXRhKS50b1N0cmluZygpO1xuXHRcdFx0XHRcdGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChgJHt0aGlzLmFjdGlvbn0/JHtmb3JtZGF0YX1gKTtcblx0XHRcdFx0XHR0aGlzLnN1Ym1pdEJ0bkVsICYmICh0aGlzLnN1Ym1pdEJ0bkVsLmxvYWRpbmcgPSBmYWxzZSk7XG5cdFx0XHRcdFx0aWYgKGRhdGEuaGVhZGVycy5nZXQoJ2NvbnRlbnQtdHlwZScpID09ICdhcHBsaWNhdGlvbi9qc29uJykge1xuXHRcdFx0XHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KFxuXHRcdFx0XHRcdFx0XHRuZXcgQ3VzdG9tRXZlbnQoJ3N1Ym1pdCcsIHtcblx0XHRcdFx0XHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGE6IGRhdGEuanNvbigpLFxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2godGhpcy5hY3Rpb24sIHtcblx0XHRcdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0XHRcdFx0Ym9keTogdGhpcy5mb3JtRWxkYXRhLFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdGlmICh0aGlzLnN1Ym1pdEJ0bkVsKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnN1Ym1pdEJ0bkVsLmxvYWRpbmcgPSBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGRhdGEuaGVhZGVycy5nZXQoJ2NvbnRlbnQtdHlwZScpID09ICdhcHBsaWNhdGlvbi9qc29uJykge1xuXHRcdFx0XHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KFxuXHRcdFx0XHRcdFx0XHRuZXcgQ3VzdG9tRXZlbnQoJ3N1Ym1pdCcsIHtcblx0XHRcdFx0XHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGE6IGRhdGEuanNvbigpLFxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJlc2V0KCkge1xuXHRcdHRoaXMuaW52YWxpZCA9IGZhbHNlO1xuXHRcdHRoaXMuZWxlbWVudHMuZm9yRWFjaCgoZWwpID0+IHtcblx0XHRcdGVsLnJlc2V0ICYmIGVsLnJlc2V0KCk7XG5cdFx0fSk7XG5cdH1cblxuXHRjb25uZWN0ZWRDYWxsYmFjaygpIHtcblx0XHR0aGlzLmZvcm1FbCA9IHRoaXMuc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZCgnZm9ybScpO1xuXHRcdHRoaXMuZWxlbWVudHMgPSBbLi4udGhpcy5xdWVyeVNlbGVjdG9yQWxsKCdbbmFtZV06bm90KFtkaXNhYmxlZF0pJyldO1xuXHRcdHRoaXMuc3VibWl0QnRuRWwgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ1todG1sdHlwZT1zdWJtaXRdJyk7XG5cdFx0dGhpcy5yZXNldEJ0bkVsID0gdGhpcy5xdWVyeVNlbGVjdG9yKCdbaHRtbHR5cGU9cmVzZXRdJyk7XG5cdFx0dGhpcy5mb3JtRWwuc2V0QXR0cmlidXRlKCdtZXRob2QnLCB0aGlzLm1ldGhvZCk7XG5cdFx0dGhpcy5mb3JtRWwuc2V0QXR0cmlidXRlKCdhY3Rpb24nLCB0aGlzLmFjdGlvbik7XG5cdFx0aWYgKHRoaXMubm92YWxpZGF0ZSkge1xuXHRcdFx0dGhpcy5mb3JtRWwuc2V0QXR0cmlidXRlKCdub3ZhbGlkYXRlJywgJycpO1xuXHRcdH1cblx0XHRpZiAodGhpcy5zdWJtaXRCdG5FbCkge1xuXHRcdFx0dGhpcy5zdWJtaXRCdG5FbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdFx0dGhpcy5zdWJtaXQoKTtcblx0XHRcdH0pXG5cdFx0fVxuXHRcdGlmICh0aGlzLnJlc2V0QnRuRWwpIHtcblx0XHRcdHRoaXMucmVzZXRCdG5FbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdFx0dGhpcy5yZXNldCgpO1xuXHRcdFx0fSlcblx0XHR9XG5cdFx0dGhpcy5mb3JtRWwuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldikgPT4ge1xuXHRcdFx0aWYgKGV2LnRhcmdldCA9PSB0aGlzLnJlc2V0QnRuRWwpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0c3dpdGNoIChldi5rZXkpIHtcblx0XHRcdFx0Y2FzZSAnRW50ZXInOlxuXHRcdFx0XHRcdHRoaXMuc3VibWl0KCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fSlcblx0XHRpZiAoIXRoaXMubm92YWxpZGF0ZSkge1xuXHRcdFx0dGhpcy5lbGVtZW50cy5mb3JFYWNoKChlbCkgPT4ge1xuXHRcdFx0XHRpZiAoZWwudGFnTmFtZSA9PSAnQVdDLUlOUFVUJykge1xuXHRcdFx0XHRcdGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5pbnZhbGlkID0gIXRoaXMudmFsaWRpdHk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5pbnZhbGlkID0gIXRoaXMudmFsaWRpdHk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0fVxuXHR9XG5cblx0X3JlbmRlcigpIHtcblx0XHRjb25zdCBzaGFkb3dSb290ID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG5cdFx0c2hhZG93Um9vdC5pbm5lckhUTUwgPSBodG1sO1xuXHR9XG59XG5cbmlmICghY3VzdG9tRWxlbWVudHMuZ2V0KCdhd2MtZm9ybScpKSB7XG5cdGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXdjLWZvcm0nLCBBd2NGb3JtKTtcbn1cbiIsImltcG9ydCBodG1sIGZyb20gJy4vYXdjLWljb24uaHRtbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF3Y0ljb24gZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG5cdHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xuXHRcdHJldHVybiBbJ25hbWUnLCAnc2l6ZScsICdjb2xvciddO1xuXHR9XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLl9yZW5kZXIoKTtcblx0fVxuXG5cdGdldCB2aWV3KCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgndmlldycpIHx8IDEwMjQ7XG5cdH1cblxuXHRnZXQgbmFtZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcblx0fVxuXG5cdHNldCBuYW1lKHZhbHVlKSB7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGUoJ25hbWUnLCB2YWx1ZSk7XG5cdH1cblxuXHRnZXQgc2l6ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ3NpemUnKSB8fCAnJztcblx0fVxuXG5cdHNldCBzaXplKHZhbHVlKSB7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGUoJ3NpemUnLCB2YWx1ZSk7XG5cdH1cblxuXHRnZXQgY29sb3IoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdjb2xvcicpIHx8ICcnO1xuXHR9XG5cblx0c2V0IGNvbG9yKHZhbHVlKSB7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgdmFsdWUpO1xuXHR9XG5cblx0Y29ubmVjdGVkQ2FsbGJhY2soKSB7XG5cdFx0dGhpcy5pY29uRWwgPSB0aGlzLnNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoJ2ljb24nKTtcblx0XHR0aGlzLmljb25FbC5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCBgMCAwICR7dGhpcy52aWV3fSAke3RoaXMudmlld31gKTtcblx0XHR0aGlzLnVzZSA9IHRoaXMuaWNvbkVsLnF1ZXJ5U2VsZWN0b3IoJ3VzZScpO1xuXHRcdC8vIHJlLWNhbGwgc2V0XG5cdFx0dGhpcy5zaXplICYmICh0aGlzLnNpemUgPSB0aGlzLnNpemUpO1xuXHRcdHRoaXMuY29sb3IgJiYgKHRoaXMuY29sb3IgPSB0aGlzLmNvbG9yKTtcblx0XHR0aGlzLm5hbWUgJiYgKHRoaXMubmFtZSA9IHRoaXMubmFtZSk7XG5cdH1cblxuXHRhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG5cdFx0aWYgKG5hbWUgPT0gJ25hbWUnICYmIHRoaXMudXNlKSB7XG5cdFx0XHR0aGlzLnVzZS5zZXRBdHRyaWJ1dGVOUygnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycsICd4bGluazpocmVmJywgYC4uL2Fzc2V0cy9pY29uLnN2ZyNpY29uLSR7bmV3VmFsdWV9YCk7XG5cdFx0fVxuXHRcdGlmIChuYW1lID09ICdjb2xvcicgJiYgdGhpcy5pY29uRWwpIHtcblx0XHRcdHRoaXMuaWNvbkVsLnN0eWxlLmNvbG9yID0gbmV3VmFsdWU7XG5cdFx0fVxuXHRcdGlmIChuYW1lID09ICdzaXplJyAmJiB0aGlzLmljb25FbCkge1xuXHRcdFx0dGhpcy5pY29uRWwuc3R5bGUuZm9udFNpemUgPSBuZXdWYWx1ZSArICdweCc7XG5cdFx0fVxuXHR9XG5cblx0X3JlbmRlcigpIHtcblx0XHRjb25zdCBzaGFkb3dSb290ID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG5cdFx0c2hhZG93Um9vdC5pbm5lckhUTUwgPSBodG1sO1xuXHR9XG59XG5cbmlmICghY3VzdG9tRWxlbWVudHMuZ2V0KCdhd2MtaWNvbicpKSB7XG5cdGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXdjLWljb24nLCBBd2NJY29uKTtcbn1cbiIsImltcG9ydCAnLi4vYXdjLWljb24vYXdjLWljb24nO1xuaW1wb3J0IGh0bWwgZnJvbSAnLi9hd2MtaW1nLmh0bWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBd2NJbWcgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG5cdHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xuXHRcdHJldHVybiBbJ2xhenknLCAnc3JjJywgJ2RlZmF1bHRzcmMnLCAncmF0aW8nXTtcblx0fVxuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5fcmVuZGVyKCk7XG5cdH1cblxuXHRnZXQgc3JjKCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnc3JjJyk7XG5cdH1cblxuICAgIHNldCBzcmModmFsdWUpIHtcblx0XHR0aGlzLnNldEF0dHJpYnV0ZSgnc3JjJywgdmFsdWUpO1xuXHR9XG5cblx0Z2V0IHJhdGlvKCkge1xuXHRcdC8vMTYvOVxuXHRcdGNvbnN0IHJhdGlvID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ3JhdGlvJyk7XG5cdFx0aWYgKHJhdGlvICYmIHJhdGlvLmluY2x1ZGVzKCcvJykpIHtcblx0XHRcdGNvbnN0IHIgPSByYXRpby5zcGxpdCgnLycpO1xuXHRcdFx0cmV0dXJuIChyWzFdIC8gclswXSkgKiAxMDAgKyAnJSc7XG5cdFx0fVxuXHRcdHJldHVybiAwO1xuXHR9XG5cbiAgICBzZXQgcmF0aW8odmFsdWUpIHtcblx0XHR0aGlzLnNldEF0dHJpYnV0ZSgncmF0aW8nLCB2YWx1ZSk7XG5cdH1cblxuXHRnZXQgZml0KCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnZml0Jyk7XG5cdH1cblxuICAgIHNldCBmaXQodmFsdWUpIHtcblx0XHR0aGlzLnNldEF0dHJpYnV0ZSgnZml0JywgdmFsdWUpO1xuXHR9XG5cblx0Z2V0IGRlZmF1bHQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdkZWZhdWx0JykgIT09IG51bGw7XG5cdH1cblxuICAgIHNldCBkZWZhdWx0KHZhbHVlKSB7XG5cdFx0aWYgKHZhbHVlKSB7XG5cdFx0XHR0aGlzLnNldEF0dHJpYnV0ZSgnZGVmYXVsdCcsICcnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ2RlZmF1bHQnKTtcblx0XHR9XG5cdH1cblxuICAgIGdldCBlcnJvcigpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2Vycm9yJykgIT09IG51bGw7XG5cdH1cblxuICAgIHNldCBlcnJvcih2YWx1ZSkge1xuXHRcdGlmICh2YWx1ZSkge1xuXHRcdFx0dGhpcy5zZXRBdHRyaWJ1dGUoJ2Vycm9yJywgJycpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnJlbW92ZUF0dHJpYnV0ZSgnZXJyb3InKTtcblx0XHR9XG5cdH1cblxuICAgIGdldCBkZWZhdWx0c3JjKCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnZGVmYXVsdHNyYycpO1xuXHR9XG5cbiAgICBnZXQgbGF6eSgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2xhenknKSAhPT0gbnVsbDtcblx0fVxuXG5cdGdldCBhbHQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdhbHQnKSB8fCAnZXJyb3InO1xuXHR9XG5cblx0bG9hZChzcmMsIGhhc2xvYWQpIHtcblx0XHRjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcblx0XHRpbWcuc3JjID0gc3JjO1xuXHRcdHRoaXMuZXJyb3IgPSBmYWxzZTtcblx0XHRpbWcub25sb2FkID0gKCkgPT4ge1xuXHRcdFx0dGhpcy5pbWdFbC5hbHQgPSB0aGlzLmFsdDtcblx0XHRcdHRoaXMuaW1nRWwuc3JjID0gc3JjO1xuXHRcdH1cblx0XHRpbWcub25lcnJvciA9ICgpID0+IHtcblx0XHRcdHRoaXMuZXJyb3IgPSB0cnVlO1xuXHRcdFx0dGhpcy5pbWdFbC5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG5cdFx0XHRpZiAodGhpcy5kZWZhdWx0c3JjICYmICFoYXNsb2FkKSB7XG5cdFx0XHRcdHRoaXMuZGVmYXVsdCA9IHRydWU7XG5cdFx0XHRcdHRoaXMubG9hZCh0aGlzLmRlZmF1bHRzcmMsIHRydWUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG4gICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSkge1xuXHRcdGlmIChuYW1lID09ICdzcmMnICYmIHRoaXMuaW1nRWwpIHtcblx0XHRcdHRoaXMucGxhY2Vob2xkZXJFbC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG5cdFx0XHR0aGlzLmxvYWQobmV3VmFsdWUpO1xuXHRcdH1cblx0XHRpZiAobmFtZSA9PSAncmF0aW8nICYmIHRoaXMuaW1nRWwpIHtcblx0XHRcdHRoaXMucGxhY2Vob2xkZXJFbC5zdHlsZS5wYWRkaW5nVG9wID0gdGhpcy5yYXRpbztcblx0XHR9XG5cdH1cblxuXHRjb25uZWN0ZWRDYWxsYmFjaygpIHtcblx0XHRpZiAod2luZG93LkF3Y0ltZ0luZGV4ID4gLTEpIHtcblx0XHRcdHdpbmRvdy5Bd2NJbWdJbmRleCsrO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR3aW5kb3cuQXdjSW1nSW5kZXggPSAwO1xuXHRcdH1cblx0XHR0aGlzLkF3Y0ltZ0luZGV4ID0gd2luZG93LkF3Y0ltZ0luZGV4O1xuXHRcdHRoaXMucGxhY2Vob2xkZXJFbCA9IHRoaXMuc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZCgncGxhY2Vob2xkZXInKTtcblx0XHR0aGlzLmltZ0VsID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xuICAgICAgICBjb25zdCBhbHRFbCA9IHRoaXMuc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZCgnYWx0Jyk7XG4gICAgICAgIGFsdEVsLmlubmVySFRNTCA9IHRoaXMuYWx0O1xuICAgICAgICBpZiAodGhpcy5yYXRpbykge1xuICAgICAgICAgICAgdGhpcy5wbGFjZWhvbGRlckVsLnN0eWxlLnBhZGRpbmdUb3AgPSB0aGlzLnJhdGlvO1xuICAgICAgICB9XG5cdFx0aWYgKHRoaXMubGF6eSkge1xuXHRcdFx0dGhpcy5vYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoaW9lcykgPT4ge1xuXHRcdFx0XHRpb2VzLmZvckVhY2goKGlvZSkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IGVsID0gaW9lLnRhcmdldDtcblx0XHRcdFx0XHRjb25zdCBpbnRlcnNlY3Rpb25SYXRpbyA9IGlvZS5pbnRlcnNlY3Rpb25SYXRpbztcblx0XHRcdFx0XHRpZiAoaW50ZXJzZWN0aW9uUmF0aW8gPiAwICYmIGludGVyc2VjdGlvblJhdGlvIDw9IDEpIHtcblx0XHRcdFx0XHRcdHRoaXMubG9hZCh0aGlzLnNyYyk7XG5cdFx0XHRcdFx0XHR0aGlzLm9ic2VydmVyLnVub2JzZXJ2ZShlbCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0fSlcblx0XHRcdHRoaXMub2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmltZ0VsKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5sb2FkKHRoaXMuc3JjKTtcblx0XHR9XG5cdH1cblxuICAgIF9yZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcblx0XHRzaGFkb3dSb290LmlubmVySFRNTCA9IGh0bWw7XG4gICAgfVxufVxuXG5pZiAoIWN1c3RvbUVsZW1lbnRzLmdldCgnYXdjLWltZycpKSB7XG5cdGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXdjLWltZycsIEF3Y0ltZyk7XG59XG4iLCJpbXBvcnQgJy4uL2F3Yy10b29sdGlwL2F3Yy10b29sdGlwLmpzJ1xuaW1wb3J0ICcuLi9hd2MtYnV0dG9uL2F3Yy1idXR0b24uanMnXG5pbXBvcnQgaHRtbCBmcm9tICcuL2F3Yy1pbnB1dC5odG1sJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXdjSW5wdXQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG5cdHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xuXHRcdHJldHVybiBbXG5cdFx0XHQnbGFiZWwnLFxuXHRcdFx0J2Rpc2FibGVkJyxcblx0XHRcdCdwYXR0ZXJuJyxcblx0XHRcdCdyZXF1aXJlZCcsXG5cdFx0XHQncmVhZG9ubHknLFxuXHRcdFx0J3BsYWNlaG9sZGVyJyxcblx0XHRdO1xuXHR9XG5cblx0Y29uc3RydWN0b3IoeyBtdWx0aSB9ID0ge30pIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMubXVsdGkgPSBtdWx0aTtcblx0XHR0aGlzLiRjdXN0b21WYWxpZGl0eSA9IG51bGw7XG5cdFx0dGhpcy5fcmVuZGVyKCk7XG5cdH1cblxuXHRnZXQgY3VzdG9tVmFsaWRpdHkoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdHRoaXMuJGN1c3RvbVZhbGlkaXR5IHx8IHtcblx0XHRcdFx0bWV0aG9kOiAoKSA9PiB0cnVlLFxuXHRcdFx0fVxuXHRcdCk7XG5cdH1cblxuXHRzZXQgY3VzdG9tVmFsaWRpdHkob2JqZWN0KSB7XG5cdFx0dGhpcy4kY3VzdG9tVmFsaWRpdHkgPSBvYmplY3Q7XG5cdH1cblxuXHRnZXQgdmFsdWUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuaW5wdXRFbC52YWx1ZTtcblx0fVxuXG5cdHNldCB2YWx1ZSh2YWx1ZSkge1xuXHRcdHRoaXMuaW5wdXRFbC52YWx1ZSA9IHZhbHVlO1xuXHR9XG5cblx0Z2V0IHJlYWRvbmx5KCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgncmVhZG9ubHknKSAhPT0gbnVsbDtcblx0fVxuXG5cdHNldCByZWFkb25seSh2YWx1ZSkge1xuXHRcdGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gZmFsc2UpIHtcblx0XHRcdHRoaXMucmVtb3ZlQXR0cmlidXRlKCdyZWFkb25seScpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCAnJyk7XG5cdFx0fVxuXHR9XG5cblx0Z2V0IHJlcXVpcmVkKCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgncmVxdWlyZWQnKSAhPT0gbnVsbDtcblx0fVxuXG5cdHNldCByZXF1aXJlZCh2YWx1ZSkge1xuXHRcdGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gZmFsc2UpIHtcblx0XHRcdHRoaXMucmVtb3ZlQXR0cmlidXRlKCdyZXF1aXJlZCcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XG5cdFx0fVxuXHR9XG5cblx0Z2V0IGRpc2FibGVkKCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnZGlzYWJsZWQnKSAhPT0gbnVsbDtcblx0fVxuXG5cdHNldCBkaXNhYmxlZCh2YWx1ZSkge1xuXHRcdGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gZmFsc2UpIHtcblx0XHRcdHRoaXMucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJyk7XG5cdFx0fVxuXHR9XG5cblx0Z2V0IGxhYmVsKCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnbGFiZWwnKSB8fCAnJztcblx0fVxuXG5cdHNldCBsYWJlbCh2YWx1ZSkge1xuXHRcdHRoaXMuc2V0QXR0cmlidXRlKCdsYWJlbCcsIHZhbHVlKTtcblx0fVxuXG5cdGdldCBwbGFjZWhvbGRlcigpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJykgfHwgdGhpcy5sYWJlbDtcblx0fVxuXG5cdHNldCBwbGFjZWhvbGRlcih2YWx1ZSkge1xuXHRcdHRoaXMuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIHZhbHVlKTtcblx0fVxuXG5cdGdldCBpY29uKCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnaWNvbicpO1xuXHR9XG5cblx0c2V0IGljb24odmFsdWUpIHtcblx0XHR0aGlzLnNldEF0dHJpYnV0ZSgnaWNvbicsIHZhbHVlKTtcblx0fVxuXG5cdGdldCBpbnZhbGlkKCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnaW52YWxpZCcpICE9PSBudWxsO1xuXHR9XG5cblx0c2V0IGludmFsaWQodmFsdWUpIHtcblx0XHRpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IGZhbHNlKSB7XG5cdFx0XHR0aGlzLnJlbW92ZUF0dHJpYnV0ZSgnaW52YWxpZCcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNldEF0dHJpYnV0ZSgnaW52YWxpZCcsICcnKTtcblx0XHR9XG5cdH1cblxuXHRnZXQgcGF0dGVybigpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ3BhdHRlcm4nKTtcblx0fVxuXG5cdHNldCBwYXR0ZXJuKHZhbHVlKSB7XG5cdFx0aWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSBmYWxzZSkge1xuXHRcdFx0dGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ3BhdHRlcm4nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zZXRBdHRyaWJ1dGUoJ3BhdHRlcm4nLCB2YWx1ZSk7XG5cdFx0fVxuXHR9XG5cblx0Z2V0IG5vdmFsaWRhdGUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdub3ZhbGlkYXRlJykgIT09IG51bGw7XG5cdH1cblxuXHRzZXQgbm92YWxpZGF0ZSh2YWx1ZSkge1xuXHRcdGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gZmFsc2UpIHtcblx0XHRcdHRoaXMucmVtb3ZlQXR0cmlidXRlKCdub3ZhbGlkYXRlJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2V0QXR0cmlidXRlKCdub3ZhbGlkYXRlJywgJycpO1xuXHRcdH1cblx0fVxuXG5cdGdldCBkZWJvdW5jZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RlYm91bmNlJyk7XG5cdH1cblxuXHRnZXQgbmFtZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ25hbWUnKSB8fCAnJztcblx0fVxuXG5cdGdldCB2YWxpZGl0eSgpIHtcblx0XHRyZXR1cm4gdGhpcy5pbnB1dEVsLmNoZWNrVmFsaWRpdHkoKSAmJiB0aGlzLmN1c3RvbVZhbGlkaXR5Lm1ldGhvZCh0aGlzKTtcblx0fVxuXG5cdGdldCBlcnJvcmRpcigpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2Vycm9yZGlyJykgfHwgJ3RvcCc7XG5cdH1cblxuXHRnZXQgZGVmYXVsdHZhbHVlKCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnZGVmYXVsdHZhbHVlJykgfHwgJyc7XG5cdH1cblx0Z2V0IHJvd3MoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdyb3dzJykgfHwgMztcblx0fVxuXG5cdGdldCB0eXBlKCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgndHlwZScpO1xuXHR9XG5cblx0Z2V0IG1pbigpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ21pbicpIHx8IDA7XG5cdH1cblxuXHRnZXQgbWF4KCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnbWF4JykgfHwgSW5maW5pdHk7XG5cdH1cblxuXHRnZXQgbWlubGVuZ3RoKCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnbWlubGVuZ3RoJykgfHwgJyc7XG5cdH1cblxuXHRnZXQgbWF4bGVuZ3RoKCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnbWF4bGVuZ3RoJykgfHwgJyc7XG5cdH1cblxuXHRnZXQgc3RlcCgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ3N0ZXAnKSB8fCAxO1xuXHR9XG5cblx0Z2V0IGVycm9ydGlwcygpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2Vycm9ydGlwcycpO1xuXHR9XG5cblx0Y2hlY2tWYWxpZGl0eSgpIHtcblx0XHRpZiAodGhpcy5ub3ZhbGlkYXRlIHx8IHRoaXMuZGlzYWJsZWQgfHwgKHRoaXMuZm9ybUVsICYmIHRoaXMuZm9ybUVsLm5vdmFsaWRhdGUpKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0aWYgKHRoaXMudmFsaWRpdHkpIHtcblx0XHRcdHRoaXMuaW5wdXRUb29sVGlwRWwuc2hvdyA9IGZhbHNlO1xuXHRcdFx0dGhpcy5pbnZhbGlkID0gZmFsc2U7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5pbnB1dEVsLmZvY3VzKCk7XG5cdFx0XHR0aGlzLmlucHV0VG9vbFRpcEVsLnNob3cgPSAnc2hvdyc7XG5cdFx0XHR0aGlzLmludmFsaWQgPSB0cnVlO1xuXHRcdFx0Y29uc3QgdmFsaWRhdGlvbk1lc3NhZ2UgPSB0aGlzLl9mb3JtYXRWYWxpZE1lc3NhZ2UoKTtcblx0XHRcdGlmICh0aGlzLmlucHV0RWwudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG5cdFx0XHRcdHRoaXMuaW5wdXRUb29sVGlwRWwudGlwcyA9IHZhbGlkYXRpb25NZXNzYWdlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKCF0aGlzLmN1c3RvbVZhbGlkaXR5Lm1ldGhvZCh0aGlzKSkge1xuXHRcdFx0XHRcdHRoaXMuaW5wdXRUb29sVGlwRWwudGlwcyA9IHRoaXMuY3VzdG9tVmFsaWRpdHkudGlwcztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLmlucHV0VG9vbFRpcEVsLnRpcHMgPSB0aGlzLmVycm9ydGlwcyB8fCB2YWxpZGF0aW9uTWVzc2FnZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdGZvY3VzKCkge1xuXHRcdHRoaXMuaW5wdXRFbC5mb2N1cygpO1xuXHR9XG5cblx0cmVzZXQoKSB7XG5cdFx0dGhpcy5pbnB1dEVsLnZhbHVlID0gdGhpcy5kZWZhdWx0dmFsdWU7XG5cdFx0dGhpcy5pbnB1dFRvb2xUaXBFbC5zaG93ID0gZmFsc2U7XG5cdFx0dGhpcy5pbnZhbGlkID0gZmFsc2U7XG5cdH1cblxuXHRhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG5cdFx0aWYgKG5hbWUgPT0gJ2Rpc2FibGVkJyAmJiB0aGlzLmlucHV0RWwpIHtcblx0XHRcdGlmIChuZXdWYWx1ZSAhPT0gbnVsbCkge1xuXHRcdFx0XHR0aGlzLmlucHV0RWwucGFyZW50Tm9kZS5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmlucHV0RWwucGFyZW50Tm9kZS5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChuYW1lID09ICdwYXR0ZXJuJyAmJiB0aGlzLmlucHV0RWwpIHtcblx0XHRcdGlmIChuZXdWYWx1ZSAhPT0gbnVsbCkge1xuXHRcdFx0XHR0aGlzLmlucHV0RWwuc2V0QXR0cmlidXRlKCdwYXR0ZXJuJywgbmV3VmFsdWUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5pbnB1dEVsLnJlbW92ZUF0dHJpYnV0ZSgncGF0dGVybicpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAobmFtZSA9PSAncGxhY2Vob2xkZXInICYmIHRoaXMuaW5wdXRFbCkge1xuXHRcdFx0aWYgKG5ld1ZhbHVlICE9PSBudWxsKSB7XG5cdFx0XHRcdHRoaXMuaW5wdXRFbC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgbmV3VmFsdWUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5pbnB1dEVsLnJlbW92ZUF0dHJpYnV0ZSgncGxhY2Vob2xkZXInKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKG5hbWUgPT0gJ3JlcXVpcmVkJyAmJiB0aGlzLmlucHV0RWwpIHtcblx0XHRcdGlmIChuZXdWYWx1ZSAhPT0gbnVsbCkge1xuXHRcdFx0XHR0aGlzLmlucHV0RWwuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICdyZXF1aXJlZCcpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5pbnB1dEVsLnJlbW92ZUF0dHJpYnV0ZSgncmVxdWlyZWQnKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKG5hbWUgPT0gJ3JlYWRvbmx5JyAmJiB0aGlzLmlucHV0RWwpIHtcblx0XHRcdGlmIChuZXdWYWx1ZSAhPT0gbnVsbCkge1xuXHRcdFx0XHR0aGlzLmlucHV0RWwuc2V0QXR0cmlidXRlKCdyZWFkb25seScsICdyZWFkb25seScpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5pbnB1dEVsLnJlbW92ZUF0dHJpYnV0ZSgncmVhZG9ubHknKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRjb25uZWN0ZWRDYWxsYmFjaygpIHtcblx0XHR0aGlzLmZvcm1FbCA9IHRoaXMuY2xvc2VzdCgnYXdjLWZvcm0nKTtcblx0XHR0aGlzLmlucHV0VG9vbFRpcEVsID0gdGhpcy5zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKCdpbnB1dC10b29sdGlwJyk7XG5cdFx0dGhpcy5pbnB1dFRvb2xUaXBFbC5kaXIgPSB0aGlzLmVycm9yZGlyO1xuXHRcdHRoaXMuX2luaXRQYWdlKCk7XG5cdFx0dGhpcy5fYWRkRXZlbnRMaXN0ZW5lcigpO1xuXHRcdHRoaXMuZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkO1xuXHRcdHRoaXMucmVxdWlyZWQgPSB0aGlzLnJlcXVpcmVkO1xuXHRcdHRoaXMucmVhZG9ubHkgPSB0aGlzLnJlYWRvbmx5O1xuXHR9XG5cblx0X2luaXRJbnB1dEVsKCkge1xuXHRcdGNvbnN0IHRleHRhcmVhRWwgPSB0aGlzLnNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoJ3RleHRhcmVhJyk7XG5cdFx0Y29uc3QgaW5wdXRFbCA9IHRoaXMuc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZCgnaW5wdXQnKTtcblx0XHRpZiAodGhpcy5tdWx0aSkge1xuXHRcdFx0dGhpcy5pbnB1dFRvb2xUaXBFbC5yZW1vdmVDaGlsZChpbnB1dEVsKTtcblx0XHRcdHRleHRhcmVhRWwuc2V0QXR0cmlidXRlKCdyb3dzJywgdGhpcy5yb3dzKTtcblx0XHRcdHRoaXMuaW5wdXRFbCA9IHRleHRhcmVhRWw7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuaW5wdXRUb29sVGlwRWwucmVtb3ZlQ2hpbGQodGV4dGFyZWFFbCk7XG5cdFx0XHRpbnB1dEVsLnNldEF0dHJpYnV0ZSgndHlwZScsIHRoaXMuX3R5cGVNYXAodGhpcy50eXBlKSk7XG5cdFx0XHRpZiAodGhpcy50eXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRpbnB1dEVsLnNldEF0dHJpYnV0ZSgnbWluJywgdGhpcy5taW4pO1xuXHRcdFx0XHRpbnB1dEVsLnNldEF0dHJpYnV0ZSgnbWF4JywgdGhpcy5tYXgpO1xuXHRcdFx0XHRpbnB1dEVsLnNldEF0dHJpYnV0ZSgnc3RlcCcsIHRoaXMuc3RlcCk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmlucHV0RWwgPSBpbnB1dEVsO1xuXHRcdH1cblx0XHR0aGlzLmlucHV0RWwuc2V0QXR0cmlidXRlKCduYW1lJywgdGhpcy5uYW1lKTtcblx0XHR0aGlzLmlucHV0RWwuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHRoaXMuZGVmYXVsdHZhbHVlKTtcblx0XHR0aGlzLmlucHV0RWwuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIHRoaXMucGxhY2Vob2xkZXIpO1xuXHRcdHRoaXMuaW5wdXRFbC5zZXRBdHRyaWJ1dGUoJ21pbmxlbmd0aCcsIHRoaXMubWlubGVuZ3RoKTtcblx0XHR0aGlzLmlucHV0RWwuc2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnLCB0aGlzLm1heGxlbmd0aCk7XG5cdH1cblxuXHRfaW5pdExhYmVsRWwoKSB7XG5cdFx0Y29uc3QgaW5wdXRMYWJlbEVsID0gdGhpcy5zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1sYWJlbCcpO1xuXHRcdGlmICh0aGlzLmxhYmVsICYmICF0aGlzLmljb24pIHtcblx0XHRcdGlucHV0TGFiZWxFbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXHRcdFx0aW5wdXRMYWJlbEVsLmlubmVySFRNTCA9IHRoaXMubGFiZWw7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlucHV0TGFiZWxFbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0fVxuXHR9XG5cblx0X2luaXRCdG5FbCgpIHtcblx0XHRpZiAoIXRoaXMubXVsdGkpIHtcblx0XHRcdGNvbnN0IGJ0bk51bWJlckVsID0gdGhpcy5zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKCdidG4tbnVtYmVyJyk7XG5cdFx0XHRpZih0aGlzLnR5cGUgPT09ICdwYXNzd29yZCcpIHtcblx0XHRcdFx0Y29uc3QgYnV0dG9uRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhd2MtYnV0dG9uJyk7XG5cdFx0XHRcdGJ1dHRvbkVsLmlkID0gJ2J0bi1wYXNzd29yZCc7XG5cdFx0XHRcdGJ1dHRvbkVsLmNsYXNzTGlzdC5hZGQoJ2J0bi1yaWdodCcpO1xuXHRcdFx0XHRidXR0b25FbC5pY29uID0gJ2V5ZS1jbG9zZSc7XG5cdFx0XHRcdGJ1dHRvbkVsLnR5cGUgPSAndGV4dCc7XG5cdFx0XHRcdHRoaXMuaW5wdXRUb29sVGlwRWwuYXBwZW5kKGJ1dHRvbkVsKTtcblx0XHRcdFx0dGhpcy5pbnB1dFRvb2xUaXBFbC5yZW1vdmVDaGlsZChidG5OdW1iZXJFbCk7XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMudHlwZSA9PT0gJ3NlYXJjaCcpIHtcblx0XHRcdFx0Y29uc3QgYnV0dG9uRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhd2MtYnV0dG9uJyk7XG5cdFx0XHRcdGJ1dHRvbkVsLmlkID0gJ2J0bi1zZWFyY2gnO1xuXHRcdFx0XHRidXR0b25FbC5jbGFzc0xpc3QuYWRkKCdidG4tcmlnaHQnKTtcblx0XHRcdFx0YnV0dG9uRWwuaWNvbiA9ICdzZWFyY2gnO1xuXHRcdFx0XHRidXR0b25FbC50eXBlID0gJ3RleHQnO1xuXHRcdFx0XHR0aGlzLmlucHV0VG9vbFRpcEVsLmFwcGVuZChidXR0b25FbCk7XG5cdFx0XHRcdHRoaXMuaW5wdXRUb29sVGlwRWwucmVtb3ZlQ2hpbGQoYnRuTnVtYmVyRWwpO1xuXHRcdFx0fSBlbHNlIGlmICh0aGlzLnR5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGJ0bk51bWJlckVsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cdFx0XHRcdGNvbnN0IGJ1dHRvblVwRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhd2MtYnV0dG9uJyk7XG5cdFx0XHRcdGJ1dHRvblVwRWwuaWQgPSAnYnRuLWFkZCc7XG5cdFx0XHRcdGJ1dHRvblVwRWwuaWNvbiA9ICd1cCc7XG5cdFx0XHRcdGJ1dHRvblVwRWwudHlwZSA9ICd0ZXh0Jztcblx0XHRcdFx0YnRuTnVtYmVyRWwuYXBwZW5kKGJ1dHRvblVwRWwpO1xuXHRcdFx0XHRjb25zdCBidXR0b25Eb3duRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhd2MtYnV0dG9uJyk7XG5cdFx0XHRcdGJ1dHRvbkRvd25FbC5pZCA9ICdidG4tc3ViJztcblx0XHRcdFx0YnV0dG9uRG93bkVsLmljb24gPSAnZG93bic7XG5cdFx0XHRcdGJ1dHRvbkRvd25FbC50eXBlID0gJ3RleHQnO1xuXHRcdFx0XHRidG5OdW1iZXJFbC5hcHBlbmQoYnV0dG9uRG93bkVsKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuaW5wdXRUb29sVGlwRWwucmVtb3ZlQ2hpbGQoYnRuTnVtYmVyRWwpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdF9pbml0SWNvbkVsKCkge1xuXHRcdGlmICh0aGlzLmljb24pIHtcblx0XHRcdHRoaXMuaWNvbkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXdjLWljb24nKTtcbiAgICAgICAgICAgIHRoaXMuaWNvbkVsLm5hbWUgPSB0aGlzLmljb247XG5cdFx0XHR0aGlzLmljb25FbC5jbGFzc0xpc3QuYWRkKCdpY29uLXByZScpO1xuICAgICAgICAgICAgdGhpcy5pbnB1dFRvb2xUaXBFbC5wcmVwZW5kKHRoaXMuaWNvbkVsKTtcblx0XHR9XG5cdH1cblxuXHRfaW5pdFBhZ2UoKSB7XG5cdFx0dGhpcy5faW5pdElucHV0RWwoKTtcblx0XHR0aGlzLl9pbml0TGFiZWxFbCgpO1xuXHRcdHRoaXMuX2luaXRCdG5FbCgpO1xuXHRcdHRoaXMuX2luaXRJY29uRWwoKTtcblx0fVxuXG5cdF9hZGRFdmVudExpc3RlbmVyKCkge1xuXHRcdHRoaXMuaW5wdXRFbC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChldikgPT4ge1xuXHRcdFx0ZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHR0aGlzLmNoZWNrVmFsaWRpdHkoKTtcblx0XHRcdGlmICh0aGlzLmRlYm91bmNlKSB7XG5cdFx0XHRcdHRoaXMudGltZXIgJiYgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuXHRcdFx0XHR0aGlzLnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KFxuXHRcdFx0XHRcdFx0bmV3IEN1c3RvbUV2ZW50KCdpbnB1dCcsIHtcblx0XHRcdFx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU6IHRoaXMudmFsdWUsXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0sIHRoaXMuZGVib3VuY2UpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KFxuXHRcdFx0XHRcdG5ldyBDdXN0b21FdmVudCgnaW5wdXQnLCB7XG5cdFx0XHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRcdFx0dmFsdWU6IHRoaXMudmFsdWUsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fSlcblx0XHR0aGlzLmlucHV0RWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KFxuXHRcdFx0XHRuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZScsIHtcblx0XHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRcdHZhbHVlOiB0aGlzLnZhbHVlLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHRcdH0pXG5cdFx0dGhpcy5pbnB1dEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKGV2KSA9PiB7XG5cdFx0XHR0aGlzLmNoZWNrVmFsaWRpdHkoKTtcblx0XHR9KVxuXHRcdHRoaXMuaW5wdXRFbC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2KSA9PiB7XG5cdFx0XHRzd2l0Y2ggKGV2LmtleSkge1xuXHRcdFx0XHRjYXNlICdFbnRlcic6XG5cdFx0XHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KFxuXHRcdFx0XHRcdFx0bmV3IEN1c3RvbUV2ZW50KCdzdWJtaXQnLCB7XG5cdFx0XHRcdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdFx0XHRcdHZhbHVlOiB0aGlzLnZhbHVlLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGlmICghdGhpcy5tdWx0aSkge1xuXHRcdFx0dGhpcy5idG5QYXNzd29yZEVsID0gdGhpcy5zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKCdidG4tcGFzc3dvcmQnKVxuXHRcdFx0dGhpcy5idG5BZGRFbCA9IHRoaXMuc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZCgnYnRuLWFkZCcpO1xuXHRcdFx0dGhpcy5idG5TdWJFbCA9IHRoaXMuc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZCgnYnRuLXN1YicpO1xuXHRcdFx0dGhpcy5idG5TZWFyY2hFbCA9IHRoaXMuc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZCgnYnRuLXNlYXJjaCcpO1xuXHRcdFx0aWYgKHRoaXMuYnRuU2VhcmNoRWwpIHtcblx0XHRcdFx0dGhpcy5idG5TZWFyY2hFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoXG5cdFx0XHRcdFx0XHRuZXcgQ3VzdG9tRXZlbnQoJ3N1Ym1pdCcsIHtcblx0XHRcdFx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU6IHRoaXMudmFsdWUsXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuYnRuUGFzc3dvcmRFbCkge1xuXHRcdFx0XHR0aGlzLmJ0blBhc3N3b3JkRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5wYXNzd29yZCA9ICF0aGlzLnBhc3N3b3JkXG5cdFx0XHRcdFx0aWYgKHRoaXMucGFzc3dvcmQpIHtcblx0XHRcdFx0XHRcdHRoaXMuaW5wdXRFbC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuXHRcdFx0XHRcdFx0dGhpcy5idG5QYXNzd29yZEVsLmljb24gPSAnZXllJztcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy5pbnB1dEVsLnNldEF0dHJpYnV0ZSgndHlwZScsICdwYXNzd29yZCcpO1xuXHRcdFx0XHRcdFx0dGhpcy5idG5QYXNzd29yZEVsLmljb24gPSAnZXllLWNsb3NlJztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5pbnB1dEVsLmZvY3VzKCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuYnRuQWRkRWwpIHtcblx0XHRcdFx0dGhpcy5idG5BZGRFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdFx0XHR0aGlzLmlucHV0RWwuc3RlcFVwKCk7XG5cdFx0XHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KFxuXHRcdFx0XHRcdFx0bmV3IEN1c3RvbUV2ZW50KCdjaGFuZ2UnLCB7XG5cdFx0XHRcdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdFx0XHRcdHZhbHVlOiB0aGlzLnZhbHVlLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuYnRuU3ViRWwpIHtcblx0XHRcdFx0dGhpcy5idG5TdWJFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdFx0XHR0aGlzLmlucHV0RWwuc3RlcERvd24oKTtcblx0XHRcdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoXG5cdFx0XHRcdFx0XHRuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZScsIHtcblx0XHRcdFx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU6IHRoaXMudmFsdWUsXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0XHR0aGlzLnBhdHRlcm4gPSB0aGlzLnBhdHRlcm47XG5cdFx0fVxuXHR9XG5cblx0X3R5cGVNYXAodHlwZSkge1xuXHRcdHN3aXRjaCAodHlwZSkge1xuXHRcdFx0Y2FzZSAncGFzc3dvcmQnOlxuXHRcdFx0Y2FzZSAnbnVtYmVyJzpcblx0XHRcdGNhc2UgJ2VtYWlsJzpcblx0XHRcdGNhc2UgJ3RlbCc6XG5cdFx0XHRjYXNlICd1cmwnOlxuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHR5cGUgPSAndGV4dCc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRyZXR1cm4gdHlwZTtcblx0fVxuXG5cdF9mb3JtYXRWYWxpZE1lc3NhZ2UoKSB7XG5cdFx0aWYgKHRoaXMucmVxdWlyZWQgJiYgIXRoaXMudmFsdWUpIHtcblx0XHRcdHJldHVybiAnVGhpcyBpcyByZXF1aXJlZCc7XG5cdFx0fVxuXHRcdGlmICgodGhpcy5taW4gfHwgdGhpcy5taW4gPT09IDApICYmIHRoaXMudmFsdWUgPCB0aGlzLm1pbikge1xuXHRcdFx0cmV0dXJuIGBUaGUgbWluaW11bSB2YWx1ZSBpcyAke3RoaXMubWlufWA7XG5cdFx0fVxuXG5cdFx0aWYgKCh0aGlzLm1heCB8fCB0aGlzLm1heCA9PT0gMCkgJiYgdGhpcy52YWx1ZSA+IHRoaXMubWF4KSB7XG5cdFx0XHRyZXR1cm4gYFRoZSBtYXhpbXVtIHZhbHVlIGlzICR7dGhpcy5tYXh9YDtcblx0XHR9XG5cblx0XHRpZiAoKHRoaXMubWlubGVuZ3RoIHx8IHRoaXMubWlubGVuZ3RoID09PSAwKSAmJiB0aGlzLnZhbHVlLmxlbmd0aCA8IHRoaXMubWlubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm4gYFRoZSBtaW4gbGVuZ3RoIGlzICR7dGhpcy5taW5sZW5ndGh9YDtcblx0XHR9XG5cblx0XHRpZiAoKHRoaXMubWF4bGVuZ3RoIHx8IHRoaXMubWF4bGVuZ3RoID09PSAwKSAmJiB0aGlzLnZhbHVlLmxlbmd0aCA+IHRoaXMubWF4bGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm4gYFRoZSBtYXggbGVuZ3RoIHZhbHVlIGlzICR7dGhpcy5tYXhsZW5ndGh9YDtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5pbnZhbGlkKSB7XG5cdFx0XHRyZXR1cm4gJ1BsZWFzZSBmaWxsIGluIHRoZSBjb3JyZWN0IGZvcm1hdCc7XG5cdFx0fVxuXG5cdH1cblxuXHRfcmVuZGVyKCkge1xuXHRcdGNvbnN0IHNoYWRvd1Jvb3QgPSB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcblx0XHRzaGFkb3dSb290LmlubmVySFRNTCA9IGh0bWw7XG5cdH1cbn1cblxuaWYgKCFjdXN0b21FbGVtZW50cy5nZXQoJ2F3Yy1pbnB1dCcpKSB7XG5cdGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXdjLWlucHV0JywgQXdjSW5wdXQpO1xufVxuIiwiaW1wb3J0IGh0bWwgZnJvbSAnLi9hd2MtbG9hZGluZy5odG1sJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXdjTG9hZGluZyBleHRlbmRzIEhUTUxFbGVtZW50IHtcblx0c3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XG5cdFx0cmV0dXJuIFsnY29sb3InLCAnc2l6ZSddO1xuXHR9XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyKCk7XG5cdH1cblxuXHRnZXQgc2l6ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ3NpemUnKSB8fCAnJztcblx0fVxuXG4gICAgc2V0IHNpemUodmFsdWUpIHtcblx0XHR0aGlzLnNldEF0dHJpYnV0ZSgnc2l6ZScsIHZhbHVlKTtcblx0fVxuXG5cdGdldCBjb2xvcigpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2NvbG9yJykgfHwgJyc7XG5cdH1cblxuXHRzZXQgY29sb3IodmFsdWUpIHtcblx0XHR0aGlzLnNldEF0dHJpYnV0ZSgnY29sb3InLCB2YWx1ZSk7XG5cdH1cblxuXHRjb25uZWN0ZWRDYWxsYmFjaygpIHtcblx0XHR0aGlzLmxvYWRpbmdFbCA9IHRoaXMuc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZCgnbG9hZGluZycpO1xuXHRcdHRoaXMuc2l6ZSAmJiAodGhpcy5zaXplID0gdGhpcy5zaXplKTtcblx0XHR0aGlzLmNvbG9yICYmICh0aGlzLmNvbG9yID0gdGhpcy5jb2xvcik7XG5cdH1cblxuXHRhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG5cdFx0aWYgKG5hbWUgPT0gJ2NvbG9yJyAmJiB0aGlzLmxvYWRpbmdFbCkge1xuXHRcdFx0dGhpcy5sb2FkaW5nRWwuc3R5bGUuY29sb3IgPSBuZXdWYWx1ZTtcblx0XHR9XG5cdFx0aWYgKG5hbWUgPT0gJ3NpemUnICYmIHRoaXMubG9hZGluZ0VsKSB7XG5cdFx0XHR0aGlzLmxvYWRpbmdFbC5zdHlsZS5mb250U2l6ZSA9IG5ld1ZhbHVlICsgJ3B4Jztcblx0XHR9XG5cdH1cblxuICAgIF9yZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcblx0XHRzaGFkb3dSb290LmlubmVySFRNTCA9IGh0bWw7XG4gICAgfVxufVxuXG5pZiAoIWN1c3RvbUVsZW1lbnRzLmdldCgnYXdjLWxvYWRpbmcnKSkge1xuXHRjdXN0b21FbGVtZW50cy5kZWZpbmUoJ2F3Yy1sb2FkaW5nJywgQXdjTG9hZGluZyk7XG59XG4iLCJpbXBvcnQgJy4uL2F3Yy1pY29uL2F3Yy1pY29uJztcbmltcG9ydCAnLi4vYXdjLWxvYWRpbmcvYXdjLWxvYWRpbmcnO1xuaW1wb3J0IGh0bWwgZnJvbSAnLi9hd2MtbWVzc2FnZS5odG1sJztcblxuY2xhc3MgQXdjTWVzc2FnZSBleHRlbmRzIEhUTUxFbGVtZW50IHtcblx0c3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XG5cdFx0cmV0dXJuIFsndHlwZScsICdpY29uJ107XG5cdH1cblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuX3JlbmRlcigpO1xuXHR9XG5cblx0Z2V0IHNob3coKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdzaG93JykgIT09IG51bGw7XG5cdH1cblxuXHRzZXQgc2hvdyh2YWx1ZSkge1xuXHRcdGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gZmFsc2UpIHtcblx0XHRcdHRoaXMucmVtb3ZlQXR0cmlidXRlKCdzaG93Jyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2V0QXR0cmlidXRlKCdzaG93JywgJycpO1xuXHRcdH1cblx0fVxuXG5cdGdldCBpY29uKCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnaWNvbicpO1xuXHR9XG5cblx0c2V0IGljb24odmFsdWUpIHtcblx0XHR0aGlzLnNldEF0dHJpYnV0ZSgnaWNvbicsIHZhbHVlKTtcblx0fVxuXG5cdGdldCB0eXBlKCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgndHlwZScpO1xuXHR9XG5cblx0c2V0IHR5cGUodmFsdWUpIHtcblx0XHR0aGlzLnNldEF0dHJpYnV0ZSgndHlwZScsIHZhbHVlKTtcblx0fVxuXG5cdGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpIHtcblx0XHRpZiAobmFtZSA9PSAndHlwZScgJiYgdGhpcy5tZXNzYWdlSWNvbkVsKSB7XG5cdFx0XHRpZiAobmV3VmFsdWUgIT09IG51bGwpIHtcblx0XHRcdFx0dGhpcy5tZXNzYWdlSWNvbkVsLm5hbWUgPSB0aGlzLl90eXBlTWFwKG5ld1ZhbHVlKS5uYW1lO1xuXHRcdFx0XHR0aGlzLm1lc3NhZ2VJY29uRWwuY29sb3IgPSB0aGlzLl90eXBlTWFwKG5ld1ZhbHVlKS5jb2xvcjtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKG5hbWUgPT0gJ2ljb24nICYmIHRoaXMubWVzc2FnZUljb25FbCkge1xuXHRcdFx0aWYgKG5ld1ZhbHVlICE9PSBudWxsICYmIG5ld1ZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHR0aGlzLm1lc3NhZ2VJY29uRWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0XHRcdFx0dGhpcy5tZXNzYWdlSWNvbkVsLm5hbWUgPSBuZXdWYWx1ZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMubWVzc2FnZUljb25FbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Y29ubmVjdGVkQ2FsbGJhY2soKSB7XG5cdFx0dGhpcy5tZXNzYWdlSWNvbkVsID0gdGhpcy5zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKCdtZXNzYWdlLWljb24nKTtcblx0XHR0aGlzLnNoYWRvd1Jvb3QuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIChldikgPT4ge1xuXHRcdFx0aWYgKGV2LnByb3BlcnR5TmFtZSA9PT0gJ3RyYW5zZm9ybScgJiYgIXRoaXMuc2hvdykge1xuXHRcdFx0XHRtZXNzYWdlQ29udGVudC5yZW1vdmVDaGlsZCh0aGlzKTtcblx0XHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2xvc2UnKSk7XG5cdFx0XHR9XG5cdFx0fSlcblx0XHR0aGlzLnR5cGUgPSB0aGlzLnR5cGU7XG5cdH1cblxuXHRfdHlwZU1hcCh0eXBlKSB7XG5cdFx0bGV0IG5hbWUgPSAnJztcblx0XHRsZXQgY29sb3IgPSAnJztcblx0XHRzd2l0Y2ggKHR5cGUpIHtcblx0XHRcdGNhc2UgJ2luZm8nOlxuXHRcdFx0XHRuYW1lID0gJ2luZm8tY2lyY2xlLWZpbGwnO1xuXHRcdFx0XHRjb2xvciA9ICd2YXIoLS1pbmZvQ29sb3IsICMxODkwZmYpJztcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ3N1Y2Nlc3MnOlxuXHRcdFx0XHRuYW1lID0gJ2NoZWNrLWNpcmNsZS1maWxsJztcblx0XHRcdFx0Y29sb3IgPSAndmFyKC0tc3VjY2Vzc0NvbG9yLCM1MmM0MWEpJztcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgJ2Vycm9yJzpcblx0XHRcdFx0bmFtZSA9ICdjbG9zZS1jaXJjbGUtZmlsbCc7XG5cdFx0XHRcdGNvbG9yID0gJ3ZhcigtLWVycm9yQ29sb3IsI2Y0NjE1YyknO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ3dhcm5pbmcnOlxuXHRcdFx0XHRuYW1lID0gJ3dhcm5pbmctY2lyY2xlLWZpbGwnO1xuXHRcdFx0XHRjb2xvciA9ICd2YXIoLS13YXJpbmdDb2xvciwjZmFhZDE0KSc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdHJldHVybiB7XG5cdFx0XHRuYW1lOiBuYW1lLFxuXHRcdFx0Y29sb3I6IGNvbG9yLFxuXHRcdH1cblx0fVxuXG5cdF9yZW5kZXIoKSB7XG5cdFx0Y29uc3Qgc2hhZG93Um9vdCA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuXHRcdHNoYWRvd1Jvb3QuaW5uZXJIVE1MID0gaHRtbDtcblx0fVxufVxuXG5pZiAoIWN1c3RvbUVsZW1lbnRzLmdldCgnYXdjLW1lc3NhZ2UnKSkge1xuXHRjdXN0b21FbGVtZW50cy5kZWZpbmUoJ2F3Yy1tZXNzYWdlJywgQXdjTWVzc2FnZSk7XG59XG5cbmxldCBtZXNzYWdlQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXNzYWdlLWNvbnRlbnQnKTtcbmlmICghbWVzc2FnZUNvbnRlbnQpIHtcblx0bWVzc2FnZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0bWVzc2FnZUNvbnRlbnQuaWQgPSAnbWVzc2FnZS1jb250ZW50Jztcblx0bWVzc2FnZUNvbnRlbnQuc3R5bGUgPSAncG9zaXRpb246Zml4ZWQ7IHBvaW50ZXItZXZlbnRzOm5vbmU7IGxlZnQ6MDsgcmlnaHQ6MDsgdG9wOjEwcHg7IHotaW5kZXg6NTE7Jztcblx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtZXNzYWdlQ29udGVudCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0aW5mbzogKHRleHQgPSAnJywgZHVyYXRpb24sIG9uY2xvc2UpID0+IHtcblx0XHRjb25zdCBtZXNzYWdlID0gbmV3IEF3Y01lc3NhZ2UoKTtcblx0XHRtZXNzYWdlLnRpbWVyICYmIGNsZWFyVGltZW91dChtZXNzYWdlLnRpbWVyKTtcblx0XHRtZXNzYWdlQ29udGVudC5hcHBlbmRDaGlsZChtZXNzYWdlKTtcblx0XHRtZXNzYWdlLnR5cGUgPSAnaW5mbyc7XG5cdFx0bWVzc2FnZS50ZXh0Q29udGVudCA9IHRleHQ7XG5cdFx0bWVzc2FnZS5zaG93ID0gdHJ1ZTtcblx0XHRtZXNzYWdlLm9uY2xvc2UgPSBvbmNsb3NlO1xuXHRcdG1lc3NhZ2UudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdG1lc3NhZ2Uuc2hvdyA9IGZhbHNlO1xuXHRcdH0sIGR1cmF0aW9uIHx8IDMwMDApO1xuXHRcdHJldHVybiBtZXNzYWdlO1xuXHR9LFxuXG5cdHN1Y2Nlc3M6ICh0ZXh0ID0gJycsIGR1cmF0aW9uLCBvbmNsb3NlKSA9PiB7XG5cdFx0Y29uc3QgbWVzc2FnZSA9IG5ldyBBd2NNZXNzYWdlKCk7XG5cdFx0bWVzc2FnZS50aW1lciAmJiBjbGVhclRpbWVvdXQobWVzc2FnZS50aW1lcik7XG5cdFx0bWVzc2FnZUNvbnRlbnQuYXBwZW5kQ2hpbGQobWVzc2FnZSk7XG5cdFx0bWVzc2FnZS50eXBlID0gJ3N1Y2Nlc3MnO1xuXHRcdG1lc3NhZ2UudGV4dENvbnRlbnQgPSB0ZXh0O1xuXHRcdG1lc3NhZ2Uuc2hvdyA9IHRydWU7XG5cdFx0bWVzc2FnZS5vbmNsb3NlID0gb25jbG9zZTtcblx0XHRtZXNzYWdlLnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRtZXNzYWdlLnNob3cgPSBmYWxzZTtcblx0XHR9LCBkdXJhdGlvbiB8fCAzMDAwKTtcblx0XHRyZXR1cm4gbWVzc2FnZTtcblx0fSxcblxuXHRlcnJvcjogKHRleHQgPSAnJywgZHVyYXRpb24sIG9uY2xvc2UpID0+IHtcblx0XHRjb25zdCBtZXNzYWdlID0gbmV3IEF3Y01lc3NhZ2UoKTtcblx0XHRtZXNzYWdlLnRpbWVyICYmIGNsZWFyVGltZW91dChtZXNzYWdlLnRpbWVyKTtcblx0XHRtZXNzYWdlQ29udGVudC5hcHBlbmRDaGlsZChtZXNzYWdlKTtcblx0XHRtZXNzYWdlLnR5cGUgPSAnZXJyb3InO1xuXHRcdG1lc3NhZ2UudGV4dENvbnRlbnQgPSB0ZXh0O1xuXHRcdG1lc3NhZ2Uuc2hvdyA9IHRydWU7XG5cdFx0bWVzc2FnZS5vbmNsb3NlID0gb25jbG9zZTtcblx0XHRtZXNzYWdlLnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRtZXNzYWdlLnNob3cgPSBmYWxzZTtcblx0XHR9LCBkdXJhdGlvbiB8fCAzMDAwKTtcblx0XHRyZXR1cm4gbWVzc2FnZTtcblx0fSxcblxuXHR3YXJuaW5nOiAodGV4dCA9ICcnLCBkdXJhdGlvbiwgb25jbG9zZSkgPT4ge1xuXHRcdGNvbnN0IG1lc3NhZ2UgPSBuZXcgQXdjTWVzc2FnZSgpO1xuXHRcdG1lc3NhZ2UudGltZXIgJiYgY2xlYXJUaW1lb3V0KG1lc3NhZ2UudGltZXIpO1xuXHRcdG1lc3NhZ2VDb250ZW50LmFwcGVuZENoaWxkKG1lc3NhZ2UpO1xuXHRcdG1lc3NhZ2UudHlwZSA9ICd3YXJuaW5nJztcblx0XHRtZXNzYWdlLnRleHRDb250ZW50ID0gdGV4dDtcblx0XHRtZXNzYWdlLnNob3cgPSB0cnVlO1xuXHRcdG1lc3NhZ2Uub25jbG9zZSA9IG9uY2xvc2U7XG5cdFx0bWVzc2FnZS50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0bWVzc2FnZS5zaG93ID0gZmFsc2U7XG5cdFx0fSwgZHVyYXRpb24gfHwgMzAwMCk7XG5cdFx0cmV0dXJuIG1lc3NhZ2U7XG5cdH0sXG5cblx0bG9hZGluZzogKHRleHQgPSAnJywgZHVyYXRpb24gPSAwLCBvbmNsb3NlKSA9PiB7XG5cdFx0Y29uc3QgbWVzc2FnZSA9IG5ldyBBd2NNZXNzYWdlKCk7XG5cdFx0bWVzc2FnZS50aW1lciAmJiBjbGVhclRpbWVvdXQobWVzc2FnZS50aW1lcik7XG5cdFx0bWVzc2FnZUNvbnRlbnQuYXBwZW5kQ2hpbGQobWVzc2FnZSk7XG5cdFx0bWVzc2FnZS50eXBlID0gJ2xvYWRpbmcnO1xuXHRcdG1lc3NhZ2UudGV4dENvbnRlbnQgPSB0ZXh0O1xuXHRcdG1lc3NhZ2Uuc2hvdyA9IHRydWU7XG5cdFx0bWVzc2FnZS5vbmNsb3NlID0gb25jbG9zZTtcblx0XHRpZiAoZHVyYXRpb24gIT09IDApIHtcblx0XHRcdG1lc3NhZ2UudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0bWVzc2FnZS5zaG93ID0gZmFsc2U7XG5cdFx0XHR9LCBkdXJhdGlvbiB8fCAzMDAwKTtcblx0XHR9XG5cdFx0cmV0dXJuIG1lc3NhZ2U7XG5cdH0sXG5cblx0c2hvdzogKHsgdGV4dCwgZHVyYXRpb24sIG9uY2xvc2UsIGljb24gfSkgPT4ge1xuXHRcdGNvbnN0IG1lc3NhZ2UgPSBuZXcgQXdjTWVzc2FnZSgpO1xuXHRcdG1lc3NhZ2UudGltZXIgJiYgY2xlYXJUaW1lb3V0KG1lc3NhZ2UudGltZXIpO1xuXHRcdG1lc3NhZ2VDb250ZW50LmFwcGVuZENoaWxkKG1lc3NhZ2UpO1xuXHRcdG1lc3NhZ2UuaWNvbiA9IGljb247XG5cdFx0bWVzc2FnZS50ZXh0Q29udGVudCA9IHRleHQgfHwgJyc7XG5cdFx0bWVzc2FnZS5zaG93ID0gdHJ1ZTtcblx0XHRtZXNzYWdlLm9uY2xvc2UgPSBvbmNsb3NlO1xuXHRcdGlmIChkdXJhdGlvbiAhPT0gMCkge1xuXHRcdFx0bWVzc2FnZS50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRtZXNzYWdlLnNob3cgPSBmYWxzZTtcblx0XHRcdH0sIGR1cmF0aW9uIHx8IDMwMDApO1xuXHRcdH1cblx0XHRyZXR1cm4gbWVzc2FnZTtcblx0fSxcbn1cbiIsImltcG9ydCAnLi4vYXdjLWJ1dHRvbi9hd2MtYnV0dG9uLmpzJ1xuaW1wb3J0IGh0bWwgZnJvbSAnLi9hd2Mtb3B0aW9uLmh0bWwnO1xuXG5jbGFzcyBBd2NPcHRpb24gZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG5cdHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xuXHRcdHJldHVybiBbJ3NlbGVjdGVkJywgJ2Rpc2FibGVkJywgJ3ZhbHVlJ107XG5cdH1cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLl9yZW5kZXIoKTtcblx0fVxuXG5cdGdldCB2YWx1ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG5cdH1cblxuXHRnZXQgZGlzYWJsZWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdkaXNhYmxlZCcpICE9PSBudWxsO1xuXHR9XG5cblx0c2V0IGRpc2FibGVkKHZhbHVlKSB7XG5cdFx0aWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSBmYWxzZSkge1xuXHRcdFx0dGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKTtcblx0XHR9XG5cdH1cblxuXHRzZXQgc2VsZWN0ZWQodmFsdWUpIHtcblx0XHRpZiAodmFsdWUpIHtcblx0XHRcdHRoaXMuc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICcnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ3NlbGVjdGVkJyk7XG5cdFx0fVxuXHR9XG5cblx0c2V0IGZvY3VzaW4odmFsdWUpIHtcblx0XHRpZiAodmFsdWUpIHtcblx0XHRcdHRoaXMuc2V0QXR0cmlidXRlKCdmb2N1c2luJywgJycpO1xuXHRcdFx0dGhpcy5vcHRpb25FbC5zZXRBdHRyaWJ1dGUoJ2ZvY3VzJywgJycpO1xuXHRcdFx0dGhpcy5zY3JvbGxJbnRvVmlldyh7XG5cdFx0XHRcdGJsb2NrOiAnbmVhcmVzdCcsXG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ2ZvY3VzaW4nKTtcblx0XHRcdHRoaXMub3B0aW9uRWwucmVtb3ZlQXR0cmlidXRlKCdmb2N1cycpO1xuXHRcdH1cblx0fVxuXG5cdGZvY3VzKCkge1xuXHRcdHRoaXMub3B0aW9uRWwuZm9jdXMoKTtcblx0fVxuXG5cdGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpIHtcblx0XHRpZiAobmFtZSA9PSAnZGlzYWJsZWQnICYmIHRoaXMub3B0aW9uRWwpIHtcblx0XHRcdGlmIChuZXdWYWx1ZSAhPSBudWxsKSB7XG5cdFx0XHRcdHRoaXMub3B0aW9uRWwuZGlzYWJsZWQgPSBuZXdWYWx1ZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRjb25uZWN0ZWRDYWxsYmFjaygpIHtcblx0XHR0aGlzLm9wdGlvbkVsID0gdGhpcy5zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKCdvcHRpb24nKTtcblx0XHR0aGlzLmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZDtcblx0XHR0aGlzLm9wdGlvbkVsLmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZDtcblx0fVxuXG5cdF9yZW5kZXIoKSB7XG5cdFx0Y29uc3Qgc2hhZG93Um9vdCA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuXHRcdHNoYWRvd1Jvb3QuaW5uZXJIVE1MID0gaHRtbDtcblx0fVxufVxuXG5pZiAoIWN1c3RvbUVsZW1lbnRzLmdldCgnYXdjLW9wdGlvbicpKSB7XG5cdGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXdjLW9wdGlvbicsIEF3Y09wdGlvbik7XG59XG4iLCJpbXBvcnQgJy4uL2F3Yy1idXR0b24vYXdjLWJ1dHRvbi5qcydcbmltcG9ydCBodG1sIGZyb20gJy4vYXdjLXBhZ2luYXRpb24uaHRtbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF3Y1BhZ2luYXRpb24gZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG5cdHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xuXHRcdHJldHVybiBbJ3BhZ2VzaXplJywgJ3RvdGFsJ107XG5cdH1cblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuX3JlbmRlcigpO1xuXHR9XG5cblx0Z2V0IGRlZmF1bHRjdXJyZW50KCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnZGVmYXVsdGN1cnJlbnQnKSB8fCAxO1xuXHR9XG5cblx0c2V0IGRlZmF1bHR2YWx1ZSh2YWx1ZSkge1xuXHRcdHRoaXMuc2V0QXR0cmlidXRlKCdkZWZhdWx0dmFsdWUnLCB2YWx1ZSk7XG5cdH1cblxuXHRnZXQgcGFnZXNpemUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdwYWdlc2l6ZScpIHx8IDE7XG5cdH1cblxuXHRzZXQgcGFnZXNpemUodmFsdWUpIHtcblx0XHR0aGlzLnNldEF0dHJpYnV0ZSgncGFnZXNpemUnLCB2YWx1ZSk7XG5cdH1cblxuXHRnZXQgdG90YWwoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCd0b3RhbCcpIHx8IDA7XG5cdH1cblxuXHRzZXQgdG90YWwodmFsdWUpIHtcblx0XHR0aGlzLnNldEF0dHJpYnV0ZSgndG90YWwnLCB2YWx1ZSk7XG5cdH1cblxuXHRnZXQgY3VycmVudCgpIHtcblx0XHRyZXR1cm4gdGhpcy4kY3VycmVudDtcblx0fVxuXG5cdHNldCBjdXJyZW50KGN1cnJlbnQpIHtcblx0XHRpZiAodGhpcy4kY3VycmVudCAhPT0gY3VycmVudCkge1xuXHRcdFx0Y3VycmVudCA9IE1hdGgubWluKE1hdGgubWF4KDEsIGN1cnJlbnQpLCB0aGlzLl9jb3VudCk7XG5cdFx0XHR0aGlzLiRjdXJyZW50ID0gY3VycmVudDtcblx0XHRcdHRoaXMuX3VwZGF0ZVBhZ2UoY3VycmVudCk7XG5cdFx0XHRpZiAodGhpcy5faW5pdCkge1xuXHRcdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoXG5cdFx0XHRcdFx0bmV3IEN1c3RvbUV2ZW50KCdjaGFuZ2UnLCB7XG5cdFx0XHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRcdFx0Y3VycmVudDogY3VycmVudCxcblx0XHRcdFx0XHRcdFx0cGFnZXNpemU6IHRoaXMucGFnZXNpemUsXG5cdFx0XHRcdFx0XHRcdHRvdGFsOiB0aGlzLnRvdGFsLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGdldCBzaW1wbGUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdzaW1wbGUnKSAhPT0gbnVsbDtcblx0fVxuXG5cdGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpIHtcblx0XHRpZiAobmFtZSA9PSAncGFnZXNpemUnICYmIHRoaXMucGFnZUVsKSB7XG5cdFx0XHR0aGlzLl9yZW5kZXJQYWdlKG5ld1ZhbHVlLCB0aGlzLnRvdGFsKTtcblx0XHR9XG5cdFx0aWYgKG5hbWUgPT0gJ3RvdGFsJyAmJiB0aGlzLnBhZ2VFbCkge1xuXHRcdFx0dGhpcy5fcmVuZGVyUGFnZSh0aGlzLnBhZ2VzaXplLCBuZXdWYWx1ZSk7XG5cdFx0fVxuXHR9XG5cblx0Y29ubmVjdGVkQ2FsbGJhY2soKSB7XG5cdFx0dGhpcy5wYWdlRWwgPSB0aGlzLnNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2UnKTtcblx0XHR0aGlzLmxlZnRFbCA9IHRoaXMuc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZCgnbGVmdCcpO1xuXHRcdHRoaXMucmlnaHRFbCA9IHRoaXMuc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZCgncmlnaHQnKTtcblx0XHR0aGlzLiRjdXJyZW50ID0gdGhpcy5kZWZhdWx0Y3VycmVudDtcblx0XHR0aGlzLl9yZW5kZXJQYWdlKHRoaXMucGFnZXNpemUsIHRoaXMudG90YWwpO1xuXHRcdHRoaXMucGFnZUVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2KSA9PiB7XG5cdFx0XHRjb25zdCBpdGVtID0gZXYudGFyZ2V0LmNsb3Nlc3QoJ2F3Yy1idXR0b24nKTtcblx0XHRcdGlmIChpdGVtKSB7XG5cdFx0XHRcdHRoaXMuY3VycmVudCA9IE51bWJlcihpdGVtLmRhdGFzZXQuY3VycmVudCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0dGhpcy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2KSA9PiB7XG5cdFx0XHRzd2l0Y2ggKGV2LmtleSkge1xuXHRcdFx0XHRjYXNlICdBcnJvd0xlZnQnOlxuXHRcdFx0XHRcdHRoaXMuY3VycmVudC0tO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdBcnJvd1JpZ2h0Jzpcblx0XHRcdFx0XHR0aGlzLmN1cnJlbnQrKztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9KVxuXHRcdHRoaXMubGVmdEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2KSA9PiB7XG5cdFx0XHR0aGlzLmN1cnJlbnQtLTtcblx0XHR9KTtcblx0XHR0aGlzLnJpZ2h0RWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXYpID0+IHtcblx0XHRcdHRoaXMuY3VycmVudCsrO1xuXHRcdH0pO1xuXHRcdHRoaXMuX2luaXQgPSB0cnVlO1xuXHR9XG5cblx0X3JlbmRlclBhZ2UocGFnZXNpemUsIHRvdGFsKSB7XG5cdFx0dGhpcy5fY291bnQgPSBNYXRoLmNlaWwodG90YWwgLyBwYWdlc2l6ZSk7XG5cdFx0Y29uc3QgY3VycmVudCA9IE1hdGgubWluKE1hdGgubWF4KDEsIHRoaXMuY3VycmVudCksIHRoaXMuX2NvdW50KTtcblx0XHRpZiAodGhpcy5zaW1wbGUpIHtcblx0XHRcdGNvbnN0IGh0bWwgPSBgPGF3Yy1idXR0b24gY2xhc3M9XCJzaW1wbGUtcGFnZVwiIHRhYmluZGV4PVwiLTFcIiB0eXBlPVwidGV4dFwiPiR7Y3VycmVudH0gLyAke3RoaXMuX2NvdW50fTwvYXdjLWJ1dHRvbj5gO1xuXHRcdFx0dGhpcy5wYWdlRWwuaW5uZXJIVE1MID0gaHRtbDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgaHRtbCA9IEFycmF5LmZyb20oeyBsZW5ndGg6IHRoaXMuX2NvdW50IH0sIChlbCwgaSkgPT4gaSlcblx0XHRcdFx0LnNwbGljZSgwLCA5KVxuXHRcdFx0XHQubWFwKFxuXHRcdFx0XHRcdChlbCkgPT5cblx0XHRcdFx0XHRcdGA8YXdjLWJ1dHRvbiAke2VsICsgMSA9PSBjdXJyZW50ID8gJ2N1cnJlbnQnIDogJyd9IHR5cGU9XCJ0ZXh0XCIgZGF0YS1jdXJyZW50PVwiJHtlbCArIDF9XCI+JHtlbCArIDF9PC9hd2MtYnV0dG9uPmBcblx0XHRcdFx0KVxuXHRcdFx0XHQuam9pbignJyk7XG5cdFx0XHR0aGlzLnBhZ2VFbC5pbm5lckhUTUwgPSBodG1sO1xuXHRcdH1cblx0XHR0aGlzLl91cGRhdGVQYWdlKGN1cnJlbnQpO1xuXHR9XG5cblx0X3VwZGF0ZVBhZ2UoY3VycmVudCA9IHRoaXMuY3VycmVudCkge1xuXHRcdHRoaXMubGVmdEVsLmRpc2FibGVkID0gY3VycmVudCA9PSAxO1xuXHRcdHRoaXMucmlnaHRFbC5kaXNhYmxlZCA9IGN1cnJlbnQgPT0gdGhpcy5fY291bnQ7XG5cdFx0aWYgKHRoaXMuc2ltcGxlKSB7XG5cdFx0XHRjb25zdCBzaW1wbGVQYWdlRWwgPSB0aGlzLnBhZ2VFbC5xdWVyeVNlbGVjdG9yKCcuc2ltcGxlLXBhZ2UnKTtcblx0XHRcdGlmIChzaW1wbGVQYWdlRWwpIHtcblx0XHRcdFx0c2ltcGxlUGFnZUVsLnRleHRDb250ZW50ID0gY3VycmVudCArICcgLyAnICsgdGhpcy5fY291bnQ7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICh0aGlzLl9jb3VudCA+IDkpIHtcblx0XHRcdFx0bGV0IHBsYWNlID0gW107XG5cdFx0XHRcdHN3aXRjaCAoY3VycmVudCkge1xuXHRcdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0XHRjYXNlIDI6XG5cdFx0XHRcdFx0Y2FzZSAzOlxuXHRcdFx0XHRcdGNhc2UgNDpcblx0XHRcdFx0XHRjYXNlIDU6XG5cdFx0XHRcdFx0XHRwbGFjZSA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3LCAnbmV4dCcsIHRoaXMuX2NvdW50XTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgdGhpcy5fY291bnQ6XG5cdFx0XHRcdFx0Y2FzZSB0aGlzLl9jb3VudCAtIDE6XG5cdFx0XHRcdFx0Y2FzZSB0aGlzLl9jb3VudCAtIDI6XG5cdFx0XHRcdFx0Y2FzZSB0aGlzLl9jb3VudCAtIDM6XG5cdFx0XHRcdFx0Y2FzZSB0aGlzLl9jb3VudCAtIDQ6XG5cdFx0XHRcdFx0XHRwbGFjZSA9IFtcblx0XHRcdFx0XHRcdFx0MSxcblx0XHRcdFx0XHRcdFx0J3ByZScsXG5cdFx0XHRcdFx0XHRcdHRoaXMuX2NvdW50IC0gNixcblx0XHRcdFx0XHRcdFx0dGhpcy5fY291bnQgLSA1LFxuXHRcdFx0XHRcdFx0XHR0aGlzLl9jb3VudCAtIDQsXG5cdFx0XHRcdFx0XHRcdHRoaXMuX2NvdW50IC0gMyxcblx0XHRcdFx0XHRcdFx0dGhpcy5fY291bnQgLSAyLFxuXHRcdFx0XHRcdFx0XHR0aGlzLl9jb3VudCAtIDEsXG5cdFx0XHRcdFx0XHRcdHRoaXMuX2NvdW50LFxuXHRcdFx0XHRcdFx0XTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRwbGFjZSA9IFtcblx0XHRcdFx0XHRcdFx0MSxcblx0XHRcdFx0XHRcdFx0J3ByZScsXG5cdFx0XHRcdFx0XHRcdGN1cnJlbnQgLSAyLFxuXHRcdFx0XHRcdFx0XHRjdXJyZW50IC0gMSxcblx0XHRcdFx0XHRcdFx0Y3VycmVudCxcblx0XHRcdFx0XHRcdFx0Y3VycmVudCArIDEsXG5cdFx0XHRcdFx0XHRcdGN1cnJlbnQgKyAyLFxuXHRcdFx0XHRcdFx0XHQnbmV4dCcsXG5cdFx0XHRcdFx0XHRcdHRoaXMuX2NvdW50LFxuXHRcdFx0XHRcdFx0XTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMucGFnZUVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2F3Yy1idXR0b24nKS5mb3JFYWNoKChlbCwgaSkgPT4ge1xuXHRcdFx0XHRcdGlmICh0eXBlb2YgcGxhY2VbaV0gPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdFx0XHRlbC5kYXRhc2V0LmN1cnJlbnQgPSBwbGFjZVtpXTtcblx0XHRcdFx0XHRcdGVsLnRleHRDb250ZW50ID0gcGxhY2VbaV07XG5cdFx0XHRcdFx0XHRlbC5kaXNhYmxlZCA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0aWYgKHBsYWNlW2ldID09IGN1cnJlbnQpIHtcblx0XHRcdFx0XHRcdFx0ZWwuc2V0QXR0cmlidXRlKCdjdXJyZW50JywgJycpO1xuXHRcdFx0XHRcdFx0XHRlbC5mb2N1cygpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0ZWwucmVtb3ZlQXR0cmlidXRlKCdjdXJyZW50Jyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRlbC5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGVsLnRleHRDb250ZW50ID0gJy4uLic7XG5cdFx0XHRcdFx0XHRlbC5yZW1vdmVBdHRyaWJ1dGUoJ2N1cnJlbnQnKTtcblx0XHRcdFx0XHRcdGVsLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAtMSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMucGFnZUVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2F3Yy1idXR0b24nKS5mb3JFYWNoKChlbCwgaSkgPT4ge1xuXHRcdFx0XHRcdGlmIChlbC5kYXRhc2V0LmN1cnJlbnQgPT0gY3VycmVudCkge1xuXHRcdFx0XHRcdFx0ZWwuc2V0QXR0cmlidXRlKCdjdXJyZW50JywgJycpO1xuXHRcdFx0XHRcdFx0ZWwuZm9jdXMoKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0ZWwucmVtb3ZlQXR0cmlidXRlKCdjdXJyZW50Jyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRfcmVuZGVyKCkge1xuXHRcdGNvbnN0IHNoYWRvd1Jvb3QgPSB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcblx0XHRzaGFkb3dSb290LmlubmVySFRNTCA9IGh0bWw7XG5cdH1cbn1cblxuaWYgKCFjdXN0b21FbGVtZW50cy5nZXQoJ2F3Yy1wYWdpbmF0aW9uJykpIHtcblx0Y3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhd2MtcGFnaW5hdGlvbicsIEF3Y1BhZ2luYXRpb24pO1xufVxuIiwiaW1wb3J0ICcuLi9hd2MtYnV0dG9uL2F3Yy1idXR0b24nO1xuaW1wb3J0IGh0bWwgZnJvbSAnLi9hd2MtcG9wYm9keS5odG1sJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXdjUG9wQm9keSBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcbiAgICAgICAgcmV0dXJuIFsnb3BlbicsICd0aXRsZScsICdva3RleHQnLCAnY2FuY2VsdGV4dCcsICd0eXBlJ107XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IodHlwZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9yZW5kZXIodHlwZSk7XG4gICAgfVxuXG4gICAgZ2V0IG9wZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnb3BlbicpICE9PSBudWxsO1xuICAgIH1cblxuICAgIHNldCBvcGVuKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCdvcGVuJyk7XG4gICAgICAgICAgICB0aGlzLnBhcmVudE5vZGUucmVtb3ZlQXR0cmlidXRlKCdvcGVuJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnb3BlbicsICcnKTtcbiAgICAgICAgICAgIHRoaXMucGFyZW50Tm9kZS5zZXRBdHRyaWJ1dGUoJ29wZW4nLCAnJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgdGl0bGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgndGl0bGUnKSB8fCAnVGl0bGUnO1xuICAgIH1cblxuICAgIHNldCB0aXRsZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgndGl0bGUnLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgZ2V0IHR5cGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgndHlwZScpO1xuICAgIH1cblxuICAgIHNldCB0eXBlKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCd0eXBlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgndHlwZScsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBva3RleHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnb2t0ZXh0JykgfHwgJ09LJztcbiAgICB9XG5cbiAgICBzZXQgb2t0ZXh0KHZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdva3RleHQnLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgZ2V0IGNhbmNlbHRleHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnY2FuY2VsdGV4dCcpIHx8ICdDYW5jZWwnO1xuICAgIH1cblxuICAgIHNldCBjYW5jZWx0ZXh0KHZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdjYW5jZWx0ZXh0JywgdmFsdWUpO1xuICAgIH1cblxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICB0aGlzLl9yZW1vdmUgPSBmYWxzZVxuICAgICAgICBpZiAodGhpcy50eXBlKSB7XG4gICAgICAgICAgICB0aGlzLnRpdGxlcyA9IHRoaXMuc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKTtcbiAgICAgICAgICAgIHRoaXMuYnRuQ2xvc2UgPSB0aGlzLnNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1jbG9zZScpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT0gJ2NvbmZpcm0nKSB7XG4gICAgICAgICAgICB0aGlzLmJ0bkNhbmNlbCA9IHRoaXMuc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZCgnYnRuLWNhbmNlbCcpO1xuICAgICAgICAgICAgdGhpcy5idG5TdWJtaXQgPSB0aGlzLnNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1zdWJtaXQnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCAoZXYpID0+IHtcbiAgICAgICAgICAgIGlmIChldi5wcm9wZXJ0eU5hbWUgPT09ICd0cmFuc2Zvcm0nICYmIHRoaXMub3Blbikge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnR5cGUgPT0gJ2NvbmZpcm0nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuU3VibWl0LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnR5cGUgPT0gJ3BhbmUnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuQ2xvc2UuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnb3BlbicpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgKGV2KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXYucHJvcGVydHlOYW1lID09PSAndHJhbnNmb3JtJyAmJiAhdGhpcy5vcGVuKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3JlbW92ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2Nsb3NlJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXYudGFyZ2V0LmNsb3Nlc3QoJ1thdXRvY2xvc2VdJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB3aW5kb3cueHlBY3RpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGlmICh0aGlzLnR5cGUpIHtcbiAgICAgICAgICAgIHRoaXMuYnRuQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuID0gZmFsc2VcbiAgICAgICAgICAgICAgICB3aW5kb3cueHlBY3RpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT0gJ2NvbmZpcm0nKSB7XG4gICAgICAgICAgICB0aGlzLmJ0bkNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjYW5jZWwnKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgd2luZG93Lnh5QWN0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMuYnRuU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3N1Ym1pdCcpKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB3aW5kb3cueHlBY3RpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSkge1xuICAgICAgICBpZiAobmFtZSA9PSAndGl0bGUnICYmIHRoaXMudGl0bGVzKSB7XG4gICAgICAgICAgICBpZiAobmV3VmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpdGxlcy5pbm5lckhUTUwgPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobmFtZSA9PSAnb2t0ZXh0JyAmJiB0aGlzLmJ0blN1Ym1pdCkge1xuICAgICAgICAgICAgaWYgKG5ld1ZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5idG5TdWJtaXQuaW5uZXJIVE1MID0gbmV3VmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5hbWUgPT0gJ2NhbmNlbHRleHQnICYmIHRoaXMuYnRuQ2FuY2VsKSB7XG4gICAgICAgICAgICBpZiAobmV3VmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bkNhbmNlbC5pbm5lckhUTUwgPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9yZW5kZXIodHlwZSkge1xuICAgICAgICBjb25zdCBzaGFkb3dSb290ID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG4gICAgICAgIHNoYWRvd1Jvb3QuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgJHtodG1sfVxuICAgICAgICAgICAgJHsodHlwZSB8fCB0aGlzLnR5cGUpID09PSAnY29uZmlybSdcbiAgICAgICAgICAgICAgICA/ICc8YXdjLWljb24gaWQ9XCJwb3Bib2R5LXR5cGVcIiBjbGFzcz1cInBvcGJvZHktdHlwZVwiIG5hbWU9XCJxdWVzdGlvbi1jaXJjbGVcIiBjb2xvcj1cInZhcigtLXdhcmluZ0NvbG9yLCNmYWFkMTQpXCI+PC9hd2MtaWNvbj4nXG4gICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcGJvZHktY29udGVudFwiPlxuICAgICAgICAgICAgICAgICR7KHR5cGUgfHwgdGhpcy50eXBlKSAhPT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJzxkaXYgY2xhc3M9XCJwb3Bib2R5LXRpdGxlXCIgaWQ9XCJ0aXRsZVwiPicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGl0bGUgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8L2Rpdj48YXdjLWJ1dHRvbiBjbGFzcz1cImJ0bi1jbG9zZVwiIGlkPVwiYnRuLWNsb3NlXCIgaWNvbj1cImNsb3NlXCI+PC9hd2MtYnV0dG9uPidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcGJvZHktYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgJHsodHlwZSB8fCB0aGlzLnR5cGUpID09PSAnY29uZmlybSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICc8ZGl2IGNsYXNzPVwicG9wYm9keS1mb290ZXJcIj48YXdjLWJ1dHRvbiBpZD1cImJ0bi1jYW5jZWxcIj4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbmNlbHRleHQgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8L2F3Yy1idXR0b24+PGF3Yy1idXR0b24gaWQ9XCJidG4tc3VibWl0XCIgdHlwZT1cInByaW1hcnlcIj4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9rdGV4dCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzwvYXdjLWJ1dHRvbj48L2Rpdj4nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gICAgfVxufVxuXG5pZiAoIWN1c3RvbUVsZW1lbnRzLmdldCgnYXdjLXBvcGJvZHknKSkge1xuICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXdjLXBvcGJvZHknLCBBd2NQb3BCb2R5KTtcbn0iLCJpbXBvcnQgJy4uL2F3Yy1idXR0b24vYXdjLWJ1dHRvbic7XG5pbXBvcnQgQXdjUG9wQm9keSBmcm9tICcuL2F3Yy1wb3Bib2R5JztcbmltcG9ydCBodG1sIGZyb20gJy4vYXdjLXBvcG92ZXIuaHRtbCc7XG5cbmNsYXNzIEF3Y1BvcG92ZXIgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG5cdHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xuXHRcdHJldHVybiBbJ3RpdGxlJywgJ29rdGV4dCcsICdjYW5jZWx0ZXh0JywgJ3R5cGUnXVxuXHR9XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5zZXRwb3AgPSB0aGlzLnNldHBvcC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuX3JlbmRlcigpO1xuXHR9XG5cblx0Z2V0IHRpdGxlKCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgndGl0bGUnKSB8fCAnVGl0bGUnO1xuXHR9XG5cblx0c2V0IHRpdGxlKHZhbHVlKSB7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgdmFsdWUpO1xuXHR9XG5cblx0Z2V0IGRpc2FibGVkKCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnZGlzYWJsZWQnKSAhPT0gbnVsbDtcblx0fVxuXG5cdHNldCBkaXNhYmxlZCh2YWx1ZSkge1xuXHRcdGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gZmFsc2UpIHtcblx0XHRcdHRoaXMucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJyk7XG5cdFx0fVxuXHR9XG5cblx0Z2V0IHR5cGUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCd0eXBlJyk7XG5cdH1cblxuXHRzZXQgdHlwZSh2YWx1ZSkge1xuXHRcdHRoaXMuc2V0QXR0cmlidXRlKCd0eXBlJywgdmFsdWUpO1xuXHR9XG5cblx0Z2V0IGRpcigpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RpcicpO1xuXHR9XG5cblx0c2V0IGRpcih2YWx1ZSkge1xuXHRcdHRoaXMuc2V0QXR0cmlidXRlKCdkaXInLCB2YWx1ZSk7XG5cdH1cblxuXHRnZXQgb2t0ZXh0KCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnb2t0ZXh0Jyk7XG5cdH1cblxuXHRzZXQgb2t0ZXh0KHZhbHVlKSB7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGUoJ29rdGV4dCcsIHZhbHVlKTtcblx0fVxuXG5cdGdldCBjYW5jZWx0ZXh0KCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnY2FuY2VsdGV4dCcpO1xuXHR9XG5cblx0c2V0IGNhbmNlbHRleHQodmFsdWUpIHtcblx0XHR0aGlzLnNldEF0dHJpYnV0ZSgnY2FuY2VsdGV4dCcsIHZhbHVlKTtcblx0fVxuXG5cdGdldCB0cmlnZ2VyKCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgndHJpZ2dlcicpO1xuXHR9XG5cblx0Z2V0IGNvbnRlbnQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdjb250ZW50Jyk7XG5cdH1cblxuXHRzaG93KGV2KSB7XG5cdFx0dGhpcy5wb3BCb2R5RWwgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ2F3Yy1wb3Bib2R5Jyk7XG5cdFx0aWYgKCF0aGlzLmRpc2FibGVkKSB7XG5cdFx0XHRpZiAoIXRoaXMucG9wQm9keUVsKSB7XG5cdFx0XHRcdHRoaXMucG9wQm9keUVsID0gbmV3IEF3Y1BvcEJvZHkodGhpcy50eXBlKTtcblx0XHRcdFx0dGhpcy5wb3BCb2R5RWwudHlwZSA9IHRoaXMudHlwZTtcblx0XHRcdFx0dGhpcy5hcHBlbmRDaGlsZCh0aGlzLnBvcEJvZHlFbCk7XG5cdFx0XHRcdHRoaXMucG9wQm9keUVsLnRpdGxlID0gdGhpcy50aXRsZSB8fCAnJztcblx0XHRcdFx0dGhpcy5wb3BCb2R5RWwuaW5uZXJIVE1MID0gdGhpcy5jb250ZW50IHx8ICcnO1xuXHRcdFx0XHRpZiAodGhpcy50eXBlID09ICdjb25maXJtJykge1xuXHRcdFx0XHRcdHRoaXMucG9wQm9keUVsLm9rdGV4dCA9IHRoaXMub2t0ZXh0IHx8ICdPSyc7XG5cdFx0XHRcdFx0dGhpcy5wb3BCb2R5RWwuY2FuY2VsdGV4dCA9IHRoaXMuY2FuY2VsdGV4dCB8fCAnQ2FuY2VsJztcblx0XHRcdFx0XHR0aGlzLnBvcEJvZHlFbC5vbnN1Ym1pdCA9ICgpID0+XG5cdFx0XHRcdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdzdWJtaXQnKSk7XG5cdFx0XHRcdFx0dGhpcy5wb3BCb2R5RWwub25jYW5jZWwgPSAoKSA9PlxuXHRcdFx0XHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2FuY2VsJykpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnBvcEJvZHlFbC5jbGllbnRXaWR0aDtcblx0XHRcdGlmICh0aGlzLnRyaWdnZXIgPT09ICdjb250ZXh0bWVudScpIHtcblx0XHRcdFx0Y29uc3QgeyB4LCB5IH0gPSB0aGlzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdFx0XHR0aGlzLnBvcEJvZHlFbC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS14JywgZXYuY2xpZW50WCAtIHggKyAncHgnKTtcblx0XHRcdFx0dGhpcy5wb3BCb2R5RWwuc3R5bGUuc2V0UHJvcGVydHkoJy0teScsIGV2LmNsaWVudFkgLSB5ICsgJ3B4Jyk7XG5cdFx0XHRcdHRoaXMucG9wQm9keUVsLm9wZW4gPSB0cnVlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc3QgcGF0aCA9IGV2LnBhdGggfHwgKGV2LmNvbXBvc2VkUGF0aCAmJiBldi5jb21wb3NlZFBhdGgoKSk7XG5cdFx0XHRcdGlmICghcGF0aC5pbmNsdWRlcyh0aGlzLnBvcEJvZHlFbCkpIHtcblx0XHRcdFx0XHR3aW5kb3cueHlBY3RpdmVFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcblx0XHRcdFx0XHR0aGlzLnBvcEJvZHlFbC5vcGVuID0gIXRoaXMucG9wQm9keUVsLm9wZW47XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0KHRoaXMucG9wQm9keUVsIHx8IHRoaXMpLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdzdWJtaXQnKSk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLnBvcEJvZHlFbDtcblx0fVxuXG5cdHNldHBvcChldikge1xuXHRcdGNvbnN0IHBhdGggPSBldi5wYXRoIHx8IChldi5jb21wb3NlZFBhdGggJiYgZXYuY29tcG9zZWRQYXRoKCkpO1xuXHRcdGlmIChcblx0XHRcdCh0aGlzLnBvcEJvZHlFbCAmJlxuXHRcdFx0XHQhcGF0aC5pbmNsdWRlcyh0aGlzLnBvcEJvZHlFbCkgJiZcblx0XHRcdFx0IXBhdGguaW5jbHVkZXModGhpcy5jaGlsZHJlblswXSkpIHx8XG5cdFx0XHQodGhpcy50cmlnZ2VyID09PSAnY29udGV4dG1lbnUnICYmXG5cdFx0XHRcdCFwYXRoLmluY2x1ZGVzKHRoaXMucG9wQm9keUVsKSAmJlxuXHRcdFx0XHRldi53aGljaCA9PSAnMScpXG5cdFx0KSB7XG5cdFx0XHR0aGlzLnBvcEJvZHlFbC5vcGVuID0gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0YXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSkge1xuXHRcdGlmIChuYW1lID09ICd0aXRsZScgJiYgdGhpcy5wb3BCb2R5RWwpIHtcblx0XHRcdGlmIChuZXdWYWx1ZSAhPT0gbnVsbCkge1xuXHRcdFx0XHR0aGlzLnBvcEJvZHlFbC50aXRsZSA9IG5ld1ZhbHVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAobmFtZSA9PSAnb2t0ZXh0JyAmJiB0aGlzLnBvcEJvZHlFbCkge1xuXHRcdFx0aWYgKG5ld1ZhbHVlICE9PSBudWxsKSB7XG5cdFx0XHRcdHRoaXMucG9wQm9keUVsLm9rdGV4dCA9IG5ld1ZhbHVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAobmFtZSA9PSAnY2FuY2VsdGV4dCcgJiYgdGhpcy5wb3BCb2R5RWwpIHtcblx0XHRcdGlmIChuZXdWYWx1ZSAhPT0gbnVsbCkge1xuXHRcdFx0XHR0aGlzLnBvcEJvZHlFbC5jYW5jZWx0ZXh0ID0gbmV3VmFsdWU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Y29ubmVjdGVkQ2FsbGJhY2soKSB7XG5cdFx0dGhpcy5wb3BCb2R5RWwgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ2F3Yy1wb3Bib2R5Jyk7XG5cdFx0aWYgKCEodGhpcy50cmlnZ2VyICYmIHRoaXMudHJpZ2dlciAhPT0gJ2NsaWNrJykpIHtcblx0XHRcdHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnNob3cpO1xuXHRcdH1cblx0XHRpZiAodGhpcy50cmlnZ2VyID09PSAnY29udGV4dG1lbnUnKSB7XG5cdFx0XHR0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRtZW51JywgKGV2KSA9PiB7XG5cdFx0XHRcdGV2LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdGNvbnN0IHBhdGggPSBldi5wYXRoIHx8IChldi5jb21wb3NlZFBhdGggJiYgZXYuY29tcG9zZWRQYXRoKCkpO1xuXHRcdFx0XHRpZiAoIXBhdGguaW5jbHVkZXModGhpcy5wb3BCb2R5RWwpKSB7XG5cdFx0XHRcdFx0dGhpcy5zaG93KGV2KTtcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHR9XG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5zZXRwb3ApO1xuXHR9XG5cblx0ZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5wb3BCb2R5RWwpO1xuXHR9XG5cblx0X3JlbmRlcigpIHtcblx0XHRjb25zdCBzaGFkb3dSb290ID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG5cdFx0c2hhZG93Um9vdC5pbm5lckhUTUwgPSBodG1sO1xuXHR9XG59XG5cbmlmICghY3VzdG9tRWxlbWVudHMuZ2V0KCdhd2MtcG9wb3ZlcicpKSB7XG5cdGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXdjLXBvcG92ZXInLCBBd2NQb3BvdmVyKVxufVxuIiwiaW1wb3J0IGh0bWwgZnJvbSAnLi9hd2MtcmFkaW8uaHRtbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF3Y1JhZGlvIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuXHRzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcblx0XHRyZXR1cm4gWydkaXNhYmxlZCcsICdjaGVja2VkJ107XG5cdH1cblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuX3JlbmRlcigpO1xuXHR9XG5cblx0Z2V0IGRpc2FibGVkKCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnZGlzYWJsZWQnKSAhPT0gbnVsbDtcblx0fVxuXG5cdHNldCBkaXNhYmxlZCh2YWx1ZSkge1xuXHRcdGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gZmFsc2UpIHtcblx0XHRcdHRoaXMucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJyk7XG5cdFx0fVxuXHR9XG5cblx0Z2V0IGNoZWNrZWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdjaGVja2VkJykgIT09IG51bGw7XG5cdH1cblxuXHRzZXQgY2hlY2tlZCh2YWx1ZSkge1xuXHRcdGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gZmFsc2UpIHtcblx0XHRcdHRoaXMucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJycpO1xuXHRcdH1cblx0fVxuXG5cdGdldCB2YWx1ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykgfHwgdGhpcy50ZXh0Q29udGVudDtcblx0fVxuXG5cdHNldCB2YWx1ZSh2YWx1ZSkge1xuXHRcdHRoaXMuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlKTtcblx0fVxuXG5cdGdldCBuYW1lKCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnbmFtZScpO1xuXHR9XG5cblx0Zm9jdXMoKSB7XG5cdFx0dGhpcy5yYWRpb0VsLmZvY3VzKCk7XG5cdH1cblxuXHRhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG5cdFx0aWYgKG5hbWUgPT0gJ2Rpc2FibGVkJyAmJiB0aGlzLnJhZGlvRWwpIHtcblx0XHRcdGlmIChuZXdWYWx1ZSAhPT0gbnVsbCkge1xuXHRcdFx0XHR0aGlzLnJhZGlvRWwuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5yYWRpb0VsLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKG5hbWUgPT0gJ2NoZWNrZWQnICYmIHRoaXMucmFkaW9FbCkge1xuXHRcdFx0aWYgKG5ld1ZhbHVlICE9PSBudWxsKSB7XG5cdFx0XHRcdHRoaXMucmFkaW9FbC5jaGVja2VkID0gdHJ1ZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMucmFkaW9FbC5jaGVja2VkID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Y29ubmVjdGVkQ2FsbGJhY2soKSB7XG5cdFx0dGhpcy5yYWRpb0VsID0gdGhpcy5zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKCdyYWRpbycpO1xuXHRcdHRoaXMucGFyZW50RWwgPSB0aGlzLmdldFJvb3ROb2RlKCk7XG5cdFx0dGhpcy5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWQ7XG5cdFx0dGhpcy5jaGVja2VkID0gdGhpcy5jaGVja2VkO1xuXHRcdHRoaXMucmFkaW9FbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXYpID0+IHtcblx0XHRcdHRoaXMudG9jaGVjaygpO1xuXHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KFxuXHRcdFx0XHRuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZScsIHtcblx0XHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRcdGNoZWNrZWQ6IHRoaXMuY2hlY2tlZCxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0XHR9KTtcblx0fVxuXG5cdHRvY2hlY2soKSB7XG5cdFx0Y29uc3Qgc2VsZWN0b3IgPSBgYXdjLXJhZGlvW25hbWU9XCIke3RoaXMubmFtZX1cIl1bY2hlY2tlZF1gO1xuXHRcdGNvbnN0IHByZXYgPSB0aGlzLnBhcmVudEVsLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuXHRcdGlmIChwcmV2KSB7XG5cdFx0XHRwcmV2LmNoZWNrZWQgPSBmYWxzZTtcblx0XHR9XG5cdFx0dGhpcy5jaGVja2VkID0gdHJ1ZTtcblx0fVxuXG5cdF9yZW5kZXIoKSB7XG5cdFx0Y29uc3Qgc2hhZG93Um9vdCA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuXHRcdHNoYWRvd1Jvb3QuaW5uZXJIVE1MID0gaHRtbDtcblx0fVxufVxuXG5pZiAoIWN1c3RvbUVsZW1lbnRzLmdldCgnYXdjLXJhZGlvJykpIHtcblx0Y3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhd2MtcmFkaW8nLCBBd2NSYWRpbyk7XG59XG4iLCJpbXBvcnQgJy4uL2F3Yy10b29sdGlwL2F3Yy10b29sdGlwLmpzJ1xuaW1wb3J0ICcuLi9hd2MtaWNvbi9hd2MtaWNvbic7XG5pbXBvcnQgaHRtbCBmcm9tICcuL2F3Yy1yYXRlLmh0bWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBd2NSYXRlIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuXHRzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcblx0XHRyZXR1cm4gWydjb2xvcicsICdzaXplJ107XG5cdH1cblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuX3JlbmRlcigpO1xuXHR9XG5cblx0Z2V0IHZhbHVlKCkge1xuXHRcdHJldHVybiB0aGlzLnNoYWRvd1Jvb3QudmFsdWU7XG5cdH1cblxuXHRzZXQgdmFsdWUodmFsdWUpIHtcblx0XHRpZiAodmFsdWUgPT09IDApIHtcblx0XHRcdHRoaXMucmFkaW9FbHNbdGhpcy52YWx1ZSAtIDFdLmNoZWNrZWQgPSBmYWxzZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5yYWRpb0Vsc1tOdW1iZXIodmFsdWUpIC0gMV0uY2hlY2tlZCA9IHRydWU7XG5cdFx0fVxuXHRcdHRoaXMuc2hhZG93Um9vdC52YWx1ZSA9IHZhbHVlO1xuXHR9XG5cblx0Z2V0IHNpemUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdzaXplJykgfHwgJyc7XG5cdH1cblxuXHRzZXQgc2l6ZSh2YWx1ZSkge1xuXHRcdHRoaXMuc2V0QXR0cmlidXRlKCdzaXplJywgdmFsdWUpO1xuXHR9XG5cblx0Z2V0IGRpc2FibGVkKCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnZGlzYWJsZWQnKSAhPT0gbnVsbDtcblx0fVxuXG5cdHNldCBkaXNhYmxlZCh2YWx1ZSkge1xuXHRcdGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gZmFsc2UpIHtcblx0XHRcdHRoaXMucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJyk7XG5cdFx0fVxuXHR9XG5cblx0Z2V0IGNvbG9yKCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnY29sb3InKSB8fCAnJztcblx0fVxuXG5cdHNldCBjb2xvcih2YWx1ZSkge1xuXHRcdHRoaXMuc2V0QXR0cmlidXRlKCdjb2xvcicsIHZhbHVlKTtcblx0fVxuXG5cdHNldCB0aXBzKHZhbHVlKSB7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGUoJ3RpcHMnLCB2YWx1ZSk7XG5cdH1cblxuXHRnZXQgdGlwcygpIHtcblx0XHRjb25zdCB0aXBzID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ3RpcHMnKTtcblx0XHRpZiAodGlwcykge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCd0aXBzJykuc3BsaXQoJywnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIFsnJywgJycsICcnLCAnJywgJyddO1xuXHRcdH1cblx0fVxuXG5cdGdldCBkZWZhdWx0dmFsdWUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdkZWZhdWx0dmFsdWUnKSB8fCAwO1xuXHR9XG5cblx0Z2V0IGljb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdpY29uJykgfHwgJ3N0YXItZmlsbCc7XG5cdH1cblx0XG5cdGZvY3VzKCkge1xuXHRcdHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwicmFkaW9cIl0nKS5mb2N1cygpO1xuXHR9XG5cblx0YXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSkge1xuXHRcdGlmIChuYW1lID09ICdjb2xvcicgJiYgdGhpcy5zaGFkb3dSb290KSB7XG5cdFx0XHR0aGlzLnN0eWxlLnNldFByb3BlcnR5KCctLXRoZW1lQ29sb3InLCBuZXdWYWx1ZSk7XG5cdFx0fVxuXHRcdGlmIChuYW1lID09ICdzaXplJyAmJiB0aGlzLnNoYWRvd1Jvb3QpIHtcblx0XHRcdHRoaXMuc3R5bGUuZm9udFNpemUgPSBuZXdWYWx1ZSArICdweCc7XG5cdFx0fVxuXHR9XG5cblx0Y29ubmVjdGVkQ2FsbGJhY2soKSB7XG5cdFx0dGhpcy5yYWRpb0VscyA9IFtcblx0XHRcdC4uLnRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwicmFkaW9cIl0nKSxcblx0XHRdLnJldmVyc2UoKTtcblx0XHRjb25zdCB0b29sdGlwRWxzID0gWy4uLnRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yQWxsKCdhd2MtdG9vbHRpcCcpXS5yZXZlcnNlKCk7XG5cdFx0dG9vbHRpcEVscy5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcblx0XHRcdGVsLnRpcHMgPSB0aGlzLnRpcHNbaW5kZXhdO1xuXHRcdH0pO1xuXHRcdGNvbnN0IGljb25FbHMgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvckFsbCgnYXdjLWljb24nKTtcblx0XHRpY29uRWxzLmZvckVhY2goaWNvbiA9PiB7XG5cdFx0XHRpY29uLm5hbWUgPSB0aGlzLmljb247XG5cdFx0fSk7XG5cdFx0aWYgKHRoaXMuZGVmYXVsdHZhbHVlKSB7XG5cdFx0XHR0aGlzLnNoYWRvd1Jvb3QudmFsdWUgPSB0aGlzLmRlZmF1bHR2YWx1ZTtcblx0XHRcdHRoaXMucmFkaW9FbHNbTnVtYmVyKHRoaXMuZGVmYXVsdHZhbHVlKSAtIDFdLmNoZWNrZWQgPSB0cnVlO1xuXHRcdH1cblx0XHR0aGlzLnJhZGlvRWxzLmZvckVhY2goKGVsKSA9PiB7XG5cdFx0XHRlbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXYpID0+IHtcblx0XHRcdFx0dGhpcy52YWx1ZSA9IGVsLnZhbHVlO1xuXHRcdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoXG5cdFx0XHRcdFx0bmV3IEN1c3RvbUV2ZW50KCdjaGFuZ2UnLCB7XG5cdFx0XHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRcdFx0dmFsdWU6IHRoaXMudmFsdWUsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdCk7XG5cdFx0XHR9KTtcblx0XHR9KVxuXHR9XG5cblx0X3JlbmRlcigpIHtcblx0XHRjb25zdCBzaGFkb3dSb290ID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG5cdFx0c2hhZG93Um9vdC5pbm5lckhUTUwgPSBodG1sO1xuXHR9XG59XG5cbmlmICghY3VzdG9tRWxlbWVudHMuZ2V0KCdhd2MtcmF0ZScpKSB7XG5cdGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXdjLXJhdGUnLCBBd2NSYXRlKTtcbn1cbiIsImltcG9ydCAnLi4vYXdjLXRvb2x0aXAvYXdjLXRvb2x0aXAuanMnXG5pbXBvcnQgaHRtbCBmcm9tICcuL2F3Yy1zbGlkZXIuaHRtbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF3Y1NsaWRlciBleHRlbmRzIEhUTUxFbGVtZW50IHtcblx0c3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XG5cdFx0cmV0dXJuIFsnbWluJywgJ21heCcsICdzdGVwJywgJ2Rpc2FibGVkJywgJ3Nob3d0aXBzJywgJ3N1ZmZpeCddO1xuXHR9XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLl9yZW5kZXIoKTtcblx0fVxuXG5cdGdldCB2YWx1ZSgpIHtcblx0XHRyZXR1cm4gTnVtYmVyKHRoaXMuc2xpZGVyRWwudmFsdWUpO1xuXHR9XG5cblx0c2V0IHZhbHVlKHZhbHVlKSB7XG5cdFx0dGhpcy5zbGlkZXJFbC52YWx1ZSA9IHZhbHVlO1xuXHRcdHRoaXMuc2xpZGVyVG9vbHRpcEVsLnN0eWxlLnNldFByb3BlcnR5KFxuXHRcdFx0Jy0tcGVyY2VudCcsXG5cdFx0XHQodGhpcy52YWx1ZSAtIHRoaXMubWluKSAvICh0aGlzLm1heCAtIHRoaXMubWluKVxuXHRcdCk7XG5cdFx0aWYgKHRoaXMuc2hvd3RpcHMgJiYgIXRoaXMuZGlzYWJsZWQpIHtcblx0XHRcdHRoaXMuc2xpZGVyVG9vbHRpcEVsLnRpcHMgPSB0aGlzLnZhbHVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNsaWRlclRvb2x0aXBFbC50aXBzID0gJyc7XG5cdFx0fVxuXHR9XG5cblx0Z2V0IHN1ZmZpeCgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ3N1ZmZpeCcpIHx8ICcnO1xuXHR9XG5cblx0c2V0IHN1ZmZpeCh2YWx1ZSkge1xuXHRcdHRoaXMuc2V0QXR0cmlidXRlKCdzdWZmaXgnLCB2YWx1ZSk7XG5cdH1cblxuXHRnZXQgcHJlZml4KCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgncHJlZml4JykgfHwgJyc7XG5cdH1cblxuXHRzZXQgcHJlZml4KHZhbHVlKSB7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGUoJ3ByZWZpeCcsIHZhbHVlKTtcblx0fVxuXG5cdGdldCBtaW4oKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdtaW4nKSB8fCAwO1xuXHR9XG5cblx0c2V0IG1pbih2YWx1ZSkge1xuXHRcdHRoaXMuc2V0QXR0cmlidXRlKCdtaW4nLCB2YWx1ZSk7XG5cdH1cblxuXHRnZXQgbWF4KCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnbWF4JykgfHwgMTAwO1xuXHR9XG5cblx0c2V0IG1heCh2YWx1ZSkge1xuXHRcdHRoaXMuc2V0QXR0cmlidXRlKCdtYXgnLCB2YWx1ZSk7XG5cdH1cblxuXHRnZXQgZGlzYWJsZWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdkaXNhYmxlZCcpICE9PSBudWxsO1xuXHR9XG5cblx0c2V0IGRpc2FibGVkKHZhbHVlKSB7XG5cdFx0aWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSBmYWxzZSkge1xuXHRcdFx0dGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKTtcblx0XHR9XG5cdH1cblxuXHRnZXQgc2hvd3RpcHMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdzaG93dGlwcycpICE9PSBudWxsO1xuXHR9XG5cblx0c2V0IHNob3d0aXBzKHZhbHVlKSB7XG5cdFx0aWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSBmYWxzZSkge1xuXHRcdFx0dGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ3Nob3d0aXBzJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2V0QXR0cmlidXRlKCdzaG93dGlwcycsICcnKTtcblx0XHR9XG5cdH1cblxuXHRnZXQgc3RlcCgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ3N0ZXAnKSB8fCAxO1xuXHR9XG5cblx0c2V0IHN0ZXAodmFsdWUpIHtcblx0XHR0aGlzLnNldEF0dHJpYnV0ZSgnc3RlcCcsIHZhbHVlKTtcblx0fVxuXG5cdGdldCBkZWZhdWx0dmFsdWUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdkZWZhdWx0dmFsdWUnKSB8fCAwO1xuXHR9XG5cblxuXHRnZXQgdmVydGljYWwoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCd2ZXJ0aWNhbCcpICE9PSBudWxsO1xuXHR9XG5cblx0Zm9jdXMoKSB7XG5cdFx0dGhpcy5zbGlkZXJFbC5mb2N1cygpO1xuXHR9XG5cblx0YXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSkge1xuXHRcdGlmICh0aGlzLnNsaWRlckVsICYmIG9sZFZhbHVlICE9PSBuZXdWYWx1ZSAmJiAhdGhpcy5fb25pbnB1dCkge1xuXHRcdFx0aWYgKG5hbWUgPT0gJ2Rpc2FibGVkJykge1xuXHRcdFx0XHRpZiAobmV3VmFsdWUgIT09IG51bGwpIHtcblx0XHRcdFx0XHR0aGlzLnNsaWRlckVsLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLnNsaWRlckVsLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5zbGlkZXJFbFtuYW1lXSA9IG5ld1ZhbHVlO1xuXHRcdFx0XHR0aGlzW25hbWVdID0gbmV3VmFsdWU7XG5cdFx0XHRcdHRoaXMuc2xpZGVyVG9vbHRpcEVsLnN0eWxlLnNldFByb3BlcnR5KFxuXHRcdFx0XHRcdCctLXBlcmNlbnQnLFxuXHRcdFx0XHRcdCh0aGlzLnZhbHVlIC0gdGhpcy5taW4pIC8gKHRoaXMubWF4IC0gdGhpcy5taW4pXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGlmIChuYW1lID09PSAnc3VmZml4Jykge1xuXHRcdFx0XHRcdHRoaXMuc2xpZGVyVG9vbHRpcEVsLnN1ZmZpeCA9IG5ld1ZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Y29ubmVjdGVkQ2FsbGJhY2soKSB7XG5cdFx0dGhpcy5zbGlkZXJFbCA9IHRoaXMuc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZCgnc2xpZGVyJyk7XG5cdFx0dGhpcy5zbGlkZXJFbC52YWx1ZSA9IHRoaXMuZGVmYXVsdHZhbHVlO1xuXHRcdHRoaXMuc2xpZGVyRWwubWluID0gdGhpcy5taW47XG5cdFx0dGhpcy5zbGlkZXJFbC5tYXggPSB0aGlzLm1heDtcblx0XHR0aGlzLnNsaWRlckVsLnN0ZXAgPSB0aGlzLnN0ZXA7XG5cdFx0aWYgKHRoaXMuZGlzYWJsZWQpIHtcblx0XHRcdHRoaXMuc2xpZGVyRWwuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKTtcblx0XHR9XG5cdFx0dGhpcy5zbGlkZXJUb29sdGlwRWwgPSB0aGlzLnNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoJ3NsaWRlci10b29sdGlwJyk7XG5cdFx0dGhpcy5zbGlkZXJUb29sdGlwRWwuZGlyID0gdGhpcy52ZXJ0aWNhbCA/ICdyaWdodCcgOiAndG9wJztcblx0XHR0aGlzLnNsaWRlclRvb2x0aXBFbC5zdHlsZSA9IGAtLXBlcmNlbnQ6JHsodGhpcy5kZWZhdWx0dmFsdWUgLSB0aGlzLm1pbikgLyAodGhpcy5tYXggLSB0aGlzLm1pbil9YDtcblx0XHR0aGlzLnNsaWRlclRvb2x0aXBFbC50aXBzID0gdGhpcy5zaG93dGlwcyAmJiAhdGhpcy5kaXNhYmxlZCA/IHRoaXMuZGVmYXVsdHZhbHVlIDogJyc7XG5cdFx0dGhpcy5zbGlkZXJUb29sdGlwRWwuc3VmZml4ID0gdGhpcy5zdWZmaXg7XG5cdFx0dGhpcy5zbGlkZXJUb29sdGlwRWwucHJlZml4ID0gdGhpcy5wcmVmaXg7XG5cblx0XHRpZiAodGhpcy52ZXJ0aWNhbCkge1xuXHRcdFx0dGhpcy5yZXNpemVPYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoZW50cmllcykgPT4ge1xuXHRcdFx0XHRmb3IgKGxldCBlbnRyeSBvZiBlbnRyaWVzKSB7XG5cdFx0XHRcdFx0Y29uc3QgeyBoZWlnaHQgfSA9IGVudHJ5LmNvbnRlbnRSZWN0O1xuXHRcdFx0XHRcdHRoaXMuc2xpZGVyVG9vbHRpcEVsLnN0eWxlLnNldFByb3BlcnR5KCctLWgnLCBoZWlnaHQgKyAncHgnKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLnJlc2l6ZU9ic2VydmVyLm9ic2VydmUodGhpcyk7XG5cdFx0fVxuXHRcdHRoaXMuc2xpZGVyRWwuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZXYpID0+IHtcblx0XHRcdHRoaXMudmFsdWUgPSB0aGlzLnNsaWRlckVsLnZhbHVlO1xuXHRcdFx0dGhpcy5fb25pbnB1dCA9IHRydWU7XG5cdFx0XHRldi5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdHRoaXMuZGlzcGF0Y2hFdmVudChcblx0XHRcdFx0bmV3IEN1c3RvbUV2ZW50KCdpbnB1dCcsIHtcblx0XHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRcdHZhbHVlOiB0aGlzLnNsaWRlckVsLnZhbHVlLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHRcdH0pO1xuXHRcdHRoaXMuc2xpZGVyRWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2KSA9PiB7XG5cdFx0XHR0aGlzLnZhbHVlID0gdGhpcy5zbGlkZXJFbC52YWx1ZTtcblx0XHRcdHRoaXMuX29uaW5wdXQgPSBmYWxzZTtcblx0XHRcdHRoaXMuZGlzcGF0Y2hFdmVudChcblx0XHRcdFx0bmV3IEN1c3RvbUV2ZW50KCdjaGFuZ2UnLCB7XG5cdFx0XHRcdFx0ZGV0YWlsOiB7XG5cdFx0XHRcdFx0XHR2YWx1ZTogdGhpcy5zbGlkZXJFbC52YWx1ZSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0XHR9KTtcblx0XHR0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXG5cdFx0XHQnd2hlZWwnLFxuXHRcdFx0KGV2KSA9PiB7XG5cdFx0XHRcdGlmIChnZXRDb21wdXRlZFN0eWxlKHRoaXMuc2xpZGVyRWwpLnpJbmRleCA9PSAyKSB7XG5cdFx0XHRcdFx0ZXYucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0XHQoZXYuZGVsdGFZIDwgMCAmJiAhdGhpcy52ZXJ0aWNhbCkgfHxcblx0XHRcdFx0XHRcdChldi5kZWx0YVkgPiAwICYmIHRoaXMudmVydGljYWwpXG5cdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHR0aGlzLnZhbHVlIC09IHRoaXMuc3RlcCAqIDU7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMudmFsdWUgKz0gdGhpcy5zdGVwICogNTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KFxuXHRcdFx0XHRcdFx0bmV3IEN1c3RvbUV2ZW50KCdjaGFuZ2UnLCB7XG5cdFx0XHRcdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdFx0XHRcdHZhbHVlOiB0aGlzLnZhbHVlLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0dHJ1ZVxuXHRcdClcblx0fVxuXG5cdGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuXHRcdGlmICh0aGlzLnZlcnRpY2FsKSB7XG5cdFx0XHR0aGlzLnJlc2l6ZU9ic2VydmVyLnVub2JzZXJ2ZSh0aGlzKTtcblx0XHR9XG5cdH1cblxuXHRfcmVuZGVyKCkge1xuXHRcdGNvbnN0IHNoYWRvd1Jvb3QgPSB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcblx0XHRzaGFkb3dSb290LmlubmVySFRNTCA9IGh0bWw7XG5cdH1cbn1cblxuaWYgKCFjdXN0b21FbGVtZW50cy5nZXQoJ2F3Yy1zbGlkZXInKSkge1xuXHRjdXN0b21FbGVtZW50cy5kZWZpbmUoJ2F3Yy1zbGlkZXInLCBBd2NTbGlkZXIpO1xufVxuIiwiaW1wb3J0IGh0bWwgZnJvbSAnLi9hd2Mtc3dpdGNoLmh0bWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBd2NTd2l0Y2ggZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG5cdHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xuXHRcdHJldHVybiBbJ2Rpc2FibGVkJywgJ2NoZWNrZWQnXTtcblx0fVxuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5fcmVuZGVyKCk7XG5cdH1cblxuXHRnZXQgZGlzYWJsZWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdkaXNhYmxlZCcpICE9PSBudWxsO1xuXHR9XG5cblx0c2V0IGRpc2FibGVkKHZhbHVlKSB7XG5cdFx0aWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSBmYWxzZSkge1xuXHRcdFx0dGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKTtcblx0XHR9XG5cdH1cblxuXHRnZXQgY2hlY2tlZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnKSAhPT0gbnVsbDtcblx0fVxuXG5cdHNldCBjaGVja2VkKHZhbHVlKSB7XG5cdFx0aWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSBmYWxzZSkge1xuXHRcdFx0dGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnJyk7XG5cdFx0fVxuXHR9XG5cblx0Z2V0IG5hbWUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCduYW1lJyk7XG5cdH1cblxuXHRmb2N1cygpIHtcblx0XHR0aGlzLnN3aXRjaEVsLmZvY3VzKCk7XG5cdH1cblxuXHRhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG5cdFx0aWYgKG5hbWUgPT0gJ2Rpc2FibGVkJyAmJiB0aGlzLnN3aXRjaEVsKSB7XG5cdFx0XHRpZiAobmV3VmFsdWUgIT09IG51bGwpIHtcblx0XHRcdFx0dGhpcy5zd2l0Y2hFbC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnN3aXRjaEVsLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKG5hbWUgPT0gJ2NoZWNrZWQnICYmIHRoaXMuc3dpdGNoRWwpIHtcblx0XHRcdGlmIChuZXdWYWx1ZSAhPT0gbnVsbCkge1xuXHRcdFx0XHR0aGlzLnN3aXRjaEVsLmNoZWNrZWQgPSB0cnVlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5zd2l0Y2hFbC5jaGVja2VkID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Y29ubmVjdGVkQ2FsbGJhY2soKSB7XG5cdFx0dGhpcy5zd2l0Y2hFbCA9IHRoaXMuc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZCgnc3dpdGNoJyk7XG5cdFx0dGhpcy5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWQ7XG5cdFx0dGhpcy5jaGVja2VkID0gdGhpcy5jaGVja2VkO1xuXHRcdHRoaXMuc3dpdGNoRWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2KSA9PiB7XG5cdFx0XHR0aGlzLmNoZWNrZWQgPSB0aGlzLnN3aXRjaEVsLmNoZWNrZWQ7XG5cdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoXG5cdFx0XHRcdG5ldyBDdXN0b21FdmVudCgnY2hhbmdlJywge1xuXHRcdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdFx0Y2hlY2tlZDogdGhpcy5jaGVja2VkLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHRcdH0pO1xuXHRcdHRoaXMuc3dpdGNoRWwuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldikgPT4ge1xuXHRcdFx0c3dpdGNoIChldi5rZXkpIHtcblx0XHRcdFx0Y2FzZSAnRW50ZXInOlxuXHRcdFx0XHRcdHRoaXMuY2hlY2tlZCA9ICF0aGlzLmNoZWNrZWQ7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fSlcblx0XHR0aGlzLnN3aXRjaEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKGV2KSA9PiB7XG5cdFx0XHRldi5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdGlmICghdGhpcy5faXNmb2N1cykge1xuXHRcdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoXG5cdFx0XHRcdFx0bmV3IEN1c3RvbUV2ZW50KCdmb2N1cycsIHtcblx0XHRcdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdFx0XHR2YWx1ZTogdGhpcy52YWx1ZSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9KVxuXHRcdHRoaXMuc3dpdGNoRWwuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIChldikgPT4ge1xuXHRcdFx0ZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRpZiAoZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLnN3aXRjaEVsKS56SW5kZXggPT0gMikge1xuXHRcdFx0XHR0aGlzLl9pc2ZvY3VzID0gdHJ1ZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuX2lzZm9jdXMgPSBmYWxzZTtcblx0XHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KFxuXHRcdFx0XHRcdG5ldyBDdXN0b21FdmVudCgnYmx1cicsIHtcblx0XHRcdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdFx0XHR2YWx1ZTogdGhpcy52YWx1ZSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9KVxuXHR9XG5cblx0X3JlbmRlcigpIHtcblx0XHRjb25zdCBzaGFkb3dSb290ID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG5cdFx0c2hhZG93Um9vdC5pbm5lckhUTUwgPSBodG1sO1xuXHR9XG59XG5cbmlmICghY3VzdG9tRWxlbWVudHMuZ2V0KCdhd2Mtc3dpdGNoJykpIHtcblx0Y3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhd2Mtc3dpdGNoJywgQXdjU3dpdGNoKTtcbn1cbiIsImltcG9ydCBodG1sIGZyb20gJy4vYXdjLXRhYi5odG1sJztcblxuY2xhc3MgQXdjVGFiIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xuICAgICAgICByZXR1cm4gWydsYWJlbCcsICdrZXknLCAnZGlzYWJsZWQnLCAnaWNvbiddO1xuICAgIH1cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyKCk7XG4gICAgfVxuXG4gICAgZ2V0IGxhYmVsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2xhYmVsJykgfHwgJyc7XG4gICAgfVxuXG4gICAgc2V0IGxhYmVsKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdsYWJlbCcsIHZhbHVlKTtcbiAgICB9XG5cbiAgICBnZXQga2V5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2tleScpO1xuICAgIH1cblxuICAgIHNldCBrZXkodmFsdWUpIHtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2tleScsIHZhbHVlKTtcbiAgICB9XG5cbiAgICBnZXQgZGlzYWJsZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICB9XG5cbiAgICBzZXQgZGlzYWJsZWQodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgaWNvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdpY29uJyk7XG4gICAgfVxuXG4gICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSkge1xuICAgICAgICBpZiAob2xkVmFsdWUgIT09IG5ld1ZhbHVlICYmIG5ld1ZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmIChuYW1lID09PSAnbGFiZWwnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50Tm9kZS51cGRhdGFsYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudE5vZGUudXBkYXRhbGFiZWwodGhpcy5rZXksIG5ld1ZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobmFtZSA9PT0gJ2Rpc2FibGVkJykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudE5vZGUudXBkYXRhZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnROb2RlLnVwZGF0YWRpc2FibGVkKHRoaXMua2V5LCBuZXdWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgX3JlbmRlcigpIHtcbiAgICAgICAgY29uc3Qgc2hhZG93Um9vdCA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuICAgICAgICBzaGFkb3dSb290LmlubmVySFRNTCA9IGh0bWw7XG4gICAgfVxufVxuXG5pZiAoIWN1c3RvbUVsZW1lbnRzLmdldCgnYXdjLXRhYicpKSB7XG4gICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhd2MtdGFiJywgQXdjVGFiKTtcbn1cbiIsImltcG9ydCAnLi4vYXdjLWJ1dHRvbi9hd2MtYnV0dG9uJztcbmltcG9ydCAnLi9hd2MtdGFiJztcbmltcG9ydCBodG1sIGZyb20gJy4vYXdjLXRhYnMuaHRtbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF3Y1RhYnMgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG5cdHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xuXHRcdHJldHVybiBbJ2FjdGl2ZWtleSddO1xuXHR9XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLl9yZW5kZXIoKTtcblx0fVxuXG5cdGdldCBhbGlnbigpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2FsaWduJykgfHwgJ3N0YXJ0Jztcblx0fVxuXG5cdHNldCBhbGlnbih2YWx1ZSkge1xuXHRcdHRoaXMuc2V0QXR0cmlidXRlKCdhbGlnbicsIHZhbHVlKTtcblx0XHR0aGlzLl9pbml0VGFiKCk7XG5cdH1cblxuXHRnZXQgdHlwZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ3R5cGUnKSB8fCAndGV4dCc7XG5cdH1cblxuXHRzZXQgdHlwZSh2YWx1ZSkge1xuXHRcdHRoaXMuc2V0QXR0cmlidXRlKCd0eXBlJywgdmFsdWUpO1xuXHR9XG5cblx0Z2V0IGFjdGl2ZWtleSgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2FjdGl2ZWtleScpO1xuXHR9XG5cblx0c2V0IGFjdGl2ZWtleSh2YWx1ZSkge1xuXHRcdHRoaXMuc2V0QXR0cmlidXRlKCdhY3RpdmVrZXknLCB2YWx1ZSk7XG5cdH1cblxuXHRhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG5cdFx0aWYgKG5hbWUgPT0gJ2FjdGl2ZWtleScgJiYgdGhpcy50YWJFbCkge1xuXHRcdFx0bGV0IGFjdGl2ZSA9IHRoaXMudGFiUG9zW25ld1ZhbHVlXTtcblx0XHRcdGlmIChhY3RpdmUgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aGlzLmFjdGl2ZWtleSA9IHRoaXMuc2xvdHNFbC5hc3NpZ25lZEVsZW1lbnRzKClbMF0ua2V5O1xuXHRcdFx0XHRhY3RpdmUgPSB0aGlzLnRhYlBvc1t0aGlzLmFjdGl2ZWtleV07XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnRhYmxpbmVFbC5zdHlsZSA9IGB3aWR0aDoke2FjdGl2ZS53aWR0aH1weDt0cmFuc2Zvcm06dHJhbnNsYXRlWCgke2FjdGl2ZS5sZWZ0fXB4KWA7XG5cdFx0XHR0aGlzLnRhYkVsLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7LWFjdGl2ZS5pbmRleCAqIDEwMH0lKWA7XG5cdFx0XHR0aGlzLmZpbHRlckVsLnRleHRDb250ZW50ID0gYFxuICAgICAgICAgICAgOjpzbG90dGVkKGF3Yy10YWI6bm90KFtrZXk9XCIke3RoaXMuYWN0aXZla2V5fVwiXSkpe1xuICAgICAgICAgICAgICAgIGhlaWdodDowO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OnZpc2libGU7XG4gICAgICAgICAgICB9YDtcblx0XHRcdGlmIChvbGRWYWx1ZSAhPT0gbmV3VmFsdWUpIHtcblx0XHRcdFx0dGhpcy5uYXZFbC5wYXJlbnROb2RlLnNjcm9sbExlZnQgPVxuXHRcdFx0XHRcdGFjdGl2ZS5sZWZ0ICsgYWN0aXZlLndpZHRoIC8gMiAtIHRoaXMubmF2RWwucGFyZW50Tm9kZS5vZmZzZXRXaWR0aCAvIDI7XG5cdFx0XHRcdGNvbnN0IHByZSA9IHRoaXMubmF2RWwucXVlcnlTZWxlY3RvcihgLm5hdi1pdGVtLmFjdGl2ZWApO1xuXHRcdFx0XHRpZiAocHJlKSB7XG5cdFx0XHRcdFx0cHJlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IGN1ciA9IHRoaXMubmF2RWwucXVlcnlTZWxlY3RvcihgLm5hdi1pdGVtW2RhdGEta2V5PScke25ld1ZhbHVlfSddYCk7XG5cdFx0XHRcdGN1ci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblx0XHRcdFx0Y3VyLmZvY3VzKCk7XG5cdFx0XHRcdGlmICh0aGlzLl9pbml0ICYmIG9sZFZhbHVlICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KFxuXHRcdFx0XHRcdFx0bmV3IEN1c3RvbUV2ZW50KCdjaGFuZ2UnLCB7XG5cdFx0XHRcdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdFx0XHRcdGtleTogdGhpcy5hY3RpdmVrZXksXG5cdFx0XHRcdFx0XHRcdFx0aW5kZXg6IGFjdGl2ZS5pbmRleCxcblx0XHRcdFx0XHRcdFx0XHRsYWJlbDogYWN0aXZlLmxhYmVsLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Y29ubmVjdGVkQ2FsbGJhY2soKSB7XG5cdFx0dGhpcy50YWJQb3MgPSB7fTtcblx0XHR0aGlzLm5hdkVsID0gdGhpcy5zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKCduYXYnKTtcblx0XHR0aGlzLnRhYkVsID0gdGhpcy5zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKCd0YWItY29udGVudCcpO1xuXHRcdHRoaXMudGFibGluZUVsID0gdGhpcy5zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKCd0YWItbGluZScpO1xuXHRcdHRoaXMuc2xvdHNFbCA9IHRoaXMuc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZCgnc2xvdCcpO1xuXHRcdHRoaXMuZmlsdGVyRWwgPSB0aGlzLnNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoJ2ZpbHRlcicpO1xuXHRcdHRoaXMuc2xvdHNFbC5hZGRFdmVudExpc3RlbmVyKCdzbG90Y2hhbmdlJywgKCkgPT4ge1xuXHRcdFx0Y29uc3Qgc2xvdHMgPSB0aGlzLnNsb3RzRWwuYXNzaWduZWRFbGVtZW50cygpO1xuXHRcdFx0bGV0IGh0bWwgPSAnJztcblx0XHRcdHNsb3RzLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG5cdFx0XHRcdGlmIChpdGVtLnRhZ05hbWUgPT09ICdBV0MtVEFCJykge1xuXHRcdFx0XHRcdGlmIChpdGVtLmtleSA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0aXRlbS5rZXkgPSBpbmRleDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aHRtbCArPSBgPGF3Yy1idXR0b24gY2xhc3M9XCJuYXYtaXRlbSAke1xuXHRcdFx0XHRcdFx0aXRlbS5rZXkgPT09IHRoaXMuYWN0aXZla2V5ID8gJ2FjdGl2ZScgOiAnJ1xuXHRcdFx0XHRcdH1cIiBpY29uPSR7aXRlbS5pY29ufSAke1xuXHRcdFx0XHRcdFx0aXRlbS5kaXNhYmxlZCAhPT0gbnVsbCA/ICdkaXNhYmxlZCcgOiAnJ1xuXHRcdFx0XHRcdH0gZGF0YS1rZXk9JHtpdGVtLmtleX0+JHtpdGVtLmxhYmVsfTwvYXdjLWJ1dHRvbj5gXG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0dGhpcy5uYXZFbC5pbm5lckhUTUwgPSBodG1sO1xuXHRcdFx0dGhpcy5faW5pdFRhYigpO1xuXHRcdFx0aWYgKHRoaXMuYWN0aXZla2V5ID09PSBudWxsKSB7XG5cdFx0XHRcdHRoaXMuYWN0aXZla2V5ID0gc2xvdHNbMF0ua2V5O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5hY3RpdmVrZXkgPSB0aGlzLmFjdGl2ZWtleTtcblx0XHRcdH1cblx0XHRcdHRoaXMuX2luaXQgPSB0cnVlO1xuXHRcdH0pXG5cdFx0dGhpcy5uYXZFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldikgPT4ge1xuXHRcdFx0Y29uc3QgaXRlbSA9IGV2LnRhcmdldC5jbG9zZXN0KCdhd2MtYnV0dG9uJyk7XG5cdFx0XHRpZiAoaXRlbSkge1xuXHRcdFx0XHR0aGlzLmFjdGl2ZWtleSA9IGl0ZW0uZGF0YXNldC5rZXk7XG5cdFx0XHR9XG5cdFx0fSlcblx0XHR0aGlzLm5hdkVsLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXYpID0+IHtcblx0XHRcdHN3aXRjaCAoZXYua2V5KSB7XG5cdFx0XHRcdGNhc2UgJ0Fycm93TGVmdCc6XG5cdFx0XHRcdFx0ZXYucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHR0aGlzLl9tb3ZlaW4oLTEpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdBcnJvd1JpZ2h0JzogXG5cdFx0XHRcdFx0ZXYucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHR0aGlzLl9tb3ZlaW4oMSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRfaW5pdFRhYigpIHtcblx0XHRjb25zdCBpdGVtcyA9IHRoaXMubmF2RWwucXVlcnlTZWxlY3RvckFsbCgnLm5hdi1pdGVtJyk7XG5cdFx0QXJyYXkuZnJvbShpdGVtcykuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcblx0XHRcdHRoaXMudGFiUG9zW2l0ZW0uZGF0YXNldC5rZXldID0ge1xuXHRcdFx0XHRpbmRleDogaW5kZXgsXG5cdFx0XHRcdHdpZHRoOiBpdGVtLm9mZnNldFdpZHRoLFxuXHRcdFx0XHRsZWZ0OiBpdGVtLm9mZnNldExlZnQsXG5cdFx0XHRcdGxhYmVsOiBpdGVtLnRleHRDb250ZW50LFxuXHRcdFx0fTtcblx0XHR9KTtcblx0XHRpZiAodGhpcy5hY3RpdmVrZXkpIHtcblx0XHRcdHRoaXMudGFibGluZUVsLnN0eWxlID0gYHdpZHRoOiR7XG5cdFx0XHRcdHRoaXMudGFiUG9zW3RoaXMuYWN0aXZla2V5XS53aWR0aFxuXHRcdFx0fXB4O3RyYW5zZm9ybTp0cmFuc2xhdGVYKCR7dGhpcy50YWJQb3NbdGhpcy5hY3RpdmVrZXldLmxlZnR9cHgpYDtcblx0XHR9XG5cdH1cblxuXHRfbW92ZWluKGluZGV4KSB7XG5cdFx0Y29uc3QgY3VyID0gdGhpcy5uYXZFbC5xdWVyeVNlbGVjdG9yKGAubmF2LWl0ZW0uYWN0aXZlYCk7XG5cdFx0aWYgKGluZGV4ID4gMCAmJiBjdXIubmV4dEVsZW1lbnRTaWJsaW5nKSB7XG5cdFx0XHR0aGlzLmFjdGl2ZWtleSA9IGN1ci5uZXh0RWxlbWVudFNpYmxpbmcuZGF0YXNldC5rZXk7XG5cdFx0fVxuXHRcdGlmIChpbmRleCA8IDAgJiYgY3VyLnByZXZpb3VzRWxlbWVudFNpYmxpbmcpIHtcblx0XHRcdHRoaXMuYWN0aXZla2V5ID0gY3VyLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZGF0YXNldC5rZXk7XG5cdFx0fVxuXHR9XG5cblx0X3JlbmRlcigpIHtcblx0XHRjb25zdCBzaGFkb3dSb290ID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG5cdFx0c2hhZG93Um9vdC5pbm5lckhUTUwgPSBodG1sO1xuXHR9XG59XG5cbmlmICghY3VzdG9tRWxlbWVudHMuZ2V0KCdhd2MtdGFicycpKSB7XG5cdGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXdjLXRhYnMnLCBBd2NUYWJzKTtcbn1cblxuIiwiaW1wb3J0IEF3Y0lucHV0IGZyb20gJy4uL2F3Yy1pbnB1dC9hd2MtaW5wdXQnO1xuXG5jbGFzcyBBd2NUZXh0YXJlYSBleHRlbmRzIEF3Y0lucHV0IHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoeyBtdWx0aTogdHJ1ZSB9KVxuXHR9XG59XG5cbmlmICghY3VzdG9tRWxlbWVudHMuZ2V0KCdhd2MtdGV4dGFyZWEnKSkge1xuXHRjdXN0b21FbGVtZW50cy5kZWZpbmUoJ2F3Yy10ZXh0YXJlYScsIEF3Y1RleHRhcmVhKVxufVxuIiwiaW1wb3J0IGh0bWwgZnJvbSAnLi9hd2MtdG9vbHRpcC5odG1sJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXdjVG9vbHRpcCBleHRlbmRzIEhUTUxFbGVtZW50IHtcblx0c3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XG5cdFx0cmV0dXJuIFsnY29sb3InXTtcblx0fVxuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5fcmVuZGVyKCk7XG5cdH1cblxuXHRnZXQgY29sb3IoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdjb2xvcicpIHx8ICcnO1xuXHR9XG5cbiAgICBzZXQgY29sb3IodmFsdWUpIHtcblx0XHR0aGlzLnNldEF0dHJpYnV0ZSgnY29sb3InLCB2YWx1ZSk7XG5cdH1cblxuXHRnZXQgZGlyKCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnZGlyJykgfHwgJ3RvcCc7XG5cdH1cblxuICAgIHNldCBkaXIodmFsdWUpIHtcblx0XHR0aGlzLnNldEF0dHJpYnV0ZSgnZGlyJywgdmFsdWUpO1xuXHR9XG5cblx0Z2V0IHRpcHMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCd0aXBzJyk7XG5cdH1cblxuICAgIHNldCB0aXBzKHZhbHVlKSB7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGUoJ3RpcHMnLCB2YWx1ZSk7XG5cdH1cblxuXHRnZXQgdHlwZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ3RpcHMnKTtcblx0fVxuXG4gICAgc2V0IHR5cGUodmFsdWUpIHtcblx0XHR0aGlzLnNldEF0dHJpYnV0ZSgndHlwZScsIHZhbHVlKTtcblx0fVxuXG5cdGdldCBzaG93KCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnc2hvdycpICE9PSBudWxsO1xuXHR9XG5cbiAgICBzZXQgc2hvdyh2YWx1ZSkge1xuXHRcdHRoaXMuc2V0QXR0cmlidXRlKCdzaG93JywgdmFsdWUpO1xuXHR9XG5cbiAgICBnZXQgc3VmZml4KCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnc3VmZml4JykgfHwgJyc7XG5cdH1cblxuXHRzZXQgc3VmZml4KHZhbHVlKSB7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGUoJ3N1ZmZpeCcsIHZhbHVlKTtcblx0fVxuXG4gICAgZ2V0IHByZWZpeCgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ3ByZWZpeCcpIHx8ICcnO1xuXHR9XG5cblx0c2V0IHByZWZpeCh2YWx1ZSkge1xuXHRcdHRoaXMuc2V0QXR0cmlidXRlKCdwcmVmaXgnLCB2YWx1ZSk7XG5cdH1cblxuICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpIHtcblx0XHRpZiAobmFtZSA9PSAnY29sb3InICYmIHRoaXMuc2hhZG93Um9vdCkge1xuXHRcdFx0dGhpcy5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1jb2xvcicsIG5ld1ZhbHVlKTtcblx0XHR9XG5cdH1cblxuXHRjb25uZWN0ZWRDYWxsYmFjaygpIHtcblx0XHRpZiAodGhpcy5kaXIgPT09ICdhdXRvJykge1xuXHRcdFx0Y29uc3QgeyBsZWZ0LCB0b3AsIHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRjb25zdCB3ID0gZG9jdW1lbnQuYm9keS5zY3JvbGxXaWR0aDtcblx0XHRcdGNvbnN0IGggPSBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodDtcblx0XHRcdGNvbnN0IFRJUF9TSVpFID0gNTA7XG5cdFx0XHRpZiAodG9wIDwgVElQX1NJWkUpIHtcblx0XHRcdFx0dGhpcy5kaXIgPSAnYm90dG9tJztcblx0XHRcdH1cblx0XHRcdGlmIChoIC0gdG9wIC0gaGVpZ2h0IDwgVElQX1NJWkUpIHtcblx0XHRcdFx0dGhpcy5kaXIgPSAndG9wJztcblx0XHRcdH1cblx0XHRcdGlmIChsZWZ0IDwgVElQX1NJWkUpIHtcblx0XHRcdFx0dGhpcy5kaXIgPSAncmlnaHQnO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHcgLSBsZWZ0IC0gd2lkdGggPCBUSVBfU0laRSkge1xuXHRcdFx0XHR0aGlzLmRpciA9ICdsZWZ0Jztcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuICAgIF9yZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcblx0XHRzaGFkb3dSb290LmlubmVySFRNTCA9IGh0bWw7XG4gICAgfVxufVxuXG5pZiAoIWN1c3RvbUVsZW1lbnRzLmdldCgnYXdjLXRvb2x0aXAnKSkge1xuXHRjdXN0b21FbGVtZW50cy5kZWZpbmUoJ2F3Yy10b29sdGlwJywgQXdjVG9vbHRpcCk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN0eWxlPlxcbiAgICA6aG9zdCB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAgICAgIHBhZGRpbmc6IC4yNWVtIC42MjVlbTtcXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuODtcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXJDb2xvciwgcmdiYSgwLCAwLCAwLCAuMikpO1xcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICAgICAgY29sb3I6IHZhcigtLWZvbnRDb2xvciwgIzMzMzMzMyk7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXJSYWRpdXMsIC4yNWVtKTtcXG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjNzLCBib3gtc2hhZG93IC4zcywgYm9yZGVyLWNvbG9yIC4zcywgY29sb3IgLjNzO1xcbiAgICB9XFxuICAgIDpob3N0KFtkaXNhYmxlZF0pLFxcbiAgICA6aG9zdChbbG9hZGluZ10pIHtcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICAgICAgb3BhY2l0eTogLjY7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW2Jsb2NrXSkge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbZGlzYWJsZWRdOm5vdChbdHlwZV0pKSB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC4xKTtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbZGlzYWJsZWRdKSAuYnRuLFxcbiAgICA6aG9zdChbbG9hZGluZ10pIC5idG4ge1xcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoOm5vdChbdHlwZT1cXFwicHJpbWFyeVxcXCJdKTpub3QoW2Rpc2FibGVkXSk6aG92ZXIpLFxcbiAgICA6aG9zdCg6bm90KFt0eXBlPVxcXCJwcmltYXJ5XFxcIl0pOmZvY3VzLXdpdGhpbiksXFxuICAgIDpob3N0KFt0eXBlPVxcXCJmbGF0XFxcIl1bZm9jdXNdKSB7XFxuICAgICAgICBjb2xvcjogdmFyKC0tdGhlbWVDb2xvciwgIzQyYjk4Myk7XFxuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXRoZW1lQ29sb3IsICM0MmI5ODMpO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KDpub3QoW3R5cGU9XFxcInByaW1hcnlcXFwiXSkpIC5idG46OmFmdGVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHZhcigtLXRoZW1lQ29sb3IsICM0MmI5ODMpIDEwJSwgdHJhbnNwYXJlbnQgMTAuMDElKTtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbdHlwZT1cXFwicHJpbWFyeVxcXCJdKSB7XFxuICAgICAgICBjb2xvcjogI2ZmZjtcXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXRoZW1lQmFja2dyb3VuZCwgdmFyKC0tdGhlbWVDb2xvciwgIzQyYjk4MykpO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFt0eXBlPVxcXCJkYXNoZWRcXFwiXSkge1xcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBkYXNoZWRcXG4gICAgfVxcblxcbiAgICA6aG9zdChbdHlwZT1cXFwidGV4dFxcXCJdKSxcXG4gICAgOmhvc3QoW3R5cGU9XFxcInByaW1hcnlcXFwiXSkge1xcbiAgICAgICAgYm9yZGVyOiAwO1xcbiAgICAgICAgcGFkZGluZzogY2FsYyguMjVlbSArIDFweCkgY2FsYyguNjI1ZW0gKyAxcHgpO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFt0eXBlPVxcXCJ0ZXh0XFxcIl0pIC5idG46OmJlZm9yZSB7XFxuICAgICAgICBjb250ZW50OiAnJztcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXRoZW1lQ29sb3IsICM0MmI5ODMpO1xcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgcmlnaHQ6IDA7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICBib3R0b206IDA7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgdHJhbnNpdGlvbjogLjNzO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFt0eXBlPVxcXCJ0ZXh0XFxcIl06bm90KFtkaXNhYmxlZF0pOmhvdmVyKSAuYnRuOjpiZWZvcmUge1xcbiAgICAgICAgb3BhY2l0eTogLjFcXG4gICAgfVxcblxcbiAgICA6aG9zdCg6bm90KFtkaXNhYmxlZF0pOmhvdmVyKSB7XFxuICAgICAgICB6LWluZGV4OiAxXFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW3R5cGU9XFxcInRleHRcXFwiXTpmb2N1cy13aXRoaW4pIC5idG46YmVmb3JlLFxcbiAgICA6aG9zdChbdHlwZT1cXFwidGV4dFxcXCJdW2ZvY3VzXSkgLmJ0bjpiZWZvcmUge1xcbiAgICAgICAgb3BhY2l0eTogLjI7XFxuICAgIH1cXG5cXG4gICAgLmJ0biB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICAgICAgb3V0bGluZTogMDtcXG4gICAgICAgIGJvcmRlcjogMDtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgIGN1cnNvcjogdW5zZXQ7XFxuICAgIH1cXG5cXG4gICAgYXdjLWxvYWRpbmcge1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjM1ZW07XFxuICAgIH1cXG5cXG4gICAgOjotbW96LWZvY3VzLWlubmVyIHtcXG4gICAgICAgIGJvcmRlcjogMDtcXG4gICAgfVxcblxcbiAgICAuYnRuOm5vdChbZGlzYWJsZWRdKTphY3RpdmU6OmFmdGVyIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDApO1xcbiAgICAgICAgb3BhY2l0eTogLjM7XFxuICAgICAgICB0cmFuc2l0aW9uOiAwcztcXG4gICAgfVxcblxcbiAgICBhd2MtaWNvbiB7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuMzVlbTtcXG4gICAgICAgIHRyYW5zaXRpb246IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoOmVtcHR5KSBhd2MtaWNvbiB7XFxuICAgICAgICBtYXJnaW46IGF1dG87XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoOmVtcHR5KSB7XFxuICAgICAgICBwYWRkaW5nOiAuNjVlbTtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbdHlwZT1cXFwidGV4dFxcXCJdOmVtcHR5KSxcXG4gICAgOmhvc3QoW3R5cGU9XFxcInByaW1hcnlcXFwiXTplbXB0eSkge1xcbiAgICAgICAgcGFkZGluZzogY2FsYyguNjVlbSArIDFweCk7XFxuICAgIH1cXG5cXG4gICAgOjpzbG90dGVkKGF3Yy1pY29uKSB7XFxuICAgICAgICB0cmFuc2l0aW9uOiBub25lO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFtocmVmXSkge1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuPC9zdHlsZT5cXG48YnV0dG9uIGNsYXNzPVxcXCJidG5cXFwiIGlkPVxcXCJidG5cXFwiPjwvYnV0dG9uPlxcbjxzbG90Pjwvc2xvdD5cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN0eWxlPlxcbiAgICA6aG9zdCB7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgICBjb2xvcjogdmFyKC0tZm9udENvbG9yLCAjMzMzKTtcXG4gICAgICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW2Rpc2FibGVkXSkge1xcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgICAgICBvcGFjaXR5OiAuNjtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbZGlzYWJsZWRdKSBsYWJlbCB7XFxuICAgICAgICBwb2ludGVyLWV2ZW50czogYWxsO1xcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gICAgfVxcblxcbiAgICAjY2hlY2tib3gge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcXG4gICAgfVxcblxcbiAgICA6aG9zdCg6Zm9jdXMtd2l0aGluKSAuY2hla2VkLFxcbiAgICA6aG9zdCg6bm90KFtkaXNhYmxlZF0pKSBsYWJlbDpob3ZlciAuY2hla2VkIHtcXG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdGhlbWVDb2xvciwgIzQyYjk4Myk7XFxuICAgICAgICB6LWluZGV4OiAxO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KDpmb2N1cy13aXRoaW4pICNjaGVja2JveCxcXG4gICAgOmhvc3QoOmFjdGl2ZSkgI2NoZWNrYm94IHtcXG4gICAgICAgIHotaW5kZXg6IDJcXG4gICAgfVxcblxcbiAgICA6aG9zdChbZGlzYWJsZWRdKSAuY2hla2VkIHtcXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjEpO1xcbiAgICB9XFxuXFxuICAgIGxhYmVsIHtcXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAuY2hla2VkIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IC41ZW07XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICB3aWR0aDogMWVtO1xcbiAgICAgICAgaGVpZ2h0OiAxZW07XFxuICAgICAgICBib3JkZXI6IDAuMDg3NWVtIHNvbGlkIHZhcigtLWJvcmRlckNvbG9yLCByZ2JhKDAsIDAsIDAsIC4yKSk7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjE1ZW07XFxuICAgICAgICB0ZXh0LWFsaWduOiBpbml0aWFsO1xcbiAgICAgICAgdHJhbnNpdGlvbjogLjNzO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KDplbXB0eSkgLmNoZWtlZCB7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuICAgIH1cXG5cXG4gICAgLmNoZWtlZDo6YmVmb3JlIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgICAgd2lkdGg6IDc0JTtcXG4gICAgICAgIGhlaWdodDogMC4xNWVtO1xcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjE1ZW07XFxuICAgICAgICB0cmFuc2l0aW9uOiAuMnMgY3ViaWMtYmV6aWVyKC4xMiwgLjQsIC4yOSwgMS40NikgLjFzO1xcbiAgICB9XFxuXFxuICAgIC5jaGVrZWQ6OmFmdGVyIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZUNvbG9yLCAjNDJiOTgzKTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgIG9wYWNpdHk6IC4yO1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgICAgIHotaW5kZXg6IC0xO1xcbiAgICAgICAgdHJhbnNpdGlvbjogLjJzIGN1YmljLWJlemllciguMTIsIC40LCAuMjksIDEuNDYpIC4xcztcXG4gICAgfVxcbiAgICAuaWNvbiB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgICAgICB0cmFuc2l0aW9uOiAuMnMgY3ViaWMtYmV6aWVyKC4xMiwgLjQsIC4yOSwgMS40NikgLjFzO1xcbiAgICB9XFxuXFxuICAgICNjaGVja2JveDpmb2N1cy12aXNpYmxlK2xhYmVsIC5jaGVrZWQ6OmFmdGVyIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMi41KTtcXG4gICAgfVxcblxcbiAgICAjY2hlY2tib3g6Y2hlY2tlZDpub3QoOmluZGV0ZXJtaW5hdGUpK2xhYmVsIC5jaGVrZWQgLmljb24ge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcbiAgICB9XFxuXFxuICAgICNjaGVja2JveDpjaGVja2VkK2xhYmVsIC5jaGVrZWQsXFxuICAgICNjaGVja2JveDppbmRldGVybWluYXRlK2xhYmVsIC5jaGVrZWQge1xcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoZW1lQ29sb3IsICM0MmI5ODMpO1xcbiAgICB9XFxuXFxuICAgICNjaGVja2JveDppbmRldGVybWluYXRlK2xhYmVsIC5jaGVrZWQ6OmJlZm9yZSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB9XFxuPC9zdHlsZT5cXG48aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGlkPVxcXCJjaGVja2JveFxcXCI+XFxuPGxhYmVsIGZvcj1cXFwiY2hlY2tib3hcXFwiPlxcbiAgICA8c3BhbiBjbGFzcz1cXFwiY2hla2VkXFxcIj48c3ZnIGNsYXNzPVxcXCJpY29uXFxcIiBzdHlsZT1cXFwiZmlsbDogI2ZmZjtvdmVyZmxvdzogaGlkZGVuO1xcXCIgdmlld0JveD1cXFwiMCAwIDEwMjQgMTAyNFxcXCJcXG4gICAgICAgICAgICB2ZXJzaW9uPVxcXCIxLjFcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgcC1pZD1cXFwiMTQwOFxcXCI+XFxuICAgICAgICAgICAgPHBhdGhcXG4gICAgICAgICAgICAgICAgZD1cXFwiTTcwMC43MjMyIDMzMS4wMDhsNzMuOTg0IDcwLjc1ODQtMzI5LjU3NDQgMzQ0Ljc4MDgtMTkyLjY2NTYtMTkwLjEwNTYgNzEuOTM2LTcyLjkwODhMNDQzLjAzMzYgNjAwLjU3NnpcXFwiPlxcbiAgICAgICAgICAgIDwvcGF0aD5cXG4gICAgICAgIDwvc3ZnPjwvc3Bhbj5cXG4gICAgPHNsb3Q+PC9zbG90PlxcbjwvbGFiZWw+XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdHlsZT5cXG4gICAgOmhvc3Qge1xcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICByaWdodDogMDtcXG4gICAgICAgIGJvdHRvbTogMDtcXG4gICAgICAgIHotaW5kZXg6IC0xO1xcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tc2hhZG93QmFja2dyb3VuZCwgcmdiYSgwLCAwLCAwLCAuMykpO1xcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIHRyYW5zaXRpb246IC4zcztcXG4gICAgfVxcblxcbiAgICA6aG9zdChbb3Blbl0pIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB6LWluZGV4OiA1MDtcXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgIH1cXG5cXG4gICAgLmRpYWxvZyB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgbWluLXdpZHRoOiAzNjBweDtcXG4gICAgICAgIG1hcmdpbjogYXV0bztcXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAxMXB4IDE1cHggLTdweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAyNHB4IDM4cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA5cHggNDZweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwdncgLSAyMHB4KTtcXG4gICAgICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAyMHB4KTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xcbiAgICAgICAgdHJhbnNpdGlvbjogLjNzIGN1YmljLWJlemllciguNjQ1LCAuMDQ1LCAuMzU1LCAxKTtcXG4gICAgfVxcblxcbiAgICAuZGlhbG9nLWNvbnRlbnQge1xcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIHBhZGRpbmc6IDAgMjBweDtcXG4gICAgICAgIGZsZXg6IDE7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFtvcGVuXSkgLmRpYWxvZyB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgfVxcblxcbiAgICAuZGlhbG9nLXRpdGxlIHtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbiAgICAgICAgcGFkZGluZzogMTVweCAzMHB4IDAgMDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgICBjb2xvcjogIzRjNTE2MTtcXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgICB9XFxuXFxuICAgIC5kaWFsb2ctYm9keSB7XFxuICAgICAgICBmbGV4OiAxO1xcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgICAgICBtaW4taGVpZ2h0OiA1MHB4O1xcbiAgICAgICAgcGFkZGluZzogMTBweCAwO1xcbiAgICB9XFxuXFxuICAgIC5kaWFsb2ctZm9vdGVyIHtcXG4gICAgICAgIHBhZGRpbmc6IDNweCAwIDIwcHggMDtcXG4gICAgICAgIG1hcmdpbi10b3A6IC0zcHg7XFxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgfVxcblxcbiAgICAuYnRuLWNsb3NlIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHJpZ2h0OiAxMHB4O1xcbiAgICAgICAgdG9wOiAxMHB4O1xcbiAgICAgICAgYm9yZGVyOiAwO1xcbiAgICB9XFxuXFxuICAgIC5kaWFsb2ctZm9vdGVyIGF3Yy1idXR0b24ge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgIH1cXG5cXG4gICAgLmRpYWxvZy1pY29uIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICBtYXJnaW46IDE1cHggLTEwcHggMCAyMHB4O1xcbiAgICAgICAgd2lkdGg6IDMwcHg7XFxuICAgICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIH1cXG5cXG4gICAgLmRpYWxvZy1pY29uW25hbWVdIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIH1cXG5cXG4gICAgI2J0bi1jYW5jZWwge1xcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KDpub3QoW3R5cGVdKSkgLmRpYWxvZy1pY29uIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW3R5cGU9XFxcImNvbmZpcm1cXFwiXSkgI2J0bi1jYW5jZWwge1xcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgfVxcblxcbiAgICA6aG9zdCg6ZW1wdHkpIC5kaWFsb2ctYm9keSB7XFxuICAgICAgICBtaW4taGVpZ2h0OiAwO1xcbiAgICB9XFxuPC9zdHlsZT5cXG48ZGl2IGNsYXNzPVxcXCJkaWFsb2dcXFwiPlxcbiAgICA8YXdjLWljb24gaWQ9XFxcImRpYWxvZy1pY29uXFxcIiBjbGFzcz1cXFwiZGlhbG9nLWljb25cXFwiPjwvYXdjLWljb24+XFxuICAgIDxkaXYgY2xhc3M9XFxcImRpYWxvZy1jb250ZW50XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImRpYWxvZy10aXRsZVxcXCIgaWQ9XFxcInRpdGxlXFxcIj48L2Rpdj5cXG4gICAgICAgIDxhd2MtYnV0dG9uIGNsYXNzPVxcXCJidG4tY2xvc2VcXFwiIGlkPVxcXCJidG4tY2xvc2VcXFwiIGljb249XFxcImNsb3NlXFxcIj48L2F3Yy1idXR0b24+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkaWFsb2ctYm9keVxcXCI+XFxuICAgICAgICAgICAgPHNsb3Q+PC9zbG90PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkaWFsb2ctZm9vdGVyXFxcIj5cXG4gICAgICAgICAgICA8YXdjLWJ1dHRvbiBpZD1cXFwiYnRuLWNhbmNlbFxcXCI+PC9hd2MtYnV0dG9uPlxcbiAgICAgICAgICAgIDxhd2MtYnV0dG9uIGlkPVxcXCJidG4tc3VibWl0XFxcIiB0eXBlPVxcXCJwcmltYXJ5XFxcIj48L2F3Yy1idXR0b24+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuPC9kaXY+XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdHlsZT5cXG4gICAgOmhvc3Qge1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyUmFkaXVzLCAuMjVlbSk7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW2Jsb2NrXSkge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoOm5vdChbZGlzYWJsZWRdKTpub3QoW3R5cGU9XFxcInByaW1hcnlcXFwiXSk6Zm9jdXMtd2l0aGluKSAuc2VsZWN0LFxcbiAgICA6aG9zdCg6bm90KFtkaXNhYmxlZF0pOm5vdChbdHlwZT1cXFwicHJpbWFyeVxcXCJdKTpob3ZlcikgLnNlbGVjdCB7XFxuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXRoZW1lQ29sb3IsICM0MmI5ODMpO1xcbiAgICAgICAgY29sb3I6IHZhcigtLXRoZW1lQ29sb3IsICM0MmI5ODMpO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFtzZWFyY2hdOmZvY3VzLXdpdGhpbjpub3QoW2Rpc2FibGVkXSkpIC5zZWxlY3QsXFxuICAgIDpob3N0KFtzZWFyY2hdOm5vdChbZGlzYWJsZWRdKTpob3ZlcikgLnNlbGVjdCB7XFxuICAgICAgICBjb2xvcjogdmFyKC0tdGhlbWVDb2xvciwgIzQyYjk4Myk7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW2Rpc2FibGVkXSkge1xcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoOmZvY3VzLXdpdGhpbikgYXdjLXBvcG92ZXIsXFxuICAgIDpob3N0KDphY3RpdmUpIGF3Yy1wb3BvdmVyIHtcXG4gICAgICAgIHotaW5kZXg6IDI7XFxuICAgIH1cXG5cXG4gICAgYXdjLXRvb2x0aXAge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XFxuICAgIH1cXG5cXG4gICAgLnNlbGVjdDpub3QoW3R5cGU9XFxcInByaW1hcnlcXFwiXSkge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgICAgICAgY29sb3I6IGN1cnJlbnRDb2xvcjtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW3NlYXJjaF0pIC5zZWxlY3Qge1xcbiAgICAgICAgY29sb3I6IGN1cnJlbnRDb2xvcjtcXG4gICAgfVxcblxcbiAgICBhd2MtdG9vbHRpcFtzaG93PXNob3ddIHtcXG4gICAgICAgIC0tdGhlbWVDb2xvcjogdmFyKC0tZXJyb3JDb2xvciwgI2Y0NjE1Yyk7XFxuICAgICAgICAtLWJvcmRlckNvbG9yOiB2YXIoLS1lcnJvckNvbG9yLCAjZjQ2MTVjKTtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbaW52YWxpZF0pIC5zZWxlY3Q6bm90KFt0eXBlPVxcXCJwcmltYXJ5XFxcIl0pIHtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1lcnJvckNvbG9yLCAjZjQ2MTVjKTtcXG4gICAgfVxcblxcbiAgICAuc2VsZWN0IHNwYW4ge1xcbiAgICAgICAgZmxleDogMTtcXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIH1cXG5cXG4gICAgYXdjLWlucHV0OjphZnRlciB7XFxuICAgICAgICBjb250ZW50OiAnJztcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICByaWdodDogMDtcXG4gICAgICAgIGJvdHRvbTogMDtcXG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB9XFxuXFxuICAgIC5zZWxlY3RbcmVhZG9ubHldOjphZnRlciB7XFxuICAgICAgICBwb2ludGVyLWV2ZW50czogYWxsO1xcbiAgICB9XFxuXFxuICAgIC5hcnJvdyB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBmb250LXNpemU6IC45ZW07XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSguOCk7XFxuICAgICAgICBtYXJnaW4tbGVmdDogLjVlbTtcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICAgICAgd2lkdGg6IDFlbTtcXG4gICAgICAgIGhlaWdodDogMWVtO1xcbiAgICAgICAgZmlsbDogY3VycmVudENvbG9yO1xcbiAgICAgICAgdHJhbnNpdGlvbjogLjNzIHRyYW5zZm9ybSBjdWJpYy1iZXppZXIoLjY0NSwgLjA0NSwgLjM1NSwgMSk7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW3NlYXJjaF0pIC5hcnJvdyB7XFxuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAuM3MgY3ViaWMtYmV6aWVyKC42NDUsIC4wNDUsIC4zNTUsIDEpLCAuM3MgdHJhbnNmb3JtIGN1YmljLWJlemllciguNjQ1LCAuMDQ1LCAuMzU1LCAxKTtcXG4gICAgfVxcblxcbiAgICBhd2MtcG9wb3ZlcltvcGVuXSAuYXJyb3cge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoLS44KTtcXG4gICAgfVxcblxcbiAgICBhd2MtcG9wb3ZlciB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIGhlaWdodDogaW5oZXJpdDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XFxuICAgIH1cXG5cXG4gICAgYXdjLXBvcGJvZHkge1xcbiAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgICAgICBtYXgtaGVpZ2h0OiA1MHZoO1xcbiAgICAgICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW3NlYXJjaF0pIGF3Yy1wb3Bib2R5OjpiZWZvcmUge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGNvbnRlbnQ6ICfmsqHmnInljLnphY3liLDku7vkvZXpgInpobknO1xcbiAgICAgICAgcGFkZGluZzogLjI1ZW0gLjYyNWVtO1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuODtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1mb250Q29sb3IsICMzMzMpO1xcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgICAgIG9wYWNpdHk6IC41O1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFtlbXB0eV0pIGF3Yy1wb3Bib2R5OjpiZWZvcmUge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG48L3N0eWxlPlxcbjxzdHlsZSBpZD1cXFwiZmlsdGVyXFxcIj48L3N0eWxlPlxcbjxhd2MtcG9wb3ZlciBpZD1cXFwicm9vdFxcXCI+XFxuICAgIDxhd2MtaW5wdXQgaWQ9XFxcInNlbGVjdElucHV0XFxcIiBjbGFzcz1cXFwic2VsZWN0XFxcIiBkZWJvdW5jZT1cXFwiMjAwXFxcIiByZWFkb25seT5cXG4gICAgICAgIDxzdmcgY2xhc3M9XFxcImFycm93XFxcIiB2aWV3Qm94PVxcXCIwIDAgMTAyNCAxMDI0XFxcIj5cXG4gICAgICAgICAgICA8cGF0aFxcbiAgICAgICAgICAgICAgICBkPVxcXCJNODg0IDI1NmgtNzVjLTUuMSAwLTkuOSAyLjUtMTIuOSA2LjZMNTEyIDY1NC4yIDIyNy45IDI2Mi42Yy0zLTQuMS03LjgtNi42LTEyLjktNi42aC03NWMtNi41IDAtMTAuMyA3LjQtNi41IDEyLjdsMzUyLjYgNDg2LjFjMTIuOCAxNy42IDM5IDE3LjYgNTEuNyAwbDM1Mi42LTQ4Ni4xYzMuOS01LjMgMC4xLTEyLjctNi40LTEyLjd6XFxcIj5cXG4gICAgICAgICAgICA8L3BhdGg+XFxuICAgICAgICA8L3N2Zz5cXG4gICAgPC9hd2MtaW5wdXQ+XFxuICAgIDxhd2MtYnV0dG9uIGlkPVxcXCJzZWxlY3RCdXR0b25cXFwiICBjbGFzcz1cXFwic2VsZWN0XFxcIiBkZWJvdW5jZT1cXFwiMjAwXFxcIiByZWFkb25seT5cXG4gICAgICAgIDxzcGFuIGlkPVxcXCJ2YWx1ZVxcXCI+PC9zcGFuPlxcbiAgICAgICAgPHN2ZyBjbGFzcz1cXFwiYXJyb3dcXFwiIHZpZXdCb3g9XFxcIjAgMCAxMDI0IDEwMjRcXFwiPlxcbiAgICAgICAgICAgIDxwYXRoXFxuICAgICAgICAgICAgICAgIGQ9XFxcIk04ODQgMjU2aC03NWMtNS4xIDAtOS45IDIuNS0xMi45IDYuNkw1MTIgNjU0LjIgMjI3LjkgMjYyLjZjLTMtNC4xLTcuOC02LjYtMTIuOS02LjZoLTc1Yy02LjUgMC0xMC4zIDcuNC02LjUgMTIuN2wzNTIuNiA0ODYuMWMxMi44IDE3LjYgMzkgMTcuNiA1MS43IDBsMzUyLjYtNDg2LjFjMy45LTUuMyAwLjEtMTIuNy02LjQtMTIuN3pcXFwiPlxcbiAgICAgICAgICAgIDwvcGF0aD5cXG4gICAgICAgIDwvc3ZnPlxcbiAgICA8L2F3Yy1idXR0b24+XFxuICAgIDxhd2MtcG9wYm9keSBpZD1cXFwib3B0aW9uc1xcXCI+XFxuICAgICAgICA8c2xvdCBpZD1cXFwic2xvdFxcXCI+PC9zbG90PlxcbiAgICA8L2F3Yy1wb3Bib2R5PlxcbjwvYXdjLXBvcG92ZXI+XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdHlsZT5cXG4gICAgOmhvc3Qge1xcbiAgICAgICAgZGlzcGxheTogY29udGVudHM7XFxuICAgIH1cXG5cXG4gICAgbGFiZWwge1xcbiAgICAgICAgY29sb3I6IHZhcigtLWZvbnRDb2xvciwgIzMzMyk7XFxuICAgIH1cXG5cXG4gICAgbGFiZWwucmVxdWlyZWQ6bm90KDplbXB0eSk6OmJlZm9yZSB7XFxuICAgICAgICBjb250ZW50OiAnKic7XFxuICAgICAgICBjb2xvcjogdmFyKC0tZXJyb3JDb2xvciwgI2Y0NjE1Yyk7XFxuICAgIH1cXG5cXG4gICAgLml0ZW0ge1xcbiAgICAgICAganVzdGlmeS1zZWxmOiBzdHJldGNoO1xcbiAgICB9XFxuPC9zdHlsZT5cXG48bGFiZWw+PC9sYWJlbD5cXG48ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgPHNsb3Q+PC9zbG90PlxcbiAgICA8L3Nsb3Q+XFxuPC9kaXY+XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdHlsZT5cXG4gICAgOmhvc3Qge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG5cXG4gICAgZm9ybSB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXG4gICAgICAgIGdyaWQtZ2FwOiAuOGVtO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktaXRlbXM6IGVuZDtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbdHlwZT1mdWxsXSkgZm9ybSB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgICAgIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFt0eXBlPW5vbmVdKSBmb3JtIHtcXG4gICAgICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KDpub3QoW3R5cGU9ZnVsbF0pKSA6OnNsb3R0ZWQoOm5vdChhd2MtZm9ybS1pdGVtKSkge1xcbiAgICAgICAganVzdGlmeS1zZWxmOiBzdHJldGNoO1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG4gICAgfVxcbjwvc3R5bGU+XFxuPGZvcm0gaWQ9XFxcImZvcm1cXFwiPlxcbiAgICA8c2xvdD48L3Nsb3Q+XFxuPC9mb3JtPlwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3R5bGU+XFxuICAgIDpob3N0IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgIHRyYW5zaXRpb246IC4zcztcXG4gICAgfVxcblxcbiAgICAuaWNvbiB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHdpZHRoOiAxZW07XFxuICAgICAgICBoZWlnaHQ6IDFlbTtcXG4gICAgICAgIG1hcmdpbjogYXV0bztcXG4gICAgICAgIGZpbGw6IGN1cnJlbnRDb2xvcjtcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW2xvYWRpbmddKSB7XFxuICAgICAgICBhbmltYXRpb246IHJvdGF0ZSAxLjRzIGxpbmVhciBpbmZpbml0ZTtcXG4gICAgfVxcblxcbiAgICBAa2V5ZnJhbWVzIHJvdGF0ZSB7XFxuICAgICAgICB0byB7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgICAgIH1cXG4gICAgfVxcbjwvc3R5bGU+XFxuPHN2ZyBjbGFzcz1cXFwiaWNvblxcXCIgaWQ9XFxcImljb25cXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj5cXG4gICAgPHVzZSBpZD1cXFwidXNlXFxcIj48L3VzZT5cXG48L3N2Zz5cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN0eWxlPlxcbiAgICA6aG9zdCB7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgIGJhY2tncm91bmQ6ICNlZWU7XFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgICBjb2xvcjogIzY2NjtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbYWx0XTpub3QoW2RlZmF1bHRdKSk6OmJlZm9yZSB7XFxuICAgICAgICBjb250ZW50OiBhdHRyKGFsdCk7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBjb2xvcjogI2ZmZjtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICByaWdodDogMDtcXG4gICAgICAgIGJvdHRvbTogMDtcXG4gICAgICAgIHotaW5kZXg6IDE7XFxuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB0cmFuc3BhcmVudCwgcmdiYSgwLCAwLCAwLCAuNSkpO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xcbiAgICAgICAgdHJhbnNpdGlvbjogLjNzO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFthbHRdOmhvdmVyKTo6YmVmb3JlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbcmF0aW8qPVxcXCIvXFxcIl0pIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW3JhdGlvKj1cXFwiL1xcXCJdKSBpbWcge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFtyYXRpbyo9XFxcIi9cXFwiXSkgLnBsYWNlaG9sZGVyIHtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgIGltZyB7XFxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgd2lkdGg6IGluaGVyaXQ7XFxuICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XFxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgICAgICAgYm9yZGVyOiAwO1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgICAgICB0cmFuc2l0aW9uOiAuM3M7XFxuICAgIH1cXG5cXG4gICAgaW1nOjpiZWZvcmUge1xcbiAgICAgICAgY29udGVudDogJyc7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xcbiAgICAgICAgei1pbmRleDogMTtcXG4gICAgfVxcblxcbiAgICA6aG9zdCBpbWdbc3JjXSB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgfVxcblxcbiAgICA6aG9zdCg6bm90KFtlcnJvcl0pOm5vdChbZGVmYXVsdF0pOmhvdmVyKSBpbWdbc3JjXSxcXG4gICAgOmhvc3QoOmZvY3VzLXdpdGhpbikgaW1nW3NyY10ge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFtmaXQ9XFxcImNvdmVyXFxcIl0pIGltZyB7XFxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbZml0PVxcXCJmaWxsXFxcIl0pIGltZyB7XFxuICAgICAgICBvYmplY3QtZml0OiBmaWxsO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFtmaXQ9XFxcImNvbnRhaW5cXFwiXSkgaW1nIHtcXG4gICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XFxuICAgIH1cXG5cXG4gICAgLnBsYWNlaG9sZGVyIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgIHotaW5kZXg6IC0xO1xcbiAgICAgICAgdHJhbnNpdGlvbjogLjNzO1xcbiAgICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbZXJyb3JdKSAucGxhY2Vob2xkZXIge1xcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgICAgIHotaW5kZXg6IDI7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW2Vycm9yXSkgaW1nIHtcXG4gICAgICAgIHBhZGRpbmc6IDAgMjBweDtcXG4gICAgICAgIG1pbi13aWR0aDogMTAwcHg7XFxuICAgICAgICBtaW4taGVpZ2h0OiAxMDBweDtcXG4gICAgICAgIHRyYW5zZm9ybTogbm9uZTtcXG4gICAgfVxcblxcbiAgICAubG9hZGluZyB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBsZWZ0OiA1MCU7XFxuICAgICAgICB0b3A6IDUwJTtcXG4gICAgICAgIHotaW5kZXg6IDM7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHRyYW5zaXRpb246IC4zcztcXG4gICAgfVxcblxcbiAgICBpbWdbc3JjXSsubG9hZGluZyxcXG4gICAgOmhvc3QoW2Vycm9yXSkgLmxvYWRpbmcge1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgfVxcblxcbiAgICAucGxhY2Vob2xkZXIgYXdjLWljb24ge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjE1ZW07XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IC40ZW07XFxuICAgIH1cXG5cXG4gICAgLnBsYWNlaG9sZGVyLWljb24ge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICByaWdodDogMDtcXG4gICAgICAgIHRvcDogNTAlO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgICB9XFxuXFxuICAgIC52aWV3IHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHotaW5kZXg6IDM7XFxuICAgICAgICBsZWZ0OiA1MCU7XFxuICAgICAgICB0b3A6IDUwJTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDIpO1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIGNvbG9yOiAjZmZmO1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgICAgIHRyYW5zaXRpb246IC4zcztcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KDpmb2N1cy13aXRoaW4pIC52aWV3IHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcXG4gICAgfVxcblxcbiAgICAuYW5pbWF0aW9uIC5zaGFwZSB7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZUJhY2tncm91bmQsIHZhcigtLXRoZW1lQ29sb3IsICM0MmI5ODMpKTtcXG4gICAgfVxcblxcbiAgICAuYW5pbWF0aW9uIHtcXG4gICAgICAgIHdpZHRoOiAyZW07XFxuICAgICAgICBoZWlnaHQ6IDJlbTtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICAgICAgZ3JpZC1nYXA6IC43ZW07XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgICAgICBhbmltYXRpb246IHJvdGF0aW9uIDFzIGluZmluaXRlO1xcbiAgICB9XFxuXFxuICAgIC5zaGFwZTEge1xcbiAgICAgICAgYW5pbWF0aW9uOiBhbmltYXRpb240c2hhcGUxIDAuM3MgZWFzZSAwcyBpbmZpbml0ZSBhbHRlcm5hdGU7XFxuICAgIH1cXG5cXG4gICAgQGtleWZyYW1lcyByb3RhdGlvbiB7XFxuICAgICAgICBmcm9tIHtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIHRvIHtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIEBrZXlmcmFtZXMgYW5pbWF0aW9uNHNoYXBlMSB7XFxuICAgICAgICBmcm9tIHtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIHRvIHtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1cHgsIDVweCk7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLnNoYXBlMiB7XFxuICAgICAgICBvcGFjaXR5OiAuODtcXG4gICAgICAgIGFuaW1hdGlvbjogYW5pbWF0aW9uNHNoYXBlMiAwLjNzIGVhc2UgMC4zcyBpbmZpbml0ZSBhbHRlcm5hdGU7XFxuICAgIH1cXG5cXG4gICAgQGtleWZyYW1lcyBhbmltYXRpb240c2hhcGUyIHtcXG4gICAgICAgIGZyb20ge1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgdG8ge1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01cHgsIDVweCk7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLnNoYXBlMyB7XFxuICAgICAgICBvcGFjaXR5OiAuNjtcXG4gICAgICAgIGFuaW1hdGlvbjogYW5pbWF0aW9uNHNoYXBlMyAwLjNzIGVhc2UgMC4zcyBpbmZpbml0ZSBhbHRlcm5hdGU7XFxuICAgIH1cXG5cXG4gICAgQGtleWZyYW1lcyBhbmltYXRpb240c2hhcGUzIHtcXG4gICAgICAgIGZyb20ge1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgdG8ge1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDVweCwgLTVweCk7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLnNoYXBlNCB7XFxuICAgICAgICBvcGFjaXR5OiAuNDtcXG4gICAgICAgIGFuaW1hdGlvbjogYW5pbWF0aW9uNHNoYXBlNCAwLjNzIGVhc2UgMHMgaW5maW5pdGUgYWx0ZXJuYXRlO1xcbiAgICB9XFxuXFxuICAgIEBrZXlmcmFtZXMgYW5pbWF0aW9uNHNoYXBlNCB7XFxuICAgICAgICBmcm9tIHtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIHRvIHtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNXB4LCAtNXB4KTtcXG4gICAgICAgIH1cXG4gICAgfVxcbjwvc3R5bGU+XFxuPGRpdiBjbGFzcz1cXFwicGxhY2Vob2xkZXJcXFwiIGlkPVxcXCJwbGFjZWhvbGRlclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcInBsYWNlaG9sZGVyLWljb25cXFwiPlxcbiAgICAgICAgPGF3Yy1pY29uXFxuICAgICAgICAgICAgcGF0aD1cXFwiTTkyOCAxNjBIOTZjLTE3LjcgMC0zMiAxNC4zLTMyIDMydjY0MGMwIDE3LjcgMTQuMyAzMiAzMiAzMmg4MzJjMTcuNyAwIDMyLTE0LjMgMzItMzJWMTkyYzAtMTcuNy0xNC4zLTMyLTMyLTMyeiBtLTQwIDYzMkgxMzZ2LTM5LjlsMTM4LjUtMTY0LjMgMTUwLjEgMTc4TDY1OC4xIDQ4OSA4ODggNzYxLjZWNzkyeiBtMC0xMjkuOEw2NjQuMiAzOTYuOGMtMy4yLTMuOC05LTMuOC0xMi4yIDBMNDI0LjYgNjY2LjRsLTE0NC0xNzAuN2MtMy4yLTMuOC05LTMuOC0xMi4yIDBMMTM2IDY1Mi43VjIzMmg3NTJ2NDMwLjJ6XFxcIj5cXG4gICAgICAgIDwvYXdjLWljb24+JFxcbiAgICAgICAgPGRpdiBpZD1cXFwiYWx0XFxcIj48L2Rpdj5cXG4gICAgPC9kaXY+XFxuPC9kaXY+XFxuPGF3Yy1pY29uIGNsYXNzPVxcXCJ2aWV3XFxcIiBuYW1lPSdWaWV3Jz48L2F3Yy1pY29uPlxcbjxpbWc+XFxuPGRpdiBjbGFzcz1cXFwibG9hZGluZ1xcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImFuaW1hdGlvblxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzaGFwZSBzaGFwZTFcXFwiPjwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwic2hhcGUgc2hhcGUyXFxcIj48L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInNoYXBlIHNoYXBlM1xcXCI+PC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzaGFwZSBzaGFwZTRcXFwiPjwvZGl2PlxcbiAgICA8L2Rpdj5cXG48L2Rpdj5cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN0eWxlPlxcbiAgICA6aG9zdCB7XFxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyQ29sb3IsIHJnYmEoMCwgMCwgMCwgLjIpKTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlclJhZGl1cywgLjI1ZW0pO1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuODtcXG4gICAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuM3MsIGJveC1zaGFkb3cgLjNzO1xcbiAgICAgICAgcGFkZGluZzogLjI1ZW0gLjYyNWVtO1xcbiAgICAgICAgY29sb3I6IHZhcigtLWZvbnRDb2xvciwgIzMzMyk7XFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW2Jsb2NrXSkge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2tcXG4gICAgfVxcblxcbiAgICBhd2MtdG9vbHRpcFtzaG93PXNob3ddIHtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1lcnJvckNvbG9yLCAjZjQ2MTVjKTtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbaW52YWxpZF0pIHtcXG4gICAgICAgIC0tdGhlbWVDb2xvcjogdmFyKC0tZXJyb3JDb2xvciwgI2Y0NjE1Yyk7XFxuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWVycm9yQ29sb3IsICNmNDYxNWMpO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFtpbnZhbGlkXSkgYXdjLWljb24ge1xcbiAgICAgICAgY29sb3I6IHZhcigtLWVycm9yQ29sb3IsICNmNDYxNWMpO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KDpmb2N1cy13aXRoaW46bm90KFtkaXNhYmxlZF0pKSxcXG4gICAgOmhvc3QoOm5vdChbZGlzYWJsZWRdKTpob3Zlcikge1xcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10aGVtZUNvbG9yLCAjNDJiOTgzKTtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbZGlzYWJsZWRdKSB7XFxuICAgICAgICBvcGFjaXR5OiAuODtcXG4gICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW2Rpc2FibGVkXSkgYXdjLXRvb2x0aXAge1xcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC4xKTtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbbGFiZWxdKSAuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgfVxcblxcbiAgICA6aG9zdCAuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gICAgICAgIGNvbG9yOiAjOTk5O1xcbiAgICB9XFxuXFxuICAgIDpob3N0KGF3Yy10ZXh0YXJlYSkge1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IC4yNWVtO1xcbiAgICB9XFxuXFxuICAgIGF3Yy10b29sdGlwIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBtYXJnaW46IC0uMjVlbSAtLjYyNWVtO1xcbiAgICAgICAgcGFkZGluZzogLjI1ZW0gLjYyNWVtO1xcbiAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgICAgICB0cmFuc2l0aW9uOiAuM3MgYmFja2dyb3VuZC1jb2xvcjtcXG4gICAgfVxcblxcbiAgICA6aG9zdChhd2MtdGV4dGFyZWEpIGF3Yy10b29sdGlwIHtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogLS4yNWVtO1xcbiAgICAgICAgcGFkZGluZy1yaWdodDogLjI1ZW07XFxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgfVxcblxcbiAgICAuaW5wdXQge1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgIHRleHQtYWxpZ246IGluaGVyaXQ7XFxuICAgICAgICBjb2xvcjogY3VycmVudENvbG9yO1xcbiAgICAgICAgYm9yZGVyOiAwO1xcbiAgICAgICAgb3V0bGluZTogMDtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbiAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgICAgICBmbGV4OiAxO1xcbiAgICAgICAgbWluLXdpZHRoOiAwO1xcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAgICAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XFxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgLjNzO1xcbiAgICAgICAgYW5pbWF0aW9uOiByZW1vdmVCZyAwcyBmb3J3YXJkcztcXG4gICAgfVxcblxcbiAgICA6aG9zdChhd2MtdGV4dGFyZWEpIC5pbnB1dCB7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgIH1cXG5cXG4gICAgaW5wdXRbdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICA6Oi1tb3otZm9jdXMtaW5uZXIsXFxuICAgIDo6LW1vei1mb2N1cy1vdXRlciB7XFxuICAgICAgICBib3JkZXI6IDA7XFxuICAgICAgICBvdXRsaW5lOiAwO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFtzaG93dGlwc10pIHtcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxuICAgIH1cXG5cXG4gICAgLmlucHV0LWxhYmVsIHtcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0wLjE0ZW07XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzLCBjb2xvciAuM3MsIGJhY2tncm91bmQtY29sb3IgLjNzO1xcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcXG4gICAgICAgIHBhZGRpbmc6IDAgMC4xNGVtO1xcbiAgICAgICAgY29sb3I6ICM5OTk7XFxuICAgIH1cXG5cXG4gICAgLmlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pfi5pbnB1dC1sYWJlbCxcXG4gICAgLmlucHV0OmZvY3Vzfi5pbnB1dC1sYWJlbCB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoY2FsYygtNTAlIC0gMC40M2VtKSkgc2NhbGUoMC44KTtcXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgIH1cXG5cXG4gICAgLmlucHV0Oi1tb3otdWktaW52YWxpZCB7XFxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICB9XFxuXFxuICAgIC5pbnB1dDo6LW1zLXJldmVhbCB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgIC5pY29uLXByZSB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjI1ZW07XFxuICAgICAgICBjb2xvcjogIzk5OTtcXG4gICAgfVxcblxcbiAgICA6aG9zdChhd2MtdGV4dGFyZWEpIC5pY29uLXByZSB7XFxuICAgICAgICBoZWlnaHQ6IDEuNWVtO1xcbiAgICB9XFxuXFxuICAgIC5idG4tcmlnaHQge1xcbiAgICAgICAgd2lkdGg6IDJlbTtcXG4gICAgICAgIGhlaWdodDogMmVtO1xcbiAgICAgICAgbWFyZ2luOiAtLjI1ZW0gLS41ZW0gLS4yNWVtIC4yNWVtO1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgIGNvbG9yOiAjOTk5O1xcbiAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgICB9XFxuXFxuICAgIC5idG4tbnVtYmVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgd2lkdGg6IDEuNWVtO1xcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICAgICAgdHJhbnNpdGlvbjogMHM7XFxuICAgIH1cXG5cXG4gICAgLmJ0bi1udW1iZXIgYXdjLWJ1dHRvbiB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgY29sb3I6ICM5OTk7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBmbGV4OiAxO1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgIGZvbnQtc2l6ZTogLjhlbTtcXG4gICAgICAgIHRyYW5zaXRpb246IC4ycztcXG4gICAgfVxcblxcbiAgICAuYnRuLW51bWJlciBhd2MtYnV0dG9uOmhvdmVyIHtcXG4gICAgICAgIGZsZXg6IDEuNTtcXG4gICAgfVxcblxcbiAgICBhd2MtYnV0dG9uOm5vdChbZGlzYWJsZWRdKTpob3ZlcixcXG4gICAgYXdjLWJ1dHRvbjpub3QoW2Rpc2FibGVkXSk6Zm9jdXMtd2l0aGluIHtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS10aGVtZUNvbG9yLCAjNDJiOTgzKTtcXG4gICAgfVxcblxcbiAgICA6aG9zdCg6Zm9jdXMtd2l0aGluOm5vdChbZGlzYWJsZWRdKSkgLmljb24tcHJlLFxcbiAgICA6aG9zdCg6bm90KFtkaXNhYmxlZF0pOmhvdmVyKSAuaWNvbi1wcmUsXFxuICAgIDpob3N0KDpub3QoW2Rpc2FibGVkXSk6aG92ZXIpIC5pbnB1dC1sYWJlbCxcXG4gICAgOmhvc3QoOmZvY3VzLXdpdGhpbjpub3QoW2Rpc2FibGVkXSkpIC5pbnB1dC1sYWJlbCB7XFxuICAgICAgICBjb2xvcjogdmFyKC0tdGhlbWVDb2xvciwgIzQyYjk4Myk7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoOmZvY3VzLXdpdGhpbjpub3QoW2Rpc2FibGVkXSkpIC5idG4tbnVtYmVyLFxcbiAgICA6aG9zdCg6bm90KFtkaXNhYmxlZF0pOmhvdmVyKSAuYnRuLW51bWJlciB7XFxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICB9XFxuXFxuICAgIEBrZXlmcmFtZXMgcmVtb3ZlQmcge1xcbiAgICAgICAgdG8ge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgfVxcbiAgICB9XFxuPC9zdHlsZT5cXG48YXdjLXRvb2x0aXAgaWQ9XFxcImlucHV0LXRvb2x0aXBcXFwiIHR5cGU9XFxcImVycm9yXFxcIj5cXG4gICAgPCEtLSBpZiBtdWx0aSBpcyB0cnVlLCByZW1vdmUgaW5wdXQsIGVsc2UgcmVtb3ZlIHRleHRhcmVhIC0tPlxcbiAgICA8dGV4dGFyZWEgaWQ9XFxcInRleHRhcmVhXFxcIiBjbGFzcz1cXFwiaW5wdXRcXFwiIHR5cGU9XFxcInRleHRcXFwiPjwvdGV4dGFyZWE+XFxuICAgIDxpbnB1dCBpZD1cXFwiaW5wdXRcXFwiIGNsYXNzPVxcXCJpbnB1dFxcXCIgLz5cXG4gICAgPHNsb3Q+PC9zbG90PlxcbiAgICA8bGFiZWwgY2xhc3M9XFxcImlucHV0LWxhYmVsXFxcIiBpZD1cXFwiaW5wdXQtbGFiZWxcXFwiPjwvbGFiZWw+XFxuICAgICA8IS0tIGlmIHR5cGUgaXMgbm90IG51bWJlciwgcmVtb3ZlIGRpdi4gLS0+XFxuICAgIDxkaXYgY2xhc3M9XFxcImJ0bi1yaWdodCBidG4tbnVtYmVyXFxcIiBpZD1cXFwiYnRuLW51bWJlclxcXCI+PC9kaXY+XFxuPC9hd2MtdG9vbHRpcD5cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN0eWxlPlxcbiAgICA6aG9zdCB7XFxuICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS10aGVtZUNvbG9yLCAjNDJiOTgzKTtcXG4gICAgfVxcblxcbiAgICAubG9hZGluZyB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHdpZHRoOiAxZW07XFxuICAgICAgICBoZWlnaHQ6IDFlbTtcXG4gICAgICAgIG1hcmdpbjogYXV0bztcXG4gICAgICAgIGFuaW1hdGlvbjogcm90YXRlIDEuNHMgbGluZWFyIGluZmluaXRlO1xcbiAgICB9XFxuXFxuICAgIC5jaXJjbGUge1xcbiAgICAgICAgc3Ryb2tlOiBjdXJyZW50Q29sb3I7XFxuICAgICAgICBhbmltYXRpb246IHByb2dyZXNzIDEuNHMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XFxuICAgICAgICBzdHJva2UtZGFzaGFycmF5OiA4MHB4LCAyMDBweDtcXG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwcHg7XFxuICAgICAgICB0cmFuc2l0aW9uOiAuM3M7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoOm5vdCg6ZW1wdHkpKSAubG9hZGluZyB7XFxuICAgICAgICBtYXJnaW46IC41ZW07XFxuICAgIH1cXG5cXG4gICAgQGtleWZyYW1lcyByb3RhdGUge1xcbiAgICAgICAgdG8ge1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgQGtleWZyYW1lcyBwcm9ncmVzcyB7XFxuICAgICAgICAwJSB7XFxuICAgICAgICAgICAgc3Ryb2tlLWRhc2hhcnJheTogMXB4LCAyMDBweDtcXG4gICAgICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMHB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgNTAlIHtcXG4gICAgICAgICAgICBzdHJva2UtZGFzaGFycmF5OiAxMDBweCwgMjAwcHg7XFxuICAgICAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0xNXB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgMTAwJSB7XFxuICAgICAgICAgICAgc3Ryb2tlLWRhc2hhcnJheTogMTAwcHgsIDIwMHB4O1xcbiAgICAgICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMTI1cHg7XFxuICAgICAgICB9XFxuICAgIH1cXG48L3N0eWxlPlxcbjxzdmcgY2xhc3M9XFxcImxvYWRpbmdcXFwiIGlkPVxcXCJsb2FkaW5nXFxcIiB2aWV3Qm94PVxcXCIyMiAyMiA0NCA0NFxcXCI+XFxuICAgIDxjaXJjbGUgY2xhc3M9XFxcImNpcmNsZVxcXCIgY3g9XFxcIjQ0XFxcIiBjeT1cXFwiNDRcXFwiIHI9XFxcIjIwLjJcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHN0cm9rZS13aWR0aD1cXFwiMy42XFxcIj48L2NpcmNsZT5cXG48L3N2Zz5cXG48c2xvdD48L3Nsb3Q+XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdHlsZT5cXG4gICAgOmhvc3Qge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICB0cmFuc2l0aW9uOiAuM3M7XFxuICAgICAgICB6LWluZGV4OiAxMDtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbc2hvd10pIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICB9XFxuXFxuICAgIC5tZXNzYWdlIHtcXG4gICAgICAgIG1hcmdpbjogYXV0bztcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgICAgIGNvbG9yOiAjNjY2O1xcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XFxuICAgICAgICB0cmFuc2l0aW9uOiAuM3MgdHJhbnNmb3JtIGN1YmljLWJlemllciguNjQ1LCAuMDQ1LCAuMzU1LCAxKTtcXG4gICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW3Nob3ddKSAubWVzc2FnZSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgIH1cXG5cXG4gICAgLm1lc3NhZ2U+KiB7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gICAgfVxcblxcbiAgICBhd2MtbG9hZGluZyB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFtzaG93XVt0eXBlPVxcXCJsb2FkaW5nXFxcIl0pIGF3Yy1sb2FkaW5nIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFtzaG93XVt0eXBlPVxcXCJsb2FkaW5nXFxcIl0pIGF3Yy1pY29uIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QgYXdjLWljb24ge1xcbiAgICAgICAgY29sb3I6IHZhcigtLXRoZW1lQ29sb3IsICM0MmI5ODMpO1xcbiAgICB9XFxuPC9zdHlsZT5cXG48ZGl2IGNsYXNzPVxcXCJtZXNzYWdlXFxcIj5cXG4gICAgPGF3Yy1pY29uIGlkPVxcXCJtZXNzYWdlLWljb25cXFwiIGNsYXNzPVxcXCJtZXNzYWdlLWljb25cXFwiIHNpemU9XFxcIjE2XFxcIj48L2F3Yy1pY29uPlxcbiAgICA8YXdjLWxvYWRpbmc+PC9hd2MtbG9hZGluZz5cXG4gICAgPHNsb3Q+PC9zbG90PlxcbjwvZGl2PlwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3R5bGU+XFxuICAgIDpob3N0IHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFtoaWRkZW5dKSB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgIC5vcHRpb24ge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZGRpbmdMZWZ0LCAuNjI1ZW0pO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFtzZWxlY3RlZF0pIC5vcHRpb24ge1xcbiAgICAgICAgY29sb3I6IHZhcigtLXRoZW1lQ29sb3IsICM0MmI5ODMpXFxuICAgIH1cXG48L3N0eWxlPlxcbjxhd2MtYnV0dG9uIGlkPVxcXCJvcHRpb25cXFwiIGNsYXNzPVxcXCJvcHRpb25cXFwiIHR5cGU9XFxcInRleHRcXFwiPlxcbiAgICA8c2xvdD48L3Nsb3Q+XFxuPC9hd2MtYnV0dG9uPlwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3R5bGU+XFxuICAgIDpob3N0IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIH1cXG5cXG4gICAgYXdjLWJ1dHRvbiB7XFxuICAgICAgICBtYXJnaW46IDAgLjNlbTtcXG4gICAgICAgIHdpZHRoOiAyLjNlbTtcXG4gICAgICAgIGhlaWdodDogMi4zZW07XFxuICAgICAgICBwYWRkaW5nOiAxcHg7XFxuICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XFxuICAgICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gICAgfVxcblxcbiAgICAuc2ltcGxlLXBhZ2Uge1xcbiAgICAgICAgd2lkdGg6IGF1dG87XFxuICAgICAgICBwYWRkaW5nOiAwIC42MjVlbTtcXG4gICAgfVxcblxcbiAgICBhd2MtYnV0dG9uW3RhYmluZGV4XSB7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgfVxcblxcbiAgICAucGFnZS1lbGxpcHNpcyBhd2MtaWNvbiB7XFxuICAgICAgICBtYXJnaW46IGF1dG87XFxuICAgIH1cXG5cXG4gICAgYXdjLWJ1dHRvbltjdXJyZW50XSB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZUJhY2tncm91bmQsIHZhcigtLXRoZW1lQ29sb3IsICM0MmI5ODMpKTtcXG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdGhlbWVDb2xvciwgIzQyYjk4Myk7XFxuICAgICAgICBjb2xvcjogI2ZmZjtcXG4gICAgfVxcblxcbiAgICAucGFnZSB7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAgfVxcblxcbiAgICAuaWNvbiB7XFxuICAgICAgICB3aWR0aDogMWVtO1xcbiAgICAgICAgaGVpZ2h0OiAxZW07XFxuICAgICAgICBmaWxsOiBjdXJyZW50Q29sb3I7XFxuICAgIH1cXG48L3N0eWxlPlxcbjxhd2MtYnV0dG9uIHR5cGU9XFxcInRleHRcXFwiIGlkPVxcXCJsZWZ0XFxcIj5cXG4gICAgPHN2ZyBjbGFzcz1cXFwiaWNvblxcXCIgdmlld0JveD1cXFwiMCAwIDEwMjQgMTAyNFxcXCI+XFxuICAgICAgICA8cGF0aFxcbiAgICAgICAgICAgIGQ9XFxcIk03MjQgMjE4LjNWMTQxYzAtNi43LTcuNy0xMC40LTEyLjktNi4zTDI2MC4zIDQ4Ni44Yy0xNi40IDEyLjgtMTYuNCAzNy41IDAgNTAuM2w0NTAuOCAzNTIuMWM1LjMgNC4xIDEyLjkgMC40IDEyLjktNi4zdi03Ny4zYzAtNC45LTIuMy05LjYtNi4xLTEyLjZsLTM2MC0yODEgMzYwLTI4MS4xYzMuOC0zIDYuMS03LjcgNi4xLTEyLjZ6XFxcIj5cXG4gICAgICAgIDwvcGF0aD5cXG4gICAgPC9zdmc+XFxuPC9hd2MtYnV0dG9uPlxcbjxkaXYgY2xhc3M9XFxcInBhZ2VcXFwiIGlkPVxcXCJwYWdlXFxcIj48L2Rpdj5cXG48YXdjLWJ1dHRvbiB0eXBlPVxcXCJ0ZXh0XFxcIiBpZD1cXFwicmlnaHRcXFwiPlxcbiAgICA8c3ZnIGNsYXNzPVxcXCJpY29uXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTAyNCAxMDI0XFxcIj5cXG4gICAgICAgIDxwYXRoXFxuICAgICAgICAgICAgZD1cXFwiTTc2NS43IDQ4Ni44TDMxNC45IDEzNC43Yy01LjMtNC4xLTEyLjktMC40LTEyLjkgNi4zdjc3LjNjMCA0LjkgMi4zIDkuNiA2LjEgMTIuNmwzNjAgMjgxLjEtMzYwIDI4MS4xYy0zLjkgMy02LjEgNy43LTYuMSAxMi42Vjg4M2MwIDYuNyA3LjcgMTAuNCAxMi45IDYuM2w0NTAuOC0zNTIuMWMxNi40LTEyLjggMTYuNC0zNy42IDAtNTAuNHpcXFwiPlxcbiAgICAgICAgPC9wYXRoPlxcbiAgICA8L3N2Zz5cXG48L2F3Yy1idXR0b24+XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdHlsZT5cXG4gICAgOmhvc3Qge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggMTVweCB2YXIoLS1ib3hTaGFkb3csIHJnYmEoMCwgMCwgMCwgMC4xNSkpO1xcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgICAgICBvcGFjaXR5OiAwLjU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgICAgICB6LWluZGV4OiAxMDtcXG4gICAgICAgIHRyYW5zaXRpb246IC4zcyBjdWJpYy1iZXppZXIoLjY0NSwgLjA0NSwgLjM1NSwgMSk7XFxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBpbmhlcml0O1xcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgfVxcblxcbiAgICAucG9wYm9keS1jb250ZW50IHtcXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICAgICAgcGFkZGluZzogMCAxNXB4O1xcbiAgICAgICAgZmxleDogMTtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG5cXG4gICAgLnBvcGJvZHktdGl0bGUge1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XFxuICAgICAgICBwYWRkaW5nOiAxNXB4IDMwcHggMCAwO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgICAgIGNvbG9yOiAjNGM1MTYxO1xcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XFxuICAgIH1cXG5cXG4gICAgLnBvcGJvZHktYm9keSB7XFxuICAgICAgICBmbGV4OiAxO1xcbiAgICAgICAgcGFkZGluZzogNXB4IDAgMTVweCAwO1xcbiAgICB9XFxuXFxuICAgIC5wb3Bib2R5LWZvb3RlciB7XFxuICAgICAgICBwYWRkaW5nOiAzcHggMCAxNXB4IDA7XFxuICAgICAgICBtYXJnaW4tdG9wOiAtM3B4O1xcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICB9XFxuXFxuICAgIC5idG4tY2xvc2Uge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgcmlnaHQ6IDEwcHg7XFxuICAgICAgICB0b3A6IDEwcHg7XFxuICAgICAgICBib3JkZXI6IDA7XFxuICAgIH1cXG5cXG4gICAgLnBvcGJvZHktZm9vdGVyIGF3Yy1idXR0b24ge1xcbiAgICAgICAgZm9udC1zaXplOiAuOGVtO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC44ZW07XFxuICAgIH1cXG5cXG4gICAgLnBvcGJvZHktdHlwZSB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgd2lkdGg6IDMwcHg7XFxuICAgICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgICAgICBmb250LXNpemU6IDIycHg7XFxuICAgICAgICBtYXJnaW46IDE1cHggLTEwcHggMCAxNXB4O1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFt0eXBlPVxcXCJjb25maXJtXFxcIl0pIHtcXG4gICAgICAgIG1pbi13aWR0aDogMjUwcHg7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW3R5cGU9XFxcImNvbmZpcm1cXFwiXSkgLnBvcGJvZHktYm9keSB7XFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoOm5vdChbdHlwZV0pKSAucG9wYm9keS1jb250ZW50LFxcbiAgICA6aG9zdCg6bm90KFt0eXBlXSkpIC5wb3Bib2R5LWJvZHkge1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgfVxcbjwvc3R5bGU+XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdHlsZT5cXG4gICAgOmhvc3Qge1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW2Rpcj1cXFwidG9wXFxcIl0pIDo6c2xvdHRlZChhd2MtcG9wYm9keSkge1xcbiAgICAgICAgYm90dG9tOiAxMDAlO1xcbiAgICAgICAgbGVmdDogNTAlO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTEwcHgpIHNjYWxlKDApO1xcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGJvdHRvbTtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbZGlyPVxcXCJ0b3BcXFwiXSkgOjpzbG90dGVkKGF3Yy1wb3Bib2R5W29wZW5dKSxcXG4gICAgOmhvc3QoW2Rpcj1cXFwidG9wXFxcIl1bdHJpZ2dlcj1cXFwiaG92ZXJcXFwiXTpub3QoW2Rpc2FibGVkXSk6aG92ZXIpIDo6c2xvdHRlZChhd2MtcG9wYm9keSksXFxuICAgIDpob3N0KFtkaXI9XFxcInRvcFxcXCJdW3RyaWdnZXI9XFxcImZvY3VzXFxcIl06bm90KFtkaXNhYmxlZF0pOmZvY3VzLXdpdGhpbikgOjpzbG90dGVkKGF3Yy1wb3Bib2R5KSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMTBweCkgc2NhbGUoMSk7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW2Rpcj1cXFwicmlnaHRcXFwiXSkgOjpzbG90dGVkKGF3Yy1wb3Bib2R5KSB7XFxuICAgICAgICBsZWZ0OiAxMDAlO1xcbiAgICAgICAgdG9wOiA1MCU7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMHB4LCAtNTAlKSBzY2FsZSgwKTtcXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW2Rpcj1cXFwicmlnaHRcXFwiXSkgOjpzbG90dGVkKGF3Yy1wb3Bib2R5W29wZW5dKSxcXG4gICAgOmhvc3QoW2Rpcj1cXFwicmlnaHRcXFwiXVt0cmlnZ2VyPVxcXCJob3ZlclxcXCJdOm5vdChbZGlzYWJsZWRdKTpob3ZlcikgOjpzbG90dGVkKGF3Yy1wb3Bib2R5KSxcXG4gICAgOmhvc3QoW2Rpcj1cXFwicmlnaHRcXFwiXVt0cmlnZ2VyPVxcXCJmb2N1c1xcXCJdOm5vdChbZGlzYWJsZWRdKTpmb2N1cy13aXRoaW4pIDo6c2xvdHRlZChhd2MtcG9wYm9keSkge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTBweCwgLTUwJSkgc2NhbGUoMSk7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW2Rpcj1cXFwiYm90dG9tXFxcIl0pIDo6c2xvdHRlZChhd2MtcG9wYm9keSkge1xcbiAgICAgICAgdG9wOiAxMDAlO1xcbiAgICAgICAgbGVmdDogNTAlO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMTBweCkgc2NhbGUoMCk7XFxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgdG9wO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFtkaXI9XFxcImJvdHRvbVxcXCJdKSA6OnNsb3R0ZWQoYXdjLXBvcGJvZHlbb3Blbl0pLFxcbiAgICA6aG9zdChbZGlyPVxcXCJib3R0b21cXFwiXVt0cmlnZ2VyPVxcXCJob3ZlclxcXCJdOm5vdChbZGlzYWJsZWRdKTpob3ZlcikgOjpzbG90dGVkKGF3Yy1wb3Bib2R5KSxcXG4gICAgOmhvc3QoW2Rpcj1cXFwiYm90dG9tXFxcIl1bdHJpZ2dlcj1cXFwiZm9jdXNcXFwiXTpub3QoW2Rpc2FibGVkXSk6Zm9jdXMtd2l0aGluKSA6OnNsb3R0ZWQoYXdjLXBvcGJvZHkpIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDEwcHgpIHNjYWxlKDEpO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFtkaXI9XFxcImxlZnRcXFwiXSkgOjpzbG90dGVkKGF3Yy1wb3Bib2R5KSB7XFxuICAgICAgICByaWdodDogMTAwJTtcXG4gICAgICAgIHRvcDogNTAlO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwcHgsIC01MCUpIHNjYWxlKDApO1xcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW2Rpcj1cXFwibGVmdFxcXCJdKSA6OnNsb3R0ZWQoYXdjLXBvcGJvZHlbb3Blbl0pLFxcbiAgICA6aG9zdChbZGlyPVxcXCJsZWZ0XFxcIl1bdHJpZ2dlcj1cXFwiaG92ZXJcXFwiXTpub3QoW2Rpc2FibGVkXSk6aG92ZXIpIDo6c2xvdHRlZChhd2MtcG9wYm9keSksXFxuICAgIDpob3N0KFtkaXI9XFxcImxlZnRcXFwiXVt0cmlnZ2VyPVxcXCJmb2N1c1xcXCJdOm5vdChbZGlzYWJsZWRdKTpmb2N1cy13aXRoaW4pIDo6c2xvdHRlZChhd2MtcG9wYm9keSkge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwcHgsIC01MCUpIHNjYWxlKDEpO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFtkaXI9XFxcImxlZnR0b3BcXFwiXSkgOjpzbG90dGVkKGF3Yy1wb3Bib2R5KSB7XFxuICAgICAgICByaWdodDogMTAwJTtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMHB4KSBzY2FsZSgwKTtcXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IHRvcDtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbZGlyPVxcXCJsZWZ0dG9wXFxcIl0pIDo6c2xvdHRlZChhd2MtcG9wYm9keVtvcGVuXSksXFxuICAgIDpob3N0KFtkaXI9XFxcImxlZnR0b3BcXFwiXVt0cmlnZ2VyPVxcXCJob3ZlclxcXCJdOm5vdChbZGlzYWJsZWRdKTpob3ZlcikgOjpzbG90dGVkKGF3Yy1wb3Bib2R5KSxcXG4gICAgOmhvc3QoW2Rpcj1cXFwibGVmdHRvcFxcXCJdW3RyaWdnZXI9XFxcImZvY3VzXFxcIl06bm90KFtkaXNhYmxlZF0pOmZvY3VzLXdpdGhpbikgOjpzbG90dGVkKGF3Yy1wb3Bib2R5KSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTBweCkgc2NhbGUoMSk7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW2Rpcj1cXFwibGVmdGJvdHRvbVxcXCJdKSA6OnNsb3R0ZWQoYXdjLXBvcGJvZHkpIHtcXG4gICAgICAgIHJpZ2h0OiAxMDAlO1xcbiAgICAgICAgYm90dG9tOiAwO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwcHgpIHNjYWxlKDApO1xcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFtkaXI9XFxcImxlZnRib3R0b21cXFwiXSkgOjpzbG90dGVkKGF3Yy1wb3Bib2R5W29wZW5dKSxcXG4gICAgOmhvc3QoW2Rpcj1cXFwibGVmdGJvdHRvbVxcXCJdW3RyaWdnZXI9XFxcImhvdmVyXFxcIl06bm90KFtkaXNhYmxlZF0pOmhvdmVyKSA6OnNsb3R0ZWQoYXdjLXBvcGJvZHkpLFxcbiAgICA6aG9zdChbZGlyPVxcXCJsZWZ0Ym90dG9tXFxcIl1bdHJpZ2dlcj1cXFwiZm9jdXNcXFwiXTpub3QoW2Rpc2FibGVkXSk6Zm9jdXMtd2l0aGluKSA6OnNsb3R0ZWQoYXdjLXBvcGJvZHkpIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMHB4KSBzY2FsZSgxKTtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbZGlyPVxcXCJ0b3BsZWZ0XFxcIl0pIDo6c2xvdHRlZChhd2MtcG9wYm9keSkge1xcbiAgICAgICAgYm90dG9tOiAxMDAlO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xMHB4KSBzY2FsZSgwKTtcXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFtkaXI9XFxcInRvcGxlZnRcXFwiXSkgOjpzbG90dGVkKGF3Yy1wb3Bib2R5W29wZW5dKSxcXG4gICAgOmhvc3QoW2Rpcj1cXFwidG9wbGVmdFxcXCJdW3RyaWdnZXI9XFxcImhvdmVyXFxcIl06bm90KFtkaXNhYmxlZF0pOmhvdmVyKSA6OnNsb3R0ZWQoYXdjLXBvcGJvZHkpLFxcbiAgICA6aG9zdChbZGlyPVxcXCJ0b3BsZWZ0XFxcIl1bdHJpZ2dlcj1cXFwiZm9jdXNcXFwiXTpub3QoW2Rpc2FibGVkXSk6Zm9jdXMtd2l0aGluKSA6OnNsb3R0ZWQoYXdjLXBvcGJvZHkpIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xMHB4KSBzY2FsZSgxKTtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbZGlyPVxcXCJ0b3ByaWdodFxcXCJdKSA6OnNsb3R0ZWQoYXdjLXBvcGJvZHkpIHtcXG4gICAgICAgIGJvdHRvbTogMTAwJTtcXG4gICAgICAgIHJpZ2h0OiAwO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTEwcHgpIHNjYWxlKDApO1xcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFtkaXI9XFxcInRvcHJpZ2h0XFxcIl0pIDo6c2xvdHRlZChhd2MtcG9wYm9keVtvcGVuXSksXFxuICAgIDpob3N0KFtkaXI9XFxcInRvcHJpZ2h0XFxcIl1bdHJpZ2dlcj1cXFwiaG92ZXJcXFwiXTpub3QoW2Rpc2FibGVkXSk6aG92ZXIpIDo6c2xvdHRlZChhd2MtcG9wYm9keSksXFxuICAgIDpob3N0KFtkaXI9XFxcInRvcHJpZ2h0XFxcIl1bdHJpZ2dlcj1cXFwiZm9jdXNcXFwiXTpub3QoW2Rpc2FibGVkXSk6Zm9jdXMtd2l0aGluKSA6OnNsb3R0ZWQoYXdjLXBvcGJvZHkpIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xMHB4KSBzY2FsZSgxKTtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbZGlyPVxcXCJyaWdodHRvcFxcXCJdKSA6OnNsb3R0ZWQoYXdjLXBvcGJvZHkpIHtcXG4gICAgICAgIGxlZnQ6IDEwMCU7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMHB4KSBzY2FsZSgwKTtcXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFtkaXI9XFxcInJpZ2h0dG9wXFxcIl0pIDo6c2xvdHRlZChhd2MtcG9wYm9keVtvcGVuXSksXFxuICAgIDpob3N0KFtkaXI9XFxcInJpZ2h0dG9wXFxcIl1bdHJpZ2dlcj1cXFwiaG92ZXJcXFwiXTpub3QoW2Rpc2FibGVkXSk6aG92ZXIpIDo6c2xvdHRlZChhd2MtcG9wYm9keSksXFxuICAgIDpob3N0KFtkaXI9XFxcInJpZ2h0dG9wXFxcIl1bdHJpZ2dlcj1cXFwiZm9jdXNcXFwiXTpub3QoW2Rpc2FibGVkXSk6Zm9jdXMtd2l0aGluKSA6OnNsb3R0ZWQoYXdjLXBvcGJvZHkpIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwcHgpIHNjYWxlKDEpO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFtkaXI9XFxcInJpZ2h0Ym90dG9tXFxcIl0pIDo6c2xvdHRlZChhd2MtcG9wYm9keSkge1xcbiAgICAgICAgbGVmdDogMTAwJTtcXG4gICAgICAgIGJvdHRvbTogMDtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwcHgpIHNjYWxlKDApO1xcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW2Rpcj1cXFwicmlnaHRib3R0b21cXFwiXSkgOjpzbG90dGVkKGF3Yy1wb3Bib2R5W29wZW5dKSxcXG4gICAgOmhvc3QoW2Rpcj1cXFwicmlnaHRib3R0b21cXFwiXVt0cmlnZ2VyPVxcXCJob3ZlclxcXCJdOm5vdChbZGlzYWJsZWRdKTpob3ZlcikgOjpzbG90dGVkKGF3Yy1wb3Bib2R5KSxcXG4gICAgOmhvc3QoW2Rpcj1cXFwicmlnaHRib3R0b21cXFwiXVt0cmlnZ2VyPVxcXCJmb2N1c1xcXCJdOm5vdChbZGlzYWJsZWRdKTpmb2N1cy13aXRoaW4pIDo6c2xvdHRlZChhd2MtcG9wYm9keSkge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTBweCkgc2NhbGUoMSk7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW2Rpcj1cXFwiYm90dG9tbGVmdFxcXCJdKSA6OnNsb3R0ZWQoYXdjLXBvcGJvZHkpLFxcbiAgICA6aG9zdCg6bm90KFtkaXJdKSkgOjpzbG90dGVkKGF3Yy1wb3Bib2R5KSB7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgdG9wOiAxMDAlO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTBweCkgc2NhbGUoMCk7XFxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcDtcXG4gICAgfVxcblxcbiAgICA6aG9zdCg6bm90KFtkaXJdKSkgOjpzbG90dGVkKGF3Yy1wb3Bib2R5W29wZW5dKSxcXG4gICAgOmhvc3QoOm5vdChbZGlyXSlbdHJpZ2dlcj1cXFwiaG92ZXJcXFwiXTpub3QoW2Rpc2FibGVkXSk6aG92ZXIpIDo6c2xvdHRlZChhd2MtcG9wYm9keSksXFxuICAgIDpob3N0KDpub3QoW2Rpcl0pW3RyaWdnZXI9XFxcImZvY3VzXFxcIl06bm90KFtkaXNhYmxlZF0pOmZvY3VzLXdpdGhpbikgOjpzbG90dGVkKGF3Yy1wb3Bib2R5KSxcXG4gICAgOmhvc3QoW2Rpcj1cXFwiYm90dG9tbGVmdFxcXCJdKSA6OnNsb3R0ZWQoYXdjLXBvcGJvZHlbb3Blbl0pLFxcbiAgICA6aG9zdChbZGlyPVxcXCJib3R0b21sZWZ0XFxcIl1bdHJpZ2dlcj1cXFwiaG92ZXJcXFwiXTpub3QoW2Rpc2FibGVkXSk6aG92ZXIpIDo6c2xvdHRlZChhd2MtcG9wYm9keSksXFxuICAgIDpob3N0KFtkaXI9XFxcImJvdHRvbWxlZnRcXFwiXVt0cmlnZ2VyPVxcXCJmb2N1c1xcXCJdOm5vdChbZGlzYWJsZWRdKTpmb2N1cy13aXRoaW4pIDo6c2xvdHRlZChhd2MtcG9wYm9keSkge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTBweCkgc2NhbGUoMSk7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW2Rpcj1cXFwiYm90dG9tcmlnaHRcXFwiXSkgOjpzbG90dGVkKGF3Yy1wb3Bib2R5KSB7XFxuICAgICAgICByaWdodDogMDtcXG4gICAgICAgIHRvcDogMTAwJTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDEwcHgpIHNjYWxlKDApO1xcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgdG9wO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFtkaXI9XFxcImJvdHRvbXJpZ2h0XFxcIl0pIDo6c2xvdHRlZChhd2MtcG9wYm9keVtvcGVuXSksXFxuICAgIDpob3N0KFtkaXI9XFxcImJvdHRvbXJpZ2h0XFxcIl1bdHJpZ2dlcj1cXFwiaG92ZXJcXFwiXTpub3QoW2Rpc2FibGVkXSk6aG92ZXIpIDo6c2xvdHRlZChhd2MtcG9wYm9keSksXFxuICAgIDpob3N0KFtkaXI9XFxcImJvdHRvbXJpZ2h0XFxcIl1bdHJpZ2dlcj1cXFwiZm9jdXNcXFwiXTpub3QoW2Rpc2FibGVkXSk6Zm9jdXMtd2l0aGluKSA6OnNsb3R0ZWQoYXdjLXBvcGJvZHkpIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDEwcHgpIHNjYWxlKDEpO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFt0cmlnZ2VyPVxcXCJjb250ZXh0bWVudVxcXCJdKSA6OnNsb3R0ZWQoYXdjLXBvcGJvZHkpIHtcXG4gICAgICAgIHJpZ2h0OiBhdXRvO1xcbiAgICAgICAgYm90dG9tOiBhdXRvO1xcbiAgICAgICAgbGVmdDogdmFyKC0teCwgMCk7XFxuICAgICAgICB0b3A6IHZhcigtLXksIDEwMCUpO1xcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1cHgsIDVweCkgc2NhbGUoMCk7XFxuICAgICAgICB0cmFuc2l0aW9uOiAuMTVzO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFt0cmlnZ2VyPVxcXCJjb250ZXh0bWVudVxcXCJdKSA6OnNsb3R0ZWQoYXdjLXBvcGJvZHlbb3Blbl0pIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDVweCwgNXB4KSBzY2FsZSgxKTtcXG4gICAgfVxcblxcbiAgICA6aG9zdCA6OnNsb3R0ZWQoYXdjLXBvcGJvZHlbb3Blbl0pLFxcbiAgICA6aG9zdChbdHJpZ2dlcj1cXFwiaG92ZXJcXFwiXTpub3QoW2Rpc2FibGVkXSk6aG92ZXIpIDo6c2xvdHRlZChhd2MtcG9wYm9keSksXFxuICAgIDpob3N0KFt0cmlnZ2VyPVxcXCJmb2N1c1xcXCJdOm5vdChbZGlzYWJsZWRdKTpmb2N1cy13aXRoaW4pIDo6c2xvdHRlZChhd2MtcG9wYm9keSkge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgIH1cXG5cXG4gICAgc2xvdCB7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xcbiAgICB9XFxuPC9zdHlsZT5cXG48c2xvdD48L3Nsb3Q+XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdHlsZT5cXG4gICAgOmhvc3Qge1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICAgICAgY29sb3I6IHZhcigtLWZvbnRDb2xvciwgIzMzMyk7XFxuICAgICAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFtkaXNhYmxlZF0pIHtcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICAgICAgb3BhY2l0eTogLjY7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW2Rpc2FibGVkXSkgbGFiZWwge1xcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG4gICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxuICAgIH1cXG5cXG4gICAgI3JhZGlvIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoOmZvY3VzLXdpdGhpbikgLmNoZWtlZCxcXG4gICAgOmhvc3QoOm5vdChbZGlzYWJsZWRdKSkgbGFiZWw6aG92ZXIgLmNoZWtlZCB7XFxuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXRoZW1lQ29sb3IsICM0MmI5ODMpO1xcbiAgICAgICAgLypib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsMCwwLDAuMSk7Ki9cXG4gICAgICAgIHotaW5kZXg6IDE7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW2Rpc2FibGVkXSkgLmNoZWtlZCB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC4xKTtcXG4gICAgfVxcblxcbiAgICBsYWJlbCB7XFxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBvdXRsaW5lOiAwO1xcbiAgICB9XFxuXFxuICAgIC5jaGVrZWQge1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgIHdpZHRoOiAxNnB4O1xcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlckNvbG9yLCByZ2JhKDAsIDAsIDAsIC4yKSk7XFxuICAgICAgICB0cmFuc2l0aW9uOiAuM3M7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IC41ZW07XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoOmVtcHR5KSAuY2hla2VkIHtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcXG4gICAgfVxcblxcbiAgICAuY2hla2VkOjpiZWZvcmUge1xcbiAgICAgICAgY29udGVudDogJyc7XFxuICAgICAgICB3aWR0aDogOHB4O1xcbiAgICAgICAgaGVpZ2h0OiA4cHg7XFxuICAgICAgICBtYXJnaW46IGF1dG87XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZUNvbG9yLCAjNDJiOTgzKTtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgICAgICB0cmFuc2l0aW9uOiAuMnMgY3ViaWMtYmV6aWVyKC4xMiwgLjQsIC4yOSwgMS40NikgLjFzO1xcbiAgICB9XFxuXFxuICAgIC5jaGVrZWQ6OmFmdGVyIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZUNvbG9yLCAjNDJiOTgzKTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgIG9wYWNpdHk6IC4yO1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgICAgIHotaW5kZXg6IC0xO1xcbiAgICAgICAgdHJhbnNpdGlvbjogLjJzIGN1YmljLWJlemllciguMTIsIC40LCAuMjksIDEuNDYpIC4xcztcXG4gICAgfVxcblxcbiAgICAjcmFkaW86Zm9jdXMtdmlzaWJsZStsYWJlbCAuY2hla2VkOjphZnRlciB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDIuNSk7XFxuICAgIH1cXG5cXG4gICAgI3JhZGlvOmNoZWNrZWQrbGFiZWwgLmNoZWtlZDo6YmVmb3JlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIH1cXG5cXG4gICAgI3JhZGlvOmNoZWNrZWQrbGFiZWwgLmNoZWtlZCB7XFxuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXRoZW1lQ29sb3IsICM0MmI5ODMpO1xcbiAgICB9XFxuPC9zdHlsZT5cXG48aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGlkPVxcXCJyYWRpb1xcXCIgLz5cXG48bGFiZWwgaWQ9XFxcImxhYmVsXFxcIiBmb3I9XFxcInJhZGlvXFxcIj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcImNoZWtlZFxcXCI+PC9zcGFuPlxcbiAgICA8c2xvdD48L3Nsb3Q+XFxuPC9sYWJlbD5cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN0eWxlPlxcbiAgICA6aG9zdCB7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgIGRpcmVjdGlvbjogcnRsO1xcbiAgICAgICAgY29sb3I6ICNlZWU7XFxuICAgIH1cXG5cXG4gICAgbGFiZWwge1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBsaW5lLWhlaWdodDogMDtcXG4gICAgICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIH1cXG5cXG4gICAgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBjbGlwOiByZWN0KDAsIDAsIDAsIDApXFxuICAgIH1cXG5cXG4gICAgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXTpjaGVja2Vkfi5zdGFyLWl0ZW0ge1xcbiAgICAgICAgY29sb3I6IHZhcigtLXRoZW1lQ29sb3IsICM0MmI5ODMpO1xcbiAgICB9XFxuXFxuICAgIC5zdGFyLWl0ZW06aG92ZXIgYXdjLWljb24ge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpXFxuICAgIH1cXG5cXG4gICAgOmhvc3QoOm5vdChbZGlzYWJsZWRdKTpob3ZlcikgYXdjLXRvb2x0aXAuc3Rhci1pdGVtIHtcXG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICB9XFxuXFxuICAgIDpob3N0KDpub3QoW2Rpc2FibGVkXSkpIGF3Yy10b29sdGlwLnN0YXItaXRlbTpob3ZlcixcXG4gICAgOmhvc3QoOm5vdChbZGlzYWJsZWRdKSkgYXdjLXRvb2x0aXAuc3Rhci1pdGVtOmhvdmVyfi5zdGFyLWl0ZW0ge1xcbiAgICAgICAgY29sb3I6IHZhcigtLXRoZW1lQ29sb3IsICM0MmI5ODMpO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFtkaXNhYmxlZF0pIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFtkaXNhYmxlZF0pIGxhYmVsIHtcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB9XFxuPC9zdHlsZT5cXG48aW5wdXQgdGFiaW5kZXg9XFxcIjVcXFwiIHR5cGU9XFxcInJhZGlvXFxcIiBuYW1lPVxcXCJpdGVtXFxcIiBpZD1cXFwiaXRlbTA1XFxcIiB2YWx1ZT1cXFwiNVxcXCIgLz5cXG48YXdjLXRvb2x0aXAgY2xhc3M9XFxcInN0YXItaXRlbVxcXCI+XFxuICAgIDxsYWJlbCBmb3I9XFxcIml0ZW0wNVxcXCI+XFxuICAgICAgICA8YXdjLWljb24+PC9hd2MtaWNvbj5cXG4gICAgPC9sYWJlbD5cXG48L2F3Yy10b29sdGlwPlxcbjxpbnB1dCB0YWJpbmRleD1cXFwiNFxcXCIgdHlwZT1cXFwicmFkaW9cXFwiIG5hbWU9XFxcIml0ZW1cXFwiIGlkPVxcXCJpdGVtMDRcXFwiIHZhbHVlPVxcXCI0XFxcIiAvPlxcbjxhd2MtdG9vbHRpcCBjbGFzcz1cXFwic3Rhci1pdGVtXFxcIj5cXG4gICAgPGxhYmVsIGZvcj1cXFwiaXRlbTA0XFxcIj5cXG4gICAgICAgIDxhd2MtaWNvbj48L2F3Yy1pY29uPlxcbiAgICA8L2xhYmVsPlxcbjwvYXdjLXRvb2x0aXA+XFxuPGlucHV0IHRhYmluZGV4PVxcXCIzXFxcIiB0eXBlPVxcXCJyYWRpb1xcXCIgbmFtZT1cXFwiaXRlbVxcXCIgaWQ9XFxcIml0ZW0wM1xcXCIgdmFsdWU9XFxcIjNcXFwiIC8+XFxuPGF3Yy10b29sdGlwIGNsYXNzPVxcXCJzdGFyLWl0ZW1cXFwiPlxcbiAgICA8bGFiZWwgZm9yPVxcXCJpdGVtMDNcXFwiPlxcbiAgICAgICAgPGF3Yy1pY29uPjwvYXdjLWljb24+XFxuICAgIDwvbGFiZWw+XFxuPC9hd2MtdG9vbHRpcD5cXG48aW5wdXQgdGFiaW5kZXg9XFxcIjJcXFwiIHR5cGU9XFxcInJhZGlvXFxcIiBuYW1lPVxcXCJpdGVtXFxcIiBpZD1cXFwiaXRlbTAyXFxcIiB2YWx1ZT1cXFwiMlxcXCIgLz5cXG48YXdjLXRvb2x0aXAgY2xhc3M9XFxcInN0YXItaXRlbVxcXCI+XFxuICAgIDxsYWJlbCBmb3I9XFxcIml0ZW0wMlxcXCI+XFxuICAgICAgICA8YXdjLWljb24+PC9hd2MtaWNvbj5cXG4gICAgPC9sYWJlbD5cXG48L2F3Yy10b29sdGlwPlxcbjxpbnB1dCB0YWJpbmRleD1cXFwiMVxcXCIgdHlwZT1cXFwicmFkaW9cXFwiIG5hbWU9XFxcIml0ZW1cXFwiIGlkPVxcXCJpdGVtMDFcXFwiIHZhbHVlPVxcXCIxXFxcIiAvPlxcbjxhd2MtdG9vbHRpcCBjbGFzcz1cXFwic3Rhci1pdGVtXFxcIj5cXG4gICAgPGxhYmVsIGZvcj1cXFwiaXRlbTAxXFxcIj5cXG4gICAgICAgIDxhd2MtaWNvbj48L2F3Yy1pY29uPlxcbiAgICA8L2xhYmVsPlxcbjwvYXdjLXRvb2x0aXA+XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdHlsZT5cXG4gICAgOmhvc3Qge1xcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBwYWRkaW5nOiAwIDVweDtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbdmVydGljYWxdKSB7XFxuICAgICAgICBoZWlnaHQ6dmFyKC0taGVpZ2h0LCAzMDBweCk7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW2Rpc2FibGVkXSkge1xcbiAgICAgICAgb3BhY2l0eTogLjg7XFxuICAgICAgICAtLXRoZW1lQ29sb3I6ICM5OTk7XFxuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFtkaXNhYmxlZF0pIGlucHV0W3R5cGU9XFxcInJhbmdlXFxcIl0ge1xcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgI3NsaWRlci10b29sdGlwIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBwYWRkaW5nOiA1cHggMDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xcbiAgICB9XFxuXFxuICAgIDo6LW1vei1mb2N1cy1pbm5lcixcXG4gICAgOjotbW96LWZvY3VzLW91dGVyIHtcXG4gICAgICAgIGJvcmRlcjogMDtcXG4gICAgICAgIG91dGxpbmU6IDA7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW3Nob3d0aXBzXSkge1xcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG4gICAgfVxcblxcbiAgICBpbnB1dFt0eXBlPVxcXCJyYW5nZVxcXCJdIHtcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxuICAgICAgICBtYXJnaW46IDAgLTVweDtcXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAxMHB4KTtcXG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgICAgIG91dGxpbmU6IDA7XFxuICAgICAgICBoZWlnaHQ6IDEycHg7XFxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICB9XFxuXFxuICAgIGlucHV0W3R5cGU9XFxcInJhbmdlXFxcIl06Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgaGVpZ2h0OiAycHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXRoZW1lQ29sb3IsICM0MmI5ODMpIGNhbGMoMTAwJSAqIHZhcigtLXBlcmNlbnQpKSwgcmdiYSgwLCAwLCAwLCAuMSkgMCUpXFxuICAgIH1cXG5cXG4gICAgaW5wdXRbdHlwZT1cXFwicmFuZ2VcXFwiXTo6LW1vei1yYW5nZS1wcm9ncmVzcyB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIGhlaWdodDogMnB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICAgICAgb3V0bGluZTogMDtcXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXRoZW1lQ29sb3IsICM0MmI5ODMpXFxuICAgIH1cXG5cXG4gICAgaW5wdXRbdHlwZT1cXFwicmFuZ2VcXFwiXTo6LW1vei1yYW5nZS10cmFjayB7XFxuICAgICAgICBoZWlnaHQ6IDJweDtcXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjEpO1xcbiAgICB9XFxuXFxuICAgIGlucHV0W3R5cGU9XFxcInJhbmdlXFxcIl06Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcXG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXRoZW1lQ29sb3IsICM0MmI5ODMpO1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgbWFyZ2luLXRvcDogLTRweDtcXG4gICAgICAgIHdpZHRoOiAxMHB4O1xcbiAgICAgICAgaGVpZ2h0OiAxMHB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWVDb2xvciwgIzQyYjk4Myk7XFxuICAgICAgICB0cmFuc2l0aW9uOiAuMnMgY3ViaWMtYmV6aWVyKC4xMiwgLjQsIC4yOSwgMS40Nik7XFxuICAgIH1cXG5cXG4gICAgaW5wdXRbdHlwZT1cXFwicmFuZ2VcXFwiXTo6LW1vei1yYW5nZS10aHVtYiB7XFxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS10aGVtZUNvbG9yLCAjNDJiOTgzKTtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIHdpZHRoOiAxMHB4O1xcbiAgICAgICAgaGVpZ2h0OiAxMHB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWVDb2xvciwgIzQyYjk4Myk7XFxuICAgICAgICB0cmFuc2l0aW9uOiAuMnMgY3ViaWMtYmV6aWVyKC4xMiwgLjQsIC4yOSwgMS40Nik7XFxuICAgIH1cXG5cXG4gICAgaW5wdXRbdHlwZT1cXFwicmFuZ2VcXFwiXTpmb2N1cyB7XFxuICAgICAgICB6LWluZGV4OiAyO1xcbiAgICB9XFxuXFxuICAgIGlucHV0W3R5cGU9XFxcInJhbmdlXFxcIl06Oi13ZWJraXQtc2xpZGVyLXRodW1iOmFjdGl2ZSxcXG4gICAgaW5wdXRbdHlwZT1cXFwicmFuZ2VcXFwiXTpmb2N1czo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgfVxcblxcbiAgICBpbnB1dFt0eXBlPVxcXCJyYW5nZVxcXCJdOjotbW96LXJhbmdlLXRodW1iOmFjdGl2ZSxcXG4gICAgaW5wdXRbdHlwZT1cXFwicmFuZ2VcXFwiXTpmb2N1czo6LW1vei1yYW5nZS10aHVtYiB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFt2ZXJ0aWNhbF0pICNzbGlkZXItdG9vbHRpcCB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDUwJTtcXG4gICAgICAgIGxlZnQ6IDUwJTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgtOTBkZWcpO1xcbiAgICAgICAgd2lkdGg6IGNhbGModmFyKC0taCwgMzAwcHgpIC0gMTBweClcXG4gICAgfVxcblxcbiAgICA6aG9zdChbdmVydGljYWxdKSAjc2xpZGVyLXRvb2x0aXA6OmJlZm9yZSB7XFxuICAgICAgICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xcbiAgICAgICAgcGFkZGluZzogMTBweCA2cHg7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW3ZlcnRpY2FsXSkge1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICB3aWR0aDogMjBweDtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbdmVydGljYWxdKSBhd2MtdG9vbHRpcDo6YmVmb3JlLFxcbiAgICA6aG9zdChbdmVydGljYWxdKSBhd2MtdG9vbHRpcDo6YWZ0ZXIge1xcbiAgICAgICAgbGVmdDogY2FsYyh2YXIoLS1wZXJjZW50LCAuNSkgKiAxMDAlICsgNXB4KTtcXG4gICAgfVxcblxcbiAgICA6aG9zdCg6Zm9jdXMtd2l0aGluKSAjc2xpZGVyLXRvb2x0aXAsXFxuICAgIDpob3N0KDpob3ZlcikgI3NsaWRlci10b29sdGlwIHtcXG4gICAgICAgIHotaW5kZXg6IDEwXFxuICAgIH1cXG48L3N0eWxlPlxcbjxhd2MtdG9vbHRpcCBpZD0nc2xpZGVyLXRvb2x0aXAnPlxcbiAgICA8aW5wdXQgaWQ9J3NsaWRlcicgIHR5cGU9J3JhbmdlJyAvPlxcbjwvYXdjLXRvb2x0aXA+XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdHlsZT5cXG4gICAgOmhvc3Qge1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbZGlzYWJsZWRdKSB7XFxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgICAgIG9wYWNpdHk6IC42O1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFtkaXNhYmxlZF0pIGxhYmVsIHtcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbiAgICB9XFxuXFxuICAgICNzd2l0Y2gge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcXG4gICAgfVxcblxcbiAgICA6aG9zdCg6Zm9jdXMtd2l0aGluKSBsYWJlbDo6YWZ0ZXIsXFxuICAgIDpob3N0KDphY3RpdmUpIDo6YWZ0ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWVDb2xvciwgIzQyYjk4Myk7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoOmZvY3VzLXdpdGhpbikgI3N3aXRjaCxcXG4gICAgOmhvc3QoOmFjdGl2ZSkgI3N3aXRjaCB7XFxuICAgICAgICB6LWluZGV4OiAyXFxuICAgIH1cXG5cXG4gICAgbGFiZWwge1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIHdpZHRoOiAyLjRlbTtcXG4gICAgICAgIGhlaWdodDogMS4yZW07XFxuICAgICAgICBwYWRkaW5nOiAuMTI1ZW07XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxLjJlbTtcXG4gICAgICAgIGJhY2tncm91bmQ6ICNlZWU7XFxuICAgICAgICB0cmFuc2l0aW9uOiAuM3Mgd2lkdGgsIC4zcyBoZWlnaHQsIC4zcyBiYWNrZ3JvdW5kLWNvbG9yO1xcbiAgICB9XFxuXFxuICAgIGxhYmVsOjpiZWZvcmUge1xcbiAgICAgICAgY29udGVudDogJyc7XFxuICAgICAgICBmbGV4OiAwO1xcbiAgICAgICAgdHJhbnNpdGlvbjogLjJzIGN1YmljLWJlemllciguMTIsIC40LCAuMjksIDEuNDYpIGZsZXg7XFxuICAgIH1cXG5cXG4gICAgbGFiZWw6OmFmdGVyIHtcXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgICAgd2lkdGg6IC40ZW07XFxuICAgICAgICBoZWlnaHQ6IC40ZW07XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxLjJlbTtcXG4gICAgICAgIGJvcmRlcjogLjRlbSBzb2xpZCAjZmZmO1xcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgICAgIHRyYW5zaXRpb246IC4zcyBiYWNrZ3JvdW5kLCAuM3MgcGFkZGluZywgLjNzIHdpZHRoLCAuM3MgaGVpZ2h0LCAuM3MgYm9yZGVyLXJhZGl1cywgLjNzIGJvcmRlcjtcXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwgMzUsIDExLCAwLjIpO1xcbiAgICB9XFxuXFxuICAgIGxhYmVsOmFjdGl2ZTo6YWZ0ZXIge1xcbiAgICAgICAgcGFkZGluZzogMCAuM2VtO1xcbiAgICB9XFxuXFxuICAgICNzd2l0Y2g6Y2hlY2tlZCtsYWJlbCB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZUJhY2tncm91bmQsIHZhcigtLXRoZW1lQ29sb3IsICM0MmI5ODMpKTtcXG4gICAgfVxcblxcbiAgICAjc3dpdGNoOmNoZWNrZWQrbGFiZWw6OmJlZm9yZSB7XFxuICAgICAgICBmbGV4OiAxO1xcbiAgICB9XFxuPC9zdHlsZT5cXG48aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGlkPVxcXCJzd2l0Y2hcXFwiPjxsYWJlbCBmb3I9XFxcInN3aXRjaFxcXCI+PC9sYWJlbD5cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHNsb3Q+PC9zbG90PlwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3R5bGU+XFxuICAgIDpob3N0IHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgdGV4dC1hbGlnbjogdW5zZXQ7XFxuICAgIH1cXG5cXG4gICAgLnRhYiB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIH1cXG5cXG4gICAgLnRhYi1uYXYtY29uIHtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG4gICAgfVxcblxcbiAgICAudGFiLW5hdiB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB9XFxuXFxuICAgIC5uYXYtaXRlbSB7XFxuICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgfVxcblxcbiAgICA6aG9zdCg6bm90KFt0eXBlPVxcXCJsaW5lXFxcIl0pKSAubmF2LWl0ZW0uYWN0aXZlIHtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS10aGVtZUNvbG9yLCAjNDJiOTgzKTtcXG4gICAgfVxcblxcbiAgICAudGFiLWxpbmUge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgd2lkdGg6IDA7XFxuICAgICAgICBtYXJnaW4tdG9wOiAtMnB4O1xcbiAgICAgICAgaGVpZ2h0OiAycHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZUNvbG9yLCAjNDJiOTgzKTtcXG4gICAgICAgIHRyYW5zaXRpb246IC4ycztcXG4gICAgfVxcblxcbiAgICAudGFiLWNvbnRlbnQge1xcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgIGZsZXg6IDE7XFxuICAgICAgICB0cmFuc2l0aW9uOiAuMnM7XFxuICAgIH1cXG5cXG4gICAgLnRhYi1jb250ZW50LXdyYXAge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgdHJhbnNpdGlvbjogLjJzO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFt0eXBlPVxcXCJjYXJkXFxcIl0pIC50YWItbGluZSxcXG4gICAgOmhvc3QoW3R5cGU9XFxcImxpbmVcXFwiXSkgLnRhYi1saW5lIHtcXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbdHlwZT1cXFwiY2FyZFxcXCJdKSAubmF2LWl0ZW0ge1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogLjVlbSAuNWVtIDAgMDtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbdHlwZT1cXFwibGluZVxcXCJdKSAubmF2LWl0ZW0ge1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyUmFkaXVzLCAuMjVlbSkgdmFyKC0tYm9yZGVyUmFkaXVzLCAuMjVlbSkgMCAwO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFt0eXBlPVxcXCJjYXJkXFxcIl0pIC5uYXYtaXRlbS5hY3RpdmUsXFxuICAgIDpob3N0KFt0eXBlPVxcXCJjYXJkXFxcIl0pIC50YWItY29udGVudCB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFt0eXBlPVxcXCJsaW5lXFxcIl0pIC5uYXYtaXRlbS5hY3RpdmUge1xcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXJDb2xvciwgcmdiYSgwLCAwLCAwLCAuMikpIHZhcigtLWJvcmRlckNvbG9yLCByZ2JhKDAsIDAsIDAsIC4yKSkgdHJhbnNwYXJlbnQ7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW3R5cGU9XFxcImxpbmVcXFwiXSkgLnRhYi1uYXYtY29uIHtcXG4gICAgICAgIG92ZWZsb3c6IGhpZGRlbjtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbdHlwZT1cXFwibGluZVxcXCJdKSAudGFiLWxpbmUge1xcbiAgICAgICAgdHJhbnNpdGlvbjogbm9uZTtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbdHlwZT1cXFwibGluZVxcXCJdKSAudGFiLWxpbmU6OmJlZm9yZSxcXG4gICAgOmhvc3QoW3R5cGU9XFxcImxpbmVcXFwiXSkgLnRhYi1saW5lOjphZnRlciB7XFxuICAgICAgICBjb250ZW50OiAnJztcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgICAgICB3aWR0aDogOTk5OXB4O1xcbiAgICAgICAgaGVpZ2h0OiAxcHg7XFxuICAgICAgICBib3R0b206IDA7XFxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ib3JkZXJDb2xvciwgcmdiYSgwLCAwLCAwLCAuMikpO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFt0eXBlPVxcXCJsaW5lXFxcIl0pIC50YWItbGluZTo6YmVmb3JlIHtcXG4gICAgICAgIHJpZ2h0OiAxMDAlO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFt0eXBlPVxcXCJsaW5lXFxcIl0pIC50YWItbGluZTo6YWZ0ZXIge1xcbiAgICAgICAgbGVmdDogMTAwJTtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbdHlwZT1cXFwiY2FyZFxcXCJdKSAudGFiLWNvbnRlbnQtd3JhcCxcXG4gICAgOmhvc3QoW3R5cGU9XFxcImxpbmVcXFwiXSkgLnRhYi1jb250ZW50LXdyYXAge1xcbiAgICAgICAgdHJhbnNpdGlvbjogbm9uZTtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbYWxpZ249XFxcImNlbnRlclxcXCJdKSAudGFiLW5hdiB7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbYWxpZ249XFxcImVuZFxcXCJdKSAudGFiLW5hdiB7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICB9XFxuXFxuICAgIDo6c2xvdHRlZChhd2MtdGFiKSB7XFxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XFxuICAgICAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgfVxcbjwvc3R5bGU+XFxuPHN0eWxlIGlkPVxcXCJmaWx0ZXJcXFwiPjwvc3R5bGU+XFxuPGRpdiBjbGFzcz1cXFwidGFiXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwidGFiLW5hdi1jb25cXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidGFiLW5hdlxcXCIgaWQ9XFxcIm5hdlxcXCI+PC9kaXY+XFxuICAgICAgICA8aSBjbGFzcz1cXFwidGFiLWxpbmVcXFwiIGlkPVxcXCJ0YWItbGluZVxcXCI+PC9pPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwidGFiLWNvbnRlbnRcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidGFiLWNvbnRlbnQtd3JhcFxcXCIgaWQ9XFxcInRhYi1jb250ZW50XFxcIj5cXG4gICAgICAgICAgICA8c2xvdCBpZD1cXFwic2xvdFxcXCI+TkVFRCBDT05URU5UPC9zbG90PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbjwvZGl2PlwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3R5bGU+XFxuICAgIDpob3N0IHtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgICB9XFxuXFxuICAgIDpob3N0OjpiZWZvcmUsXFxuICAgIDpob3N0OjphZnRlciB7XFxuICAgICAgICBjb250ZW50OiAnJztcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgei1pbmRleDogMTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0yMHB4KTtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjE1cyAuMTVzLCBsZWZ0IDBzLCB0b3AgMHM7XFxuICAgICAgICBjb2xvcjogdmFyKC0tZ3JheUNvbG9yLCByZ2JhKDAsIDAsIDAsIDAuNzUpKTtcXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB9XFxuXFxuICAgIDpob3N0OjpiZWZvcmUge1xcbiAgICAgICAgY29udGVudDogYXR0cihwcmVmaXgpIGF0dHIodGlwcykgYXR0cihzdWZmaXgpO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICAgICAgcGFkZGluZzogNnB4IDEwcHg7XFxuICAgICAgICBsaW5lLWhlaWdodDogMThweDtcXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5Q29sb3IsIHJnYmEoMCwgMCwgMCwgMC43NSkpO1xcbiAgICAgICAgY29sb3I6ICNmZmY7XFxuICAgICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xcbiAgICB9XFxuXFxuICAgIDpob3N0OjphZnRlciB7XFxuICAgICAgICB3aWR0aDogMDtcXG4gICAgICAgIGhlaWdodDogMDtcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICBib3JkZXI6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbdGlwc106bm90KFt0aXBzPScnXSk6aG92ZXI6bm90KFtzaG93PWZhbHNlXSkpOjpiZWZvcmUsXFxuICAgIDpob3N0KFt0aXBzXTpub3QoW3RpcHM9JyddKVtzaG93PXRydWVdKTo6YmVmb3JlLFxcbiAgICA6aG9zdChbdGlwc106bm90KFt0aXBzPScnXSk6Zm9jdXMtd2l0aGluOm5vdChbc2hvdz1mYWxzZV0pKTo6YmVmb3JlLFxcbiAgICA6aG9zdChbdGlwc106bm90KFt0aXBzPScnXSk6aG92ZXI6bm90KFtzaG93PWZhbHNlXSkpOjphZnRlcixcXG4gICAgOmhvc3QoW3RpcHNdOm5vdChbdGlwcz0nJ10pW3Nob3c9dHJ1ZV0pOjphZnRlcixcXG4gICAgOmhvc3QoW3RpcHNdOm5vdChbdGlwcz0nJ10pOmZvY3VzLXdpdGhpbjpub3QoW3Nob3c9ZmFsc2VdKSk6OmFmdGVyIHtcXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxuXFxuICAgIC8qIHRvcCAqL1xcbiAgICA6aG9zdChbZGlyPVxcXCJ0b3BcXFwiXSk6OmJlZm9yZSxcXG4gICAgOmhvc3QoOm5vdChbZGlyXSkpOjpiZWZvcmUsXFxuICAgIDpob3N0KDpub3QoW2Rpcl0pKTo6YWZ0ZXIsXFxuICAgIDpob3N0KFtkaXI9XFxcInRvcFxcXCJdKTo6YWZ0ZXIge1xcbiAgICAgICAgbGVmdDogY2FsYyh2YXIoLS1wZXJjZW50LCAuNSkgKiAxMDAlKTtcXG4gICAgICAgIGJvdHRvbTogMTAwJTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0yMHB4KTtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbZGlyPVxcXCJ0b3BcXFwiXSk6YWZ0ZXIsXFxuICAgIDpob3N0KDpub3QoW2Rpcl0pKTphZnRlciB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAtMTJweDtcXG4gICAgICAgIGJvcmRlci10b3AtY29sb3I6IGN1cnJlbnRDb2xvcjtcXG4gICAgfVxcblxcbiAgICA6aG9zdCg6bm90KFtkaXJdKTpob3Zlcjpub3QoW3Nob3c9ZmFsc2VdKSk6OmJlZm9yZSxcXG4gICAgOmhvc3QoOm5vdChbZGlyXSlbc2hvdz10cnVlXSk6OmJlZm9yZSxcXG4gICAgOmhvc3QoOm5vdChbZGlyXSk6Zm9jdXMtd2l0aGluOm5vdChbc2hvdz1mYWxzZV0pKTo6YmVmb3JlLFxcbiAgICA6aG9zdCg6bm90KFtkaXJdKTpob3Zlcjpub3QoW3Nob3c9ZmFsc2VdKSk6OmFmdGVyLFxcbiAgICA6aG9zdCg6bm90KFtkaXJdKVtzaG93PXRydWVdKTo6YWZ0ZXIsXFxuICAgIDpob3N0KDpub3QoW2Rpcl0pOmZvY3VzLXdpdGhpbjpub3QoW3Nob3c9ZmFsc2VdKSk6OmFmdGVyLFxcbiAgICA6aG9zdChbZGlyPVxcXCJ0b3BcXFwiXTpob3Zlcjpub3QoW3Nob3c9ZmFsc2VdKSk6OmJlZm9yZSxcXG4gICAgOmhvc3QoW2Rpcj1cXFwidG9wXFxcIl1bc2hvdz10cnVlXSk6OmJlZm9yZSxcXG4gICAgOmhvc3QoW2Rpcj1cXFwidG9wXFxcIl06Zm9jdXMtd2l0aGluOm5vdChbc2hvdz1mYWxzZV0pKTo6YmVmb3JlLFxcbiAgICA6aG9zdChbZGlyPVxcXCJ0b3BcXFwiXTpob3Zlcjpub3QoW3Nob3c9ZmFsc2VdKSk6OmFmdGVyLFxcbiAgICA6aG9zdChbZGlyPVxcXCJ0b3BcXFwiXVtzaG93PXRydWVdKTo6YWZ0ZXIsXFxuICAgIDpob3N0KFtkaXI9XFxcInRvcFxcXCJdOmZvY3VzLXdpdGhpbjpub3QoW3Nob3c9ZmFsc2VdKSk6OmFmdGVyIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0xMHB4KTtcXG4gICAgfVxcblxcbiAgICAvKiByaWdodCAqL1xcbiAgICA6aG9zdChbZGlyPVxcXCJyaWdodFxcXCJdKTo6YmVmb3JlLFxcbiAgICA6aG9zdChbZGlyPVxcXCJyaWdodFxcXCJdKTo6YWZ0ZXIge1xcbiAgICAgICAgbGVmdDogMTAwJTtcXG4gICAgICAgIHRvcDogNTAlO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjBweCwgLTUwJSk7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW2Rpcj1cXFwicmlnaHRcXFwiXSk6YWZ0ZXIge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xMnB4O1xcbiAgICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiBjdXJyZW50Q29sb3I7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW2Rpcj1cXFwicmlnaHRcXFwiXTpob3Zlcjpub3QoW3Nob3c9ZmFsc2VdKSk6OmJlZm9yZSxcXG4gICAgOmhvc3QoW2Rpcj1cXFwicmlnaHRcXFwiXVtzaG93PXRydWVdKTo6YmVmb3JlLFxcbiAgICA6aG9zdChbZGlyPVxcXCJyaWdodFxcXCJdOmZvY3VzLXdpdGhpbjpub3QoW3Nob3c9ZmFsc2VdKSk6OmJlZm9yZSxcXG4gICAgOmhvc3QoW2Rpcj1cXFwicmlnaHRcXFwiXTpob3Zlcjpub3QoW3Nob3c9ZmFsc2VdKSk6OmFmdGVyLFxcbiAgICA6aG9zdChbZGlyPVxcXCJyaWdodFxcXCJdW3Nob3c9dHJ1ZV0pOjphZnRlcixcXG4gICAgOmhvc3QoW2Rpcj1cXFwicmlnaHRcXFwiXTpmb2N1cy13aXRoaW46bm90KFtzaG93PWZhbHNlXSkpOjphZnRlciB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMHB4LCAtNTAlKTtcXG4gICAgfVxcblxcbiAgICAvKiBib3R0b20gKi9cXG4gICAgOmhvc3QoW2Rpcj1cXFwiYm90dG9tXFxcIl0pOjpiZWZvcmUsXFxuICAgIDpob3N0KFtkaXI9XFxcImJvdHRvbVxcXCJdKTo6YWZ0ZXIge1xcbiAgICAgICAgbGVmdDogY2FsYyh2YXIoLS1wZXJjZW50LCAuNSkgKiAxMDAlKTtcXG4gICAgICAgIHRvcDogMTAwJTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDIwcHgpO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFtkaXI9XFxcImJvdHRvbVxcXCJdKTo6YWZ0ZXIge1xcbiAgICAgICAgbWFyZ2luLXRvcDogLTEycHg7XFxuICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiBjdXJyZW50Q29sb3I7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW2Rpcj1cXFwiYm90dG9tXFxcIl06aG92ZXI6bm90KFtzaG93PWZhbHNlXSkpOjpiZWZvcmUsXFxuICAgIDpob3N0KFtkaXI9XFxcImJvdHRvbVxcXCJdW3Nob3c9dHJ1ZV0pOjpiZWZvcmUsXFxuICAgIDpob3N0KFtkaXI9XFxcImJvdHRvbVxcXCJdOmZvY3VzLXdpdGhpbjpub3QoW3Nob3c9ZmFsc2VdKSk6OmJlZm9yZSxcXG4gICAgOmhvc3QoW2Rpcj1cXFwiYm90dG9tXFxcIl06aG92ZXI6bm90KFtzaG93PWZhbHNlXSkpOjphZnRlcixcXG4gICAgOmhvc3QoW2Rpcj1cXFwiYm90dG9tXFxcIl1bc2hvdz10cnVlXSk6OmFmdGVyLFxcbiAgICA6aG9zdChbZGlyPVxcXCJib3R0b21cXFwiXTpmb2N1cy13aXRoaW46bm90KFtzaG93PWZhbHNlXSkpOjphZnRlciB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAxMHB4KTtcXG4gICAgfVxcblxcbiAgICAvKiBsZWZ0ICovXFxuICAgIDpob3N0KFtkaXI9XFxcImxlZnRcXFwiXSk6OmJlZm9yZSxcXG4gICAgOmhvc3QoW2Rpcj1cXFwibGVmdFxcXCJdKTo6YWZ0ZXIge1xcbiAgICAgICAgcmlnaHQ6IDEwMCU7XFxuICAgICAgICB0b3A6IDUwJTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0yMHB4LCAtNTAlKTtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbZGlyPVxcXCJsZWZ0XFxcIl0pOjphZnRlciB7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IC0xMnB4O1xcbiAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IGN1cnJlbnRDb2xvcjtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbZGlyPVxcXCJsZWZ0XFxcIl06aG92ZXI6bm90KFtzaG93PWZhbHNlXSkpOjpiZWZvcmUsXFxuICAgIDpob3N0KFtkaXI9XFxcImxlZnRcXFwiXVtzaG93PXRydWVdKTo6YmVmb3JlLFxcbiAgICA6aG9zdChbZGlyPVxcXCJsZWZ0XFxcIl06Zm9jdXMtd2l0aGluOm5vdChbc2hvdz1mYWxzZV0pKTo6YmVmb3JlLFxcbiAgICA6aG9zdChbZGlyPVxcXCJsZWZ0XFxcIl06aG92ZXI6bm90KFtzaG93PWZhbHNlXSkpOjphZnRlcixcXG4gICAgOmhvc3QoW2Rpcj1cXFwibGVmdFxcXCJdW3Nob3c9dHJ1ZV0pOjphZnRlcixcXG4gICAgOmhvc3QoW2Rpcj1cXFwibGVmdFxcXCJdOmZvY3VzLXdpdGhpbjpub3QoW3Nob3c9ZmFsc2VdKSk6OmFmdGVyIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMHB4LCAtNTAlKTtcXG4gICAgfVxcblxcbiAgICAvKiB0b3BsZWZ0ICovXFxuICAgIDpob3N0KFtkaXI9XFxcInRvcGxlZnRcXFwiXSk6OmJlZm9yZSxcXG4gICAgOmhvc3QoW2Rpcj1cXFwidG9wbGVmdFxcXCJdKTo6YWZ0ZXIge1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIGJvdHRvbTogMTAwJTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0yMHB4KTtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbZGlyPVxcXCJ0b3BsZWZ0XFxcIl0pOmFmdGVyIHtcXG4gICAgICAgIGxlZnQ6IDEwcHg7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAtMTJweDtcXG4gICAgICAgIGJvcmRlci10b3AtY29sb3I6IGN1cnJlbnRDb2xvcjtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbZGlyPVxcXCJ0b3BsZWZ0XFxcIl06aG92ZXI6bm90KFtzaG93PWZhbHNlXSkpOjpiZWZvcmUsXFxuICAgIDpob3N0KFtkaXI9XFxcInRvcGxlZnRcXFwiXVtzaG93PXRydWVdKTo6YmVmb3JlLFxcbiAgICA6aG9zdChbZGlyPVxcXCJ0b3BsZWZ0XFxcIl06Zm9jdXMtd2l0aGluOm5vdChbc2hvdz1mYWxzZV0pKTo6YmVmb3JlLFxcbiAgICA6aG9zdChbZGlyPVxcXCJ0b3BsZWZ0XFxcIl06aG92ZXI6bm90KFtzaG93PWZhbHNlXSkpOjphZnRlcixcXG4gICAgOmhvc3QoW2Rpcj1cXFwidG9wbGVmdFxcXCJdW3Nob3c9dHJ1ZV0pOjphZnRlcixcXG4gICAgOmhvc3QoW2Rpcj1cXFwidG9wbGVmdFxcXCJdOmZvY3VzLXdpdGhpbjpub3QoW3Nob3c9ZmFsc2VdKSk6OmFmdGVyIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xMHB4KTtcXG4gICAgfVxcblxcbiAgICAvKiB0b3ByaWdodCAqL1xcbiAgICA6aG9zdChbZGlyPVxcXCJ0b3ByaWdodFxcXCJdKTo6YmVmb3JlLFxcbiAgICA6aG9zdChbZGlyPVxcXCJ0b3ByaWdodFxcXCJdKTo6YWZ0ZXIge1xcbiAgICAgICAgcmlnaHQ6IDA7XFxuICAgICAgICBib3R0b206IDEwMCU7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMjBweCk7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW2Rpcj1cXFwidG9wcmlnaHRcXFwiXSk6YWZ0ZXIge1xcbiAgICAgICAgcmlnaHQ6IDEwcHg7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAtMTJweDtcXG4gICAgICAgIGJvcmRlci10b3AtY29sb3I6IGN1cnJlbnRDb2xvcjtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbZGlyPVxcXCJ0b3ByaWdodFxcXCJdOmhvdmVyOm5vdChbc2hvdz1mYWxzZV0pKTo6YmVmb3JlLFxcbiAgICA6aG9zdChbZGlyPVxcXCJ0b3ByaWdodFxcXCJdW3Nob3c9dHJ1ZV0pOjpiZWZvcmUsXFxuICAgIDpob3N0KFtkaXI9XFxcInRvcHJpZ2h0XFxcIl06Zm9jdXMtd2l0aGluOm5vdChbc2hvdz1mYWxzZV0pKTo6YmVmb3JlLFxcbiAgICA6aG9zdChbZGlyPVxcXCJ0b3ByaWdodFxcXCJdOmhvdmVyOm5vdChbc2hvdz1mYWxzZV0pKTo6YWZ0ZXIsXFxuICAgIDpob3N0KFtkaXI9XFxcInRvcHJpZ2h0XFxcIl1bc2hvdz10cnVlXSk6OmFmdGVyLFxcbiAgICA6aG9zdChbZGlyPVxcXCJ0b3ByaWdodFxcXCJdOmZvY3VzLXdpdGhpbjpub3QoW3Nob3c9ZmFsc2VdKSk6OmFmdGVyIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xMHB4KTtcXG4gICAgfVxcblxcbiAgICAvKiByaWdodHRvcCAqL1xcbiAgICA6aG9zdChbZGlyPVxcXCJyaWdodHRvcFxcXCJdKTo6YmVmb3JlLFxcbiAgICA6aG9zdChbZGlyPVxcXCJyaWdodHRvcFxcXCJdKTo6YWZ0ZXIge1xcbiAgICAgICAgbGVmdDogMTAwJTtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDIwcHgsIDApO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFtkaXI9XFxcInJpZ2h0dG9wXFxcIl0pOmFmdGVyIHtcXG4gICAgICAgIHRvcDogMTBweDtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTJweDtcXG4gICAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogY3VycmVudENvbG9yO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFtkaXI9XFxcInJpZ2h0dG9wXFxcIl06aG92ZXI6bm90KFtzaG93PWZhbHNlXSkpOjpiZWZvcmUsXFxuICAgIDpob3N0KFtkaXI9XFxcInJpZ2h0dG9wXFxcIl1bc2hvdz10cnVlXSk6OmJlZm9yZSxcXG4gICAgOmhvc3QoW2Rpcj1cXFwicmlnaHR0b3BcXFwiXTpmb2N1cy13aXRoaW46bm90KFtzaG93PWZhbHNlXSkpOjpiZWZvcmUsXFxuICAgIDpob3N0KFtkaXI9XFxcInJpZ2h0dG9wXFxcIl06aG92ZXI6bm90KFtzaG93PWZhbHNlXSkpOjphZnRlcixcXG4gICAgOmhvc3QoW2Rpcj1cXFwicmlnaHR0b3BcXFwiXVtzaG93PXRydWVdKTo6YWZ0ZXIsXFxuICAgIDpob3N0KFtkaXI9XFxcInJpZ2h0dG9wXFxcIl06Zm9jdXMtd2l0aGluOm5vdChbc2hvdz1mYWxzZV0pKTo6YWZ0ZXIge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTBweCwgMCk7XFxuICAgIH1cXG5cXG4gICAgLyogcmlnaHRib3R0b20gKi9cXG4gICAgOmhvc3QoW2Rpcj1cXFwicmlnaHRib3R0b21cXFwiXSk6OmJlZm9yZSxcXG4gICAgOmhvc3QoW2Rpcj1cXFwicmlnaHRib3R0b21cXFwiXSk6OmFmdGVyIHtcXG4gICAgICAgIGxlZnQ6IDEwMCU7XFxuICAgICAgICBib3R0b206IDA7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyMHB4LCAwKTtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbZGlyPVxcXCJyaWdodGJvdHRvbVxcXCJdKTphZnRlciB7XFxuICAgICAgICBib3R0b206IDEwcHg7XFxuICAgICAgICBtYXJnaW4tbGVmdDogLTEycHg7XFxuICAgICAgICBib3JkZXItcmlnaHQtY29sb3I6IGN1cnJlbnRDb2xvcjtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbZGlyPVxcXCJyaWdodGJvdHRvbVxcXCJdOmhvdmVyOm5vdChbc2hvdz1mYWxzZV0pKTo6YmVmb3JlLFxcbiAgICA6aG9zdChbZGlyPVxcXCJyaWdodGJvdHRvbVxcXCJdW3Nob3c9dHJ1ZV0pOjpiZWZvcmUsXFxuICAgIDpob3N0KFtkaXI9XFxcInJpZ2h0Ym90dG9tXFxcIl06Zm9jdXMtd2l0aGluOm5vdChbc2hvdz1mYWxzZV0pKTo6YmVmb3JlLFxcbiAgICA6aG9zdChbZGlyPVxcXCJyaWdodGJvdHRvbVxcXCJdOmhvdmVyOm5vdChbc2hvdz1mYWxzZV0pKTo6YWZ0ZXIsXFxuICAgIDpob3N0KFtkaXI9XFxcInJpZ2h0Ym90dG9tXFxcIl1bc2hvdz10cnVlXSk6OmFmdGVyLFxcbiAgICA6aG9zdChbZGlyPVxcXCJyaWdodGJvdHRvbVxcXCJdOmZvY3VzLXdpdGhpbjpub3QoW3Nob3c9ZmFsc2VdKSk6OmFmdGVyIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwcHgsIDApO1xcbiAgICB9XFxuXFxuICAgIC8qIGJvdHRvbWxlZnQgKi9cXG4gICAgOmhvc3QoW2Rpcj1cXFwiYm90dG9tbGVmdFxcXCJdKTo6YmVmb3JlLFxcbiAgICA6aG9zdChbZGlyPVxcXCJib3R0b21sZWZ0XFxcIl0pOjphZnRlciB7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgdG9wOiAxMDAlO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMjBweCk7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW2Rpcj1cXFwiYm90dG9tbGVmdFxcXCJdKTo6YWZ0ZXIge1xcbiAgICAgICAgbGVmdDogMTBweDtcXG4gICAgICAgIG1hcmdpbi10b3A6IC0xMnB4O1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogY3VycmVudENvbG9yO1xcbiAgICB9XFxuXFxuICAgIDpob3N0KFtkaXI9XFxcImJvdHRvbWxlZnRcXFwiXTpob3Zlcjpub3QoW3Nob3c9ZmFsc2VdKSk6OmJlZm9yZSxcXG4gICAgOmhvc3QoW2Rpcj1cXFwiYm90dG9tbGVmdFxcXCJdW3Nob3c9dHJ1ZV0pOjpiZWZvcmUsXFxuICAgIDpob3N0KFtkaXI9XFxcImJvdHRvbWxlZnRcXFwiXTpmb2N1cy13aXRoaW46bm90KFtzaG93PWZhbHNlXSkpOjpiZWZvcmUsXFxuICAgIDpob3N0KFtkaXI9XFxcImJvdHRvbWxlZnRcXFwiXTpob3Zlcjpub3QoW3Nob3c9ZmFsc2VdKSk6OmFmdGVyLFxcbiAgICA6aG9zdChbZGlyPVxcXCJib3R0b21sZWZ0XFxcIl1bc2hvdz10cnVlXSk6OmFmdGVyLFxcbiAgICA6aG9zdChbZGlyPVxcXCJib3R0b21sZWZ0XFxcIl06Zm9jdXMtd2l0aGluOm5vdChbc2hvdz1mYWxzZV0pKTo6YWZ0ZXIge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTBweCk7XFxuICAgIH1cXG5cXG4gICAgLyogYm90dG9tcmlnaHQgKi9cXG4gICAgOmhvc3QoW2Rpcj1cXFwiYm90dG9tcmlnaHRcXFwiXSk6OmJlZm9yZSxcXG4gICAgOmhvc3QoW2Rpcj1cXFwiYm90dG9tcmlnaHRcXFwiXSk6OmFmdGVyIHtcXG4gICAgICAgIHJpZ2h0OiAwO1xcbiAgICAgICAgdG9wOiAxMDAlO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMjBweCk7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW2Rpcj1cXFwiYm90dG9tcmlnaHRcXFwiXSk6OmFmdGVyIHtcXG4gICAgICAgIHJpZ2h0OiAxMHB4O1xcbiAgICAgICAgbWFyZ2luLXRvcDogLTEycHg7XFxuICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiBjdXJyZW50Q29sb3I7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW2Rpcj1cXFwiYm90dG9tcmlnaHRcXFwiXTpob3Zlcjpub3QoW3Nob3c9ZmFsc2VdKSk6OmJlZm9yZSxcXG4gICAgOmhvc3QoW2Rpcj1cXFwiYm90dG9tcmlnaHRcXFwiXVtzaG93PXRydWVdKTo6YmVmb3JlLFxcbiAgICA6aG9zdChbZGlyPVxcXCJib3R0b21yaWdodFxcXCJdOmZvY3VzLXdpdGhpbjpub3QoW3Nob3c9ZmFsc2VdKSk6OmJlZm9yZSxcXG4gICAgOmhvc3QoW2Rpcj1cXFwiYm90dG9tcmlnaHRcXFwiXTpob3Zlcjpub3QoW3Nob3c9ZmFsc2VdKSk6OmFmdGVyLFxcbiAgICA6aG9zdChbZGlyPVxcXCJib3R0b21yaWdodFxcXCJdW3Nob3c9dHJ1ZV0pOjphZnRlcixcXG4gICAgOmhvc3QoW2Rpcj1cXFwiYm90dG9tcmlnaHRcXFwiXTpmb2N1cy13aXRoaW46bm90KFtzaG93PWZhbHNlXSkpOjphZnRlciB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxMHB4KTtcXG4gICAgfVxcblxcbiAgICAvKiBsZWZ0dG9wICovXFxuICAgIDpob3N0KFtkaXI9XFxcImxlZnR0b3BcXFwiXSk6OmJlZm9yZSxcXG4gICAgOmhvc3QoW2Rpcj1cXFwibGVmdHRvcFxcXCJdKTo6YWZ0ZXIge1xcbiAgICAgICAgcmlnaHQ6IDEwMCU7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjBweCwgMCk7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW2Rpcj1cXFwibGVmdHRvcFxcXCJdKTphZnRlciB7XFxuICAgICAgICB0b3A6IDEwcHg7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IC0xMnB4O1xcbiAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IGN1cnJlbnRDb2xvcjtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbZGlyPVxcXCJsZWZ0dG9wXFxcIl06aG92ZXI6bm90KFtzaG93PWZhbHNlXSkpOjpiZWZvcmUsXFxuICAgIDpob3N0KFtkaXI9XFxcImxlZnR0b3BcXFwiXVtzaG93PXRydWVdKTo6YmVmb3JlLFxcbiAgICA6aG9zdChbZGlyPVxcXCJsZWZ0dG9wXFxcIl06Zm9jdXMtd2l0aGluOm5vdChbc2hvdz1mYWxzZV0pKTo6YmVmb3JlLFxcbiAgICA6aG9zdChbZGlyPVxcXCJsZWZ0dG9wXFxcIl06aG92ZXI6bm90KFtzaG93PWZhbHNlXSkpOjphZnRlcixcXG4gICAgOmhvc3QoW2Rpcj1cXFwibGVmdHRvcFxcXCJdW3Nob3c9dHJ1ZV0pOjphZnRlcixcXG4gICAgOmhvc3QoW2Rpcj1cXFwibGVmdHRvcFxcXCJdOmZvY3VzLXdpdGhpbjpub3QoW3Nob3c9ZmFsc2VdKSk6OmFmdGVyIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMHB4LCAwKTtcXG4gICAgfVxcblxcbiAgICAvKiBsZWZ0Ym90dG9tICovXFxuICAgIDpob3N0KFtkaXI9XFxcImxlZnRib3R0b21cXFwiXSk6OmJlZm9yZSxcXG4gICAgOmhvc3QoW2Rpcj1cXFwibGVmdGJvdHRvbVxcXCJdKTo6YWZ0ZXIge1xcbiAgICAgICAgcmlnaHQ6IDEwMCU7XFxuICAgICAgICBib3R0b206IDA7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjBweCwgMCk7XFxuICAgIH1cXG5cXG4gICAgOmhvc3QoW2Rpcj1cXFwibGVmdGJvdHRvbVxcXCJdKTphZnRlciB7XFxuICAgICAgICBib3R0b206IDEwcHg7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IC0xMnB4O1xcbiAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IGN1cnJlbnRDb2xvcjtcXG4gICAgfVxcblxcbiAgICA6aG9zdChbZGlyPVxcXCJsZWZ0Ym90dG9tXFxcIl06aG92ZXI6bm90KFtzaG93PWZhbHNlXSkpOjpiZWZvcmUsXFxuICAgIDpob3N0KFtkaXI9XFxcImxlZnRib3R0b21cXFwiXVtzaG93PXRydWVdKTo6YmVmb3JlLFxcbiAgICA6aG9zdChbZGlyPVxcXCJsZWZ0Ym90dG9tXFxcIl06Zm9jdXMtd2l0aGluOm5vdChbc2hvdz1mYWxzZV0pKTo6YmVmb3JlLFxcbiAgICA6aG9zdChbZGlyPVxcXCJsZWZ0Ym90dG9tXFxcIl06aG92ZXI6bm90KFtzaG93PWZhbHNlXSkpOjphZnRlcixcXG4gICAgOmhvc3QoW2Rpcj1cXFwibGVmdGJvdHRvbVxcXCJdW3Nob3c9dHJ1ZV0pOjphZnRlcixcXG4gICAgOmhvc3QoW2Rpcj1cXFwibGVmdGJvdHRvbVxcXCJdOmZvY3VzLXdpdGhpbjpub3QoW3Nob3c9ZmFsc2VdKSk6OmFmdGVyIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMHB4LCAwKTtcXG4gICAgfVxcblxcbiAgICAvKiBzdWNjZXNzICovXFxuICAgIDpob3N0KFt0eXBlPVxcXCJzdWNjZXNzXFxcIl0pIHtcXG4gICAgICAgIC0tY29sb3I6IHZhcigtLXN1Y2Nlc3NDb2xvciwgIzUyYzQxYSk7XFxuICAgIH1cXG5cXG4gICAgLyogZXJyb3IgKi9cXG4gICAgOmhvc3QoW3R5cGU9XFxcImVycm9yXFxcIl0pIHtcXG4gICAgICAgIC0tY29sb3I6IHZhcigtLWVycm9yQ29sb3IsICNmNDYxNWMpO1xcbiAgICB9XFxuXFxuICAgIC8qIHdhcm5pbmcgKi9cXG4gICAgOmhvc3QoW3R5cGU9XFxcIndhcm5pbmdcXFwiXSkge1xcbiAgICAgICAgLS1jb2xvcjogdmFyKC0td2FyaW5nQ29sb3IsICNmYWFkMTQpO1xcbiAgICB9XFxuXFxuICAgIHNsb3Qge1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcXG4gICAgfVxcbjwvc3R5bGU+XFxuPHNsb3Q+PC9zbG90PlwiOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vY29tcG9uZW50cy9hd2MtYnV0dG9uL2F3Yy1idXR0b24nO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvYXdjLXNsaWRlci9hd2Mtc2xpZGVyJztcbmltcG9ydCAnLi9jb21wb25lbnRzL2F3Yy1kcm9wZG93bi9hd2MtZHJvcGRvd24nO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvYXdjLWxvYWRpbmcvYXdjLWxvYWRpbmcnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvYXdjLXRhYnMvYXdjLXRhYnMnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvYXdjLXN3aXRjaC9hd2Mtc3dpdGNoJztcbmltcG9ydCAnLi9jb21wb25lbnRzL2F3Yy1jaGVja2JveC9hd2MtY2hlY2tib3gnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvYXdjLXJhZGlvL2F3Yy1yYWRpbyc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9hd2MtdG9vbHRpcC9hd2MtdG9vbHRpcCc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9hd2MtaWNvbi9hd2MtaWNvbic7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9hd2MtaW5wdXQvYXdjLWlucHV0JztcbmltcG9ydCAnLi9jb21wb25lbnRzL2F3Yy10ZXh0YXJlYS9hd2MtdGV4dGFyZWEnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvYXdjLWltZy9hd2MtaW1nJztcbmltcG9ydCAnLi9jb21wb25lbnRzL2F3Yy1yYXRlL2F3Yy1yYXRlJztcbmltcG9ydCAnLi9jb21wb25lbnRzL2F3Yy1wb3BvdmVyL2F3Yy1wb3BvdmVyJztcbmltcG9ydCAnLi9jb21wb25lbnRzL2F3Yy1mb3JtL2F3Yy1mb3JtJztcbmltcG9ydCAnLi9jb21wb25lbnRzL2F3Yy1wYWdpbmF0aW9uL2F3Yy1wYWdpbmF0aW9uJztcbmltcG9ydCBBd2NEaWFsb2cgZnJvbSAnLi9jb21wb25lbnRzL2F3Yy1kaWFsb2cvYXdjLWRpYWxvZyc7XG5pbXBvcnQgQXdjTWVzc2FnZSBmcm9tICcuL2NvbXBvbmVudHMvYXdjLW1lc3NhZ2UvYXdjLW1lc3NhZ2UnO1xud2luZG93LkF3Y0RpYWxvZyA9IEF3Y0RpYWxvZztcbndpbmRvdy5Bd2NNZXNzYWdlID0gQXdjTWVzc2FnZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==