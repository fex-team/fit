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
        let innerStyle = {
            textAlign: 'center',
            padding: '40px 0'
        };

        return (
            <Upload type="drag" 
                action="/"
                name="file"
                field="file"
                listType="picture"
                value={defaultFiles}
                extraData={{ test: 1 }} >
                <div style={innerStyle}>拖拽上传</div>
            </Upload>
        )
    }
}
