# awc-radio

## Usage

```html
<!-- import -->
<script type="module">
    import './node_modules/web-components-js/components/awc-radio.js';
</script>
<!-- Use -->
<awc-radio>radio</awc-radio>
```

## Disabled `disabled`

```html
<awc-radio disabled>radio</awc-radio>
<awc-switch checked onchange="this.previousElementSibling.disabled = this.checked;"></awc-switch>
```

## Value `value`

```html
<awc-radio value="AAA">radio</awc-radio>
<awc-button type="primary" onclick="AwcMessage.info(this.previousElementSibling.value)">get value</awc-button>
```

## Checked `checked`

```html
<awc-radio>radio</awc-radio>
<awc-button type="primary" onclick="this.previousElementSibling.checked = true;">Checked</awc-button>
```

## Multi radio

```html
<awc-radio name="lib" checked>React</awc-radio>
<awc-radio name="lib">Vue</awc-radio>
<awc-radio name="lib">Angular</awc-radio>
<awc-radio name="lib">Other</awc-radio>
<awc-button type="primary"
    onclick="AwcMessage.info(document.querySelector('awc-radio[name=lib][checked]').value)">get value
</awc-button>
```

## Event`event`

### onchange

```html
<awc-radio onchange="AwcMessage.info('checked:'+this.checked)">radio</awc-radio>
```

## Function `function`

### focus

```html
<awc-radio onchange="AwcMessage.info('checked:'+this.checked)">radio</awc-radio>
<awc-button type="primary" onfocus="AwcMessage.info('focus')" onclick="this.previousElementSibling.focus()">Focus</awc-button>
```

```js
radio.focus();
```