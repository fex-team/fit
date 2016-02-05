import React from 'react'
import { Layout, Header, Sidebar, Section } from 'fit-layout-global'

export default class Demo extends React.Component {
    render() {
        return (
            <Layout>
                <Header height="40">导航条</Header>
                <Section>主体</Section>
            </Layout>
        )
    }
}