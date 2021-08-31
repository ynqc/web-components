import '../awc-tooltip/awc-tooltip.js'
import html from './awc-slider.html';

export default class AwcSlider extends HTMLElement {
	static get observedAttributes() {
		return ['min', 'max', 'step', 'disabled', 'showtips', 'suffix'];
	}

	constructor() {
		super();
		this._render();
	}

	get value() {
		return Number(this.sliderEl.value);
	}

	set value(value) {
		this.sliderEl.value = value;
		this.sliderTooltipEl.style.setProperty(
			'--percent',
			(this.value - this.min) / (this.max - this.min)
		);
		if (this.showtips && !this.disabled) {
			this.sliderTooltipEl.tips = this.value;
		} else {
			this.sliderTooltipEl.tips = '';
		}
	}

	get suffix() {
		return this.getAttribute('suffix') || '';
	}

	set suffix(value) {
		this.setAttribute('suffix', value);
	}

	get prefix() {
		return this.getAttribute('prefix') || '';
	}

	set prefix(value) {
		this.setAttribute('prefix', value);
	}

	get min() {
		return this.getAttribute('min') || 0;
	}

	set min(value) {
		this.setAttribute('min', value);
	}

	get max() {
		return this.getAttribute('max') || 100;
	}

	set max(value) {
		this.setAttribute('max', value);
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

	get showtips() {
		return this.getAttribute('showtips') !== null;
	}

	set showtips(value) {
		if (value === null || value === false) {
			this.removeAttribute('showtips');
		} else {
			this.setAttribute('showtips', '');
		}
	}

	get step() {
		return this.getAttribute('step') || 1;
	}

	set step(value) {
		this.setAttribute('step', value);
	}

	get defaultvalue() {
		return this.getAttribute('defaultvalue') || 0;
	}


	get vertical() {
		return this.getAttribute('vertical') !== null;
	}

	focus() {
		this.sliderEl.focus();
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (this.sliderEl && oldValue !== newValue && !this._oninput) {
			if (name == 'disabled') {
				if (newValue !== null) {
					this.sliderEl.setAttribute('disabled', 'disabled');
				} else {
					this.sliderEl.removeAttribute('disabled');
				}
			} else {
				this.sliderEl[name] = newValue;
				this[name] = newValue;
				this.sliderTooltipEl.style.setProperty(
					'--percent',
					(this.value - this.min) / (this.max - this.min)
				);
				if (name === 'suffix') {
					this.sliderTooltipEl.suffix = newValue;
				}
			}
		}
	}

	connectedCallback() {
		this.sliderEl = this.shadowRoot.getElementById('slider');
		this.sliderEl.value = this.defaultvalue;
		this.sliderEl.min = this.min;
		this.sliderEl.max = this.max;
		this.sliderEl.step = this.step;
		if (this.disabled) {
			this.sliderEl.setAttribute('disabled', '');
		}
		this.sliderTooltipEl = this.shadowRoot.getElementById('slider-tooltip');
		this.sliderTooltipEl.dir = this.vertical ? 'right' : 'top';
		this.sliderTooltipEl.style = `--percent:${(this.defaultvalue - this.min) / (this.max - this.min)}`;
		this.sliderTooltipEl.tips = this.showtips && !this.disabled ? this.defaultvalue : '';
		this.sliderTooltipEl.suffix = this.suffix;
		this.sliderTooltipEl.prefix = this.prefix;

		if (this.vertical) {
			this.resizeObserver = new ResizeObserver((entries) => {
				for (let entry of entries) {
					const { height } = entry.contentRect;
					this.sliderTooltipEl.style.setProperty('--h', height + 'px');
				}
			});
			this.resizeObserver.observe(this);
		}
		this.sliderEl.addEventListener('input', (ev) => {
			this.value = this.sliderEl.value;
			this._oninput = true;
			ev.stopPropagation();
			this.dispatchEvent(
				new CustomEvent('input', {
					detail: {
						value: this.sliderEl.value,
					},
				})
			);
		});
		this.sliderEl.addEventListener('change', (ev) => {
			this.value = this.sliderEl.value;
			this._oninput = false;
			this.dispatchEvent(
				new CustomEvent('change', {
					detail: {
						value: this.sliderEl.value,
					},
				})
			);
		});
		this.addEventListener(
			'wheel',
			(ev) => {
				if (getComputedStyle(this.sliderEl).zIndex == 2) {
					ev.preventDefault();
					if (
						(ev.deltaY < 0 && !this.vertical) ||
						(ev.deltaY > 0 && this.vertical)
					) {
						this.value -= this.step * 5;
					} else {
						this.value += this.step * 5;
					}
					this.dispatchEvent(
						new CustomEvent('change', {
							detail: {
								value: this.value,
							},
						})
					);
				}
			},
			true
		)
	}

	disconnectedCallback() {
		if (this.vertical) {
			this.resizeObserver.unobserve(this);
		}
	}

	_render() {
		const shadowRoot = this.attachShadow({ mode: 'open' });
		shadowRoot.innerHTML = html;
	}
}

if (!customElements.get('awc-slider')) {
	customElements.define('awc-slider', AwcSlider);
}
