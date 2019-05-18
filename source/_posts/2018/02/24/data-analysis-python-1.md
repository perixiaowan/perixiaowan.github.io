---
title: 利用Python进行数据分析---读书笔记（一）
date: 2018-02-24 17:31:05
author: liuxiaowan
tags: [Python]
---


## 摘要
- 一组新闻文章可以被处理为一张词频表，而这张词频表就可以用于情感分析

- `Cython`

  - Cython是属于PYTHON的超集，他首先会将PYTHON代码转化成C语言代码，然后通过c编译器生成可执行文件。
  - 优势：资源丰富，适合快速开发。翻译成C后速度比较快


- 对于高并发、多线程的应用程序（尤其是拥有许多计算密集型线程的应用程序），Python并不是一种理想的编程语言。因为Python有一个叫做全局解释器锁（Global Interpreter Lock，GIL）的东西，这是一种防止解释器同时执行多条Python字节码指令的机制

- Python实现多线程的一种方法：
  - Cython项目中集成OpenMP（一个用于并行计算的C框架），以实现并行处理循环进而大幅度提高数值算法的速度

## `NumPy`

Python科学计算的基础包，
提供以下功能：

- `ndarray`：快速高效的多维数组对象；
- 用于对数组执行元素级计算以及直接对数组执行数学运算的函数；
- 读写硬盘上基于数组的数据集的工具；
- 线性代数运算、傅里叶变换，以及随机数生成；
- 将C、C++、Fortran代码集成到Python的工具
- 作为在算法之间传递数据的容器

- `NumPy`数组在存储和处理数据时要比内置的Python数据结构高效的多

## `pandas`

- 提供了快速便捷处理结构化数据的大量数据结构和函数
- `DataFrame`:一个面向列的二维表结构
- 具有高性能的数组计算功能
- 电子表格和关系型数据库灵活的数据处理功能
- 复杂精细的索引功能

## `matplotlib`

- 最流行的用于绘制数据图表的Python库
- 适合创建出版物上用的图表
- 非常好用的交互式数据绘图环境

## `IPython`

- Python科学计算标准工具集的组成部分
- 一个增强的`Python shell`：可提高编写、测试、调试Python代码的速度
- 主要用于交互式数据处理，利用`matplotlib`对数据进行可视化处理

## `SciPy`

一组专门解决科学计算中各种标准问题域的包的集合

- `scipy.integrate`:数值积分例程和微分方程求解器
- `scipy.linalg`: 提供线性代数例程和矩阵分解功能
- `scipy.optimize`:函数优化器以及根查找算法
- `scipy.signal`:信号处理工具
- `scipy.sparse`:稀疏矩阵和稀疏线性系统求解器
- `scipy.stats`:标准连续和离散概率分布、各种统计检验方法，以及更好的描述统计法
- `scipy.weave`:利用内联c++代码加速数组计算的工具

## 社区和研讨会

- `pydata`：一个Google Group邮件列表，其中的问题都是Python数据分析和pandas方面的；
- `pystatsmodels`：针对与statsmodels和pandas相关的问题
- `numpy-discussion`：针对与NumPy相关的问题
- `scipy-user`：针对SciPy和Python科学计算相关的问题
- `PyCon`和`EuroPython`：美国和欧洲最主要的Python研讨会。
