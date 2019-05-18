---
title: Pandas分组统计函数：pivot_table和crosstab
date: 2018-03-14 17:31:05
author: liuxiaowan
tags: [Python]
---

# 透视表`pivot_table`

## 语法

```
pandas.pivot_table(data, values=None, index=None, columns=None, aggfunc='mean', fill_value=None, margins=False, dropna=True, margins_name='All')

```

## 解析

- `pivot_table`（数据透视表）可以看做是一种高级的groupby功能
- `index`指定行键，`columns`指定列键
- `margins`:设置为true，则可以得到分项总计数据

# 交叉表`crosstab`

## 语法

```
pandas.crosstab(index, columns, values=None, rownames=None, colnames=None, aggfunc=None, margins=False, margins_name='All', dropna=True, normalize=False)
```

## 解析

- 可以按照指定的行和列统计分组频数


# groupby和pivot_table区别示例

```

a=pd.pivot_table(df,index=['Category','Buyer','Product'],values=['Qty','Amount'],aggfunc={'Qty':(np.sum),'Amount':(np.sum)})
b=df[['Buyer','Category','Product','Amount','Qty']].groupby(['Category','Buyer','Product']).sum()

```
