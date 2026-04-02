---
title: Bootstrap-Notes(CSS样式篇)
subtitle: 谁的青春不迷茫，我们都一样
date: 2016-09-09 12:55:24
tags:
	- Bootstrap
	- 前端开发
---

**移动设备先行**

> Bootstrap 是移动设备优先的。针对移动设备的样式融合进了框架的每个角落，而不是增加一个额外的文件。

<!--more-->

# 1 概览 #

需要在`head`标签中添加如下代码：



    <meta name="viewport" content="width=device-width, initial-scale=1">

设置 meta 属性为 `user-scalable=no `可以禁用其缩放（zooming）功能。如下所示：

`<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">`

## 排版和链接 ##

> Bootstrap 排版、链接样式设置了基本的全局样式，这些样式都能在 `scaffolding.less`和`normalize.less` 文件中找到对应的源码。

## 响应式图片 ##

**增加`.img-responsive`样式**
	
	实质是为图片设置`max-width:100%`和`height-auto`属性
	可以让图片按比例缩放
	且不超过父元素的尺寸

## Normalize.css ##

> 一个专门用于将不同浏览器的默认CSS特性设置为统一效果的CSS库

## 布局容器 ##

Bootstrap 需要为页面内容和栅格系统包裹一个 .container 容器。提供两个类：

- `.container` 类用于固定宽度并支持响应式布局的容器。
- `.container-fluid` 类用于 100% 宽度，占据全部视口（viewport）的容器。

# 2 栅格系统 #

> 栅格系统用于通过一系列的行（row）与列（column）的组合来创建页面布局，你的内容就可以放入这些创建好的布局中。

