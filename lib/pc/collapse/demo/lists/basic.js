import React from 'react'
import { Collapse, CollPanel } from 'fit-collapse'

const text = `百度百科是百度公司推出的一部内容开放、自由的网络百科全书平台，其测试版于2006年4月20日上线，正式版在2008年4月21日发布，截止2015年5月，百度百科已经收录了超过1155万的优质词条，用户数高达540万人以上，几乎涵盖了所有已知的知识领域。`

export default class Demo extends React.Component {
    callback(key) {
        console.log(key)
    }

    render() {
        return (
            <Collapse defaultActiveKey={['1','2']}
                      onChange={this.callback.bind(this)}>
                <CollPanel style={{padding:10}}
                           header="panel header 1"
                           key="1">
                    {text}
                </CollPanel>
                <CollPanel style={{padding:10}}
                           header="panel header 2"
                           key="2">
                    {text}
                </CollPanel>
                <CollPanel style={{padding:10}}
                           header="panel header 3"
                           key="3">
                    {text}
                </CollPanel>
            </Collapse>
        )
    }
}