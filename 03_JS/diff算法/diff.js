const DOM_TYPE = {
    ATTRS: "ATTRS",
    TEXT: "TEXT"
}

// TODO 为写入层级递归
const diff = (oldTree, newTree) => {
    const patches = {};
    let index = 0;

    walk(oldTree, newTree, index, patches);
    return patches;


}

const isString = (node) => {
    return Object.prototype.toString.call(node) === "[object String]"
}

const walk = (oldNode, newNode, index, patches) => {
    const currentPath = [];
    // TODO 判断是否为字符节点
    if (isString(oldNode) && isString(newNode)) {
        if (oldNode !== newNode) {
            currentPath.push({
                type: DOM_TYPE.TEXT,
                text: newNode
            })
        }
    } else if (oldNode.type === newNode.type) {
        const attrs = diffArr(oldNode.props, newNode.props)
        if (Object.keys(attrs).length > 0) {
            currentPath.push({
                type: DOM_TYPE.ATTRS,
                attrs
            })
        }
        if (currentPath.length > 0) {
            patches[index] = currentPath
        }
    }
}


const diffArr = (oldAttrs, newAttrs) => {

    const patch = {};

    for (let key in oldAttrs) {
        if (oldAttrs[key] !== newAttrs[key]) {
            patch[key] = newAttrs[key]
        }
    }
    for (let key in newAttrs) {
        if (!oldAttrs.hasOwnProperty(key)) {
            patch[key] = [key]
        }
    }
    return patch;
}
