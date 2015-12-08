import React from 'react'
import ReactDOM from'react-dom'
import reactRouter from 'react-router'

import routes from './router.js'

// font-awesome
require('font-awesome/css/font-awesome.css')

import './reset.scss'

ReactDOM.render(routes, document.getElementById('react-dom'))