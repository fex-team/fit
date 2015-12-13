import React from 'react'
import { Layout, Header , Sidebar, Section, Footer } from 'tb-layout-global'

export default class Demo extends React.Component {
    render() {
        return (
            <Layout header={50} footer={50} sidebar={100}>
                <Header>导航栏</Header>
                <Sidebar>侧边栏</Sidebar>
                <Section>主体</Section>
                <Footer>页尾</Footer>
            </Layout>
        )
    }
}