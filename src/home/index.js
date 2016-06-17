import React from 'react'
import {Link, Router} from 'react-router'
import Button from 'fit-button'
import SearchComponent from '../../components/search-components'
import './index.scss'

export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        document.title = 'Fit Design'
    }

    render() {
        return (
            <div className="_namespace">
                <div className="hero">
                    <div className="container nav-bar">
                        <Link to="/"
                              className="brand item">FIT</Link>
                        <Link to="/components"
                              className="item">组件库</Link>
                        <Link to="/designer"
                              disabled
                              className="disabled item">在线编辑器(V0.0.28)</Link>
                    </div>
                    <div className="super-content">
                        <div className="brand">FIT</div>
                        <div className="description"
                             style={{marginBottom:20}}>React 组件化解决方案
                        </div>
                        <SearchComponent width={300}/>
                    </div>
                </div>
                <div className="container">
                    <div className="lists">
                        <div className="left">
                            <div className="title">实例</div>
                            <div className="description">快速了解功能</div>
                        </div>
                        <div className="right demo"></div>
                    </div>

                    <hr className="hr"/>

                    <div className="lists">
                        <div className="left">
                            <div className="title">源码</div>
                            <div className="description">快速上手</div>
                        </div>
                        <div className="right source"></div>
                    </div>

                    <hr className="hr"/>

                    <div className="lists">
                        <div className="left">
                            <div className="title">文档</div>
                            <div className="description">全面,详细的说明书</div>
                        </div>
                        <div className="right doc"></div>
                    </div>
                </div>
                <div className="footer">
                    <div className="split">
                        <div className="item">
                            <div className="title child">网址</div>
                            <a className="child"
                               href="http://gitlab.baidu.com/tb-component/awesome"
                               target="_blank">Gitlab</a>
                        </div>
                        <div className="item">
                            <div className="title child">联系我们</div>
                            <a className="child"
                               href="http://gitlab.baidu.com/tb-component/awesome/issues"
                               target="_blank">ISSUE</a>
                        </div>
                        <div className="item">
                            <div className="title child">加入我们</div>
                            <p>FEX 是百度「Web 前端研发部」的内部名称
                                其中 FE 是 Front End 的缩写，X 代表我们不仅关注前端技术，还更重视全端及全栈的能力。</p>
                            <p>如果你对这个团队感兴趣，可以 <a href="http://fex.baidu.com/we-need-you"
                                                 target="_blank">点击这里</a>。</p>
                        </div>
                    </div>
                    <div className="center">
                        &copy; 2016<a href="http://fex.baidu.com"
                                      target="_blank">FEX</a>
                    </div>
                </div>
            </div>
        )
    }
}