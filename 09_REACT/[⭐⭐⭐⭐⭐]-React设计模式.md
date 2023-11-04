## React设计模式
### 灵感
- 什么是设计模式？
- 设计模式如何应用？
- 常见的React设计模式有哪些？
- 有哪些优秀的React设计模式？

### 归总
- 什么是React设计模式？
  - 从开发的可复用性封装来说，React设计模式是一种封装可复用性组件的最佳实践，是一种组件的设计思想。
- 常见的设计模式？
  - State Reducer：在状态更新前做一些逻辑
    - [案例](https://github.com/liquidGo/simply-react)
  - Render Props：多用例(满足多个需求)组件的最佳实践
    - [案例](https://github.com/liquidGo/simply-react)
    - 结合Reducer用法:
    ```mermaid
    flowchart TB
      RenderProps--导出value/onChange(action)-->1[StateReducer]
      1--有传入Reducer-->Reducer拦截并改变State进行更新
      1--无传入Reducer-->直接更新默认的action到State
    ```
  - Context：全局统一配置的最佳实践
    - [案例](https://github.com/imalextu/learn-react-patterns/blob/master/src/pattern4/Context.js)