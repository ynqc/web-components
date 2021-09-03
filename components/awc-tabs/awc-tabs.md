# awc-tabs

## Usage

```html
<!-- Import -->
<script type="module">
    import './node_modules/web-components-js/components/awc-tabs.js';
</script>
<!-- Use  -->
<awc-tabs>
    <awc-tab label="tab1">tab1</awc-tab>
    <awc-tab label="tab2">tab2</awc-tab>
    <awc-tab label="tab3">tab3</awc-tab>
</awc-tabs>
```

`awc-tabs` needs to be used in combination with `awc-tab`.

## Label `label`

Each `awc-tab` needs to specify a name `label`, which is used to display the label header.

```html
<awc-tabs>
    <awc-tab label="tab1">tab1</awc-tab>
    <awc-tab label="tab2">tab2</awc-tab>
    <awc-tab label="tab3">tab3</awc-tab>
</awc-tabs>
```

## Disabled`disabled`

Each `awc-tab` can specify the `disabled` attribute to disable the tab page.

```html
<awc-tabs>
    <awc-tab label="tab1">tab1</awc-tab>
    <awc-tab label="tab2" disabled>tab2</awc-tab>
    <awc-tab label="tab3">tab3</awc-tab>
</awc-tabs>
```

## Value `value` `activeKey`

Each `awc-tab` needs to specify an identification `value`, if no serial number is used as the default `value`,

`activeKey` works on `awc-tabs`, you can specify to switch to a specific tab page, or you can specify the initial activeKey.

```html
<awc-tabs activeKey="B">
    <awc-tab label="tab1" value="A">tab1</awc-tab>
    <awc-tab label="tab2" value="B">tab2</awc-tab>
    <awc-tab label="tab3" value="C">tab3</awc-tab>
</awc-tabs>
<awc-button type="primary" onclick="this.previousElementSibling.value='C'">change tab3</awc-button>
```

## Icon `icon`

Each `awc-tab` can specify `icon`, and cooperate with `label` to achieve the effect of adding text to icons.

```html
<awc-tabs>
    <awc-tab label="home" icon="home">tab1</awc-tab>
    <awc-tab label="message" icon="message">tab2</awc-tab>
    <awc-tab label="user" icon="user">tab3</awc-tab>
</awc-tabs>
```
It is also possible to specify `icon` alone instead of using `label`.

```html
<awc-tabs>
    <awc-tab icon="home">tab1</awc-tab>
    <awc-tab icon="message">tab2</awc-tab>
    <awc-tab icon="user">tab3</awc-tab>
</awc-tabs>
```

## Type `type`

You can choose the tab page style, `text`, `card`, the default is `text`

* `card` card style, usually suitable for cards with background
* `line` wireframe style

```html
<awc-radio value="text" checked name="tab" onchange="onChangeTabType(this.value)">text</awc-radio>
<awc-radio value="card" name="tab" onchange="onChangeTabType(this.value)">card</awc-radio>
<awc-radio value="line" name="tab" onchange="onChangeTabType(this.value)">line</awc-radio>
<awc-tabs type="text" style="padding:.8em;" id="tabs">
    <awc-tab label="home" icon="home">tab1</awc-tab>
    <awc-tab label="message" icon="message">tab2</awc-tab>
    <awc-tab label="user" icon="user">tab3</awc-tab>
</awc-tabs>
```

```css
awc-tabs[type="card"]{
    background:#f1f1f1;
}
```

## Align `align`

Set the alignment of the label header, the default is `start` (left), you can set `center` (center), `end` (center

```html
<awc-radio value="start" checked name="tabAlign" onchange="onChangeTabAlign(this.value)">start</awc-radio>
<awc-radio value="center" name="tabAlign" onchange="onChangeTabAlign(this.value)">center</awc-radio>
<awc-radio value="end" name="tabAlign" onchange="onChangeTabAlign(this.value)">end</awc-radio>
<awc-tabs type="card" id="tab-align" style="padding:.8em; background:#f1f1f1">
    <awc-tab label="home" icon="home">tab1</awc-tab>
    <awc-tab label="message" icon="message">tab2</awc-tab>
    <awc-tab label="user" icon="user">tab3</awc-tab>
</awc-tabs>
```

## Event `event`

### onchange

```html
<awc-tabs onchange="AwcMessage.info(event.detail.label)">
    <awc-tab label="tab1">tab1</awc-tab>
    <awc-tab label="tab2">tab2</awc-tab>
    <awc-tab label="tab3">tab3</awc-tab>
</awc-tabs>
```

## Other

When there are more tabs, it will scroll automatically if it exceeds the range.

```html
<awc-tabs>
    <awc-tab label="tab11111111111111">tab1</awc-tab>
    <awc-tab label="tab2222222222222">tab2</awc-tab>
    <awc-tab label="tab333333333">tab3</awc-tab>
    <awc-tab label="tab4">tab4</awc-tab>
    <awc-tab label="tab5">tab5</awc-tab>
    <awc-tab label="tab64444444444">tab6</awc-tab>
    <awc-tab label="tab7">tab7</awc-tab>
    <awc-tab label="tab855555555">tab8</awc-tab>
    <awc-tab label="tab9">tab9</awc-tab>
    <awc-tab label="tab106666666666">tab10</awc-tab>
    <awc-tab label="tab11">tab11</awc-tab>
    <awc-tab label="tab126666666666">tab12</awc-tab>
    <awc-tab label="tab13">tab13</awc-tab>
    <awc-tab label="tab146666666666">tab14</awc-tab>
</awc-tabs>
```

Each component is independent of each other and can be nested at will, as follows.

```html
<awc-tabs>
    <awc-tab label="tab1">
        <awc-tabs>
            <awc-tab label="1-tab1">1-tab1</awc-tab>
            <awc-tab label="1-tab2">1-tab2</awc-tab>
            <awc-tab label="1-tab3">1-tab3</awc-tab>
        </awc-tabs>
    </awc-tab>
    <awc-tab label="tab2">tab2</awc-tab>
    <awc-tab label="tab3">tab3</awc-tab>
</awc-tabs>
```

