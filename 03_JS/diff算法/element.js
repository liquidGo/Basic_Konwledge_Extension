class Element {
    constructor(type, props, children) {
        this.type = type;
        this.props = props;
        this.children = children
    }
}

const setAttr = (node, key, value) => {
    if (typeof node === 'string') return;
    switch (key) {
        case "value":
            if (node.tagName.toUpperCase() === "INPUT" ||
                node.tagName.toUpperCase() === "TEXTAREA") {
                node.value = value;
            } else {
                node.setAttribute(key, value)
            }
            break;
        case "style":
            node.style.cssText = value;
            break;
        default:
            node.setAttribute(key, value);
            break;
    }
}

const createElement = (type, props, children) => {
    return new Element(type, props, children)
}

const render = (element) => {
    const el = document.createElement(element.type);
    for (let key in element.props) {
        setAttr(el, key, element.props[key])
    }

    element.children.forEach(child => {
        child = (child instanceof Element)
            ? render(child)
            : document.createTextNode(child)
        el.appendChild(child)
    })
    return el;
}

const renderDom = (el, target) => {
    target.appendChild(el)
}

// export default {
//     Element,
//     createElement,
//     render,
//     renderDom
// }