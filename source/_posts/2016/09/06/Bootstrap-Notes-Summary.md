---
title: Bootstrap-Notes(概述篇)
subtitle: 统计数据往往是你想让它说明什么它就能说明什么
date: 9/6/2016 5:19:33 PM 
tags: [Bootstrap,前端]
---
# 1、概述 #

> Bootstrap的强大之处在于对常见的CSS布局小组件和JavaScript插件都进行了完整且完善的封装

Bootstrap提供了如下重要特性：
	
- 一套完整的基础CSS插件
- 丰富的预定义样式表
- 一组基于jQuery的JS插件集
- 一个非常灵活的响应式

<!--more-->

> MIT许可证
>
> 源自麻省理工学院（Massachusetts Institute of Technology, MIT），又称“X条款”（X License）或“X11条款”（X11 License）
MIT内容与三条款BSD许可证（3-clause BSD license）内容颇为近似，但是赋予软件被授权人更大的权利与更少的限制。[1] 


**工具介绍**
- Font Awesome插件---一套icon字体，
- Sass：一种CSS的开发工具
- Less：一种CSS预处理技术，是一种动态样式语言，属于CSS预处理语言中的一种，使用类似CSS的语法，为CSS赋予了动态语言特性，如变量、继承、运算、函数等，它可以在多语言环境中使用，帮助手册www.lesscss.net

## Bootstrap预编译版目录结构 ##

![](http://i.imgur.com/mcUORpK.jpg)

## Bootstrap源码目录 ##

![](http://i.imgur.com/WX4Tw2M.jpg)

## 3.x版和2.x版本区别： ##


> 2.x版本用于展示icon小图标的.png图片不见了，取代的是fonts目录的4种类型的字体文件，称这种方式为@font-face版本的icon实现，该字体来自http://glyphicons.com/网站，并得到免费授权

所谓@font-face，是通过CSS里的@font-face语法，将安全的Web字体（Web Font）即时下载到客户端，从而进行引用显示。

**好处：图标可以被任意缩放、改变颜色，你需要做的只是像修改文字样式那样修改图标样式即可**

**备注**


> Bootstrap所有的javascript插件都依赖于jQuery库，字体文件（fonts文件夹下）是使用Mac下的应用软件ImageOptim对.png图片进行压缩得到的。

## Bootstrap测试工具 ##

> **Bootlint**
> 
> 是 Bootstrap 官方所支持的 HTML 检测工具。在使用了 Bootstrap 的页面上（没有对 Bootstrap 做修改和扩展的情况下），它能自动检查某些常见的 HTML 错误。

## 被支持的浏览器 ##

![](http://i.imgur.com/tiM7sfq.jpg)

## IE8或9 ##

Internet Explorer 8 需要 Respond.js 配合才能实现对媒体查询（media query）的支持。

![](http://i.imgur.com/ztEHZPl.jpg)

## 国产浏览器高速模式 ##

将下面的 <meta> 标签加入到页面中，可以让部分国产浏览器默认采用高速模式渲染页面：

    <meta name="renderer" content="webkit">

*目前只有360支持此标签*

## 可访问性 ##

    Bootstrap 遵循统一的 web 标准，另外，通过做一些少量的修改，还可以让使用 辅助设备（AT - ASSISTIVE TECHNOLOGY）上网的人群访问你的站点。

## CSS基本语法 ##

通用CSS选择器（*）是0 优先级

常见属性选择器用法

选择器		|用法
------------|-----------------------------
[att=value]	|该属性有指定的确切值
[att~=value]|该属性值必须是多个用空格隔开的值，而且这些值中的一个必须是指定的值“value”
[att|=value]|属性的值就是“value”或者以“value”开始并立即跟上一个“-”字符，也就是“value-”，比如lang="zh-cn"
[att^=value]|该属性的值必须以指定的值开始
[att$=value]|该属性的值必须包含特定的值（无论其位置怎么样）
[att*=value]|该属性的值必须以特定值结束



- CSS里的子元素用符号“>”表示
- 兄弟选择器
	- 临近兄弟：使用+表示
	- 普通兄弟（查找某一个指定元素后面的兄弟节点）：使用~表示

## 伪类 ##

CSS3种常见伪类

属性			|描述
------------|----------------------
:hover		|鼠标滑过时的状态
:focus		|元素拥有焦点时的状态
:first-child|指定某一个元素的第一个子元素
:last-child	|指定某一个元素的最后一个子元素
:nth-child()|指定某个元素的一个或多个待定的子元素，可以传入数字，也可以传入even（奇数）或odd（偶数）

## display属性 ##

> 定义建立布局时元素生成的框的类型.

属性值				|意义
--------------------|-----------------------------------------
none				|此元素不会被显示
block				|此元素将显示为块级元素，此元素前后会带有换行符
inline				|默认：此元素会被显示为内联元素，元素前后没有换行符
inline-block			|行内块元素
list-item			|此元素会作为列表显示
run-in				|此元素会根据上下文作为块级元素或内联元素显示
table				|此元素会作为块级表格来显示，表格前后带有换行符
inline-table			|此元素会作为内联表格来显示，表格前后带有换行符
table-row-group		|此元素会作为一个或多个行的分组来显示（类似tbody）
table-header-group	|此元素会作为一个或多个行的分组来显示（类似thead）
table-footer-group	|此元素会作为一个或多个行的分组来显示（类似tfoot）
table-row			|此元素会作为一个表格行显示（类似tr）
table-column-group	|此元素会作为一个或多个列的分组来显示（类似colgroup）
table-column			|此元素会作为一个单元格来显示（类似col）
table-cell			|此元素会作为一个表格单元格来显示(td或th)
table-caption		|此元素会作为一个表格标题显示（类似caption）
inherit				|规定应该从父元素继续display属性的值

## 媒体查询 ##

> 响应式设计的核心要素

	Bootstrap主要用到min-width、max-width和and语法

## 立即调用的函数表达式 ##

> js里，function的定义，可以通过后面加小括号形式进行立即调用。
> 
> 比如：（function（）{}（））；

## 事件命名空间 ##

> 事件后面都跟了一些字符串，简称为带有命名空间的事件
> 
> 当只出发自己的定义的事件时，为防止对别人绑定的事件回调产生影响，可以使用这种方法。

## $.data() ##

> 收集指定元素上的所有以data-开头的自定义属性，并合并成为一个对象字面量。

## 辅助设计 ##

> 不以data-开头的自定义属性，称之为辅助属性

目的：用于支持残障人士，老年人，文化水平不高或暂时患病的人使用屏幕阅读器进行页面访问。

例：*aria-hidden='true'* 对屏幕阅读器隐藏该div元素