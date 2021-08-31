# awc-tooltip

## Usage

```html
<!-- import -->
<script type="module">
    import './node_modules/web-components-js/components/awc-tooltip.js';
</script>
<!-- Use -->
<awc-tooltip tips="this is a tooltip">
    <awc-button>button</awc-button>
</awc-tooltip>
```

## `tips`

```html
<awc-tooltip tips="this is a tooltip">
    <awc-button>button</awc-button>
</awc-tooltip>
<awc-button type="primary" onclick="this.previousElementSibling.tips='this is a new tip!'">change tooltip</awc-button>
```

## Direction `dir`

Default is `top`，`top`、`right`、`bottom`、`left`、`topleft`、`topright`、`righttop`、`rightbottom`、`bottomleft`、`bottomright`、`lefttop`、`leftbottom`。

```html
<awc-tooltip dir="top" tips="some tips"><awc-button>top</awc-button></awc-tooltip>
<awc-tooltip dir="right" tips="some tips"><awc-button>right</awc-button></awc-tooltip>
<awc-tooltip dir="bottom" tips="some tips"><awc-button>bottom</awc-button></awc-tooltip>
<awc-tooltip dir="left" tips="some tips"><awc-button>left</awc-button></awc-tooltip>
<awc-tooltip dir="topleft" tips="some tips"><awc-button>topleft</awc-button></awc-tooltip>
<awc-tooltip dir="topright" tips="some tips"><awc-button>topright</awc-button></awc-tooltip>
<awc-tooltip dir="righttop" tips="some tips"><awc-button>righttop</awc-button></awc-tooltip>
<awc-tooltip dir="rightbottom" tips="some tips"><awc-button>rightbottom</awc-button></awc-tooltip>
<awc-tooltip dir="bottomleft" tips="some tips"><awc-button>bottomleft</awc-button></awc-tooltip>
<awc-tooltip dir="bottomright" tips="some tips"><awc-button>bottomright</awc-button></awc-tooltip>
<awc-tooltip dir="lefttop" tips="some tips"><awc-button>lefttop</awc-button></awc-tooltip>
<awc-tooltip dir="leftbottom" tips="some tips"><awc-button>leftbottom</awc-button></awc-tooltip>
```

Direaction -> `auto`

```html
<awc-tooltip tips="some tips" dir="auto"><awc-button>auto</awc-button></awc-tooltip>
```

## Type `type`

`success`、`error`、`warning`

```html
<awc-tooltip tips="success tips" type="success"><awc-button>success</awc-button></awc-tooltip>
<awc-tooltip tips="warning tips" type="warning"><awc-button>warning</awc-button></awc-tooltip>
<awc-tooltip tips="error tips" type="error"><awc-button>error</awc-button></awc-tooltip>
```

## Color `color`

`color` priority is higher than `type`.

```html
<awc-tooltip tips="some tips" color="skyblue"><awc-button>custom color</awc-button></awc-tooltip>
```

## Show `show`

```html
<awc-tooltip tips="some tips" show="true"><awc-button>tips is show</awc-button></awc-tooltip>
<awc-switch checked onchange="this.previousElementSibling.show = this.checked;"></awc-switch>
```