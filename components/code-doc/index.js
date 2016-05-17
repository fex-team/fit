import React from 'react'
import _ from 'lodash'
import Table from 'fit-table'
import JsonTree from 'fit-json-tree'

/**
 * * 从源代码文件,读取 [target] { *** } 中的内容
 * @param target 函数名
 * @param source 源代码
 */
const findFunctionBody = (target, source)=> {
    let startPosition = source.indexOf(target) + target.length
    let leftBracketsNumber = 0
    let rightBracketsNumber = 0
    let functionBody = ''
    // 从开始位置不断遍历,直到找到对等数量的闭合『}』
    for (let i = startPosition, j = source.length; i < j; i++) {
        if (source[i] === '{') {
            leftBracketsNumber++
        } else if (source[i] === '}') {
            rightBracketsNumber++
        } else {
            functionBody += source[i]
        }

        if (leftBracketsNumber !== 0 && leftBracketsNumber === rightBracketsNumber) {
            break
        }
    }
    // 忽略 [x:string]:any
    functionBody = functionBody.replace('[x:string]:any', '')
    return functionBody
}

/**
 * 根据标准注释解析注释内容与代码块
 * @param codeText
 */
const parseCodeText = (codeText)=> {
    const codeInfoArray = []

    const pattern = /\/\*\*\s+([^\/]+)\/([^\/]+)/g
    let regResult

    while ((regResult = pattern.exec(codeText)) != null) {
        let codeInfo = {}

        codeInfo.note = _.trim(regResult[1], ' *')
        // 注释的换行变成空格
        codeInfo.note = codeInfo.note.replace(/\n/g, ' ')

        // 定义代码可以把换行删了
        codeInfo.code = _.trim(regResult[2], ' \n')

        codeInfoArray.push(codeInfo)
    }
    return codeInfoArray
}

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
            title : title.replace(/.defaultProps/g, ''),
            fields: [{
                key   : 'infoParam',
                value : '参数',
                render: (value)=> {
                    return (
                        <span style={{whiteSpace:'nowrap'}}>{value.infoParam}</span>
                    )
                }
            }, {
                key   : 'infoType',
                value : '类型',
                render: (value)=> {
                    return (
                        <span style={{color:'#881280'}}>{value.infoType}</span>
                    )
                }
            }, {
                key  : 'infoDesc',
                value: '说明'
            }, {
                key   : 'instanceValue',
                value : '默认值',
                render: (value)=> {
                    let child

                    if (value.instanceValue === undefined) {
                        return (
                            <div>undefined</div>
                        )
                    }

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
                        if (_.isEmpty(value.instanceValue)) {
                            child = null
                        } else {
                            child = (
                                <JsonTree root={true}
                                          json={value.instanceValue}/>
                            )
                        }
                        break
                    case 'object':
                        if (_.isEmpty(value.instanceValue)) {
                            child = null
                        } else {
                            child = (
                                <JsonTree root={true}
                                          json={value.instanceValue}/>
                            )
                        }
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
                    default:
                        child = (
                            <span>{value.instanceValue.toString()}</span>
                        )
                    }

                    return (
                        <div>{child}</div>
                    )
                }
            }, {
                key  : 'infoEnum',
                value: '可选值'
            }, {
                key   : 'infoRequire',
                value : '必选',
                render: (info)=> {
                    return (
                        <div>{info.infoRequire ? true : null}</div>
                    )
                }
            }],
            datas : []
        }

        // 如果是 js 系的, 解析 defaultProps
        if (!this.props.moduleCode) {
            const codeMatch = findFunctionBody('defaultProps', this.props.code)
            let matchArray = codeMatch.split('\n')

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

                    tableInfo.datas.push({infoParam, infoDesc, infoType, infoEnum, instanceValue, infoRequire: false})
                    infoParam = infoDesc = infoType = infoEnum = ''
                }
            }
        } else {
            // 存储 props 的信息
            let propsMap = {}

            // props对象实例
            const propsInstance = new this.props.moduleInstance.Props()

            // 如果是 tsx 系的,解析 modules 生成文档
            const propsInterface = findFunctionBody('export interface PropsInterface', this.props.moduleCode)
            const codeInfos = parseCodeText(propsInterface)
            codeInfos.forEach((codeInfo)=> {
                let tableData = {
                    infoDesc: codeInfo.note
                }

                // a ?: number
                const firstColonIndex = codeInfo.code.indexOf(':')
                const codeLeft = codeInfo.code.substr(0, firstColonIndex + 1)
                const codeRight = codeInfo.code.substr(firstColonIndex + 1)

                if (codeLeft.indexOf('?') === -1) {
                    tableData.infoRequire = true
                } else {
                    tableData.infoRequire = false
                }
                tableData.infoType = codeRight

                // 获取干净的 key 名称
                tableData.infoParam = codeLeft.replace(/\?|\:/g, '')
                // 获得 props 对应实例
                tableData.instanceValue = propsInstance[tableData.infoParam]

                tableInfo.datas.push(tableData)
            })
        }

        return (
            <Table {...tableInfo}/>
        )
    }
}

CodeDoc.defaultProps = {
    code    : '',
    instance: null
}