// 遍历所有module
export default (config, callback)=> {
    let categorys = config.categorys
    Object.keys(categorys).map((key, index)=> {
        // pc mobile .. 分类
        let category = categorys[key]
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