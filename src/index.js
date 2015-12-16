import LayoutComponent from './layout'
export class Layout extends LayoutComponent {
}

import HeaderComponent from './header'
export class Header extends HeaderComponent {
}

import SidebarComponent from './sidebar'
export class Sidebar extends SidebarComponent {
}

import SectionComponent from './section'
export class Section extends SectionComponent {
}

import FooterComponent from './footer'
export class Footer extends FooterComponent {
}

import $ from 'jquery'

// 设置全局样式
$('html,body').css({
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    margin: 0
})
