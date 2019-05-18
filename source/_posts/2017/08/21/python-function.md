---
title: Python笔记(十四)-Function
date: 2017-08-21 07:31:31
tags: [Python]
---

## 知识要点

- `yield`向调用者发回一个结果对象

		像生成器这样的函数可以通过`yield`语句来返回值，并挂起它们的状态以便稍后恢复状态。
		
- `global`声明了一个模块级的变量并被赋值。

- `nonlocal`声明了将要赋值的一个封闭的函数变量

## def语句

### 语法

```
def <name>(arg1,arg2,arg3,...,argN):
	<statements>
	return <value>
```

- 一个没有返回值的函数自动返回了`none`对象
- `def`之中的代码在函数调用后才会评估。

```
def func():...		# Create function object
func()					# Call object
func.attr = value 	# Attach attributes
```

## 示例1

	def times(x,y):			# Create and assign function
		return x * y			# Body executed when called
	
---

	>>> times(3,5)
	15
	

## 示例2 

	def intersect(seq1,seq2):
		res = []
		for x in seq1:
			if x in seq2:
				res.append(x)
		return res
---

	>>> s1 = "SPAM"
	>>> s2 = "SCAM"
	>>> intersect(s1,s2)
	['S', 'A', 'M']
	>>> [x for x in s1 if x in s2]
	['S', 'A', 'M']
	
---

	>>> x = intersect([1,2,3],(1,4))
	>>> x
	[1]
## Python中的多态

- 一个操作的意义取决于被操作对象的类型

- 多态的操作有：
	- print
	- index
	- `*`
	- 其它

- 只要对象支持预期的接口

- 如果传递的对象不支持这种预期的接口，会抛出异常