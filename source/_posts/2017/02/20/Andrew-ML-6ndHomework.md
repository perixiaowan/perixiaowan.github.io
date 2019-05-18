---
title: Andrew-机器学习（第六周作业）
date: 2017-02-20 09:05:55
tags: [MachineLearning]
---
# Summary

This chapter will be teaching us about systematically improving your learning algorithm. The videos for this week will teach you how to tell when a learning algorithm is doing poorly, and describe the 'best practices' for how to 'debug' your learning algorithm and go about improving its performance.

<!--more-->

# 0. 题目
[第六周作业的题目：点击查看](http://www.liuxiaowan.com/2017/02/20/Andrew-ML-6ndHomework/ex5.pdf)

# 1. Loading and Visualizing Data 

# 2. Regularized Linear Regression

```
theta = [1 ; 1];
J = linearRegCostFunction([ones(m, 1) X], y, theta, 1);

fprintf(['Cost at theta = [1 ; 1]: %f '...
         '\n(this value should be about 303.993192)\n'], J);

fprintf('Program paused. Press enter to continue.\n');
pause;
```

 

**任务：** Compute cost and gradient for regularized linear,fulfill `linearRegCostFunction.m`

## 2.1 regression cost formula
```math
J = \frac{1}{2m} *\sum_{i=1}^{m}((H_\theta(x^i)-y^{i})^2)+\lambda/(2m)*\sum_{j=1}^{n}(\theta(2:length_\theta)^2);
 
```

## 2.2 regression gradient formula

```math
grad = 1/m*\sum_{i=1}^{m}*((h_\theta(x^i)-y^i)*x^i)+\frac{\lambda}{m}\theta_j;

for j=0,\lambda=0;
```


## 2.3 cost coding
```
function [J, grad] = linearRegCostFunction(X, y, theta, lambda)
% your code here
H = X* theta; 
len_theta = length(theta); 
J = 1/(2*m)*sum((H-y).^2)+lambda/(2*m)*sum(theta(2:len_theta).^2);

grad = 1/m*(X'*(H-y))+ lambda/m * [0;theta(2:len_theta)];
%-end--%

grad = grad(:);	
end
```

## 2.4 Fitting linear regression

其中 `lambda = 0`

![linear regression](http://www.liuxiaowan.com/2017/02/20/Andrew-ML-6ndHomework/1.png)

# 3. Bias-variance

## 3.1 Learning curves for Polynomial Regression

>The data is non-linear, so this will not give a great fit. `lambda = 0`

    you should implement the learningCurve function.

## 3.2 Coding

```
function [error_train, error_val] = ...
    learningCurve(X, y, Xval, yval, lambda)
    
%   LEARNINGCURVE Generates the train and cross validation set errors needed to plot a learning curve

%   In this function, you will compute the train and test errors for dataset sizes from 1 up to m. In practice, when working with larger datasets, you might want to do this in larger intervals.
% Number of training examples
m = size(X, 1);
m_Xval = size(Xval,1);
% You need to return these values correctly
error_train = zeros(m, 1);
error_val   = zeros(m, 1);

% your code here 

	for i = 1:m
		X_train = X(1:i,:);
		y_train = y(1:i);
		[theta_curve] = trainLinearReg([ones(i, 1) X_train],y_train,lambda);
		
		[J, grad] = linearRegCostFunction([ones(i, 1) X_train],y_train,theta_curve,0);
		error_train(i) = J;
		[J, grad] = linearRegCostFunction([ones(m_Xval, 1) Xval],yval,theta_curve,0);
		error_val(i) = J;
	end
% code end
```

## 3.3 结果


![结果1](http://www.liuxiaowan.com/2017/02/20/Andrew-ML-6ndHomework/2.png)

![结果2](http://www.liuxiaowan.com/2017/02/20/Andrew-ML-6ndHomework/3.png)

# 4 Polynomial regression



## 4.1 Feature Mapping for Polynomial Regression 

    You should now complete `polyFeatures` to map each example into its powers

## 4.2 coding

```
function [X_poly] = polyFeatures(X, p)
%POLYFEATURES Maps X (1D vector) into the p-th power
%   [X_poly] = POLYFEATURES(X, p) takes a data matrix X (size m x 1) and
%   maps each example into its polynomial features where
%   X_poly(i, :) = [X(i) X(i).^2 X(i).^3 ...  X(i).^p];
%


% You need to return the following variables correctly.
X_poly = zeros(numel(X), p);

% ====================== YOUR CODE HERE ======================
% Instructions: Given a vector X, return a matrix X_poly where the p-th 
%               column of X contains the values of X to the p-th power.
%

    for i = 1:p
    	X_poly(:,i) = X.^i;
    end
% ==================================================

end
```
![Normalized Training Example](http://www.liuxiaowan.com/2017/02/20/Andrew-ML-6ndHomework/4.png)

## 4.3 Learning Curve for Polynomial Regression

**result:**

![Polynomial Regression Fit lambda =0](http://www.liuxiaowan.com/2017/02/20/Andrew-ML-6ndHomework/5.png)

![Polynomial Regression Learning Curve (lambda = 0)](http://www.liuxiaowan.com/2017/02/20/Andrew-ML-6ndHomework/6.png)

## 4.4 Validation for Selecting Lambda

    You will now implement `validationCurve` to test various values of lambda on a validation set. You will then use this to select the "best" lambda value.
    
## 4.5 coding

```
function [lambda_vec, error_train, error_val] = ...
    validationCurve(X, y, Xval, yval)
%VALIDATIONCURVE Generate the train and validation errors needed to
%plot a validation curve that we can use to select lambda

% Selected values of lambda (you should not change this)
lambda_vec = [0 0.001 0.003 0.01 0.03 0.1 0.3 1 3 10]';

% ====================== YOUR CODE HERE ======================

m = size(X, 1);
m_val = size(Xval,1);

    for i = 1:length(lambda_vec)
    	lambda = lambda_vec(i);
    	[theta_curve] = trainLinearReg([ones(m, 1) X],y,lambda);
    	[error_train(i), grad] = linearRegCostFunction([ones(m, 1) X],y,theta_curve,0);
    	[error_val(i), grad] = linearRegCostFunction([ones(m_val, 1) Xval],yval,theta_curve,0);
    
    end

% =========================================================================

end
```

## 4.6 result 

![different lambda error value](http://www.liuxiaowan.com/2017/02/20/Andrew-ML-6ndHomework/7.png)

![different lambda error value](http://www.liuxiaowan.com/2017/02/20/Andrew-ML-6ndHomework/8.png)