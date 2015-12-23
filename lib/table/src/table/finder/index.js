import React from 'react'
import Input from 'tb-input'
import Button from 'tb-button'
import { Select, Option } from 'tb-select'
import './index.scss'

export default class Finder extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            params: {}
        }
    }

    handleSearch() {
        this.props.onSearch(this.state.params)
    }

    render() {
        let Finders = this.props.finder.map((item, index)=> {
            let itemStyle = {
                flexGrow: 1,
                marginLeft: index === 0 ? null : 10
            }

            switch (item.type) {
            case 'text':
                return (
                    <Input key={index}
                           style={itemStyle}
                           label={item.label}/>
                )
            case 'select':
                let Options = item.select.map((elItem, elIndex)=> {
                    return (
                        <Option key={elIndex} value={elItem.key}>{elItem.value}</Option>
                    )
                })
                return (
                    <Select style={itemStyle} key={index} value="1">
                        {Options}
                    </Select>
                )
            }
        })

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