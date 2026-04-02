---
title: 每日一个Linux命令（netstat）
subtitle: 只有回不了的过去，没有到不了的明天。---至亲爱的自己
date: 2016-10-05 08:11:50
tags: 
	- Linux
---

> **netstat** 用来打印Linux中网络系统的状态信息，可以让你得知整个Linux系统的网络情况

<!--more-->

![](http://i.imgur.com/mPfAnJG.jpg)

1. 列出所有端口

	- `netstat -a` #列出所有端口
	- `netstat -at` #列出所有tcp端口
	- `netstat -au` #列出所有udp端口

![](http://i.imgur.com/t1yoCtd.jpg)

2. 列出所有出于监听状态的Sockets

	- `netstat -l`  #只显示监听端口
	- `netstat -lt` #只列出所有监听tcp端口
	- `netstat -lu` #只列出所有监听udp端口
	- `netstat -lx` #只列出所有监听UNIX端口

3. 显示每个协议的统计信息	

	- `netstat -s` #显示所有端口的统计信息
	- `netstat -st` #显示tcp端口的统计信息
	- `netstat -su`	#显示udp端口的统计信息

![](http://i.imgur.com/70clUe8.jpg)

4. 在netstat输出中显示PID和进程名称

![](http://i.imgur.com/yTk93k3.jpg)

