"use strict"
import './cronstrue.min.js';
import CronParser from './cron-parser/parser.js';
import { checkCron } from './cron-valid.js';

export default class AwcScheduler extends HTMLElement {
    constructor() {
        super();
        this._render();
        this.scheduler = {
            second: '',
            minute: '',
            hour: '',
            dayofmonth: '',
            month: '',
            week: '',
            year: ''
        }
    }

    // TODO
    get cron () {
        return this.getAttribute('cron');
    }

    set cron (value) {
        this.setAttribute('cron', value);
    }

    connectedCallback () {
        const inputsEl = this.shadowRoot.querySelectorAll('.input');
        this.schedulerEl = this.shadowRoot.querySelector('#scheduler');
        inputsEl.forEach((input) => {
            input.addEventListener('change', (event) => {
                this.scheduler[input.name] = input.value;
                const error = input.getAttribute("error");
                if (error === "true") {
                    this.schedulerEl.setAttribute("format", "error");
                    this.schedulerEl.innerHTML = "Input error";
                } else {
                    this._convertCron();
                }
            });
            input.addEventListener('input', (event) => {
                const value = input.value.toUpperCase().trim();
                const valid = checkCron(input.name, value);
                input.setAttribute("error", !valid)
            })
        });
        this._showCronNext();
    }

    _emitChange () {
        this.dispatchEvent(
            new CustomEvent('change', {
                detail: {
                    scheduler: this.scheduler,
                    cron: this.schedulerEl.innerHTML
                },
                bubbles: true
            })
        );
    }

    _showCronNext (cron) {
        try {
            var interval = CronParser.parseExpression('*/22 * * * *');

            while (true) {
                try {
                    var obj = interval.next();
                    console.log('value:', obj.value.toString(), 'done:', obj.done);
                } catch (e) {
                    console.log('Error: ' + e);
                    break;
                }
            }
        } catch (err) {
            console.log('Error: ' + err.message);
        }
    }

    _convertCron () {
        let schedulerStr = '';
        const week = this.scheduler.week;
        if (Number(week)) {
            this.scheduler.week = week - 1;
        }
        const cron = Object.values(this.scheduler).join(" ")
        try {
            const str = cronstrue.toString(cron);
            schedulerStr = str;
            this.schedulerEl.setAttribute("format", "correct");
            this._showCronNext(cron);
        } catch (e) {
            schedulerStr = e;
            this.schedulerEl.setAttribute("format", "error");
        }
        this.schedulerEl.innerHTML = schedulerStr;
        this._emitChange();
    }

    _render () {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                }
                .item {
                    display: flex;
                    align-items: center;
                    margin: 10px
                }
                .item-span {
                    width: 120px;
                }
                .input {
                    // font-size: 200%;
                    /* width: 100%; */
                    border: 1px solid #cccccc;
                    border-radius: 0.5em;
                    padding: 0px 16px;
                    height: 20px;
                }
                .item-label {
                    color: #d3d3d3;
                    margin: 0px 12px;
                }
                .explanation {
                    font-size: 12px;
                    color: #d3d3d3;
                }
                ul {
                    list-style-type: none;
                }

                #scheduler {
                    font-weight: bold;
                }
                #scheduler[format="error"] {
                    color: red
                }
                input[error="true"] {
                    border-color: red !important;
                }
                input:focus{
                    outline: none;
                }
                input[error="true"]:focus {
                    border-color: red !important;
                }
            </style>
            <div>
                <div id="scheduler"></div>
                <div class="item">
                    <span class="item-span">Second</span>
                    <input class="input" name="second" />
                    <label class="item-label">Support: 0-59,-*/</label>
                </div>
                <div class="item">
                    <span class="item-span">Minute</span>
                    <input class="input" name="minute" />
                    <label class="item-label">Support: 0-59,-*/</label>
                </div>
                <div class="item">
                    <span class="item-span">Hour</span>
                    <input class="input" name="hour" />
                    <label class="item-label">Support: 0-23,-*/</label>
                </div>
                <div class="item">
                    <span class="item-span">Day Of Month</span>
                    <input class="input" name="dayofmonth" />
                    <label class="item-label">Support: 1-31,-*?/LW</label>
                </div>
                <div class="item">
                    <span class="item-span">Month</span>
                    <input class="input" name="month" />
                    <label class="item-label">Support: 1-12/JAN-DEC,-*/</label>
                </div>
                <div class="item">
                    <span class="item-span">Week</span>
                    <input class="input" name="week" />
                    <label class="item-label">Support: 1-7/SUN-SAT,-*?/L#</label>
                </div>
                <div class="item">
                    <span class="item-span">Year</span>
                    <input class="input" name="year" />
                    <label class="item-label">Support: 1970-2099,-*/</label>
                </div>
            </div>
        `;
    }
}

if (!customElements.get("awc-scheduler")) {
    customElements.define("awc-scheduler", AwcScheduler)
}