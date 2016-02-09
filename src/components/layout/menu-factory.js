import classNames from 'classnames'
import { Link } from 'react-router'
import { Row, Col } from 'fit-layout'

const menuFactory = (data)=> {
    return data.map((item, index)=> {
        let iconClass = classNames(['fa', 'fa-' + item.icon])
        return (
            <Link key={index}
                  className="item"
                  activeClassName="active"
                  to={`components${item.path}`}>
                <Row>
                    <Col span="5"
                         style={{paddingLeft:10}}>
                        <i style={{marginRight:10}}
                           className={iconClass}></i>
                    </Col>
                    <Col span="19">
                        {item.title}
                    </Col>
                </Row>
            </Link>
        )
    })
}

export default menuFactory