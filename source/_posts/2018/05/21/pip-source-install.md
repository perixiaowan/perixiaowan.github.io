---
title: pip临时更换源并安装包
date: 2018-05-21 21:57:03
tags: [Python]
---

## 可用源

- 豆瓣：[http://pypi.douban.com/simple/](http://pypi.douban.com/simple/)

- 清华：[https://pypi.tuna.tsinghua.edu.cn/simple](https://pypi.tuna.tsinghua.edu.cn/simple)

## 临时更换源

```
  pip install -i https://pypi.tuna.tsinghua.edu.cn/simple

  pip install -i https://pypi.douban.com/simple/

```

临时更换源并安装软件

```
pip install -i https://pypi.douban.com/simple/ Flask

```

## 永久修改，一劳永逸

linux下，修改 `~/.pip/pip.conf` (没有就创建一个)， 修改 `index-url`

```
[global]
 index-url = https://pypi.douban.com/simple/
 ```
