import fs from 'fs'
import mkdirp from 'mkdirp'
import readDirFiles from 'read-dir-files'
import _ from 'lodash'
import getDemoArray from './untils/get-demo-array'
import getDocArray from './untils/get-doc-array'

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

                // 引用demo
                let demoImport = ''
                // 引用doc源码
                let sourceImport = ''
                // doc布局块
                let sourceString = ''
                // demo布局块
                let layoutString = ''

                // demo相关
                let demoArray = getDemoArray(`lib/${categoryKey}/${component.path}/demo/index.js`)
                if (demoArray.length > 0) {
                    demoArray.map((demoItem)=> {
                        // 首字母大写demo名
                        const camelDemoName = _.capitalize(_.camelCase(demoItem.name))
                        demoImport += `
                    import ${camelDemoName}Component from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/${categoryKey}/${component.path}/demo/lists/${demoItem.name}.js'
                    import ${camelDemoName}Code from 'text!../../../../lib/${categoryKey}/${component.path}/demo/lists/${demoItem.name}.js'
                    import ${camelDemoName}Markdown from '../../../../lib/${categoryKey}/${component.path}/demo/lists/${demoItem.name}.md'
                    `

                        layoutString += `
                    <Col span="24" style={colStyle}>
                        <CodeView md={${camelDemoName}Markdown} code={${camelDemoName}Code}>
                            <${camelDemoName}Component/>
                        </CodeView>
                    </Col>
                    `
                    })
                }

                // 源码文档相关
                let sourceArray = getDocArray(`lib/${categoryKey}/${component.path}/src/index.js`)
                if (sourceArray.length > 0) {
                    sourceArray.map((sourceItem)=> {
                        let sourceItemFileName = _.kebabCase(sourceItem)
                        sourceImport += `
                        import ${sourceItem}Source from '../../../../lib/${categoryKey}/${component.path}/src/${sourceItemFileName}'
                        import ${sourceItem}SourceCode from 'text!../../../../lib/${categoryKey}/${component.path}/src/${sourceItemFileName}'
                        `

                        sourceString += `
                        <div style={docStyle}>
                            <CodeDoc code={${sourceItem}SourceCode} instance={${sourceItem}Source} />
                        </div>
                        `
                    })
                }

                let text = `
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { ScrollListenContainer, ScrollListenBox, ScrollListenNail , ScrollListen } from 'fit-scroll-listen'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import { Layout, Header, Section, Sidebar } from 'fit-layout-global'
                import Title from '../../../../components/title'
                import readme from '../../../../lib/${categoryKey}/${component.path}/readme.md'
                import '../../../../lib/${categoryKey}/${component.path}/demo'

                ${sourceImport}

                ${demoImport}

                const colStyle = {
                    padding: 10
                }

                const docStyle = {
                    margin: 10,
                    background: 'white'
                }

                export default class DemoBox extends React.Component {
                    constructor(props) {
                        super(props)
                        this.state = {
                            page: 'demo'
                        }
                        document.title = '${component.name}'
                    }

                    handlePageChange(value) {
                        this.setState({
                            page: value
                        })
                    }

                    render() {
                        let Content = null

                        switch (this.state.page) {
                        case 'demo':
                            Content = (
                                <Row>
                                    ${layoutString}
                                </Row>
                            )
                            break
                        case 'document':
                            Content = (
                                <div>
                                    ${sourceString}
                                </div>
                            )
                            break
                        }

                        return (
                            <ScrollListenContainer className="_namespace">
                                <Layout>
                                    <Header>
                                        <Title gitlabUrl="http://gitlab.baidu.com/tb-component/${categoryKey}-${component.path}/tree/master"
                                               onChange={this.handlePageChange.bind(this)}>{readme}</Title>
                                    </Header>

                                    <Section>
                                        <ScrollListenBox>
                                            {Content}
                                        </ScrollListenBox>
                                    </Section>
                                    <Sidebar direction="right"
                                             width="120">
                                        <ScrollListen/>
                                    </Sidebar>
                                </Layout>
                            </ScrollListenContainer>
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