---
title: Flask笔记（一）
date: 2018-05-24 17:31:05
author: liuxiaowan
tags: [Flask]
---

# 1 配置与惯例

按照惯例，模板和静态文件分别存储在应用 Python 源代码树下的子目录 'templates '和 'static' 里。

# 2 安装

Flask 依赖两个外部库：'Werkzeug' 和 'Jinja2' 。

- Werkzeug 是一个 WSGI（在 Web 应用和多种服务器之间的标准 Python 接口) 工具集。
- Jinja2 负责渲染模板。

## 2.1 virtualenv

- virtualenv 为每个不同项目提供一份 Python 安装。

### 2.1.1 virtualenv安装

- Mac OS X 或 Linux 下

      $ sudo easy_install virtualenv
      # $ sudo pip install virtualenv

- Ubuntu

    $ sudo apt-get install python-virtualenv

### 2.1.2 创建自己的环境

```
$ mkdir myproject
$ cd myproject
$ virtualenv venv
New python executable in venv/bin/python
Installing distribute............done.
```

### 2.1.3 激活相应的环境

- 在 OS X 和 Linux 上

      $ source venv/bin/activate

- Windows上：

      $ venv\scripts\activate

### 2.1.4 激活 virtualenv 中的 Flask

      $ pip install Flask

### 2.1.5 最新版本的 Flask

在一个全新的 virtualenv 中 git checkout 并运行在开发模式下:

```
$ git clone http://github.com/mitsuhiko/flask.git
Initialized empty Git repository in ~/dev/flask/.git/
$ cd flask
$ virtualenv venv --distribute
New python executable in venv/bin/python
Installing distribute............done.
$ . venv/bin/activate
$ python setup.py develop
...
Finished processing dependencies for Flask
```

执行 git pull origin 来升级到最新版本。

# 3 基本语法

- 用` route() `装饰器告诉 Flask 什么样的URL 能触发我们的函数
- `if __name__ == '__main__'`: 确保服务器只会在该脚本被 Python 解释器直接执行的时候才会运行，而不是作为模块导入的时候。
- 如果你禁用了 debug 或信任你所在网络的用户，你可以简单修改调用 `run() `的方法使你的服务器公开可用

      app.run(host='0.0.0.0')

## 3.1 变量规则

#### 给 URL 添加变量部分，可把这些特殊的字段标记为` <variable_name> `

```
@app.route('/user/<username>')
def show_user_profile(username):
    # show the user profile for that user
    return 'User %s' % username
```

#### 可以用` <converter:variable_name>` 指定一个可选的转换器

```
@app.route('/post/<int:post_id>')
def show_post(post_id):
    # show the post with the given id, the id is an integer
    return 'Post %d' % post_id
```

#### 转换器有下面几种:

类型|描述
----|----
int|接受整数
float	|同 int ，但是接受浮点数
path	|和默认的相似，但也接受斜线


## 3.2 唯一 URL / 重定向行为

### 第一种情况

```
@app.route('/projects/')
def projects():
    return 'The project page'
```

指向 projects 的规范 URL 尾端有一个斜线。像在文件系统中的文件夹。访问一个结尾不带斜线的 URL 会被 Flask 重定向到带斜线的规范 URL 去。

### 第二种情况

```
@app.route('/about')
def about():
    return 'The about page'
```

URL 结尾不带斜线，类似 UNIX-like 系统下的文件的路径名。访问结尾带斜线的 URL 会产生一个` 404 “Not Found”` 错误。

#### 这两种情况使得在遗忘尾斜线时，允许关联的 URL 接任工作，与 Apache 和其它的服务器的行为并无二异。此外，也保证了 URL 的唯一，有助于避免搜索引擎索引同一个页面两次。

## 3.3 构造 URL

可以用 `url_for()` 来给指定的函数构造 URL。它接受函数名作为第一个参数，也接受对应 URL 规则的变量部分的命名参数。未知变量部分会添加到 URL 末尾作为查询参数。

