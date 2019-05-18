---
title: WARNING:REMOTE HOST IDENTIFICATION HAS CHANGED解决办法
date: 2017-07-26 21:13:54
tags: [Linux]
---

## 问题描述

ssh root@ip

	WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!

![remotehost](http://liuxiaowan.com/2017/07/26/linux-problem-remotehost/remote.PNG)

## 解决办法
	
	//查找在`konwn_hosts`中是否含有服务器ip的信息
	$ cat ~/.ssh/known_hosts
	//删除含有服务器ip的信息
	$ vim ~/.ssh/known_hosts
	