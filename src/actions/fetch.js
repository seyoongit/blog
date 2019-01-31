import axios from 'axios';
import actions from './CONSTANTS';
import { url } from './';
import { loadingStart, loadingDone } from './ui';

const {
    POST_FETCH_SUCCESS,
    MENU_FETCH_SUCCESS,
} = actions;

export function postFetchRequest(postId) {
    return async dispatch => {
        try {
            dispatch(loadingStart());
            const { data } = await axios.get(url + `/${postId}`)
            dispatch({ type: POST_FETCH_SUCCESS, data });
        }
        catch (error) {
            console.log(error)
        }
        dispatch(loadingDone());
    }
}
export function fetchMenuList(menuName) {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(url + `/menu/${menuName}`);
            dispatch({ type: MENU_FETCH_SUCCESS, data, menuName });
        }
        catch(error) {
            console.log(error)
        }
    }
}
