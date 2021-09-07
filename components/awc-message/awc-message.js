"use strict";

import '../awc-icon/awc-icon';
import '../awc-loading/awc-loading';
import html from './awc-message.html';

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
				color = 'var(--info-color, #1890ff)';
				break
			case 'success':
				path = 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m193.5 301.7l-210.6 292c-12.7 17.7-39 17.7-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z';
				color = 'var(--success-color,#52c41a)';
				break
			case 'error':
				path = 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m165.4 618.2l-66-0.3L512 563.4l-99.3 118.4-66.1 0.3c-4.4 0-8-3.5-8-8 0-1.9 0.7-3.7 1.9-5.2l130.1-155L340.5 359c-1.2-1.5-1.9-3.3-1.9-5.2 0-4.4 3.6-8 8-8l66.1 0.3L512 464.6l99.3-118.4 66-0.3c4.4 0 8 3.5 8 8 0 1.9-0.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z';
				color = 'var(--error-color,#f4615c)';
				break;
			case 'warning':
				path = 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296z m32 440c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z';
				color = 'var(--waring-color,#faad14)';
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
		shadowRoot.innerHTML = html;
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

export default {
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
}