```
from flask import Flask, url_for
app = Flask(__name__)

@app.route('/')
def index(): pass


@app.route('/login')
def login(): pass

@app.route('/user/<username>')
def profile(username): pass

with app.test_request_context():
    print url_for('index')
    print url_for('login')
    print url_for('login', next='/')
    print url_for('profile', username='John Doe')

#  输出结果
/
/login
/login?next=/
/user/John%20Doe
```

### 为什么你要构建 URL 而非在模板中硬编码？

- 反向构建通常比硬编码的描述性更好。更重要的是，它允许你一次性修改 URL， 而不是到处边找边改。
- URL 构建会转义特殊字符和 Unicode 数据，免去你很多麻烦。
- 如果你的应用不位于 URL 的根路径（比如，在 /myapplication 下，而不是 / ）， url_for() 会妥善处理这个问题。

# 4 HTTP 方法

HTTP （与 Web 应用会话的协议）有许多不同的访问 URL 方法。默认情况下，路由只回应 GET 请求，但是通过 route() 装饰器传递 methods 参数可以改变这个行为

```
@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        do_the_login()
    else:
        show_the_login_form()
```
# 5 静态文件

 只要在你的包中或是模块的所在目录中创建一个名为 static 的文件夹，在应用中使用 /static 即可访问。

    url_for('static', filename='style.css')

# 6 模板渲染

##  Jinja2 模板引擎

可以使用 `render_template()` 方法来渲染模板.将模板名和你想作为关键字的参数传入模板的变量

```
from flask import render_template

@app.route('/hello/')
@app.route('/hello/<name>')
def hello(name=None):
    return render_template('hello.html', name=name)
```

### 情况 1: 模块:

```
/application.py
/templates
    /hello.html

```

### 情况 2: 包:

```
/application
    /__init__.py
    /templates
        /hello.html
```

## 6.2 模板继承

- 模板继承能使特定元素 （比如页眉、导航栏和页脚）可以出现在所有的页面。
- 在模板里，你也可以访问 request 、 session 和 g [1] 对象， 以及 get_flashed_messages() 函数。
- 在 0.5 版更改: 自动转义不再在所有模板中启用。下列扩展名的模板会触发自动转义： .html 、 .htm 、.xml 、 .xhtml 。从字符串加载的模板会禁用自动转义。

# 7 环境局部变量

当 Flask 开始它内部的请求处理时，它认定当前线程是活动的环境，并绑定当前的应用和 WSGI 环境到那个环境上（线程）。

## 7.1 单元测试

最简单的解决方案是：用 test_request_context() 环境管理器。结合 with 声明，绑定一个测试请求，这样你才能与之交互。

```
from flask import request

with app.test_request_context('/hello', method='POST'):
    # now you can do something with the request until the
    # end of the with block, such as basic assertions:
    assert request.path == '/hello'
    assert request.method == 'POST'

```
## 7.2 传递整个 WSGI 环境给 request_context() 方法

```
from flask import request

with app.request_context(environ):
    assert request.method == 'POST'
```

# 8 请求对象

可以通过 args 属性来访问 URL 中提交的参数 （ ?key=value ）

    searchword = request.args.get('q', '')

推荐用 get 来访问 URL 参数或捕获 KeyError ，因为用户可能会修改 URL，向他们展现一个 400 bad request 页面会影响用户体验。

# 9 文件上传

## import包

    from werkzeug.utils import secure_filename

## 要点

- 需要在 HTML 表单中设置 enctype="multipart/form-data" 属性，不然浏览器根本不会发送文件。
- 已上传的文件存储在内存或是文件系统中一个临时的位置，可以通过请求对象的 files 属性访问。
- 要把文件按客户端提供的文件名存储在服务器上，需把它传递给 Werkzeug 提供的 secure_filename() 函数

```
@app.route('/upload', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
        f = request.files['the_file']
        f.save('/var/www/uploads/' + secure_filename(f.filename))
```

# 10 上传进度条

#  调试模式

有两种途径来启用调试模式。两种方法的效果完全相同。

## 4.1 直接在应用对象上设置

      app.debug = True
      app.run()

## 4.2 作为 run 方法的一个参数传入

      app.run(debug=True)
