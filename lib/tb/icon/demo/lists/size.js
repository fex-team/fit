import React from 'react'
import Icon from 'tb-icon'

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <Icon type="post"
                      style={{fontSize:100}}/>
                <Icon type="post"
                      style={{fontSize:70}}/>
                <Icon type="post"
                      style={{fontSize:40}}/>
                <Icon type="post"
                      style={{fontSize:20}}/>
            </div>
        )
    }
}