import React, { Component } from 'react';
import { connect } from 'react-redux';
import Masonry from './Masonry';
import { search, changeQuery, searchResultsClear, postFetchRequest } from '../../actions';

class MasonryWrap extends Component {
    componentDidMount() {
        const { match, search, changeQuery } = this.props;
        const { path, params } = match;
        const queryMode = path.split('/')[1];
        const queryParameter = params.query;
        if (queryMode === 'category' || queryMode === 'search') {
            search(queryMode, queryParameter);
            changeQuery(queryParameter);
        }
    }
    render() {
        const { MasonryState, MasonryDispatch, ArticlePreviewDispatch } = this.props;

        return (
            <Masonry 
            MasonryState={MasonryState} 
            MasonryDispatch={MasonryDispatch} 
            ArticlePreviewDispatch={ArticlePreviewDispatch} />
        )
    }
};
const mapStateToProps = ({ search, ui }) => ({
    MasonryState: {
        results: search.results,
    }
});
const mapDispatchToProps = dispatch => ({
    search(queryMode, query) {
        dispatch(search(queryMode, query));
    },
    changeQuery(query) {
        dispatch(changeQuery(query));
    },
    MasonryDispatch: {
        changeQuery(query) {
            dispatch(changeQuery(query));
        },
        searchResultsClear() {
            dispatch(searchResultsClear());
        },
    },
    ArticlePreviewDispatch: {
        postFetchRequest(postId) {
            dispatch(postFetchRequest(postId));
        },
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(MasonryWrap)