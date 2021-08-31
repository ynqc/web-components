# awc-icon
[iconfont](https://www.iconfont.cn/collections/detail?spm=a313x.7781069.1998910419.d9df05512&cid=9402)

## Useage

```html
<!-- import -->
<script type="module">
    import './node_modules/web-components-js/components/awawc-icon.js';
</script>

<!-- Use -->
<awc-icon name="user" size="30" color="orangered"></awc-icon>
```

## Name `name`

```html
<awc-icon size="30" name="plus-square"></awc-icon>
<awc-icon size="30" name="plus-circle"></awc-icon>
<awc-icon size="30" name="user"></awc-icon>
<awc-icon size="30" name="setting"></awc-icon>
```

## Size `size`

```html
<awc-icon name="plus-square" size="20"></awc-icon>
<awc-icon name="plus-circle" size="30"></awc-icon>
<awc-icon name="user" size="40"></awc-icon>
<awc-icon name="setting" size="50"></awc-icon>
```

## Color `color`


```html
<awc-icon name="plus-square" color="orangered"></awc-icon>
<awc-icon name="plus-circle" color="#1E90FF"></awc-icon>
<awc-icon name="user" color="#F44336"></awc-icon>
<awc-icon name="setting" color="#3F51B5"></awc-icon>
```

## Loading `loading`

```html
<awc-icon size="40" name="reload" loading color="orangered"></awc-icon>
<awc-icon size="40" name="sync" loading color="#1E90FF"></awc-icon>
<awc-icon size="40" name="plus-circle" loading color="#F44336"></awc-icon>
<awc-icon size="40" name="setting" loading color="#3F51B5"></awc-icon>
```

CSS

```css
awawc-icon{
    font-size:30;
}
```