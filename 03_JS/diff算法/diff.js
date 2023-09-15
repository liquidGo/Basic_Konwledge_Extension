import { DOM_TYPE } from './constants'

// TODO 未使用递归
const diff = (oldTree, newTree) => {
    const patches = {};
    let index = 0;

    walk(oldTree, newTree, index, patches);
    return patches;

}
const walk = (oldNode, newNode, index, patches) => {
    const currentPath = []
    if (oldNode.type === newNode.type) {
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
