import actions from './CONSTANTS';

const {
    SIDENAV_TOGGLE,
    SCROLL_UP,
    SCROLL_DOWN,
    LOADING_START,
    LOADING_DONE,
} = actions;

export function sideNavToggle() {
    return { type: SIDENAV_TOGGLE }
}
export function scrollUp() {
    return { type: SCROLL_UP }
}
export function scrollDown() {
    return { type: SCROLL_DOWN }
}
export function loadingStart() {
    return { type: LOADING_START }
}
export function loadingDone() {
    return { type: LOADING_DONE }
}