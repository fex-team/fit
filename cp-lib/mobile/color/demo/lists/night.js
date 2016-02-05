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
                    background: color.cp_cont_b_1,
                    color: '#fff'
                    }, blockStyle)}>
                {'cp_cont_b_1'}
                </span>

                <span style={Object.assign({
                        background: color.cp_cont_f_1,
                        color: '#fff'
                        }, blockStyle)}>
                    {'cp_cont_f_1'}
                </span>

                <span style={Object.assign({
                        background: color.cp_cont_c_1,
                        color: '#fff'
                        }, blockStyle)}>
                    {'cp_cont_c_1'}
                </span>

                <span style={Object.assign({
                        background: color.cp_cont_d_1,
                        color: '#fff'
                        }, blockStyle)}>
                    {'cp_cont_d_1'}
                </span>
                 <span style={Object.assign({
                        background: color.cp_cont_e_1,
                        color: '#fff'
                        }, blockStyle)}>
                    {'cp_cont_e_1'}
                </span>
                 <span style={Object.assign({
                        background: color.cp_cont_g_1,
                        color: '#000'
                        }, blockStyle)}>
                    {'cp_cont_g_1'}
                </span>
                 <span style={Object.assign({
                        background: color.cp_cont_h_1,
                        color: '#000'
                        }, blockStyle)}>
                    {'cp_cont_h_1'}
                </span>
                 <span style={Object.assign({
                        background: color.cp_cont_m_1,
                        color: '#000'
                        }, blockStyle)}>
                    {'cp_cont_m_1'}
                </span>
                 <span style={Object.assign({
                        background: color.cp_cont_p_1,
                        color: '#fff'
                        }, blockStyle)}>
                    {'cp_cont_p_1'}
                </span>
            </div>
        )
    }
}