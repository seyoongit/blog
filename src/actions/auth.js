import actions from './CONSTANTS';
import { dimmerMessage } from './dimmer'
import { loadingStart, loadingDone } from './ui'

const {
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_REJECTED,
    AUTH_YOU_ARE_LOCKED,
    AUTH_LOGOUT,
} = actions;

export function authLoginRequest({id, password}) {
    const HARDCODED_ID = "admin"
    const HARDCODED_PASSWORD = "123"

    return async (dispatch, getState) => {
        dispatch(loadingStart());
        await new Promise(resolve => {
            setTimeout(() => {
                if (id === HARDCODED_ID && password === HARDCODED_PASSWORD) {
                    dispatch({ type: AUTH_LOGIN_SUCCESS });
                    dispatch(dimmerMessage("로그인 성공"));
                }
                else {
                    dispatch({ type: AUTH_LOGIN_REJECTED });
                    dispatch(dimmerMessage("로그인 실패. 아이디와 비밀번호를 확인하세요"));
                    
                    const { loginRejectionCount } = getState()
                    if (loginRejectionCount >= 2) {
                        dispatch({ type: AUTH_YOU_ARE_LOCKED })
                    }
                }
                dispatch(loadingDone());
                resolve()
            }, 300)
        })
    }
}
export function authLogoutRequest() {
    return { type: AUTH_LOGOUT }
}
