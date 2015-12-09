import React from 'react'
import Highlight from 'react-highlight'
import marked from 'marked'

export default class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        // 处理markdown信息
        // 根据 --- 拆分为描述块和代码块
        let infoArray = this.props.children.split('---')

        let description = marked(infoArray[0])
        let code = infoArray[1].replace(/(````jsx|````)/g, '').replace(/^\s*\n*/g, '')

        return (
            <div className="bar-header">
                <div className="title"
                     dangerouslySetInnerHTML={{__html: description}}></div>
                <Highlight className='jsx'>
                    {code}
                </Highlight>
            </div>
        )
    }
}