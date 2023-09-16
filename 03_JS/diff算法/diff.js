const DOM_TYPE = {
    ATTRS: "ATTRS",
    TEXT: "TEXT",
    REMOVE: "REMOVE",
    REPLACE: "REPLACE"
}
let INDEX = 0;

const diff = (oldTree, newTree) => {
    const patches = {};

    walk(oldTree, newTree, INDEX, patches);
    return patches;
}

const diffChildren = (oldNode, newNode, patches) => {

    oldNode.forEach((v, i) => {
        walk(v, newNode[i], ++INDEX , patches);
    })
}

const isString = (node) => {
    return Object.prototype.toString.call(node) === "[object String]"
}

const walk = (oldNode, newNode, index, patches) => {
    const currentPath = [];
    if (!newNode) {
        currentPath.push({
            type: DOM_TYPE.REMOVE,
            index
        })
    } else if (isString(oldNode) && isString(newNode)) {

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
        diffChildren(oldNode.children, newNode.children, patches);
    } else {
        currentPath.push({
            type: DOM_TYPE.REPLACE,
            newNode
        })
    }
    

    if (currentPath.length > 0) {
        patches[index] = currentPath

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
