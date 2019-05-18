---
title: Python笔记（二）-对象类型
date: 2017-07-22 07:01:50
tags: [Python]
---

## 核心数据类型

------------------------------
对象类型		| 例子 常量／创建
-------		|------------------------
数字			|1234
字符串			|‘spam‘
列表			|[1,[2,'three']]
字典			|{'food':'spam','taste':'yum'}
元组			|(1,'spam',4,'U')
文件			|myfile=open('egg','r')
集合			|set('abc'),{'a','b','c'}
其他类型		|类型，None，布尔型
编程单元类型	|函数，模块，类
与实现相关的类型|编译的代码堆栈跟踪

## 数字

- math数学模块

		>>> import math
		>>> math.pi
		3.141592653589793
		>>> math.sqrt(85)
		9.219544457292887
		
- random模块（随机数字的生成器和随机选择器）

		>>> import random
		>>> random.random()
		0.7113778481094155
		>>> random.choice([1,2,3,4])
		1
		>>> random.choice([1,2,3,4])
		4

## 序列的操作

- 字符串等序列类型可以反向索引
	
		//类似于负的索引号会简单的与字符串的长度相加
		>>> S = 'spam'
		>>> S[-1]
		'm'
		>>> S[len(S)-1]
		'm'	

- 支持分片（slice）的操作

		>>> S[1:3]
		'pa'
		>>> S[:2]
		'sp'
		>>> S[:-1]
		'spa'

- 序列支持使用`+`和`*`合并

		>>> S + 'xyz'
		'spamxyz'
		>>> S * 4
		'spamspamspamspam'

- 字符串在Python中具有不可变性
	
		>>> S[0]='z'
		Traceback (most recent call last):
		  File "<stdin>", line 1, in <module>
		TypeError: 'str' object does not support item assignment
		>>> S ='z' + S[1:]
		>>> S
		'zpam'

- find方法

		>>> S.find('pa')
		1
		>>> S
		'spam'
		>>> S.replace('pa','xyz')
		'sxyzm'
		>>> S
		'spam'
		
- split方法

		>>> line = 'aaa,bbb,cccccc,dd\n'
		>>> line.split(',')
		['aaa', 'bbb', 'cccccc', 'dd']
		>>> S
		'spam'
		>>> S.upper()
		'SPAM'
		
- rstrip()

		>>> line = 'aaa,bbb,cccccc,dd\n'
		>>> line = line.rstrip()
		>>> line
		'aaa,bbb,cccccc,dd'
		
- 格式化的高级替代操作

		>>> '%s,eggs,and %s' % ('spam','SPAM!')
		'spam,eggs,and SPAM!'
		>>> '{0},eggs,and {1}'.format('spam','SPAM')
		'spam,eggs,and SPAM'
		
## 帮助

- dir(变量)函数：返回一个列表。给出方法的名称。
- help(变量.函数): 查询函数具体用途。
- PyDoc:能够将结果生成HTML格式。

		>>> msg = """aaaaaaa"""
		>>> msg = """aaaaaaa
		... bbbbbb'''bbbbb""bbbb'vv
		... cccccc"""
		>>> msg
		'aaaaaaa\nbbbbbb\'\'\'bbbbb""bbbb\'vv\ncccccc'
		

## 模式匹配

	>>> import re
	>>> match = re.match('Hello[ \t]*(.*)world','Hello Python world')
	>>> match.group(1)
	'Python '
	>>> match = re.match('/(.*)/(.*)/(.*)','/usr/home/lumberjack')
	>>> match.groups()
	('usr', 'home', 'lumberjack')
	
## 列表

	>>> L = [123,'spam',1.23]
	>>> len(L)
	3
	>>> L[0]
	123
	>>> L[:-1]
	[123, 'spam']
	>>> L+[4,5,6]
	[123, 'spam', 1.23, 4, 5, 6]
	>>> L
	[123, 'spam', 1.23]
	
- 列表没有固定类型的约束
- 列表没有固定大小
- 列表的`append`和`pop`方法分别是在列表中插入一项和移除给定偏移量的一项

		>>> L.append('NI')
		>>> L
		[123, 'spam', 1.23, 'NI']
		>>> L.pop(2)
		1.23
		>>> L
		[123, 'spam', 'NI']
		
