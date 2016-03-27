const mapModuleHandle = (config, callback)=> {
    Object.keys(config.categorys).map((key, index)=> {
        // pc mobile .. 分类
        let category = config.categorys[key]
        for (let componentsKey in category.components) {
            category.components[componentsKey].map((item)=> {
                callback({
                    module      : item,
                    categoryName: key,
                    categoryInfo: category
                })
            })
        }
    })
}

// 遍历所有module
const mapModule = (config, callback)=> {
    mapModuleHandle(config, callback)
}

const getAllModules = (config)=> {
    let modules = []
    mapModuleHandle(config, (info)=> {
        modules.push(info)
    })
    return modules
}

export default mapModule
export {mapModule, getAllModules}