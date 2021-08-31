# awc-rate

## Usage

```html
<!-- Import -->
<script type="module">
    import './node_modules/web-components-js/components/awc-rate.js';
</script>
<!-- use -->
<awc-rate></awc-rate>
```

## default value `defaultvalue`

You can assign an initial value `defaultvalue` to the score, which is an integer between `1~5`.

```html
<awc-rate defaultvalue="2"></awc-rate>
```

## Value `value`

```html

<awc-rate defaultvalue="2"></awc-rate>
<awc-button type="primary" onclick="this.previousElementSibling.value=3">set value为3</awc-button>
<awc-button type="primary"
    onclick="AwcMessage.info('value: '+this.previousElementSibling.previousElementSibling.value)">show value
</awc-button>
```

## Disabled `disabled`

```html
<awc-rate disabled defaultvalue="2"></awc-rate>
<awc-switch checked onchange="this.previousElementSibling.disabled = this.checked;"></awc-switch>
```

## Icon `icon`

The default icon is `star-fill`, other icons can be selected.

```html
<awc-rate defaultvalue="2" icon="star"></awc-rate>
<awc-rate defaultvalue="2" icon="like-fill"></awc-rate>
<awc-rate defaultvalue="2" icon="like"></awc-rate>
```

## Size `size`

```html
<awc-rate defaultvalue="2" size="20"></awc-rate>
<awc-rate defaultvalue="2" size="25"></awc-rate>
<awc-rate defaultvalue="2" size="30"></awc-rate>
<awc-rate defaultvalue="2" size="35"></awc-rate>
```

## CSS

```css
awc-rate{
    font-size:30px;
}
```

## Color `color`

```html
<awc-rate defaultvalue="2" color="orangered"></awc-rate>
<awc-rate defaultvalue="2" color="#1E90FF"></awc-rate>
<awc-rate defaultvalue="2" color="#F44336"></awc-rate>
<awc-rate defaultvalue="2" color="#3F51B5"></awc-rate>
```
The default unselected color can be controlled by `css` (default is `#eee`)

```html
<style>
.rate-color{
    color:yellow
}
</style>
<awc-rate defaultvalue="2" color="#F44336" class="rate-color"></awc-rate>
```

## Tooltip `tips`
```html
<awc-rate defaultvalue="1" tips="terrible,bad,normal,good,wonderful"></awc-rate>
```

## Event `event`

### onchange
```html
<awc-rate defaultvalue="1" onchange="AwcMessage.info('value: '+this.value)"></awc-rate>
```

## Function `function`

### focus

Used to actively focus `focus`, after focusing, it can respond to keyboard events and support arrow keys.
```html
<awc-rate onfocus="AwcMessage.info('focus')" onblur="AwcMessage.info('blur')" onchange="AwcMessage.info(this.value)"></awc-rate>
<awc-button type="primary" onclick="this.previousElementSibling.focus()">Focus</awc-button>
```
```js
rate.focus();
```