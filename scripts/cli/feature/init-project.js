import { getAllConfigModules, getAllPathModules, getAllComponentJSON} from '../utils/util'
import format from 'format-json'
import path from 'path'
import conch from 'conch'
import { execSync } from 'child_process'
import _ from 'lodash'
import { existsSync, mkdir, writeFileSync} from 'fs'
import { setData, logError } from '../utils/summary'
import { getRelativePath } from '../utils/util'

export default function initProject (modules) {
	modules.forEach((val) => {
		let splits = val.split('/')
		let moduleName = splits.pop()
		let moduleType = splits.pop()
		let componentJSON = getAllComponentJSON()
		let gitlabPrefix = componentJSON.categorys[moduleType].gitlabPrefix
		let prefix = componentJSON.categorys[moduleType].prefix
		let description;

		let repoPath
		if (gitlabPrefix !== '') {
			repoPath = `http://gitlab.baidu.com/tb-component/${gitlabPrefix}-${moduleName}.git`
		}
		else {
			repoPath = `http://gitlab.baidu.com/tb-component/${moduleName}.git`
		}

		_.each(componentJSON.categorys[moduleType].components, (category) => {
			_.each(category, (item) => {
				if (item.path === moduleName) {
					description = item.name;
				}
			})
		})

		try {


			if (!description) {
				execSync(`rm -rf ${val}`)
				throw new Error(`can not create lib/${moduleType}/${moduleName}`)
			}

			var templateJSON = `
				{
				  "name": "${prefix}-${moduleName}",
				  "version": "1.0.0",
				  "description": "${description}",
				  "main": "lib/index.js",
				  "scripts": {
				    "test": "echo \'Error: no test specified\' && exit 1"
				  },
				  "repository": {
				    "type": "git",
				    "url": "${repoPath}"
				  },
				  "author": "huangziyi01",
				  "license": "ISC",
				  "dependencies": {
				    "classnames": "^2.2.3",
				    "react": "^0.14.6",
				    "react-dom": "^0.14.6"
				  }
				}
			`

			var markdown = `
				# ${description}

				---

				\`\`\`\`jsx
				npm install ${prefix}-${moduleName} /* or */ fis3 install ${prefix}-${moduleName}
				\`\`\`\`
			`


			if (!existsSync(path.join(val, 'package.json'))) {
				console.log('INFO: add package.json for ' + val)
				writeFileSync(path.join(val, 'package.json'), templateJSON)
			}

			if (!existsSync(path.join(val, 'readme.md')) || !existsSync(path.join(val, 'README.md'))) {
				console.log('INFO: add readme.md for ' + val)
				writeFileSync(path.join(val, 'readme.md'), conch(markdown).replace('\t', ''))
			}

			if (!existsSync(path.join(val, 'demo'))) {
				console.log('INFO: add demo for ' + val)
				mkdir(path.join(val, 'demo'))
			}

			if (!existsSync(path.join(val, 'src'))) {
				console.log('INFO: add src directory for', val)
				mkdir(path.join(val, 'src'))
			}

			if (!existsSync(path.join(val, 'src', 'index.js'))) {
				console.log('INFO: add src/index.js for ', val)
				writeFileSync(path.join(val, 'src', 'index.js'), '')
			}

			if (!existsSync(path.join(val, 'demo', 'index.js'))) {
				console.log('INFO: add demo/index.js for', val)
				writeFileSync(path.join(val, 'demo', 'index.js'), '')
			}

			setData(getRelativePath(val), 'init-project', true)
		}
		catch (e) {
			setData(getRelativePath(val), 'init-project', false)
			logError(getRelativePath(val), e.toString())
		}
	})
}