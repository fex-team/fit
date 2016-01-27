import React from 'react'
import color from 'fiten-color'

const blockStyle = {
    textAlign: 'center',
    padding: '8px 10px',
    margin: 3,
    flex: 1
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
                    background: color.cp_bg_line_a,
                    color: '#000'
                    }, blockStyle)}>
                {'cp_bg_line_a'}
                </span>

                <span style={Object.assign({
                        background: color.cp_bg_line_b,
                        color: '#000'
                        }, blockStyle)}>
                    {'cp_bg_line_b'}
                </span>

                <span style={Object.assign({
                        background: color.cp_bg_line_c,
                        color: '#000'
                        }, blockStyle)}>
                    {'cp_bg_line_c'}
                </span>

                <span style={Object.assign({
                        background: color.cp_bg_line_e,
                        color: '#000'
                        }, blockStyle)}>
                    {'cp_bg_line_e'}
                </span>

                 <span style={Object.assign({
                        background: color.cp_bg_line_i,
                        color: '#000'
                        }, blockStyle)}>
                    {'cp_bg_line_i'}
                </span>
                 <span style={Object.assign({
                        background: color.cp_bg_line_d,
                        color: '#000'
                        }, blockStyle)}>
                    {'cp_bg_line_d'}
                </span>
                <span style={Object.assign({
                        background: color.cp_bg_line_m,
                        color: '#fff'
                        }, blockStyle)}>
                    {'cp_bg_line_m'}
                </span>
                 <span style={Object.assign({
                        background: color.cp_bg_line_j,
                        color: '#fff'
                        }, blockStyle)}>
                    {'cp_bg_line_j'}
                </span>
            </div>
        )
    }
}