import React from 'react'
import { Button, ButtonGroup } from 'fit-button'

export default class Demo extends React.Component {
    render() {
        return (
            <ButtonGroup>
                <Button>Left</Button>
                <Button active>Middle</Button>
                <Button>Right</Button>
            </ButtonGroup>
        )
    }
}