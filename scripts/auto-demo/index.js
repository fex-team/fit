// 自动生成demo
// 包括
// src/components
// src/layout
// src/router
// resolve.js

import config from '../../all-component.json'
import fs from 'fs'
import path from 'path'
import mkdirp from 'mkdirp'

import mkResolve from './mk-resolve'
import mkRouter from './mk-router'
import mkLayout from './mk-layout'

mkResolve(config)
mkRouter(config.categorys)
mkLayout(config.categorys)