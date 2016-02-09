import fs from 'fs'
import _ from 'lodash'
import getDemoArray from './utils/get-demo-array'

const mkRouter = (categorys)=> {
    let routerPath = ''
    let routerComponent = ''
    let homeImport = ''

    for (let categoryKey in categorys) {
        // pc tb 等等模块名
        routerPath += `
        // ${categoryKey}
        `

        // oxp 暂时没有
        if (categoryKey === 'oxp')continue

        homeImport += `
        import ${categoryKey}Home from '../category-home/${categoryKey}.js'
        `

        routerComponent += `
        <Route path="/${categoryKey}"
               component={Layout}>
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
        import { Router, Route, IndexRoute, Redirect } from 'react-router'
        import { createHistory, useBasename } from 'history'

        import Layout from './layout'
        import Home from './home'
        import Components from './components'
        ${homeImport}

        ${routerPath}

        const history = useBasename(createHistory)({
            basename: '/'
        })

        const MainRouter = (
            <Router history={history}>
                <Route path="/" component={Home}/>
                <Route path="/components" component={Components}/>
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