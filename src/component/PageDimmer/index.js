import React, { Component, } from 'react';
import { connect } from 'react-redux';
import PageDimmer from './PageDimmer';
import { dimmerInactivate, search, changeQuery, authLoginRequest, postFetchRequest } from '../../actions/';

class PageDimmerWrap extends Component {
    render() {
        const { 
            children, 
            PageDimmerState,
            PageDimmerDispatch,
            SearcherState,
            SearcherDispatch,
            SubmitState,
            SubmitDispatch,
            LoginFormState,
            LoginFormDispatch,
        } = this.props;

        return (
            <PageDimmer 
            PageDimmerState={PageDimmerState}
            PageDimmerDispatch={PageDimmerDispatch}
            SearcherState={SearcherState}
            SearcherDispatch={SearcherDispatch}
            SubmitState={SubmitState}          
            SubmitDispatch={SubmitDispatch}
            LoginFormState={LoginFormState}
            LoginFormDispatch={LoginFormDispatch} >
                {children}
            </PageDimmer>
        )
    }
};
const mapStateToProps = ({dimmer, ui, search, auth }) => ({
    PageDimmerState: {
        dimmer
    },
    SubmitState: {
        query: search.query,
    },
    SearcherState: {
        isLoading: ui.isLoading,
        results: search.results,
    },
    LoginFormState: {
        isLoggedIn: auth.isLoggedIn,
        isLoading: ui.isLoading,
        loginRejectionCount: auth.loginRejectionCount,
        youAreLocked: ui.youAreLocked,
    },
});
const mapDispatchToProps = dispatch => ({
    PageDimmerDispatch: {
        onClickOutside(e) {
            dispatch(dimmerInactivate());
            dispatch(changeQuery(''));
        }
    },
    SearcherDispatch: {
        search(queryMode, query) {
            dispatch(search(queryMode, query));
        },
        changeQuery(query) {
            dispatch(changeQuery(query))
        },
        closeDimmer(e) {
            dispatch(dimmerInactivate());
            dispatch(changeQuery(''));
        },
        postFetchRequest(postId) {
            dispatch(postFetchRequest(postId))
        },

    },
    SubmitDispatch: {
        onClick(e) {
            dispatch(dimmerInactivate());
        },
    },
    LoginFormDispatch: {
        authLoginRequest({id, password}) {
            dispatch(authLoginRequest({ id, password }));
        },
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(PageDimmerWrap)