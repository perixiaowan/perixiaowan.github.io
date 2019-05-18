---
title: Flask中session的SECRET_KEY值
date: 2018-05-29 17:31:05
author: liuxiaowan
tags: [Flask]
---


#### 在flask项目中，Session, Cookies以及一些第三方扩展都会用到SECRET_KEY值，这是一个比较重要的配置值。

如果没有配置SECRET_KEY值，会出现如下错误：

```
RuntimeError: The session is unavailable because no secret key was set.  Set the secret_key on the application to something unique and secret.
```

## 解决方法

#### 在flask项目开头加入设置SECRET_KEY。

```

app = Flask(__name__)
app.config['SECRET_KEY'] = '123456'
# or
app.secret_key = '123456'
# or
app.config.update(SECRET_KEY='123456')
```
#### 如果需要设置一个随机的`SECRET_KEY`值。我们可以使用os模块的`urandom`函数来获得随机值。

```
import os
os.urandom(20)
Out[3]: b'\xa0\xdf\xe6[\xb3\xa5g\xe6t\x96\xac:\x03\xd4uvt<\xef\xf7'
```
