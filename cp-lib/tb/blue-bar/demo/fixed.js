import React from 'react'
import Bluebar from 'tb-blue-bar'

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <Bluebar isFixed={true} title="顶部蓝条" />
            </div>
        )
    }
}