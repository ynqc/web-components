# awc-checkbox

## Usage

```html
<!-- import -->
<script type="module">
    import './node_modules/web-components-js/components/awc-checkbox.js';
</script>
<!-- Use -->
<awc-checkbox>checkbox</awc-checkbox>
```

## Disabled `disabled`

```html
<awc-checkbox disabled>checkbox</awc-checkbox>
<awc-switch checked onchange="this.previousElementSibling.disabled = this.checked;"></awc-switch>
```

## Value `value`

```html
<awc-checkbox value="checkbox">checkbox</awc-checkbox>
<awc-button type="primary" onclick="AwcMessage.info(this.previousElementSibling.value)">get value</awc-button>
```

## Check `checked`

```html
<awc-checkbox checked>checkbox</awc-checkbox>
<awc-switch checked onchange="this.previousElementSibling.checked = this.checked;"></awc-switch>
```
#### get checked value
```html
<awc-checkbox name="lang" checked>Html</awc-checkbox>
<awc-checkbox name="lang">Css</awc-checkbox>
<awc-checkbox name="lang">Javascript</awc-checkbox>
<awc-checkbox name="lang">Python</awc-checkbox>
<awc-checkbox name="lang">Php</awc-checkbox>
<awc-checkbox name="lang">Dart</awc-checkbox>
<awc-checkbox name="lang">Swift</awc-checkbox>
<awc-button onclick="AwcMessage.info(Array.from(document.querySelectorAll('awc-checkbox[name=lang][checked]')).map(el=>el.textContent))">
    get checked value</awc-button>
```

## Indeterminate `indeterminate`

```html
<awc-checkbox>indeterminate</awc-checkbox>
<awc-button type="primary" onclick="this.previousElementSibling.indeterminate='true'">设置indeterminate</awc-button>
```

## Event `event`

### onchange

```html
<awc-checkbox onchange="AwcMessage.info('checked:'+this.checked)">checkbox</awc-checkbox>
```

### onfocus、onblur

```html
<awc-checkbox onfocus="AwcMessage.info('checked:'+this.checked)" onblur="AwcMessage.info('checked:'+this.checked)">checkbox</awc-checkbox>
```

## Function `function`

### focus

```html
<awc-checkbox onfocus="AwcMessage.info('focus')" onchange="AwcMessage.info('checked:'+this.checked)">checkbox</awc-checkbox>
<awc-button type="primary" onclick="this.previousElementSibling.focus()">Focus</awc-button>
```