let isFind = false

const findTreeByName = (children, childrenName)=> {
    isFind = false
    let findTree = []
    findTreeByNameFunc(findTree, children, childrenName)
    return findTree
}

// 根据子child名寻找child
const findTreeByNameFunc = (findTree, children, childrenName, index = 0) => {
    // 搜索树最大20层
    if (index > 20)return

    let findTreeChildren = {
        children: children,
        index: 0
    }

    if (findTree.length + 1 < index) {
        findTree.push(findTreeChildren)
    } else {
        findTree[index] = findTreeChildren
    }

    React.Children.map(children, (item, itemIndex)=> {
        if (isFind)return
        findTree[index].index = itemIndex
        if (item.type && item.type.name === childrenName) {
            // 终于找到你
            isFind = true
            deleteFindTree(findTree, childrenName)
        } else if (item.props && item.props.children) {
            findTreeByNameFunc(findTree, item.props.children, childrenName, index + 1)
        }
    })
}

// 递归删除不相关的字child（查找时会多查）
const deleteFindTree = (findTree, childrenName) => {
    let find = false
    if (findTree.length === 0)return []
    let lastChildren = findTree[findTree.length - 1].children

    if (lastChildren.constructor.name === 'Array') {
        lastChildren.map((item)=> {
            if (!item.type)return
            if (item.type.name === childrenName) {
                find = true
            }
        })
    } else {
        if (lastChildren.type && lastChildren.type.name === childrenName) {
            find = true
        }
    }

    if (!find) {
        findTree.pop()
        deleteFindTree(findTree, childrenName)
    } else {
        return findTree
    }
}

// 根据tree寻找目标
const getTargetByTree = (findTree)=> {
    if (findTree.length === 0)return null
    let lastChildren = findTree[findTree.length - 1].children
    if (lastChildren.constructor.name === 'Array') {
        return lastChildren[findTree[findTree.length - 1].index]
    } else {
        return lastChildren
    }
}

// 递归生成children
const createChildren = (children, changeProps, deep = 0)=> {
    let Childrens = React.Children.map(children, (item)=> {
        let props = Object.assign({}, item.props)

        if (item.props && item.props.children) {
            let newProps = changeProps(props, item, deep)
            if (newProps !== undefined) {
                props = newProps
            }
            return React.cloneElement(item, props, createChildren(item.props.children, changeProps, deep + 1))
        } else if (item.props && !item.props.children) {
            let newProps = changeProps(props, item, deep)
            if (newProps !== undefined) {
                props = newProps
            }
            return React.cloneElement(item, props)
        } else {
            return item
        }
    })

    // 如果是一个长度为1的数组,则去掉这个数组
    if (Childrens.constructor.name === 'Array' && Childrens.length === 1) {
        Childrens = Childrens[0]
    }

    return Childrens
}

export default findTreeByName
export { findTreeByName, getTargetByTree, createChildren }