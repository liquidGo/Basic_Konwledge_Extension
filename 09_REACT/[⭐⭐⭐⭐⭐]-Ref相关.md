## Ref相关

### 问题
- 什么是ref？
  - 什么是ref
  - ref的优点
- 如何在React中使用ref？
  - 类和函数组件中Ref的差异？

### 总结
1. 什么是Ref，以及Ref的优点？
    > Ref是React用来操纵组件实例或者是DOM元素的接口。  

    > Ref的优点：获取第三方包的实例、拿到子组件实例和对外暴露的方法、获取真实DOM不会引起页面的重排。

2. React中Ref的使用方法？
    > 类组件通过React.createRef()创建Ref对象并挂载到组件的实例中，函数组件没有实例，通过useRef()创建Ref对象。
