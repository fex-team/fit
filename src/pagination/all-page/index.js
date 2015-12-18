import React from 'react'
import classNames from 'classnames'
import './index.scss'

// 根据当前页,总页数生成展示页数列表,...用null表示
let getMiddleNumbers = (current, all)=> {
    if (all <= 7) {
        let arrs = []
        for (let i = 0; i < all; i++) {
            arrs.push(i + 1)
        }
        return arrs
    }

    if (current <= 4) {
        return [1, 2, 3, 4, 5, 6, null, all]
    }

    if (all - current < 5) {
        let arr = [1, null]
        for (let i = all - 6; i <= all; i++) {
            arr.push(i)
        }
        return arr
    }

    let arr = [1, null]
    for (let i = current - 2; i <= current + 3; i++) {
        arr.push(i)
    }
    arr.push(null)
    arr.push(all)
    return arr
}

export default class AllPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: this.props.defaultPage,
            prevPage: this.props.defaultPage,
            activeButtonName: ''
        }
    }

    handleChange(page, disable, activeButtonName) {
        if (disable)return
        let tempPage = this.state.currentPage
        this.setState({
            currentPage: page,
            prevPage: tempPage,
            activeButtonName: activeButtonName
        }, ()=> {
            this.props.onChange(page)
        })
    }

    render() {
        let beforeClass = classNames({
            'before': true,
            'disabled': this.state.currentPage === 1 || this.props.loading
        })

        let afterClass = classNames({
            'after': true,
            'disabled': this.state.currentPage === this.props.allPage || this.props.loading
        })

        let beforeLoading = null
        let afterLoading = null

        switch (this.state.activeButtonName) {
        case 'before':
            if (!this.props.loading) break
            beforeLoading = (
                <i className="fa fa-circle-o-notch fa-spin loading"/>
            )
            break
        case 'after':
            if (!this.props.loading) break
            afterLoading = (
                <i className="fa fa-circle-o-notch fa-spin loading"/>
            )
            break
        }

        // 中间页数字
        let middleNum = []

        if (!this.props.loading) {
            middleNum = getMiddleNumbers(this.state.currentPage, this.props.allPage)
        } else {
            middleNum = getMiddleNumbers(this.state.prevPage, this.props.allPage)
        }

        let middleNumbers = middleNum.map((number, index)=> {
            if (number !== null) {
                let numberClass = classNames({
                    'disabled': this.props.loading,
                    'active': number === this.state.currentPage && !this.props.loading
                })

                let numberAfterLoading = null
                if (this.state.activeButtonName === number && this.props.loading) {
                    numberAfterLoading = (
                        <i style={{marginLeft:5}}
                           className="fa fa-circle-o-notch fa-spin loading"/>
                    )
                }

                return (
                    <div key={index}
                         className={numberClass}
                         onClick={this.handleChange.bind(this,number,this.props.loading||number===this.state.currentPage,number)}>{number}{numberAfterLoading ? numberAfterLoading : null}</div>
                )
            } else {
                return (
                    <div key={index}
                         className="disabled">...</div>
                )
            }
        })

        return (
            <nav className="_namespace">
                <div className="pagination">
                    <div className={beforeClass}
                         onClick={this.handleChange.bind(this,this.state.currentPage-1,(this.state.currentPage === 1 || this.props.loading),'before')}>
                        {beforeLoading ? beforeLoading : null}<i className="fa fa-chevron-left"/>
                    </div>

                    {middleNumbers}

                    <div className={afterClass}
                         onClick={this.handleChange.bind(this,this.state.currentPage+1,(this.state.currentPage === this.props.allPage || this.props.loading),'after')}>
                        <i className="fa fa-chevron-right"/>{afterLoading ? afterLoading : null}
                    </div>
                </div>
            </nav>
        )
    }
}

AllPage.defaultProps = {
    defaultPage: 1,
    allPage: 10,
    onChange: ()=> {
    }
}