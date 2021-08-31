# awc-popover

## Usage

```html
<!-- import -->
<script type="module">
    import './node_modules/web-components-js/components/awc-popover.js';
</script>
<!-- use -->

<!--sinple-->
<awc-popover content="hello world"><awc-button>POP</awc-button></awc-popover>

<!--customize pop content-->
<awc-popover>
    <awc-button>POP</awc-button>
    <awc-popbody>
        <div class="pop-body">hello world</div>
    </awc-popbody>
</awc-popover>
```

## Type `type`

When the type `type` is not set, `awc-popover` does not have any style, and only provides the floating function, and the content can be customized.

#### `comfirm`

```html
<awc-popover type="confirm" onsubmit="onSubmit(event)" oncancel="onCancel(event)" title="Title" content="Hello world">
    <awc-button>pop confirm</awc-button>
</awc-popover>
```

Similar to `awc-dialog`, it provides `title`, `content`, and supports `submit` and `cancel` event callbacks.

```js
popover.onsubmit = () => {
    
}
popover.addEventListener('submit', () => {
    
})
popover.oncancel = () => {
    
}
popover.addEventListener('cancel', () => {
    
})
```

#### `pane`

When `type=pane` is set, `awc-popover` is a normal prompt layer, and there is no interactive confirmation or cancel button.

```html
<awc-popover type="pane" title="Title" content="Content">
    <awc-button>pop pane</awc-button>
</awc-popover>
```

#### Customize

```html
<awc-popover>
    <awc-button>pop confirm customize content</awc-button>
    <awc-popbody title="Title" type="confirm" onsubmit="onSubmit(event)">
        <div class="pop-body">hello world</div>
    </awc-popbody>
</awc-popover>
```

```js
popcon.onsubmit = () => {
    
}
popcon.addEventListener('submit', () => {
    
})
popcon.oncancel = () => {
    
}
popcon.addEventListener('cancel', () => {
    
})
```

**Customize the prompt box**

```html
<awc-popover>
    <awc-tooltip tips="More"><awc-icon size="16" name="question-circle"></awc-icon></awc-tooltip>
    <awc-popbody type="pane" title="Title">
        <div class="pop-tips">
            <div>One</div>
            <div>Two</div>
            <div>Three</div>
            <div>Four</div>
            <div>Five</div>
            <div>Six</div>
            <div>Seven</div>
            <div>Eight</div>
        </div>
    </awc-popbody>
</awc-popover>
```

**Custom drop-down box**

```html
<awc-popover>
    <awc-button>pop list</awc-button>
    <awc-popbody>
        <div class="pop-list">
            <a href="#">Link1</a>
            <a href="#">Link2</a>
            <a href="#">Link3</a>
        </div>
    </awc-popbody>
</awc-popover>
```

## disabled `disabled`
```html
<awc-popover disabled>
    <awc-button>pop list</awc-button>
    <awc-popbody>
        <div class="pop-list">
            <a href="#">Link1</a>
            <a href="#">Link2</a>
            <a href="#">Link3</a>
        </div>
    </awc-popbody>
</awc-popover>
```

## Direction `dir`

Default is `bottomleft`，`top`、`right`、`bottom`、`left`、`topleft`、`topright`、`righttop`、`rightbottom`、`bottomleft`、`bottomright`、`lefttop`、`leftbottom`

```html
<awc-popover dir="top" type="confirm" title="Title" content="content">
    <awc-button>top</awc-button>
</awc-popover>
<awc-popover dir="right" type="confirm" onsubmit="console.log('ok')" title="Title" content="content">
    <awc-button>right</awc-button>
</awc-popover>
<awc-popover dir="bottom" type="confirm" onsubmit="console.log('ok')" title="Title" content="content">
    <awc-button>bottom</awc-button>
</awc-popover>
<awc-popover dir="left" type="confirm" onsubmit="console.log('ok')" title="Title" content="content">
    <awc-button>left</awc-button>
</awc-popover>
<awc-popover dir="lefttop" type="confirm" onsubmit="console.log('ok')" title="Title" content="content">
    <awc-button>lefttop</awc-button>
</awc-popover>
<awc-popover dir="leftbottom" type="confirm" onsubmit="console.log('ok')" title="Title" content="content">
    <awc-button>leftbottom</awc-button>
</awc-popover>
<awc-popover dir="topleft" type="confirm" onsubmit="console.log('ok')" title="Title" content="content">
    <awc-button>topleft</awc-button>
</awc-popover>
<awc-popover dir="topright" type="confirm" onsubmit="console.log('ok')" title="Title" content="content">
    <awc-button>topright</awc-button>
</awc-popover>
<awc-popover dir="righttop" type="confirm" onsubmit="console.log('ok')" title="Title" content="content">
    <awc-button>righttop</awc-button>
</awc-popover>
<awc-popover dir="rightbottom" type="confirm" onsubmit="console.log('ok')" title="Title" content="content">
    <awc-button>rightbottom</awc-button>
</awc-popover>
<awc-popover dir="bottomleft" type="confirm" onsubmit="console.log('ok')" title="Title" content="content">
    <awc-button>bottomleft</awc-button>
</awc-popover>
<awc-popover dir="bottomright" type="confirm" onsubmit="console.log('ok')" title="Title" content="content">
    <awc-button>bottomright</awc-button>
</awc-popover>

```

