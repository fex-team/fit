import React from 'react'
import Image from 'fit-image'

import wide from './wide.jpg'

export default class Demo extends React.Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <Image src={wide} />
        )
    }
}