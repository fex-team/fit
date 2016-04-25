import allComponents from '../../../all-component.json'

// require(./xxx) 转化为 fit-x 组件地址
export const relativePathToComponentPath = (categoryName = '', componentPath, info)=> {
    categoryName = categoryName.replace(/\//g, '')

    // 如果没有 categoryName 说明和当前组件一个 category
    console.log(categoryName, componentPath)
    if (categoryName === '..') {
        categoryName = info.categoryName
    }

    return {
        prefix: allComponents.categorys[categoryName].prefix,
        name  : componentPath
    }
}

export const getGitSourcePath = (info)=> {
    // 获取git地址
    let gitSourcePath
    if (info.categoryInfo.gitlabPrefix !== '') {
        gitSourcePath = `${info.categoryInfo.gitlabPrefix}-${info.module.path}.git`
    } else {
        gitSourcePath = `${info.module.path}.git`
    }
    return gitSourcePath
}