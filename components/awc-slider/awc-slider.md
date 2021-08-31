# awc-slider

## Usage

```html
<!-- import -->
<script type="module">
    import './node_modules/web-components-js/components/awc-slider.js';
</script>
<!-- Use -->
<awc-slider></awc-slider>
```

## Default value `defaultvalue`

```html
<awc-slider></awc-slider>
<awc-slider defaultvalue="30"></awc-slider>
<awc-slider defaultvalue="50"></awc-slider>
```

## Disabled `disabled`

```html
<awc-slider defaultvalue="50" disabled></awc-slider>
<awc-switch checked onchange="this.previousElementSibling.disabled = this.checked;"></awc-switch>
```

## Showtips `showtips`

```html
<awc-slider defaultvalue="50" showtips></awc-slider>
```

## prefix `prefix`suffix`suffix`

In the case of `showtips`, if you add `prefix` or `suffix`, you can add a prefix (suffix) when displaying `value`. Such as units, percentages.

```html
<awc-slider defaultvalue="30" showtips prefix="$"></awc-slider>
<awc-slider defaultvalue="50" showtips prefix="value:"></awc-slider>
<awc-slider defaultvalue="30" showtips suffix="%"></awc-slider>
<awc-slider defaultvalue="50" showtips suffix="km"></awc-slider>
```


## Min`min`、Max`max`、Step`step`

Sets or returns the values of the `min` and `max` attributes of the slider bar. The default values are `0` and `100` respectively.

Sets or returns the value of the `step` attribute of the slider bar. The default value is `1`.

```html
<awc-slider defaultvalue="50" min="0" max="100" step="10" id="awc-slider-step" showtips></awc-slider>
<awc-input style="width:100px" label="min" type="number" min="-100" max="100" onchange="document.getElementById('awc-slider-step').min=this.value;" defaultvalue="0"></awc-input>
<awc-input style="width:100px" label="max" type="number" min="1" max="300" onchange="document.getElementById('awc-slider-step').max=this.value;" defaultvalue="100"></awc-input>
<awc-input style="width:100px" label="step" type="number" min="1" max="50" onchange="document.getElementById('awc-slider-step').step=this.value;" defaultvalue="10"></awc-input>
```

## vertical`vertical`

```html
<awc-slider vertical showtips defaultvalue="50"></awc-slider>
```

```css
slider{
    width:50px;
    height:150px;
}
```
```html
<awc-slider style="width:50px;height:150px;" vertical showtips defaultvalue="10"></awc-slider>
<awc-slider style="width:50px;height:150px;" vertical showtips defaultvalue="50"></awc-slider>
```

## Value `value`

```html
<awc-slider showtips></awc-slider>
<awc-button type="primary" onclick="this.previousElementSibling.value=50">set value 50</awc-button>
<awc-button type="primary"
    onclick="AwcMessage.info('value: '+this.previousElementSibling.previousElementSibling.value)">show value
</awc-button>
```

## Event `event`

### onchange
```html
<awc-slider onchange="AwcMessage.info('value: '+ this.value)"></awc-slider>
```

### oninput

```html
<awc-slider oninput="fn(event)"></awc-slider>
```

## Function `function`

### focus

Used to actively focus `focus`, after focusing, it can respond to keyboard events and support arrow keys.

The mouse wheel operation is now supported, and the scroll rate is `5` times that of `step`, that is to say, if `step` is `1`, then each scroll will increase (or decrease) `5`

```html
<awc-slider onfocus="AwcMessage.info('focus')" onchange="AwcMessage.info(this.value)"></awc-slider>
<awc-button type="primary" onclick="this.previousElementSibling.focus()">Focus</awc-button>
```

```js
slider.focus();
```
