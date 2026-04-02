---
title: 每日一个Linux命令（nslookup）
subtitle: 眼泪不是答案，拼搏才是选择。
date: 2016-10-05 08:11:50
tags: 
    - Linux
---

> **nslookup**常用域名查询工具，查DNS信息用的命令

有两种工作模式

<!--more-->

1. 交互模式

	用户可以向域名服务器查询各类主机，域名的信息或输出域名中的主机列表。
	
	直接输入`nslookup`命令即可进入交互模式，此时会连接到默认的域名服务器（`/etc/resolv.conf`的第一个dns地址）

	![](http://i.imgur.com/372Weou.jpg)

2. 非交互模式 

	用户可以针对一个主机或域名仅仅获取特定的名称或所需信息

	输入`nslookup 域名`即可进入非交互模式

	![](http://i.imgur.com/Xbu849I.jpg)