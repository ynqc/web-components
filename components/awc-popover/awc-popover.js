import '../awc-button/awc-button';
import AwcPopBody from './awc-popbody';
import html from './awc-popover.html';

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
				this.popBodyEl = new AwcPopBody(this.type);
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
		shadowRoot.innerHTML = html;
	}
}

if (!customElements.get('awc-popover')) {
	customElements.define('awc-popover', AwcPopover)
}
