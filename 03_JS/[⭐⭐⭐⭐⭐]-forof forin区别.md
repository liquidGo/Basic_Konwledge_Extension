## 遍历方法

### 灵感
- 什么是for of/in？
- 什么时候用for of/in？
- 有哪些类似的方法？
- 有什么区别？
- 什么是迭代器（Iterator）？

### 总结
- for of/in是ES6新增的遍历方法，用于遍历可迭代对象（Iterable Object）。
  > for in用于遍历key，for of用于遍历value，for of不能遍历对象。

- 其他遍历方法：
  > forEach/map/filter/some/every/reduce/keys/values/entries/find/findIndex

- 有什么区别？
  > for of/in是用于遍历有迭代器的数据结构，而forEach/map/filter/some/every/reduce/keys/values/entries/find/findIndex是用于遍历数组的。


- 什么是迭代器（Iterator）？
  > 迭代器是一种接口，为各种不同的数据结构提供统一的访问机制，任何数据结构只要部署了Iterator接口，就可以完成遍历操作。
  > 通过next()方法进行遍历，返回一个对象，对象有两个属性：value和done，value是当前遍历的值，done是布尔值，表示是否遍历结束。