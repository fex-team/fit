import React from 'react'
import Input from 'tb-input'
import Button from 'tb-button'
import './index.scss'

export default class Finder extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            params: {}
        }
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
            }
        })

        return (
            <div className="_namespace">
                {Finders}
                <Button style={{marginLeft:10}}
                        addonLeft="search"
                        type="primary">查询</Button>
            </div>
        )
    }
}

Finder.defaultProps = {
    finder: []
}