import React from 'react'
import Icon from 'tb-icon'

const fontStyle = {
    fontSize: 30
}

class Box extends React.Component {
    render() {
        return (
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',margin:'0 5px',width:80}}>
                <Icon type={this.props.type}
                      style={fontStyle}/>
                <p>{this.props.type}</p>
            </div>
        )
    }
}

export default class Demo extends React.Component {
    render() {
        return (
            <div style={{display:'flex'}}>
                <Box type="post"/>
                <Box type="reply"/>
                <Box type="smile"/>
                <Box type="good"/>
                <Box type="image"/>
                <Box type="sign"/>
                <Box type="sign-done"/>
                <Box type="at"/>
            </div>
        )
    }
}