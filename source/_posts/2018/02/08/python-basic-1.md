---
title: Python汇总（一）
date: 2018-02-08 21:05:02
tags: [Python]
---

## 基本语法（查询备注）

- `raw_input`:内建函数，读取标准输入，将读取到的数据赋值给指定的变量
- 字符串
	- `+`：用于字符串连接运算
	- `*`：用于字符串重复 
- 列表和元组
	- 可以存储不同类型的对象
	- 列表：用中括号，元素的值可以改变；元组：用小括号，元素的值不可改变。
- 字典
	- 用大括号{}

- for循环中，如果使用`print`语句，则默认会给每一行添加一个换行符，如果在`print`语句后添加一个逗号`，`，则可以改变换行行为。
- `range`和`len`常用于字符串索引

	```
	for i in range(len(foo)):
		print ******
	```

- `raise`故意引发一个异常
- 整型对象和字符串对象是不可变对象
- `//` 除法不管操作数为何种数值类型，总是舍去小数部分，返回数字序列中比真正的商小的最接近的数字

## 标准类型

- 数字
- Integer 整型
- Boolean 布尔型
- Long integer 长整型
- Floating point real number浮点型
- Complex number 复数型
- String 字符串
- List列表
- Tuple元组
- Dictionary 字典

## 文件和内建函数

- 打开文件

	```
		handle = open(file_name,access_mode='r')
		# r---read;w---write;a---append
		# + --- 读写；b---二进制访问
		# 默认 r
		
	```
### 常用内建函数

函数				|描述
-----				|------
`dir(obj)`		|显示对象的属性
`help(obj)`		|显示对象的文档字符串
`type(obj)`		|返回对象的类型
`cmp(obj1,obj2)`	|比较
`repr(obj)`		|返回一个对象的字符串表示
`str(obj)`		|返回对象适合可读性好的字符串表示

## 模块

- sys
	- sys.stdout.write():输出函数
	- sys.platform:操作系统
	- sys.version:系统版本

- 结构和布局
	- 起始行
	- 模块文档
		- 模块外可通过`module.__doc__` 
	- 模块导入
	- 变量定义
		- 尽量使用局部变量代替全局变量
	- 类定义
		- 当模块被导入时class语句会被执行
		- 类的文档变量是`class.__doc__` 
	- 函数定义
		- 函数可以通过`module.function()`在外部被访问到
		- 函数的文档变量是`function.__doc__` 
	- 主程序

## `__name__`指示模块

- 如果模块是被导入，`__name__`的值为模块的名字
- 如果模块是被直接执行，`__name__`的值为`__main__`

## 测试代码

- `unittest`模块，被称为`PyUnit
- 调试器：`pdb`
- 记录器：`logging`
- 性能测试起：`profile` `hotshot` `cProfile`


## 标准类型分类

数据类型	|存储模型	|更新模型	|访问模型
-----		|----		|-----		|------
数字		|标量		|不可更改	|直接访问
字符串		|标量		|不可更改	|顺序访问
列表		|容器		|可更改		|顺序访问

## 术语

- PEP：`Python Enhancement Proposal`在新版Python中增加新特性的方式
 

## 具体示例

- 问：有一个字符串，需要通过一个循环按照这样的形式显示它：每次都把位于最后的一个字符砍掉

		>>> s = 'abcde'
		>>> i = -1
		>>> for i in range(-1,-len(s),-1):
		...     print(s[:i])
		... 
		abcd
		abc
		ab
		a
		# 显示整个字符串
		print(s[:None])
		

	