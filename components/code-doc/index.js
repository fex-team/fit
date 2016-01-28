import React from 'react'
import _ from 'lodash'
import Table from 'fit-table'
import JsonTree from 'fit-json-tree'

export default class CodeDoc extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const titleArray = this.props.code.match(/(\w*).defaultProps/g)
        if (!titleArray)return null
        const title = titleArray[0]

        let tableInfo = {
            title: title.replace(/.defaultProps/g, ''),
            fields: [{
                key: 'infoParam',
                value: '参数'
            }, {
                key: 'infoType',
                value: '类型',
                render: (value)=> {
                    return (
                        <span style={{color:'#881280'}}>{value.infoType}</span>
                    )
                }
            }, {
                key: 'instanceValue',
                value: '默认值',
                render: (value)=> {
                    let child
                    switch (value.infoType) {
                    case 'string':
                        child = (
                            <span style={{color:'#C41A16'}}>'{value.instanceValue}'</span>
                        )
                        break
                    case 'boolean':
                        child = (
                            <span style={{color:'#1C00CF'}}>{value.instanceValue.toString()}</span>
                        )
                        break
                    case 'number':
                        child = (
                            <span style={{color:'#1C00CF'}}>{value.instanceValue}</span>
                        )
                        break
                    case 'array':
                        child = (
                            <JsonTree json={value.instanceValue}/>
                        )
                        break
                    case 'object':
                        child = (
                            <JsonTree json={value.instanceValue}/>
                        )
                        break
                    case 'null':
                        child = (
                            <span style={{color:'#1C00CF'}}>null</span>
                        )
                        break
                    case 'function':
                        child = (
                            <span>[function]</span>
                        )
                        break
                    case 'undefined':
                        child = (
                            <span style={{color:'#ccc'}}>undefined</span>
                        )
                        break
                    }

                    return (
                        <div>{child}</div>
                    )
                }
            }, {
                key: 'infoEnum',
                value: '可选值'
            }, {
                key: 'infoDesc',
                value: '说明'
            }],
            datas: []
        }

        const matchArr = this.props.code.match(/defaultProps(?:\s)+?=(?:\s)+?\{\n([\w\W]*)\n\};/g)
        if (!matchArr) return null
        const match = matchArr[0]
        let matchArray = match.split('\n')
        matchArray.shift()
        matchArray.pop()

        let infoArray = []
        let infoParam = ''
        let infoDesc = ''
        let infoType = ''
        let infoEnum = ''

        let findStatus = 0
        for (let value of matchArray) {
            value = value.trim(' ')
            if (value === '')continue
            if (value === '}')continue

            if (value.indexOf('@') > -1) {
                // 注释
                if (value.indexOf('@desc') > -1) {
                    findStatus = 1
                    infoDesc = value.split('@desc')[1].trim(' ')
                    continue
                }
                if (value.indexOf('@enum') > -1) {
                    infoEnum = value.split('@enum')[1].trim(' ')
                    continue
                }
            } else {
                // 代码
                if (findStatus !== 1) {
                    continue
                }
                findStatus = 2
                let codeArray = value.split(':')
                let codeKey = codeArray[0].trim(' ')
                infoParam = codeKey

                // 自动检测类型
                let instanceValue = this.props.instance.defaultProps[codeKey]
                if (_.isString(instanceValue)) {
                    infoType = 'string'
                } else if (_.isBoolean(instanceValue)) {
                    infoType = 'boolean'
                } else if (_.isNumber(instanceValue)) {
                    infoType = 'number'
                } else if (_.isArray(instanceValue)) {
                    infoType = 'array'
                } else if (_.isFunction(instanceValue)) {
                    infoType = 'function'
                } else if (_.isObject(instanceValue)) {
                    infoType = 'object'
                } else if (_.isNull(instanceValue)) {
                    infoType = 'null'
                } else {
                    infoType = 'undefined'
                }

                tableInfo.datas.push({infoParam, infoDesc, infoType, infoEnum, instanceValue})
                infoParam = infoDesc = infoType = infoEnum = ''
            }
        }

        return (
            <div style={{padding:10}}>
                <Table {...tableInfo}/>
            </div>
        )
    }
}

CodeDoc.defaultProps = {
    code: '',
    instance: null
}