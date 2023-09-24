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

### 模式

```mermaid
timeline
    title 以往经验中寻找规律
    了解框架 : 框架起源 : 框架迭代 : 现今发展
    渲染过程 : 使用框架 : 虚拟DOM : 状态保存: 框架优化 : 渲染页面 : 显示页面 : 页面交互（路由跳转、事件绑定、组件通信等）
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

#### 总结流程

```mermaid
flowchart TB
了解框架 --> 使用框架
```

1. 了解 REACT

   - 什么是 REACT？
     > REACT 是一个用于构建用户界面的 JavaScript 库。  
     > &nbsp;&nbsp;&nbsp;&nbsp;起初是 facebook 为了解决内部开发中遇到的两个问题：大量操作真实 DOM、数据流混乱。  
     > &nbsp;&nbsp;&nbsp;&nbsp;于是，facebook 调研后开发了 react 框架，于 13 年五月开源，国内 16 年开始流行。
   - REACT 优点？
     - 不直接操作真实 DOM 而是操作虚拟 DOM，提高性能
     - 数据流单向，提高代码可读性
     - 组件化开发，提高代码复用性
     - 丰富的生命周期，提供更多的钩子函数
     - 丰富的插件，提供更多的功能
     - diff 算法，更少的操作真实 DOM
   - REACT 重要 change 迭代？

    1. fiber 渲染
        - 虚拟 DOM 的 diff 算法由递归渲染改为 fiber 渲染(React16.0 将树结构改为链表结构)

        - 16.0 以前：深度优先递归渲染，
            > Reconciler通过key值找到变化组件并将真实DOM转为虚拟DOM，diff算法比较虚拟DOM并且打补丁最后使用Renderer渲染真实DOM

        > 一旦开始渲染，就会一直执行到结束

        > 大量组件实例存在时，执行效率变低

        > 用户交互动画效果，出现页面卡顿

        - 16.0 以后：fiber 渲染（整体调度的统称）

            > 增加了Scheduler调度器，也是fiber的核心，当页面变化后会使用Reconciler找到变化后，通过Scheduler调度器在浏览器空闲时间中进行虚拟DOM的可暂停的打标，由effectTag形成effectList，打标以后交由Renderer更新打标的DOM。

        > 利用浏览器空闲时间执行，不会占用主线程。  
        > 浏览器 API：requestIdleCallback：利用浏览器空闲时间执行任务，可以设置优先级。

        > 将 diff 更新 dom 操作碎片化

        > 碎片化任务，可以根据需要中断、继续、重新启动
    2. 生命周期
        > 16.0以前：挂载前后、是否更新、更新前后、卸载
        > 16.0以后: 删除了will系列，会影响vdom链表结构的渲染，保留了shouldComponentUpdate
2. 使用 REACT
   1. 组件优化？
        > 手动优化：shouldComponentUpdate、PureComponent、React.memo
        > 自动优化：React.lazy、React.Suspense

#### 细分流程图

```mermaid
---
title: requsetIdleCallback/react对此API进行了重写，原理相同
---
stateDiagram

    [*] --> 主线程调度: 判断当前帧是否有剩余时间
    主线程调度 --> 下一帧调度: 回调任务未执行完毕
    下一帧调度 --> 主线程调度: 判断当前帧剩余时间
    主线程调度 --> [*]
```


```mermaid
---
title: react16.0之前的diff算法
---
flowchart TB
1[调用requestIIdleCallback]
2[是否符合调用条件]
3[判断当前帧是否有剩余时间]
    31[写入调度逻辑]
4[结束]

1-->2--是-->3--有-->31-->1
2--否-->4
3--无-->1
```
```
requestIdleCallback(myNonEssentialWork, { timeout: 2000 });

function myNonEssentialWork (deadline) {
  // 当回调函数是因为超时才得以执行的话，deadline.didTimeout为true
  while ((deadline.timeRemaining() > 0 || deadline.didTimeout) &&
         tasks.length > 0) {
       doWorkIfNeeded();
    }
  if (tasks.length > 0) {
    requestIdleCallback(myNonEssentialWork);
  }
}
```

```mermaid
---
title: 生命周期
--- 
```
