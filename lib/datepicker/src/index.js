import React from 'react'
import 'fit-style'
import { Datepicker } from 'antd'

import './index.scss'

class _Datepicker extends React.Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <div className="_namespace">
                <Datepicker {...this.props} />
            </div>
        )
    }
}

export default _Datepicker