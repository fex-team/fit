import React from 'react'
import { Tabs, TabPanel } from 'fit-tabs'

export default class Demo extends React.Component {
    handleChange(value) {
        console.log('回调', value)
    }

    render() {
        return (
            <Tabs defaultActiveKey="1"
                  onChange={this.handleChange.bind(this)}>
                <TabPanel tab="选项卡一"
                          key="1">选项卡一内容</TabPanel>
                <TabPanel tab="选项卡二"
                          key="2">选项卡二内容</TabPanel>
                <TabPanel tab="选项卡三"
                          key="3">选项卡三内容</TabPanel>
            </Tabs>
        )
    }
}