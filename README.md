# 

可以通过配置 `src/config.js` 进行配置，直接接入自己相关项目仓库中的 `issues` 列表

# felix9ia's blog

这是一个基于  ``Github page`` 和 ``github api`` 中的 `issues` 接口 搭建的单页面静态博客，点击[「这里」](http://felix9ia.github.io)查看博客。

## 缘起

[我想把 issue 展示到 项目的主页上](https://github.com/felix9ia/blog/issues/40)

于是查找资源，果然有人利用 Github Public API去做自己的博客
[利用github api获取issue](https://github.com/isaaxite/blog/issues/44)

## 参考
参考大家的成熟方案

### 开发工程参考
而这个项目最原始是 fork 自 [cobish/cobish.github.io](https://github.com/cobish/cobish.github.io)，但是由于项目框架有些老旧，无法支持 antd
， 所以我按照原有的思路重新进行了搭建

### 路由参考
所有的路由习惯都是参照了 [阮一峰的个人网站](http://www.ruanyifeng.com/)

### 版式设计参考 

[作为程序员，你的个人主页是什么样子的?](https://www.zhihu.com/question/361282089)
[themeforest-iceberg](http://preview.themeforest.net/item/iceberg-simple-minimal-personal-contentfocused-wordpress-blog-theme-rtl-support/full_screen_preview/13624572)
[『花仲马』的博客](https://www.phodal.com/blog/stop-reuse/)
[catchen.me](https://chinese.catchen.me/)

## Fork 使用

1. 将配置文件的[百度统计](https://github.com//.github.io/blob/master/src/js/constants/Config.js#L7)配置修改成自己的账号。
2. 将配置文件里的 [token](https://github.com//.github.io/blob/master/src/js/constants/Config.js#L8) 修改成自己 Github 的 access_token。

## 环境搭建

### 运行环境

- [node.js](https://nodejs.org)

## 命令使用

### 安装

``` bash
$ cd .github.io
$ yarn install
```

#### 运行

``` bash
// 开发
$ npm start

// 打包
$ npm run build
```
## 关于高亮

[how to add custom style to codes](https://github.com/rexxars/react-markdown/issues/354)
[Using highlight.js with React.js](https://github.com/highlightjs/highlight.js/issues/925)

## 技术栈

- react 
- umi

## 浏览器兼容

- Chrome
- Firefox
- Safari
- IE10+

## TODO
[] 文章目录
[] 文章书写 [editor](https://github.com/rexxars/react-markdown/blob/master/demo/src/demo.js)
