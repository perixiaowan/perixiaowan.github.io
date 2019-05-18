---
title: TensorFlowMNIST-1
date: 2017-01-09 10:43:28
tags: [MachineLearning]
---


==定义：== softmax模型可以用来给不同的对象分配概率。

![对于给定的输入图片 x 它代表的是数字 i 的证据](http://wiki.jikexueyuan.com/project/tensorflow-zh/images/mnist1.png)

W代表权重， b代表数字 i 类的偏置量，j 代表给定图片 x 的像素索引用于像素求和。

![将上述证据转换成概率y](http://wiki.jikexueyuan.com/project/tensorflow-zh/images/mnist4.png)

将上述证据转换成概率y。

<!--more-->

# softmax回归(softmax regression)
[softmax回归](http://wiki.jikexueyuan.com/project/tensorflow-zh/tutorials/mnist_beginners.html)

### 回归模型图示化：
![image](http://wiki.jikexueyuan.com/project/tensorflow-zh/images/softmax-regression-scalargraph.png)

---

# MNIST
一个入门级的计算机视觉数据集，它包含各种手写数字图片

[Visualizing MNIST: An Exploration of Dimensionality Reduction](http://colah.github.io/posts/2014-10-Visualizing-MNIST/)

==mnist==是一个轻量级的类。它以==Numpy数组==的形式存储着训练、校验和测试数据集。同时提供了一个函数，用于在迭代中获得==minibatch==。

---

# 示例目标
将训练一个机器学习模型用于预测图片里面的数字

# 实现回归模型

## NumPy函数
> 把类似矩阵乘法这样的复杂运算使用其他外部语言实现

# code

## 实现回归模型
[input_data代码地址](https://raw.githubusercontent.com/tensorflow/tensorflow/master/tensorflow/examples/tutorials/mnist/input_data.py)

```
import input_data  

import tensorflow as tf

mnist = input_data.read_data_sets("MNIST_data/", one_hot=True)

x = tf.placeholder(tf.float32, [None, 784])
W = tf.Variable(tf.zeros([784,10]))
b = tf.Variable(tf.zeros([10]))
y = tf.nn.softmax(tf.matmul(x,W) + b)

```

## 训练模型

训练模型，首先需要定义一个指标来评估这个模型是好的。在机器学习，通常定义指标来表示一个模型是坏的，这个指标称为成本（cost）或损失（loss），然后尽量最小化这个指标。然而，这两种方式是相同的。
### 交叉熵定义（cross-entropy）
一个非常常见的，非常漂亮的成本函数。它产生于信息论里面的信息压缩编码技术。

![交叉熵定义](http://wiki.jikexueyuan.com/project/tensorflow-zh/images/mnist10.png)

[交叉熵参考资料](http://colah.github.io/posts/2015-09-Visual-Information/)

```
"""为了计算交叉熵，需要添加一个新的占位符用于输入正确值"""
y_ = tf.placeholder("float", [None,10])

"""交叉熵计算"""
cross_entropy = -tf.reduce_sum(y_*tf.log(y))

"""TensorFlow用梯度下降算法以0.01的学习速率最小化交叉熵"""
train_step = tf.train.GradientDescentOptimizer(0.01).minimize(cross_entropy)

"""在运行计算之前，我们需要添加一个操作来初始化我们创建的变量"""
init = tf.global_variables_initializer()

"""可以在一个Session里面启动我们的模型，并且初始化变量"""
sess = tf.Session()
sess.run(init)

"""开始训练模型，让模型循环训练1000次！"""
for i in range(1000):
  batch_xs, batch_ys = mnist.train.next_batch(100)
  sess.run(train_step, feed_dict={x: batch_xs, y_: batch_ys})

```

[反向传播算法(backpropagation algorithm)](http://colah.github.io/posts/2015-08-Backprop/)

使用一小部分的随机数据来进行训练被称为**随机训练（stochastic training）**

每一次训练我们可以使用不同的数据子集，这样做既可以减少计算开销，又可以最大化地学习到数据集的总体特性。

## 评估模型
### tf.argmax函数
能给出某个tensor对象在某一维上的其数据最大值所在的索引值


```

"""
tf.argmax 它能给出某个tensor对象在某一维上的其数据最大值所在的索引值。
用 tf.equal 来检测预测是否真实标签匹配，并生成一组布尔值
"""
correct_prediction = tf.equal(tf.argmax(y,1), tf.argmax(y_,1))

"""可以把布尔值转换成浮点数，然后取平均值。"""
accuracy = tf.reduce_mean(tf.cast(correct_prediction, "float"))

"""计算所学习到的模型在测试数据集上面的正确率。"""
print(sess.run(accuracy, feed_dict={x: mnist.test.images, y_: mnist.test.labels}))

```
## 结果分析

约 91% 准确率，相对较低，最好的模型甚至可以获得超过99.7％的准确率！

[使用各种方法后的准确率比较表](http://rodrigob.github.io/are_we_there_yet/build/classification_datasets_results.html)