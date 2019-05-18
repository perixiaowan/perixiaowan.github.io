---
title: Python笔记（九）-表达式和打印
date: 2017-08-11 11:08:48
tags: [Python]
---

## 赋值语句

运算							| 解释
------							|----------
spam='Spam'					|基本形式
spam,ham='yum','YUM'		|元组赋值运算
[spam,ham] = ['yum','YUM']	|列表赋值运算
a,b,c,d = 'spam'				|序列赋值运算
a,*b = 'spam'					|扩展的序列解包
spam = ham = 'lunch'		|多目标赋值运算
spams +=42					|增强赋值运算

## 高级序列赋值语句

```
>>> L = [1,2,3,4]
>>> while L:
...     front,L=L[0],L[1:]
...     print(front,L)
... 
1 [2, 3, 4]
2 [3, 4]
3 [4]
4 []
```

## Python 3.0 扩展序列解包

`带*号的名称`：一个列表赋值给带`*`号的名称，该列表收集了序列中没有赋值给其他名称的所有项

```
>>> L = [1,2,3,4]
>>> while L:
...     front,*L=L
...     print(front,L)
... 
1 [2, 3, 4]
2 [3, 4]
3 [4]
4 []
```

### 备注：

- 带`*`号的名称总是会向其赋值一个列表

```
>>> seq = [1,2,3,4]
>>> a,b,c,*d = seq
>>> print(a,b,c,d)
1 2 3 [4]
```
- 如果没有剩下的内容可以匹配带`*`号的名称，会赋值一个空的列表

```
>>> a,b,c,d,*e = seq
>>> print(a,b,c,d,e)
1 2 3 4 []
```
- 如果有多个带`*`号的名称，或如果值少了而没有带`*`号的名称，以及如果带`*`号的名称自身没有编写到一个列表中，都会出错

```
>>> a,*b,c,*d=seq
  File "<stdin>", line 1
SyntaxError: two starred expressions in assignment
>>> a,b = seq
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ValueError: too many values to unpack (expected 2)
>>> *a = seq
  File "<stdin>", line 1
SyntaxError: starred assignment target must be in a list or tuple
>>> *a,=seq
>>> a
[1, 2, 3, 4]
```

- 使用列表合并（即`+`）比使用`extend`方法更慢

## 变量命名规则

- 语法

	（下划线或字母）+（任意数目的字母，数字或下划线）

- 区分大小写
- 禁止使用保留字

### Python3.0中的保留字


False	|class		|finally	|is			|return
-----	|---------|--------	|----		|-----
None	|continue	|for		|lamba		|try
True	|def		|from		|nonlocal	|while
and		|del		|global	|not		|with
as		|elif		|if			|or			|yield
assert	|else		|import	|pass
break	|except	|in			|raise

#### 命名惯例

- 单一下划线开头的变量名`_X`不会被`from module import *`语句导入
- 前后有下划线的变量名`_X_`是系统定义的变量名
- 以两个下划线开头，但结尾没有两个下划线的变量名`__X`是类的本地便利
- 通常，类变量名以一个大写字母开头，模块变量名以小写字母开头

[Python的半官方指南 PEP 8](https://www.python.org/dev/peps/pep-0008/)

## 表达式语句

### 常见Python表达式语句

运算					| 解释
--------				|--------------
spam(eggs,ham)		|函数调用
spam.ham(eggs)		|方法调用
spam					|在交互模式解释器内打印变量
print(a,b,c,sep='')	|Python3.0中的打印操作
yield x ** 2			|产生表达式的语句

## 打印操作

### 调用格式

	print([object,...][,sep=''][,end='\n'][,file=sys.stdout])




