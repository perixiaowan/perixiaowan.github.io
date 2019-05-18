---
title: Python笔记（一）-简介
date: 2017-07-19 18:54:06
tags: [Python]
---
## Python 基本原理
### Pythony运行过程

- 源代码 》编译成“字节码” 》 转发到“虚拟机”（PVM）
- 其中，字节码保存为一个“.pyc”为扩展名的文件

### Python虚拟机（PVM）

- 是Python的运行引擎，无需安装。
- 字节码不是二进制代码，而是特定与Python的一种表现形式。

## 运行程序

	>>> import os
	>>> os.getcwd()   //获得当前路径
	
## 交互提示模式

- 不需要缩进；
- 用一个空行结束复合语句；
- 不能复制粘贴多行代码，除非这段代码的每条复合语句的后面都包含空行。

## 系统命令行和文件
'script1.py'文件

	# A first Python script
	import sys
	print(sys.platform)
	print(2 ** 100)
	x = 'Spam!'
	print(x * 8)
---

	LiuXiaowanMacBookPro:LearningPython xiaowan$ python script1.py 
	darwin
	1267650600228229401496703205376
	Spam!Spam!Spam!Spam!Spam!Spam!Spam!Spam!
	LiuXiaowanMacBookPro:LearningPython xiaowan$ 
	
---
	 xiaowan$ python script1.py > saveit.txt   //结果重定向到一个文件 saveit.txt
	 
## UNIX 可执行脚本（#！）
- 第一行是特定的：以字符‘#!’开始
- 拥有可执行的权限

文件brian实例：

	#！/usr/local/bin/python
	print('the ......')
	
第一行有特定意义，操作系统使用它找到解释器来运行文件其他部分的程序代码。

如果使用`python brian` 运行文件，则第一行会被忽略

### Unix env查找技巧

第一行注释可以写成：`#！/usr/bin/env python`, 在绝大多数Unix shell中，env程序可以通过系统的搜索路径搜索PATH环境变量列出的目录。

## Windows 点击文件图标

在windows中，点击python脚本文件，为了避免闪退，可以在脚本的最后添加内置`input()`函数的一条调用语句。

### input函数用法

	input('Press Enter to exit')
	nextinput = input()

## 模块导入和重载

	>>> import script1
	darwin
	1267650600228229401496703205376
	Spam!Spam!Spam!Spam!Spam!Spam!Spam!Spam!
	>>> import script1
	>>> 

如上所示，脚本script1.py只在第一次导入时运行，之后重复导入，就不会再继续工作。

- 每个程序运行每次不多于一次
- 如需重新运行程序，可以使用如下代码:

		>>> 
		>>> from imp import reload
		>>> reload(script1)
		darwin
		1267650600228229401496703205376
		Spam!Spam!Spam!Spam!Spam!Spam!Spam!Spam!
		<module 'script1' from '/Users/xiaowan/Documents/	python/LearningPython/script1.py'>
		>>> 
		//其中reload函数希望获得的参数是一个已经加载了的模块对象的名称。

myfile.py:
	
	title = "The Meaning of Life"
	
在其他组件中获得myfile.py的title属性方法：

- 方法1

		import myfile
		print(myfile.title)
		
- 方法2
	
		from myfile import title
		print(title)

	
> 避免使用`import`和`reload` 启动程序，尽可能使用`from`代替

## 使用exec运行模块文件

	>>> exec(open('script1.py').read())
	darwin
	1267650600228229401496703205376
	Spam!Spam!Spam!Spam!Spam!Spam!Spam!Spam!
	>>> 

- 每次exec都运行文件的最新版本。
- 和import的不同
	- import每个进程只运行文件一次，并且它会把文件生成到一个单独的模块名称空间中
	- 为模块名称空间分割的代价是：在修改之后需要重载。

## IDLE

启动IDLE

	//Mac操作系统
	LiuXiaowanMacBookPro:/ xiaowan$ which idle
	/usr/bin/idle
	LiuXiaowanMacBookPro:/ xiaowan$ /usr/bin/idle 

注意事项：

- 保存文件时，必须明确添加`.py`
- 通过选择在文本编辑窗口`Run->Run Module`运行脚本，而不是通过交互模式的导入和重载。

## Python 基本语法

- 2**8: 2^8
- dir(模块名)：获得模块内部可用的变量名的列表，返回这个模块内部的所有属性。

