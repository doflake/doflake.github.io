---
title: '[Hexo] Hexo + Github 博客搭建'
date: 2020-10-18 16:09:54
link_c: Hexo
link_name: Made-Hexo-Blog-From-Zero
top: 2001
---

## 准备

​先下载`git`和`nodejs`，[git](https://git-scm.com/downloads)、[nodejs](https://nodejs.org/en/download/).

注意，`nodejs`用`msi`下载，不要下载`zip`

<!--more-->

​打开`git`输入

```
node -v
npm -v
```

​检查nodejs是否下载好。

​若显示
```
XX.XX.XX或VXX.XX.XX
```

​即可

​然后输入

```
npm install -g hexo
```

​等待5-30分钟，看网速。好了之后会看到一大堆乱七八糟的东西，不用管，只要有`done`没有`error`就行。

## 本地建立

​新建一个文件夹，以下用`blog`代替。

​右键`blog`，打开`git bush`

​输入

```
hexo init blog
npm install
```

​新建完成后，指定文件夹目录下有：

- node_modules: 依赖包
- public：存放生成的页面
- scaffolds：生成文章的一些模板
- source：用来存放你的文章
- themes：主题
- _config.yml: 博客的配置文件

`cd进入myblog`

​输入

```
hexo g
hexo server
```

​打开 [localhost:400](localhost:4000) 查看

## 网上建立
​首先，你先要有一个GitHub账户，去注册一个吧。注册完登录后，在`GitHub.com`中看到一个`New repository`，新建仓库。
​创建一个和你用户名相同的仓库，[后面加.github.io](http://xn--yfr16an19l.github.io/)，只有这样，将来要部署到GitHub page的时候，才会被识别，[也就是xxxx.github.io](http://xn--xxxx-4m5f354ev5p.github.io/)，其中xxx就是你注册GitHub的用户名。我这里是已经建过了。
​回到你的git bash中，

```
git config --global user.name "yourname"
git config --global user.email "youremail"
```

​这里的`yourname`输入你的`GitHub`用户名，`youremail`输入你`GitHub`的邮箱。这样`GitHub`才能知道你是不是对应它的账户。

​可以用以下两条，检查一下你有没有输对

```
git config user.name
git config user.email
```

​然后创建`SSH`,一路回车

```
ssh-keygen -t rsa -C "youremail"
```

​这个时候它会告诉你已经生成了`.ssh`的文件夹。在你的电脑中找到这个文件夹。

​ssh，简单来讲，就是一个秘钥，其中，`id_rsa`是你这台电脑的私人秘钥，不能给别人看的，`id_rsa.pub`是公共秘钥，可以随便给别人看。把这个公钥放在GitHub上，这样当你链接GitHub自己的账户时，它就会根据公钥匹配你的私钥，当能够相互匹配时，才能够顺利的通过git上传你的文件到GitHub上。

​而后在`GitHub`的`setting`中，找到`SSH keys`的设置选项，点击`New SSH key `把你的`id_rsa.pub`里面的信息复制进去。

​在`git bash`中，查看是否成功

```
ssh -T git@github.com
```

​这一步，我们就可以将hexo和GitHub关联起来，也就是将`hexo`生成的文章部署到GitHub上，打开站点配置文件 `_config.yml`，翻到最后，修改为
YourgithubName就是你的GitHub账户

```
deploy:
  type: git
  repo: https://github.com/YourgithubName/YourgithubName.github.io.git
  branch: master
```

​这个时候需要先安装deploy-git ，也就是部署的命令,这样你才能用命令部署到GitHub。

```
npm install hexo-deployer-git --save
```

​然后

```
hexo clean
hexo generate
hexo deploy
```

​其中 `hexo clean`清除了你之前生成的东西，也可以不加。
`hexo generate` 顾名思义，生成静态文章，可以用 `hexo g`缩写
​`hexo deploy` 部署文章，可以用`hexo d`缩写

​注意`deploy`时可能要你输入`username`和`password`。

​过一会儿就可以在`http://yourname.github.io` 这个网站看到你的博客了！！(注意要过一会才会更新)