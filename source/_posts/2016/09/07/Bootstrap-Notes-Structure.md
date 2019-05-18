---
title: Bootstrap-Notes(架构篇)
subtitle: 学会用情绪敏感代替情绪反应
date: 2016-09-07 07:28:57
tags: [Bootstrap,前端]
---

# 1、Bootstrap架构的六大部分 #

## 1.1 CSS组件 ##

3.x版本中提供了将近20种CSS组件，分别是

<!--more-->

1					|	2					|	3							|	4		
--------------------|-----------------------|-------------------------------|-----------
下拉菜单（Dropdown）	|按钮组(Button group)	|按钮下拉菜单(Button dropdown)	|导航(Nav)	
导航条（Navbar）		|面包屑导航（Breadcrumb）	|分页导航（Pagination）			|标签（Label）
排版（Typography）	|缩略图（Thumbnail）		|警告框（Alert）					|进度条（Progress Bar）
Icon图标				|大屏幕展播（Jumbotron）	|媒体对象（Media object）			|页面标题（Page header）
洼地（Well）			|徽章（Badge）			|输入框组（Input group）			|列表组（List group）
面板（Panel）		|其他（Well）

## 1.2 Javascript插件 ##

> 总共12种，相比较2.x版本少了一种输入提示插件（typeahead）。

