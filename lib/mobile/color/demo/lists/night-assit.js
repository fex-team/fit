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
                    background: color.cp_link_tip_a_1,
                    color: '#fff'
                    }, blockStyle)}>
                {'cp_link_tip_a_1'}
                </span>

                <span style={Object.assign({
                        background: color.cp_link_tip_c_1,
                        color: '#fff'
                        }, blockStyle)}>
                    {'cp_link_tip_c_1'}
                </span>

                <span style={Object.assign({
                        background: color.cp_link_tip_d_1,
                        color: '#fff'
                        }, blockStyle)}>
                    {'cp_link_tip_d_1'}
                </span>

                <span style={Object.assign({
                        background: color.cp_other_a_1,
                        color: '#fff'
                        }, blockStyle)}>
                    {'cp_other_a_1'}
                </span>
                 <span style={Object.assign({
                        background: color.cp_other_b_1,
                        color: '#fff'
                        }, blockStyle)}>
                    {'cp_other_b_1'}
                </span>
                 <span style={Object.assign({
                        background: color.cp_other_c_1,
                        color: '#000'
                        }, blockStyle)}>
                    {'cp_other_c_1'}
                </span>
                 <span style={Object.assign({
                        background: color.cp_other_d_1,
                        color: '#000'
                        }, blockStyle)}>
                    {'cp_other_d_1'}
                </span>
                 <span style={Object.assign({
                        background: color.cp_other_e_1,
                        color: '#000'
                        }, blockStyle)}>
                    {'cp_other_e_1'}
                </span>
                 <span style={Object.assign({
                        background: color.cp_other_f_1,
                        color: '#fff'
                        }, blockStyle)}>
                    {'cp_other_f_1'}
                </span>
            </div>
        )
    }
}