# awc-form

## Uasge

```html
<!-- import -->
<script type="module">
    import './node_modules/web-components-js/components/awc-form.js';
</script>
<!-- use -->
<awc-form action="/login" method="post">
    <awc-form-item legend="user">
        <awc-input name="user" required placeholder="user"></awc-input>
    </awc-form-item>
    <awc-form-item>
        <awc-button type="primary" htmltype="submit">submit</awc-button>
        <awc-button htmltype="reset">reset</awc-button>
    </awc-form-item>
</awc-form>
```

## awc-form-item `awc-form-item`

```html
<awc-form>
    <awc-form-item legend="user">
        <awc-input name="user" placeholder="user"></awc-input>
    </awc-form-item>
    <awc-form-item legend="password">
        <awc-input name="password" required type="password" placeholder="password"></awc-input>
    </awc-form-item>
</awc-form>
```

## Form Type `type`

default is normal -> `normal`、`full`、`none`

* `normal` Default, with `awc-form-item`, two-column layout can be realized
* `full` Column style, with `awc-form-item`, the layout of the column can be realized
* `none` No style, need to customize the layout

```html
<awc-radio-group onchange="this.nextElementSibling.type=this.value" defaultvalue="normal">
    <awc-radio value="normal">normal</awc-radio>
    <awc-radio value="full">full</awc-radio>
    <awc-radio value="none">none</awc-radio>
</awc-radio-group>
<awc-form>
    <awc-form-item legend="user">
        <awc-input name="user" placeholder="user"></awc-input>
    </awc-form-item>
    <awc-form-item legend="password">
        <awc-input name="password" required type="password" placeholder="password"></awc-input>
    </awc-form-item>
    <awc-form-item>
        <awc-button type="primary" htmltype="submit">login</awc-button>
        <awc-button htmltype="reset">reset</awc-button>
    </awc-form-item>
</awc-form>
```

## Default form behavior

### Props

* `action`

The value is `URL`, which specifies where to send the form data. The Enter key will trigger the form.

* `method`

Specifies the request method, default is `get`, optional `post`.

* `novalidate`

If this attribute is used, no validation will be performed when the form is submitted.

```html
<awc-form action="/login" method="post" novalidate>
    <awc-form-item legend="user">
        <awc-input name="user" placeholder="user"></awc-input>
    </awc-form-item>
    <awc-form-item legend="password">
        <awc-input name="password" required type="password" placeholder="password"></awc-input>
    </awc-form-item>
</awc-form>
```

### Methods

* `submit`

`form.submit()`

* `reset`

`form.reset()`

```html
<awc-form action="/login" method="post">
    <awc-form-item legend="user">
        <awc-input name="user" required placeholder="user"></awc-input>
    </awc-form-item>
    <awc-form-item legend="password">
        <awc-input name="password" required type="password" placeholder="password" minlength="6"></awc-input>
    </awc-form-item>
    <awc-form-item>
        <awc-button type="primary" htmltype="submit">login</awc-button>
        <awc-button htmltype="reset">reset</awc-button>
    </awc-form-item>
</awc-form>
```

## Example

```html
<awc-form action="/login" method="post" id="form-submit">
    <awc-form-item legend="user">
        <awc-input name="user" required placeholder="user"></awc-input>
    </awc-form-item>
    <awc-form-item legend="password">
        <awc-input name="password" id="pwd" required type="password" placeholder="password" minlength="6">
        </awc-input>
    </awc-form-item>
    <awc-form-item legend="password again">
        <awc-input name="password_confirm" id="pwdAgain" required type="password" placeholder="password confirm">
        </awc-input>
    </awc-form-item>
    <awc-form-item legend="city">
        <awc-dropdown name="city" required>
            <awc-option value="wuhan">wuhan</awc-option>
            <awc-option value="beijin">beijin</awc-option>
            <awc-option value="shanghai">shanghai</awc-option>
        </awc-dropdown>
    </awc-form-item>
    <awc-form-item legend="framework">
        <awc-checkbox>React</awc-checkbox>
        <awc-checkbox>Vue</awc-checkbox>
        <awc-checkbox>Angular</awc-checkbox>
        <awc-checkbox>Flutter</awc-checkbox>
        <awc-checkbox>Swift</awc-checkbox>
    </awc-form-item>
    <awc-form-item legend="lang">
        <awc-radio-group name="lan" required>
            <awc-radio>Html</awc-radio>
            <awc-radio>Css</awc-radio>
            <awc-radio>Javascript</awc-radio>
            <awc-radio>Php</awc-radio>
            <awc-radio>Dart</awc-radio>
        </awc-radio-group>
    </awc-form-item>
    <awc-form-item>
        <awc-checkbox name="react" required value="react">recommend react</awc-checkbox>
    </awc-form-item>
    <awc-form-item>
        <awc-button type="primary" htmltype="submit" onclick="onSubmit()">submit</awc-button>
        <awc-button htmltype="reset">reset</awc-button>
    </awc-form-item>
</awc-form>
```