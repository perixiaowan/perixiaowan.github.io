---
title: Andrew-机器学习（第二周作业）
subtitle: All is well that ends well.
date: 2017-01-16 15:21:42
tags: [MachineLearning,原创]
---

# Summary

This week will be covering logistic regression. Logistic regression is a method for classifying data into discrete outcomes. For example, we might use logistic regression to classify an email as spam or not spam. In this module, introducing the notion of classification, the cost function for logistic regression, and the application of logistic regression to multi-class classification.

It also covering regularization. Machine learning models need to generalize well to new examples that the model has not seen in practice. It will introduce regularization, which helps prevent models from overfitting the training data.

<!--more-->

## 题目

[第二周作业的题目：点击查看](http://perixiaowan.github.io/2017/01/16/Andrew-ML-2ndHomework/ex1.pdf)

## 1）Warm up exercise


```
A = eye(5);
```

## 2）Compute cost for one variable

### 公式


```math
E = 1/2m*sum((h(x)-y)^2)
```

### coding
- plotData.m


```
function plotData(x, y)
figure; % open a new figure window
plot(x, y, 'rx', 'MarkerSize', 10);
ylabel('Profit in $10,000s');
xlabel('Population of City in 10,000s');
end
```


- computeCost.m
```
function J = computeCost(X, y, theta)
%COMPUTECOST Compute cost for linear regression
%   J = COMPUTECOST(X, y, theta) computes the cost of using theta as the
%   parameter for linear regression to fit the data points in X and y

% Initialize some useful values
m = length(y); % number of training examples

% You need to return the following variables correctly 
J = 0;
% ====================== YOUR CODE HERE ======================
% Instructions: Compute the cost of a particular choice of theta
%               You should set J to the cost.
H = X * theta;
J = (1/(2*m)) * sum((H-y).^2);
% =========================================================================
end

```
### result

![](http://i.imgur.com/qxdLT5t.jpg)

## 3）Gradient descent for one variable

### formula


```math
h(x) = theta' * x = theta_0+theta_1*x_1

theta_j = theta_j - alpha*1/m*sum((h(x_i)-y)*x_j)
```

### coding


```
function [theta, J_history] = gradientDescent(X, y, theta, alpha, num_iters)
%GRADIENTDESCENT Performs gradient descent to learn theta
%   theta = GRADIENTDESCENT(X, y, theta, alpha, num_iters) updates theta by 
%   taking num_iters gradient steps with learning rate alpha

% Initialize some useful values
m = length(y); % number of training examples
J_history = zeros(num_iters, 1);

for iter = 1:num_iters
H = X * theta;
theta = theta - alpha * (1/m) * (X' * (H-y));

% Save the cost J in every iteration    
J_history(iter) = computeCost(X, y, theta);
end
end

```
### result

![](http://i.imgur.com/gHq6awK.jpg)
![](http://i.imgur.com/pR7Uai2.jpg)

## 4) Feature normalization(附加题)

### formula


```math
X_norm = (X - mu)/sigma
```
### coding


```
function [X_norm, mu, sigma] = featureNormalize(X)
X_norm = X;
mu = zeros(1, size(X, 2));
sigma = zeros(1, size(X, 2));
mu = mean(X);
sigma = std(X);
X_norm = (X - mu)./sigma;
end
```

## 5) Compute cost and Gradient descent for multiple variables(附加题)

### formula

```math
J(theta)=1/2m*(X*theta-y)'*(X*theta-y)
```

### coding

```
function [theta, J_history] = gradientDescentMulti(X, y, theta, alpha, num_iters)
% Initialize some useful values
m = length(y); % number of training examples
J_history = zeros(num_iters, 1);

for iter = 1:num_iters
theta = theta - X'*(X*theta-y)/m*alpha;
end
% Save the cost J in every iteration    
J_history(iter) = computeCostMulti(X, y, theta);
end
```

### result

## 6) Normal equations(附加题)

### formula


```math
theta = pinv(X'X)*X'*y
```
### coding

```
function [theta] = normalEqn(X, y)
theta = zeros(size(X, 2), 1);
theta = pinv((X' * X))*X'*y;
end
```
