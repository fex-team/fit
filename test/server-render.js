import React from 'react'
import ReactDOMServer from 'react-dom/server'

import Badge from '../lib/common/badge/src'

const result = ReactDOMServer.renderToString(<Badge count="123"/>)
console.log(result)