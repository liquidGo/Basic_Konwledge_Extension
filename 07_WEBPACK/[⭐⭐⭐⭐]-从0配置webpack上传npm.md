# 从0配置webpack框架
## 前期准备
### MindMap

- 核心包、插件是什么？
- 通用化的方案是什么？
  - 如何支持移动端自动适配？
  - 支持选择移动端和PC端？
  - 环境变量？
  - 如何上传webpack到npm？
- 如何最快速的实现一个版本？
- index.js作用？



### StateDiagram

```mermaid
stateDiagram-v2
state 从0配置webpack发布到npm官网{
[*]-->第一版本尽快出: 配置核心内容
第一版本尽快出-->完善: 使用期间快速迭代并且完善包
完善-->[*]
}
```

### Flowchart

```mermaid
flowchart TD
subgraph "核心"
创建工程-->显示第一个Html-->配置CSS-->配置Less-->配置图片支持-->配置优化
end

subgraph "扩展"
支持markdown-->环境变量-->TS/EsLint等其他更方便的扩展内容
end
```

### TimeLine

```mermaid
timeline
基础: htmlWebpackPlugin<br>（配置文件引入、多入口）: public/index.html<br>src/index.js
```

