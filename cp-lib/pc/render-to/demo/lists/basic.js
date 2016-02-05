import React from 'react'
import RenderTo from 'fit-render-to'
import Button from 'fit-button'

export default class Demo extends React.Component {
    constructor (props) {
        super(props)
    }

    render () {
        let boxStyle = {
            border: '1px solid #000',
            width: 200,
            minHeight: 100,
            margin: 10,
        }

        let containerStyle = {
            display: 'flex'
        }

        return (
            <div style={containerStyle}>
                <div style={boxStyle} className="container-box">

                </div>
                <div style={boxStyle} className="container-box">

                </div>
                <div style={boxStyle} className="container-box">

                </div>
                <div style={boxStyle} className="container-box">

                </div>
                <div style={boxStyle} className="container-box">

                </div>


                <RenderTo selector=".container-box">
                    <Button>这是来自宇宙的按钮</Button>
                </RenderTo>
            </div>
        )
    }
}