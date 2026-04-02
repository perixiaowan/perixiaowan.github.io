---
title: Linux中对limits.conf配置文件的优化
author: liuxiaowan
date: 2017-06-22 17:07:54
tags: 
	- Linux
---

## 引言

*Linux*中所有东西都是文件，系统配置的最大打开文件数以及单个进程能够打开的最大文件数都是由*linux*文件句柄限制的，默认一般都是*1024*,生产服务器用其实很容易就达到这个数量。

<!--more-->

## *limits.conf*配置文件

### 工作原理

`limits.conf`文件实际是`Linux PAM`（插入式认证模块，`Pluggable Authentication Modules `中 `pam_limits.so` 的配置文件），突破系统的默认限制，对系统访问资源有一定保护作用，当用户访问服务器时，服务程序将请求发送到PAM模块，PAM模块根据服务名称在`/etc/pam.d`目录下选择一个对应的服务文件，然后根据服务文件的内容选择具体的PAM模块进行处理。该文件是针对用户进行限制的。

### 文件格式

    <domain>  <type>  <item>  <value>

**1. domain**

- 需要限制的用户名；
- 需要限制的用户组，必须使用 @group 格式；
- 通配符*，表示默认，意为限制所有用户；
- 通配符%，使用%group 格式，限制匹配的用户组；

**2. type**

- soft：强制软限制，即当前系统生效的设置值；
- hard：强制硬限制，表明系统中所能设定的最大值，soft 的限制不能比 hard 限制高；
- - 就表明同时设置了 soft 和 hard 的值；

**3. item(可以是如下其中一项)**

item	|	说明
------|--------------------------------------
core	|限制内核文件的大小（limits the core file size(KB)）
data	|最大数据大小（KB）(max data size)
fsize	| 最大文件大小（KB）(maximum filesize);
memlock|最大锁定的内存地址空间（max locked-in-memory address space(KB)）
nofile	|打开文件的最大数目(max number of open files)
rss		|最大持久设置大小(max resident set size(KB))
stack	|最大栈大小(max stack size(KB))
cpu		|以分钟为单位的最大CPU时间(max CPU time(MIN))
nproc	|进程最大数目(max number of processes)
as		|地址空间限制(address space limit)
maxlogins	|此用户允许登录的最大数目(max number of logins for this user)
maxsyslogins	|此系统允许登陆的最大数目(max number of logins on the system)
priority	|用户程序运行的优先级(the priority to run user process with)
locks	|此用户可以锁定的文件最大数目(max number of file locks the user can hold)
sigpending	|等待信号的最大数目(max number of pending signals)
msgqueue	|POSIX消息队列可占用的最大内存(max memory used by POSIX message queues(bytes))
nice	|被允许的最大优先级(max nice priority allowed to raise to)
rtprio	|最大实时优先级(max realtime priority)

### 运行示例


`cat /etc/security/limits.conf`

	#*               soft    core            0
	#*               hard    rss             10000
	#@student        hard    nproc           20
	#@faculty        soft    nproc           20
	#@faculty        hard    nproc           50
	#ftp             hard    nproc           0
	#@student        -       maxlogins       4

	*              hard    nproc   16384
	*              soft    nofile  2048
	*              hard    nofile  65536
