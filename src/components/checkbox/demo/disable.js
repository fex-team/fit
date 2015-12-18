import React from 'react'
import Checkbox from 'tb-checkbox'

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <Checkbox label="被禁用"
                          disabled/>
            </div>
        )
    }
}