import React from 'react'
import { Layout, Sidebar, Section } from 'tb-layout-global'

export default class Demo extends React.Component {
    render() {
        return (
            <Layout>
                <Sidebar width={200}>侧边栏</Sidebar>
                <Section>主体</Section>
            </Layout>
        )
    }
}