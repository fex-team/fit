import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import './index.scss'

export default class Notice extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        let typeClass = classNames({
            'lyct': true,
            [this.props.type]: true
        })

        return (
            <div className="_namespace">
                <div className="m-layer z-show">
                    <table>
                        <tbody>
                        <tr>
                            <td>
                                <article className="lywrap">
                                    <section className={typeClass}>
                                        {this.props.content}
                                    </section>
                                </article>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

Notice.newInstance = (props) => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const instance = ReactDOM.render(<Notice {...props}/>, div)

    return {
        destroy() {
            ReactDOM.unmountComponentAtNode(div)
            document.body.removeChild(div)
        }
    }
}