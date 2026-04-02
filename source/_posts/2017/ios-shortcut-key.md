---
title: Xcode常用快捷键
date: 2017-08-14 10:38:48
tags: 
    - iOS开发
---

## 文件

    command + shift + n              新建项目

    command + n                      新建文件
    command + control + n            新建空文件

    command + o                      打开文件

    command + w                      关闭窗口
    command + shift + w              关闭文件

    command + u                      还原到保存时状态

    command + s                      保存
    command + shift + s              另存为
    command + option + s             保存所有文件

    command + control + ⬆️/⬇️       在程序中 .h 和 .m 相关的文件间快速切换
    command + control + ⬅️/➡️       前后浏览问价之间跳转

    command + ⬆️/⬇️                 文件头部和尾部之间跳转
    command + l                      调转到第几行，打开跳转行输入框

    command + control + f            进入/退出全屏

    command + 0                      显示/隐藏 导航器面板
    command + option + 0             显示/隐藏 工具面板
    command + shift + y              显示/隐藏 调试窗口

    command + option + enter         打开助理编辑器窗口
    command + enter                  关闭助理编辑器窗口
    option + 单击项目导航器中文件      在辅助编辑器中打开文件

    command + 1                      打开 工程导航器
    command + shift + f              打开 搜索导航器
    command + shift + 0              打开 文档和参考

    command + shift + o              打开 跳转栏和快速打开搜索输入，快速打开文件

    command + shift + j              快速地在代码库定位文件，打开折叠的文件夹

    option + 单击类或者方法名          打开 快速帮助
    option + 双击类或者方法名          快速跳转至文档
    command + 单击类或者方法名         快速跳转至文档

    command + ctrl + j               快速跳转至文档

    control + 1                      打开 “Show Related Items” 菜单，将光标放在了任何方法中，点该键，
                                     就可以通过弹出的视图访问该方法的所有调用者和被调用者。

    command + j                      选择操作窗口，可展示一个小尺寸的弹出视图

    command + option + shift + 单击  在文件上执行该键，可展示一个小尺寸的弹出视图，可以查看想要打开它的地方，
                                     比如辅助编辑器、标签或者窗口等。
                                     
## 代码编辑


    command + option + ⬅️           折叠代码块
    command + option + ➡️           取消折叠代码块
    command + option + ⬆️           折叠全部代码块
    command + option + ⬇️           取消折叠全部代码块
    control + u                     取消折叠全部代码块

    command + option + [ ]          上下移动代码块

    command + [ ]                   左右缩进

    command + /                     注释或取消注释

    esc                             显示代码提示菜单
    tab                             接受代码提示
    control + .                     循环浏览代码提示
    control + shift + .             反向循环浏览代码提示
    control + /                     移动到代码提示中的下一个占位符

    control­ + f                     前移光标，向右一个字符（forward）
    control­ + b                     后移光标，向左一个字符（backward）

    control­ + p                     上移光标，移动到上一行（previous）
    control + ­n                     下移光标，移动到下一行（next）

    control­ + a                     移动光标到本行行首
    control­ + e                     移动光标到本行行尾（end）

    control + t                     调换光标两边的字符（transpose）
    control­ + d                     删除光标右侧的一个字符（delete）
    control + k                     删除光标右侧的所有字符（kill）

    command + f                     搜索
    command + g                     搜索下一处
    command + shift + g             搜索上一处

    control + l                     将插入点置于窗口正中

    command + d                     添加书签
    command + control + s           创建快照

## 运行调试

    command + b                     编译
    command + r                     编译并运行（不触发断点）
    command + y                     编译并调试（触发断点）
    command + .                     停止

    command + shift + k             清理

    F6                              单步调试
    F7                              跳入
    F8                              继续

    command + \                     设置或取消断点
    command + option + \            允许或禁用当前断点
    command + option + b            查看全部断点