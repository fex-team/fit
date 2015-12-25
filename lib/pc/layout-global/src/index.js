import $ from 'jquery'
import 'fit-style'

import Layout from './layout'
import Header from './header'
import Sidebar from './sidebar'
import Section from './section'
import Footer from './footer'

export { Layout, Header, Sidebar, Section, Footer }

// 设置全局样式
$('html,body').css({
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    margin: 0
})
