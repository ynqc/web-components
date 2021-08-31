import html from './awc-form-item.html';

export default class AwcFormItem extends HTMLElement {
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
		shadowRoot.innerHTML = html;
    }
}

if (!customElements.get('awc-form-item')) {
	customElements.define('awc-form-item', AwcFormItem);
}