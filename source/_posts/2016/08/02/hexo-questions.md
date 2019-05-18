
title: hexo使用中遇到的问题及处理方法
date: 2016-08-02 11:03:43
tags: [原创,hexo]
---

<!--more-->
# 问题1 #
如下图所示：
![](https://github.com/perixiaowan/MarkdownPhotos/blob/master/hexo/hexo-bug-1.png?raw=true)

	在使用hexo new page 'title'创建分类标签后，需要在source目录中找到对应title的文件夹，编辑生成的index.md，才能够生成默认的index.html页面。否则，在进行hexo generate时，会出现，无法生成index.html报错信息。