插件typeahead的下载地址[https://github.com/twitter/typeahead.js](https://github.com/twitter/typeahead.js "typeahead")

## 1.3 CSS12栅格系统 ##

### 栅格系统定义 ###

*以规则的网格阵列来指导和规范网页中的版面布局以及信息分布*

**优点**
	让网页信息的呈现更加美观、易读，更具可用性。也让网页开发更加灵活与规范

Bootstrap默认的栅格系统为12列 ，形成一个940px宽的容器，默认没有启用`响应式布局特性` 。如果加入响应式布局CSS文件，栅格系统会自动根据可视窗口的宽度从724px到1170px进行动态调整。在可视窗口低于767px宽的情况下，列将不再固定并且会在垂直方向堆叠。

[摘自：[http://caibaojian.com/bootstrap/scaffolding.html](http://caibaojian.com/bootstrap/scaffolding.html)]

**特点**

- 按照百分比进行12等分；
- 是Bootstrap的核心功能，也是响应式设计核心理念的一个实现形式；

## 1.4 基础布局组件 ##

	包括排版、代码、表格、按钮、表单等	

## 1.5 jQuery ##

Bootstrap所有的javascript插件都依赖于`jQuery1.10+`,因此必须引用jQuery库，如果只用CSS组件，则无需引用。

## 1.6 响应式设计 ##

> Bootstrap所有内容，都是以响应式设计为设计理念来实现的。

具体的实践方式由多方面决定，包括弹性网格和布局、图片、CSS媒体查询的使用等。使得一个网站能兼容多个终端。


# 2 栅格系统 #

> 实现原理：*通过定义容器大小，平分12份，再调整内外边距，结合媒体查询*

**主要工作原理**

- 行数据（row）需包含在容器`.container`中；
- 使用行（row）在水平方向创建一组列（column）；
- 具体内容放置于列（column）中，且只有列（column）可以作为行（row）的直接子元素；
- 内置一大堆样式，可以使用像`.row`和`.col-xs-4`(占4列宽度);
- 设置padding创建`column`之间的间隔，第一列和最后一列设置负值的margin来抵消掉padding的影响；
- 列是通过指定1~12的值来表示其跨越的范围。*例如，要让屏幕分为3个等宽，可使用3个`.col-xs-4`来创建。*

## 2.1 列，row和container的样式 ##

1. 列的样式

	padding-right: 15px;
	padding-left: 15px;

2. `.row`的样式

	 .row {
      margin-right: -15px;
      margin-left: -15px;
    }

3. `.container`的样式

	padding-right: 15px;
	padding-left: 15px;
	margin-right: auto;
	margin-left: auto;


*在第一列的左边和最后一列的右边会有15px的补白*，`.row`可以消除两边的补白，同时为了响应不同屏幕，防止溢出，`.container`的padding值进行了修补

## 2.2 基本用法 ##

> 即列的组合，有4种特性

### 2.2.1 列组合 ###

**使用方法**：通过更改数字来合并列，如上述*主要工作原理*所示

- `.col-xs-[1-12]` 超小屏幕 手机 (<768px)
- `.col-sm-[1-12]` 小屏幕 平板 (≥768px)
- `.col-md-[1-12]` 中等屏幕 桌面显示器 (≥992px)
- `.col-lg-[1-12]` 大屏幕 大桌面显示器 (≥1200px)

其只涉及两个CSS特性：左浮动和宽度百分比。代码如下所示（以超小屏幕为例，xs）：

    .col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {
      float: left;
    }	

![](http://i.imgur.com/SNzIZBu.jpg)

### 2.2.2 列偏移（offset） ###

*下面范例以超小屏幕为例（xs）*

> 使用背景：无需两个紧挨的列太靠近，不必定义`margin`值，使用`.col-xs-offset-`形式的样式即可将列偏移到右侧，该样式使用的是`margin-left`

例如：`.col-xs-offset-4`将`.col-xs-4`向右移动了4个列的宽度

### 2.2.3 列嵌套 ###


- 在一个列里再声明一个或者多个行`row`

> **备注** 内部`row`都是以当前被嵌入的列的宽度为基准，按照百分比进行分配的。

### 2.2.4 列排序 ###

> 列排序即改变列的方向，也即改变左右浮动，并且设置浮动的距离。
> 
> 可以使用`.col-xs-pull-[1-12]`和`.col-xs-push-[1-12]`来实现

- **所有的列默认情况都是左浮动**
- 当需要将两列互换位置时，可以使用`.col-xs-pull-[1-12]`

![](http://i.imgur.com/8h5lnMj.jpg)

## 2.3 响应式栅格 ##

- 超小屏幕（xs）；
- 小型屏幕（sm）；
- 中型屏幕（md）；
- 大型屏幕（lg）；

**响应式栅格尺寸标准及实现设置**

![](http://i.imgur.com/NhKafQN.jpg)

分界点的是通过`媒体查询@media`来定义的

![](http://i.imgur.com/xbx0rrb.jpg)

1. 跨设备组合定义

	- 可以在一个元素上应用不同类型的样式，以适配不同尺寸的屏幕
	- 如果只用`min-width`，表示向大兼容，
	- 可以在一个div上分别应用xs,sm,md,lg类型的样式
	
2. 清除浮动

由于所有的`col-样式`都是左浮动，换行时，所以很容易会出现错位的现象，如图所示：

![](http://i.imgur.com/0eMQuFU.jpg)

![](http://i.imgur.com/qKTO74J.jpg)    

**解决这种问题，可以使用`clearfix`样式。如下图所示：**

![](http://i.imgur.com/o6PUDR5.jpg)

![](http://i.imgur.com/G3TK9F3.jpg)

# 3 CSS组件的设计思想 #

**8大类型样式**

## 3.1 基础样式 ##

略

## 3.2 颜色样式 ##

> 定义规则：组件名称-颜色类型

*例如：btn-info,alert-success*

- 具体定义什么颜色和该组件的特性有关系。
	
	比如，面板`panel`只需定义边框的颜色，按钮`btn`需定义边框颜色、背景色和文本颜色。


- 对于一些可单击元素，还需特殊处理按钮在`hover`、`focus`、`active`状态时的颜色，以便让这些状态在同一个风格下表现一致。如下图所示：

![](http://i.imgur.com/nslLbGv.jpg)

## 3.3 尺寸样式 ##

> **Bootstrap**也为大部分组件提供了尺寸快捷设置。
> 
> 一般组件都有4种尺寸：超小（xs）、小型（sm）、普通、大型（lg）
> *例如：btn-xs,btn-sm,btn-lg*

**源码如下图所示：**

![](http://i.imgur.com/b5258hh.jpg)

## 3.4 状态样式 ##

> 对于可点击的元素，需要根据状态来显示其效果
> 
> 这种类型的样式一般是处理元素的阴影、鼠标形状、透明度、虚框等方面的内容。

*例如：active,disabled*

## 3.5 特殊元素样式 ##

> 所谓特殊元素，即特定类型的组件一般只使用某一种或者几种固定的元素

例如：导航`nav`里常用的`li`元素，在定义这些组件时，也需为这些常用的元素定义相关的默认样式。

![](http://i.imgur.com/CRoHEkO.jpg)

## 3.6 并列元素样式 ##

略

## 3.7 嵌套子元素样式 ##

假如多个分组按钮一起使用的时候，需考虑浮动方向和间距，下拉菜单还需要考虑圆角问题。如下图所示：

![](http://i.imgur.com/TE9ojHi.jpg)

上图的CSS样式则表示当不是第一个和最后一个元素时，不设置圆角。

## 3.8 动画样式 ##

> 一般在进度条组件中会使用

**使用方法：**

	在`progress`样式上应用一个`active`，可开启动画过渡效果。源码如下图所示：

![](http://i.imgur.com/hrLCRr2.jpg)




