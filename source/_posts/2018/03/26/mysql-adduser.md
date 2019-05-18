---
title: Linux环境 Mysql新建用户并授权
date: 2018-03-26 20:48:53
tags: [数据库]
---

## 新建用户

```
create user 'username'@'localhost' identified by '******';
grant all privileges on databasename.* to username@ip identified by '******';
# grant all privileges on databasename.* to username@'%' identified by '******';
flush privileges;
```

## 删除用户

```
delect from user where user='username' and Host='localhost';

drop user username@'%';
drop user username@localhost;
```

## 改指定用户password

```
update mysql.user set password=password('新密码') where User='username' and Host="localhost";
flush privileges;
```
