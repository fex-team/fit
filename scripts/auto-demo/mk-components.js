import fs from 'fs'
import mkdirp from 'mkdirp'
import readDirFiles from 'read-dir-files'
import _ from 'lodash'
import getDemoArray from './untils/get-demo-array'

const mkComponents = (config)=> {
    const categorys = config.categorys

    for (let categoryKey in categorys) {
        // pc tb 等等模块名
        mkdirp.sync(`src/components/${categoryKey}`)

        let categoryInfo = categorys[categoryKey]
        let componentsInfo = categorys[categoryKey].components || []
        Object.keys(componentsInfo).map((item)=> {
            categorys[categoryKey]['components'][item].map((component)=> {
                // 创建此demo的文件夹 eg: lib/pc/layout
                mkdirp.sync(`src/components/${categoryKey}/${component.path}`)

                // 最后要用到的代码块
                let demoImport = ''
                // 最后要用到的布局块
                let layoutString = ''

                // 跳过没有demo的组件
                let demoArray = getDemoArray(`lib/${categoryKey}/${component.path}/demo/index.js`)
                if (demoArray.length === 0)return

                demoArray.map((demoItem)=> {
                    // 首字母大写demo名
                    const camelDemoName = _.capitalize(_.camelCase(demoItem.name))
                    demoImport += `
                    import ${camelDemoName}Component from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/${categoryKey}/${component.path}/demo/lists/${demoItem.name}.js'
                    import ${camelDemoName}Code from 'text!../../../../lib/${categoryKey}/${component.path}/demo/lists/${demoItem.name}.js'
                    import ${camelDemoName}Markdown from '../../../../lib/${categoryKey}/${component.path}/demo/lists/${demoItem.name}.md'
                    `

                    layoutString += `
                    <Col span="${demoItem.row}" style={colStyle}>
                        <CodeView md={${camelDemoName}Markdown} code={${camelDemoName}Code}>
                            <${camelDemoName}Component/>
                        </CodeView>
                    </Col>
                    `
                })

                let text = `
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { Row, Col } from 'fit-layout'
                import Title from '../../../../components/title'
                import readme from '../../../../lib/${categoryKey}/${component.path}/readme.md'
                import '../../../../lib/${categoryKey}/${component.path}/demo'

                ${demoImport}

                const colStyle = {
                    padding: 10
                }

                export default class DemoBox extends React.Component {
                    constructor(props) {
                        super(props)
                        this.state = {}
                        document.title = '${component.name}'
                    }

                    render() {
                        return (
                            <div className="_namespace">
                                <Title>{readme}</Title>

                                <Row>
                                    ${layoutString}
                                </Row>

                            </div>
                        )
                    }
                }
                `

                fs.writeFile(`src/components/${categoryKey}/${component.path}/index.js`, text, (err)=> {
                    if (!err)return
                    console.log(`src/components/${categoryKey}/${component.path}/index.js fail: ${err}`)
                })
            })
        })
    }
}

export default mkComponents