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

        mapModule(allComponents, (info)=> {
            this.autoCompleteOpts.datas.push({
                text: info.module.name + ' ' + info.module.path,
                value: `${info.categoryName}/${info.module.path}`
            })
        })
    }

    render() {
        return (
            <AutoComplete {...this.autoCompleteOpts}/>
        )
    }
}