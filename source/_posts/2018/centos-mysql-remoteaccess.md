---
title: centos-mysql-remoteaccess
date: 2018-04-04 08:55:59
tags: 
    - Linux
    - 数据库
---

## 笔记

```
mysql -u root -p mysql
grant all privileges on *.* to 'root'@'%' identified by '123456' with grant option; 

```
### 开启访问
```
iptables -I INPUT -p tcp -m state --state NEW -m tcp --dport 3306 -j ACCEPT
```

### 限制访问

```
iptables -D INPUT -p tcp -m state --state NEW -m tcp --dport 3306 -j ACCEPT
```

### other 

```
iptables -L -n
```