import actions from '../actions/CONSTANTS';
import { createReducer } from './'

const {
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_REJECTED,
    AUTH_YOU_ARE_LOCKED,
    AUTH_LOGOUT,
} = actions;

const initialState = {
    isLoggedIn: false,
    loginRejectionCount: 0,
    youAreLocked: false,
};

export default createReducer(initialState, {
    [AUTH_LOGIN_SUCCESS](auth) {
        return Object.assign({...auth}, { isLoggedIn: true, loginRejectionCount: 0 });
    },
    [AUTH_LOGIN_REJECTED](auth) {
        return Object.assign({...auth}, { loginRejectionCount: auth.loginRejectionCount + 1, youAreLocked: auth.loginRejectionCount >= 2 });
    },
    [AUTH_YOU_ARE_LOCKED](auth) {
        return Object.assign({...auth}, { youAreLocked: true });
    },
    [AUTH_LOGOUT](auth) {
        return Object.assign({...auth}, { isLoggedIn: false });
    },
})