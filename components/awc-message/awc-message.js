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
