import React from 'react'
import { Button, ButtonGroup } from 'fit-button'
import Chat from 'fiten-chat'
import ChatBox from 'fiten-chat-box'

export default class Demo extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.index = 0
    }

    handleAdd(toBottom) {
        let datas = []
        let count = Math.round(Math.random() * 50) + 50
        while (count > 0) {
            let random = Math.round(Math.random() * 50) + 1
            let str = 'asd'
            for (let i = 0; i < random; i++) {
                str += 'asd'
            }
            datas.push({
                name: 'test',
                content: this.index++ + ',' + str
            })
            count--
        }

        this.refs['chatBox'].append(datas, toBottom)
    }

    renderItem(item, index) {
        return (
            <Chat key={index}
                  name={item.name}
                  content={item.content}
                  portrait="http://himg.bdimg.com/sys/portrait/item/052ee28496e7bfb1e7be8ae7bebde5a4a7e7a9ba4620.jpg"/>
        )
    }

    render() {
        return (
            <div>
                <ChatBox
                    height="300"
                    renderItem={this.renderItem.bind(this)}
                    backBottom={true}
                    fullScreen={true}
                    ref="chatBox"/>

                <ButtonGroup>
                    <Button onClick={this.handleAdd.bind(this,false)}
                            style={{marginTop:10}}>新增50~100个</Button>
                    <Button onClick={this.handleAdd.bind(this,true)}
                            style={{marginTop:10}}>新增50~100（滚到底部）</Button>
                </ButtonGroup>
            </div>
        )
    }
}