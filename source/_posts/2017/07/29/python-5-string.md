---
title: Python笔记（五）-字符串
date: 2017-07-29 14:41:35
tags: [Python]
---

## 概述

- 没有单个字符的这种类型，而是可以使用一个字符的字符串。
- 字符串被归为不可变序列这一类别
- 单双银行字符串是一样的
- 常见字符串常量和表达式

操作					| 解释
--------------		|-------------------	
s=b'spam'				|字节字符串
len(s)					|字符串s的长度
"a %s parrot" %kind	|字符串格式化表达式
s.find('pa')			|字符串搜索
s.rstrip				|移除空格
s.replace('pa','xx')|替换
s.split(',')			|用展位符分割
s.isdigit()			|
s.lower				|
s.endswith('spam')	|结束测试
'spam'.join(strlist)|插入分隔符
s.encode('latin-1')	|Unicode编码
for x in s:print(x)	|迭代
'spam' in s			|
[c*2 for c in s]		|
map(ord,s)			|

## 字符串反斜杠字符（转义序列）

转义		|意义
-------	|------
\newline	|忽略
\\			|反斜杠
\'			|单引号
\"			|双引号
\a			|响铃
\b			|倒退
\f			|换页
\n			|新行（换行）
\r			|返回
\t			|水平制表符
\v			|垂直制表符
\N{id}		|Unicode数据库ID
\uhhhh		|Unicode16位的十六进制值
\Uhhhhhhhh|Unicode32位的十六进制值
\xhh		|十六进制值
\ooo		|八进制值
\0			|Null
\other		|不转义

## `raw`字符串抑制转义

- 如果`r`字母出现在字符串的第一引号的前面，它将会关闭转义机制

		//windows下
		myfile = open(r'C:\new\text.dat','w')
		myfile = open('C:\\new\\text.dat','w')
		
		>>> path = r'C:\new\text.dat'
		>>> path
		'C:\\new\\text.dat'
		>>> print(path)
		C:\new\text.dat	
		
## 块字符串（三重引号）

	>>> mantra = """Always look 
	... on the bright
	... side of life
	... ....
	... """
	>>> mantra
	'Always look \non the bright\nside of life\n....\n'
	
- 也可以在一些行的代码上使用三重引号，方便注释多行代码

## 字符串实际应用

### 字符串转换

	>>> int('42'),str(42)
	(42, '42')
	//将对象转换为字符串
	>>> repr(42)
	'42'	
	>>> float("1.5")
	1.5

### eval函数

运行一个包含了Python表达式代码的字符串，能够将一个字符串转换为任意类型的对象

### `ord`和`chr`函数

- ord函数：将单个字符转换为对应的ASCII码，返回的是在内存中对应的字符的二进制值；
- chr函数：会执行相反的操作。

		>>> ord('s')
		115
		>>> chr(115)
		's'

- 二进制数转换为整数

		>>> B = '1101'
		>>> I = 0
		>>> while B != '':
		...     I = I*2 +(ord(B[0])-ord('0'))
		...     B = B[1:]
		... 
		>>> I
		13

		>>> int('1101',2)
		13
		>>> bin(13)
		'0b1101'
		
### 修改字符串

- 利用合并，分片，索引等工具来建立并赋值一个新的字符串

		>>> 'That is %d %s bird!' %(1,'dead')
		'That is 1 dead bird!'
		>>> 'That is {0} {1} bird!'.format(1,'dead')
		'That is 1 dead bird!'
		
- 格式化等结果是一个新的字符串对象，而不是修改后的对象

## 字符串方法

**字符串可调用的方法**：

'capitalize', 'casefold', 'center', 'count', 'encode', 'endswith', 'expandtabs', 'find', 'format', 'format_map', 'index', 'isalnum', 'isalpha', 'isdecimal', 'isdigit', 'isidentifier', 'islower', 'isnumeric', 'isprintable', 'isspace', 'istitle', 'isupper', 'join', 'ljust', 'lower', 'lstrip', 'maketrans', 'partition', 'replace', 'rfind', 'rindex', 'rjust', 'rpartition', 'rsplit', 'rstrip', 'split', 'splitlines', 'startswith', 'strip', 'swapcase', 'title', 'translate', 'upper', 'zfill'


- **如果需要对一个超长字符串进行许多的修改，为了优化脚本的性能，需要将字符串转换为一个支持远处修改的对象，比如列表list**


