import React from 'react'
import Upload from 'fit-upload'

let defaultFiles = [{
    url: '/static/左图.jpg',
    name: '左图.jpg'
}, {
    url: '/static/右图.jpg',
    name: '右图.jpg'
}];

export default class Demo extends React.Component {
    render() {
        return (
            <Upload 
              action="/"
              listType="text"
              value={defaultFiles}>
            </Upload>
        )
    }
}
