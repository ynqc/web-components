"use strict";

import '../awc-icon/awc-icon';
import html from './awc-img.html';

export default class AwcImg extends HTMLElement {
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

	set defaultsrc(value) {
		this.setAttribute('defaultsrc', value);
	}

    get lazy() {
		return this.getAttribute('lazy') !== null;
	}

	set lazy(value) {
		this.setAttribute('lazy', value);
	}

	get alt() {
		return this.getAttribute('alt') || 'error';
	}

	set alt(value) {
		this.setAttribute('alt', value);
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
		shadowRoot.innerHTML = html;
    }
}

if (!customElements.get('awc-img')) {
	customElements.define('awc-img', AwcImg);
}
