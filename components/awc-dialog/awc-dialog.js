"use strict";

import '../awc-button/awc-button'
import '../awc-icon/awc-icon';
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
				this.dialogIconEl.path = this._typeMap(newValue).path;
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
		let path = '';
		let color = '';
		switch (type) {
			case 'info':
				path = 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272z m-32-344c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z';
				color = 'var(--infoColor, #1890ff)';
				break;
			case 'success':
				path = 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m193.5 301.7l-210.6 292c-12.7 17.7-39 17.7-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z';
				color = 'var(--successColor,#52c41a)';
				break;
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
			const { title, content, oktext, canceltext, ok, cancel } = config;
			dialog.title = title || 'Confirm';
			dialog.oktext = oktext || 'OK';
			dialog.canceltext = canceltext || 'Cancel';
			dialog.innerHTML = content || '';
			dialog.onsubmit = ok || null;
			dialog.oncancel = cancel || null;
		} else {
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
