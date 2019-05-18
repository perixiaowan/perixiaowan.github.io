---
title: Andrew-机器学习（第三周作业）
subtitle: All is well that ends well.
date: 2017-01-16 18:31:47
tags: [MachineLearning,原创]
---

# Summary

This week are covering linear regression with multiple variables. It show us how linear regression can be extended to accommodate multiple input features. It also discuss best practices for implementing linear regression.


<!--more-->

## 题目

[第三周作业的题目：点击查看](http://perixiaowan.github.io/2017/01/16/Andrew-ML-3ndHomework/ex2.pdf)

## plotData.m

- coding 
```
function plotData(X, y)
% Create New Figure
figure; hold on;

% ====================== YOUR CODE HERE ======================
% Instructions: Plot the positive and negative examples on a
%               2D plot, using the option 'k+' for the positive
%               examples and 'ko' for the negative examples.
%
pos = find(y == 1); neg = find(y == 0);
plot(X(pos,1),X(pos,2),'k+','LineWidth',2,'MarkerSize',7);
plot(X(neg,1),X(neg,2),'ko','MarkerFaceColor','y','MarkerSize',7);
end 
```

## 1) Sigmmoid function

### formula


```math
h(x) = g(theta'*x)

g(z) = 1/(1+exp(-z)
```
### coding 


```
function g = sigmoid(z)
%SIGMOID Compute sigmoid function
%   g = SIGMOID(z) computes the sigmoid of z.
g = zeros(size(z));

% Instructions: Compute the sigmoid of each value of z (z can be a matrix,
%  vector or scalar).
g = 1./(1+exp(-z));
end

```

## 2) Compute cost and Gradient for logistic regression

### formula 

```math
J(theta) = 1/m* sum[-y*log(h(x))-(1-y)log(1-h(x))]

Grad_j = 1/m*sum((h(x)-y)*x_j)
```

### coding


```
function [J, grad] = costFunction(theta, X, y)
% Initialize some useful values
m = length(y); % number of training examples
% You need to return the following variables correctly 
J = 0;
grad = zeros(size(theta));
% ====================== YOUR CODE HERE ======================
z = X * theta;
g = sigmoid(z);
J1 = y' * log(g) ;
J2 = (1-y)' * log(1-g);
J = 1/m * (-J1-J2);
grad = 1/m * ((g-y)' * X);
end
```

### result

![](http://i.imgur.com/z92nqJ1.jpg)

## 3) Predict function


```
function p = predict(theta, X)
m = size(X, 1); % Number of training examples
% You need to return the following variables correctly
p = zeros(m, 1);

% ====================== YOUR CODE HERE ======================
% Instructions: Complete the following code to make predictions using
%               your learned logistic regression parameters. 
%               You should set p to a vector of 0's and 1's
z = X * theta;
g = sigmoid(z);
y1 = find(g >=0.5);
y0 = find(g < 0.5);
p(y1) = 1;
p(y0) = 0;
end

```

## 4) Compute cost and Gradient for regularized LR

### fomula

```math
J(theta) = 1/m* sum[-y*log(h(x))-(1-y)log(1-h(x))] + lambda/2m * sum(theta_j^2)

Grad_0 = 1/m*sum((h(x)-y)*x_j) ; for :j = 0

Grad_j = 1/m*sum((h(x)-y)*x_j)+lambda/m*theta_j ; for :j >= 1
```

### coding


```
function [J, grad] = costFunctionReg(theta, X, y, lambda)
% Initialize some useful values
m = length(y); % number of training examples
% You need to return the following variables correctly 
J = 0;
grad = zeros(size(theta));

z = X * theta;
% ====================== YOUR CODE HERE ======================
g = sigmoid(z);
J1 = y' * log(g) ;
J2 = (1-y)' * log(1-g);
theta(1) = 0;

J = 1/m * (-J1-J2) + lambda/(2*m) * sum(theta.^2);

% grad(1) = 1/m * ((g-y)' * X(:,1));
grad = 1/m * ((g-y)' * X)' + lambda/m * theta;
end 
```
###  result

![](http://i.imgur.com/8ojQlIK.jpg)
