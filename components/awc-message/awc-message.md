# awc-message

## Usage

```html
<!-- import -->
<script type="module">
    import AwcMessage from './node_modules/web-components-js/components/awc-message.js';
    window.AwcMessage = AwcMessage;
    AwcMessage.info('info);
</script>
```

## AwcMessage

* `AwcMessage.info(text, duration, onclose)`

* `AwcMessage.success(text, duration, onclose)`

* `AwcMessage.error(text, duration, onclose)`

* `AwcMessage.warning(text, duration, onclose)`

* `AwcMessage.loading(text, duration, onclose)`

```html
<awc-button type="primary" onclick="AwcMessage.info('This a info message')">info</awc-button>
<awc-button type="primary" onclick="AwcMessage.success('This a success message')">success</awc-button>
<awc-button type="primary" onclick="AwcMessage.error('This a error message')">error</awc-button>
<awc-button type="primary" onclick="AwcMessage.warning('This a warning message')">warning</awc-button>
<awc-button type="primary" onclick="AwcMessage.loading('This a loading message')">loading</awc-button>
```

|Param|Description|Type|Default|
|---|---|---|---|
|`text`|The content of the message|`string`|`''`|
|`duration`|Time(seconds) before auto-dismiss, don't dismiss if set to 0|`number`|`3000`|
|`onclose`|	Specify a function that will be called when the message is closed|`Function`|-|

Among them, the default `duration` of `AwcMessage.loading` is `0`, which means it will not be closed automatically. If you need to close it manually, you can set the property `show=false`.

<awc-button type="primary" onclick="this.loader = AwcMessage.loading('This a loading message')">show loading</awc-button>
<awc-button type="primary" onclick="this.previousElementSibling.loader.show = false">hide loading</awc-button>

```js
const loader = AwcMessage.loading('This a loading message');
btn.onclick = () => {
    loader.show = false;
}
```

```js
const loader = AwcMessage.loading('This a loading message');
loader.onclose = () => {
    
}
```

## AwcMessage.show

`AwcMessage.show` is a more general method, you can customize the `icon`.

```html
<awc-button type="primary" onclick="AwcMessage.show({text:'Hello'})">No Icon</awc-button>
<awc-button type="primary" onclick="AwcMessage.show({icon:'user', text:'Hello'})">Hello</awc-button>
```
```js
AwcMessage.show({
    icon, // icon
    text, // The content of the message
    duration, // Time(seconds) before auto-dismiss, default is 3000
    onclose // Specify a function that will be called when the message is closed
})
```