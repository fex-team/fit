import React from 'react'
import AutoComplete from 'fit-auto-complete'
import allComponents from '../../all-component.json'
import mapModule from '../../scripts/module-manage/utils/map-module'

export default class SearchComponents extends React.Component {
    constructor(props) {
        super(props)

        this.autoCompleteOpts = {
            datas: [],
            autoFilter: true,
            inputOpts: {
                placeholder: '搜索组件..',
                width: 195
            },
            onSelect: (value)=> {
                this.props.history.pushState(null, `/components/${value}`)
            }
        }

        mapModule(allComponents, (dirPath, moduleName, gitlabPrefix, info, prefix)=> {
            this.autoCompleteOpts.datas.push({
                text: info.name + ' ' + moduleName,
                value: `${dirPath}/${moduleName}`
            })
        })
    }

    render() {
        return (
            <AutoComplete {...this.autoCompleteOpts}/>
        )
    }
}