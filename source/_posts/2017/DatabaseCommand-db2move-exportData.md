---
title: The using of `db2move` command
date: 2017-06-12 17:07:54
tags: 
    - 数据库

---

==db2move== command could export data from db2.

<!--more-->

## Format


```
db2move <database-name> <action> [<option>   <value>]
```

## Parameters interpretation

- ==database-name== Name of the database；

- ==action== Command of databse to implement import or export，including ==export、import、load==；

- ==-u== username;

- ==-p== password;

- ==-tn== table's name，export single table

- ==-tf== file name，every sentence of the file record integrated name of the table

- ==-ts== the name of tablespace，export all of the data in a table space

- ==-tc==  creator of the table，export all of the data which created by someone

- ==-sn== name of model，export all of the data in a model

- ==-io==  model of import，assign a model  the implement of DB2 could operate. Effective options contains：   ==CREATE、   INSERT、   INSERT_UPDATE、   REPLACE   和   REPLACE_CREATE。== default value is   ==REPLACE_CREATE==。 

- ==-lo== model of load，assign one model which the tools of DB2 can operate. Effective options contains ：==INSERT==  and   ==REPLACE==. Default value is  == INSERT==。



## Examples 

- Export all data from Database


```
db2move db export -u db2admin -p db2admin
```

- Export all data from  one tablespace


```
db2move db export -ts tb1 -u db2admin -p db2admin
```

-  Export all data from  several tablespaces

```
db2move db export -ts tb1,tb2 -u db2admin -p db2admin
```

- Export Single table


```
db2move db export -tn tbname -u db2admin -p db2admin
```

- Export all data in one model


```
db2move db export -sn schemaname -u db2admin -p db2admin
```

- Export data on the basis of configuration files

> All of tables which needed to export recorded in configuration files. You must pay attention to that only one table name should be writtened in that file each sentence.Addtionally, when  put one table name in that line, you should increase model name belonging to.The quotation marks are also required. 


```
db2move db export -tf table.txt -u db2admin -p db2admin
```

- export all data which created by one person


```
db2move db export -tc db2admin -u db2admin -p db2admin
```


