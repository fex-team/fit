import React from 'react'
import { Tree, TreeNode } from 'fit-tree'
import './index.scss'

const stringRender = (obj, key)=> {
    return (
        <div>
            <span className="key">{key}</span>:
            <span className="string"> "{obj[key]}"</span>
        </div>
    )
}

const numberRender = (obj, key)=> {
    return (
        <div>
            <span className="key">{key}</span>:
            <span className="number"> {obj[key]}</span>
        </div>
    )
}

const boolRender = (obj, key)=> {
    return (
        <div>
            <span className="key">{key}</span>:
            <span className="bool"> {obj[key] ? `true` : `false`}</span>
        </div>
    )
}

const arrayRender = (obj, key)=> {
    return (
        <div>
            <span className="key">{key}</span>:
            <span className="array"> Array[{obj[key].length}]</span>
        </div>
    )
}

const objectRender = (obj, key)=> {
    return (
        <div>
            <span className="key">{key}</span>:
            <span className="object"> Object</span>
        </div>
    )
}

const parseJson = (obj)=> {
    return Object.keys(obj).map((key, index)=> {
        switch (obj[key].constructor.name) {
        case 'String':
            return (
                <TreeNode render={stringRender.bind(this,obj,key)}
                          key={index}/>
            )
            break
        case 'Number':
            return (
                <TreeNode render={numberRender.bind(this,obj,key)}
                          key={index}/>
            )
            break
        case 'Boolean':
            return (
                <TreeNode render={boolRender.bind(this,obj,key)}
                          key={index}/>
            )
            break
        case 'Array':
            let arrayChilds = parseJson(obj[key])
            return (
                <TreeNode render={arrayRender.bind(this,obj,key)}
                          key={index}>
                    {arrayChilds}
                </TreeNode>
            )
            break
        case 'Object':
            let objChilds = parseJson(obj[key])
            return (
                <TreeNode render={objectRender.bind(this,obj,key)}
                          key={index}>
                    {objChilds}
                </TreeNode>
            )
            break
        }
    })
}

export default class JsonTree extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        let TreeContent = parseJson(this.props.json)
        console.log(TreeContent)

        return (
            <div className="_namespace">
                <Tree>
                    {TreeContent}
                </Tree>
            </div>
        )
    }
}

JsonTree.defaultProps = {
    json: {}
}