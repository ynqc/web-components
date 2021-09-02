"use strict";

import html from './awc-tab.html';

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
        shadowRoot.innerHTML = html;
    }
}

if (!customElements.get('awc-tab')) {
    customElements.define('awc-tab', AwcTab);
}
