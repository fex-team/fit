import * as React from 'react'
import {Link} from 'react-router'
import {Row, Col} from '../lib/pc/layout/src'
const allComponents = require('../all-component.json')

/**
 * 根据分类,获取组件展示列表
 */
export default (categoryName: string) => {
    return Object.keys(allComponents.categorys[categoryName].components).map((key, index) => {
        const items = allComponents.categorys[categoryName].components[key].map((item: any, index: number) => {
            return (
                <Link key={index}
                      to={`/components/${categoryName}/${item.path}`}
                      style={{ marginRight: 10 }}>{item.name}</Link>
            )
        })

        return (
            <Row key={index}
                 style={{ padding: 20 }}>
                <Col span="24"
                     style={{
                        paddingBottom: 10,
                        fontSize: 16,
                        borderBottom: '1px solid #ddd',
                        boxSizing: 'border-box'
                    }}>
                    {key}
                </Col>
                <Col span="24"
                     style={{ paddingBottom: 10, marginTop: 15, fontSize: 16, boxSizing: 'border-box' }}>
                    {items}
                </Col>
            </Row>
        )
    })
}