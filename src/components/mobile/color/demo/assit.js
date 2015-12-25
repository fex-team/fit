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
                    background: color.cp_link_tip_a,
                    color: '#fff'
                    }, blockStyle)}>
                {'cp_link_tip_a'}
                </span>

                <span style={Object.assign({
                        background: color.cp_link_tip_c,
                        color: '#fff'
                        }, blockStyle)}>
                    {'cp_link_tip_c'}
                </span>

                <span style={Object.assign({
                        background: color.cp_link_tip_d,
                        color: '#fff'
                        }, blockStyle)}>
                    {'cp_link_tip_d'}
                </span>

                <span style={Object.assign({
                        background: color.cp_other_a,
                        color: '#fff'
                        }, blockStyle)}>
                    {'cp_other_a'}
                </span>

                 <span style={Object.assign({
                        background: color.cp_other_b,
                        color: '#fff'
                        }, blockStyle)}>
                    {'cp_other_b'}
                </span>
                 <span style={Object.assign({
                        background: color.cp_other_c,
                        color: '#000'
                        }, blockStyle)}>
                    {'cp_other_c'}
                </span>
                <span style={Object.assign({
                        background: color.cp_other_d,
                        color: '#fff'
                        }, blockStyle)}>
                    {'cp_other_d'}
                </span>
                 <span style={Object.assign({
                        background: color.cp_other_e,
                        color: '#000'
                        }, blockStyle)}>
                    {'cp_other_e'}
                </span>
                 <span style={Object.assign({
                        background: color.cp_other_f,
                        color: '#fff'
                        }, blockStyle)}>
                    {'cp_other_f'}
                </span>
            </div>
        )
    }
}