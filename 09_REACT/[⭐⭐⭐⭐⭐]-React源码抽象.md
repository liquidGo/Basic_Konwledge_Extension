## React源码初识

### MindMap

- React新架构/老架构
- React核心包
  - react：创建
  - react-dom：渲染vdom以及更新
- 生命周期渲染相关Map
  - React.Component.prototype上面有setState方法
  - ReactMount文件
    - instantiateReactComponent
    - componentWillMount在哪里执行的？
  - _renderSubtreeIntoContainer：是ReactDom.render底层
    - ReactElement：将真实dom处理成vdom
  - 在哪个步骤将真实Dom转换成虚拟Dom的？
  - ReactDom.render如何渲染的componentWillMount？