## Trigger `trigger`

Default is `click`，`hover`、`focus`、`contextmenu`。

**hover**

```html
<awc-popover trigger="hover" dir="top">
    <awc-button>hover</awc-button>
    <awc-popbody>
        <div class="pop-list">
            <a href="#">Link1</a>
            <a href="#">Link2</a>
            <a href="#">Link3</a>
        </div>
    </awc-popbody>
</awc-popover>
```

**focus**

```html
<awc-popover trigger="focus">
    <awc-button>focus</awc-button>
    <awc-popbody>
        <div class="pop-list">
            <a href="#">Link1</a>
            <a href="#">Link2</a>
            <a href="#">Link3</a>
        </div>
    </awc-popbody>
</awc-popover>
```

**contextmenu**

When set trigger is contextmenu，`dir` is invalid，the position follows the mouse。

```html
<awc-popover trigger="contextmenu">
    <awc-button>contextmenu</awc-button>
    <awc-popbody>
        <div class="pop-list">
            <a href="#">Link1</a>
            <a href="#">Link2</a>
            <a href="#">Link3</a>
        </div>
    </awc-popbody>
</awc-popover>
```

## Show `open`

```html
<awc-popover>
    <awc-tooltip tips="More"><awc-icon size="16" name="question-circle"></awc-icon></awc-tooltip>
    <awc-popbody type="pane" title="Title">
        <div class="pop-tips">
            <div>One</div>
            <div>Two</div>
            <div>Three</div>
            <div>Four</div>
            <div>Five</div>
            <div>Six</div>
            <div>Seven</div>
            <div>Eight</div>
        </div>
        <awc-button onclick="this.parentNode.open = false;">Closed</awc-button>
    </awc-popbody>
</awc-popover>
```

You can also add the `autoclose` attribute to the element that needs to be closed, and it will automatically close after clicking

```html
<awc-popover>
    <awc-tooltip tips="More"><awc-icon size="16" name="question-circle"></awc-icon></awc-tooltip>
    <awc-popbody type="pane" title="Title">
        <div class="pop-tips">
            <div>One</div>
            <div>Two</div>
            <div>Three</div>
            <div>Four</div>
            <div>Five</div>
            <div>Six</div>
            <div>Seven</div>
            <div>Eight</div>
        </div>
        <awc-button autoclose>Closed</awc-button>
    </awc-popbody>
</awc-popover>
```

## EXAMPLE

This is a very common drop-down menu.

```html
awc-popover class="pop-user">
    <awc-button type="text" shape="circle" icon="user"></awc-button>
    <awc-popbody>
        <awc-button block type="text">name</awc-button>
        <awc-button block type="text">sex</awc-button>
        <awc-button block type="text">age</awc-button>
        <awc-button block type="text">class</awc-button>
    </awc-popbody>
</awc-popover>
```

This is a multi-level menu that supports `hover`, `focus`, and `click` triggers.
```html
<style>
.pop-menu awc-button,.pop-menu awc-popover{
    display:flex;
    margin:0;
    justify-content: flex-start;
}
.pop-menu awc-popover:hover>awc-button,.pop-menu awc-popover:focus-within>awc-button{
    color:var(--themeColor,#42b983);
} 
.pop-menu>awc-popbody awc-popbody{
    margin-left:-10px;
}
</style>
<awc-popover class="pop-menu" dir="righttop">
    <awc-button>click Menu</awc-button>
    <awc-popbody>
        <awc-popover dir="righttop">
            <awc-button block type="text">itemA<awc-icon name="right"></awc-icon></awc-button>
            <awc-popbody>
                <awc-button block type="text">subMenu1</awc-button>
                <awc-button block type="text">subMenu2</awc-button>
                <awc-button block type="text">subMenu3</awc-button>
                <awc-button block type="text">subMenu4</awc-button>
            </awc-popbody>
        </awc-popover>
        <awc-popover dir="righttop">
            <awc-button block type="text">itemB<awc-icon name="right"></awc-icon></awc-button>
            <awc-popbody>
                <awc-popover dir="righttop">
                    <awc-button block type="text">sub-itemB<awc-icon name="right"></awc-icon></awc-button>
                    <awc-popbody>
                        <awc-button block type="text">subMenu1</awc-button>
                        <awc-button block type="text">subMenu2</awc-button>
                        <awc-button block type="text">subMenu3</awc-button>
                    </awc-popbody>
                </awc-popover>
                <awc-button block type="text">subMenu2</awc-button>
                <awc-button block type="text">subMenu3</awc-button>
                <awc-button block type="text">subMenu4</awc-button>
            </awc-popbody>
        </awc-popover>
        <awc-button block type="text">itemC</awc-button>
    </awc-popbody>
</awc-popover>
```
