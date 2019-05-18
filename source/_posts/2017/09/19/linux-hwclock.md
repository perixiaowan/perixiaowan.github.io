---
title: 每日一个Linux命令（hwclock）
date: 2017-09-19 09:18:30
tags: [Linux]
---

## hwclock

hwclock与clock命令是同一个命令

- 用来查询和设置硬件时钟（RTC=Real Time Clock）
- 硬件时钟是指主机板上的时钟设备；系统时钟是指kernel中的时钟。
- hwclock既可以将硬件时钟同步到系统时钟，也可以将系统时钟同步到硬件时钟
- 当linux启动时，系统时钟会去读取硬件时钟的设定，之后系统时钟独立运作
- 使用`date`命令修改系统时间，不会自动去修改硬件时钟

## 常用参数

- `-r --show`：读取并打印硬件时钟
- `-s --hctosys`：将硬件时钟同步到系统时钟
- `-w --systohc`：将系统时钟同步到硬件时钟


## 示例

### hwclock命令与clock命令是一个东西

	[xiaowan@iZj6c1zj4mlgc240ctadrlZ ~]$ type -a hwclock
	hwclock is /usr/sbin/hwclock
	hwclock is /sbin/hwclock
	[xiaowan@iZj6c1zj4mlgc240ctadrlZ ~]$ type -a clock
	clock is /sbin/clock
	[xiaowan@iZj6c1zj4mlgc240ctadrlZ ~]$ ll /usr/sbin/hwclock /sbin/hwclock 
	-rwxr-xr-x 1 root root 44528 Mar 22 20:04 /sbin/hwclock
	lrwxrwxrwx 1 root root    18 Jul 10 12:31 /usr/sbin/hwclock -> ../../sbin/hwclock
	[xiaowan@iZj6c1zj4mlgc240ctadrlZ ~]$ ll /sbin/clock 
	lrwxrwxrwx 1 root root 7 Jul 10 12:31 /sbin/clock -> hwclock
		
### 显示硬件时钟

	[root@iZj6c1zj4mlgc240ctadrlZ ~]# hwclock
	Tue 19 Sep 2017 02:11:15 PM CST  -0.157877 seconds
	[root@iZj6c1zj4mlgc240ctadrlZ ~]# hwclock -r
	Tue 19 Sep 2017 02:11:23 PM CST  -0.145729 seconds
	[root@iZj6c1zj4mlgc240ctadrlZ ~]# hwclock --show
	Tue 19 Sep 2017 02:11:46 PM CST  -0.170800 seconds
	
### 修改日期并同步到硬件时钟

	[root@iZj6c1zj4mlgc240ctadrlZ ~]# date
	Tue Sep 19 14:12:35 CST 2017
	[root@iZj6c1zj4mlgc240ctadrlZ ~]# date 09191415
	Tue Sep 19 14:15:00 CST 2017
	[root@iZj6c1zj4mlgc240ctadrlZ ~]# hwclock -w
	[root@iZj6c1zj4mlgc240ctadrlZ ~]# hwclock
	Tue 19 Sep 2017 02:15:15 PM CST  -0.517490 seconds
	[root@iZj6c1zj4mlgc240ctadrlZ ~]# 
	
