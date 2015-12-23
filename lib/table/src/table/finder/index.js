import React from 'react'
import Input from 'tb-input'
import Button from 'tb-button'
import { Select, Option } from 'tb-select'
import './index.scss'

export default class Finder extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            opts: this.props.finder
        }

        this.getChilds = (lists, notEnum, parentIndex)=> {
            return lists.map((item, index)=> {
                let itemStyle = {
                    flexGrow: 1,
                    marginLeft: index === 0 ? null : 10,
                    width: item.width || null,
                    display: 'flex'
                }

                switch (item.type) {
                case 'text':
                    return (
                        <Input key={index} style={itemStyle} label={notEnum?null:item.label}
                               value={item.value||item.defaultValue}
                               onChange={this.handleChange.bind(this,index,parentIndex)}/>
                    )
                case 'select':
                    let Options = item.select.map((elItem, elIndex)=> {
                        return (
                            <Option key={elIndex} value={elItem.key}>{elItem.value}</Option>
                        )
                    })
                    return (
                        <Select width="150" style={itemStyle} key={index} label={notEnum?null:item.label}
                                value={item.value||item.defaultValue||item.select[0].key}
                                onChange={this.handleChange.bind(this,index,parentIndex)}>
                            {Options}
                        </Select>
                    )
                case 'enum':
                    if (notEnum)break
                    // 循环出option列表
                    let EnumOptions = item.enum.map((elItem, elIndex)=> {
                        return (
                            <Option key={elIndex} value={elItem.key}>{elItem.label}</Option>
                        )
                    })

                    // 显示当前的child
                    let Children = null
                    let Childrens = this.getChilds(item.enum, true, index)
                    item.enum.map((elItem, elIndex)=> {
                        if (elItem.key === (item.value || item.defaultValue)) {
                            Children = Childrens[elIndex]
                        }
                    })

                    return (
                        <div key={index} style={itemStyle}>
                            {Children}
                            <Select style={{marginLeft:-1}} onChange={this.handleEnumChange.bind(this,index)}
                                    width="120"
                                    key={index} value={item.value||item.defaultValue}>
                                {EnumOptions}
                            </Select>
                        </div>
                    )
                }
            })
        }
    }

    // 选项被修改
    handleChange(index, parentIndex, value) {
        let newOpts = this.state.opts

        if (!parentIndex) {
            newOpts[index].value = value
        } else {
            newOpts[parentIndex].enum[index].value = value
        }

        this.setState({
            opts: newOpts
        })
    }

    // enum被修改
    handleEnumChange(index, value) {
        let newOpts = this.state.opts
        newOpts[index].value = value
        this.setState({
            opts: newOpts
        })
    }

    handleSearch() {
        // 查出当前提交参数
        let params = {}
        this.state.opts.map((item)=> {
            if (item.type === 'enum') {
                item.enum.map((elItem)=> {
                    if (elItem.key === (item.value || item.defaultValue) && (elItem.value || elItem.defaultValue)) {
                        params[elItem.key] = elItem.value || elItem.defaultValue
                    }
                })
                return
            }

            if (item.value || item.defaultValue) {
                params[item.key] = item.value || item.defaultValue
            }
        })
        this.props.onSearch(params)
    }

    render() {
        let Finders = this.getChilds(this.state.opts)

        return (
            <div className="_namespace">
                {Finders}
                <Button style={{marginLeft:10}}
                        addonLeft="search"
                        onClick={this.handleSearch.bind(this)}
                        type="primary">查询</Button>
            </div>
        )
    }
}

Finder.defaultProps = {
    finder: []
}