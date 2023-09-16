## 虚拟dom-diff算法

### 前提
- 什么是虚拟dom？
- 什么是diff算法？
- diff算法应用场景？
- 如何实现diff算法？

### 要素

### 总结

#### 什么是虚拟dom？
    用JS对象模拟DOM中的节点，再通过特定的render函数渲染成真实的节点。
<img style="width:100vw;" src="http://24k.live/common/github/html/dom.png"/>

### 什么是diff算法？

    diff算法是一种对比算法。对比两者是旧虚拟DOM和新虚拟DOM，对比出是哪个虚拟节点更改了，找出这个虚拟节点并只更新这个虚拟节点所对应的真实节点而不用更新其他数据没发生改变的节点，实现精准地更新真实DOM，进而提高效率。

### diff算法应用场景？
    用来修改DOM的一小段,不会引起dom树的重绘

### 如何实现diff算法？
[diff算法简单实现(一眼看懂)](../03_JS/diff算法/分析.md)    