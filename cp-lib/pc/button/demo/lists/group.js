import React from 'react'
import { Button, ButtonGroup } from 'fit-button'

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <ButtonGroup>
                    <Button>Left</Button>
                    <Button>Middle</Button>
                    <Button>Right</Button>
                </ButtonGroup>

                <ButtonGroup vertical
                             style={{marginLeft:10}}>
                    <Button>Left</Button>
                    <Button>Middle</Button>
                    <Button>Right</Button>
                </ButtonGroup>
            </div>
        )
    }
}