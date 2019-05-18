---
title: Meta标签中各个属性的含义
subtitle: 一切都是最好的安排
date: 2016-08-23 14:51:31
tags: html5
---
Meta标签的正确使用在前端展示方面也显示着大学问，下面是手机的Meta标签使用方法。

# 浏览器兼容模式 #
	
`告诉浏览器以什么版本的IE的兼容模式来显示网页`

    <meta http-equiv="X-UA-Compatible" content="IE=5" >
    <meta http-equiv="X-UA-Compatible" content="IE=7" >
    <meta http-equiv="X-UA-Compatible" content="IE=8" >
	如果加上下面一行则表示，永远以最新的IE版本来显示网页
    <meta http-equiv="X-UA-Compatible" content="IE=edge" >

<!--more-->

# expires(期限) #

可以用于设定网页的到期时间。一旦网页过期，必须到服务器上重新调阅，但是必须使用GMT的时间格式

	<meta http-equiv="expries" content="Wed, 26 Feb 2017 08:21:57 GMT" />

# pragma(cach模式) #

禁止浏览器从本地的缓存中调阅页面内容，设定后访问者将无法脱机浏览

	<meta http-equiv="pragma" content="no-cache" />

#  refresh(刷新) #
定时让网页自动链接到指定URL，单位是秒

	<meta http-equiv="refresh" content="5;url="http://www.baidu.com" />

# set-cookie(cookies设定) #

	<meta http-equiv="set-cookie" content="cookievalue=xxx;expires=Wed, 26 Feb 2012 08:21:57 GMT;path=/" />

# window-target(显示窗口的设定) #

设置当前窗口页面显示方式，如果设置成_top就会强制页面在当前窗口以独立页面显示，防止别人在框架里调用页面

	 <meta http-equiv="window-target" content="_top" />

# content-type(显示字符集设定) #

设定页面使用的字符集
	
	<meta http-equiv="content-type" content="text/html;charset=gb2312" />

# content-language(显示语言的设定) #

设置页面的显示语言

	 <meta http-equiv="content-language" content="zh-cn" />

# keywords(关键字) #

告诉搜索引擎这个网页的关键字

	<meta name="keywords" content="girl, sexy, hot" />

# description(简介) #

告诉搜索引擎网站的主要内容

	<meta name="description" content="This page is about pretty girls." />

#  robots(机器人向导) #

- 告诉搜索引擎哪些页面需要索引，哪些页面不需要索引；
- content的值包括：all, none, index, noindex, follow, nofollow。 默认是all

	<meta name="robots" content="none" />

# author(作者) #

标网页作者

	<meta name="author" content="cqqjj1029@gmail.com" />

# format-detection属性 #

用来检测html里的一些格式的

- telephone
	
	去掉数字的链接样式	
	meta name="format-detection" content="telephone=no"

- email 
	
	告诉设备不识别邮箱，点击之后不自动发送 	
	meta name="format-detection" content="email=no"

- adress
	
	禁止跳转至地图！ 
	meta name="format-detection" content="adress=no" 

# theme-color #

	<meta name="theme-color" content="#600090">
	作用：可以让浏览器地址栏变颜色

# apple-mobile-web-app-capable #

	<meta name="apple-mobile-web-app-capable" content="yes">
	作用：就是删除默认的苹果工具栏和菜单栏。
	content有两个值”yes”和”no”,当我们需要显示工具栏和菜单栏时，这个行meta就不用加了，默认就是显示。

# apple-mobile-web-app-status-bar-style #

	<meta name="apple-mobile-web-app-status-bar-style" content="#60090">
	作用：是控制状态栏显示样式

# msapplication-navbutton-color #

	<meta name="msapplication-navbutton-color" content="#600090">
	作用：固定网站浏览器窗口中的“后退”和“前进”按钮的自定义颜色，如果没有此 meta 元素，则默认颜色将基于网站图标（即，favicon）的调色板。