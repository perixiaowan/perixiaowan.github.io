---
title: Linux的$符号的用法
subtitle: 要想管理别人，先要管理好自己
date: 2016-08-29 11:38:09
tags: [Linux]
---

	Bash中的$符号的作用是参数替换，将参数名替换为参数所代表的值。对于$来说，大括号是可选的，即$A和${A}代表同一个参数。

<!--more-->

# ${}带冒号的有以下几种表示式 #

## ${parameter:-word} ##

	如果parameter为null或者未设置，整个参数替换表达式值为word

## ${parameter:=word} ##

	如果parameter为null或者未设置，整个参数替换表达式值为word，并且parameter参数值设置为word

## ${parameter:?word} ##

	如果parameter为null或者未设置，则打印出错误信息。否则，整个参数替换表达式值为word

## ${parameter:+word} ##

	如果parameter不为null或者未设置，则整个参数替换表达式值为word

## ${parameter:offset} ##

	从parameter偏移量为offset起截取至parameter结尾的字符串

## ${parameter:offset:length} ##

	从parameter偏移量为offset起截取长度为length的字符串

**演示结果如下图所示**

![](http://i.imgur.com/1HK6okN.jpg)

# ${}带！的几种表达方式 #


## ${!prefix*}和${!prefix@} ##

	将带有前缀为prefix的参数名打印出来

## ${!name[@]}和${!name[*]} ##

	这个是针对name数组的，打印出来name数组有哪些下标

**演示结果如下图所示**

![](http://i.imgur.com/nYfcPkF.jpg)

# ${}带正则匹配的几种表达式 #

## ${parameter#word}和${parameter##word} ##

	从头开始扫描word，将匹配word正则表达的字符过滤掉

## ${parameter%word}和${parameter%%word} ##

	从尾开始扫描word，将匹配word正则表达式的字符过滤掉
	%为最短匹配，%%为最长匹配

**演示结果如下图所示**

![](http://i.imgur.com/JtC1AFD.jpg)

## ${parameter/pattern/string}和${parameter//pattern/string} ##

	将parameter对应值的pattern字符串替换成为string字符串
	/表示只替换一次
	//表示全部替换

**演示结果如下图所示**

![](http://i.imgur.com/LpN2yDx.jpg)


> 本文内容来源参考：[http://www.cnblogs.com/yjf512/archive/2013/06/03/3114803.html](http://www.cnblogs.com/yjf512/archive/2013/06/03/3114803.html)