import React from 'react'
import JsonTree from 'fit-json-tree'

const jsonData = {
    keyword: 'abc',
    owner: 'ascoders',
    age: 23,
    lists: [1, 2, 3, 4, 5],
    info: {
        lists: ['11', '22', '33'],
        isOnline: true
    },
    arr: [{
        a: 1,
        b: 2
    }, {
        c: '3',
        d: false
    }]
}

export default class Demo extends React.Component {
    render() {
        return (
            <JsonTree json={jsonData}/>
        )
    }
}