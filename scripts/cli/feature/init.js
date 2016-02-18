import { getAllConfigModules, getAllPathModules } from '../utils/util'
import _ from 'lodash'
import addModules from './add'
import commitModules from './commit'
import pullModules from './pull'
import pushModules from './push'

var registedType = ['pc', 'mobile', 'tb']

export default function initPrepare () {
	console.log('checking missing submodules...')
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