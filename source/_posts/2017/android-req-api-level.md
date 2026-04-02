---
title: Android@Call requires API level 9 (current min is 8)
date: 2017-07-31 15:32:47
tags: 
	- Android开发
---

## 错误描述

在用Eclipse开发过程中，当涉及到系统版本不同时，会出现系统提示错误。

## 原因

创建项目时，设置了最低版本API Level，比如是8，因此，Eclipse检查自己调用的API后，发现版本号不能向低版本兼容，比如用的控件是Level9 以上的，超过了8，所以提示错误。

## 解决方案

- 右键
	`点击项目->Android tools ->Clear Link Markers`. 
	即可临时解决，但是如果调试用的模拟器是低版本的，则在调试完后还有这个错误。

- 如果把`AndroidManifest.xml`文件中的`uses-sdk`的`android:minSdkVersion`改为报错的那个高版本就没事。比如:
 
	    android:minSdkVersion="9"   //这个之前是8
	    android:targetSdkVersion="19" />