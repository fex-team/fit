import * as React from "react"

// libs
import * as request from 'superagent'

// self Components
import UploadFileList from './upload-file-list';

interface UploadProps {
    action: string;
    fileList?: Array<FileInfo>;
    name?: string;
    onChange?: Function;
    type?: string;
    children?: React.ReactChildren;
    style?: React.CSSProperties;
    extraData?: Object;
    field: string;
    listType: string; // text \ picture \ none
    accept: string;
    multiple: boolean;
}

interface FileInfo {
    name: string;
    url: string;
}

interface UploadState {
    dragStatus?: string;
    progressInfo?: Object;
    fileList?: Array<FileInfo>;
}

function extendStyle (a, b) {
    for (var i in b) {
        a[i] = b[i];
    }
    return a;
}

export default class Upload extends React.Component<UploadProps, UploadState> {

    state: UploadState = {
        dragStatus: 'drag',
        progressInfo: {}
    };

    static defaultProps = {
        value: [],
        defaultValue: [],
        name: '',
        action: '',
        onChange(){},
        type: 'normal',
        extraData: {},
        listType: 'text',
        multiple: true
    };

    private _fileInput: HTMLInputElement;

    private getStyles() {
        return {
            dragDefault: {
                border: '2px dashed #dee5e7',
                minHeight: 20,
                height: '100%',
                boxSizing: 'border-box',
                backgroundColor: '#fff',
            },
            transparentInput: {
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                opacity: 0,
            },
            dragStart: {
                border: '2px dashed #aaaaaa',
            }
        };
    }

    private onFileChange (e: React.FormEvent) {
        e.preventDefault();
        e.stopPropagation();
        // TODO: 显示文件列表和准备上传动画
        this.upload(this._fileInput.files);
    }

    private upload (files: FileList) {
        for (var i = 0; i < files.length; i++) {
            this.post(files[i]);
        }
    }

    private post (file: File) {
        var data = new FormData();
        data.append(this.props.field, file);
        for (var key in this.props.extraData) {
            data.append(key, this.props.extraData[key]);
        }
        // console.log(data);
        request.post(this.props.action)
        .send(data)
        .on('progress', (e) => {
            var progressInfo = this.state.progressInfo;
            progressInfo[file.name] = e.percent;
            this.setState({
                progressInfo: progressInfo
            });
            console.log(e.percent);
        })
        .end((err, res) => {
            if (!err) {
                var progressInfo = this.state.progressInfo;
                delete progressInfo[file.name];
                // console.log(res);
                this.props.onChange(file.name, {
                    response: res.body || res.text,
                    status: 'done',
                    name: file.name
                });
                this.setState({
                    progressInfo: progressInfo
                });
            } else {
                this.props.onChange(file.name, {
                    response: res.body || res.text,
                    status: 'error',
                    name: file.name
                });
            }
        });
    }

    private onFileDrop (e: React.DragEvent) {
        this.setState({
            dragStatus: e.type
        });
        if (e.type === 'dragover') {
            return e.preventDefault();
        }

        const files = e.dataTransfer.files;
        this.upload(files);
        e.preventDefault();
    }

    private fileListRender (): JSX.Element {
        // TODO 文件列表
        if (this.props.listType === 'none') {
            return null;
        }
        return <UploadFileList type={this.props.listType} list={this.props.fileList}/>;
    }

    private progressListRender (): JSX.Element {
        return (
            <div>
            {
                Object.keys(this.state.progressInfo).map((key) => {
                    return this.progressItemRender(key, this.state.progressInfo[key]);
                })
            }
            </div>
        );
    }

    private progressItemRender (key: string, pos: number): JSX.Element {
        var itemStyle = {
            transition: 'margin .3s ease, opacity .3s ease',
            margin: '10px 0',
        };
        var itemTextStyle = {
            fontSize: 12,
            color: '#98a6ad',
            marginBottom: 5
        };
        var progressStyle = {
            overflow: 'hidden',
            height: 2,
            borderRadius: 4,
            backgroundColor: '#edf1f2',
        };
        var progressInnerStyle = {
            backgroundColor: '#23b7e5',
            height: 2,
            borderRadius: 4,
            transition: 'width .3s linear',
            width: `${pos}%`
        }
        return (
            <div style={itemStyle} key={key}>
                <div style={itemTextStyle}>{key}:</div>
                <div style={progressStyle}>
                    <div style={progressInnerStyle}></div>
                </div>
            </div>
        );
    }

    private fileInputRender (style) {
        return (
            <input ref={(c) => this._fileInput = c}
                type="file"
                accept={this.props.accept}
                multiple={this.props.multiple}
                style={style}
                onChange={(e) => this.onFileChange(e)}/>
        );
    }

    render () {
        var props = this.props;
        var styles = this.getStyles();
        var fileList = this.fileListRender();

        if (props.type === 'drag') {

            var dragStyle = this.state.dragStatus === 'dragover' ? extendStyle(styles.dragDefault, styles.dragStart) : styles.dragDefault;

            return (
                <div style={ props.style }>
                    { this.fileInputRender({display: 'none'}) }
                    <div style={ dragStyle } onDrop={this.onFileDrop.bind(this)} onDragOver={this.onFileDrop.bind(this)} onClick={() => this._fileInput.click()}>
                        { props.children }
                    </div>
                    { this.progressListRender() }
                    { fileList }
                </div>
            );
        } else if (props.type === 'button') {
            // TODO: 上传按钮样式
            return (
                <div>
                    <div style={ props.style }>
                        { this.fileInputRender(styles.transparentInput) }
                        { props.children }
                    </div>
                    { this.progressListRender() }
                    { fileList }
                </div>
            );
        }

        return (
            <div>
                { this.fileInputRender(props.style) }
                { this.progressListRender() }
                { fileList }
            </div>
        );
    }
}
