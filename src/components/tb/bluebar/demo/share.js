import React from 'react'
import Bluebar from 'tb-bluebar'

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <Bluebar title="顶部蓝条" rightOptions={['share']} />
            </div>
        )
    }
}