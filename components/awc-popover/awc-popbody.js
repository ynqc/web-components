"use strict";

import '../awc-button/awc-button';
import html from './awc-popbody.html';

export default class AwcPopBody extends HTMLElement {
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
        shadowRoot.innerHTML = html;
    }
}

if (!customElements.get('awc-popbody')) {
    customElements.define('awc-popbody', AwcPopBody);
}