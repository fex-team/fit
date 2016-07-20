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

// if (process.env.NODE_ENV !== 'production') {
//     const {whyDidYouUpdate} = require('why-did-you-update')
//     whyDidYouUpdate(React)
// }

ReactDOM.render(routes, document.getElementById('react-dom'))