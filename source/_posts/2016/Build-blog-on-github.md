---
title: github博客搭建
date: 2016-06-17 15:06:10
tags: 
	- github 
---

# **博客基本特点**#
1、gh-pages服务：有300MB空间

2、博客使用Markdown语法
3、需要了解的内容（能掌握更好）：
	1）html+css+javascript
	2）git基本语法
	3）markdown语法
	4）nodejs
4、使用Hexo（基于Node.js）和Jekyll(基于Ruby开发的)
<!--more-->
----------

# **流程汇总：** #

1、安装Git客户端

2、注册GitHub

3、创建仓库：例如peri.github.io

4、配置SSH

	1）git config --global user.name "你的GitHub用户名"
	2）git config --global user.name "你的GitHub注册邮箱"
	3）生成ssh密钥：ssh-keygen -t rsa -C "你的GitHub注册邮箱"
	4）添加公钥到github
	5）测试SSH：ssh -T git@github.com
5、创建本地仓库

	1）mkdir blog
	2）cd blog
6、初探Hexo

	1）安装Nodejs
	2）安装Hexo：npm install hexo-cli -g
	3）初始化Hexo：hexo init
	4）安装依赖：npm install
	5）启动Hexo：hexo server
	6）启动之后，打开：http://localhost:4000
7、再探Hexo

	1）新建文章：hexo new <title>
	2）生成静态页面：hexo generate
	3）清除生成内容：hexo clean
	4）部署Hexo：hexo deploy
8、部署Hexo

	1）编辑配置文件，关联远程仓库
	打开_config.yml（yaml格式）,找到# Deployment，编辑，所有配置项后面的：与值之间要有一个空格

9、常用插件

	***安装插件需要加上--save表示依赖项***

	1)RSS订阅插件
		生成rss订阅文件（npm install hexo-generator-feed --save）
		添加配置信息（#sitemap）
	2)SiteMap插件
		hexo-generator-sitemap:生成易于搜索引擎搜索的网站地图
		添加配置信息（#feed）
	3）Git插件
		hexo-deployer-git:使用git同步代码到git仓库中
		npm install hexo-deployer-git --save
	4）更多hexo插件可以查看https://hexo.io/plugins/

10、切换主题
	1）官方主题地址：https://hexo.io/themes/
	2）在github上clone主题到本地
	3）在_config.yml文件中修改主题配置，主题包应该在theme文件夹中。

11、使用Travis自动部署Hexo

	11.1配置多个ssh

	1）新配置一个ssh 密钥
	2）新建配置文件
		cd ~/.ssh
		touch config
	3）打开config，编辑配置信息
	
```	
# github
Host github.com
  HostName github.com
  PreferredAuthentications publickey
  IdentityFile /c/Users/xhs/.ssh/id_rsa
# 这里是空行
# github_blog
Host github.com
  HostName github.com
  PreferredAuthentications publickey
  IdentityFile /c/Users/xhs/.ssh/id_rsa_blog ```

	11.2 配置Travis

	1）接入Travis CI
		进入https://travis-ci.org/
	2）安装travis：gem install travis(cmd下运行)
	3）新建配置文件：touch .travis.yml
	4）复制ssh私钥：
		mkdir .travis
		cp ~/.ssh/id_rsa_blog 目录/.travis/
	5）ssh配置文件：在部署机器上使用，不是本地的
		touch .travis/ssh_config
		vi ssh_config 添加一下内容
		
`Host github.com
  			User git
  			StrictHostKeyChecking no
  			IdentityFile ~/.ssh/id_rsa
  			IdentitiesOnly yes`

	6）登录travis
		travis login --auto(cmd下运行)
	7）加密操作（在博客项目文件夹下对ssh对私钥进行加密）
		travis encrypt-file .travis/id_rsa_blog .travis/ --add

12、编辑配置文件

	打开.travis.yml，添加如下信息：



```language: node_js
node_js:
- "4"  # nodejs的版本
branches:
  only:
  - dev  # 设置自动化部署的分支
before_install:
- export TZ='Asia/Shanghai'  # 设置时区
- npm install -g hexo
- npm install -g hexo-cli
# 将xxxxxxxxxxx替换上面生成的内容
# 这里面的文件路径可根据自己的情况进行修改
# 解密id_rsa_blog.enc 输出到.ssh/文件夹下，命名为id_rsa
- openssl aes-256-cbc -K $encrypted_xxxxxxxxxxx_key -iv $encrypted_xxxxxxxxxxx_iv -in .travis/id_rsa_blog.enc -out ~/.ssh/id_rsa -d
# 设置id_rsa文件权限
- chmod 600 ~/.ssh/id_rsa
# 添加ssh密钥
- eval $(ssh-agent)
- ssh-add ~/.ssh/id_rsa
# 添加ssh配置文件
- cp .travis/ssh_config ~/.ssh/config
# 设置github账户信息
- git config --global user.name "SeayXu" #设置github用户名
- git config --global user.email SeayXu@163.com #设置github用户邮箱
# 安装依赖组件
install:
- npm install
# 执行的命令
script:
- hexo clean && hexo g -d```

9、hexo命令缩写

	hexo g：hexo generate
	hexo c：hexo clean
	hexo s：hexo server
	hexo d：hexo deploy

10、hexo命令组合

	hexo clean && hexo g -s，就是清除、生成、启动
	hexo clean && hexo g -d，就是清除、生成、部署