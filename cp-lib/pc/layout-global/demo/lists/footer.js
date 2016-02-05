import React from 'react'
import { Layout, Sidebar, Section, Footer } from 'fit-layout-global'

export default class Demo extends React.Component {
    render() {
        return (
            <Layout>
                <Sidebar width="60">侧边栏</Sidebar>
                <Section>主体</Section>
                <Footer height="60">页尾</Footer>
            </Layout>
        )
    }
}