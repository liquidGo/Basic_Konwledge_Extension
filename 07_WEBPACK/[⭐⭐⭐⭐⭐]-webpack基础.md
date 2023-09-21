## WEBPACK 基础

### 思维导图

```mermaid
mindmap
    WEBPACK
        WEBPACK了解
            什么是WEBPACK？
            为什么要使用WEBPACK？
            WEBPACK的优势
        WEBPACK配置
            基础配置
        WEBPACK优化
            如何优化？
        WEBPACK简单实现
            实现思路
            实现代码
```

#### 通用化

```mermaid
mindmap
    相似点
        通过脚手架创建项目
        通过配置文件配置项目
        通过插件扩展项目
```

#### 疑点总结

- 从 0 配置 webpack 从哪里入手？
- 对配置项的概念不清晰

#### 问题总结

- 了解 webpack 的基本概念

  > webpack 是一个基于 nodejs 模块打包工具，他可以将相互依赖的 css/html/js/图片等打包成静态资源文件

  > 优点：压缩并较少代码体积、压缩并较少图片大小、可以通过插件干预打包过程

- 从零开始配置 webpack

```mermaid
flowchart TD
    subgraph 项目初始化
        1[本地node init -y初始化项目]
        2[本地npm install webpack webpack-cli -D安装webpack]
        3["新建src/index.js、index.html"]
        4[本地npx webpack打包]
        5[html引入打包后的js]
        6[可以进行相关的依赖引用测试]
        1 --> 2 --> 3 --> 4 --> 5 --> 6
    end
```

```mermaid
mindmap
    常用配置项：
        mode：开发模式
        entry：入口文件
        output：出口文件
        module：模块
        plugins：插件
        devServer：开发服务器
        resolve：解析
        externals：外部扩展
        devtool：调试工具
        optimization：优化
```

```mermaid
flowchart TD
    subgraph 项目配置
        1["新建webpack.config.js"]
        2["配置mode、entry、output"]
        3["`配置
        module-->
        rules-->
        test/use。
        渲染css、图片等`"]
        4["`配置plugins-->
        html-webpack-plugin
        自动引入打包好的js文件
        到html中
        `"]
        5["`配置pulgins-->
        babel-loader
        npm i babel-loader 
        @babel/core 
        @babel/preset-env -D
        将 es6+ 的代码编译成 es5
        `"]
        6["`配置
        optimization-->
        TerserWebpackPlugin
        进行项目的优化  
        `"]
        7["`配置
        devServer-->
        webpack-dev-server
        指定项目加载目录
        `"]
        8["设置输出dist文件hash值"]
        9["`设置resolve-->
        alias别名`"]
        10["`可视化打包分析工具
        webpack-bundle-analyzer
        `"]
    1 --> 2 --> 3 --> 4 --> 5 --> 6 --> 7 --> 8--> 9 --> 10
    end
```

- style-loader 和 css-loader 的区别？

  > style-loader：将 css 文件以 style 标签的形式插入到 html 中。

  > css-loader：将 css 的各种导入关系进行解析处理。

- html-webpack-plugin 的作用？

  > 作用：将打包后的 js 文件自动引入到 html、配置多入口、缓存等作用

- babel-loader、@babel/core、@babel/preset-env 各自的作用？
    >  babel-loader：将源代码交给babel编译器。
    >  @babel/core：babel 的核心库，用于将 js 文件进行编译。
    > @babel/preset-env：babel 的预设，用于将 es6+ 的代码编译成 es5。