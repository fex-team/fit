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

    componentWillMount() {
        this.index = 0
    }

    handleAdd(toBottom) {
        let newDatas = this.state.datas
        let count = Math.round(Math.random() * 1000) + 1
        while (count > 0) {
            let random = Math.round(Math.random() * 20) + 1
            let str = 'asd'
            for (let i = 0; i < random; i++) {
                str += 'asd'
            }
            newDatas.push({
                name: 'test',
                content: this.index++ + ',' + str
            })
            count--
        }

        this.setState({
            datas: newDatas,
            toBottom: toBottom
        })
    }

    handleHitTop() {
        let newDatas = this.state.datas
        newDatas.unshift({
            name: 'admin',
            content: '321'
        })
        this.setState({
            datas: newDatas
        })
    }

    renderItem(index, key) {
        return (
            <Chat key={key}
                  name={this.state.datas[index].name}
                  content={this.state.datas[index].content}
                  portrait="http://himg.bdimg.com/sys/portrait/item/052ee28496e7bfb1e7be8ae7bebde5a4a7e7a9ba4620.jpg"/>
        )
    }

    render() {
        return (
            <div>
                <ChatBox
                    isFixBottom={this.state.toBottom}
                    height="300"
                    count={this.state.datas.length}
                    renderItem={this.renderItem.bind(this)}
                    direction="column-reverse"/>

                <ButtonGroup>
                    <Button onClick={this.handleAdd.bind(this,false)}
                            style={{marginTop:10}}>新增1~1000个</Button>
                    <Button onClick={this.handleAdd.bind(this,true)}
                            style={{marginTop:10}}>新增（滚到底部）</Button>
                </ButtonGroup>
            </div>
        )
    }
}