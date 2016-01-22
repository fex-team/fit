const style = {
    container: {
        position: 'relative'
    },
    containerBottom: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%'
    },
    inputContainer: {
        display: 'flex',
        alignItems: 'center',
        padding: 7,
        background: 'whitesmoke'
    },
    // 输入框
    input: {
        border: 'none',
        fontSize: 16,
        padding: 10,
        background: 'whitesmoke',
        outline: 'none',
        flexGrow: 1
    },
    // 发帖按钮
    submit: {
        border: '1px solid #ccc',
        borderRadius: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'white',
        width: 60,
        height: 30
    },
    // 字体图标
    font: {
        fontSize: 35
    }
}

export default style