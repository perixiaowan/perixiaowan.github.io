---
title: Bootstrap-Notes(CSS样式篇续)
subtitle: 风息雾散，仍是阳光灿烂。
date: 2016-09-20 08:09:06
tags: [Bootstrap,前端]
---

![](https://github.com/perixiaowan/MarkdownPhotos/blob/master/others/F2E-1.jpg?raw=true)

# 0.表单补充
1. `checkbox`和`radio`是`input`元素里两个非常特殊的type，通常会出现左右边距对不齐的问题。 

	**解决办法**：每个`input`外用`label`包住，且在最外层用容器元素包住（例如：div）,并应用相应的样式，类似`.checkbox`或`radio`。
	
2. `checkbox`和`radio`如需横向显示，可以使用相应的内联样式`.checkbox-inline`和`.radio-inline`；

3. **focus/disabled**
* 如果想在input上聚焦时出现柔和的阴影边框，需使用`.form-control`;但是，像`fieldset`标签中第一个`legend`标签不受`disabled`限制。不过，目前IE10暂时不支持，开发过程中，需要使用js进行专门处理。

* 禁用按钮的两种方式及区别
	* 使用原始的`disabled`属性，可以禁用按钮上的所有事件
	* 利用`.disabled`样式，但不禁止按钮的默认行为 


4.  **fieldset**：使用disabled时，内部的`a`标签不受`disabled`限制。

5. 输入框右边显示小图标，需要考虑两个问题：
	* 首先，设置输入框父元素定位方式为相对定位；
	* 其次，设置小图标的定位方式为绝对定位。

<!--more-->

# 1.按钮  

> **源码文件**：buttons.less
> 
> 按钮首先定义基础`btn`样式，包括相关的`hover``focus``active`等行为特效，在使用`btn-*`(default,primary,success,danger,info,warning,link)为按钮设置特殊的风格。

## 尺寸

* 使用 `.btn-lg`、`.btn-sm` 或 `.btn-xs` 可以获得不同尺寸的按钮；
* 通过给按钮添加 `.btn-block` 类可以将其拉伸至父元素100%的宽度，而且按钮也变为了块级（block）元素。

## 按钮禁用

* 通过为按钮的背景设置 `opacity` 属性就可以呈现出无法点击的效果。

>**跨浏览器兼容性（⚠️）**
>
>如果为` <button>` 元素添加 `disabled` 属性，Internet Explorer 9 及更低版本的浏览器将会把按钮中的文本绘制为灰色，并带有恶心的阴影，目前还没有解决办法。

## a标签链接应用按钮样式

可以将按钮的样式应用到`<a>`标签上,需要设置` pointer-events:none`来禁用所有`<a>`上的原始功能。但是此方法并没有标准化，建议通过js来禁用`<a>`链接的所有原始功能。

## 导航条

只支持`button`，而不支持`<a>`.

# 2.图片

## 响应式图片

为图片添加 `.img-responsive` 类可以让图片支持响应式布局。其实质是为图片设置了 `max-width: 100%;` 和 `height: auto;` 属性，从而让图片在其父元素中更好的缩放。

> **SVG图像和IE 8-10**
> 
> 设置为 .img-responsive 的 SVG 图像显示出的尺寸不匀称。为了解决这个问题，在出问题的地方添加 width: 100% \9; 即可。

## 图片形状

	<img src="..." alt="..." class="img-rounded">
	<img src="..." alt="..." class="img-circle">
	<img src="..." alt="..." class="img-thumbnail">

> Internet Explorer 8 及以下不支持 CSS3 中的**圆角**属性。

# 3.辅助类

## 文本字体颜色

为文本添加如下所示的样式，可以为不同文本字体设置不同颜色，相当于上文提到的不同颜色的按钮一样。

	<p class="text-muted">...</p>
	<p class="text-primary">...</p>
	<p class="text-success">...</p>
	<p class="text-info">...</p>
	<p class="text-warning">...</p>
	<p class="text-danger">...</p>

## 文本背景色

与文本字体颜色设置类似，通过添加不同的样式来为不同的文本设置不同的背景颜色，如下所示：

	<p class="bg-primary">...</p>
	<p class="bg-success">...</p>
	<p class="bg-info">...</p>
	<p class="bg-warning">...</p>
	<p class="bg-danger">...</p>
 
>  **备注**：
> 某些情况下，设置文字背景色可能不起作用，这时可以将该文字用类似`<div>`父标签包围即可。


## 三角符号

通过使用三角符号可以指示某个元素具有下拉菜单的功能。

	 <span class="caret"></span>
	 
## 文本快速浮动

可以在响应标签上（例如：div）设置`.pull-left`和`.pull-right`分别实现文本向左或向右的浮动。 

导航条（navbars）应使用`.navbar-left`或`.navbar-right`来设置快速浮动功能。

## 中心内容块

通过添加`.center-block`,可以将内容块放在其他模块的中间部分。

	<div class="center-block">...</div>

## 清除浮动（Clearfix）

通过添加`.clearfix`样式，可以清除继承父元素的浮动样式。

	<div class="clearfix">...</div>
	
## 显示或隐藏内容

使用`.show`或`.hidden`样式分别显示或隐藏相关内容

**hidden和invisible区别**

hidden：表示元素即不显示，也不占用文档流；
invisible：表示元素虽然不显示，但其占用文档流
test-hide样式：文本内容不显示，只显示背景效果。

> 如果一个元素对所有设备都要隐藏，而只对盲人可用的话，可以使用特殊的`sr-only`样式
> 

# 4.响应式工具

形如 `.visible-*-*` 的类针对每种屏幕大小都有了三种变体，每个针对 CSS 中不同的 display 属性，列表如下：

类组						|CSS display
-----------------------	|------------------------------
.visible-*-block			|display: block;
.visible-*-inline		|display: inline;
.visible-*-inline-block	|display: inline-block;

*其中，（＊）代表xs,sm,md,lg*

**打印机类**

* 对打印机可见
	* .visible-print-block
	* .visible-print-inline
	* .visible-print-inline-block

* 对打印机隐藏
	* .hidden-print
 
 
 
