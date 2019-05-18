---
title: Python笔记（十）-if语句
date: 2017-08-13 17:37:11
tags: [Python]
---

## 格式

```
if <test1>:
	<statements1>
elif <test2>:
	<statements2>
else:
	<statements3>

## 类似switch的实现

	>>> choice = 'ham'
	>>> print({'spam':1.25,'ham':1.99,'eggs':0.99,'bacon':1.10}[choice])
	1.99
	
## 编写代码时原则

有疑虑时，遵循简易性原则和可读性原则

## 真值测试

- 任何非零数字或非空对象都为真
- 数字零，空对象以及特殊对象None都被认作是假
- 比较和相等测试会递归的应用在数据结构中
- 比较和相等测试会返回True或false
- 布尔and和or运算符会返回真或假的操作对象
- 布尔运算符在Python中是字（不是&&，||和！）

and和or运算符总会返回对象，不是运算符左侧的对象，就是右侧的对象

## 三元表达式
	
	//如果X为真，则A=Y,如果X为假,则A=Z
	A= Y if X else Z