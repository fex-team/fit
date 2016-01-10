import React from 'react'
import classNames from 'classnames'
import Input from 'fit-input'
import $ from 'jquery'
import './index.scss'

let interval = null

const reg = (input)=> {
    let flags = 'g'
    return new RegExp(input, flags)
}

export default class AutoComplete extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputWidth: 0,
            showComplete: false,
            datas: [],
            value: '',

            // 当前选中第几个
            selectIndex: -1
        }

        // 点击document
        this.handleDocumentClick = (event)=> {
            if (!this._isMounted)return
            if (!$.contains(this.dom, event.target)) {
                this.setState({
                    showComplete: false
                })
            }
        }
    }

    componentDidMount() {
        this._isMounted = true
        this.dom = ReactDOM.findDOMNode(this)
        $(document).on('click', this.handleDocumentClick)
    }

    componentWillUnmount() {
        this._isMounted = false
        $(document).off('click', this.handleDocumentClick)
    }

    handleFocus() {
        this.setState({
            inputWidth: $(this.dom).find('#j-input').outerWidth(),
            showComplete: true
        })
    }

    handleChange(value) {
        this.setState({
            value: value
        })
        this.searchValue = value

        clearInterval(interval)
        interval = setTimeout(()=> {
            $.ajax({
                url: this.props.url,
                method: this.props.method,
                data: this.props.beforeSend(value)
            }).done((res)=> {
                this.setState({
                    datas: this.props.complete(res),
                    selectIndex: -1
                })
            })
        }, this.props.delay)
    }

    handleSelect(value, index, close = true) {
        this.setState({
            value: value,
            selectIndex: index,
            showComplete: !close
        }, ()=> {
            this.props.onSelect(value)
        })
    }

    handleKeyDown(event) {
        if (this.state.datas.length === 0) return

        switch (event.keyCode) {
        case 40:
            let newUpIndex = this.state.selectIndex + 1
            if (newUpIndex > this.state.datas.length - 1) {
                newUpIndex = 0
            }
            this.handleSelect(this.state.datas[newUpIndex], newUpIndex, false)
            // 上
            break
        case 38:
            let newDownIndex = this.state.selectIndex - 1
            if (newDownIndex < 0) {
                newDownIndex = this.state.datas.length - 1
            }
            this.handleSelect(this.state.datas[newDownIndex], newDownIndex, false)
            // 下
            break
        }
    }

    render() {
        let completeContainerStyle = {
            width: this.state.inputWidth,
            display: this.state.showComplete ? 'block' : null
        }

        let Items = this.state.datas.map((item, index)=> {
            let itemClass = classNames({
                'item': true,
                'active': index === this.state.selectIndex
            })

            let regex = reg(this.searchValue)
            let matchedString = item.replace(regex, '<span class="highlight">' + this.searchValue + '</span>')

            return (
                <div onClick={this.handleSelect.bind(this,item,index)}
                     key={index}
                     className={itemClass}
                     dangerouslySetInnerHTML={{__html: matchedString}}></div>
            )
        })

        return (
            <div className="_namespace">
                <Input onFocus={this.handleFocus.bind(this)}
                       value={this.state.value}
                       onKeyDown={this.handleKeyDown.bind(this)}
                       onChange={this.handleChange.bind(this)}
                    {...this.props.inputOpts}/>
                <div className="complete-container"
                     style={completeContainerStyle}>
                    {Items}
                </div>
            </div>
        )
    }
}

AutoComplete.defaultProps = {
    // 输入框参数
    inputOpts: {},

    // 请求类型
    method: 'get',

    // 访问地址
    url: '',

    // 选中时回调
    onSelect: (value)=> {
    },

    // 发送前
    beforeSend: (value)=> {
        return value
    },

    // 发送后
    complete: (res)=> {
        return res
    },

    // 发送延迟
    delay: 0
}