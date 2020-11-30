---
title: '[doflake]document'
date: 2020-11-27 23:35:17
---

介绍 **主题简介 | 主题食用 | 更新日志**

<!--more-->

## 主题简介

### 主题名

&#8195;名称：$Doflake$

&#8195;来源：$[元祖]Dove$与$[元祖]Beelake$ 名字合成 $(Dof~/~Lake)$

### 开发人员

1.  $[元祖]Dove~:$  主题相关内容 (文档 , 功能 , 样式 , 布局) 
2.  $[元祖]Beelake~:$  部分文章 , 查询资料 , 找新功能

### 其他

&#8195;- 感谢支持

&#8195;- 如果有好的[提议](https://github.com/doflake/doflake.github.io/issues)，$Doflake$ 都会听的 😝

## 主题食用

### Basic Settings 基础设置

#### &#8195;Info 基本信息

|   属性    |          作用          |   内容   |
| :-------: | :--------------------: | :------: |
|  $title$  |      设置网页名称      |   任意   |
| $favicon$ |      更改网页图标      | 图片链接 |
| $author$  | 修改第一篇文章上方文字 |   任意   |

#### &#8195;Menu 导航栏

&#8195; **位置：** 第一篇文章上方偏右

|  属性  |   作用    |   内容   |
| :----: | :-------: | :------: |
| $name$ | 显示 文字 |   任意   |
| $link$ |  超链接   | 地址链接 |

&#8195;**范例：**

```ejs
Something:
  name: 巴拉巴拉
  link: 我是一个连接
```

&#8195;则会对应生成一个 **巴拉巴拉** 点击跳转到 **我是一个连接**

#### &#8195;Background 背景图

&#8195;**位置：**整页

|  属性  |   作用   |   内容   |
| :----: | :------: | :------: |
| $link$ | 显示图片 | 图片链接 |

#### &#8195;Mathjax 渲染公式

&#8195;**作用范围：**所有公式（包括标题）

&#8195;**使用方法：**

- 移除 $marked$ 渲染器

```
npm uninstall hexo-renderer-marked --save
```

- 安装 $kramed$ 渲染器

```
npm install hexo-renderer-kramed --save
```

- 打开开关

```ejs
mathjax:
  enable: true
```



### Layout 布局

#### index_post 主页文章块

&#8195;**位置：**主页下的文章块

|     属性     |     作用     |   内容   |
| :----------: | :----------: | :------: |
| $max\_width$ |   控制宽度   |  像素值  |
|    $left$    | 距离左边距离 | $margin$ |
|    $top$     | 距离上边距离 | $margin$ |
|   $right$    | 距离右边距离 | $margin$ |
|   $bottom$   | 距离下边距离 | $margin$ |
|   $radius$   |   文章圆角   |  像素值  |

**$margin$**

|   属性   |                   作用                   |
| :------: | :--------------------------------------: |
|  $auto$  |                   居中                   |
| $length$ | 规定以具体单位计的数值 $Eg.$ 像素 / 厘米 |
|   $\%$   |          以父元素的宽度的百分比          |



#### background 背景图片

&#8195;**位置：**整页

|     属性     |     作用     |           内容            |
| :----------: | :----------: | :-----------------------: |
|   $repeat$   | 控制图片重复 |    $background-repeat$    |
| $attachment$ | 控制图片固定 | $background - attachment$ |
|    $size$    | 控制图片大小 |    $background - size$    |

**$background~-~repeat$**

|    属性     |          作用          |
| :---------: | :--------------------: |
|  $repeat$   | 在 水平和垂直方向 重复 |
| $repeat-x$  |    在 水平方向 重复    |
| $repeat-y$  |    在 竖直方向 重复    |
| $no-repeat$ |         不重复         |

$background - attachment$

|   属性   | 作用 |
| :------: | :--: |
| $fixed$  | 固定 |
| $scroll$ | 滚动 |

$background - size$

二元组 $(~width~,~height~)$ 

|     属性     |           作用           |
| :----------: | :----------------------: |
|   $length$   |   设置固定宽高（数值）   |
|    $auto$    |       自动设置宽高       |
| $percentage$ | 由父元素的百分比设置宽高 |
|   $cover$    |       覆盖（拉伸）       |



## 更新日志

### $V 1.0.1$

&#8195;**时间：**$Day~11.23$

&#8195;**注释：**大规模框架改动，以及大部分数值动态更新

&#8195;**主要内容：**

- 使用 $hexo-config()$ 实现 $css$ 中数据动态更新
- 修改框架，更为清晰
- 添加 $Markdown - table$ 自定义渲染表格
- 文章圆角



### $V1.0.0$ 

&#8195;**时间：** Unknown

&#8195;**注释：**时间不知道为什么被压缩了呢，变成一个版本了 ($Day~11.23$日前所有更迭 压缩为 一个版本)

&#8195;**主要内容：**

- 搭建完成主题
- 添加功能 $Info$ 基本信息
- 添加功能 $Mathjax$ 渲染公式
- 添加功能 $Background$ 背景图
- 添加功能 $Menu$ 导航栏