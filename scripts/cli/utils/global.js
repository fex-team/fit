import path from 'path'

var moduleGlobal = {}

export function getModuleGlobal (name) {
	return moduleGlobal[name];
}

export function setModuleGlobal (name, val) {
	moduleGlobal[name] = val;
}