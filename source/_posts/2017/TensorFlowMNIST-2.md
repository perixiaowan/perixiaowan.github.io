---
title: TensorFlowMNIST-2
date: 2017-01-09 10:59:20
tags: 
  - TensorFlow
---

# 1. TensorFlow

一个非常强大的用来做大规模数值计算的库。其所擅长的任务之一就是实现以及训练深度神经网络。

<!--more-->

# 2 加载MNIST数据集

```
import input_data
mnist = input_data.read_data_sets('MNIST_data', one_hot=True)
```

# 3 启动一个TensorFlow的session
Tensorflow依赖于一个高效的C++后端来进行计算。与后端的这个连接叫做session。一般，使用TensorFlow程序的流程是先创建一个图，然后在session中启动它。

- 运行TensorFlow的InteractiveSession 
    - 能让你在运行图的时候，插入一些计算图

```
import tensorflow as tf
sess = tf.InteractiveSession()
```
# 4 构建Softmax 回归模型 

### 占位符

```
x = tf.placeholder("float", shape=[None, 784])
y_ = tf.placeholder("float", shape=[None, 10])
```
### 变量

```
W = tf.Variable(tf.zeros([784,10]))
b = tf.Variable(tf.zeros([10]))
```
变量需要通过seesion初始化后，才能在session中使用

```
sess.run(tf.global_variables_initializer())
```

### 类别预测与损失函数 
**类别预测**
```
y = tf.nn.softmax(tf.matmul(x,W) + b)
```
**损失函数**


```
cross_entropy = -tf.reduce_sum(y_*tf.log(y))
```
###  训练模型 

用最速下降法让交叉熵下降，步长为0.01.

```
train_step = tf.train.GradientDescentOptimizer(0.01).minimize(cross_entropy)
```
整个模型的训练可以通过反复地运行train_step来完成。
```
for i in range(1000):
  batch = mnist.train.next_batch(50)
  train_step.run(feed_dict={x: batch[0], y_: batch[1]})
```
### 评估模型


```
correct_prediction = tf.equal(tf.argmax(y,1), tf.argmax(y_,1))
accuracy = tf.reduce_mean(tf.cast(correct_prediction, "float"))
print(accuracy.eval(feed_dict={x: mnist.test.images, y_: mnist.test.labels}))
```
# 构建一个多层卷积网络（卷积神经网络）
## 权重初始化 

```
def weight_variable(shape):
  initial = tf.truncated_normal(shape, stddev=0.1)
  return tf.Variable(initial)

def bias_variable(shape):
  initial = tf.constant(0.1, shape=shape)
  return tf.Variable(initial)
```

## 卷积和池化 

```
def conv2d(x, W):
  return tf.nn.conv2d(x, W, strides=[1, 1, 1, 1], padding='SAME')

def max_pool_2x2(x):
  return tf.nn.max_pool(x, ksize=[1, 2, 2, 1],
                        strides=[1, 2, 2, 1], padding='SAME')
```
### 第一层卷积 

```
W_conv1 = weight_variable([5, 5, 1, 32])
b_conv1 = bias_variable([32])
//x变成一个4d向量，其第2、第3维对应图片的宽、高，最后一维代表图片的颜色通道
x_image = tf.reshape(x, [-1,28,28,1])

h_conv1 = tf.nn.relu(conv2d(x_image, W_conv1) + b_conv1)
h_pool1 = max_pool_2x2(h_conv1)
```
### 第二层卷积 

```
W_conv2 = weight_variable([5, 5, 32, 64])
b_conv2 = bias_variable([64])

h_conv2 = tf.nn.relu(conv2d(h_pool1, W_conv2) + b_conv2)
h_pool2 = max_pool_2x2(h_conv2)

```
### 密集连接层 


```
W_fc1 = weight_variable([7 * 7 * 64, 1024])
b_fc1 = bias_variable([1024])

h_pool2_flat = tf.reshape(h_pool2, [-1, 7*7*64])
h_fc1 = tf.nn.relu(tf.matmul(h_pool2_flat, W_fc1) + b_fc1)
```
### Dropout 用于减少过度拟合

用一个placeholder来代表一个神经元的输出在dropout中保持不变的概率。

TensorFlow的tf.nn.dropout操作除了可以屏蔽神经元的输出外，还会自动处理神经元输出值的scale。


```
keep_prob = tf.placeholder("float")
h_fc1_drop = tf.nn.dropout(h_fc1, keep_prob)
```
### 输出层

添加一个softmax层
```
W_fc2 = weight_variable([1024, 10])
b_fc2 = bias_variable([10])

y_conv=tf.nn.softmax(tf.matmul(h_fc1_drop, W_fc2) + b_fc2)
```
## 训练和评估模型 

```
cross_entropy = -tf.reduce_sum(y_*tf.log(y_conv))
train_step = tf.train.AdamOptimizer(1e-4).minimize(cross_entropy)
correct_prediction = tf.equal(tf.argmax(y_conv,1), tf.argmax(y_,1))
accuracy = tf.reduce_mean(tf.cast(correct_prediction, "float"))
sess.run(tf.global_variables_initializer())

for i in range(20000):
  batch = mnist.train.next_batch(50)
  if i%100 == 0:
    train_accuracy = accuracy.eval(feed_dict={
        x:batch[0], y_: batch[1], keep_prob: 1.0})
    print "step %d, training accuracy %g"%(i, train_accuracy)
  train_step.run(feed_dict={x: batch[0], y_: batch[1], keep_prob: 0.5})

print("test accuracy %g"%accuracy.eval(feed_dict={
    x: mnist.test.images, y_: mnist.test.labels, keep_prob: 1.0}))
```

结果：


```
step 18300, training accuracy 1
step 18400, training accuracy 1
step 18500, training accuracy 1
step 18600, training accuracy 1
step 18700, training accuracy 1
step 18800, training accuracy 1
step 18900, training accuracy 1
step 19000, training accuracy 0.98
step 19100, training accuracy 1
step 19200, training accuracy 1
step 19300, training accuracy 1
step 19400, training accuracy 1
step 19500, training accuracy 1
step 19600, training accuracy 1
step 19700, training accuracy 1
step 19800, training accuracy 1
step 19900, training accuracy 1
test accuracy 0.9927
```

以上代码，在最终测试集上的准确率大概是99.3%。