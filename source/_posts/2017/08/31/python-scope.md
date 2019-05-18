---
title: Python笔记（十五）-作用域
date: 2017-08-31 10:56:59
tags: [Python]
---

## 法则

- 以交互命令提示模式输入的代码实际输入到一个叫做`_main_`的内置模块中
- `LEGB`法则：
	- L：本地作用域
	- E：上一层结构中def或lambda的本地作用域
	- G：全局作用域
	- B：内置作用域

## 内置作用域

- 是一个名为`_builtin_`的内置模块，但必须要`import_builtin_`之后才能使用内置作用域
- 是通过一个名为`_builtin_`的标准库模块来实现的，这个变量自身并没有放入内置作用域内

		>>> import builtins
		>>> dir(builtins)
		['ArithmeticError', 'AssertionError', 'AttributeError', 'BaseException', 'BlockingIOError', 'BrokenPipeError', 'BufferError', 'BytesWarning', 'ChildProcessError', ..... 'repr', 'reversed', 'round', 'set', 'setattr', 'slice', 'sorted', 'staticmethod', 'str', 'sum', 'super', 'tuple', 'type', 'vars', 'zip']
		>>> 
		
## global语句

	>>> X = 88
	>>> def func():
	...     global X
	...     X = 99
	... 
	>>> func()
	>>> print(X)
	99

方法：

	一些程序委任一个单个模块文件去定义所有的全局变量

## 文件间通信的方法

	调用函数，传递函数，得到其返回值。

## 工厂函数

- 一个能够记住嵌套作用域的变量值的函数，尽管那个作用域或许已经不存在了。
	
	>>> def maker(N):
	...     def action(X):
	...             return X ** N
	...     return action
	... 
	>>> 
	>>> f = maker(2)
	>>> f
	<function maker.<locals>.action at 0x102276a60>
	>>> f(3)
	9
	>>> f(4)
	16
	>>> 
	
## lambda

`lambda`表达式引入了新的本地作用域，lambda能够看到所有在所编写的函数中的可用的变量

	>>> def func():
	...     x = 4
	...     action = (lambda n : x ** n)
	...     return action
	... 
	>>> x = func()
	>>> print(x(2))
	16
	>>> 

## nonlocal语句

python3.0:

```
def func():
	nonlocal name1,name2,...
```

- 当执行到nonlocal语句的时候，nonlocal中列出的名称必须在一个嵌套的def中提前定义过，否则，将会产生一个错误。
- global和nonlocal语句都在某种程度上限制了查找规则：
	- global使得作用域查找从嵌套的模块的作用域开始，允许对那里的名称赋值，如果名称不存在于该模块中，作用域查找继续到内置作用域
	- nonlocal限制作用域查找只是嵌套的def，要求名称已经存在于那里，并且允许对他们赋值，作用域查找不会继续到全局或内置作用域。

### nonlocal应用

- 默认情况下，不允许修改嵌套的def作用域中的名称

		>>> def tester(start):
		...     state = start
		...     def nested(label):
		...             print(label,state)
		...             state += 1
		...     return nested
		... 
		>>> F = tester(0)
		>>> F('spam')
		Traceback (most recent call last):
		  File "<stdin>", line 1, in <module>
		  File "<stdin>", line 4, in nested
		UnboundLocalError: local variable 'state' referenced before assignment
		>>> 
		
- python 3.0下

		>>> def tester(start):
		...     state = start
		...     def nested(label):
		...             nonlocal state
		...             print(label,state)
		...             state += 1
		...     return nested
		... 
		>>> F = tester(0)
		>>> F('spam')
		spam 0
		>>> F('xiaowan')
		xiaowan 1
		>>> G = tester(42)
		>>> G('spam')
		spam 42
		>>> G('egg')
		egg 43
		>>> F('xiaowan')
		xiaowan 2
		>>> 
		
## 边界情况

- nonlocal名称必须已经在一个嵌套的def作用域中赋值过，否则将会得到一个错误，不能通过在嵌套的作用域中赋值它们一个新值来创建它们：

		>>> def tester(start):
		...     def nested(label):
		...             nonlocal state
		...             state = 0
		...             print(label,state)
		...     return nested
		... 
		  File "<stdin>", line 3
		SyntaxError: no binding for nonlocal 'state' found
		>>> 

- global名称即使不存在，也可以声明并赋值

		>>> def tester(start):
		...     def nested(label):
		...             global state
		...             state = 0
		...             print(label,state)
		...     return nested
		... 
		>>> F = tester(0)
		>>> F('abc')
		abc 0
		>>> state
		0
		>>> 
		
- nonlocal限制作用域查找仅为嵌套的def，nonlocal不会在嵌套的模块的全局作用域或所有def之外的内置作用域中查找。

		>>> spam = 99
		>>> def tester():
		...     def nested():
		...             nonlocal spam
		...             print('Current=',spam)
		...             spam += 1
		...     return nested
		... 
		  File "<stdin>", line 3
		SyntaxError: no binding for nonlocal 'spam' found
		>>> 
		
## 总结

全局，非本地，类和函数属性都提供了状态保持得选项，全局只支持共享的数据，类需要OOP的基本知识，类和函数属性都允许在嵌套函数自身之外访问状态。