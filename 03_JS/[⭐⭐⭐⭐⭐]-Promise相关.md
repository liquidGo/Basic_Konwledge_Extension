## Promise相关

### 问题
- 什么是Promise？来自于哪个ES版本？为什么有创造Promise？
- Promise的状态有哪些？
- async和Promise的关系？
- Promise的优缺点？
- Promise的错误处理？
- 手写一个简单的Promise？
- Promise之前如何处理异步？
- try catch能捕获Promise的错误吗？

### 总结
- 什么是Promise？来自于哪个ES版本？为什么要创造Promise？
  > Promise是ES6的一个新特性，用于解决回调地狱、链式调用、错误处理等问题。

- Promise的状态有哪些？在Promise之前如何处理异步？
  - pending：等待状态，既不是成功也不是失败
  - fulfilled：成功状态
  - rejected：失败状态

  > fulfilled调用resolve，rejected调用reject
  > [使用异步](./[⭐⭐⭐⭐⭐]-异步.md#使用异步)

- Promise的优缺点？
  > 优点：解决回调地狱、链式调用、错误处理等问题
  > 缺点：无法取消Promise，错误需要通过回调函数捕获

- Promise错误处理？
  > Promise的错误处理有两种方式：
  > 1. 在then中的第二个参数中进行错误处理
  > 2. 在catch中进行错误处理

- async和Promise的关系？
  >  async/await 是基于Promise的语法糖，可以让异步代码看起来像同步代码。

- 手写一个简单的Promise？
  > [详情](./[⭐⭐⭐⭐⭐]-异步.md#内置对象相关)

- try catch能捕获Promise的错误吗？
  > 不能，因为Promise的错误是异步的，try catch只能捕获同步的错误。
  > 但是，可以配合async/await 来捕获Promise的错误。

