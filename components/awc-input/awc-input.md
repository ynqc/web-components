# awc-input

## Usage

```html
<!-- import -->
<script type="module">
    import './node_modules/web-components-js/components/awc-input.js';
</script>
<!-- use -->
<awc-input></awc-input>
```

## Default value `defaultvalue`
```html
<awc-input defaultvalue="defaultvalue"></awc-input>
```

## Label `label`

```html
<awc-input label="user"></awc-input>
```

## Placeholder `placeholder`

```html
<awc-input placeholder="user"></awc-input>
```

## Icon `icon`
```html
<awc-input icon="user"></awc-input>
```

## Disabled `disabled`

```html
<awc-input label="user" disabled></awc-input>
<awc-switch checked onchange="this.previousElementSibling.disabled = this.checked;"></awc-switch>
```

## Readonly `readonly`

```html
<awc-input label="user" readonly defaultvalue="Plortinus"></awc-input>
<awc-switch checked onchange="this.previousElementSibling.readonly = this.checked;"></awc-switch>
```

## Value `value`

```html
<awc-input></awc-input>
<awc-button onclick="this.previousElementSibling.value='Plortinus'">set value is example</awc-button>
```

## Type `type`

`password`、`search`、`number`

### type=password

```html
<awc-input icon="lock" type="password"></awc-input>
```

### type=search

The `search` icon appears on the right, click it to execute the `onsubmit` event

```html
<awc-input type="search" onsubmit="AwcMessage.info(this.value)"></awc-input>
```

### type=number

The number input box, similar to the native `input[type=number]`, supports the attributes of `min`, `max`, and `step`, and supports the keyboard up and down keys to switch numbers.
```html
<awc-input icon="creditcard" type="number" min="-10" max="10" step="0.5" ></awc-input>
```

## Valid `checkValidity`

### 1.Built-in form validation

#### Required `required`

```html
<awc-input icon="user" required placeholder="required"></awc-input>
```

#### min-length `minlength`、max-length `minlength`

```html
<awc-input icon="user" placeholder="user" minlength="6" maxlength="10"></awc-input>
```

#### email
```html
<awc-input icon="mail" type="email" placeholder="email"></awc-input>
```

### 2.pattern
```html
<awc-input icon="phone" pattern="^1(3|4|5|6|7|8|9)\d{9}$" placeholder="Please enter phone number"></awc-input>
```

The default prompt information may not be user-friendly, you can customize the prompt information `errortips`

```html
<awc-input icon="phone" pattern="^1(3|4|5|6|7|8|9)\d{9}$" placeholder="Please enter phone number" errortips="error"></awc-input>
```
You can set the location of the prompt information, the default is `top`, refer to [`awc-tooltip`](awc-tooltip.md).

```html
<awc-input icon="mail" type="email" placeholder="email" errordir="right"></awc-input>
```

### 3.Custom Valid

The above verifications are all based on the input format. If you need to verify the value, you can use `customValidity`, such as verifying repeated passwords

```html
<awc-form>
    <awc-form-item legend="password">
        <awc-input name="password" id="pwd" required type="password" placeholder="password" minlength="6"></awc-input>
    </awc-form-item>
    <awc-form-item legend="password again">
        <awc-input name="password_confirm" id="pwdAgain" required type="password" placeholder="password confirm"></awc-input>
    </awc-form-item>
<awc-form>
```

```js
document.getElementById('password_confirm').customValidity = {
    method: (el) => {
        return el.value == document.getElementById('password').value
    },
    tips: 'Error',
}
```

### 4.no valid `novalidate`

```html
<awc-input icon="user" novalidate placeholder="user" minlength="6" maxlength="10"></awc-input>
```

## Validity `validity`

The validity of the content of the input box can be obtained through the attribute `validity`.

```html
<awc-input required placeholder="required"></awc-input>
<awc-button type="primary" onclick="AwcMessage.info('validity:'+this.previousElementSibling.validity)">validity</awc-button>
```

## Event `event`

### onchange

```html
<awc-input onchange="AwcMessage.info(this.value)"></awc-input>
```

### oninput

```html
<awc-input oninput="AwcMessage.info(this.value)"></awc-input>
```

Usually, you can set the anti-shake with `debounce`, for example, `debounce="300"` means that it will be triggered only if there is no operation within `300ms`.

```html
<awc-input debounce="300" oninput="AwcMessage.info(this.value)"></awc-input>
```

### onsubmit

When focusing, press the Enter key `Enter` to trigger.

```html
<awc-input onsubmit="AwcMessage.info(this.value)" placeholder="Press Enter"></awc-input>
```

## Function `function`

### focus

`focus`

```html
<awc-input onfocus="AwcMessage.info('focus')"></awc-input>
<awc-button type="primary" onclick="this.previousElementSibling.focus()">Focus</awc-button>
```


### checkValidity

```html
<awc-input required placeholder="required"></awc-input>
<awc-button type="primary" onclick="this.previousElementSibling.checkValidity()">Valid</awc-button>
```