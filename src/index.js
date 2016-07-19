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

document.title = 'Fit Design'

console.log(document.getElementById('react-dom'))
console.log(routes)
ReactDOM.render(routes, document.getElementById('react-dom'))