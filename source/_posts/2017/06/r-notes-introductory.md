---
title: R-notes-introductory
date: 2017-06-11 17:31:05
tags:
---

Copyright © 2017 Xiaowan Liu

`In order to get R'resources more conveniently, I summary some useful commands in this article which is benefical to my R language's studying and is facilitate search for everyone surffing the net`

<!--more-->
## Common-Commands

- help.start()
	
	`Starting browser， provide help with the format of HTML `
	
- help.search()

	`Allowing you to search something using any method which you want to employ`

- example(topic)

	`To see the demo of a topic` 

- source("filename.R")

	`processing batch ` 

- objects()
	
	`Showing all of the names of Objects in the current environment `

- `assign("var",c(3))` and `var<-c(3)`

	`Be equal to each other`

## Basic-Math-Commands

*log,exp,sin,cos,tan,sqrt,max,min,length,range,prod,var,sum,sort,order*

- rep(x,times=5) & rep(x,each=5)

- logical vector

	 value could equal `TURE`,`FALSE`,`NA`

- is.na(x)

	judging whether x has NA element

- is.nan(x)

	judging whether x has NAN element

- print(x,quote=F),parameter `quote`

	logical, indicating whether or not strings should be printed with surrounding quotes.

- paste(x,y,sep="")

	paste vector x and y together use `seq` to separate

- `y <-x[-(1:5)]`: exclude x[1:5]

- `mode` and `length`

-  attributes(object)

	access an object's attributes. 
	
- as.character(x) & as.integer(digits)

- class

	numeric,logical,character,list,matrix,array,factor,data,frame
	
- unclass

	returns (a copy of) its argument with its class attribute removed.
	
- factor(x)

	 encode a vector as a factor.
	 
- levels(factorname)

	provides access to the levels attribute of a variable. 
	
- tapply(X, INDEX, FUN = NULL, ..., default = NA, simplify = TRUE)

	Apply a function to each cell of a ragged array, that is to each (non-empty) group of values given by a unique combination of the levels of certain factors.
	
- dim(x) <-c(2,3,4) 

	abtain array x which is 2\*3\*4

- array(x) & matrix(x)

- `ab <- a` %o% b   or  ` ab <- outer(a,b,"*")


	