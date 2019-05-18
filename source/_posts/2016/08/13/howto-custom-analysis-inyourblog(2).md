---
title: 手把手教你在博客中添加统计分析功能（2）
date: 2016-08-13 09:31:34
subtitle: 别在最能吃苦的年纪，选择了安逸
tags: [原创,blog,javascript]
---

## 简介 ##
> Google Analytics
> 是著名互联网公司Google为网站提供的数据统计服务。可以对目标网站进行访问数据统计和分析，并提供多种参数供网站拥有者使用。

今天将给大家介绍如何在你的博客中添加Google Analytics分析，监控网站，统计你的网站访问量，入口地址等信息，针对这些信息方便你自己对网站进行优化和改进。

<!--more-->

## 注册和登录 ##

1. 如果你已经拥有gmail账号，使用该账号登录Google Analytics界面，地址：[http://www.google.com/analytics/](http://www.google.com/analytics/ "Google Analytics（分析）")
2.  如果你还未拥有gmail账号，则需要注册一个，注册具体流程可以百度或者google，注册地址：[https://accounts.google.com/SignUp?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&hl=zh-CN](https://accounts.google.com/SignUp?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&hl=zh-CN "gmail注册地址")
3.  假定你已经有了gmail账号，则可以直接登录进Google Analytics,显示界面如图所示：
![](http://i.imgur.com/JL7bKpK.jpg)
4.  点击注册按钮，注册Google Analytics分析功能，注册界面，如下所示：
![Google Analytics register](http://i.imgur.com/5GDWUB3.jpg)

5.  填写完毕信息之后，点击跟踪信息id按钮，即可出现如下界面：
![](http://i.imgur.com/Qrvnm3e.jpg)

## 添加统计代码 ##

1. 将上图中显示的“跟踪代码”复制到你所要跟踪统计的网页中，如果你的网页是generate出来的，那么需要将此段代码添加至你的模板中。
![](http://i.imgur.com/ZzjXUBL.jpg)

2. 如果你需要通过配置文件进行动态添加Google Analytics统计功能，只需加个判断，同时，将生成的个人标志码用变量提取出，并在配置文件中添加相关属性即可，具体代码参考上图。_config.yml文件中属性配置如下图所示：
![](http://i.imgur.com/Nc6LLrN.jpg)
其中‘ga_track_id’和‘ga_domain’属性值，可以在注册Google Analytics之后，Google为我们自动生成的代码中找到。
![](http://i.imgur.com/NSavm28.jpg)

## 结束语 ##

至此，已经将百度统计和Google Analytics统计添加至我们的博客中，接下来，只需访问Google Analytics界面，即可使用Google提供的分析统计功能实时监控并分析我们的网站，根据数据信息我们可以有针对性的改善网站的SEO。

    谢谢大家对Mac小兔的支持，也可进行RSS订阅，随时关注最新信息。

