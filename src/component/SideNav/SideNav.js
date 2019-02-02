import React, { Component } from 'react';
import { Sidebar, Menu, Image } from 'semantic-ui-react';
import NavList from './NavList';
import Toggler from './Toggler';
import AdminButton from './AdminButton';
import './css/SideNav.css';

class SideNav extends Component {
    render() {
        const { 
            SideNavState, 
            SideNavDispatch, 
            TogglerDispatch, 
            NavListDispatch, 
            AdminButtonState, 
            AdminButtonDispatch, 
            children } = this.props;

        const { isSideNavOpen, menu } = SideNavState;
        const { onClick } = SideNavDispatch;
        const { categories, recentTitles } = menu;
        
        return (
            <Sidebar.Pushable className='SideNav' >
                <div id='background' onClick={onClick}>
                    <Image src="https://i.imgur.com/jeABdSa.jpg" alt='background-picture' hidden={!isSideNavOpen}/> 
                </div>
                <aside style={{position: "absolute", height: document.getElementById('root').offsetHeight }}>
                    <Sidebar
                    as={Menu}
                    id='sideNav'
                    animation='scale down'
                    width='very wide'
                    direction='right'
                    visible={isSideNavOpen}
                    vertical
                    borderless >
                        <Toggler TogglerDispatch={TogglerDispatch} />
                        <nav>
                            <Menu.Item content={<NavList items={[]} NavListDispatch={NavListDispatch} mode={"notice"} />} />
                            <Menu.Item content={<NavList items={categories} NavListDispatch={NavListDispatch} mode={"categories"} />} />
                            <Menu.Item content={<NavList items={recentTitles} NavListDispatch={NavListDispatch} mode={"recentTitles"} />} />
                        </nav>
                        <AdminButton AdminButtonState={AdminButtonState} AdminButtonDispatch={AdminButtonDispatch} />

                    </Sidebar>
                </aside>
                
                <Sidebar.Pusher className={isSideNavOpen ? 'zoomOutLeft' : 'zoomInLeft'} id='pusher'>
                    <main style={{background: "white"}}>
                        <article>
                            {children}
                        </article>
                    </main>
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        )
    }
};

export default SideNav
