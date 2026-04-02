---
title: Web主机托管(一)
subtitle: Ubuntu下Apache HTTP安装
date: 2017-02-15 14:39:05
tags:
	- Linux
---

# 基本知识

- 一个监听TCP 80端口的守护进程
- Web上资源位置
	- ISOC（Internet Society）互联网协会定义了三种标识 `URI URL URN`
	- URI(统一资源标志符)：如果资源能通过因特网或其他方式访问，则可以说使用的是一个URI
	- URL(统一资源定位符)：如果一个资源只能通过因特网访问，则把它叫做URL

## HTTP工作原理
- HTTP区分大小写，命令一律大写
- Web服务器支持CGI(通用网管接口，一种允许HTTP服务器与其他程序交换信息的规范）
- Web服务器还支持插件结构，可以将某个扩展名为类似`.php .pl`等的文件发给内嵌的解释器去执行

<!--more-->

## 常用的应用服务器列表

服务器  	|  类型 	| 网站
-------	|------	|------------
Tomcat		|开源		|[tomcat](http://tomcat.apache.org)	
GlassFish	|开源		|[GlassFish](http://glassfish.dev.java.net)
JBoss		|开源		|[JBoss](http://jboss.org)
OC4J		|商业		|[OC4J](http://oracle.com/technology/tech/java/oc4j)
WebSphere	|商业		|[WebSphere](http://ibm.com/websphere)
WebLogic	|商业		|[WebLogic](http://oracle.com/appserver/weblogic/weblogic-suite.html)
Jetty		|开源		|[Jetty](http://eclipse.org/jetty)

## 负载均衡
- 提高性能，增加冗余性

### **几种方法：**

### 1. 循环域名服务

	给多个ip地址分配一个相同的主机名

例如：

```
$ dig www.baidu.com a

; <<>> DiG 9.8.3-P1 <<>> www.baidu.com a
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 25283
;; flags: qr rd ra; QUERY: 1, ANSWER: 3, AUTHORITY: 0, ADDITIONAL: 0

;; QUESTION SECTION:
;www.baidu.com.			IN	A

;; ANSWER SECTION:
www.baidu.com.		735	IN	CNAME	www.a.shifen.com.
www.a.shifen.com.	136	IN	A	220.181.111.188
www.a.shifen.com.	136	IN	A	220.181.112.244

;; Query time: 541 msec
;; SERVER: 192.168.3.1#53(192.168.3.1)
;; WHEN: Wed Feb 15 15:24:39 2017
;; MSG SIZE  rcvd: 90

```
上面例子中，`www.baidu.com`被映射到规范名`www.a.shifen.co`上，之所以加上间接一层，是为了既可以把传递内容的责任委托给下游的CDN提供商，而又不会把自己跟域名的控制权交给CDN。

如果一台服务器宕机了，必须更新DNS，把流量从那台机器上引开

### 2. 负载均衡硬件

- 需要富裕的资金
- 商业第三方负载均衡硬件
	- `F5 Networks`公司的`Big-IP Controller`
	- 北电公司的`AlteonWeb`交换产品
	- 思科公司的内容服务交换机`Content Services Switches`

### 3. 基于软件的负载均衡器

	不要求用专门的硬件，可以在一台UNIX服务器上运行

# HTTP服务程序

## Ubuntu下安装

### 下载Apache HTTP Server

[Apache HTTP Server下载地址](http://httpd.apache.org/download.cgi#apache24)

- 当前Apache HTTP Server版本为`httpd-2.4.25`
- 本文直接下载的源文件`httpd-2.4.25.tar.gz`

### 安装

> 安装过程中出现的任何问题，请文章结尾处 **问题解决办法**

```
//下面两行二选一执行
$ tar -zxf httpd-2.4.25.tar.gz <!--gz文件-->
$ tar -jxf httpd-2.4.25.tar.bz2 <!--bz2文件-->
//配置，编译，安装
$ cd httpd-2.4.25
$ ./configure --prefix=/usr/local/httpd
$ make && make install

```
如果安装失败，请参阅以下部分：问题解决办法

# 问题解决办法
## 没有创建目录的权限

当进行`make && make install` 时安装过程中出现了没有权限的报错，可能问题是在Ubuntu下安装目录需要授权，以本文安装目录`/usr/local/`为例，

```
$ sudo chmod 777 /usr/local
```
## 安装httpd,apr,apr-util,pcre错误解决

### 提示缺少apr和apr-util

[Apache apr和apr-util下载地址](http://apr.apache.org/download.cgi)

- apr安装

```
$ tar -zxf apr-1.5.2.tar.gz
$ cd  apr-1.5.2
$ ./configure prefix=/usr/local/apr
$ make && make install
```
- apr-util安装

```
$ tar -zxf apr-util-1.5.4.tar.gz
$ cd  apr-util-1.5.4
$ ./configure prefix=/usr/local/apr-util --with-apr=/usr/local/apr
$ make && make install
```
- pcre下载和安装

[pcre下载地址](http://www.pcre.org/)
>切记：需下载pcre，而不是pcre2，否则到httpd安装时，会提示无法找到`pcre-config`

```
$ tar -zxf pcre-8.39.tar.gz
$ cd  pcre-8.39
$ ./configure prefix=/usr/local/pcre 
$ make && make install
```

### 重新安装Apache HTTP

	当apr，apr-util，pcre都安装完毕之后，需重新安装Apache HTTP
	
```
$ cd httpd-2.4.25
$ ./configure --prefix=/usr/local/httpd --with-apr=/usr/local/apr --with-apr-util=/usr/local/apr-util --with-pcre=/usr/local/pcre
$ make && make install
```
# 配置Apache

	所有配置文件保存在`conf`中，需要检查并自定制`httpd.conf`这个文件
	
## 配置全局设定

	例如：服务器池，HTTP服务器监听查询的TCP端口（通常是80），以及用于加载动态模块的设定（LoadModule）

## 配置“默认”服务器

配置的参数包括：

- 服务器以哪个用户和用户组的身份运行（要用非root的身份）
- `DocumentRoot`语句：定义了对外提供的文档所在目录树的根
- `<Document>`逐个目录控制访问

# 运行Apache

```
$  cd /YOURPATH/apache/bin/
$ sudo ./apachectl -k start
```

如果启动过程中，报出如下错误：

```
AH00558: httpd: Could not reliably determine the server's fully qualified domain name, using 127.0.1.1. Set the 'ServerName' directive globally to suppress this message
```
**解决办法**

```
$ vim /YOURPATH/apache/conf/httpd.conf
```
在文件中找到`ServerName`这一行，将此行第一个字符`#`去除，然后更改为：`ServerName 127.0.0.1:80`

重新执行

```
$ sudo ./apachectl -k start
httpd (pid 23730) already running
```
在浏览器中输入`localhost`，回车，出现如下界面：

![](http://www.liuxiaowan.com/2017/02/15/linux-WebHost/1.png)

### 运行成功！