import React from 'react'
import _ from 'lodash'

export default class CodeDoc extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const match = this.props.code.match(/defaultProps(?:\s)+?=(?:\s)+?\{\n([\w\W]*)\n\};/g)[0]
        let matchArray = match.split('\n')
        matchArray.shift()
        matchArray.pop()
        let status = 0
        let infoArray = []

        let infoParam = ''
        let infoDesc = ''
        let infoType = ''
        let infoEnum = ''
        let infoDefault = ''

        for (let value of matchArray) {
            value = value.trim(' ')
            if (value === '')continue

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
                infoArray.push({infoParam, infoDesc, infoType, infoEnum, infoDefault})
                infoParam = infoDesc = infoType = infoEnum = infoDefault = ''
            }
        }

        let TrTd = infoArray.map((item, index)=> {
            return (
                <tr key={index}>
                    <td>{item.infoParam}</td>
                    <td>{item.infoDesc}</td>
                    <td>{item.infoType}</td>
                    <td>{item.infoEnum}</td>
                    <td>{item.infoDefault}</td>
                </tr>
            )
        })

        return (
            <div>
                <table className="table">
                    <thead>
                    <tr>
                        <th>参数</th>
                        <th>说明</th>
                        <th>类型</th>
                        <th>可选值</th>
                        <th>默认值</th>
                    </tr>
                    </thead>
                    <tbody>
                    {TrTd}
                    </tbody>
                </table>
            </div>
        )
    }
}

CodeDoc.defaultProps = {
    code: ''
}