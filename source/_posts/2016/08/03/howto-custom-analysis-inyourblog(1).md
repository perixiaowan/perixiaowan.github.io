dlayout: tags
title: 手把手教你在博客中添加统计分析功能（1）
date: 2016-08-03 08:33:48
tags: [原创,blog,javascript]
---

目前，有一些公司，比如百度、Google，为用户提供网站统计分析功能，我们只需通过这些公司提供的api接口，在我们自己的网站中进行调用，即可实现对网站的统计分析。本文就百度统计3.0版做个简单的介绍。下一篇给大家介绍Google的google analytics分析工具。

<!--more-->

### 注册网站 ###


1. 打开[http://tongji.baidu.com/web/welcome/login](http://tongji.baidu.com/web/welcome/login "百度统计分析网站")
2. 注册百度统计站长版
 其中，在‘网站’这一项，填写自己的网站域名，比如：
> perixiaowan.github.io

注册完毕之后，显示界面如图1所示

![百度统计分析代码](https://github.com/perixiaowan/MarkdownPhotos/blob/master/blog/analytics_1.JPG?raw=true)
图1 百度统计分析代码获取

### 添加分析代码 ###

将上图1所示代码段copy至自己的代码中，如下所示

    <script>
    var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "//hm.baidu.com/hm.js?b760b7848c7e06e1931a383d0a2c116f";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
    })();
    </script>

最好将其放至生成html的模板中，这样可在每次撰写新的md文件时，hexo g后会自动将此段代码加入html中。避免每次写新文章手动添加分析代码的麻烦。本人项目中，将此段代码放置了theme主题下的layout》post.ejs文件中，如图2所示

![统计功能代码位置2](https://github.com/perixiaowan/MarkdownPhotos/blob/master/blog/analytics_2.JPG?raw=true)
图2 统计功能代码位置

### 更新github ###

    hexo clean & hexo g & hexo d

### 结束语 ###

至此，一个简单的百度统计功能就被加进自己的博客中，当每次撰写新的博客，并发布至github上后，就可实时监测文字被访问的统计信息。可以依据这些数据，对自己的网站进行SEO等改进措施。

**
在下一章中，我将为大家介绍如何在自己的博客中添加google analytics分析工具，欢迎大家经常来拜访Mac小兔噢^_^**