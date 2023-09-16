## 问题抽象

- diff抽象
    1. 对于补丁包是什么逻辑不清楚
    2. 重新捋一遍整体逻辑

- patch抽象
    1. 如何在递归的时候给当前的dom元素打上patch
    2. 为什么instanceof Element就createElement否则就createTextNode  
    3. 为什么顶层调用.parentNode不会报错，还是不会在顶层调用
        正常顶层是不会发生改变的，顶层是root 


### diff算法
```tefcha
补丁包逻辑
声名全局变量patches补丁包对象
声名全局index
patches[index]:Array[]=[];
end
```

```tefcha
拿到新旧节点
调用diff函数
while 判断新旧节点是否不同    
    switch 判断新旧节点的变化
        case 新节点不存在
            patches[index]=curren.push({type:REMOVE,index})
        case 新旧节点都为字符串
            .push({type:TEXT,text:newNode})
        case 新旧节点type相等
            比较下一级子属性
            判断并push({type:ATTRS,attrs})
            递归子元素
            continue
        case 节点被替换
            push({type:REPLACE,})
        case 所有属性都相等
            break
结束递归打完补丁包
```

### patch方法
```tefcha
使用diff拿到patches补丁
while patch入参老节点真实dom，补丁包
    深度优先递归每一个老节点，拿到index
    if patches[index++]存在补丁
        拿到当前节点和当前补丁进行遍历
        switch 补丁类型
            case ATTRS
                遍历每一个新属性到oldNode上面
            case TEXT
                node.textContent=patch.text
            case REPLACE
                if patches.newNode instanceof Element
                    render(newNode)
                else
                    document.createTextNode
            case REMOVE

    else
        继续
结束循环
```
