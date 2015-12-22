import React from 'react'
import ReactDOM from'react-dom'
import reactRouter from 'react-router'

import routes from './router.js'

// font-awesome
import 'font-awesome/css/font-awesome.css'

// highlight
import 'highlight.js/styles/github.css'

// github-markdown css
import './github-markdown.scss'

import './all.scss'

document.title = '贴吧Mis组件库'

__webpack_public_path__ = window.resourcePublicPath

ReactDOM.render(routes, document.getElementById('react-dom'))