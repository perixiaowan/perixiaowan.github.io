---
title: 在Linux服务器上搭建java开发环境
subtitle: 别让压力左右你的未来，坚持自己喜欢的事，保持热情
date: 2016-08-27 19:01:10
tags: 
	- Java
	- Linux
---

如果要在Linux上做J2EE的开发，则首先需要搭建好J2EE的开发环境。今天LZ将为大家介绍，如何在你的服务器上搭建基本的开发环境，其中包括jdk、tomcat和mysql的安装与配置。文章最后，介绍遇到的常见问题处理方法。

因LZ没有自己的物理机，于是在阿里云上申请了一个基本的云服务器，本文介绍的所有操作过程都是基于阿里云服务器进行的。关于如果申请阿里云服务器，在稍后章节里，我将再为大家专门介绍申请阿里云服务器ECS以及申请域名和域名备案的一系列过程。

<!--more-->

## 远程登录 ##

LZ使用的是Xshell和mac中自带的终端shell链接两种方式链接到远程服务器。如果有人不知道如何链接，还请Google和百度之~如果实在不知怎么链接，也可以在留言处回复，LZ也会尽微薄之力。

## JDK安装与配置 ##

首先，检查你的机器上是否已经安装了java环境，检查命令：

	java -version

提示如下图所示，则表示已安装jdk，如果没有此提示，则需要安装下。

