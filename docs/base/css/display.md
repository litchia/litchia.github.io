# display

## block

显示成块级盒子，前后各有换行符

## inline

行内元素，不可设置宽高，大小根据内容决定

## inline-block

行内块元素，不会占据一行，可以设置宽高

## none

不显示该盒子，从文档去掉

## contents

本身不会被渲染，但是后代会正常显示

::: tip 常用场景

 1. vue模板template，充当无语义包裹框;
 2. 消除默认样式，比如 button 不使用默认样式。

:::

## flow-root

创建 BFC 的方法之一，可以清除浮动

## flex

弹性布局

## inline-flex

内联样式的 flex 弹性布局，宽度不会占满一行，宽度根据内容决定

## grid

网格布局

## table

表格样式

``` js

 display: table                  //table
 display: table-header-group     //thead
 display: table-caption          //caption 表格标题
 display: table-row-group        //tbody
 display: table-row              //tr
 display: table-column-group     //colgroup 列分组
 display: table-column           //col
 display: table-cell             //td 和 th 单元格
 display: table-footer-group     //tfoot

```

## inline-table

内联样式的 table

## list-item

相当于 ul 下的 li。默认会在当前元素前面生成一个小黑点

::: tip

 可以根据 ` list-style ` 设置列表样式

:::
