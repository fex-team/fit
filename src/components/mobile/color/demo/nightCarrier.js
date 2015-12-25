import React from 'react'
import color from 'fiten-style'

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
                    background: color.cp_bg_line_a_1,
                    color: '#fff'
                    }, blockStyle)}>
                {'cp_bg_line_a_1'}
                </span>

                <span style={Object.assign({
                        background: color.cp_bg_line_b_1,
                        color: '#fff'
                        }, blockStyle)}>
                    {'cp_bg_line_b_1'}
                </span>

                <span style={Object.assign({
                        background: color.cp_bg_line_c_1,
                        color: '#fff'
                        }, blockStyle)}>
                    {'cp_bg_line_c_1'}
                </span>

                <span style={Object.assign({
                        background: color.cp_bg_line_e_1,
                        color: '#fff'
                        }, blockStyle)}>
                    {'cp_bg_line_e_1'}
                </span>
                 <span style={Object.assign({
                        background: color.cp_bg_line_i_1,
                        color: '#fff'
                        }, blockStyle)}>
                    {'cp_bg_line_i_1'}
                </span>
                 <span style={Object.assign({
                        background: color.cp_bg_line_d_1,
                        color: '#fff'
                        }, blockStyle)}>
                    {'cp_bg_line_d_1'}
                </span>
                 <span style={Object.assign({
                        background: color.cp_bg_line_m_1,
                        color: '#fff'
                        }, blockStyle)}>
                    {'cp_bg_line_m_1'}
                </span>
                 <span style={Object.assign({
                        background: color.cp_bg_line_j_1,
                        color: '#fff'
                        }, blockStyle)}>
                    {'cp_bg_line_j_1'}
                </span>
            </div>
        )
    }
}