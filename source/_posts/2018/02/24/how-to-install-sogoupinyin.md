---
title: Ubuntu下如何安装搜狗拼音
date: 2018-02-24 17:31:05
author: liuxiaowan
tags: [Linux]
---

# 系统环境

- Ubuntu

```
  xiaowan@xiaowan-pc:~$ cat /proc/version
  Linux version 4.4.0-72-generic (buildd@lcy01-17) (gcc version 5.4.0 20160609 (Ubuntu 5.4.0-6ubuntu1~16.04.4) ) #93-Ubuntu SMP Fri Mar 31 14:07:41 UTC 2017
```

# 基本步骤

1. 添加fcitx的键盘输入法系统，因为sogou是基于fcitx的;
2. 安装sogou输入法；
3. 设置系统参数及其他。

## 安装`fcitx`

```
sudo apt-get install fcitx
sudo apt-get install fcitx-config-gtk
sudo apt-get install fcitx-table-all
sudo apt-get install im-switch
sudo apt-get install -f
```

  其中`sudo apt-get install -f`是用于修复依赖关系，假如用户的系统上有某个package不满足依赖条件，此命令会自动修复，并安装程序包所依赖的包。

## 安装sogou输入法

从搜狗官网上下载linux版本的安装包，并使用如下命令进行安装

```
 sudo dpkg -i sogoupinyin_×××××××_amd64.deb
```

到这一步的时候，我的系统里并没有出现搜狗拼音，选择重启之后，在ubuntu操作系统右上角出现了搜狗pinyin的图标

## 设置系统参数

- 基本设置和在windows下基本无异。


>如果你喜欢`Mac小兔`的文章，记得转载和收藏哦^_^
>欢迎关注我的github主页，来信交流所得～
