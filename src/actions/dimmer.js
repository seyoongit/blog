import actions from './CONSTANTS';

const {
    DIMMER_ACTIVATE,
    DIMMER_INACTIVATE,
    DIMMER_MESSAGE,
} = actions;

export function dimmerActivate(mode) {
    return { type: DIMMER_ACTIVATE, mode }
}
export function dimmerInactivate() {
    return { type: DIMMER_INACTIVATE }
}
export function dimmerMessage(message) {
    return { type: DIMMER_MESSAGE, message }
}