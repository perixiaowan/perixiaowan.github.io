---
title: Standard 1.1.x VM与Standard VM的区别
subtitle: 在事情未成功之前，一切总看似不可能。
date: 2016-08-20 16:11:05
tags: [Java,转载]
---

在Eclipse或MyEclipse中要设置Installed JREs时，有三个选择：

- Execution Environment Description
- Standard 1.1.x VM
- Standard VM

那么我们应该选择哪个JVM呢？

<!--more-->

首先应该弄清楚它们的含义。


	1. Execution Environment Description
	它是指执行环境描述，它是说通过一个执行环境描述文件来定义项目所需的JRE设置的所有细节。主要是可以自定义安装的很多方面。开发者一般用不到这个选项。
	2. Standard 1.1.x VM
	这个JVM设置是用于支持遗留的JVM 1.1.x版本的编译，通常我们也用不到。
	3. Standard VM
	标准的Java虚拟机设置。这个才是开发者最常用的选项。



> 转载地址：[http://blog.csdn.net/chszs/article/details/41624675](http://blog.csdn.net/chszs/article/details/41624675)