import React from 'react'
import Number from 'fit-number'

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <Number label="最大10"
                        max="10"/>
                <Number label="最小-1"
                        min="-1"
                        style={{marginTop:10}}/>
            </div>
        )
    }
}