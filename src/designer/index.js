import React from 'react'
import {Link, Router} from 'react-router'
import Button from 'fit-button'
import SearchComponent from '../../components/search-components'
import './index.scss'

export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        document.title = '在线编辑器 - 盖亚'
    }

    render() {
        return (
            <div className="_namespace">
                123
            </div>
        )
    }
}