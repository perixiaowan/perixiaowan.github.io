---
title: 每日一个Linux命令（cat）
date: 2016-10-27 10:38:50
tags: 
    Linux
---

- 拼接多个数据文件

    cat file.txt file.txt

- 将输入文件的内容与标准输入拼接一起 ###

    echo "this is a test"| cat - file.txt

> 其中*-*被作为来自stdin文本的文件名

- 压缩空白行

    cat -s file

- 移除空白行
 
    cat file | tr -s '\n'

- 将制表符打印出来

    cat -T file

> 其中制表符标记成*^|*