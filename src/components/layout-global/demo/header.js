import React from 'react'
import { Layout, Header, Sidebar, Section } from 'tb-layout-global'

export default class Demo extends React.Component {
    render() {
        return (
            <Layout>
                <Header height={100}>导航条</Header>
                <Sidebar width={100}>侧边栏</Sidebar>
                <Section>主体</Section>
            </Layout>
        )
    }
}