---
title: Ubuntu16.04使用`apt-get update`报GPG错误解决办法
date: 2018-02-27 17:31:05
author: liuxiaowan
tags: [Linux]
---

- 在终端中输入`sudo apt-get update`后出现如下提示：

  W: GPG 错误：http://ppa.launchpad.net/rabbitvcs/ppa/ubuntu lucid Release: 由于没有公钥，无法验证下列签名： NO_PUBKEY 2EE5793634EF4A35
  W: 仓库 “http://ppa.launchpad.net/rabbitvcs/ppa/ubuntu lucid Release” 没有数字签名。
  N: 无法认证来自该源的数据，所以使用它会带来潜在风险。
  N: 参见 apt-secure(8) 手册以了解仓库创建和用户配置方面的细节。

- 解决方法如下：

```
 sudo apt-key adv --recv-keys --keyserver keyserver.Ubuntu.com 34EF4A35
 # 其中`34EF4A35`是提示无法验证的签名后八位数字
```
