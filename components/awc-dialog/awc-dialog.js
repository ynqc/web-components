"use strict";

import '../awc-button/awc-button.js'
import html from './awc-dialog.html';

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
		shadowRoot.innerHTML = html;
	}
}

if (!customElements.get('awc-dialog')) {
	customElements.define('awc-dialog', AwcDialog);
}

export default {
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
}
