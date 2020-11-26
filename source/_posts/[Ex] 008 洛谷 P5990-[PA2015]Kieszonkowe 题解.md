---
title: '[Ex] 008 洛谷 P5990 [PA2015]Kieszonkowe 题解'
mathjax: true
date: 2020-11-26 20:40:02
link_c: Explanation
link_name: Luogu-P5990-Kieszonkowe
top: 4000
---

虽然有点水
但这其实是一道很好的题目，有很多种解法，让我们明白其实很多程序都可以再优化。

<!--more-->

------------


看到题目，蒟蒻（比如我）
的第一反应自然是搜索，也就是一个一个枚举该数字是否被选中，一看，
$n<=10^6$
，爆搜的
$n^2$复杂度直接爆炸，显然，搜索是不可能的。

------------
然后我就想到了动态规划，这种线性动规时间复杂度
$O(n)$,确实可以解决。

定义
$f[i]$
表示第i个数结尾，和为偶数的情况下最大的和，而
$g[i]$
表示第i个数结尾，和为奇数的情况下最大的和，那么状态转移方程大概是这个样子：
$if(a[i] \mod 2 =0) f[i]=f[i-1]+a[i],g[i-1]=g[i-1]+a[i]$

$if(a[i] \mod 2=1) f[i]=g[i-1]+a[i],g[i-1]=f[i-1]+a[i]$

答案就是$f[i]$.

小结：使用动规，时间$O(N),$空间$O(N)$.


------------
做到这里，我想到，还能不能再简单一些呢？对了，一个数列的和的奇偶性不是奇数就是偶数，代码如下：

```cpp
int n ;
scanf("%d",&n);
for(int i=1;i<=n;i++){
     scanf("%d",&a[i]);
     tot+=a[i];
}
... ...

```
如果总和是偶数，那么直接输出它的和可以了。
```cpp
if(tot%2==0){
     printf("%d",tot);
     return 0;
}

```


如果是奇数怎么办呢？答案显而易见，有一个奇数不可以被选中，哪个奇数被“驱逐”之后答案最大呢？显然是最小的奇数。
```cpp
if(tot%2!=0){
     for(int i=1;i<=n;i++){
          if(a[i]%2!=0)mn=min(mn,a[i]);
     }
     printf("%d",tot-mn);
     return 0;
}
```
这里要注意，还会有无解的情况（只有一个数并且这是奇数）
```cpp
if(n==1 and tot%2==1)
return 0*printf("NIESTETY");
```
优化一下，取消数组$a$,一边输入一边处理$mn$,
```cpp
for(int i=1;i<=n;i++){
	scanf("%d",&in);
	tot+=in;
	if(in%2==1) mn=min(mn,in);
}
```
最后压行：
```cpp
#include<iostream>
#include<stdio.h>
using namespace std;
int tot=0,mn=999999999,in;
int main(){
     int n;
     scanf("%d",&n);
     for(int i=1;i<=n;i++){
          scanf("%d",&in);
          tot+=in;
          if(in%2==1) mn=min(mn,in);
     }
     if(n==1 and tot%2==1) return 0*printf("NIESTETY");
     else return 0*printf("%d",(tot%2==1)?tot-mn:tot);
}//#code by Error_Eric
```


------------

总结：这道题目告诉我们，很多时候代码可以优化太多。

## By Error_Eric