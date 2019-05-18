---
title: 利用Python进行数据分析---读书笔记（二）
date: 2018-03-01 17:31:05
author: liuxiaowan
tags: [Python]
---

#字典初始化

```
from collections import defaultdict

# 所有的值均会被初始化为0
counts = defaultdict(int)
```

## `dict.items()`

  字典(Dictionary) items() 函数以列表返回可遍历的(键, 值) 元组数组。

## `list.sort([func])`

用于对原列表进行排序

## `collections.Counter`

```
counts = Counter(example_list)
counts.most_common(n)
```

对列表`example_list`中的元素进行统计，并使用`most_common`获得前n的数据

## `pandas`中的`DataFrame`

`DataFrame`是`pandas`中最重要的数据结构，用于将数据表示为一个表格

```
from pandas import DataFrame,Series
import pandas as pd; import numpy as np
frame = DataFrame(records)  # 其中records是一个字典
counts = frame['属性'].value_counts()  # 效果和上述`Counter(example_list)`类似
counts[:n] # 取出前n的数据统计
```
其中`frame`输出形式是摘要视图（`summary view`），主要用于较大的`DataFrame`对象，

### `pandas`处理缺失数据


#### （1）使用`fillna`替换缺失值（NA）
```
fillna(value=None, method=None, axis=0)
```
value 参数除了基本类型外，还可以使用字典，这样可以实现对不同的列填充不同的值。

```
# 其中frame是上述DataFrame生成的对象
clean_frame = frame['属性'].fillna('Missing')
```

#### （2）使用布尔型数组索引替换空字符串

```
clean_frame[clean_frame==''] = 'Unknown'
counts = clean_frame.value_counts()
counts[:n] # 取出前n的数据统计
```
####（3）使用`dropna`方法

对于一个 Series，dropna 返回一个仅含非空数据和索引值的 Series。

```
dropna(axis=0, how='any', thresh=None, subset=None, inplace=False)
```
- axis : {0 or ‘index’, 1 or ‘columns’}, or tuple/list thereof Pass tuple or list to drop on multiple axes
- how 参数可选的值为 any 或者 all；
- all 仅在切片元素全为 NA 时才抛弃该行(列)；
- thresh参数的类型为整数时的作用：比如 thresh=3，会在一行中至少有 3 个非 NA 值时将其保留。
- inplace : boolean, default False. If True, do operation inplace and return None.

[dropna参考链接](http://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.dropna.html)

### counts对象的plot方法

使用最后生成的counts对象的`plot`方法即可得到一张水平条形图

```
counts[:10].plot(kind='barh',rot=0)

# 备注：需要以`pylab`模式打开，否则上句代码没有效果
```


## `Series`

- Series 是pandas两大数据结构中（DataFrame，Series）的一种
- 一种类似于一维数组的对象，它由一组数据（各种NumPy数据类型）以及一组与之相关的数据标签（即索引）组成。

假设`frame`中的a字段含有浏览器、设备、应用程序相关信息，可以使用如下程序分离得到用户行为

```
results = Series([x.split()[0] for x in frame.a.dropna()])
results.value_counts()[:n]
```
