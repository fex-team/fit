import React from 'react'
import AutoComplete from 'fit-auto-complete'
import allComponents from '../../all-component.json'
import mapModule from '../../scripts/module-manage/utils/map-module'

const opts = {
    datas: [],
    autoFilter: true,
    inputOpts: {
        placeholder: '搜索组件..'
    }
}

mapModule(allComponents, (dirPath, moduleName, gitlabPrefix, info, prefix)=> {
    opts.datas.push({
        text: info.name + ' ' + moduleName,
        value: moduleName
    })
})

export default class SearchComponents extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <AutoComplete {...opts}/>
        )
    }
}

SearchComponents.defaultProps = {}