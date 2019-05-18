---
title: Python笔记（十六）-参数
date: 2017-09-17 11:36:09
tags: [Python]
---

## 避免可变参数的修改

- 调用时对列表进行copy

		>>> def changer(a,b):
		...     a = 2
		...     b[0]='spam'
		... 
		>>> L = [1,2]
		>>> X = 1
		>>> changer(X,L[:])
		>>> L
		[1, 2]
		
- 在函数内部copy

- 将可变对象转换为不可变对象

		>>> L=[1,2]
		>>> changer(X,tuple(L))
		Traceback (most recent call last):
		  File "<stdin>", line 1, in <module>
		  File "<stdin>", line 3, in changer
		TypeError: 'tuple' object does not support item assignment
		>>> 

