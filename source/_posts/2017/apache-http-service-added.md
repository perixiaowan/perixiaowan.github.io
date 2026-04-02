---
title: Linux下添加Apache HTTP至系统服务
date: 2017-06-06 11:07:54
tags: 
	- Linux
---

>版权声明：本文为博主原创文章，转载需注明出处。

## 测试环境

  centos 6.5


## 自启动服务概述
- 自动启动的脚本一般放在`/etc/rc.d/init.d`目录下；
- 用命令`chkconfig --add httpd`(ubuntu下可用`sysv-rc-conf`替换`chkconfig`)将自动注册开机启动和关机关闭，实质就是在`rc0.d-rc6.d`目录下生成一些文件连接，这些连接连接到`/etc/rc.d/init.d`目录下指定文件的shell脚本。

<!--more-->

## 生成Apache服务控制脚本

在终端允许如下命令：

  # 以apachect1脚本为模板生成Apache服务控制脚本
  # 输出 '/usr/local/apache/bin/apachect1'中除了“#”之外的所有行到/etc/init.d/httpd中
  'grep -v "#" /usr/local/apache/bin/apachect1 > /etc/init.d/httpd'

## 添加内容令其支持chkconfig命令

### 使用vi编辑apache服务控制脚本

	vi /etc/init.d/httpd

### 文件添加内容，另其支持chkconfig命令

	在httpd脚本文件最前面添加如下命令

	#!/bin/sh
	# chkconfig:2345 85 15
	# description: Apache is a world Wide Web server.

其中`chkconfig:2345 85 15`，`chkconfig`后面的三个参数2345,85和15告诉chkconfig程序:
	
- 在`rc2.d~rc5.d`目录下，创建名为`S85httpd`的文件连接，连接到`/etc/rc.d/init.d`目录下的的httpd脚本。第一个字符是S，系统启动时，运行脚本httpd，会添加一个`start`参数，告诉脚本，现在是启动模式。
- 在`rc0.d`和`rc6.d`目录下，创建名为`K15httpd`的文件连接，第一个字符为K，关闭系统时，运行`httpd`，添加一个`stop`，告诉脚本，现在是关闭模式。
- 对于以K开头的文件，系统将终止对应的服务；
- 对于以S开头的文件，系统将启动对应的服务；

### 增加Apache服务控制脚本执行权限

在终端运行：
	
	chmod +x /etc/init.d/httpd

### 将Apache服务添加到系统服务

在终端运行：
  
  	chkconfig --add httpd

### 检查Apache服务是否生效

在终端运行：
  	
  	chkconfig --list httpd

输出结果类似：
  
  	httpd 0:off 1:off 2:on  3:on  4:on  5:on  6:off

如果出现上述结果，则表面apache服务已经生效，在2,3,4,5运行级别上随系统启动而自动启动

### service命令启动服务

完成上述步骤之后，就可以使用service命令启动（或停止）apache服务，命令如下所示：
  
  	service httpd start   //apache启动
  	service httpd stop    //apache停止

### 关闭apache开机自启动

在终端运行：
 	
 	chkconfig httpd off
