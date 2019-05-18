---
title: Python笔记（os模块）
date: 2018-02-25 12:31:05
author: liuxiaowan
tags: [Python]
---

# `POSIX`

POSIX表示可移植操作系统接口（Portable Operating System Interface of UNIX，缩写为 POSIX ），POSIX标准定义了操作系统应该为应用程序提供的接口标准，是IEEE为要在各种UNIX操作系统上运行的软件而定义的一系列API标准的总称，其正式称呼为IEEE 1003，而国际标准名称为ISO/IEC 9945。（摘自：[POSIX](https://baike.baidu.com/item/POSIX/3792413?fr=aladdin)）

# `os`模块

- 提供`POSIX`工具

## 常用`os`模块工具

|任务   |工具
|----   |-------
|shell变量  |os.environ
|运行程序     |os.system,os.popen,os.execv,os.spawnv
|派生进程     |os.fork,os.pipe,os.waitpid,os.kill
|文件描述符，文件锁  |os.open,os.read,os.write
|文件处理   |os.remove,os.rename,os.mkfifo,os.mkdir,os.rmdir
|管理工具   |os.getcwd,os,chdir,os.chmod,os.getpid,os.listdir,os.access
|移植工具   |os.sep,os.pathsep,os.curdir,os.path.split,os.path.join
|路径名工具  |os.path.exists('path'),os.path.isdir('path'),os.path.getsize('path')
