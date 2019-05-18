---
title: Andrew-机器学习（第四周作业）
subtitle: Who is able to be egotistical needs to be strong too.
date: 2017-01-31 16:44:49
tags: [MachineLearning]
---

# Summary

This chapter covering neural networks. Neural networks is a model inspired by how the brain works. It is widely used today in many applications: when your phone interprets and understand your voice commands, it is likely that a neural network is helping to understand your speech; when you cash a check, the machines that automatically read the digits also use neural networks.

<!--more-->

## 题目

[第三周作业的题目：点击查看](http://perixiaowan.github.io/2017/01/31/Andrew-ML-4ndHomework/ex3.pdf)

## 1.Regularized Logistic Regression
- 实现的文件名： `lrCostFunction.m`
- 代码如下：

```
function [J, grad] = lrCostFunction(theta, X, y, lambda)
    % Initialize some useful valuesWelcome to week 4! This week, we are covering neural networks. Neural networks is a model inspired by how the brain works. It is widely used today in many applications: when your phone interprets and understand your voice commands, it is likely that a neural network is helping to understand your speech; when you cash a check, the machines that automatically read the digits also use neural networks.
    m = length(y); % number of training examples
    % You need to return the following variables correctly 
    J = 0;
    grad = zeros(size(theta));
    H = sigmoid(X * theta);
    theta(1) = 0;
    J = 1/m \* (-y' \* log(H)-(1-y)' * log(1-H)) + lambda/(2 \* m) \* theta' \* theta;
    grad = 1/m * X' * (H-y) + lambda/m * theta;
end 
```

## 2.One-vs-All Classifier Training


```
function [all_theta] = oneVsAll(X, y, num_labels, lambda)

    % Some useful variables
    m = size(X, 1);
    n = size(X, 2);
    
    % You need to return the following variables correctly 
    all_theta = zeros(num_labels, n + 1);
    
    % Add ones to the X data matrix
    X = [ones(m, 1) X];

    options = optimset('GradObj', 'on', 'MaxIter', 50);
    initial_theta = zeros(n + 1, 1);
    for i = 1:num_labels
    	
    	[theta, cost] = fmincg(@(t)(lrCostFunction(t, X, (y == i), lambda)),initial_theta,options);
    	all_theta(i,:) = theta';
    end

end
    
```


## 3.One-vs-All Classifier Prediction


```
function p = predictOneVsAll(all_theta, X)
    m = size(X, 1);
    num_labels = size(all_theta, 1);
    
    % You need to return the following variables correctly 
    p = zeros(size(X, 1), 1);

    % Add ones to the X data matrix
    X = [ones(m, 1) X];
    
    [max_x,index_x]= max(sigmoid(X*all_theta'),[],2);

    p=index_x;
end
```


## 4.Neural Network Prediction Function



```
function p = predict(Theta1, Theta2, X)
    % Useful values
    m = size(X, 1);
    num_labels = size(Theta2, 1);
    
    % You need to return the following variables correctly 
    p = zeros(size(X, 1), 1);
    
    X = [ones(m, 1) X];

    z2 = X * Theta1' ;
    a2 = sigmoid(z2);

    a2 = [ones(size(a2),1) a2];
    z3 = a2 * Theta2';
    y = sigmoid(z3);

    [max_x,index_x]= max(y,[],2);

    p=index_x;
end
```

