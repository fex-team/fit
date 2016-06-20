import React from 'react'
import Gaea from 'fit-gaea'
import data from './data.json'

import Button from './components/button'
import Title from './components/title'

const info = {
    components: [Title, Button],
    pageInfo  : data,
    onSave    : (info:any)=> {
        console.log(JSON.stringify(info.pageInfo))
    }
}

export default class Designer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        document.title = '在线编辑器 - Gaea'
    }

    render() {
        return (
            <Gaea {...info}/>
        )
    }
}