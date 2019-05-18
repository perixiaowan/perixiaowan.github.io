---
title: Python笔记（七）-文件
date: 2017-08-05 10:44:35
tags: [Python]
---

## 文件

- 内置`open`函数会创建一个Python文件

### 常见文件运算

操作								|解释
-----								|-----
output = open(r'C:\spam','w')	|创建输出文件
output = open(r'C:\spam','a')	|在文件尾部追加内容打开文件
input = open('data','r')		|创建输入文件
input = open('data')			|与上一行相同，默认‘r’
aString = input.read()			|把整个文件读进单一字符串
aString = input.read(N)			|读取之后N个字节到一个字符串
aString = input.readline()		|读取下一行到一个字符串
output.write(aString)			|写入字节字符串到文件
output.writelines(aList)		|把列表内所有字符写入文件
output.close()					|手动关闭
output.flush()					|把输出缓冲区刷到硬盘中，但不关闭文件
for line in open('data'):use line|文件迭代器一行行读取
open('f.txt',encoding='latin-1')|Unicode文本文件
open('f.bin','rb')				|二进制byte文件


- 其中`r`字母出现在字符串的第一引号的前面，它将会关闭转义机制；

### 使用文件

- 文件迭代器诗最好的读取行工具
	
		从文本文件读取文字行的最佳方式是根本不要读取该文件
		
- 内容是字符串，不是对象
	- 文件读取出的数据是字符串
	- 数据写入时，Python不会自动把对象转换为字符串
	- 可以使用转换字符串和数字的工具（`int` `float` `str` `pickle模块` `struct模块`）

- close是通常选项

		建议手动关闭文件，将会是好习惯。

- 文件是缓冲的且是可查找的

### 实际应用

	>>> myfile = open('myfile.txt','w')
	>>> myfile.write('hello text file\n')
	16
	>>> myfile.write('goodbye text file\n')
	18
	>>> myfile.close()
	>>> myfile = open('myfile.txt')
	>>> myfile.readline()
	'hello text file\n'
	>>> myfile.readline()
	'goodbye text file\n'
	>>> myfile.readline()
	'' 
	
- 上述代码中最后一个`readline`调用返回一个空字符串，表明已经到达文件底部
- 文件的空行是含有新行符的字符串，不是空字符串
- 写入方法不会为我们添加行终止符`\n`

		>>> open('myfile.txt').read()
		'hello text file\ngoodbye text file\n'
		>>> print(open('myfile.txt').read())
		hello text file
		goodbye text file
		
- 文件迭代器

		>>> for line in open('myfile.txt'):
		...     print(line,end = ',')
		... 
		hello text file
		,goodbye text file

- 所有的字符串从技术上讲都是Unicode

### 在文件中存储并解析python对象

- 存储
		
		>>> F = open('datafile.txt','w')
		>>> F.write(S+'\n')
		5
		>>> F.write('%s,%s,%s\n' %(X,Y,Z))
		9
		>>> F.write(str(L) + '$'+str(D)+'\n')
		27
		>>> F.close()
		
		>>> chars = open('datafile.txt').read()
		>>> chars
		"Spam\n43,44,45\n[1, 2, 3]${'b': 2, 'a': 1}\n"
		>>> print(chars)
		Spam
		43,44,45
		[1, 2, 3]${'b': 2, 'a': 1}

- 解析

		>>> F = open('datafile.txt')
		>>> line = F.readline()
		>>> line
		'Spam\n'
		>>> line.strip()
		'Spam'
		>>> line = F.readline()
		>>> line
		'43,44,45\n'
		>>> parts = line.split(',')
		>>> parts
		['43', '44', '45\n']
		>>> int(parts[1])
		44
		>>> numbers = [int(P) for P in parts]
		>>> numbers
		[43, 44, 45]
		>>> line = F.readline()
		>>> line
		"[1, 2, 3]${'b': 2, 'a': 1}\n"
		>>> parts = line.split('$')
		>>> parts
		['[1, 2, 3]', "{'b': 2, 'a': 1}\n"]
		>>> eval(parts[0])
		[1, 2, 3]
		>>> objects = [eval(P) for P in parts]
		>>> objects
		[[1, 2, 3], {'b': 2, 'a': 1}]
		
### `pickle`模块

能够直接在文件中存储几乎任何python对象的高级工具，并不要求把字符串转换来转换去。像是超级通用的数据格式化和解析工具

	>>> D = {'a':1,'b':2}
	>>> F=open('datafile.pkl','wb')
	>>> import pickle
	>>> pickle.dump(D,F)
	>>> F.close()
	>>> 
	>>> F = open('datafile.pkl','rb')
	>>> E = pickle.load(F)
	>>> E
	{'b': 2, 'a': 1}
	
### `struct`模块

- 能够构造并解析打包的二进制数据

- `>i4sh`解析

		i ----> int ---> integer ---> 7
		4s ----> char ---> string ---> 'spam'
		h ---> unsigned short ---> integer ---> 8
		
```
>>> F = open('data.bin','wb')
>>> import struct
	
>>> data = struct.pack('>i4sh',7,'spam'.encode('utf-8'),8)
>>> data
b'\x00\x00\x00\x07spam\x00\x08'
>>> F.write(data)
10
>>> F.close()
```
生成了一个二进制数据字符串（主要由不可打印的字符组成，这些字符以十六进制转义的格式进行打印）

	>>> F = open('data.bin','rb')
	>>> data = F.read()
	>>> data
	b'\x00\x00\x00\x07spam\x00\x08'
	>>> values= struct.unpack('>i4sh',data)
	>>> values
	(7, b'spam', 8)
	
### 文件上下文管理

把文件处理代码包装到一个逻辑层中，以确保在退出后可以自动关闭文件，而不是依赖垃圾收集上的自动关闭

	>>> myfile =  open('datafile.txt') 
	>>> try:
	...     for line in myfile:
	...             print(line," ")
	... finally:
	...     myfile.close()
	... 
	Spam
	  
	43,44,45
	  
	[1, 2, 3]${'b': 2, 'a': 1}
	
### 其他文件工具

- 标准流

		例如`sys.stdout`

- os模块中的描述文件

		处理整数文件，支持诸如文件锁定之类的较低级工具

- `sockets` `pipes`和`FIFO`文件

		文件类对象，用于同步进程或者通过网络进行通信

- 通过键来存取的文件

	通过键直接存储的不变的Python对象

- `Shell`命令流

	像`os.popen`和`subprocess.Popen`这样的工具，支持产生shell命令，并读取和写入到标准流。

### 第三方开源文件类工具

- `PySerial`：支持窗口交流
- `pexpect` ：交互程序


## 读取文件
`file = open('test.txt','r')`

- `file.read()`:一次把文件加载至内存；
- `file.read(1)`:一次读一个字符
- `file.readline()`:一次读取文件一行

- 