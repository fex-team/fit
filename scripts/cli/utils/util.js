import fs from 'fs'
import path from 'path'
import _ from 'lodash'
import format from 'format-json'

let root = process.cwd();
var packageVersion = {}

import {
    getModuleGlobal,
    setModuleGlobal
} from './global'

export function getPackageJSON(filePath) {
    return JSON.parse(fs.readFileSync(path.join(filePath, 'package.json')))
}

export function getFileContent (filePath) {
    return fs.readFileSync(filePath).toString()
}

export function writePackageJSON (filePath, name, obj) {
    let json = getPackageJSON(filePath)


    json[name] = obj

    fs.writeFileSync(path.join(filePath, 'package.json'), format.plain(json))
}

export function getRelativePath (filePath) {
    let splits = filePath.split('/')
    let moduleName = splits.pop()
    let moduleType = splits.pop()

    return moduleType + '/' + moduleName
}

export function getPathModules (type) {
    let pathModules = fs.readdirSync(path.join(root, 'lib', type)).filter((name) => {
        return fs.lstatSync(path.join(root, 'lib', type, name)).isDirectory()
    }).map((module) => {
        return path.resolve(root, 'lib', type, module)
    })

    setModuleGlobal(type + 'Modules', pathModules);

    return pathModules;
}

export function getAllComponentJSON () {
    return JSON.parse(fs.readFileSync(path.join(root, 'all-component.json')).toString())
}

export function getConfigModules (type) {
    let allComponents = getAllComponentJSON()
    let componentConfig = allComponents.categorys[type]
    let componentPath = []

    _.each(componentConfig.components, (types, index) => {
        types.forEach((conf) => {
            let relPath = conf.path
            componentPath.push(path.resolve(root, 'lib', type, relPath))
        })
    })

    return componentPath
}

export function getAllPathModules (registedType) {
    return registedType.reduce((total, next) => {
        if (typeof total === 'string') {
            return getPathModules(total).concat(getPathModules(next))
        }
        return total.concat(getPathModules(next))
    })
}

export function getAllConfigModules (registedType) {
    return registedType.reduce((total, next) => {
        if (typeof total === 'string') {
            return getConfigModules(total).concat(getConfigModules(next))
        }
        return total.concat(getConfigModules(next))
    })
}

export function concatArr (...arrs) {
    return arrs.reduce((total, next) => {
        return total.concat(next);
    })
}

export function getModulePath (name, type) {
    if (name && type) {
        let modulePath = path.resolve(root, 'lib', type, name);
        setModuleGlobal('modulePath', modulePath);

        return modulePath
    }
    else {
        return null
    }
}

export function checkPackageJSON(filePath) {
    return fs.existsSync(path.join(filePath, 'package.json'))
}

export function checkGitInPackageJSON(filePath) {
    if (checkPackageJSON(filePath)) {
        let packageJSON = getPackageJSON(filePath)
	    return packageJSON.repository;
    }
    return false
}
