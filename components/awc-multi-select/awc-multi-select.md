# awc-multiselect

## Usage

```html
<!-- import -->
<script type="module">
    import './node_modules/web-components-js/components/awc-multiselect.js';
</script>
<!-- Use -->
<awc-multiselect placeholder="Select Value">
    <awc-option value="1" selected>Item 1</awc-option>
    <awc-option value="2">Item 2</awc-option>
    <awc-option value="3" selected>Item 3</awc-option>
    <awc-option value="4">Item 4</awc-option>
    <awc-option value="5" selected>Item 5</awc-option>
    <awc-option value="6">Item 6</awc-option>
    <awc-option value="7" selected>Itemdsfsdfafsd 7</awc-option>
</awc-multiselect>
```

## Disabled `disabled`

```html
<awc-multiselect placeholder="Select Value" disabled>
    <awc-option value="1" selected>Item 1</awc-option>
    <awc-option value="2">Item 2</awc-option>
    <awc-option value="3" selected>Item 3</awc-option>
    <awc-option value="4">Item 4</awc-option>
    <awc-option value="5" selected>Item 5</awc-option>
    <awc-option value="6">Item 6</awc-option>
    <awc-option value="7" selected>Itemdsfsdfafsd 7</awc-option>
</awc-multiselect>
```

## Search `search`

```html
<awc-multiselect placeholder="Select Value" search>
    <awc-option value="1">Item 1</awc-option>
    <awc-option value="2">Item 2</awc-option>
    <awc-option value="3">Item 3</awc-option>
    <awc-option value="4">Item 4</awc-option>
    <awc-option value="5">Item 5</awc-option>
    <awc-option value="6">Item 6</awc-option>
    <awc-option value="7">Itemdsfsdfafsd 7</awc-option>
</awc-multiselect>
```

## Event `event`

### onchange

```html
<awc-multiselect onchange="">checkbox</awc-multiselect>
```

### input - only set search

```html
<awc-multiselect oninput="">checkbox</awc-multiselect>
```

### onfocus、onblur

```html
<awc-multiselect onfocus="">checkbox</awc-multiselect>
```

## Function `function`

### focus

```html
<awc-multiselect onfocus="AwcMessage.info('focus')"></awc-multiselect>
<awc-button type="primary" onclick="this.previousElementSibling.focus()">Focus</awc-button>
```