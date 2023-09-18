## HTML-1

### 本章问题

- 语义化标签
- innerHTML、nodeValue、textContent 之间的区别
- 虚拟 dom 以及 diff 算法延伸
- 浏览器渲染过程
- 回流和重绘
- document 以外的子对象

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

1. 渲染 HTML 构建 DOM 树
2. 遇到link标签请求CSS并渲染 CSS 构建 CSSOM
3. 遇到JS请求JS（会在CSSOM同步执行以后执行）
4. 生成渲染树：HTML+CSS（会在JS执行完毕才会执行）
5. 确定布局结构
6. 绘制像素信息
7. 交由 GPU 进行显示
   <br/>
   <img style="width:30vw" src="http://24k.live/common/github/html/cssom.png" />
