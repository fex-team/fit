import React from 'react'
import Checkbox from 'fit-checkbox'

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <Checkbox disabled>被禁用</Checkbox>
            </div>
        )
    }
}