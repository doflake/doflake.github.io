---
title: Hello World
author:
  avatar: https://cdn.jsdelivr.net/gh/doflake/Picture/Card/Avatar-Dove.jpg
  writer: Dove
headimg: https://cdn.jsdelivr.net/gh/doflake/cdn/Photo/Headimg.webp
tag:
- Test-tag-A
- Test-tag-B
- Test-tag-C
- Test-tag-D
- Test-tag-E
- Test-tag-F
- Test-tag-G
- Test-tag-H

---
# H1

## H2

### H3

#### H4

##### H5

###### H6

$$
\begin{bmatrix}
	1 & x_0 & x_0^2 & \cdots & x_0^n \\
	1 & x_1 & x_1^2 & \cdots & x_1^n \\
	\vdots & \vdots & \vdots & \ddots & \vdots \\
    1 & x_n & x_n^2 & \cdots & x_n^n  
\end{bmatrix}
\begin{bmatrix}
	a_0 \\ a_1 \\ \vdots \\ a_n
\end{bmatrix}
=
\begin{bmatrix}
	y_0 \\ y_1 \\ \vdots \\ y_n
\end{bmatrix}
$$

| 1    | 3    | 3    |
| ---- | ---- | ---- |
| 2    | 4    | 4    |
| 8    | 9    | 4    |
| 0    | =    | 765  |
| 1    | 124  | 5    |

```cpp
#include <bits/stdc++.h>

using namespace std;

const double eps = 1e-15;
 
signed main()
{
	int a, b; cin >> a >> b;
	
	double l = 0, r = 1;
	while (r - l >= eps)
	{
//		printf ("%.10lf %.10lf\n", l, r);
		double mid = (l + r) / 2;
		if (ceil(mid * b) * a <= b) l = mid;
		else r = mid;	
	}
	printf("%.10lf\n", r);
	return 0;
}
```

```ejs
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<%- css('css/styles') %>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/mdui@1.0.1/dist/css/mdui.min.css"
    integrity="sha384-cLRrMq39HOZdvE0j6yBojO4+1PrHfB7a9l5qLcmRm/fiWXYY+CndJPmyu5FV/9Tw" crossorigin="anonymous" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css"/>
<script src="https://cdn.jsdelivr.net/npm/mdui@1.0.1/dist/js/mdui.min.js"
    integrity="sha384-gCMZcshYKOGRX9r6wbDrvF+TcCCswSHFucUzUPwka+Gr+uHgjlYvkABr95TCOz3A" crossorigin="anonymous">
</script>
<script src="https://cdn.jsdelivr.net/gh/doflake/cdn/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/doflake/cdn/FontAwesome/FontAwesome.js"></script>

<script src="/js/prism/prism.js" async></script>
<script src="/js/prism/clipboard.min.js" async></script>
```



Some Simple Text

*斜体文本*
**粗体文本** 
***粗斜体文本*** 

~~BAIDU.COM~~
ABDCBDBDBD<u>带下划线的文本</u>ABBDABDBADBABD
创建脚注格式类似这样 [^1]。
Anthore Footnote [^2]
[^1]: Footnote-1
[^2]: Footnote-2

- 第一项
* 第二项
+ 第三项
+ - 第2篇
	* 第2.1章
		+ 第2.1.1节
		+ 1. 第一项：
    - 第一项嵌套的第一个元素
    - 第一项嵌套的第二个元素
2. 第二项：
    - 第二项嵌套的第一个元素
    - 第二项嵌套的第二个元素