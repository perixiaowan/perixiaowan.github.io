---
title: Wireshark-Notes（简介）
subtitle: 你之所以看到我在笑，不是因为我过得很好，而是我想过得很好。
date: 2016-10-04 08:39:28
tags: [Wireshark]
---

> 最流行的网络嗅探器之一，能在多种平台上抓取和分析网络包。
> 命令行形式`TShark`

<!--more-->

## 抓包 ##

**打开wireshark legacy**

### 只抓包头 ###

- 捕获-->选项（Capture-->Options）
- 在`Limit each package to ** bytes` 输入需要抓取的字节数

### 只抓必要的包 ###

- 捕获-->选项（Capture-->Options）
- 在`Capture Filter`中输入`host **.**.**.**`



## TCP的几个标志位 ##

### SYN标志位 ###

	表示正在发起连接请求，因为连接是双向的，所以建立连接时，双方都要发一个SYN

### FIN标志位 ###

	表示正在请求终止连接，因为连接是双星的，所以终止连接时，双方都要发一个FIN

### RST标志位 ###

	用于重置一个混乱的连接，或者拒绝一个无效的请求。

## Seq号 ##

`三次握手`时，seq号并不是从0开始的。如果seq=0，则有可能是wireshark启用了`Relative Sequence Number`。

如果需要关闭，在`Edit>Preferences>Protocols>TCP`里设置即可。

## 三次握手 ##

	1. 客户端：我想建立连接，发送初始序号seq=X，如果答应就回复X+1
	2. 服务器：收到，Ack=X+1,我也想建立连接，发送初始序号seq=Y，如果答应就回复Y+1；
	3. 客户端：收到，seq=X+1；Ack=Y+1

## 四次挥手 ##

	1. 客户端：我希望断开连接，seq=X，ack=Y；
	2. 服务器：断开吧，seq=Y，ack=X+1；
	3. 服务器：我也想断开，seq=Y，ack=X+1；
	4. 客户端：断开吧，seq=X+1，ack=Y+1。

## TCP包的确认 ##

	可以累积起来确认，当收到多个包的时候，只需确认最后一个即可。

