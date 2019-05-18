---
title: Andrew-机器学习（第七周作业）
date: 2017-02-27 19:07:54
tags: [MachineLearning]
---
# Summary

This chapter teach us about systematically improving your learning algorithm. The videos for this week will teach you how to tell when a learning algorithm is doing poorly, and describe the 'best practices' for how to 'debug' your learning algorithm and go about improving its performance.

<!--more-->

# 0. 
[第七周作业的题目：点击查看](http://www.liuxiaowan.com/2017/02/27/Andrew-ML-7ndHomework/ex6.pdf)

# 1. Support Vector Machines
## 1.1 Training Linear SVM

	C = 1;
	//C = 100;
	model = svmTrain(X, y, C, @linearKernel, 1e-3, 20);
	visualizeBoundaryLinear(X, y, model);
	
![SVM Decision Boundary with C = 1](http://www.liuxiaowan.com/2017/02/27/Andrew-ML-7ndHomework/1.png)

![SVM Decision Boundary with C = 100](http://www.liuxiaowan.com/2017/02/27/Andrew-ML-7ndHomework/2.png)

## 1.2 SVM with Gaussian Kernels

`完成文件“gaussianKernel.m”`计算两个样本之间的Gaussian kernel高斯核函数,即两个点的相似度。

![Gaussian kernel](http://www.liuxiaowan.com/2017/02/27/Andrew-ML-7ndHomework/math1.png)
	
	//gaussianKernel.m
sim = exp(-sum((x1-x2).^2)/(2*sigma^2));

### Training SVM with RBF Kernel （dataset2）

	model= svmTrain(X, y, C, @(x1, x2) gaussianKernel(x1, x2, sigma)); 
	visualizeBoundary(X, y, model);

![SVM (Gaussian Kernel) Decision Boundary](http://www.liuxiaowan.com/2017/02/27/Andrew-ML-7ndHomework/3.png)

### Training SVM with RBF Kernel （dataset3）

尝试不同的参数C和sigma，找出较优参数 

添加代码至`dataset3Params.m`找出最优参数

	//dataset3Params.m
	
	param = [0.01 0.03 0.1 0.3 1 3 10 30]';
	
	C = 0.01;
	sigma = 0.01;
	model= svmTrain(X, y, C, @(x1, x2) gaussianKernel(x1, x2, sigma)); 
	predictions = svmPredict(model, Xval);  
	min_error = mean(double(predictions ~= yval));
	
	for i = 1:length(param)
	   for j = 1:length(param)
	   	   C = param(i);
	   	   sigma = param(j);
	       model= svmTrain(X, y, C, @(x1, x2) gaussianKernel(x1, x2, sigma)); 
	       predictions = svmPredict(model,Xval);
	       prediction_error = mean(double(predictions ~=yval));
	       if (prediction_error < min_error)
	       		cm = C;
	       		sigmam=sigma;
	       		min_error = mean(double(predictions ~= yval));
	       	end
	       
	    end
	end
	
	C = cm;
	sigma = sigmam;
	
**运行结果**

![SVM (Gaussian Kernel) Decision Boundary (Dataset cross validation](http://www.liuxiaowan.com/2017/02/27/Andrew-ML-7ndHomework/4.png)

# 2 Spam Classification

> spam (y = 1) or non-spam (y = 0)

## 2.1 Preprocessing Emails

完成`processEmail.m`

	//processEmail.m
	
    for i = 1:length(vocabList)
        if strcmp(str,vocabList{i})
            word_indices = [word_indices;i];
        end
    end
    
**运行结果**

![Preprocessing Emails](http://www.liuxiaowan.com/2017/02/27/Andrew-ML-7ndHomework/Preprocessing.png)

## 2.2 Extracting Features from Emails

完成`emailFeatures.m`

	//emailFeatures.m
	x(word_indices) = 1;

**运行结果**

![Extracting Features from Emails](http://www.liuxiaowan.com/2017/02/27/Andrew-ML-7ndHomework/ExtractingFeatures.png)


## 2.3 Training SVM for Spam Classification

可以训练一个线性分类器，来决定某个邮件是否是垃圾邮件。

![Training SVM for Spam Classification](http://www.liuxiaowan.com/2017/02/27/Andrew-ML-7ndHomework/TrainingSVMForSpamClassification.png)

## 2.4 Top Predictors for Spam

根据前文训练出来的model，获得vocabulary list的权重并排序

**运行结果**

![Top Predictors for Spam](http://www.liuxiaowan.com/2017/02/27/Andrew-ML-7ndHomework/TopPredictorsForSpam.png)




	
	