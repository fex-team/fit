/**
 * Created by andycall on 15/12/17.
 */

export const SET_HEADER_HEIGHT = 'SET_HEADER_HEIGHT'
export const SET_FOOTER_HEIGHT = 'SET_FOOTER_HEIGHT'
export const SET_SIDERBAR_WIDTH = 'SET_SIDERBAR_WIDTH'
export const SET_SIDERBAR_DIRECTION = 'SET_SIDERBAR_DIRECTION'

export function setHeaderHeight(height) {
    return {
        type: SET_HEADER_HEIGHT,
        height
    }
}

export function setFooterHeight(height) {
    return {
        type: SET_FOOTER_HEIGHT,
        height
    }
}

export function setSiderBarWidth(width) {
    return {
        type: SET_SIDERBAR_WIDTH,
        width
    }
}

export function setSiderbarDirection(direction) {
    return {
        type: SET_SIDERBAR_DIRECTION,
        direction
    }
}
