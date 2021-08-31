# awc-dropdown

## Usage

```html
<!-- import -->
<script type="module">
    import './node_modules/web-components-js/components/awc-dropdown.js';
</script>
<!-- Use -->
<awc-dropdown>
    <awc-option value="1">Option1</awc-option>
    <awc-option value="2">Option2</awc-option>
    <awc-option value="3">Option3</awc-option>
</awc-dropdown>
```

## Type `type`

```html
<awc-dropdown>
    <awc-option value="1">Option1</awc-option>
    <awc-option value="2">Option2</awc-option>
    <awc-option value="3">Option3</awc-option>
</awc-dropdown>
<awc-dropdown type="text">
    <awc-option value="1">Option1</awc-option>
    <awc-option value="2">Option2</awc-option>
    <awc-option value="3">Option3</awc-option>
</awc-dropdown>
<awc-dropdown type="primary">
    <awc-option value="1">Option1</awc-option>
    <awc-option value="2">Option2</awc-option>
    <awc-option value="3">Option3</awc-option>
</awc-dropdown>
<awc-dropdown type="dashed">
    <awc-option value="1">Option1</awc-option>
    <awc-option value="2">Option2</awc-option>
    <awc-option value="3">Option3</awc-option>
</awc-dropdown>
```

## Block `block`

```html
<awc-dropdown block>
    <awc-option value="1">Option1</awc-option>
    <awc-option value="2">Option2</awc-option>
    <awc-option value="3">Option3</awc-option>
</awc-dropdown>
```

## Default value `defaultvalue`

```html
<awc-dropdown defaultvalue="2">
    <awc-option value="1">Option1</awc-option>
    <awc-option value="2">Option2</awc-option>
    <awc-option value="3">Option3</awc-option>
</awc-dropdown>
```

## Placeholder `placeholder`

```html
<awc-dropdown placeholder="Select a item">
    <awc-option value="1">Option1</awc-option>
    <awc-option value="2">Option2</awc-option>
    <awc-option value="3">Option3</awc-option>
</awc-dropdown>
```

## Disabled `disabled`

```html
<awc-dropdown disabled>
    <awc-option value="1">Option1</awc-option>
    <awc-option value="2">Option2</awc-option>
    <awc-option value="3">Option3</awc-option>
</awc-dropdown>
<awc-switch checked onchange="this.previousElementSibling.disabled = this.checked;"></awc-switch>
```

Disabeld option item

```html
<awc-dropdown>
    <awc-option value="1">Option1</awc-option>
    <awc-option value="2" disabled>Option2</awc-option>
    <awc-option value="3">Option3</awc-option>
</awc-dropdown>
```

## Search `search`


The filter condition is the `key` attribute in `awc-option` (not case sensitive).

```html
<awc-dropdown search>
    <awc-option value="beijing" key="beijing-bj">BEIJING</awc-option>
    <awc-option value="shnaghai" key="shnaghai-sh">SHANGHAI</awc-option>
    <awc-option value="shenzhen" key="shenzhen-sz">SHENZHEN</awc-option>
    <awc-option value="chongqing" key="chongqing-cq">CHONGQING</awc-option>
</awc-dropdown>
```

## Custom size

```html
<style>
.awc-dropdown{
    width:120px;
    height:30px;
}
</style>
<awc-dropdown class="awc-dropdown">
    <awc-option value="1">Option1</awc-option>
    <awc-option value="2">Option2</awc-option>
    <awc-option value="3">Option3</awc-option>
</awc-dropdown>
```

## Event `event`

### onchange

```html
<awc-dropdown onchange="onChange(event)" onfocus="onFocus(event)">
    <awc-option value="1">Option1</awc-option>
    <awc-option value="2">Option2</awc-option>
    <awc-option value="3">Option3</awc-option>
</awc-dropdown>
```

### onfocus

Same as[`awc-button`](awc-button.md?id=onfocus、onblur)

## Function `function`

### focus

```html
<awc-dropdown onfocus="onFocus(event)" onblur="onBlur(event)" onchange="onChange(event)">
    <awc-option value="1">Option1</awc-option>
    <awc-option value="2">Option2</awc-option>
    <awc-option value="3">Option3</awc-option>
</awc-dropdown>
<awc-button type="primary" onclick="this.previousElementSibling.focus()">Set Focus</awc-button>
```

```js
select.focus();
```

### reset
```html
<awc-dropdown defaultvalue="2">
    <awc-option value="1">Option1</awc-option>
    <awc-option value="2">Option2</awc-option>
    <awc-option value="3">Option3</awc-option>
</awc-dropdown>
<awc-button type="primary" onclick="this.previousElementSibling.reset()">reset</awc-button>
```
```js
select.reset();
```

Or

```js
this.value = this.defaultvalue;
```

## Other

In addition to wrapping `awc-option`, `awc-dropdown` can also wrap other tags, such as `a` link

```html
<style>
.awc-link{
    display:block;
    padding:0 .8em;
}
</style>
<awc-dropdown>
    <awc-option value="1">Option1</awc-option>
    <awc-option value="2">Option2</awc-option>
    <awc-option value="3">Option3</awc-option>
    <a class="awc-link" href="#">link</a>
</awc-dropdown>
```