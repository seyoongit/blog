import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchAndToggler from './SearchAndToggler';
import { sideNavToggle, dimmerActivate } from '../../actions/';

class SearchAndTogglerContainer extends Component {
    render() {
        const { SearchAndTogglerState, TogglerState, TogglerDispatch, SearchState, SearchDispatch } = this.props;
        
        return (
            <SearchAndToggler
            SearchAndTogglerState={SearchAndTogglerState}
            TogglerState={TogglerState}
            TogglerDispatch={TogglerDispatch}
            SearchState={SearchState}
            SearchDispatch={SearchDispatch} />
        )
    }
};
const mapStateToProps = ({ui}) => ({
    SearchAndTogglerState: {
        isSideNavOpen: ui.isSideNavOpen,
    },
    SearchState: {
        isScrolledUp: ui.isScrolledUp,
        isSideNavOpen: ui.isSideNavOpen,
    },
    TogglerState: {
        isScrolledUp: ui.isScrolledUp,
        isSideNavOpen: ui.isSideNavOpen,
    },
});
const mapDispatchToProps = dispatch => ({
    SearchDispatch:{
        onClick: e => {
            dispatch(dimmerActivate("search"));
        }
    },
    TogglerDispatch: {
        onClick: e => {
            dispatch(sideNavToggle());
            window.scrollTo(0,0)
        }
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchAndTogglerContainer);