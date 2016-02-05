import React from 'react'
import { ScrollListenBox, ScrollListenNail , ScrollListen, createStore } from 'fit-scroll-listen'
const store = createStore()

export default class Demo extends React.Component {
    render() {
        return (
            <div style={{display:'flex'}}>
                <ScrollListenBox store={store} style={{height:150,width:150,overflowY:"auto",padding:10,border:'1px solid #ccc',marginRight:10}}>
                    <ScrollListenNail store={store} title="第一位置">第一个位置</ScrollListenNail>
                    <p>
                        内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容
                    </p>
                    <ScrollListenNail store={store} title="第二位置">第二个位置</ScrollListenNail>
                    <p>
                        内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容
                    </p>
                    <ScrollListenNail store={store} title="第三位置">第三个位置</ScrollListenNail>
                    <p>
                        内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容
                    </p>
                </ScrollListenBox>
                <ScrollListen store={store}/>
            </div>
        )
    }
}