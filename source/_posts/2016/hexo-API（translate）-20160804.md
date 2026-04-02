---
title: hexo帮助文档中文版（翻译）
subtitle: 爱笑的女孩，运气总不会太差~
date: 2016-08-04 07:48:06
tags: 
    - Hexo
---


**summary**

> 欢迎使用hexo帮助文档，当你使用hexo时，遇到任何问题，都可以参考疑难杂症解决向导，你也可以在GitHub上发起一个issue或者在Google Group开始一个主题。

> Hexo是什么？
Hexo是一个快速、简单以及强大的博客框架。你可以使用Markdown（或者其他语言）编辑帖子，Hexo使用精美的主题可以快速生成静态页面。

<!--more-->

[https://hexo.io/docs/](https://hexo.io/docs/ "hexo帮助文档英文版参考链接")

## 1.1 开始
### 1.1.1安装 ###

安装Hexo只需要花费数分钟的时间。如果你遇到了问题，并且在这个文档中找不到解决方案，请在github上提交issue，我们将尽全力解决它。

### 1.1.2必备条件 ###

安装Hexo十分简单。然而在安装前，你需要几个其他的东西，如下所示：

- Node.js
- Git

如果你的电脑里已经安装了它们，那么恭喜你，只需要使用npm安装Hexo即可：

    $ npm install -g hexo-cli

如果你的电脑里还没有安装Node.js和Gig，请按照以下说明安装这些必备工具

> **Mac 用户**
> 当编译的时候，你也许会遇到一些问题。请首先从App Store安装Xcode。当Xcode安装之后，打开Xcode，依次选择Preferences -> Download -> Command Line Tools -> Install 来安装命令行工具

### 1.1.3 安装Git ###

Windows: 下载并安装 git.
Mac: Install it with Homebrew, MacPorts or installer.
Linux (Ubuntu, Debian): sudo apt-get install git-core
Linux (Fedora, Red Hat, CentOS): sudo yum install git-core

### 1.1.4 安装Node.js ###

安装Node.js最好的方法是使用nvm（https://github.com/creationix/nvm）

cURL:
    
	$ curl https://raw.github.com/creationix/nvm/master/install.sh | sh

Wget:

	$ wget -qO- https://raw.github.com/creationix/nvm/master/install.sh | sh

一旦nvm被安装，重启终端，并运行下面命令安装Node.js

    $ nvm install stable

或者，下载并运行 the installer

### 1.1.5 安装Hexo ###

一旦所有必备的工具都安装完毕，就可以使用npm安装Hexo

    $ npm install -g hexo-cli

## 1.2 Setup ##

Hexo安装完之后，在目标文件夹中运行下面命令来初始化Hexo。
    
    $ hexo init <folder>
	$ cd <folder>
	$ npm install

初始化完成之后，你的工程文件夹如下所示：

    .
    ├── _config.yml
    ├── package.json
    ├── scaffolds
    ├── source
    |   ├── _drafts
    |   └── _posts
    └── themes

### 1.2.1 _config.yml ###

参阅configuration段落,你可以在此文件中配置更多属性。

### 1.2.2 package.json ###

应用程序数据， EJS, Stylus和Markdown工具是默认安装，如果需要，你可以稍后卸载它们。

    package.json
    {
      "name": "hexo-site",
      "version": "0.0.0",
      "private": true,
      "hexo": {
    "version": ""
      },
      "dependencies": {
    "hexo": "^3.0.0",
    "hexo-generator-archive": "^0.1.0",
    "hexo-generator-category": "^0.1.0",
    "hexo-generator-index": "^0.1.0",
    "hexo-generator-tag": "^0.1.0",
    "hexo-renderer-ejs": "^0.1.0",
    "hexo-renderer-stylus": "^0.2.0",
    "hexo-renderer-marked": "^0.2.4",
    "hexo-server": "^0.1.2"
      }
    }

### 1.2.3 scaffolds文件夹 ###

当你创建一篇新帖时，Hexo会以scaffolds文件夹的内容为基础，创建该帖。

### 1.2.4 source文件夹 ###

这个文件夹存放着你网站的内容。Hexo会忽略名字前缀带‘_’的隐藏文件、普通文件或者文件夹，除了‘_posts文件夹’之外。富文本文件将被处理，并放在public文件夹中，同时，其他文件将被简单的复制。

### 1.2.5 themes ###

themes文件夹放着各类主题。Hexo使用主题并结合网站内容生产静态网站。

## 1.3 Configuration ##

### 1.3.1 Site ###

你可以在_config.yml中修改网站设置

    Setting		|Description
	-----------	|-------------------------------
    title		|The title of your website
    subtitle	|The subtitle of your website
    description	|The description of your website
    author		|Your name
    language	|The language of your website. Use a 2-lettter ISO-639-1 code. Default is en.
    timezone	|The timezone of your website. Hexo uses the setting on your computer by default. You can find the list of available timezones here. Some examples are America/New_York, Japan, and UTC.

### 1.3.2 URL ###

    Setting				Description									Default
    url					The URL of your website	
    root				The root directory of your website	
    permalink			The permalink format of articles			:year/:month/:day/:title/
    permalink_default	Default values of each segment in permalink	

> **网站在子文件夹**
> 如果你的网站放在子文件夹（比如http://example.org/blog）设置url为http://example.org/blog，设置root为/blog/.

### 1.3.3 目录 ###

    Setting			Description												Default
    source_dir		Source folder. Where your content is stored				source
    public_dir		Public folder. Where the static site will be generated	public
    tag_dir			Tag directory											tags
    archive_dir		Archive directory										archives
    category_dir	Category directory	categories
    code_dir		Include code directory	downloads/code
    i18n_dir		i18n directory											:lang
    skip_render		Paths not to be rendered. You can use glob expressions for path matching	

### 1.3.4 写作 ###

    Setting				Description								Default
    new_post_name		The filename format for new posts		:title.md
    default_layout		Default layout							post
    titlecase			Transform titles into title case?		false
    external_link		Open external links in new tab?			true
    filename_case		Transform filenames to 1 lower case; 2 upper case	0
    render_drafts		Display drafts?						false
    post_asset_folder	Enable the Asset Folder?	false
    relative_link		Make links relative to the root folder?	false
    future				Display future posts?					true
    highlight			Code block settings	

### 1.3.5 分类和标签 ###

    Setting				Description			Default
    default_category	Default category	uncategorized
    category_map		Category 			slugs	
    tag_map				Tag slugs

### 1.3.6 日期/时间 格式化 ###

    Setting				Description			Default
    date_format			Date format			MMM D YYYY
    time_format			Time format			H:mm:ss

### 1.3.7 页码 ###

    Setting			Description				Default
    per_page		The amount of the posts displayed on a single page. 0 disables pagination		10
    pagination_dir	Pagination directory	page

### 1.3.8 扩展 ###

    Setting		Description
    theme		Theme name. false disables theming
    deploy		Deployment setting

## 1.4 命令 ##
### 1.4.1 init ###

    $ hexo init [folder]

初始化一个网站，如果没有提供的folder，Hexo将设置为当前网站

### 1.4.2 new ###

	$ hexo new [layout] <title>

- 创建一篇新文章，如果没有布局layout提供，Hexo将使用默认的布局（_config.yml中的default_layout）。
- 如果题目包含空格，需要对题目使用引号‘’

### 1.4.3 generate ###

    $ hexo generate

生成静态文件。

    Option			Description
    -d, --deploy	Deploy after generation finishes
    -w, --watch		Watch file changes

### 1.4.4 publish ###

	$ hexo publish [layout] <filename>

发布为一篇草稿。

### 1.4.5 server ###

	$ hexo server

启动本地服务器。默认访问地址http://localhost:4000/

    Option			Description
    -p, --port		Override default port
    -s, --static	Only serve static files
    -l, --log		Enable logger. Override logger format.

### 1.4.6 deploy ###

	$ hexo deploy

部署你的网站

	Option	Description
	-g, --generate	Generate before deployment

### 1.4.7 render ###

	$ hexo render <file1> [file2] ...

	Option	Description
	-o, --output	Output destination

### 1.4.8 migrate ###

	$ hexo migrate <type>

从其他博客系统中迁移内容。

### 1.4.9 clean ###

	$ hexo clean

清除缓存文件（如db.json）和生成的文件（public）

### 1.4.10 list ###

	$ hexo list <type>
列出所有的线路。

### 1.4.11 version ###

	$ hexo version

显示版本信息

### 1.4.12 Options ###
#### Safe mode ####

	$ hexo --safe

禁用加载插件和脚本。当你安装一个新的插件之后，如果你遇到问题，可以使用这种模式。

#### Debug mode ####

	$ hexo --debug

在终端显示日志详细信息，并输出至debug.log。在使用Hexo时，如果你遇到任何问题，可以尝试使用这种模式。

#### Silent mode ####

	$ hexo --silent
输出至终端。

#### Customize config file path ####

	$ hexo --config custom.yml

使用定制的配置文件（代替_config.yml）

#### Display drafts ####

	$ hexo --draft

显示草稿（存储于 source/_drafts文件夹）

#### Customize CWD ####

	$ hexo --cwd /path

定制当前工作路径

## 1.5 迁移 ##
### 1.5.1 RSS ###
首先，安装hexo-migrator-rss插件

	$ npm install hexo-migrator-rss --save

一旦插件安装完成，运行下面命令，迁移所有RSS的帖子。‘source’可以是一个文件路径或者一个URL

	$ hexo migrate rss <source>

### 1.5.2 Jekyll ###

移动在Jekyll中_posts文件夹中所有的文件到hexo中source/_posts文件夹中
修改_config.yml中new_post_name的属性为：


    new_post_name: :year-:month-:day-:title.md

### 1.5.3 Octopress ###

移动在Octopress下source/_posts文件夹中的所有文件到source/_posts文件夹中
修改_config.yml中new_post_name的属性为：

    new_post_name: :year-:month-:day-:title.md

### 1.5.4 WordPress ###

首先，安装hexo-migrator-wordpress插件，

    $ npm install hexo-migrator-wordpress --save

在WordPress 控制面板中，选择'工具'>'导出'>'WordPress'，导出你的WordPress 网站（参考WordPress 支持界面获得更多的帮助）
运行：

    $ hexo migrate wordpress <source>

在这里，source目录是WordPress导出文件的路径或者URL。

### 1.5.5 Joomla ###

首先，安装hexo-migrator-joomla插件

    $ npm install hexo-migrator-joomla --save

使用J2XML组件导出你的Joomla文章，运行：

    $ hexo migrate joomla <source>

在这里，source目录是WordPress导出文件的路径或者URL。

# 2 基本使用 #

## 2.1 写作（Writing） ##

创建一篇新帖或者一个新页面，可以运行如下命令：

    $ hexo new [layout] <title>

post是默认的布局，但你可以支持你自己的布局，你可以通过修改_config.yml配置文件中的default_layout属性来更改你的默认布局。

### 2.1.1 布局layout ###

Hexo有三个默认的布局：post, page and draft，文件会根据这三种布局分别创建自己并保存在不同的路径下。最新的文章保存在source/_posts文件夹中

    Layout	Path
    post	source/_posts
    page	source
    draft	source/_drafts

> **不要处理我的文章**
> 
> 如果你不想让你的文章被处理，你可以将布局属性layout：false 放在在你文件md的最上方，即文件最上方“-----”分隔的区域。

### 2.1.2 文件名（Filename） ###

默认情况下，Hexo使用帖子的标题作为文件名。你可以在_config.yml中编辑new_post_name属性来改变默认的文件名。例如：:year-:month-:day-:title.md可以为文件名添加当前时间的前缀，你可以使用下面的placeholders：

    Placeholder	Description
    :title	Post title (lower case, with spaces replaced by hyphens)
    :year	Created year, e.g. 2015
    :month	Created month (leading zeros), e.g. 04
    :i_month	Created month (no leading zeros), e.g. 4
    :day	Created day (leading zeros), e.g. 07
    :i_day	Created day (no leading zeros), e.g. 7

### 2.1.3 草稿Drafts ###

之前，我们提到使用特别的布局：draft。文章使用这个布局初始化之后，被保存到source/_drafts文件夹中。你可以及使用publis命令将草稿移动到source/_posts文件夹中，如下所示：

    $ hexo publish [layout] <title>

草稿默认不会显示。当运行hexo或者在_config.yml文件中启用该设置项render_drafts时，你可以添加--draft选项，来提交草稿。

### 2.1.4 Scaffolds文件夹 ###

当创建帖子时，Hexo将依据Scaffolds文件夹中相对应的文件构建文章，例如：

    $ hexo new photo "My Gallery"

当你运行这个命令时，Hexo讲试图在scaffolds文件夹中寻找photo.md文件，并依据此文件构建帖子。下面的placeholders占位符可以用在Scaffolds上

    Placeholder	Description
    layout	Layout
    title	Title
    date	File created date

## 2.2 给一篇文章加多个tags ##

可以使用如下方式：

	tags：[a,b,c]或者tags：
