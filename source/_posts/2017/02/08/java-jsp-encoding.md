---
title: JSP中使用EL表达式传值中文显示乱码
subtitle: 在tomcat服务器上，EL表达式传值到java中文乱码的解决办法
date: 2017-02-08 15:33:14
tags: Java
---

	JSP和Java传值时,使用EL表达式经常出现中文乱码问题

<!--more-->

# 解决办法

- 找到apache-tomcat的目录，打开文件`conf\server.xml`

```
<Connector port="8080" protocol="HTTP/1.1"   
               connectionTimeout="20000"   
               redirectPort="8443" />  
```
***
**将如上代码改为如下所示**

```
<Connector port="8080" protocol="HTTP/1.1"   
URIEncoding="UTF-8"  
connectionTimeout="20000"   
redirectPort="8443"   
useBodyEncodingForURI="true"/>  
```

### 此时问题解决！
