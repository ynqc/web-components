# awc-button

## Usage

```html
<!-- Import -->
<script type="module">
    import './node_modules/web-components-js/components/awc-button.js';
</script>
<!-- Use -->
<awc-button>button</awc-button>
```

## Type `type`

`primary`，`dashed`，`text` and `default`。

```html
<awc-button type="primary" id="btn">primary</awc-button>
<awc-button type="dashed">dashed</awc-button>
<awc-button type="text">text</awc-button>
<awc-button>default</awc-button>
```

## Disabled `disabled`

```html
<awc-button disabled type="primary">primary</awc-button>
<awc-button disabled type="dashed">dashed</awc-button>
<awc-button disabled type="text">text</awc-button>
<awc-button disabled >default</awc-button>
```

## Loading `loading`
```html
<awc-button type="primary" loading>loading</awc-button>
```

## Icon `icon`
```html
<awc-button type="primary" icon="heart">like</awc-button>
<awc-button type="dashed" icon="search">search</awc-button>
<awc-button>heart  <awc-icon name="heart"></awc-icon></awc-button>
<awc-button>right  <awc-icon name="right"></awc-icon></awc-button>
```

## Block `block`

`block` - Will make the button fit its parent width

```html
<awc-button type="primary" block>primary</awc-button>
<awc-button type="dashed" block>dashed</awc-button>
<awc-button type="text" block>text</awc-button>
<awc-button block>default</awc-button>
```
Of course, you can set it through `CSS`

```css
awc-button{
    diplay:flex;
}
```


## Event `event`

### onfocus、onblur

`focus`、`blur`。

```html
<awc-button onfocus="onFocus(event)" onblur="onBlur(event)">primary</awc-button>
```

```js
btn.onfocus = (ev) => {
    console.log(ev)
}

btn.addEventListener('focus', (ev) => {
    console.log(ev)
})
```

### other event

`onclick`、`onmousedown`
```html
<awc-button onclick="onClick(event)" onmousedown="onMousedown(event)">primary</awc-button>
```

## Function `function`

### focus
```html
<awc-button onclick="onClick(event)" onfocus="onFocus(event)" onblur="onBlur(event)">primary</awc-button>
<awc-button type="primary" onclick="this.previousElementSibling.focus()">Focus</awc-button>
```
```js
btn.focus();
```

## CSS
```html
<style>
.button{
    font-size:20px;
    border-radius:50%;
    height:100px;
    width:100px;
}
</style>
<awc-button type="primary" class="button">primary</awc-button>
```

You can also control the button size by modifying `font-size`

```html
<style>
.button {
    font-size: 20px;
}
</style>
<awc-button type="primary" class="button">primary</awc-button>
```