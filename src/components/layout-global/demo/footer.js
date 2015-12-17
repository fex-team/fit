import React from 'react'
import { Layout, Sidebar, Section, Footer } from 'tb-layout-global'

export default class Demo extends React.Component {
    render() {
        return (
            <Layout>
                <Sidebar width={150}>侧边栏</Sidebar>
                <Section>主体</Section>
                <Footer height={100}>页尾</Footer>
            </Layout>
        )
    }
}