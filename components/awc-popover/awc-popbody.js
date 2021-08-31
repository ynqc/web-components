import '../awc-button/awc-button';
import html from './awc-popbody.html';

export default class AwcPopBody extends HTMLElement {
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
            ${html}
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