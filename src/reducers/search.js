import actions from '../actions/CONSTANTS';
import { createReducer } from './'

const {
    SEARCH_SUCCESS,
    CHANGE_QUERY,
    SEARCH_RESULTS_CLEAR,
} = actions;
 
const initialState = {
    query: "",
    resultsNumber: 0,
    results : [],
 };

export default createReducer(initialState, {
    [SEARCH_SUCCESS](search, { data }) {
        if (!data) data = [];
        return Object.assign({...search}, { results: data })
    },
    [CHANGE_QUERY](search, { query }) {
        return Object.assign({...search}, { query })
    },
    [SEARCH_RESULTS_CLEAR](search) {
        return Object.assign({...search}, { results: [] })
    }
})

