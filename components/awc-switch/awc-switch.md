# awc-switch

## Usage

```html
<!-- import -->
<script type="module">
    import './node_modules/web-components-js/components/awc-switch.js';
</script>
<!-- use -->
<awc-switch></awc-switch>
```

## Disabled`disabled`

```html
<awc-switch disabled></awc-switch>
<awc-button type="primary" onclick="this.previousElementSibling.disabled=!this.previousElementSibling.disabled">Change DIsabled</awc-button>
```

## Checked `checked`

```html
<awc-switch checked></awc-switch>
<awc-button type="primary" onclick="this.previousElementSibling.checked=!this.previousElementSibling.checked">Change Check</awc-button>
```

## CSS

```html
<style>
awc-switch{
    font-size:20px;
}
</style>
<awc-switch checked></awc-switch>
<awc-slider min="10" max="50" defaultvalue="16" suffix="px" showtips oninput="this.previousElementSibling.style.fontSize=this.value+'px'" ></awc-slider>
```

## Event `event`

### onchange

```html
<awc-switch onchange="AwcMessage.info('checked:'+this.checked)"></awc-switch>
```

## Function `function`

### focus

Used to actively focus `focus`, after focusing, it can respond to keyboard events, `Enter` toggle switch.

```html
<awc-switch onfocus="AwcMessage.info('focus')" onchange="AwcMessage.info('checked:'+this.checked)"></awc-switch>
<awc-button type="primary" onclick="this.previousElementSibling.focus()">Focus</awc-button>
```

```js
switch.focus();
```