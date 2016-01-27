import React from 'react'
import Submit from 'tb-submit'

export default class Demo extends React.Component {
    render() {
        return (
            <Submit type="post"
                    title="组件发帖"
                    forumId="18778278"
                    forumName="ascode"/>
        )
    }
}