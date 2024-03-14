## Loaders
### MindMap
- Loaders的作用是什么？
- 如何使用Loaders？
- 有哪些常见的Loaders？
- 如何编写自己的Loaders？

### Flowchart
- Loaders的作用是什么？
  - 由于Webpack自身只能处理js文件，所以需要Loaders来处理其他类型的文件。

- 如何使用Loaders？
  - Loaders的配置有4个：
    - test：匹配文件的正则表达式
    - use：使用的Loader
    - include/exclude：包含/排除的文件夹
    - options：Loader的配置项