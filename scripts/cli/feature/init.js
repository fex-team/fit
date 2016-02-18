import { getAllConfigModules, getAllPathModules } from '../utils/util'
import _ from 'lodash'
import addModules from './add'
import commitModules from './commit'
import pullModules from './pull'
import pushModules from './push'
import { existsSync, mkdir} from 'fs'
import path from 'path'

var registedType = ['pc', 'mobile', 'tb', 'common']
var root = process.cwd()

export default function initPrepare () {
	console.log('checking missing submodules...')

	if (!existsSync(path.join(root, 'lib'))) {
		mkdir(path.join(root, 'lib'));
	}

	registedType.forEach((type) => {
		if (!existsSync(path.join(root, 'lib', type))) {
			mkdir(path.join(root, 'lib', type));
		}
	})

	let allConfigModules = getAllConfigModules(registedType)
	let allPathModules = getAllPathModules(registedType)
	let difference = _.difference(allConfigModules, allPathModules)

	if (difference.length > 0) {
		addModules(difference)
		commitModules(difference)
		pushModules(pullModules(difference))
	}
	else {
		console.log('all modules had added')
	}
}