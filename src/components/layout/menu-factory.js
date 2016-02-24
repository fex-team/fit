import { Link } from 'react-router'
import { Row, Col } from 'fit-layout'

const menuFactory = (data)=> {
    return data.map((item, index)=> {
        return (
            <Link key={index}
                  className="item"
                  activeClassName="active"
                  to={`components${item.path}`}>
                {item.title}
            </Link>
        )
    })
}

export default menuFactory