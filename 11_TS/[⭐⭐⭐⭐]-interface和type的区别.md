## 类型限制

### 类型限制
- 什么是类型限制？
    > 在静态语言中，不存在类型限制，在协同开发中，为了减少不必要的麻烦，需要对类型进行限制，比如规定一个函数的入参等。
- Js如何使用类型限制？
    1. 使用js原生方法实现，类似于：typeof、instanceof等。
    2. 使用ts的type、interface等。
- type和interface的区别？
    1. type可以声明基本类型、联合类型、元组等，interface只能声明对象类型。
    2. type不能重复声明，interface可以重复声明，会进行合并。
    3. type不能使用extends和implements，interface可以。