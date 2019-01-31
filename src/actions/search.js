import axios from 'axios';
import actions from './CONSTANTS';
import { url } from './index';
import { loadingStart, loadingDone } from './ui'

const {
    SEARCH_SUCCESS,
    CHANGE_QUERY,
    SEARCH_RESULTS_CLEAR,
} = actions;

export function search(queryMode, query) {
    return async (dispatch) => {
        try {
            dispatch(loadingStart());
            const { data } = await axios.get(url + `/search/${queryMode}?query=` + query);
            dispatch({ type: SEARCH_SUCCESS, data});
        }
        catch(error) {
            console.log(error)
        }
        dispatch(loadingDone());
    }
}
export function changeQuery(query) {
    return {type: CHANGE_QUERY, query}
}
export function searchResultsClear() {
    return {type: SEARCH_RESULTS_CLEAR}
}
