import React from 'react'
import Upload from 'fit-upload'
import Button from 'fit-button'

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
            <Upload type="button" 
                action="/"
                name="file"
                field="file"
                listType="picture"
                value={defaultFiles}
                extraData={{ test: 1 }} >
                <Button type="primary"
                        addonLeft="upload">点击上传</Button>
            </Upload>
        )
    }
}
