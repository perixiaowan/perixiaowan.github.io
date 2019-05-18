---
title: Python笔记（三）-数字
date: 2017-07-26 01:53:28
tags: [Python]
---

## 数字常量

- 十六进制：以`0x`或`0X`开头
- 八进制：以数字`0o`或`o0`开头
- `hex(I),oct(I),bin(I)`：把一个整数分别转换为十六进制，八进制，二进制
- `int(str,base)`：根据每个给定的进制把一个运行时字符串转换为一个整数
- `complex(real,imag)`：创建复数
- 浮点数无法精确的表现一些值：交互提示模式下结果的自动回显会比打印语句显示更多的数字位数。

		>>> num = 1/3.0
		>>> num
		0.3333333333333333
		>>> print(num)
		0.3333333333333333
		>>> '%e'%num
		'3.333333e-01'
		>>> '%4.2f'%num
		'0.33' 
- `repr`把任意对象变换成它们的字符串表示


## 除法

- `／`：真除法（无论任何类型都会保持小数部分）
- `//`：Floor除法，省略掉结果的小数部分。

		>>> import math
		>>> math.floor(2.5)
		2
		>>> math.floor(-2.5)
		-3
		>>> math.trunc(2.5)
		2
		>>> math.trunc(-2.5)
		-2

## 十六进制，八进制和二进制记数
	
	//八进制->十进制
	>>> 0o1,0o20,0o377
	(1, 16, 255)
	//十六进制->十进制
	>>> 0x01,0x10,0xFF
	(1, 16, 255)
	//二进制->十进制
	>>> 0b1,0b10000,0b11111111
	(1, 16, 255)
	
	//十进制->八进制，十六进制，二进制
	>>> oct(64),hex(64),bin(64)
	('0o100', '0x40', '0b1000000')
	
	>>> int('64'),int('100',8),int('40',16),int('1000000',2)
	(64, 64, 64, 64)
	>>> int('0x40',16),int('0b1000000',2)
	(64, 64)
	
	>>> eval('64'),eval('0o100'),eval('0x40'),eval('0b1000000')
	(64, 64, 64, 64)
	
	>>> '{0:o},{1:x},{2:b}'.format(64,64,64)
	'100,40,1000000'
	
	>>> '%o,%x,%X' %(64,255,255)
	'100,ff,FF'

- `bit_length`函数：允许查询以二进制表示一个数字的值所需的位数。通过`bin`函数和内置函数`len`得到二进制的字符串的长度，再减去2，可以得到同样的效果，但效果低。

## 内置的数学工具

	>>> import math
	>>> 
	>>> math.pi,math.e
	(3.141592653589793, 2.718281828459045)
	>>> math.sin(2*math.pi/180)
	0.03489949670250097
	>>> math.sqrt(144),math.sqrt(2)
	(12.0, 1.4142135623730951)
	>>> pow(2,4),2**4
	(16, 16)
	>>> abs(-42.0),sum((1,2,3,4))
	(42.0, 10)
	>>> min(3,1,2,4),max(3,1,2,4)
	(1, 4)
	
	>>> math.floor(2.567),math.floor(-2.567)
	(2, -3)
	>>> math.trunc(2.567),math.trunc(-2.567)
	(2, -2)
	>>> int(2.567),int(-2.567)
	(2, -2)
	>>> round(2.567),round(-2.467),round(2.567,2)
	(3, -2, 2.57)
	
	>>> '%.1f' % 2.567,'{0:.2f}'.format(2.567)
	('2.6', '2.57')
	
### 计算平方根的3种方式

	math.sqrt(144)
	144 ** .5
	pow(144,.5)
	
- python的命名空间对应于`builtins`

## random模块

	>>> import random
	>>> random.random()
	0.5370569315252408
	>>> random.randint(1,10)
	5
	>>> random.choice(['Life of Brian','Holy Grail','Meaning of Life'])
	'Meaning of Life'
	
## 小数数字&设置全局精度

- 小数对象是有固定的位数和小数点的浮点数
		
		>>> import decimal
		>>> decimal.getcontext().prec=4
		>>> decimal.Decimal(1)/decimal.Decimal(7)
		Decimal('0.1429')
		
## 分数类型

	>>> from fractions import Fraction
	>>> x = Fraction(1,3)
	>>> y = Fraction(4,6)
	>>> x
	Fraction(1, 3)
	>>> y
	Fraction(2, 3)
	>>> print(y)
	2/3
	
	>>> Fraction(.25)
	Fraction(1, 4)
	
	>>> 0.1+0.1+0.1-0.3
	5.551115123125783e-17
	>>> from fractions import Fraction
	>>> Fraction(1,10)+Fraction(1,10)+Fraction(1,10) - Fraction(3,10)
	Fraction(0, 1)
	>>> from decimal import Decimal
	>>> Decimal('0.1')+Decimal('0.1')+Decimal('0.1')-Decimal('0.3')
	Decimal('0.0')
	
##  分数转换和混合类型

- 浮点数转换成分数`as_integer_ratio` `Fraction.from_float`

		>>> (2.5).as_integer_ratio()
		(5, 2)	

		>>> Fraction.from_float(1.75)
		Fraction(7, 4)
		
## 集合

- 唯一的，不可变的对象的一个无序集合
- 可以迭代，可以根据需要增长或缩短
- 可以包含各种对象类型
- 集合初始化的几种方法：

		>>> set([1,2,3,4])
		{1, 2, 3, 4}
		>>> set('spam')
		{'p', 'a', 'm', 's'}
		>>> {1,2,3,4}
		{1, 2, 3, 4}
		>>> S={'s','p','a','m'}
		>>> S.add('alot')	
		>>> S
		{'p', 'alot', 'a', 'm', 's'}

- 集合数学操作
		
		>>> S1 = {1,2,3,4}
		>>> S1 & {1,3}
		{1, 3}
		>>> {1,5,3,6}|S1
		{1, 2, 3, 4, 5, 6}
		>>> S1- {1,3,4}
		{2}
		>>> S1 > {1,3}
		True
		
		>>> S1
		{1, 2, 3, 4}
		>>> S1.intersection((1,3))
		{1, 3}
		
		>>> S1.issubset(range(-1,1))
		False
		>>> S1.issubset(range(-1,8))
		True
		
- python中{}仍然是一个字典，如需表示空的集合，使用`set`函数
- 集合只能包含不可变的对象类型，因此，列表和字典不能嵌入到集合中。

## 布尔型

	>>> type(True)
	<type 'bool'>
	>>> isinstance(True,int)
	True
	>>> True==1
	True
	>>> True is 1
	False
	>>> True or False
	True
	>>> True + 4
	5
	
## 数字扩展（NumPy）

- NumbPy： Python扩展，提供了高级的数字编程工具，例如：矩阵数据类型，向量处理和高级的计算库
- 可以通过Python的`PyPI`站点找到对数字编程的其他支持。