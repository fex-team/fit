import React from 'react'
import { Layout, Header , Sidebar, Section, Footer } from 'fit-layout-global'

export default class Demo extends React.Component {
    render() {
        return (
            <Layout>
                <Header height="50">导航栏</Header>
                <Sidebar width="100"
                         direction='right'>侧边栏</Sidebar>
                <Section>主体</Section>
                <Footer height="40">页尾</Footer>
            </Layout>
        )
    }
}