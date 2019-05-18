---
title: Git在`push`时遇到`GitHub could not read Username` 的解决办法
date: 2018-03-07 17:31:05
author: liuxiaowan
tags: [Git]
---

## 解决办法

- 打开项目所在目录
- 进入`.git`文件夹
- 打开config文件
- 在请求串中加入身份信息即可，格式为：

```
https://[userName]:[password]@github.com/[username]/project.git
```

修改后
```
[remote "origin"]
	url = https://perixiaowan:00000000@github.com/perixiaowan/mdfiles.git
	fetch = +refs/heads/*:refs/remotes/origin/*
注：00000000代表密码，此处为示例
```
