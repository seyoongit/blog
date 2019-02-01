import React, { Component } from 'react';
import { connect } from 'react-redux';
import SideNav from './SideNav';
import { sideNavToggle, postFetchRequest, search, fetchMenuList, dimmerActivate, authLogoutRequest } from '../../actions/';

class SideNavWrap extends Component {
    componentDidMount() {
        const { fetchMenuList } = this.props;
        fetchMenuList("categories");
        fetchMenuList("recentTitles");
    }
    render() {
        const { 
            children,
            SideNavState, 
            SideNavDispatch, 
            TogglerDispatch, 
            NavListDispatch,
            AdminButtonState,
            AdminButtonDispatch, } = this.props;

        return (
            <SideNav
            SideNavState={SideNavState}
            SideNavDispatch={SideNavDispatch}
            TogglerDispatch={TogglerDispatch}
            NavListDispatch={NavListDispatch}
            AdminButtonState={AdminButtonState}
            AdminButtonDispatch={AdminButtonDispatch} >
                {children}
            </SideNav>
        )
    }
};
const mapStateToProps = ({ ui, menu, auth }) => ({
    SideNavState: {
        isSideNavOpen: ui.isSideNavOpen,
        menu
    },
    AdminButtonState: {
        isLoggedIn: auth.isLoggedIn,
        youAreLocked: auth.youAreLocked,
    },
});
const mapDispatchToProps = dispatch => ({
    fetchMenuList(menuName) {
        dispatch(fetchMenuList(menuName))
    },
    SideNavDispatch: {
        onClick(e) {
            dispatch(sideNavToggle());
        }
    },
    TogglerDispatch: {
        onClick(e) {
            dispatch(sideNavToggle());
        }
    },
    NavListDispatch: {
        postFetchRequest(postId) {
            dispatch(postFetchRequest(postId));
        },
        search(queryMode, query) {
            dispatch(search(queryMode, query));
        },
        sideNavToggle() {
            dispatch(sideNavToggle());
        }
    },
    AdminButtonDispatch: {
        onClick(e) {
            dispatch(dimmerActivate("login"));
        },
        onClickLogout(e) {
            dispatch(authLogoutRequest());
        },
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SideNavWrap)