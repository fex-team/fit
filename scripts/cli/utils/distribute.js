/**
 * Created by andycall on 16/2/17.
 */
import { concatArr, getPathModules, getModulePath} from './util'
import { getModuleGlobal, setModuleGlobal } from './global'
import fs from 'fs'

var pcModules, mobileModules, tbModules, commonModules;

var args = process.argv.slice(2)
var moduleType = args[1]
var moduleName = args[2]
var modulePath
var isInited = false;


function distributeInit () {
	pcModules = getPathModules('pc')
	mobileModules = getPathModules('mobile')
	tbModules = getPathModules('tb')
	commonModules = getPathModules('common')
	modulePath = getModulePath(moduleName, moduleType)

	isInited = true;
}


export default function moduleDistribute(fn, params, context) {
	params = params || null
	context = context || null

	if (!isInited) {
		distributeInit();
	}

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