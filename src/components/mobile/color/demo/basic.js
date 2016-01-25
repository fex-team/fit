import React from 'react'
import color from 'fiten-color'

const blockStyle = {
    textAlign: 'center',
    padding: '8px 10px',
    margin: 3,
    flex: 1,
    fontSize: 12
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
                    background: color.cp_cont_b,
                    color: '#fff'
                    }, blockStyle)}>
                {'cp_cont_b'}
                </span>

                <span style={Object.assign({
                        background: color.cp_cont_f,
                        color: '#fff'
                        }, blockStyle)}>
                    {'cp_cont_f'}
                </span>

                <span style={Object.assign({
                        background: color.cp_cont_c,
                        color: '#fff'
                        }, blockStyle)}>
                    {'cp_cont_c'}
                </span>

                <span style={Object.assign({
                        background: color.cp_cont_d,
                        color: '#fff'
                        }, blockStyle)}>
                    {'cp_cont_d'}
                </span>

                 <span style={Object.assign({
                        background: color.cp_cont_e,
                        color: '#fff'
                        }, blockStyle)}>
                    {'cp_cont_e'}
                </span>
                 <span style={Object.assign({
                        background: color.cp_cont_g,
                        color: '#000'
                        }, blockStyle)}>
                    {'cp_cont_g'}
                </span>
                <span style={Object.assign({
                        background: color.cp_cont_h,
                        color: '#fff'
                        }, blockStyle)}>
                    {'cp_cont_h'}
                </span>
                 <span style={Object.assign({
                        background: color.cp_cont_m,
                        color: '#000'
                        }, blockStyle)}>
                    {'cp_cont_m'}
                </span>
                 <span style={Object.assign({
                        background: color.cp_cont_p,
                        color: '#fff'
                        }, blockStyle)}>
                    {'cp_cont_p'}
                </span>
            </div>
        )
    }
}