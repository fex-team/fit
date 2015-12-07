import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import Layout from './layout/index.js'

const MainRouter = (
    <Router>
        <Route path="/"
               component={Layout}/>
    </Router>
)

export default MainRouter