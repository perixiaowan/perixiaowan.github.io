---
title: Python笔记（十二）-迭代器
date: 2017-08-17 10:06:56
tags: [Python]
---

## 迭代协议

有`_next_`方法的对象会前进到下一个结果，而在一系列结果的末尾时，则会引发`StopIteration`。这类对象都认为可迭代的。

## 读取文本的最佳方式

- 根本不要去读取
- 让for循环在每轮自动调用`next`从而前进到下一行
- 运行最快
- `readlines`已经不是最好的使用方法了，内存使用上，效果差

## 手动迭代

### iter

- 文件对象就是自己的迭代器，有自己的`_next_`方法；
- 列表以及许多其他内置对象，不是自身的迭代器，需要调用`iter`来启动迭代：

		var_tmp = iter(object)
		
- 最近的版本中，字典有一个迭代器

		>>> D = {'a':1,'b':2,'c':3}
		>>> I = iter(D)
		>>> next(I)
		'c'
		>>> next(I)
		'a'
		>>> next(I)
		'b'
		>>> next(I)
		Traceback (most recent call last):
		  File "<stdin>", line 1, in <module>
		StopIteration
		>>> 

### next

语法：

- `object._next_()`
- `next(object)`

## 各种处理迭代的内置函数

### map

语法：`map(function, iterable, ...)`
描述：把一个函数的调用应用于传入的可迭代对象中的每一项

### sorted排序

语法：`sorted(iterable, cmp=None, key=None, reverse=False)`
描述：可迭代对象中的各项，返回一个新的排序列表

### zip

- zip函数接受任意多个（包括0个和1个）序列作为参数，返回一个tuple列表。
- 也可以再次调用zip进行unzip

		>>> X = (1,2)
		>>> Y = (3,4)
		>>> list(zip(X,Y))
		[(1, 3), (2, 4)]
		>>> A,B = zip(*zip(X,Y))
		>>> A
		(1, 2)
		>>> B
		(3, 4)

	
### enumerate

	根据相对位置来配对可迭代对象中的项
	
### filter

```

filter()函数是 Python 内置的另一个有用的高阶函数，filter()函数接收一个函数 f 和一个list，这个函数 f 的作用是对每个元素进行判断，返回 True或 False，filter()根据判断结果自动过滤掉不符合条件的元素，返回由符合条件元素组成的新list。

```

### reduce 

	reduce()函数接收的参数和 map()类似，一个函数 f，一个list，但行为和 map()不同，reduce()传入的函数 f 必须接收两个参数，reduce()对list的每个元素反复调用函数f，并返回最终结果值。
	
	
## 函数调用中`*arg`形式

	>>> def f(a,b,c,d): print(a,b,c,d,sep='&')
	... 
	>>> f(1,2,3,4)
	1&2&3&4
	>>> f(*[1,2,3,4])
	1&2&3&4
	>>> f(*open('script1.py'))
	import sys
	&print(sys.platform)
	&x = 'Spam!'
	&print(x * 8)
	
## python3.0中range

只支持迭代，索引，以及len函数，不支持任何其它的序列操作

	>>> R = range(10)
	>>> I = iter(R)
	>>> R[0]
	>>> len(R)
	
## range和zip，map和filter的区别

- range：支持len和索引，不是自己的迭代器
- zip，map和filter：不支持相同结果上的多个活跃迭代器