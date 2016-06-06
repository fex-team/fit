import React from 'react'
import Gaea from 'fit-gaea'

import Button from './components/button'

const info = {
    components: [Button],
    pageInfo  : {
        // 只有 component 不会变
        component: 'gaea-layout',
        // 这是可能会变,存在 state 里
        props    : {
            name   : '外壳',
            options: {
                width        : {
                    value   : '100%',
                    editable: false
                },
                flexGrow     : {
                    value   : 1,
                    editable: false
                },
                flexDirection: {
                    value: 'column'
                }
            }
        },
        // 这是可能会变,存在 state 里
        childs   : [{
            component: 'gaea-button'
        }, {
            component: 'gaea-button'
        }, {
            component: 'gaea-button'
        }, {
            component: 'gaea-layout',
            childs   : [{
                component: 'gaea-button',
                props    : {
                    options: {
                        text: {
                            value: '按钮1'
                        }
                    }
                }
            }, {
                component: 'gaea-button',
                props    : {
                    options: {
                        text: {
                            value: '按钮2'
                        }
                    }
                }
            }, {
                component: 'gaea-button',
                props    : {
                    options: {
                        text: {
                            value: '按钮3'
                        }
                    }
                }
            }, {
                component: 'gaea-button',
                props    : {
                    options: {
                        text: {
                            value: '按钮4'
                        }
                    }
                }
            }, {
                component: 'gaea-button',
                props    : {
                    options: {
                        text: {
                            value: '按钮5'
                        }
                    }
                }
            }]
        }, {
            component: 'gaea-button'
        },]
    }
}

export default class Designer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        document.title = '在线编辑器 - 盖亚'
    }

    render() {
        return (
            <Gaea {...info}/>
        )
    }
}