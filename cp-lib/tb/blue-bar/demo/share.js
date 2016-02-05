import React from 'react'
import Bluebar from 'tb-blue-bar'

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <Bluebar title="顶部蓝条" rightOptions={[{
                    type: 'share',
                    title: '分享标题',
                    desc: '分享内容',
                    pic: 'http://image.baidu.com/search/detail?ct=503316480&z=0&tn=baiduimagedetail&ipn=d&cl=2&cm=1&sc=0&lm=-1&ie=gbk&pn=0&rn=1&di=153605233540&ln=30&word=%CD%BC%C6%AC&os=922079446,3220597865&cs=128811874,840272376&objurl=http%3A%2F%2Fpic2.ooopic.com%2F01%2F03%2F51%2F25b1OOOPIC19.jpg&bdtype=0&simid=3473458608,462633313&fr=ala&ala=1&alatpl=others&pos=1'
                }]} />
            </div>
        )
    }
}