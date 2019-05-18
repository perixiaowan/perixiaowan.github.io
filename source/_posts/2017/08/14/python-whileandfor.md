---
title: Python笔记（十一）-while和for语句
date: 2017-08-14 18:44:58
tags: [Python]
---
# While语句

## 格式

	while <test1>:
		<statements1>.
		if <test2>:break
		if <test3>:continue
	else:
		<statements2>

## break&continue&pass&循环else

### break

跳出最近所在循环

	>>> while True:
	...     name = input("Enter name:")
	...     if name == 'stop':break
	...     age = input('Enter age:')
	...     print('Hello',name,'=>',int(age)**2)
	... 
	Enter name:liuxiaowna
	Enter age:30
	Hello liuxiaowna => 900
	Enter name:stop

### continue

跳到最近所在循环的开头处

> **尽可能少用**

### pass

- 什么事也不做，只是空占位语句. 
- 常用于为复合语句编写一个空的主体

	while True: pass
	
- 用途
	- 忽略try语句所捕获的异常
	- 定义带属性的空类对象
	- 代表暂时用于填充函数主体而已
	
	
			def func():
				pass  
				
	- `...`：可代替pass，也可以用来初始化变量名

### 循环else块

只有当循环正常离开时才会执行，即没有碰到break语句

# For语句

## items

	>>> D = {'a':1,'b':2,'c':3}
	>>> for (key,value) in D.items():
	...     print(key,'=>',value)
	... 
	c => 3
	a => 1
	b => 2

## 自动解包

	>>> T
	[(1, 2), (3, 4), (5, 6)]
	>>> for both in T:
	...     a,b = both
	...     print(a,b)
	... 
	1 2
	3 4
	5 6
	
## in运算符测试

	>>> items = ['aaa',111,(4,5),2.01]
	>>> tests = [(4,5),3.14]
	>>> for key in tests:
	...     if key in items:
	...             print(key,"was found")
	...     else:
	...             print(key,"not found")
	... 
	(4, 5) was found
	3.14 not found

## 逐行读取文件

- 一次把文件载入到行字符串的列表中：

		for line in open('text.txt').readlines():
			print(line,end='')
- **最佳选择：**按照文件迭代器来自动在每次循环迭代的时候读入一行：

		for line in open('text.txt'):
			print(line,end='')

## 内置函数`range`和`zip`

### range函数

- 根据需要产生元素
- 常用于for循环中的索引
- 需要将其包含到一个`list`调用中一次性显示其结果

		>>> list(range(-5,5))
		[-5, -4, -3, -2, -1, 0, 1, 2, 3, 4]
		>>> list(range(5,-5,-1))
		[5, 4, 3, 2, 1, 0, -1, -2, -3, -4]
		
- 注意事项：
	- 能用for就不用while
	- 不要在for中使用range，只将其视为最后的手段

- 优点：不会复制字符串，会节省内存 

### zip函数		

- 支持并行迭代
- 取得一个或多个序列为参数，然后返回元组的列表，将这些序列中的并排的元素配成对

		>>> L1 = [1,2,3,4]
		>>> L2 = [5,6,7,8]
		>>> list(zip(L1,L2))
		[(1, 5), (2, 6), (3, 7), (4, 8)]
		>>> for (x,y) in zip(L1,L2):
		...     print(x,y,'--',x+y)
		... 
		1 5 -- 6
		2 6 -- 8
		3 7 -- 10
		4 8 -- 12

- 当参数长度不同时，zip会以最短序列的长度为准来截断所得到的元组

		>>> S1 = 'abc'
		>>> S2 = 'xyz123'
		>>> list(zip(S1,S2))
		[('a', 'x'), ('b', 'y'), ('c', 'z')]
		
- 使用zip构造字典：
	
		>>> keys = ['spam','eggs','toast']
		>>> vals = [1,3,5]
		>>> D = dict(zip(keys,vals))
		>>> D
		{'eggs': 3, 'spam': 1, 'toast': 5}
		
		
## enumerate内置函数

	>>> S= 'spam'
	>>> for (offset,item) in enumerate(S):
	...     print(item,'appears at offset',offset)
	... 
	s appears at offset 0
	p appears at offset 1
	a appears at offset 2
	m appears at offset 3

- 返回一个生成器对象
- 支持迭代协议（拥有一个`_next_`方法）
- 每次循环会反悔一个（index,value）的元组