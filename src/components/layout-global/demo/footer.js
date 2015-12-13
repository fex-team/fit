import React from 'react'
import { Layout, Sidebar, Section, Footer } from 'tb-layout-global'

export default class Demo extends React.Component {
    render() {
        return (
            <Layout footer={50} sidebar={100}>
                <Sidebar>侧边栏</Sidebar>
                <Section>主体</Section>
                <Footer>页尾</Footer>
            </Layout>
        )
    }
}