---
title: ios目录解析
date: 2017-08-08 08:36:55
tags: [ios]
---

## ios目录结构

ios工程中可以通过`Group`的方式在工程中实现逻辑分包，有利于组织和管理代码，使工程结构更清晰和易于理解。我的工程结构：

- Controller

	系统控制层，放置`RootViewController`；
	
- DataAccess
	
- Model 

	数据模型类文件目录。主要用于存放自定义的数据模型类。
	
- Network

	这个文件下主要放的是与服务器交互的核心文件，例如：Https、Socket、Webserver等。

- Common

	整个项目都可能引用的类会放进Common目录。

- Resource

	存放资源文件

- Other Sources
- Frameworks

	自己封装的类库；

- Products

