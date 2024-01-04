## HTML-1

### 本章问题

- 语义化标签
- innerHTML、nodeValue、textContent 之间的区别
- 虚拟 dom 以及 diff 算法延伸
- 浏览器渲染过程
  - script标签会阻塞页面加载吗？
- 回流和重绘

#### 新特性

- 语义化标签

  > 语义化标签就是有含义的标签 [查看全部 html5 新增标签](https://blog.csdn.net/qq_60497930/article/details/127415447)
  > 优点：

  1. 代码结构更加清晰

  2. 有利于搜索引擎优化 SEO

- 表单增强
  > 表单标签增加了多种 type 新类型 [查看全部新增](https://www.ngui.cc/zz/1646448.html?action=onClick)
- 音视频标签
  > 新增了音视频播放的标签 [了解详情](https://blog.csdn.net/weixin_49346755/article/details/127126770)
- canvas 和 svg
  > [详情](https://www.jianshu.com/p/7bb4896be61c?utm_medium=timeline&utm_source=oschina-app)
- 拖拽
  > [详情](https://www.runoob.com/html/html5-draganddrop.html)

#### innerHtml/textContent/innerText

- innerHtml：会输出标签
- innerText：会解析标签，只输出文字
- textContent：会解析标签，会输出把标签位置  
  [详情](https://jingyan.baidu.com/article/6b1823090f8c1bfa59e1596a.html)

#### 虚拟 dom 相关

[查看源代码](./[⭐⭐⭐⭐]-diff算法详解.md)

#### 浏览器渲染过程

1. DomTree：渲染 HTML 构建 DOM 树
2. CssTree：遇到link标签请求CSS并渲染 CSS 构建 CSSOM
3. 遇到JS请求JS（会在CSSOM同步执行以后执行）
4. RenderTree：生成渲染树：HTML+CSS（会在JS执行完毕才会执行）
5. Layout：根据RenderTree计算每个节点的信息
6. Painting：绘制像素信息
7. 交由 GPU 进行显示
   <br/>
   <img style="width:30vw" src="http://24k.live/common/github/html/cssom.png" />

#### Script标签对页面加载的影响
> 分三种情况处理Script标签
```
1. 正常情况script：会阻塞页面渲染结果
2. <script async="async">：不会阻塞页面执行,不会按照脚本顺序执行,DOMContentLoaded不会等待执行完毕再执行
3. <script defer="defer">：不会阻塞页面执行,会按照脚本先后顺序执行,DOMContentLoaded会等待执行完毕再执行
```
#### 重绘和回流
- 重绘：元素的属性发生改变并不会影响RenderTree中的布局，这时只会引起重绘。
- 回流/重排：当元素的属性发生改变，RenderTree中布局、尺寸大小、隐藏的属性发生变化的时候就会引起重排。
> 回流一定引起重绘，重绘不一定引起回流。