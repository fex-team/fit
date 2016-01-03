import React from 'react'
import Number from 'fit-number'

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <Number label="步长为5"
                        step="5"
                        max="10"/>
                <Number label="步长为1.5"
                        float="1"
                        step="1.5"
                        min="-1"
                        style={{marginTop:10}}/>
            </div>
        )
    }
}