---
title: mysql导入数据出现MySQL server has gone away的解决方法
date: 2018-03-22 20:48:53
tags: [数据库]
---

## 问题描述

当使用mysql客户端或者在linux命令行中导入数据时，都提示`MySQL server has gone away`的错误。

  [root@i**** ~]# mysql -u root -p databasetest < test.sql

提示如下错误信息

  ERROR 2006 (HY000): MySQL server has gone away

## 解决办法

官方解释:适当增大`max_allowed_packet`参数可以使client端到server端传递大数据时，系统能够分配更多的扩展内存来处理。

- 查看mysql max_allowed_packet的值

```
mysql> show global variables like 'max_allowed_packet';
+--------------------+-----------+
| Variable_name      | Value     |
+--------------------+-----------+
| max_allowed_packet | 268435456 |
+--------------------+-----------+
1 row in set (0.00 sec)

```

- 上面`268435456`是我调大之后的结果，目前是为256M(1024*1024*256)；
- 如果你的数据量更大，可以将此数值可以再调高一些。
- 修改后重新执行sql语句导入数据，解决问题。
