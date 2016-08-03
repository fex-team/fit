import fs from 'fs'
import _ from 'lodash'
import getDemoArray from './utils/get-demo-array'

const mkRouter = (categorys, program)=> {
    let routerPath = ''
    let routerComponent = ''
    let homeImport = ''

    for (let categoryKey in categorys) {
        // 如果是 travis 模式,跳过内部模块
        if (program.travis && categorys[categoryKey].access === 'private') {
            continue
        }

        // pc tb 等等模块名
        routerPath += `
        // ${categoryKey}
        `

        // oxp 暂时没有
        if (categoryKey === 'oxp')continue

        homeImport += `
        import ${categoryKey}Home from '../category-home/${categoryKey}'
        `

        routerComponent += `
        <Route path="/components/${categoryKey}"
               component={ComponentsLayout}>
            <IndexRoute component={${categoryKey}Home}/>
        `

        let categoryInfo = categorys[categoryKey]
        let componentsInfo = categorys[categoryKey].components || []
        Object.keys(componentsInfo).map((item)=> {
            categorys[categoryKey]['components'][item].map((component)=> {
                // 跳过没有demo的组件
                let demoArray = getDemoArray(`lib/${categoryKey}/${component.path}/demo/index.js`)
                if (demoArray.length === 0)return

                let wholeComponentName = categoryInfo.prefix + '-' + component.path + '-component'
                wholeComponentName = _.camelCase(wholeComponentName).replace(/\s/g, '')

                routerPath += `
                import ${wholeComponentName} from './components/${categoryKey}/${component.path}'
                `

                routerComponent += `
                <Route path="${component.path}"
                       component={${wholeComponentName}}/>
                `
            })
        })

        routerComponent += `
        </Route>
        `
    }

    let text = `
        import React from 'react'
        import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router'

        import ComponentsLayout from './components/layout'
        import Home from './home'
        import Designer from './designer'
        import Components from './components'
        import ComponentsWriteStandard from './components/write-standard'
        import ComponentsChangeLog from './components/change-log'
        import ComponentsDoc from './components/doc'
        ${homeImport}

        ${routerPath}

        const MainRouter = (
            <Router history={browserHistory}>
                <Route path="/" component={Home}/>
                <Route path="/components" component={Components}/>
                <Route path="/designer" component={Designer}/>
                <Route path="/components/write-standard" component={ComponentsWriteStandard}/>
                <Route path="/components/doc" component={ComponentsDoc}/>
                <Route path="/components/change-log" component={ComponentsChangeLog}/>
                ${routerComponent}
            </Router>
        )

        export default MainRouter
    `

    fs.writeFile('src/router.js', text, (err)=> {
        if (!err)return
        console.log(`mk src/router.js fail: ${err}`)
    })
}

export default mkRouter