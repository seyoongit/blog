import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import SocialMenu from './SocialMenu';
import './css/TopNav.css';

class TopNav extends Component {
    state = {
        scrollY: 0
    }
    componentDidMount() {        
        window.addEventListener("scroll", this.onScroll, { passive: true });
    }  
    componentWillUnmount() {        
        window.removeEventListener('scroll', this.onScroll);
    }  
    onScroll = e => {
        const { scrollUp, scrollDown } = this.props.TopNavDispatch;
        const { isScrolledUp } = this.props.TopNavState;
        const { scrollY: prevScrollY } = this.state;
        const scrollY = window.scrollY;

        if ((scrollY < prevScrollY) && !isScrolledUp) scrollUp()
        if ((scrollY > prevScrollY) && isScrolledUp) scrollDown()
        this.setState({ scrollY })
    }
    render() {
        const { TopNavState, SocialMenuState, SocialMenuDispatch } = this.props;
        const { isScrolledUp } = this.props.TopNavState;
        const { postFetchRequest } = this.props.TopNavDispatch;
        const { isSideNavOpen, isLoggedIn } = TopNavState;
        return (
            <Menu 
            className={classNames('TopNav', !isSideNavOpen && isScrolledUp ? 'show' : 'hide' )}
            fixed='top'
            size='mini'
            compact
            borderless>
                <Menu.Item id='homeButton' content={<Link to='/' onClick={() => postFetchRequest("0")}>SeYoon<span>Kim</span></Link>} />
                {isLoggedIn
                    ? <Menu.Item position='right' content={<Link to='/admin' id='adminLink'>넌 로그인되어있다</Link>}/>
                    : <SocialMenu SocialMenuState={SocialMenuState} SocialMenuDispatch={SocialMenuDispatch} />
                }     
            </Menu>
        )
    }
};

export default TopNav