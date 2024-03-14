# 从0配置webpack框架
## 前期准备
### MindMap

- 核心包、插件是什么？
- 通用化的方案是什么？
  - 如何支持移动端自动适配？
  - 支持选择移动端和PC端？
  - 环境变量？
  - 如何上传webpack到npm？
- 如何最快速的实现一个版本？
- index.js作用？



### StateDiagram

```mermaid
stateDiagram-v2
state 从0配置webpack发布到npm官网{
[*]-->第一版本尽快出: 配置核心内容
第一版本尽快出-->完善: 使用期间快速迭代并且完善包
完善-->[*]
}
```

### Flowchart

```mermaid
flowchart TD
subgraph "核心"
创建工程-->显示第一个Html-->配置CSS-->配置Less-->配置图片支持-->配置优化
end

subgraph "扩展"
支持markdown-->环境变量-->TS/EsLint等其他更方便的扩展内容
end
```

### TimeLine

```mermaid
timeline
基础文件(基础文件): public/index.html<br>src/index.js: entry/output<br>文件路径设置: devserver本地服务器设置

Plugins(更广泛的用处): html-webpack-plugin<br>（配置文件引入、多入口）: clean-webpack-plugin(删除原生产文件): postcss-pxtorem(响应式): lib-flexible(自动计算fontSize)

Loaders(处理非Js模块): css-loader<br>(引入.css文件)<br>style-loader<br>(使用style标签注入样式到html内): less-loader@6<br>(使用less文件): autoprefixer/postcss-loader<br>(自动添加浏览器前缀): webpack-merge(合并webpack.base.js<br>webpack.dev.js<br>webpack.prod.js): @babel/core<br>@babel/preset-env<br>core-js -s<br>babel-loader<br>处理ES6的js文件等<br>需要配置.babelrc和loader: file-loader(引入src下面的图片): typescript<br>ts-loader<br>@babel/preset-typescript<br>支持typescript<br>@types/react @types/react-dom -D支持类型验证

```



## 自定义Cli

### MindMap

- bin文件夹下是可执行的入口文件灯
- lib下是工具函数等
- npm link测试cli工具是否可以使用
- *#! /usr/bin/env node*
- commander自定义命令
  - <img src="./assets/image-20240312185344126.png" alt="image-20240312185344126" style="zoom:50%;" />

### StateDiagram

```mermaid
stateDiagram-v2
state 创建Cli{
[*]-->初始化: npm init/git init
初始化-->指定版本: 用户选择了交互的版本
指定版本-->使用模板: 从指定的git仓库拉取模板
使用模板-->[*]
}
```

### Flowchart

```mermaid
flowchart TD
subgraph "总"
初始化-->package指定bin-->bin指定lib路径-->下载模板
end
subgraph "下载逻辑"
e[点击下载前判断]-->a[是否有相同目录]
a--是-->c[询问是否覆盖]
a--否-->b[选择模板进行下载]
c--是-->d[下载成功]
c--否-->e
b-->d
end
```

