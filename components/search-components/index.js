import React from 'react'
import AutoComplete from 'fit-auto-complete'
import allComponents from '../../all-component.json'
import {browserHistory} from 'react-router'
import mapModule from '../../scripts/module-manage/utils/map-module'

export default class SearchComponents extends React.Component {
    constructor(props) {
        super(props)

        this.autoCompleteOpts = {
            datas     : [],
            autoFilter: true,
            inputOpts : {
                placeholder: '搜索组件..',
                width      : this.props.width || 195
            },
            onSelect  : (value)=> {
                browserHistory.push(`/components/${value}`)
            }
        }

        mapModule(allComponents, (info)=> {
            // 汉字类别
            var typeDesc = ''
            switch (info.categoryName) {
            case 'pc':
                typeDesc = 'PC端'
                break
            case 'mobile':
                typeDesc = '移动端'
                break
            case 'tb':
                typeDesc = '贴吧'
                break
            case 'common':
                typeDesc = '通用'
                break
            }

            this.autoCompleteOpts.datas.push({
                text : info.module.name + ' ' + info.module.path + ' - ' + typeDesc,
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