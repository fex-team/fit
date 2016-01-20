import React from 'react'
import Image from 'tb-image'

import wide from './wide.jpg'

export default class Demo extends React.Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <Image width={200} height={100} src={wide} />
        )
    }
}