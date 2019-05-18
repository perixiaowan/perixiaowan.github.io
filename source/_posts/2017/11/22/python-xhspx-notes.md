---
title: python笔记
date: 2017-11-22 23:06:04
tags: [Python]
---



## 基础

- `pyc`：字节码
- `pyo`: 优化后的字节码
- `pyd`：供他人调用的动态链接库

## 命令
	# 编译成字节码文件pyc
	python -m py_compile 文件名
	# 编译成优化后的字节码文件pyo
	python -O -m py_compile 文件名
	
## 函数编程模式

### 入口函数

	if __name__ == '__main__':
		...
		pass

### 类函数

类中定义的函数，必须带有self参数，如下所示：

	class demo01:
    	def funcname(self,parameter_list):
       	pass
	

## 基本语法

- python2 默认的编码方式`ASCII`；python3 文本默认编码方式`Unicode `
- 双下划线开头的类成员是私有成员：`__foo`
- 双下划线开头和结尾的类成员是python特殊方法专用的标识：`__init__()`代表类的构造函数
- python关键字只包含小写字母

## OOP

### 继承

当类B和类C都继承A时，那么当D类同时多继承B和C时，那么查找会遵循以下方式

- 当类是经典类时，多继承情况下，会按照深度优先方式查找
- 当类是新式类时，多继承情况下，会按照广度优先方式查找

### 新式类&经典类

当前类或父类继承object类时是新式类，其他的都是经典类

### 无重载

重名的函数，哪个在后哪个会生效

## 爬虫

### 原生模块

urllib urllib2 re

### 框架

Scrapy／BS4

### 安装模式

- 安装1:pip模式

		pip install scrapy
		
- 安装2:离线安装

	- 解压缩安装包`scrapy-master.zip`,解压缩到与Python安装同级目录下
	- 加载控制台，进入到解压缩的目录后
		python setup.py install
		
- 测试
	
		scrapy shell https://www.baidu.com
		
### 框架标准开发流程：

- 在终端指定文件夹下，使用Scrapy指令构建项目

		scrapy startproject 项目名称
	
- 创建蜘蛛

		scrapy genspider doubanspider douban.com
		# 爬虫名称和doubanspider.py程序文件中的name类成员定义的值一致
		scrapy crawl 爬虫名称  
		
## web网站开发Django

- 底层使用socket实现
- Django完全基于Python的web框架，实现了MVC的设计思想
- MVT：
	-  M：模型层 model.py 自定义脚本，数据库
	-  T：templates html
	-  V: 视图渲染控制器 views.py urls.py

### 安装配置Django

	pip install Django -i 国内镜像源
	
- 配置系统变量
	添加两个变量
	
- 验证

	在终端启动命令行
	
		import django
		django.get_version()

### 创建Django

	django-admin startproject DjangoProject

### 重新编译并构建工程项目

- 进入到Django的工程文件夹
	
		manage.py makemigrations
		
### 自动生成Django工程中的支撑数据表

- 进入到Django的工程文件夹
	
		manage.py migrate
		
### 在工程中创建app应用（1个工程可以对应多个app）

- 进入到Django的工程文件夹中
- 指令：

		.manage.py startapp 应用名称
		//python3 manage.py startapp app01
		
### 启动Django工程

- 原理：自动启动内置的web服务器（HttpServer）

	将工程配置信息及所有应用的数据信息部署到服务器

- 指令
		# localhost:8000
		manage.py runserver 
		manage.py runserver IP地址 Port端口
		
- 热部署：修改脚本文件后无需重启服务器

### Django前端表达式

- 引用外部css静态资源资源

		{% load staticfiles %}
		

### CSRF

cross-site request forgery

跨站请求伪装，比XSS更危险

	# 在html表单中添加此句，可以防止csrf的攻击
	{% csrf_token %} 

### 装饰器@login_required

### Django实现数据库的操作（MySQL）

- 配置数据库连接参数
	- 找到`settings.py`文件，找到`DATABASES`,修改相关项



 