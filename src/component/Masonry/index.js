import React, { Component } from 'react';
import { connect } from 'react-redux';
import Masonry from './Masonry';
import { search, changeQuery, searchResultsClear, postFetchRequest } from '../../actions';

class MasonryWrap extends Component {
    render() {
        const { MasonryState, MasonryDispatch, ArticlePreviewDispatch, match } = this.props;
        MasonryState.match = match;

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
        query: search.query,
        isLoading: ui.isLoading,
    }
});
const mapDispatchToProps = dispatch => ({
    MasonryDispatch: {
        search      : (queryMode, query) => dispatch(search(queryMode, query)),
        changeQuery : query => dispatch(changeQuery(query)),
        searchResultsClear: () => dispatch(searchResultsClear()),
    },
    ArticlePreviewDispatch: {
        postFetchRequest: postId => dispatch(postFetchRequest(postId))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(MasonryWrap)