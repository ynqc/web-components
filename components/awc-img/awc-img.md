# awc-img

## Usage

```html
<!-- import -->
<script type="module">
    import './node_modules/web-components-js/components/awc-img.js';
</script>
<!-- Use -->
<awc-img src="img.jpg"></awc-img>
```

## Link `src`

```html
<awc-img src="https://images.xxx.png"></awc-img>
```

When the image link fails to load, a placeholder will be displayed by default.

```html
<awc-img src="https://images.xxx.jpg"></awc-img>
```

You can set `background`, `font-size` and `color` to customize placeholders.

```html
<style>
.img-placeholder{
    background:#333;
    color:#f1f1f1;
    font-size:16px;
}
</style>
<awc-img src="https://images.xxx.jpg" class="img-placeholder"></awc-img>
```

## Defaultsrc `defaultsrc`

Default link. If there is no guarantee that `src` will be loaded successfully (usually external links), you can set a `defaultsrc` to handle the situation when `src` fails to load.

```html
<awc-img src="https://images.xxx.jpg" defaultsrc="https://images.xxx.jpg"></awc-img>
```

## Alt `alt`

```html
<awc-img src="https://images.xxx.jpg" alt="image"></awc-img>
```

## Ratio `ratio`

You can set a ratio to constrain the size of the picture (based on the width).

The format is `w/h`, such as `16/9`.

```html
<awc-radio name="img-ratio" value="16/9" checked onchange="document.getElementById('img-ratio').ratio = this.value">16/9</awc-radio>
<awc-radio name="img-ratio" value="3/2" onchange="document.getElementById('img-ratio').ratio = this.value">3/2</awc-radio>
<awc-radio name="img-ratio" value="1/1" onchange="document.getElementById('img-ratio').ratio = this.value">1/1</awc-radio>

<awc-img ratio="16/9" id="img-ratio" src="img.jpg"></awc-img>
```

## Fit `fit`

Set the adaptive mode, the same as the native `object-fit`, with the values `cover` (default), `fill`, and `contain`.

```html
<awc-radio name="img-fit" value="cover" checked onchange="document.getElementById('img-fit').fit = this.value">cover</awc-radio>
<awc-radio name="img-fit" value="fill" onchange="document.getElementById('img-fit').fit = this.value">fill</awc-radio>
<awc-radio name="img-fit" value="contain" onchange="document.getElementById('img-fit').fit = this.value">contain</awc-radio>

<awc-img fit="cover" id="img-fit" src="img.jpg"></awc-img>
```

## Lazy loading `lazy`

You can set `lazy` so that the image is loaded when it is visible, and no network request will be sent before that, which improves the user experience.

```html
<awc-img lazy src="img.jpg"></awc-img>
```