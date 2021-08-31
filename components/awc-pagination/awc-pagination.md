# awc-pagination

## Usage

```html
<!-- import -->
<script type="module">
    import './node_modules/web-components-js/components/awc-pagination.js';
</script>
<!-- use -->
<awc-pagination pagesize="3" total="50"></awc-pagination>
```

## Total number of data `total`, number of items per page `pagesize`


```html
<awc-pagination pagesize="3" total="50"></awc-pagination>
<awc-button type="primary" onclick="this.previousElementSibling.pagesize=5">set pagesize is 5</awc-button>
```

When the number of pages is small (no more than `10` pages), the full display

```html
<awc-pagination pagesize="3" total="20"></awc-pagination>
```

## default value `defaultcurrent`

You can specify an initial value `defaultcurrent` for pagination, the default is `1`.

```html
<awc-pagination defaultcurrent="7" pagesize="3" total="50"></awc-pagination>
```

## current page `current`
Sets or returns the current page of the paging component.

```html
<awc-pagination pagesize="3" total="50"></awc-pagination>
<awc-button type="primary"
    onclick="AwcMessage.info('value: '+this.previousElementSibling.previousElementSibling.current)">show current page
</awc-button>
```

## Simple `simple`

You can add the `simple` attribute to display only the current page and the total number of pages.

```html
<awc-pagination simple pagesize="3" total="50"></awc-pagination>
```

## Custom size

The relative size of `em` is used internally, and the size can be controlled by `font-size`.

```html
<style>
.pagination{
    font-size:20px;
}
</style>
<awc-pagination class="pagination" pagesize="3" total="50"></awc-pagination>
```

## Event`event`

### onchange

```html
<awc-pagination  onchange="AwcMessage.info('current page: '+this.current)" pagesize="3" total="50"></awc-pagination>
```


## Example

```html
<style>
.pagination-demo{
    display: flex;
    white-space: nowrap;
    align-items: center;
}
.pagination-demo>*{
    margin-bottom:0;
}
.pagination-demo>span{
    margin-right:10px;
}
.pagination-demo awc-input{
    width:50px;
}
</style>
<div class="pagination-demo">
    <awc-pagination id="pagination-demo" onchange="AwcMessage.info('current page: '+this.current)" pagesize="10" total="200"></awc-pagination>
    <awc-dropdown defaultvalue="10" onchange="document.getElementById('pagination-demo').pagesize=this.value">
        <awc-option value="10">10</awc-option>
        <awc-option value="15">15</awc-option>
        <awc-option value="20">20</awc-option>
    </awc-dropdown>
    <span>jump</span><awc-input type="number" defaultvalue="1" min="1" onchange="document.getElementById('pagination-demo').current = this.value"></awc-input><span>page</span>
</div>
```