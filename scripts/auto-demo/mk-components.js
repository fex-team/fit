import fs from 'fs'
import mkdirp from 'mkdirp'
import readDirFiles from 'read-dir-files'
import _ from 'lodash'
import getDemoArray from './utils/get-demo-array'
import getDocArray from './utils/get-doc-array'

const mkComponents = (config)=> {
    const categorys = config.categorys

    for (let categoryKey in categorys) {
        // pc tb 等等模块名
        mkdirp.sync(`src/components/${categoryKey}`)

        let categoryInfo = categorys[categoryKey]
        let componentsInfo = categorys[categoryKey].components || []
        let gitlabPrefix = categorys[categoryKey].gitlabPrefix
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

                        // loader 是 babel 还是 ts-loader
                        let loader = 'babel-loader'
                        if (demoItem.ext === 'tsx') {
                            loader = 'ts-loader'
                        }

                        demoImport += `
                    import ${camelDemoName}Component from 'react-hot-loader!${loader}!../../../../lib/${categoryKey}/${component.path}/demo/lists/${demoItem.name}.${demoItem.ext}'
                    import ${camelDemoName}Code from 'text!../../../../lib/${categoryKey}/${component.path}/demo/lists/${demoItem.name}.${demoItem.ext}'
                    import ${camelDemoName}Markdown from '../../../../lib/${categoryKey}/${component.path}/demo/lists/${demoItem.name}.md'
                    `

                        layoutString += `
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={${camelDemoName}Markdown}
                                      code={${camelDemoName}Code}>

                                    <${camelDemoName}Component/>

                            </CodeView>
                        </Col>
                    `
                    })
                }

                // 源码文档相关
                let sourceArray = []
                let sourceRootArray = `lib/${categoryKey}/${component.path}/src/index`

                if (fs.existsSync(sourceRootArray + '.tsx')) {
                    sourceArray = getDocArray(sourceRootArray + '.tsx')
                } else {
                    sourceArray = getDocArray(sourceRootArray + '.js')
                }

                if (sourceArray.length > 0) {
                    sourceArray.map((sourceItem)=> {
                        let sourceItemFileName = _.kebabCase(sourceItem)

                        if (fs.existsSync(sourceRootArray + '.tsx')) {
                            sourceImport += `
                        import ${sourceItem}Source from '../../../../lib/${categoryKey}/${component.path}/src/${sourceItemFileName}/index.tsx'
                        import ${sourceItem}SourceCode from 'text!../../../../lib/${categoryKey}/${component.path}/src/${sourceItemFileName}/index.tsx'
                        `
                        } else {
                            sourceImport += `
                        import ${sourceItem}Source from '../../../../lib/${categoryKey}/${component.path}/src/${sourceItemFileName}'
                        import ${sourceItem}SourceCode from 'text!../../../../lib/${categoryKey}/${component.path}/src/${sourceItemFileName}'
                        `
                        }

                        sourceString += `
                        <div style={docStyle}>
                            <CodeDoc code={${sourceItem}SourceCode} instance={${sourceItem}Source} />
                        </div>
                        `
                    })
                }

                let gitlabPath = `${gitlabPrefix}-${component.path}`
                if (gitlabPrefix === '') {
                    gitlabPath = component.path
                }

                let text = `
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { ScrollListenBox, ScrollListenNail , ScrollListen, createStore } from 'fit-scroll-listen'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import { Layout, Header, Section, Sidebar } from 'fit-layout-global'
                import Title from '../../../../components/title'
                import SidebarComponent from '../../../../components/side-bar'
                import readme from '../../../../lib/${categoryKey}/${component.path}/readme.md'
                import '../../../../lib/${categoryKey}/${component.path}/demo'

                const store = createStore()

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
                            <div className="_namespace">
                                <Layout>
                                    <Section>
                                        <Title>{readme}</Title>
                                        <ScrollListenBox store={store}>
                                            {Content}
                                        </ScrollListenBox>
                                    </Section>
                                    <Sidebar direction="right"
                                             width="120">
                                        <SidebarComponent gitlabUrl="http://gitlab.baidu.com/tb-component/${gitlabPath}/tree/master"
                                 onChange={this.handlePageChange.bind(this)}/>
                                        <ScrollListen store={store}/>
                                    </Sidebar>
                                </Layout>
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