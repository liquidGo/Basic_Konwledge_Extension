## 手写Api合集

### 深拷贝和浅拷贝
> 深拷贝拷贝的是值，浅拷贝拷贝的是内存地址[了解堆栈](./[⭐⭐⭐⭐⭐]-数据类型.md#总结)
- 浅拷贝
  1. Object.assign(target,source)=>target+source
- 深拷贝
  1. JSON.parse(JSON.stringify(Object))
  2. 
    ```递归
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