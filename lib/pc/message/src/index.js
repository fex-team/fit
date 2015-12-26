import Notice from './notice'

function notice(content, duration = 2, type = 'info', onClose = ()=> {
}) {
    let instance = Notice.newInstance({
        content: content,
        type: type
    })

    setTimeout(()=> {
        instance.destroy()
        onClose()
    }, duration * 1000)
}

export default {
    info(content, duration, onClose) {
        return notice(content, duration, 'info', onClose)
    },
    success(content, duration, onClose) {
        return notice(content, duration, 'success', onClose)
    },
    error(content, duration, onClose) {
        return notice(content, duration, 'error', onClose)
    },
    warning(content, duration, onClose) {
        return notice(content, duration, 'warning', onClose)
    },
    loading(content, duration, onClose) {
        return notice(content, duration, 'loading', onClose)
    }
}