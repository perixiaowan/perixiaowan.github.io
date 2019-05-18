---
title: Python笔记（七）-元组
date: 2017-08-04 13:56:24
tags: [Python]
---

## 元组

- 不能在原处修改，不可变序列
- 写成圆括号
- 位置有序，固定长度，异构，任意嵌套

### 逗号和圆括号

- 逗号

单一对象变成元组，可以在单个元素之后，加一个逗号即可

	>>> x=(40)
	>>> type(x)
	<class 'int'>
	>>> y=(40,)
	>>> type(y)
	<class 'tuple'>
	
- 圆括号

仅当元组作为常量传给函数调用时，圆括号必不可少。

### 排序

- 将元组转换为列表并使其成为一个可变对象，才能获得使用排序方法调用的权限。即`var.sort()`
- 或使用内置函数`sorted(T)`
- 上述两种方法都会生成新的对象

```
>>> T = ('cc','aa','dd','bb')
>>> tmp = list(T)
>>> tmp.sort()
>>> tmp
['aa', 'bb', 'cc', 'dd']
>>> type(T)
<class 'tuple'>
>>> T = tuple(tmp)
>>> T
('aa', 'bb', 'cc', 'dd')
>>> sorted(T)
['aa', 'bb', 'cc', 'dd']
```
	
### `index`方法和`count`方法

	>>> T = (1,2,3,2,4,2)
	>>> T.index(2)
	1
	>>> T.index(2,2)
	3
	>>> T.count(2)
	3
	
### 元组内部的列表是可以修改的

	>>> T = (1,[2,3],4)
	>>> T[1] = 'spam'
	Traceback (most recent call last):
	  File "<stdin>", line 1, in <module>
	TypeError: 'tuple' object does not support item assignment
	>>> T[1][0] = 'spam'
	>>> T
	(1, ['spam', 3], 4)
	
### 列表和元组区别

列表					|元组	
----					|----
随时间改变的数据结构	|提供了某种完整性
						|可作为字典键
定序集合的选择工具		|固定的


						
	
