import actions from '../actions/CONSTANTS';
import { createReducer } from './';

const {
    POST_FETCH_SUCCESS,
 } = actions;
 
const initialState = {
    postId: -1,
    title: "Loading...",
    titleImage: "http://placehold.it/300/300",
    content: "Default Content",
    date: "1970-01-01",
    category: "Default Category",
    summary: "Default Summary"
};

export default createReducer(initialState, {
    [POST_FETCH_SUCCESS](post, { data }) {
        if (!data) data = Object.assign(initialState, { title: "포스트가 없습니다" })
        return data
    },
})