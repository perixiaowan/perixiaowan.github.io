---
title: Tomcat8知识要点的总结
subtitle: 你可以用笑容改变别人，但不要让别人改变了你的笑容
date: 2016-08-19 11:38:07
tags: [服务器,原创]
---
# 1 基础知识 #
## Tomcat关键目录 ##

- /bin :存放用于启动及关闭的文件，以及其他一些脚本
- /conf ：配置文件及相关的DTD。最重要的文件是server.xml，这是容器的主配置文件。
- /log: 日志文件
- /webapps: 存放Web应用的相关文件

## 配置Tomcat ##

> 配置文件中的所有信息在启动时才被读取，改动文件后，必须重启容器才能生效。

<!--more-->

## 解决方案和帮助手册 ##

	1. 当前文档
	完整读完Apache Tomcat提供的帮助文档，可以省下很多时间和精力。参考链接[http://tomcat.apache.org/tomcat-8.0-doc/index.html](http://tomcat.apache.org/tomcat-8.0-doc/index.html "Apache Tomcat8帮助文档")

	2. Tomcat FAQ
	参考链接[http://wiki.apache.org/tomcat/FAQ](http://wiki.apache.org/tomcat/FAQ "Tomcat FAQ")

	3. Tomcat WIKI
	参考链接：[http://wiki.apache.org/tomcat/](http://wiki.apache.org/tomcat/ "Tomcat WIKI")

	4. jGuru上的Tomcat FAQ
	参考链接：[http://www.jguru.com/faq/java-tools/tomcat](http://www.jguru.com/faq/java-tools/tomcat "jGuru上的Tomcat FAQ")

	5. Tomcat邮件列表：Google搜索
	6. Tomcat用户邮件列表
	7. Tomcat开发者邮件列表：该邮件列表是针对Tomcat自身的开发研讨而专门设立的。

# 2 安装 #

	安装方面重要文档：RUNNING.txt

## Windows ##

> 只有当Tomcat运行时，Tomcat的管理Web应用工具才能使用

# 3 第一个应用 #

# 4 Tomcat Web应用部署 #

## 部署web应用 ##

1. 静态部署，启动Tomcat之前安装web应用
2. 动态部署，使用Tomcat Manager应用直接操控已经部署好的Web应用

	Tomcat Manager是一种能交互使用的web应用，还可以利用编程的方式（通过基于URL的API）来部署并管理Web应用

- Apache Tomcat Maven Plugin工程提供了与Apache Maven的集成
- 客户端配置器（TCD）：通过命令行来使用，提供一些额外的功能，比如：编译与验证Web应用，以及将应用打包成Web应用资源（WAR）文件

## 安装 ##

使用Tomcat Manager部署应用需要进行一些配置，可以参考 Tomcat Manager手册[http://tomcat.apache.org/tomcat-8.0-doc/manager-howto.html](http://tomcat.apache.org/tomcat-8.0-doc/manager-howto.html "Tomcat Manager手册")

使用客户端部署器进行部署，请参考链接[http://tomcat.apache.org/tomcat-8.0-doc/deployer-howto.html#Deploying_using_the_Client_Deployer_Package](http://tomcat.apache.org/tomcat-8.0-doc/deployer-howto.html#Deploying_using_the_Client_Deployer_Package)

## 关于上下文 ##

> 上下文在Tomcat中就是Web应用的意思
> 上下文描述符文件是一个XML文件；

	**上下文描述符文件位置**
	1. $CATALINA_BASE/conf/[enginename]/[hostname]/[webappname].xml
	2. $CATALINA_BASE/webapps/[webappname]/META-INF/context.xml

	如果某个web应用没有相应的上下文描述符文件，Tomcat就会使用默认值配置该应用

## 在Tomcat启动时进行部署 ##

- 需先把web应用静态的部署到Tomcat中，然后在重启
- 部署位置由appBase目录属性决定，只有当主机deployOnStartup属性为true时，应用才会在Tomcat启动时进行自动部署


部署具体步骤：
1. 先部署上下文描述文件
2. 再对没被任何上下文描述符文件引用过的膨胀Web应用进行部署，如果在appBase中已存在与这种应用有关的.war文件，且要比膨胀应用文件更新，则会将膨胀应用文件夹清楚，转而从.war文件中部署web应用。
3. 部署.war文件

> **备注** 膨胀Web应用是未经压缩的Web应用资源文件

## 在运行中的Tomcat服务器上进行动态应用部署 ##

- 如主机的autoDeploy属性为true，主机会在必要时尝试动态部署并更新Web应用
- 如果unpackWARs属性设为false，则WAR文件不会膨胀，这是Web应用将部署为一个压缩文档。
- 如果/WEB-INF/web.xml文件更新，则重新加载Web应用
- 如果用来部署Web应用的上下文描述符更新，则重新部署该Web应用

## 使用Tomcat Manager进行部署 ##

## 使用客户端部署进行部署 ##

暂略

# 5 Tomcat Manager #





参考文献：《Tomcat8权威指南（极客学院）》