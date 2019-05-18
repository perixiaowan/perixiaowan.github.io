---
title: Python笔记（sys模块）
date: 2018-02-25 08:31:05
author: liuxiaowan
tags: [Python]
---

# `sys`模块

```
>>> import sys
>>> sys.platform
'linux'
>>> sys.maxsize,sys.version
(9223372036854775807, '3.5.2 (default, Nov 23 2017, 16:37:01) \n[GCC 5.4.0 20160609]')
>>>
```

## `sys.platform`

- 如果要确定代码在不同机器上表现出不同的行为，可以使用`sys.platform`测试，例如：

```
>>> if sys.platform[:5] == 'linux':print('hello linux')
...
hello linux
```

## `sys.path`


- 一个由目录名称字符串组成的列表
- 该列表在解释器启动时根据`PYTHONPATH`设置进行初始化，包括python目录下所有的`.pth`路径文件的内容以及系统默认设置

### 原始字符串常量

在字符串前加r，可以保留类似反斜杠这样的字面意思，例如

  sys.path.apend(r'C:\mydir')

## `sys.modules`

- 一个字典

  list(sys.modules.keys())

- 用途

  可以让程序显示或处理某个程序加载的所有模块

- `sys.getrefcount`

  查看对象的引用次数

## `sys.exc_info`和模块`traceback`

### sys.exc_info

```
>>> try:
...     raise IndexError
... except:
...     print(sys.exc_info())
...
(<class 'IndexError'>, IndexError(), <traceback object at 0x7f42ce909d48>)
>>>
```

### traceback

```
>>> import traceback,sys
>>> def grail(x):
...     raise TypeError('already got one')
...
>>> try:
...     grail('arthur')
... except:
...     exc_info = sys.exc_info()
...     print(exc_info[0])
...     print(exc_info[1])
...     traceback.print_tb(exc_info[2])
...
<class 'TypeError'>
already got one
  File "<stdin>", line 2, in <module>
  File "<stdin>", line 2, in grail
>>>
```
## 其他工具

- `sys.argv`:显示由字符串组成的列表的命令行参数
- `sys.stdin`,`sys.stdout`,`sys.stderr`:标准流
- `sys.exit`:强制退出