![](http://i.imgur.com/P3Ov6Nn.png)

![](http://www.liuxiaowan.com/2016/08/27/BuildEnvironmentInServer/1.png)

本文基于jdk7的安装包，下载路径：[http://www.oracle.com/technetwork/java/javase/downloads/jdk7-downloads-1880260.html](http://www.oracle.com/technetwork/java/javase/downloads/jdk7-downloads-1880260.html "jdk7")

我在这里下载的是64位的jdk-7u79-linux-x64.rpm包，tar.gz包也可以，大同小异，下面分别讲解两种安装包的安装方法

### rpm包 ###

根据跟人的安装需求，选择下面三个命令中任意一个命令安装jdk

    rpm -i jdk-7u79-linux-x64.rpm 安装 jdk-7u79-linux-x64.rpm 包；
    rpm -iv jdk-7u79-linux-x64.rpm 安装 jdk-7u79-linux-x64.rpm 包并在安装过程中显示正在安装的文件信息；
    rpm -ivh jdk-7u79-linux-x64.rpm 安装 jdk-7u79-linux-x64.rpm 包并在安装过程中显示正在安装的文件信息及安装进度；

此时，安装完毕之后，会在/usr 目录下创建java目录，我们安装的jdk7就放在/usr/java/路径下
如需查看是否安装成功，可以执行以下操作：

	[root@localhost bin]# java
	[root@localhost bin]# javac
	[root@localhost bin]# java -version

在使用rpm安装之后，无需进行jdk环境变量的配置，也可以进行上面三个操作，但为了日后操作方便，配置下java环境变量会比较好。操作如下：

	-修改系统环境变量文件
	`vi /etc/profile` 
	-向文件追加一下内容
	JAVA_HOME=/usr/java/jdk1.7.0_79
	JRE_HOME=/usr/java/jdk1.7.0_79/jre
	PATH=$PATH:$JAVA_HOME/bin:$JRE_HOME/bin
	CLASSPATH=:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar:$JRE_HOME/lib
	export JAVA_HOME JRE_HOME PATH CLASSPATH
	-使修改生效
	source /etc/profile
	-查看PATH值
	echo $PATH

### tar.gz包 ###

首先，在/usr目录下创建一个文件夹，命名为java7

	mkdir java7

其次，运行如下命令，将tar.gz包（以64位为例）解压缩至java7目录中

	tar -xvzf jdk-7u79-linux-x64.tar.gz -C /usr/java7

然后，配置java环境变量，配置过程请参考rpm包安装过程。

到此为止，我们的jdk已安装并配置完毕，接下来，安装tomcat服务器

## Tomcat安装与配置 ##

- 首先，根据自己的操作系统，和安装的jdk版本，选择并确定合适的版本下载tomcat安装包，下载地址[http://tomcat.apache.org/download-70.cgi](http://tomcat.apache.org/download-70.cgi)
- 其次，下载完毕之后，运行如下命令，将安装包解压至‘/usr/local/’ 路径下：
	`tar -xvzf apache-tomcat-7.0.70.tar.gz -C /usr/local/`
- 然后,进入'/usr/local/apache-tomcat-7.0.70/bin',运行命令，启动服务
	`./catalina.sh start`或者`./start.sh`
- 最后，验证结果，访问链接：[http://localhost:8080](http://localhost:8080)
- 访问不了怎么办？
	-  查看端口是否被占用，运行`netstat -ntlp`
		-  如果被占用，运行将占用该端口的程序kill掉即可
		-  如果没被占用，则可进行下一步检查
	-  检查防火墙是否拦截了8080端口，可以在iptables中，将此端口打开，操作方法如下：
		- 方法1：
			- /sbin iptables -I INPUT -p tcp --dport 8080 -j ACCEPT
			- /etc/init.d/iptables save
			- service iptables restart	
		- 方法2：
			- vi /etc/sysconfig/iptables
			- -A INPUT -p tcp -m tcp --dport 8080 -j ACCEPT
			- service iptables restart

**到此为止，tomcat安装完毕**

## Mysql安装与配置 ##

### 卸载原有mysql ###

目前，主流Linux系统版本基本都集成了mysql数据库，我们可以通过如下命令查询是否已经安装了mysql数据库

	rpm -qa | grep mysql

如果安装了，则可以通过rpm -e命令或者rpm -e --nodeps 命令来进行卸载

	rpm -e mysql
	rpm -e --nodeps mysql

卸载完毕，通过`rpm -qa | grep mysql`命令来查看mysql是否已卸载成功。

### 安装方法1  ###

#### 软件下载 ####

大家可以根据自己的操作系统选择相应版本进行下载，我这里选择的是‘Linux Generic’，下载地址：[http://dev.mysql.com/downloads/mysql/](http://dev.mysql.com/downloads/mysql/ "mysql下载地址")

#### 安装 ####

1. 解压缩tar包并改名

下载完毕后，得到安装包 mysql-5.7.14-linux-glibc2.5-x86_64.tar.gz，运行如下命令进行解压缩：

	tar -xvzf mysql-5.7.14-linux-glibc2.5-x86_64.tar.gz
	mv mysql-5.7.14-linux-glibc2.5-x86_64 mysql-5.7.14

2. 添加用户与组

	groupadd mysql
	useradd -r -g mysql mysql
	chown -R mysql:mysql mysql-5.7.14

3. 安装数据库

	su mysql
	cd mysql-5.7.14/scripts
	./mysql_install_db --user=mysql --basedir=/software/mysql-5.7.14 --datadir=/software/mysql-5.7.14/data
	exit

> 关于上面的路径可以自定义

4. 配置文件

	cd mysql-5.7.14/support-files
	cp my-default.cnf /etc/my.cnf
	cp mysql.server /etc/init.d/mysql
	vi /etc/init.d/mysql    #若mysql的安装目录时/usr/local/mysql则可省略此步
	basedir=/software/mysql-5.7.14
	datadir=/software/mysql-5.7.14/data

5. 配置环境变量

	vim /etc/profile
	export MYSQL_HOME="/software/mysql-5.7.14"
	export PATH="$PATH:$MYSQL_HOME/bin"
	保存退出
	./etc/profile

6. 添加自启动服务

	chkconfig --add mysql
	chkconfig mysql on

7. 启动mysql

	service mysql start

8. 登录mysql及改密码及配置远程访问

	mysqladmin -u root password 'your_password'     #修改root用户密码
	mysql -u root -p     #登录mysql,需要输入密码
	mysql>GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'your_password' WITH GRANT OPTION;     #允许root用户远程访问
	mysql>FLUSH PRIVILEGES;     #刷新权限
	mysql>exit

9. 无法访问？
	-  确定防火墙的端口（数据库端口一般是3306）是否开启，如果未开启，则需要手动添加，方法如下：
		- 方法1：
			- /sbin iptables -I INPUT -p tcp --dport 3306 -j ACCEPT
			- /etc/init.d/iptables save
			- service iptables restart	
		- 方法2：
			- vi /etc/sysconfig/iptables
			- -A INPUT -p tcp -m tcp --dport 3306 -j ACCEPT
			- service iptables restart
	- 如果开启之后仍然无法访问，可查看端口是否被占用，或者3306端口是否已更改为其他端口

10. 忘记root密码，如果找回密码？
	cd $MYSQL_HOME
	./bin/mysqld_safe --basedir=/data/mysql-5.7.14 --datadir=/data/mysql-5.7.14/data --skip-grant-tables &
	mysql -u root mysql
	UPDATE user SET password=PASSWORD("new_password") WHERE user='root';
	FLUSH PRIVILEGES;

### 安装方法2-yum安装 ###

#### 查看yum上提供的mysql数据库可下载版本 ####

![](http://i.imgur.com/faoDpG9.png)

![](http://www.liuxiaowan.com/2016/08/27/BuildEnvironmentInServer/2.png)

#### 开始安装 ####

	yum install -y mysql-server.x86_64 mysql.x86_64 mysql-devel.x86_64

当最后出现`Complete！`的时候，表示安装成功了。

#### 查看已安装好的mysql-server版本 ####

	rpm -qi mysql-server

至此我们的mysql数据库已经安装完毕

#### 数据库初始化及相关配置 ####

在安装完毕mysql之后，会多出一个mysqld的服务，这个就是我们的数据库服务，输入`service mysqld start`命令就可以启动我们的mysql服务了。
> 在我们第一次启动mysql服务时，首先会进行初始化的配置，会提示非常多的信息。
> 当再次重新启动mysql服务时，就不会提示这么多的信息了，如下图所示：

![](http://i.imgur.com/umj30wt.png)

![](http://www.liuxiaowan.com/2016/08/27/BuildEnvironmentInServer/3.png)

- 查看mysql服务是否开机自动启动

	chkconfig --list | grep mysqld

- 如果并没有开机自动启动，运行`chkconfig mysqld on`设置成开机自启动

![](http://i.imgur.com/JUmAUZo.png)

![](http://www.liuxiaowan.com/2016/08/27/BuildEnvironmentInServer/4.png)

- 在第一次启动mysql服务时，会进行一系列的初始化工作，输出的信息中，有如下一行
	
	/usr/bin/mysqladmin -u root password 'new-password'

- 给root账号设置密码

	mysqladmin -u root password '******'

- 登录mysql

![](http://i.imgur.com/oGCVRyf.png)
	
![](http://www.liuxiaowan.com/2016/08/27/BuildEnvironmentInServer/5.png)

### mysql主要配置文件 ###

#### my.cnf ####

> 路径：/etc/my.cnf
> 
> 它是mysql的主配置文件

![](http://i.imgur.com/HjFZs1N.png)

![](http://www.liuxiaowan.com/2016/08/27/BuildEnvironmentInServer/6.png)

#### mysql目录 ####

> 路径:/var/lib/mysql
> 
> mysql的数据库文件存放位置

![](http://i.imgur.com/JShrK4N.png)

![](http://www.liuxiaowan.com/2016/08/27/BuildEnvironmentInServer/7.png)

验证方法，创建一个新的数据库，查看此目录中是否有该数据文件，比如创建liuxiaowan数据库，如下图所示：

![](http://i.imgur.com/KehncRo.png)

![](http://www.liuxiaowan.com/2016/08/27/BuildEnvironmentInServer/8.png)

#### log文件 ####

> 路径：/var/log
> 
> mysql数据库的日志输出存放位置，如下图所示

![](http://i.imgur.com/r8aJ4nv.png)

![](http://www.liuxiaowan.com/2016/08/27/BuildEnvironmentInServer/9.png)

其中，mysqld.log文件是我们存放跟mysql数据库操作产生的日志信息，通过查看该文件，可以获得操作纪律
