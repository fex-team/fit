/**
 * Created by andycall on 16/2/17.
 */
import { concatArr, getPathModules, getModulePath} from './util'
import { getModuleGlobal, setModuleGlobal } from './global'
import fs from 'fs'

var pcModules = getPathModules('pc')
var mobileModules = getPathModules('mobile')
var tbModules = getPathModules('tb')
var commonModules = getPathModules('common')

var args = process.argv.slice(2)
var moduleType = args[1]
var moduleName = args[2]
var modulePath = getModulePath(moduleName, moduleType)

export default function moduleDistribute(fn, params, context) {
	params = params || null
	context = context || null

	let allModules = concatArr(pcModules, mobileModules, tbModules, commonModules).filter((p) => {
		return fs.existsSync(p);
	})

	if (!moduleType && !moduleName) {
		return fn.call(context, allModules, allModules, params)
	}
	else if (moduleType && !moduleName) {
		return fn.call(context, setModuleGlobal(moduleType + 'Modules'), allModules, params);
	}
	else if (moduleType && moduleName) {
		return fn.call(context, [getModuleGlobal('modulePath')], allModules, params)
	}
}