- 方法`join`将列表list合成一个字符串
	
		>>> S = 'spammy'
		>>> L = list(S)
		>>> L
		['s', 'p', 'a', 'm', 'm', 'y']
		>>> L[3] = 'x'
		>>> L
		['s', 'p', 'a', 'x', 'm', 'y']
		>>> S = ''.join(L)  // 使用空的分隔符进行连接
		>>> S
		'spaxmy'
		
## 文本解析

	>>> line='bob,hacker,40'
	>>> line.split(',')
	['bob', 'hacker', '40']
	
	>>> line = "i'mSPAMaSPAMlumberjack"
	>>> line.split('SPAM')
	["i'm", 'a', 'lumberjack']
	
## 字符串格式化表达式

- 总是返回新的字符串作为结果而不是对字符串进行修改；

### 格式化表达式

字符串格式化代码

代码|意义
---	|----------
s	|字符串（或任何对象）
r	|s，但使用repr，而是不是str
c	|字符
d	|十进制（整数）
i	|整数
u	|无号（整数）
o	|八进位整数
x	|十六进制整数
X	|x，但打印大写
e	|浮点指数
E	|e，但打印大写
f	|浮点十进制
F	|浮点十进制
g	|浮点e或f
G	|浮点E或F
%	|常量%

转换目标的通用结构：

```
%[(name)][flags][width][.precision]typecode
```
- 在格式化字符串中用一个`*`来指定通过计算得出`width`和`precision`,从而迫使它们的值从%运算符右边的输出中的下一项获取

		>>> '%f,%.2f,%.*f' %(1/3.0,1/3.0,4,1/3.0)
		'0.333333,0.33,0.3333'
		
### 基于字典的字符串格式化

字符串格式化允许左边的转换目标来引用右边字典中的键来提取对应的值

	>>> "%(n)d %(x)s" % {"n":1,"x":"spam"}
	'1 spam'
	
常用于生成类似`HTML`和`XML`的程序

	>>> reply = """
	... Greetings...
	... Hello %(name)s!
	... Your age squared is %(age)s
	... """
	>>> values = {'name':'xiaowan','age':30}
	>>> print(reply % values)
	
	Greetings...
	Hello xiaowan!
	Your age squared is 30

### 格式化调用方法

`format方法`使用主体字符串作为模版，且接受任意多个表示将要根据模版替换的值的参数

	>>> template = '{0},{1} and {2}'
	>>> template.format('spam','ham','eggs')
	'spam,ham and eggs'
	>>> template = '{motto},{0} and {food}'
	>>> template.format('ham',motto='spam',food='eggs')
	'spam,ham and eggs'
	
- 添加键，属性和偏移量

		>>> import sys
		>>> 'My {1[spam]} runs {0.platform}'.format(sys,{'spam':'laptop'})
		'My laptop runs darwin'
		>>> 'My {config[spam]} runs {sys.platform}'.format(sys=sys,config={'spam':'laptop'})
		'My laptop runs darwin'
		
- 详细的格式化形式

		>>> '{0:10} = {1:10}'.format('spam',123.4567)
		'spam       =   123.4567'
		>>> '{0:>10} = {1:<10}'.format('spam',123.4567)
		'      spam = 123.4567  '
		>>> import sys
		>>> '{0.platform:>10} = {1[item]:<10}'.format(sys,dict(item='laptop'))
		'    darwin = laptop    '

其中`>10`表示在一个10字符宽度字段中右对齐

		>>> '{0:e},{1:3e},{2:g}'.format(3.14159,3.14159,3.14159)
		'3.141590e+00,3.141590e+00,3.14159'
		>>> '{0:f},{1:.2f},{2:06.2f}'.format(3.14159,3.14159,3.14159)
		'3.141590,3.14,003.14'
		
分别格式化为十六进制，八进制，二进制格式

		>>> '{0:X},{1:o},{2:b}'.format(255,255,255)
		'FF,377,11111111'
		>>> bin(255),int('11111111',2),0b11111111
		('0b11111111', 255, 255)
		>>> hex(255),int('FF',16),0xFF
		('0xff', 255, 255)
		>>> oct(255),int('377',8),0o377
		('0o377', 255, 255)	
		
- 硬编码

		>>> '{0:.{1}f}'.format(1/3.0,4)
		'0.3333'
		>>> '%.*f'%(4,1/3.0)
		'0.3333'	

- 内置的`format`函数

		>>> '{0:.2f}'.format(1.2345)
		'1.23'
		>>> format(1.2345,'.2f')
		'1.23'
		>>> '%.2f' % 1.2345
		'1.23'

