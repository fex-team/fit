import React from 'react'
import _ from 'lodash'
import Table from 'fit-table'

export default class CodeDoc extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const title = this.props.code.match(/(\w*).defaultProps/g)[0]

        let tableInfo = {
            title: title.replace(/.defaultProps/g, ''),
            fields: [{
                key: 'infoParam',
                value: '参数'
            }, {
                key: 'infoDesc',
                value: '说明'
            }, {
                key: 'infoType',
                value: '类型'
            }, {
                key: 'infoEnum',
                value: '可选值'
            }, {
                key: 'infoDefault',
                value: '默认值'
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
        let infoDefault = ''

        for (let value of matchArray) {
            value = value.trim(' ')
            if (value === '')continue
            if (value === '}')continue

            if (value.indexOf('@') > -1) {
                // 注释
                if (value.indexOf('@desc') > -1) {
                    infoDesc = value.split('@desc')[1].trim(' ')
                    continue
                }
                if (value.indexOf('@type') > -1) {
                    infoType = value.split('@type')[1].trim(' ')
                    continue
                }
                if (value.indexOf('@enum') > -1) {
                    infoEnum = value.split('@enum')[1].trim(' ')
                    continue
                }
            } else {
                // 代码
                let codeArray = value.split(':')
                let code = codeArray[0].trim(' ')
                let defaultValue = codeArray[1].trim(' ')
                defaultValue = _.trimRight(defaultValue, ',')
                infoParam = code
                infoDefault = defaultValue

                if (infoDefault.indexOf('function') > -1) {
                    infoDefault = 'null'
                }

                if (infoType === 'string') {
                    infoDefault = _.trimLeft(infoDefault, '\'')
                    infoDefault = _.trimRight(infoDefault, '\'')
                    infoDefault = infoDefault.trim()
                    if (_.isEmpty(infoDefault)) {
                        infoDefault = 'null'
                    }
                }

                tableInfo.datas.push({infoParam, infoDesc, infoType, infoEnum, infoDefault})
                infoParam = infoDesc = infoType = infoEnum = infoDefault = ''
            }
        }

        return (
            <div>
                <Table {...tableInfo}/>
            </div>
        )
    }
}

CodeDoc.defaultProps = {
    code: ''
}