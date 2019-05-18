dlayout: tags
title: 如何在MarkdownPad中引用图片
date: 2016-08-02 19:56:18
tags: [原创,others]
---
**在Markdownpad中，上传本地图片需要pro收费版，那么引用图片如何做到不花钱呢？我们知道引用带有url链接的图片则是不收费的。那么，我们可以通过将本地图片转换成url来使用。**

**下面我给大家介绍一种可以将本地照片转换成url的方法。**
> 我们可以借助于github服务来生成我们的url链接

<!--more-->

1. 在github中，创建名为MarkdownPhotos的新项目

2. 使用git工具将新项目clone至本地

    git clone git@github.com:你的域名/MarkdownPhotos.git

3. 进入MarkdownPhotos目录中

    cd MarkdownPhotos/

4. 将需要转换url的图片放置MarkdownPhotos目录中，也可以在该目录中新建文件夹进行图片分类，如图1所示

	![](https://github.com/perixiaowan/MarkdownPhotos/blob/master/others/MarkdownPhotos%E7%9B%AE%E5%BD%95.JPG?raw=true)
	

5. 在git工具中将本地内容提交至远程服务器中，具体操作如下所示：

    git add --all
    git commit -m '标记（根据自己的需求编辑）'
    git push origin master

6. push后的界面如图2所示

	![](https://github.com/perixiaowan/MarkdownPhotos/blob/master/others/MarkdownPhotos.JPG?raw=true)

7. 找到该项目中已上传的图片，将其url拷贝至MarkdownPro2中的image中的‘Image URL’中，并在链接末尾加上?raw=true，如图3所示：

	![](https://github.com/perixiaowan/MarkdownPhotos/blob/master/others/markdownpad2.JPG?raw=true)

	点击ok即可。


