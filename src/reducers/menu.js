import actions from '../actions/CONSTANTS';
import { createReducer } from './'

const {
    MENU_FETCH_SUCCESS,
 } = actions;
 
const initialState = {
    categories: [], // ["cate1", "cate2"]
    recentTitles: [], // [{postId: 0, title: "About mei"}, {postId: 42, title: "some title"}]
};

export default createReducer(initialState, {
    [MENU_FETCH_SUCCESS](menu, { data, menuName }) {
        return Object.assign({...menu}, {[menuName]: data})
    },
})