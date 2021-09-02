"use strict";

import AwcInput from '../awc-input/awc-input';

class AwcTextarea extends AwcInput {
	constructor() {
		super({ multi: true })
	}
}

if (!customElements.get('awc-textarea')) {
	customElements.define('awc-textarea', AwcTextarea)
}
