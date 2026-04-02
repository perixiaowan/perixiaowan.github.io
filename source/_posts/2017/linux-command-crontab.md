---
title: linux(crontab命令)
subtitle: 成长就是一个作茧自缚的过程，要坚强！
date: 2017-02-07 10:04:05
tags: 
	- Linux
---


# 定义
- 守护进程cron，系统启动时，它就运行
- cron按时间表执行命令

# 要点
- **cron** 的配置文件成文*crontab*，是*cron table*的缩写
- 每个用户的crontab都保存在`/var/spool/cron`,且每个用户之多一个crontab文件
- **crontab**文件是以它们所属用户的登录名来命名的，cron用这些文件名来决定用哪个UID来运行每个文件里包含的命令。
- `crontab`命令在*crontab*文件发生变化时会通知cron
	
	不应该直接编辑*crontab*文件，这可能导致cron没有注意到所做的修改
	
<!--more-->

## cron一般会维护一个日志文件

- 目录：`／var/cron/log` 或者`／var/adm/cron/log`
- 日志文件列出了曾经执行过的命令，以及这些命令执行的时间

## crontab文件格式

- 第一列用 *#* 号表示注释
- 每个非注释行包含了6个字段，代表了一条命了，如下所示：
	- 前5个字段告诉cron什么时候运行这条命令
	- *\** 号可以匹配所有字符
	- 短线隔开的是值的范围，例如‘1-5’
	- 一个时间范围后跟一个斜线和一个步长值，例如‘1-10/2’*（仅限linux）*
	- 如果同时指定了day 和 weekday,即满足两个条件之一的天就被选中了

```
# minute hour day month weekday command
45 10 * * 1-5
# 意思：上午10:45，从周一到周五
# 不要把 * 号放在第一个字段中

0,30 * 13 * 5
# 意思：星期五每半小时，以及每月13号每半小时
```
## command-要执行的sh命令行

- 不加引号；
- cron认为command一直到这行末尾，可以包含空格或制表符
- 使用*%* 来表示command字段中的换行，只有到第一个百分号之前到文本才会包含在实际命令中，其余行则作为该命令的标准输入。
- cron命令产生的任何输出都会被寄给这个crontab的*属主*
- cron不会试着去补系统宕机期间错过的没有执行的命令。

## crontab管理

- `crontab filename` 可以将filename的文件安装为crontab文件，它将替换任何以前版本的crontab文件
- `crontab -e` 检出crontab的一个副本，可以编辑，重新提交给crontab目录
- `crontab -l` 将crontab中的内容列在标准输出上
- `crontab -r` 删除它。

### `cron.deny`和`cron.allow`

- 指定列哪些用户可以提交crontab文件
- 在不同的系统上，它们位于不同的目录

系统		|允许／拒绝		|默认		|默认日志
---------	|-----------		|---------	|---------
Linux		|`/etc`			|所有用户		|通过syslog
Solaris	|`/etc/cron.d`		|所有用户		|`／var／cron／log`
HP-UX		|`／usr／lib／cron`|仅限root		|`／var／adm／cron／log`
AIX			|`／var／adm／cron`|所有用户		|`／var／adm／cron／log`

- 存在`cron.allow`：包含在此文件中的所有用户都可以提交crontab，其他用户不可以；
- 存在`cron.deny `：包含在此文件中的所有用户都不可以提交crontab，其他用户可以；
- 既不存在`cron.deny `，也不存在`cron.allow`，默认允许所有用户提交crontab，或者仅限root用户才能提交crontab

## cron的常见用途

### 简单的提醒功能
### 清理文件系统


## 常见问题

- 一条命令在shell里执行正常，放到crontab文件里可能不行，那么可能是环境的问题

> 建议：将命令封装到一个脚本里，且在这个脚本里设置好合适的环境变量。
> 