## 手写Api合集

### 深拷贝和浅拷贝
> 深拷贝拷贝的是值，浅拷贝拷贝的是内存地址[了解堆栈](./[⭐⭐⭐⭐⭐]-数据类型.md#总结)
- 浅拷贝
  1. Object.assign(target,source)=>target+source
- 深拷贝
  1. JSON.parse(JSON.stringify(Object))
  2. 递归
    ```js
    const cloneDeep = (obj) => {
      if (typeof obj !== 'object') {
        return obj;
      }
      let clone
      if (Object.prototype.toString.call(obj) === '[object Array]') {
        clone = [];
        for (key in obj) {
          if (Object.prototype.toString.call(obj[key]) === '[object Array]' || Object.prototype.toString.call(obj[key]) === '[object Object]') {
            clone[key] = cloneDeep(obj[key])
          } else {
            clone[key] = obj[key]
          }
        }

      } else if (Object.prototype.toString.call(obj) === '[object Object]') {
        clone = {}
        for (key in obj) {
          if (Object.prototype.toString.call(obj[key]) === '[object Array]' || Object.prototype.toString.call(obj[key]) === '[object Object]') {
            clone[key] = cloneDeep(obj[key])
          } else {
            clone[key] = obj[key]
          }
        }
      }


      return clone;
    }
    ```

### Promise
- 手写Promise [跳转](./[⭐⭐⭐⭐⭐]-异步.md#内置对象相关)

### 算法
- 基础算法[详解](../05_算法/[⭐⭐⭐⭐⭐]-四种基本的算法.md)

### 防抖节流
- 防抖：生效最后一次触发事件
  ```js
  function debounce(fn,wait){
    let timer = null;
    return function(){
      if(timer){
        clearTimeout(timer)
      }
      timer = setTimeout(()=>{
        fn.apply(this,arguments)
      },wait)
    }
  }
  ```
- 节流：生效第一次触发事件
  ```js
  function throttle(fn,wait){
    let timer = null;
    return function(){
      if(!timer){
        timer = setTimeout(()=>{
          fn.apply(this,arguments)
          timer = null;
        },wait)
      }
    }
  }
  ```

### 轮询
- 轮询：每隔一段时间发送一次请求  [通过ids获取details](../06_HTTP/[⭐⭐⭐]-轮询.md#通过lists插入对应的detail值)  
