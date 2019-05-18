---
title: Python笔记（八）-语句
date: 2017-08-06 10:42:30
tags: [Python]
---


## Python语句

语句		|角色		|例子
-----		|-------	|---------
yield		|生成器函数	|def gen(n): for i in n: yield i*2
global		|命名空间	|x = 'old' def function():global x,y;x='new'
nonlocal	|Namespaces命名空间	|def outer(): x='old' def function():nonlocal x;x = 'new'
try/except/finally	|捕捉异常	|try: action() except: print('action error')
raise		|触发异常	|raise EndSearch(location)
assert		|调试检查	|assert X>Y,'X too small'
with/as	|环境管理器	|with open('data') as myfile: process(myfile)

## 交互循环实例

### 交互式循环

	>>> while True:
	...     reply = input('Enter text:')
	...     if reply == 'stop': break
	...     print(reply.upper())
	... 
	Enter text:hello
	HELLO
	Enter text:hi
	HI
	Enter text:stop
	>>>

### 输入数据做数学运算

	>>> while True:
	...     reply = input('Enter text:')
	...     if reply == 'stop':break
	...     print(int(reply) ** 2)
	... 
	Enter text:24
	576
	Enter text:34
	1156
	



 