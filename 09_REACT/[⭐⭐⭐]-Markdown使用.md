## 写入Markdown编辑器最优方案
### 灵感
- 如何兼容多端发布的问题？
- Markdown的css样式在哪里配置？
- 有哪些兼容性问题？
- 都有哪些Markdown编辑器？
- 遇到过哪些问题？

### 总结
- 已踩坑多款Markdown编辑器，如果要求功能多的Markdown编辑器，推荐wangEditor编辑器，内置表格还有一些其他功能，不用费心去兼容其他的第三方功能。
- 显示Markdown第三方包：React-markdown、markdown-to-jsx
- markdown样式方案：github-markdown-css、markdown-css
- Markdown踩坑记录：
  - Quill：自动将图片转换成base64，导致渲染时卡死、插入表格等功能并没有内置，需要使用第三方包进行兼容，第三方包文档不全，导致使用起来很麻烦。
  - wangEditor：内置表格、图片上传、代码块等功能，但是在渲染时，需要自己去配置样式，不然会出现样式错乱的问题，使用起来很方便，但是需要自己去配置样式。