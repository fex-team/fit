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
import program from 'commander'

import mkRouter from './mk-router'
import mkLayout from './mk-layout'
import mkComponents from './mk-components'

program
    .version('1.0.0')
    .option('-t, --travis', '持续集成')
    .parse(process.argv)

mkRouter(config.categorys, program)
mkLayout(config.categorys, program)
mkComponents(config, program)