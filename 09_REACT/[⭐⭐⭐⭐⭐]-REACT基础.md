## React 基础

### 思维整理

```mermaid
mindmap
    REACT面试技巧
        了解REACT
            什么是REACT？
            REACT主要做了什么？
            REACT优点？
            REACT的change log？
                记录重大版本的变化、时间点
        使用REACT
            路由跳转的方式？
            组件封装？
            组件通信？
            组件生命周期？
            组件的状态管理？
            组件的优化？
            组件的错误处理？
            组件的打包？
```
### 共通点
```mermaid
timeline
    title 先后顺序
    了解框架 : 框架起源 : 框架迭代 : 现今发展
    渲染过程 : 使用框架 : 虚拟DOM : 状态保存 ：框架优化 : 渲染页面 : 显示页面 : 页面交互（路由跳转、事件绑定、组件通信等）
```
### 抽象
```mermaid
---
title: REACT状态图
---
stateDiagram-v2
    [*] -->编码 : 了解框架
    编码 --> render真实dom : 框架执行虚拟DOM/diff算法等
    render真实dom --> 显示页面 : 生命周期
    显示页面 --> render真实dom : 页面交互
    显示页面 --> [*] 
```
### 总结
1. 了解REACT
    - 什么是REACT？
        > REACT是一个用于构建用户界面的JavaScript库。  
        > &nbsp;&nbsp;&nbsp;&nbsp;起初是facebook为了解决内部开发中遇到的两个问题：大量操作真实DOM、数据流混乱。  
        > &nbsp;&nbsp;&nbsp;&nbsp;于是，facebook调研后开发了react框架，于13年五月开源，国内16年开始流行。
    - REACT优点？
      - 不直接操作真实DOM而是操作虚拟DOM，提高性能
      - 数据流单向，提高代码可读性
      - 组件化开发，提高代码复用性
      - 丰富的生命周期，提供更多的钩子函数
      - 丰富的插件，提供更多的功能
      - diff算法，更少的操作真实DOM
    - REACT重要change迭代？
2. 使用REACT
