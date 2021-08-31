# awc-dialog

## Usage

```html
<!-- import -->
<script type="module">
    import AwcDialog from './node_modules/web-components-js/components/awc-dialog.js';
    window.AwcDialog = AwcDialog;
    AwcDialog.alert('alert');
</script>
<!-- Use -->
<awc-dialog>
    <div>dialog</div>
</awc-dialog>
```

## AwcDialog

* `AwcDialog.alert(config)`

* `AwcDialog.success(config)`

* `AwcDialog.error(config)`

* `AwcDialog.warning(config)`

* `AwcDialog.confirm(config)`

* `AwcDialog.prompt(config)`

```html
<awc-button type="primary" onclick="AwcDialog.alert('alert')">alert</awc-button>
<awc-button type="primary" onclick="AwcDialog.info('info')">info</awc-button>
<awc-button type="primary" onclick="AwcDialog.success({title:'success',content:'success',oktext:'Submit'})">
    success
</awc-button>
<awc-button type="primary" onclick="AwcDialog.error('error')">error</awc-button>
<awc-button type="primary" onclick="AwcDialog.warning('warning')">warning</awc-button>
```
`AwcDialog.alert` config -> There are two forms
```html
<awc-button type="primary" onclick="AwcDialog.alert('alert- content', () => {console.log('click ok')})">alert</awc-button>
<awc-button type="primary" onclick="AwcDialog.alert({
    title: 'title',
    oktext: 'ok',
    content: 'content',
    ok: () => {
        console.log('click ok');
    },
})">alert</awc-button>
```
```js
// one
AwcDialog.alert(title: string, ok: () => {});
// two
AwcDialog.alert({
    title:'title',
    oktext:'ok',
    content:'content',
    ok: () => {
    },
});

```
`AwcDialog.confirm`
```html
<awc-button type="primary" onclick="AwcDialog.confirm('confirm- content', () => {console.log('click ok')}, () => {console.log('click cancel')})">confirm</awc-button>
<awc-button type="primary" onclick="AwcDialog.confirm({
    title: 'title',
    oktext:'ok',
    canceltext:'cancel',
    content: 'content',
    type:'error',
    ok: () => {
        console.log('click ok');
    },
    cancel: () => {
        console.log('click cancel');
    },
})">confirm</awc-button>
```
```js
//one
AwcDialog.confirm(title: string, ok: () => {}, cancel: () => {});
//two
AwcDialog.confirm({
    title:'title',
    oktext:'ok',
    canceltext:'cancel',
    type:'error',
    content:'content',
    ok: () => {
    },
    cancel: () => {
    },
});
```

## Show `open`
```html
<awc-dialog id="dialog" title="Title" oktext="OK">
    <awc-tabs>
        <awc-tab label="tab1">tab1</awc-tab>
        <awc-tab label="tab2">tab2</awc-tab>
        <awc-tab label="tab3">tab3</awc-tab>
    </awc-tabs>
</awc-dialog>
<awc-button type="primary" onclick="document.getElementById('dialog').open = true;">open dialog</awc-button>

## Event `event`

### onsubmit

Execute when you click to confirm the operation.

### oncancel

Execute when you click to cancel the operation.

<awc-button type="primary" onclick="AwcDialog.confirm('confirm',()=>{AwcMessage.info('submit')},()=>{AwcMessage.info('cancel')})">confirm</awc-button>

```js
dialog.onsubmit = () => {
}
dialog.addEventListener('submit', () => {
})
dialog.oncancel = () => {
}
dialog.addEventListener('cancel', () => {
})
```


