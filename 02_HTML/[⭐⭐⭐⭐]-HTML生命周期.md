## HTML生命周期相关

### 问题
- 什么是生命周期？
- HTML有哪些生命周期？
- 什么是DOMContentLoaded？
- 什么是onload？
- 什么是onbeforeunload？
- 如何使用这些事件？
- React的生命周期和HTML的生命周期有什么关系？是基于HTML生命周期实现的吗？

### 总结
- 什么是生命周期？
  > 页面从创建到销毁的过程。
- HTML有哪些生命周期？
  > DOMContentLoaded、onload、onbeforeunload
- 什么是DOMContentLoaded？
  > DOMContentLoaded事件在DOM加载完成后触发，此时图片、视频等资源可能还没有加载完成。
- 什么是onload？
  > onload事件在页面所有资源加载完成后触发。
- 什么是onbeforeunload？
  > onbeforeunload事件在页面关闭前触发。
- 如何使用这些事件？
  > 通过addEventListener添加事件监听。    
  > 举例：
    ```js
    document.addEventListener('DOMContentLoaded', () => {
      console.log('DOMContentLoaded');
    });
    ```
- React的生命周期和HTML的生命周期有什么关系？是基于HTML生命周期实现的吗？
  > React生命周期并不是基于HTML生命周期实现的，但是React的生命周期和HTML的生命周期有相似之处。