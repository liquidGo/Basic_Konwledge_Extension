let INDEX_PATCH = 0
const patch = (node, patches) => {
    walks(node, patches)
}

const walks = (node, patches) => {
    const childrenNode = node.childNodes;
    const currentPath = patches[INDEX_PATCH++];

    childrenNode.forEach(child => walks(child, patches))

    if (currentPath) {
        doPatch(node, currentPath)
    }
}

const doPatch = (node, patches) => {
    patches.forEach(patch => {
        

        switch (patch.type) {

            case DOM_TYPE.ATTRS:
                for (let key in patch.attrs) {
                    let value = patch.attrs[key]
                    if (value) {

                        
                        setAttr(node, key, value)
                    } else {
                        node.removeAttribute(key);
                    }
                }
                break;
            case DOM_TYPE.TEXT:
                node.textContent = patch.text;
                break;
            case DOM_TYPE.REPLACE:
                let newNode = (patch.newNode instanceof Element)
                    ? render(patch.newNode)
                    : document.createTextNode(newNode);
                node.parentNode.replaceChild(newNode, node);
                break;
            case DOM_TYPE.REMOVE:
                node.parentNode.removeChild(node);
                break;
        }
    })
}