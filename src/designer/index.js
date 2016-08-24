import React from 'react'
import Gaea from 'fit-gaea'
import data from './data.json'
import _ from 'lodash'

import WebComponent from '../../lib/pc/gaea/src/web-components/index'

import Button from './components/button'
import Title from './components/title'

const info = {
    components            : [Title, Button],
    version               : '1.3.0',
    defaultValue          : data,
    baseComponents        : WebComponent,
    versionInit           : (save)=> {
        save([{
            date: new Date(),
            info: data,
            id  : _.uniqueId('test_')
        }, {
            date       : new Date(),
            info       : data,
            isPublished: true,
            publishCode: '1.0.0',
            id         : _.uniqueId('test_')
        }, {
            date       : new Date(),
            info       : data,
            isPublished: true,
            publishCode: '1.1.0',
            id         : _.uniqueId('test_')
        }, {
            date       : new Date(),
            info       : data,
            isPublished: true,
            publishCode: '1.2.0',
            id         : _.uniqueId('test_')
        }, {
            date       : new Date(),
            info       : data,
            isPublished: true,
            publishCode: '1.3.0',
            id         : _.uniqueId('test_')
        }], true)
    },
    onSave                : (info)=> {
        info.saveToVersion(_.uniqueId('test_'))
    },
    onOnlineModalShow     : (callback)=> {
        callback([{
            key  : 3,
            value: '1.3.0'
        }, {
            key  : 2,
            value: '1.2.0'
        }, {
            key  : 1,
            value: '1.1.0'
        }, {
            key  : 0,
            value: '1.0.0'
        }])
    },
    onOnlineClick         : (key)=> {
        console.log(key)
    },
    onLoadMoreVersionClick: (callback)=> {
        callback([{
            date: new Date(),
            info: data,
            id  : _.uniqueId('test_')
        }, {
            date: new Date(),
            info: data,
            id  : _.uniqueId('test_')
        }], true)
    },
    onPublish             : (id, version, remarks, save)=> {
        save()
    }
}

export default class Designer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        document.title = '在线编辑器 - Gaea'
    }

    render() {
        return (
            <Gaea {...info}/>
        )
    }
}