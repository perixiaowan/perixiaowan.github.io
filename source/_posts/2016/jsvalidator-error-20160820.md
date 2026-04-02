---
title: Java常见问题集
subtitle: 真正的忘记，并非不再想起，而是偶尔想起，心中却不再有波澜
date: 2016-08-20 16:22:58
tags:
	- Java
---
## 报错1 ##

> 错误描述：解决MyEclipse报errors running builder 'javascript validator' on project

导入jquery的js到项目中，Eclipse每次检测到功能代码变化（保存动作触发）就报错：

<!--more-->

    errors running builder ‘javascript validator’ on project。

解决办法: 

	project>Properties>Builders,将JavaScript Validator的复选框去掉

如下图所示：
![](http://i.imgur.com/PQgBbMk.jpg)

## 报错2 ##

> 错误描述：Java compiler level does not match the version of the installed Java project facet.
> 
> 当工程项目经常copy在不同机器上部署时，会报上述错误，如下图所示：

![](http://i.imgur.com/e33x4XM.jpg)

解决办法：

	1. 在资源管理器下，找到项目所在的目录，在.settings子目录里面，用文本编辑器打开org.eclipse.wst.common.project.facet.core.xml

	2. 修改下图红色画线部分，让它与项目的编译器版本设置保持一致即可。

![](http://i.imgur.com/2cp6Tga.jpg)

	3. 查看项目的编译器版本设置的方法
	鼠标右键项目>Properties>Java Compiler,如下图所示：

![](http://i.imgur.com/Bx5ilMP.jpg)
