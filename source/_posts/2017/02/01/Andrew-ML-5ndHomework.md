---
title: Andrew-机器学习（第五周作业）
subtitle: Time heals almost everything. Give time time.
date: 2017-02-01 15:56:23
tags: [原创,MachineLearning]
---

# Summary

This chapter will be learning how to train Neural Networks. The Neural Network is one of the most powerful learning algorithms (when a linear classifier doesn't work, this is what I usually turn to), and this week's videos explain the 'backpropagation' algorithm for training these models. In this week's programming assignment, you'll also get to implement this algorithm and see it work for yourself.


<!--more-->

# 题目
[第五周作业的题目：点击查看](http://perixiaowan.github.io/2017/02/01/Andrew-ML-5ndHomework/ex4.pdf)

# 1. *nnCostFunction.m*
- coding 

```
function [J grad] = nnCostFunction(nn_params, ...
                                   input_layer_size, ...
                                   hidden_layer_size, ...
                                   num_labels, ...
                                   X, y, lambda)
%NNCOSTFUNCTION Implements the neural network cost function for a two layer
%neural network which performs classification
%   [J grad] = NNCOSTFUNCTON(nn_params, hidden_layer_size, num_labels, ...
%   X, y, lambda) computes the cost and gradient of the neural network. The
%   parameters for the neural network are "unrolled" into the vector
%   nn_params and need to be converted back into the weight matrices. 
% 
%   The returned parameter grad should be a "unrolled" vector of the
%   partial derivatives of the neural network.
%

% Reshape nn_params back into the parameters Theta1 and Theta2, the weight matrices
% for our 2 layer neural network
Theta1 = reshape(nn_params(1:hidden_layer_size * (input_layer_size + 1)), ...
                 hidden_layer_size, (input_layer_size + 1));

Theta2 = reshape(nn_params((1 + (hidden_layer_size * (input_layer_size + 1))):end), ...
                 num_labels, (hidden_layer_size + 1));

% Setup some useful variables
m = size(X, 1);
         
% You need to return the following variables correctly 
J = 0;
Theta1_grad = zeros(size(Theta1));
Theta2_grad = zeros(size(Theta2));

% ====================== YOUR CODE HERE ======================
% Instructions: You should complete the code by working through the
%               following parts.
%
% Part 1: Feedforward the neural network and return the cost in the
%         variable J. After implementing Part 1, you can verify that your
%         cost function computation is correct by verifying the cost
%         computed in ex4.m
%
% Part 2: Implement the backpropagation algorithm to compute the gradients
%         Theta1_grad and Theta2_grad. You should return the partial derivatives of
%         the cost function with respect to Theta1 and Theta2 in Theta1_grad and
%         Theta2_grad, respectively. After implementing Part 2, you can check
%         that your implementation is correct by running checkNNGradients
%
%         Note: The vector y passed into the function is a vector of labels
%               containing values from 1..K. You need to map this vector into a 
%               binary vector of 1's and 0's to be used with the neural network
%               cost function.
%
%         Hint: We recommend implementing backpropagation using a for-loop
%               over the training examples if you are implementing it for the 
%               first time.
%
% Part 3: Implement regularization with the cost function and gradients.
%
%         Hint: You can implement this around the code for
%               backpropagation. That is, you can compute the gradients for
%               the regularization separately and then add them to Theta1_grad
%               and Theta2_grad from Part 2.
%
a1 = [ones(m, 1) X];

% a1 has size m*401;Theta1 has size 25*401 ; z2 has size m*25
z2 = a1 * Theta1' ;  
a2 = sigmoid(z2);

% a2 has size m*26 ; Theta2 has size 10*26 ; a3 has size m*num_labels
a2 = [ones(m,1) a2];
z3 = a2 * Theta2';
a3 = sigmoid(z3);

Y = zeros(m,num_labels);

for i=1:m
	Y(i,y(i)) = 1; 
end

theta1 = Theta1;
theta2 = Theta2;

theta1(:,1) = 0;
theta2(:,1) = 0;

firstReg = sum(sum(theta1.*theta1,2));
secondReg = sum(sum(theta2.*theta2,2));

J = 1/m * sum(sum(-Y.*log(a3)-(1 - Y).*log(1-a3),2)) + lambda/(2*m)*(firstReg+secondReg);

Delta1 = zeros(size(Theta1));
Delta2 = zeros(size(Theta2));

for i = 1:m
	delta3 = a3(i,:)- Y(i,:);
	delta2 = (delta3*Theta2)(:,2:end).*sigmoidGradient(z2(i,:));
	Delta2 = Delta2 + delta3'*a2(i,:);
	Delta1 = Delta1 + delta2'*a1(i,:);
end

Theta1_grad = Delta1/m ;
Theta2_grad = Delta2/m ;

Theta2_grad(:,2:end) = Theta2_grad(:,2:end) .+ lambda * Theta2(:,2:end) / m;  
Theta1_grad(:,2:end) = Theta1_grad(:,2:end) .+ lambda * Theta1(:,2:end) / m; 


% Unroll gradients
grad = [Theta1_grad(:) ; Theta2_grad(:)];

end
```
# 2 sigmoidGradient.m

```
function g = sigmoidGradient(z)
%SIGMOIDGRADIENT returns the gradient of the sigmoid function
%evaluated at z
%   g = SIGMOIDGRADIENT(z) computes the gradient of the sigmoid function
%   evaluated at z. This should work regardless if z is a matrix or a
%   vector. In particular, if z is a vector or matrix, you should return
%   the gradient for each element.

g = zeros(size(z));

% ====================== YOUR CODE HERE ======================
% Instructions: Compute the gradient of the sigmoid function evaluated at
%               each value of z (z can be a matrix, vector or scalar).

g = sigmoid(z).*(1-sigmoid(z));

% =============================================================

end

```

# 3 result
