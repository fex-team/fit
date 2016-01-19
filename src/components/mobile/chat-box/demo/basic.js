import React from 'react'
import { Button, ButtonGroup } from 'fit-button'
import Chat from 'fiten-chat'
import ChatBox from 'fiten-chat-box'

export default class Demo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            datas: [],
            toBottom: false
        }
    }

    handleAdd(toBottom) {
        let newDatas = this.state.datas
        newDatas.push({
            name: 'test',
            content: '123'
        })
        this.setState({
            datas: newDatas,
            toBottom: toBottom
        })
    }

    render() {
        let Childrens = this.state.datas.map((item, index)=> {
            return (
                <Chat key={index}
                      name={item.name}
                      content={item.content}
                      portrait="http://himg.bdimg.com/sys/portrait/item/052ee28496e7bfb1e7be8ae7bebde5a4a7e7a9ba4620.jpg"/>
            )
        })

        return (
            <div>
                <ChatBox isFixBottom={this.state.toBottom}
                         height="300">
                    {Childrens}
                </ChatBox>

                <ButtonGroup>
                    <Button onClick={this.handleAdd.bind(this,false)}
                            style={{marginTop:10}}>新增</Button>
                    <Button onClick={this.handleAdd.bind(this,true)}
                            style={{marginTop:10}}>新增（滚到底部）</Button>
                </ButtonGroup>
            </div>
        )
    }
}