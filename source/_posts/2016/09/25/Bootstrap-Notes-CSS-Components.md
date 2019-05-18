---
title: Bootstrap-Notes-组件（1）
subtitle: 性躁心粗者，一事无成；心平气和者，百福自集。
date: 2016-09-25 17:09:06
tags: [Bootstrap,前端]
---

# 0.题记

绝大部份的网页需要利用框架才能构建出绚丽的页面；Bootstrap的组件包括20种。

具体组件名称请参阅：[](http://www.liuxiaowan.com/2016/09/07/Bootstrap-Notes-Structure/)

# 1.Glyphicons 字体图标

****
**源码文件**：glyphicons.less.

包括200个来自 Glyphicon Halflings 的字体图标。
****

## 使用方法

通过使用CSS3中的`@font-face`特性来设置字体，通过它可以将服务器上的字体设置为Web页面字体，且可以完全兼容所有浏览器。

****
原理：利用特殊的文字在特殊的字体上显示特殊的效果，比如A在特殊字体上显示成圆圈的形式。且可以通过`color:#ff0`设置图标的颜色。
****


* 第一种方式：

	<i class="glyphicon glyphicon-search"></i> 搜索 

* 第二种方式： 

	<span class="glyphicon glyphicon-search"></span> 搜索 
	
⚠️注意：

1. 为设置正确补白，图标和文本之间添加一个空格；
2. 不要和其他组件混用；
3. 图标类只应用在不包含任何文本内容或子元素的元素上；

## 用途

* 编辑器中的小图标 
* button元素
* nav列表元素
* 表单的输入框前面或后面加上一个小图标：只需在`input-group-addon`样式元素内应用一个span或i元素即可

**实例（在输入框前添加图标）：**

	<div class="control-group">
		<div class="controls">
			<div class="input-group">
				<span class="input-group-addon">
					<span class="glyphicon glyphicon-envelope"></span>
				</span>
				<input class="col col-lg-4 form-control" id="inputIcon" type="text">
			</div>
		</div>
	</div>

**如果要在普通文本上显示这些特殊字符，需要在字符前添加`&#x`**

	<span class="glyphicon">&#xe001</span>    //显示玻璃杯

## 各种格式字体的说明

不同版本的浏览器支持不同的字体，为了让浏览器全部兼容，需要进行特殊设置，其中，涉及到`format`的问题。

* TureType(.ttf)格式：是Windows和Mac中最常用字体。不能被网站优化；
* OpenType(.otf)格式：一种原始的字体格式。内置在`TureType `的基础上；
* Web Open Font Format(.woff)格式：是Web字体中最佳格式。是一个开放的TureType／OpenType的压缩版本；
* Embedded Open Type(.eot):IE专用字体。可以从TureType创建此格式字体；
* SVG(.svg)格式:基于SVG字体渲染的一种格式。

# 2.下拉菜单

>**源码文件**：dropdowns.less

各种交互状态下的菜单展示需要和JavaScript的Dropdown插件配合才能使用。

## 使用方法
1. 下拉菜单正常显示
	在该父元素上设定`posision:relative;`或直接再加上`.dropdown`样式。
	
	`<div class="dropdown">...</div>`
	
	或
	
	`<div style＝"posision:relative;">...</div>`
	
2. 分割符

	`<li role="presentation" class="divider"></li>`

3. 菜单标题的功能（类似于分组标题）

	`<li role="presentation" class="dropdown-header"></li>`

4. 菜单相对于父容器右对齐

	为 `.dropdown-menu` 添加 `.dropdown-menu-right` 类可以让菜单右对齐。
	`<ul class="dropdown-menu dropdown-menu-right" role="menu" aria-labelledby="dLabel">...</ul>`

5. 设置子菜单向上弹出：将`dropdown`样式换成`dropup`
6. 新版子菜单功能删除了，如果需要可以在自定义文件中添加老版相关子菜单的css代码即可。

## 实例

	<div class="dropdown">
	  <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown">
	    Dropdown
	    <span class="caret"></span>
	  </button>
	  <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
	    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Action</a></li>
	    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Another action</a></li>
	    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Something else here</a></li>
	    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Separated link</a></li>
	  </ul>
	</div>

# 3.按钮组

> **源码文件**：button-groups.less

## 使用方法

	多个按钮外部使用一个容器元素（比如div），然后在容器上应用`.btn-group`样式即可。
	
**提示**
> 当为`.btn-group`中的元素应用工具提示或弹出框时，必须指定 `container: 'body'` 选项，这样可以避免不必要的副作用

## 按钮工具栏

	<div class="btn-toolbar" role="toolbar">
	  <div class="btn-group">...</div>
	  <div class="btn-group">...</div>
	  <div class="btn-group">...</div>
	</div>

## 尺寸

只要给 `.btn-group` 加上 `.btn-group-*` 类，为按钮组中的每个按钮都调整尺寸了。

## 垂直排列

	<div class="btn-group-vertical">
	  ...
	</div>
	
## 两端对齐排列的按钮组（自适应分组）

**关于`<button>`和`<a>`元素**

	只须将一系列 .btn 元素包裹到 `.btn-group.btn-group-justified` 中即可。
	
	该样式仅完美的支持a元素的按钮，`button`元素支持不太好。

**原理**

	利用了CSS的`display:table`和`display:table-cell`特性，能够解决所有在使用绝对定位和浮动定位进行多列布局时所遇到的问题。
	


