import React from 'react'
import classNames from 'classnames'
import './index.scss'

export default class TreeNode extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showChildren: this.props.defaultExpendAll || this.props.showChildren
        }
    }

    handleTitleClick() {
        this.setState({
            showChildren: !this.state.showChildren
        })
        this.props.onClick(this.props.title)
    }

    render() {
        let childrenStyle = {
            'display': this.state.showChildren ? 'block' : null
        }

        let titleCaretClass = classNames({
            'fa': true,
            'caret-left': true,
            'fa-caret-right': !this.state.showChildren,
            'fa-caret-down': this.state.showChildren
        })

        let Children = React.Children.map(this.props.children, (item)=> {
            return React.cloneElement(item, {
                defaultExpendAll: this.props.defaultExpendAll
            })
        })

        return (
            <div className="_namespace">
                <div onClick={this.handleTitleClick.bind(this)}
                     className="title">
                    {React.Children.count(this.props.children) > 0 ?
                        <div className="title-caret">
                            <i className={titleCaretClass}/>
                        </div> : <div className="empty-caret"/>
                    }
                    {this.props.title || this.props.render()}
                </div>
                <div style={childrenStyle}
                     className="children">
                    {Children}
                </div>
            </div>
        )
    }
}

TreeNode.defaultProps = {
    title: '',
    showChildren: false,
    defaultExpendAll: false,
    render: ()=> {
    },
    onClick: (title)=> {
    }
}