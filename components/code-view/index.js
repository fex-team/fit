import React from 'react'
import {Collapse, CollPanel} from 'fit-collapse'
import {ScrollListenNail} from 'fit-scroll-listen'
import Bluekit from 'fit-bluekit'

export default class CodeView extends React.Component {
    render() {
        let info = {}

        // 解析markdown标题
        info.title = /^#\s(.*)/g.exec(this.props.md)[1]

        // 描述
        info.description = this.props.md.replace(/^#\s.*\n*/g, '')

        // 代码
        // 将 ../../src 换成 npm 包路径
        info.codeSource = this.props.code.replace(/..\/..\/src/g, this.props.npmName)

        info.codeInstance = this.props.children

        return (
            <ScrollListenNail store={this.props.store}
                              title={info.title}>
                <Bluekit {...info}/>
            </ScrollListenNail>
        )
    }
}
