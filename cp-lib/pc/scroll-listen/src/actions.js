export const SET_NAIL_INFO = 'SET_NAIL_INFO'
export const CHANGE_ACTIVE_TITLE = 'CHANGE_ACTIVE_TITLE'
export const CHANGE_BOX_ACTIVE_TITLE = 'CHANGE_BOX_ACTIVE_TITLE'
export const RESET_NAIL_INFO = 'RESET_NAIL_INFO'

export function setNailInfo(info) {
    return {
        type: SET_NAIL_INFO,
        info: info
    }
}

export function resetNailInfo() {
    return {
        type: RESET_NAIL_INFO
    }
}

export function changeActiveTitle(title) {
    return {
        type: CHANGE_ACTIVE_TITLE,
        title
    }
}

export function changeBoxActiveTitle(title) {
    return {
        type: CHANGE_BOX_ACTIVE_TITLE,
        title
    }
}