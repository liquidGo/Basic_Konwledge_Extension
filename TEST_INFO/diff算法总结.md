## 执行解析

### 分解
diff算法简单版总计分三个部分
- 创建、渲染虚拟dom部分
- diff算法比较打入补丁部分
- patch使用补丁部分

### 模式识别
- 深度优先遍历
- 全局都是使用的老、新节点、补丁、当前index
- 补丁以深度优先的index作为key值

### 抽象
- 总体逻辑需要冲捋一下
- 各部分需要细化一下
- 调用的地方需要看一下

### 流程

```tefcha
总分
通过Element类创建虚拟dom
通过diff写入补丁包
通过patch函数进行补丁包的更新
通过render进行渲染为真实dom
appendChild进#root
```

```tefcha
Element相关函数
Element类写入(type,children,props)
createElement进行new Element
render创建真实DOM并进行遍历写入props
switch props[key]
    case "value"
        node.value=value
    case "style"
        node.style.cssText=value
    case
        node.setAttribute(key,value)
继续遍历当前element的子元素
if child instanceof Element
    child=递归render
else 
    child=createTextNode文本节点并插入当前元素
返回el
```

```tefcha
diff算法相关
声明全局INDEX/patches={}
while 比较新旧节点
    switch 新旧节点
        case 新节点不存在(删除了节点)
            currentPath.push({type:REMOVE,index})
        case 新旧节点都为string
            if old!==newNode
                currentPath.push({type:TEXT,text:newNode})
        case 新旧节点相同
            遍历比较新旧节点props
            if 不同
                currenPath.push({type:ATTRS,attrs})
            递归比较下一级的children
            continue
        case 新旧节点不同
            currentPath({type:REPLACE,newNode})
    if currentPath.length>0
        patches[index]=currentPath
返回patches
```

```tefcha
patch补丁相关
声明全局INDEX
取当前元素的childNodes
取当前元素的补丁，操作真实dom
if 当前元素存在补丁打入补丁
    switch 遍历补丁
        case ATTRS类型
            遍历props添加属性(调用封装好的方法)
        case TEXT
            node.textContent=patch.text
        case REPLACE
            if newNode instanceof Element
                render(patch.newNode)
            else
                createTextNode
            替换元素，node.parentNode.repalceChild(newNode,node)
        case REMOVE
            node.parentNode.removeChild(node)
插入到#root顶层真实元素中

```