- 列表`sort`方法和`reverse`方法分别对列表进行升序和翻转

		>>> M = ['bb','aa','cc']
		>>> M.sort()
		>>> M
		['aa', 'bb', 'cc']
		>>> M.reverse()
		>>> M
		['cc', 'bb', 'aa']
		
## 嵌套

		>>> M = [[1,2,3],[4,5,6],[7,8,9]]
		>>> M
		[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
		>>> M[1][2]
		6
	
## 列表解析

- 矩阵是按照行进行存储的

		>>> [row[1]+1 for row in M]
		[3, 6, 9]
		>>> [row[1] for row in M if row[1]%2 == 0]
		[2, 8]

		>>> diag = [M[i][i] for i in [0,1,2]]
		>>> diag
		[1, 5, 9]
		>>> 
		>>> doubles = [c*2 for c in 'spam']
		>>> doubles
		['ss', 'pp', 'aa', 'mm'] 	

		//创建生成器
		>>> G = (sum(row) for row in M)
		>>> next(G)
		6
		>>> G
		<generator object <genexpr> at 0x101813f10>
		>>> next(G)
		15
		>>> next(G)
		24
		
		>>> list(map(sum,M))
		[6, 15, 24]
		>>> {sum(row) for row in M}
		{24, 6, 15}
		>>> M
		[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
		>>> range(3)
		range(0, 3)
		>>> {i:sum(M[i]) for i in range(3)}
		{0: 6, 1: 15, 2: 24}
		
		//ord-返回对应的ASCII数值，或者Unicode数值
		//返回列表
		>>> [ord(x) for x in 'spaam']
		[115, 112, 97, 97, 109]
		//返回集合
		>>> {ord(x) for x in 'spaam'}
		{112, 97, 115, 109}
		//返回字典
		>>> {x:ord(x) for x in 'spaam'}
		{'m': 109, 's': 115, 'a': 97, 'p': 112}
		
## 字典

- 可以改变，随需求增大或减小，像列表一样

		>>> D = {'food':'Spam','quantity':4,'color':'pink'}
		>>> D['food']
		'Spam'
		>>> D['quantity']+=1
		>>> D
		{'color': 'pink', 'food': 'Spam', 'quantity': 5}
		>>> 
		>>> DD = {}
		>>> DD['name'] = 'Bob'
		>>> DD['job'] = 'dev'
		>>> DD['age'] = 40
		>>> DD
		{'job': 'dev', 'name': 'Bob', 'age': 40}		
## Python对象嵌套的应用

		>>> rec = {'name':{'first':'Bob','last':'Smith'},'job':['dev','mgr'],'age':30}
		>>> rec['name']
		{'first': 'Bob', 'last': 'Smith'}
		>>> rec['name']['last']
		'Smith'
		>>> rec['job']
		['dev', 'mgr']
		>>> rec['job'][-1]
		'mgr'
		>>> rec['job'].append('janitor')
		>>> rec
		{'job': ['dev', 'mgr', 'janitor'], 'name': {'first': 'Bob', 'last': 'Smith'}, 'age': 30}

- job列表是字典所包含的一部分独立的内存，可以自由的增加或减少
- 当将某个变量用其他的值进行赋值(或一个对象的最后一次饮用被移除，空间将会立即回收)，这个对象所占用的内存空间会自动清理掉。

## 键的排序：For循环

- 内置函数`sort`可以对list排序
- 内置函数`sorted`直接对字典D进行排序

		>>> D = {'a':1,'b':2,'c':3}
		>>> D
		{'b': 2, 'a': 1, 'c': 3}
		>>> Ks = list(D.keys())
		>>> Ks
		['b', 'a', 'c']
		>>> Ks.sort()
		>>> Ks
		['a', 'b', 'c']
		>>> for key in Ks:
		...     print(key,'=>',D[key])
		... 
		a => 1
		b => 2
		c => 3
		//sorted内置函数直接对字典D进行排序
		>>> for key in sorted(D):
		...     print(key,'=>',D[key])
		... 
		a => 1
		b => 2
		c => 3

## 迭代和优化

- 首先要简单和可读性强
- 其次可以考虑性能，使用`time``timeit`和`profile`等模块工具
- filter函数：
	- 语法：`filter(function, iterable)`
			
			#!/usr/bin/python
			# -*- coding: UTF-8 -*-
			def is_odd(n):
	    	return n % 2 == 1

			newlist = filter(is_odd, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
			print(newlist)
- (Dictionary) get() 函数
	- 语法：dict.get(key, default=None)
		- key -- 字典中要查找的键。
		- default -- 如果指定键的值不存在时，返回该默认值值。

## 元组

- 编写在圆括号中而不是方括号中，支持任意类型，任意嵌套以及常见的序列操作。
- 拥有两个专用的可调用方法
	- index(元素)
	- count(元素)
- 不能增长或缩短，不可变

## 文件

- 文件对象是Python代码对电脑上外部文件的主要接口；
- 调用内置的`open`函数创建文件对象；

		>>> f = open('data.txt','w')
		>>> f.write('Hello\n')
		6
		>>> f.write('world\n')
		6
		>>> f.close()
		>>> f = open('data.txt')
		>>> text = f.read()
		>>> text
		'Hello\nworld\n'
		>>> print(text)
		Hello
		world
		
		>>> text.split()
		['Hello', 'world']

## 集合

- 唯一的不可变的对象的无序集合
- 可通过调用`set`函数而创建，或使用新的集合常量和表达式创建，支持一般的数学集合操作

		>>> X = set('spam')
		>>> Y = {'h','a','m'}
		>>> X,Y
		({'a', 's', 'm', 'p'}, {'h', 'a', 'm'})
		>>> X&Y
		{'a', 'm'}
		>>> X|Y
		{'h', 'p', 'a', 'm', 's'}
		>>> X - Y
		{'s', 'p'}
		
## 十进制数和分数

- 过去的方式

		>>> 1/3
		0.3333333333333333
		>>> (2/3)+(1/2)
		1.1666666666666665

- 现在的方式

		>>> import decimal
		>>> d = decimal.Decimal(3.141)
		>>> d + 1
		Decimal('4.141000000000000014210854715')
		>>> decimal.getcontext().prec = 2
		>>> decimal.Decimal('1.00')/decimal.Decimal('3.00')
		Decimal('0.33')
		>>> from fractions import Fraction
		>>> f = Fraction(2,3)
		>>> f + 1
		Fraction(5, 3)
		>>> f + Fraction(1,2)

## 布尔值

- 预定义：True（1）；False（0） `None`为特殊的占位符对象

		>>> 1 > 2
		False
		>>> 1<2
		True
		>>> bool('spam')
		True
		>>> X = None
		>>> print(X)
		None
		>>> L = [None]*10
		>>> L
		[None, None, None, None, None, None, None, None, None, None]

## 检查所处理对象的类型

三种方法(但破坏了代码的灵活性)：

	>>> if type(L) == type([]):
	...     print('yes')
	... 
	yes
	>>> if type(L) == list:
	...     print('yes')
	... 
	yes
	>>> if isinstance(L,list):
	...     print('yes')
	... 
	yes
	
## 用户定义的类

	>>> class Worker:
	...     def __init__(self,name,pay):
	...             self.name = name
	...             self.pay = pay
	...     def lastName(self):
	...             return self.name.split()[-1]
	...     def giveRaise(self,percent):
	...             self.pay *= (1.0+percent)
	... 
	>>> sue = Worker('Sue Jones',60000)
	>>> sue.lastName()
	'Jones'
	>>> sue.giveRaise(.10)
	>>> sue.pay
	66000.0

## 相关说明

- Python中没有类型声明，运行的表达式的语法决定了创建和使用的对象的类型。
- Python是动态类型的（自动跟踪你的类型而不是要求声明代码）
- 只能对一个对象进行适合该类型的有效的操作
- 数字，字符串和元组都是不可变的；列表和字典是可以自由改变