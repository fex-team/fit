import React from 'react'
import ReactDOM from'react-dom'
import reactRouter from 'react-router'

import routes from './router.js'

// font-awesome
import 'font-awesome/css/font-awesome.css'

// highlight
import 'highlight.js/styles/github.css'

import './all.scss'

document.title = '贴吧Mis组件库'

ReactDOM.render(routes, document.getElementById('react-dom'))