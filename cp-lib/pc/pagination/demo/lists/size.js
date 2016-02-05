import React from 'react'
import Pagination from 'fit-pagination'

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <Pagination allPage={7}/>
                <Pagination allPage={9}/>
                <Pagination allPage={10}/>
                <Pagination allPage={1000}/>
            </div>
        )
    }
}