import React, { Component } from 'react'
import { connect } from 'react-redux';
import TopNav from './TopNav'
import { dimmerActivate, dimmerMessage, scrollUp, scrollDown, postFetchRequest } from '../../actions/';

class TopNavWrap extends Component {
    render() {
        const { TopNavState, TopNavDispatch, SocialMenuState, SocialMenuDispatch } = this.props;
        
        return (
            <TopNav
            TopNavState={TopNavState}
            TopNavDispatch={TopNavDispatch}
            SocialMenuDispatch={SocialMenuDispatch}
            SocialMenuState={SocialMenuState} />
        )
    }
};
const mapStateToProps = ({ui, auth}) => ({
    TopNavState: {
        isSideNavOpen: ui.isSideNavOpen,
        isScrolledUp: ui.isScrolledUp,
        isScrolledDown: ui.isScrolledDown,
        isLoggedIn: auth.isLoggedIn,
    },
    SocialMenuState: {
        isLoggedIn: auth.isLoggedIn
    }
});
const mapDispatchToProps = dispatch => ({
    TopNavDispatch: {
        scrollUp() {
            dispatch(scrollUp());
        },
        scrollDown() {
            dispatch(scrollDown());
        },
        postFetchRequest(postId) {
            dispatch(postFetchRequest(postId));
        },
    },
    SocialMenuDispatch: {
        dimmerMessage(message) {
            dispatch(dimmerActivate());
            dispatch(dimmerMessage(message));
        },
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(TopNavWrap)