有关栅格系统的详细介绍请参阅：[http://www.liuxiaowan.com/2016/09/07/Bootstrap-Notes-Structure/](http://www.liuxiaowan.com/2016/09/07/Bootstrap-Notes-Structure/ "栅格系统")

# 3 排版 #

## 标题 ##

- HTML 中的所有标题标签，`<h1>` 到 `<h6>` 均可使用。另外，还提供了 `.h1` 到 `.h6` 类，为的是给内联（inline）属性的文本赋予标题的样式。
- 两者唯一不同的是class样式没有定义`margin-top`和`margin-bottom`
- 在标题内还可以包含 `<small>` 标签或赋予` .small` 类的元素，可以用来标记副标题。

## 页面主体 ##

> Bootstrap 将全局 `font-size `设置为 14px，`line-height` 设置为 1.428。这些属性直接赋予 `<body> `元素和所有段落元素。另外，`<p> `（段落）元素还被设置了等于 1/2 行高（即 10px）的底部外边距（margin）。

**.lead样式**

通过添加 `.lead` 类可以让段落突出显示。主要是调节字体大小、粗细、行间距和margin-bottom

> `variables.less `文件中定义的两个 Less 变量决定了排版尺寸：`@font-size-base` 和 `@line-height-base`。


## 内联文本元素 ##

![](http://i.imgur.com/SabOoMw.jpg)

## 对齐 ##

- text-left
- text-center
- text-right
- text-justify

## 改变大小写 ##

- text-lowercase
- text-uppercase
- text-capitalize

## 缩略语 ##

> 当鼠标悬停在缩写和缩写词上时就会显示完整内容

1. 基本缩略语：需要为 <abbr> 元素设置 title属性。

	<abbr title="attribute">attr</abbr>

2. 首字母缩略语：为缩略语添加 .initialism 类，可让 `font-size` 稍微小些。

	<abbr title="HyperText Markup Language" class="initialism">HTML</abbr>

## 地址 ##

![](http://i.imgur.com/6d5nS71.jpg)


## 引用 ##

在` <blockquote> `中引用任意内容。如直接引用，建议用 <p> 标签。
如果想加文字出处，可以使用`footer`和`cite`。如下图所示：

![](http://i.imgur.com/oEgONSt.jpg)

Bootstrap还提供了`.blockquote-reverse`样式，用于右对齐以适应不同的排版。

![](http://i.imgur.com/3EvALGI.jpg)

## 无样式列表 ##

> 如果需要移除Bootstrap默认的`ul`、`ol`的样式，（即去掉`li`前的圆点），需要添加`list-unstyled`的样式，如下所示：

    <ul class="list-unstyled">
	  <li>...</li>
	</ul>

## 内联列表 ##

通过设置 `.inline-block` 样式 并添加少量的内补（padding），将所有元素放置于同一行。

	<ul class="list-inline">
	  <li>...</li>
	</ul>

## 描述 ##

![](http://i.imgur.com/2VXEHOQ.jpg)

带上`.dl-horizontal`样式，可以实现列表水平显示的效果，如下图所示：

![](http://i.imgur.com/jsA17aN.jpg)

上图中，如果文字超出宽度，还带有**自动截断**功能，主要是通过源码里的`text-overflow`的设置

	text-overflow:ellipsis;   //显示省略符号来代表被修剪的文本。
	white-space:nowrap; //	文本不会换行，文本会在在同一行上继续，直到遇到 <br> 标签为止。

# 4 代码 #

- 内联代码：主要设置code元素的背景色和内部的文字颜色；
- 用户输入代码
- 多行代码块：用于显示大块的代码段，并保证原有格式不变，可以在`pre`元素上应用`.prescrollable`样式，可以控制该区域最大高度为340像素，并可以在y方向滚动。源码：`overflow-y:scroll;`

![](http://i.imgur.com/EC3upWd.jpg)

# 5 表格 #

源码文件：table.less

- 基本表格
	
	为任意`<table>`标签添加`.table`类可以为其赋予基本的样式。包括 少量的内补（padding）和水平方向的分隔线。

- 条纹状表格

	在`.table`类基础上，通过 `.table-striped` 类可以给` <tbody>` 之内的每一行增加斑马条纹样式。

> 备注：条纹状表格是依赖 `:nth-child` CSS 选择器实现的，而这一功能不被*Internet Explorer 8*支持。

- 带边框表格

	添加 .table-bordered 类为表格和其中的每个单元格增加边框。
    
   ` <table class="table table-bordered">`
	...
   ` </table>`

- 鼠标悬停：
	
	通过添加 `.table-hover` 类可以让` <tbody>` 中的每一行对鼠标悬停状态作出响应。

- 紧缩表格

	通过添加 .table-condensed 类可以让表格更加紧凑，单元格中的内补（padding）均会减半。

- 状态类

	通过下面状态类可以为行或单元格设置颜色。

Class		|描述
------------|--------------------------------
.active		|鼠标悬停在行或单元格上时所设置的颜色
.success	|标识成功或积极的动作
.info		|标识普通的提示信息或动作
.warning	|标识警告或需要用户注意
.danger		|标识危险或潜在的带来负面影响的动作

- 响应式表格

	将任何 .table 元素包裹在 .table-responsive 元素内，即可创建响应式表格，其会在小屏幕设备上（小于768px）水平滚动。当屏幕大于 768px 宽度时，水平滚动条消失。

    <div class="table-responsive">
      <table class="table">
    ...
      </table>
    </div>

> **备注**Firefox 浏览器对 fieldset 元素设置了一些影响 width 属性的样式，导致响应式表格出现问题。可以使用如下解决方式：

    @-moz-document url-prefix() {
      fieldset { display: table-cell; }
    }

# 6 表单 #

源码文件：`form.less`

## 基本实例 ##

- 所有设置了 .form-control 类的 `<input>`、`<textarea>` 和 `<select>` 元素都将被默认设置宽度属性为 width: 100%;。
- 将 `label` 元素和前面提到的控件包裹在 `.form-group `中可以获得最好的排列。

![](http://i.imgur.com/KqVeNtP.jpg)

## 内联表单 ##

- 为 `<form> `元素添加` .form-inline `类可使其内容左对齐并且表现为 `inline-block` 级别的控件；
- 只适用于视口（viewport）至少在 768px 宽度时（视口宽度再小的话会使表单折叠）；
- 输入框和单选、多选框控件宽度默认设置为`width:auto;`
- 多个控件可以排列在同一行

## 水平排列的表单 ##

通过为表单添加 `.form-horizontal` 类，并联合使用 Bootstrap 预置的栅格类，可以将 label 标签和控件组水平并排布局。

	<form class="form-horizontal" role="form">
		<div class="form-group">
	。。。
		</div>
	</form>

## 被支持的控件 ##

1. 输入框

	只有正确设置了 type 属性的输入控件才能被赋予正确的样式。

2. 文本域
	
	支持多行文本的表单控件。可根据需要改变 rows 属性。

3. 多选和单选框

	对于和多选或单选框联合使用的 `<label>` 标签，如果也希望将悬停于上方的鼠标设置为“禁止点击”的样式，请将 `.disabled` 类赋予 `.radio`、`.radio-inline`、`.checkbox`、`.checkbox-inline` 或 `<fieldset>`。

4. 内联单选和多选框

	通过将 `.checkbox-inline` 或 `.radio-inline` 类应用到一系列的多选框（checkbox）或单选框（radio）控件上，可以使这些控件排列在一行。

> **备注**对于没用文本的label，只有在非内联单选和非内联多选框上才能起作用

5. 下拉列表（select）

使用默认选项或添加` multiple `属性可以同时显示多个选项。

    <select class="form-control">
      <option>1</option>
      <option>2</option>
    </select>

	<select multiple class="form-control">
	  <option>1</option>
	  <option>2</option>
	</select>

## 静态控件 ##

	如果需要在表单中将一行纯文本和 label 元素放置于同一行，为 <p> 元素添加 .form-control-static 类即可。

## 焦点状态 ##

Bootstrap将某些表单控件的默认 `outline` 样式移除，然后对` :focus` 状态赋予` box-shadow `属性。

## 禁用状态 ##

- 为输入框设置 disabled 属性可以防止用户输入，并能对外观做一些修改，使其更直观。
- 为<fieldset> 设置 disabled 属性,可以禁用 <fieldset> 中包含的所有控件。

## 只读输入框 ##

为输入框设置 readonly 属性可以禁止用户输入，并且输入框的样式也是禁用状态。

## 校验状态 ##

添加 `.has-warning`、`.has-error` 或 `.has-success` 类到这些控件的父元素可对表单控件进行校验，改变样式 。任何包含在此元素之内的 `.control-label`、`.form-control` 和 `.help-block` 元素都将接受这些校验状态的样式。

还可以针对校验状态为输入框添加额外的图标。只需设置相应的 `.has-feedback` 类并添加正确的图标即可。

![](http://i.imgur.com/3wxpO74.jpg)

> **备注**反馈图标只能和`<input class="form-control">`一起使用

## 控件尺寸 ##

- 通过 `.input-lg` (较大)和 `.input-sm`(较小) 可以为控件设置高度，通过 `.col-lg-*` 或`.col-sm-*`可以为控件设置宽度。
- 通过添加 .form-group-lg 或 .form-group-sm 类，为 .form-horizontal 包裹的 label 元素和表单控件快速设置尺寸。
- 用栅格系统中的列（column）包裹输入框或其任何父元素，都可很容易的为其设置宽度。
- 该样式同样适用于`select`和`textarea`。
