import React from 'react'
import color from 'fiten-style'

const blockStyle = {
    textAlign: 'center',
    padding: '8px 10px',
    margin: 3,
    flex: 1
}

const titleStyle = {
    margin: '8px 0'
}

const colorGroup = {
    padding: '8px 0',
    display: 'flex'
}

export default class Demo extends React.Component {
    render() {
        return (
            <div style={colorGroup}>
                 <span style={Object.assign({
                    background: color.cp_cont_i,
                    color: '#000'
                    }, blockStyle)}>
                {'cp_cont_i'}
                </span>

                 <span style={Object.assign({
                    background: color.cp_cont_i_1,
                    color: '#000'
                    }, blockStyle)}>
                {'cp_cont_i_1'}
                </span>
            </div>
        )
    }
}