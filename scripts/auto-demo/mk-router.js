import fs from 'fs'
import _ from 'lodash'

const mkRouter = (categorys)=> {
    let routerPath = ''
    let routerComponent = ''

    for (let categoryKey in categorys) {
        // pc tb 等等模块名
        routerPath += `
        // ${categoryKey}
        `

        // 判断各模块的首页
        let indexComponent = ''
        switch (categoryKey) {
        case 'pc':
            indexComponent = 'pcHome'
            break
        case 'mobile':
            indexComponent = 'fitenColorComponent'
            break
        case 'tb':
            indexComponent = 'tbHome'
            break
        }

        // oxp 暂时没有
        if (categoryKey === 'oxp')continue

        routerComponent += `
        <Route path="/${categoryKey}"
               component={Layout}>
            <IndexRoute component={${indexComponent}}/>
        `

        let categoryInfo = categorys[categoryKey]
        let componentsInfo = categorys[categoryKey].components || []
        Object.keys(componentsInfo).map((item)=> {
            for (let component of categorys[categoryKey]['components'][item]) {
                let wholeComponentName = categoryInfo.prefix + '-' + component.path + '-component'
                wholeComponentName = _.camelCase(wholeComponentName).replace(/\s/g, '')

                routerPath += `
                import ${wholeComponentName} from './components/${categoryKey}/${component.path}'
                `

                routerComponent += `
                <Route path="${component.path}"
                       component={${wholeComponentName}}/>
                `
            }
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
        import pcHome from './home'
        import tbHome from './components/tb'


        ${routerPath}

        const history = useBasename(createHistory)({
            basename: '/'
        })

        const MainRouter = (
            <Router history={history}>
                <Redirect from="/"
                          to="pc"></Redirect>
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