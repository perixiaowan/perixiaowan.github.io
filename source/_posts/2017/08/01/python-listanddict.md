---
title: Python笔记（六）-列表和字典
date: 2017-08-02 06:48:40
tags: [Python]
---

## 概述

- 可变长；可修改；
- 可包含任何种类的对象或者被嵌套；

## 列表

- `map`函数对序列中的各项应用一个函数把结果收集到一个列表中。

		>>> list(map(abs,[-1,-2,0,1,2]))
		[1, 2, 0, 1, 2]

- 使用`key`参数对列表进行排序

		>>> L = ['abc','ABD','aBe']
		>>> sorted(L,key=str.lower,reverse=True)
		['aBe', 'ABD', 'abc']
		>>> sorted([x.lower() for x in L],reverse=True)
		['abe', 'abd', 'abc']
		
- `reversed`内置函数

		>>> L
		[1, 2, 3, 4, 5]
		>>> list(reversed(L))
		[5, 4, 3, 2, 1]
		
- `pop` `remove` `del`

		>>> L = ['spam','eggs','ham']
		>>> L.index('eggs')
		1
		>>> L.insert(1,'toast')
		>>> L
		['spam', 'toast', 'eggs', 'ham']
		>>> L.remove('eggs')
		>>> L
		['spam', 'toast', 'ham']
		>>> L.pop(1)
		'toast'
		>>> del L[0]
		>>> L
		['ham']
		
- 空列表赋值给一个索引

		只会在指定的位置存储空列表的引用，而不是删除
		
## 字典

常见字典常量和操作

操作							| 解释
------							|----			
D=dict(name='Bob',age=42)	|
'eggs' in D					| 成员关系：键存在测试
D.values()					|值
D.keys()						|键
D.update(D2)					|合并
D.pop(key)					|删除等
del D[key]					|根据键删除条目

- 写成`for key in D:` 和 写成完整的`key in D.keys():`效果使一样的。

### `update`

类似于字典的合并，顺序无关，但会盲目的覆盖相同的值

### 字典用于稀疏数据结构

	>>> Matrix = {}
	>>> Matrix[(2,3,4)] = 88
	>>> Matrix[(7,8,9)] = 99
	>>> Matrix[(2,3,4)]
	88
	>>> Matrix
	{(2, 3, 4): 88, (7, 8, 9): 99}
	>>> Matrix[(2,3,5)]
	Traceback (most recent call last):
	  File "<stdin>", line 1, in <module>
	KeyError: (2, 3, 5)

### 字典接口(anydbm,shelve)

- `anydbm`, `shelve` 是对象持久化保存方法，将对象保存到文件里面，缺省的数据存储文件是二进制的。
- 这两个模块允许我们将一个磁盘上的文件与一个“`dict-like`”对象（类字典对象）关联起来，操作这个“dict-like”对象，就像操作dict对象一样，最后可以将“dict-like”的数据持久化到文件。
- 对这个"dict-like"对象进行操作的时
	- `anydbm`的key和value的类型必须都是是字符串，
	- `shelve`的key要求必须是字符串，value则可以是任意合法的python数据类型。

```
import anydbm
file = anydbm.open('filename')
file['key'] = 'data'  //Store data by key
data = file['key']
```
- shelve模块是anydbm的增强版，它支持在"dict-like"对象中存储任何可以被pickle序列化的对象，其key必须是字符串，而值可以为任意合法的python数据类型。

- `cgi.FieldStorage`范围的调用会产生一个类似字典的对象，在客户端网页上每输入字段都有一项

```
import cgi
form = cgi.FieldStorage()
if 'name' in form:
	showReply('Hello,' + form['name'].value) 
```

### 创建字典的方法

- 方法一：

		//适用于事先拼出整个字典
		>>> {'name':'mel','age':30}
		{'age': 30, 'name': 'mel'}
		
- 方法二：
		
		//适用于一次动态的建立字典的一个字段
		>>> D = {}
		>>> D['name']='mel'
		>>> D['age']=30
		>>> D
		{'age': 30, 'name': 'mel'}
		
- 方法三：
		
		//需要键必须都是字符串
		>>> dict(name='mel',age=30)
		{'age': 30, 'name': 'mel'}

- 方法四：

		//程序运行时把键和值逐步建成序列
		>>> dict([('name','mel'),('age',30)])
		{'age': 30, 'name': 'mel'}
		
- dict.fromkeys

当所有键的值都相同时,简单传入一个键列表，和所有键的初始值

		>>> dict.fromkeys(['a','b'],0)
		{'b': 0, 'a': 0}

- 使用字典解析表达式来创建(zip)
		
		//列表
		>>> list(zip(['a','b','c'],[1,2,3]))
		[('a', 1), ('b', 2), ('c', 3)]
		//字典
		>>> D=dict(zip(['a','b','c'],[1,2,3]))
		>>> D
		{'b': 2, 'a': 1, 'c': 3}
		
		>>> D = {k:v for (k,v) in zip(['a','b','c'],[1,2,3])}
		>>> D
		{'b': 2, 'a': 1, 'c': 3}

		>>> D = {x:x ** 2  for x in [1,2,3,4]}
		>>> D
		{1: 1, 2: 4, 3: 9, 4: 16}
		>>> D = {c: c*4 for c in 'SPAM'}
		>>> D
		{'S': 'SSSS', 'P': 'PPPP', 'A': 'AAAA', 'M': 'MMMM'}
		>>> D = {c.lower():c + '!' for c in ['SPAM','EGGS','HAM']}
		>>> D
		{'eggs': 'EGGS!', 'spam': 'SPAM!', 'ham': 'HAM!'}
		
如果想要应用列表操作或显示它们的值，需要通过内置函数list

	>>> D
	{'eggs': 'EGGS!', 'spam': 'SPAM!', 'ham': 'HAM!'}
	>>> K = D.keys()
	>>> K
	dict_keys(['eggs', 'spam', 'ham'])
	>>> list(K)
	['eggs', 'spam', 'ham']
	>>> V = D.values()
	>>> V
	dict_values(['EGGS!', 'SPAM!', 'HAM!'])
	>>> list(V)
	['EGGS!', 'SPAM!', 'HAM!']
	>>> list(D.items())
	[('eggs', 'EGGS!'), ('spam', 'SPAM!'), ('ham', 'HAM!')]
	>>> K[0]
	Traceback (most recent call last):
	  File "<stdin>", line 1, in <module>
	TypeError: 'dict_keys' object does not support indexing
	>>> list(K)[0]
	'eggs'


