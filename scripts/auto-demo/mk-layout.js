import fs from 'fs'
import md5 from 'md5'
import _ from 'lodash'
import mkdirp from 'mkdirp'
import getDemoArray from './utils/get-demo-array'

const mkLayout = (categorys, program)=> {
    for (let categoryKey in categorys) {
        // 如果是 travis 模式,跳过内部模块
        if (program.travis && categorys[categoryKey].access === 'private'){
            continue
        }

        // pc tb 等等模块名
        let menus = ''
        let renderFactory = ''
        let render = ''

        let categoryInfo = categorys[categoryKey]
        let componentsInfo = categorys[categoryKey].components || []
        Object.keys(componentsInfo).map((item)=> {
            let nameMd5 = md5(item)

            // 为了语法,定义处必须换行
            menus += `\nconst menu${nameMd5} = [`

            renderFactory += `
            let Menu${nameMd5} = menuFactory(menu${nameMd5})
            `

            render += `
            <div className="title">${item}</div>
            {Menu${nameMd5}}
            `

            categorys[categoryKey]['components'][item].map((component)=> {
                // 跳过没有demo的组件
                let demoArray = getDemoArray(`lib/${categoryKey}/${component.path}/demo/index.js`)

                if (demoArray.length>0) {
                    menus += `
                    {
                        title: '${component.name} ${_.capitalize(_.camelCase(component.path))}',
                        path: '/${categoryKey}/${component.path}'
                    },
                    `
                }
            })

            menus += `]`
        })

        let text = `
        import React from 'react'
        import menuFactory from '../menu-factory'

        ${menus}

        export default class Layout extends React.Component {
            constructor(props) {
                super(props)
                this.state = {}
            }

            render() {
                ${renderFactory}

                return (
                    <div className="_namespace">
                        ${render}
                    </div>
                )
            }
        }
        `

        mkdirp(`src/components/layout/left-menu-${categoryKey}`, (err)=> {
            if (err) {
                return console.log(`mkdir src/components/layout/left-menu-${categoryKey} fail`, error)
            }

            fs.writeFile(`src/components/layout/left-menu-${categoryKey}/index.js`, text, (err)=> {
                if (!err)return
                console.log(`mk src/components/layout/left-menu-${categoryKey}/index.js fail: ${err}`)
            })
        })
    }
}

export default mkLayout