import React from 'react'
import FitUpload from 'fit-upload'

var test = 'tp://ti' + 'eba' + '.bai';

class TBUpload extends React.Component {
    constructor(...args) {
        super(...args);
        this.displayName = 'TBUpload';

        var defaultFileList = [];
        // console.log @props.value
        if (this.props.value !== '') {
            defaultFileList.push({
                name: this.props.value.split('/').slice(-1)[0],
                status: 'done',
                url: this.props.value,
                thumbUrl: this.props.value
            });
        }
        this.state = {
            fileList: defaultFileList
        };
    }
    onChange(info) {
        // console.log(info.file);
        if (info.file.status === 'done' && info.file.response.success) {
            // console.log(info.file);
            var filename = `http://tieba.baidu.com/tb/cms/ngmis/${info.file.response.result.file_name}`;
            this.props.onChange(filename);
            return this.setState({
                fileList: [info.file]
            });
        } else if (info.file.response && info.file.response.success === false) {
            this.props.onMessage(`上传出错：${info.file.response.message.field.fail_reason}`, 'error');
            this.setState({
                fileList: this.state.fileList
            });
        }
    }

    hindleBeforeUpload(file) {
        // console.log(file);
        if(!this.props.checkSize) {
            return true;
        }
        let sizes = this.props.checkSize.toLowerCase().split('x');
        let width = parseInt(sizes[0], 10);
        let height = parseInt(sizes[1], 10);
        return new Promise((resolve) => {
            var fileReader = new FileReader();
            fileReader.onload = (e) => {
                var imageObj = new Image();
                imageObj.onload = () => {
                    // console.log(imageObj.width);
                    if(imageObj.width === width && imageObj.height === height) {
                        resolve();
                    } else {
                        this.props.onMessage(`图片尺寸不对，请上传“${this.props.checkSize}”大小的图片`, 'error');
                        this.setState(this.state);
                    }
                }
                imageObj.src = e.target.result;
            };
            fileReader.readAsDataURL(file);
        });
    }

    render() {
        var data = {
            app_id: 'cms_r',
            user_name: 'tbuploader404',
            password: 'Rd650Pw@tieba',
            top_ch_spell: 'tieba',
            type: 0,
            url: 'ht' + test + 'du.com/tb/cms/ngmis/',
            group_id: 6,
            noUnZip: 1
        };
        return (
            <FitUpload 
                name={this.props.name}
                value={this.state.fileList || this.props.defaultFileList}
                listType={this.props.listType}
                data={data}
                action="/autorout/upload"
                beforeUpload={(...args) => this.hindleBeforeUpload(...args)}
                onChange={(info) => this.onChange(info)}>
                {this.props.children}
            </FitUpload>
        );
    }
}

TBUpload.defaultProps = {
    value: '',
    defaultFileList: [],
    onMessage() {}
};

export default TBUpload;
