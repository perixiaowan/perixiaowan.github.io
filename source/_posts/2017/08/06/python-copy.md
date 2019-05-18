---
title: Python笔记（七）-复制&比较&真假
date: 2017-08-06 01:22:20
tags: [Python]
---

## 顶层复制

- 没有限制条件的分片表达式（`L[:]`）能够复制序列
- 字典`copy`方法（`X.copy()`）能够复制字典
- 有些内置函数能够生成拷贝（`list(L)`）
- copy标准库模块能够生成完整拷贝

## 深层嵌套复制

- `import copy`
- 遍历对象来复制它们所有的组成部分

## 比较

- `==`操作符测试值的相等性：递归比较所有内嵌对象；
- `is`表达式测试对象的一致性：两者是否同意个对象

		>>> L1 = [1,('a',3)]
		>>> L2 = [1,('a',3)]
		>>> L1 == L2,L1 is L2
		(True, False)
		
- 比较字符串

		>>> S1 = 'spam'
		>>> S2 = 'spam'
		>>> S1 == S2, S1 is S2
		(True, True)

在Python内部暂时存储并重复使用短字符串作为最佳化。

	>>> S1 = 'a longer string'
	>>> S2 = 'a longer string'
	>>> S1 == S2, S1 is S2
	(True, False)
	
- 相对大小的比较也能够递归的应用于嵌套的数据结构

		>>> L1 
		[1, ('a', 3)]
		>>> L2 = [1,('a',2)]
		>>> L1 < L2,L1 == L2,L1 > L2
		(False, False, True)
		
- 不支持字典比较

		>>> D1 = {'a':1,'b':2}
		>>> D2 = {'a':1,'b':3}
		>>> D1 == D2
		False
		>>> D1 < D2
		Traceback (most recent call last):
		  File "<stdin>", line 1, in <module>
		TypeError: unorderable types: dict() < dict()

可以使用`items`字典方法和内置的`sorted`方法对字典排序

	>>> D1.items()
	dict_items([('b', 2), ('a', 1)])
	>>> sorted(D1.items())
	[('a', 1), ('b', 2)]
	>>> sorted(D1.items()) < sorted(D2.items())
	True
	>>> sorted(D1.items()) > sorted(D2.items())
	False


## 真假

对象真值的例子

对象	|值
-----	|------
`spam`	|True
""		|False
[]		|False
{}		|False
1		|True
0.0		|False
None	|False
