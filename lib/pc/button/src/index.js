import 'fit-style'

import ButtonComponent from './button'
import GroupComponent from './group'

export default ButtonComponent

export class Button extends ButtonComponent {
    constructor(props) {
        super(props)
        this.state = {}
    }
}



export class ButtonGroup extends GroupComponent {
    constructor(props) {
        super(props)
        this.state = {}
    }
}