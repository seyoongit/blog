import React from 'react';
import { Container, List,  Segment, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const config = {
    notice:         { title: 'Notice',       iconName: 'warning circle', iconColor: 'red'},
    categories:     { title: 'Categories',   iconName: 'folder open',    iconColor: 'blue'},
    recentTitles:   { title: 'Recent Posts', iconName: 'file text',      iconColor: 'olive'}
}

const NavList = ({ items, NavListDispatch, mode }) => {
    const { title, iconColor, iconName } = config[mode];
    const { sideNavToggle, postFetchRequest, search } = NavListDispatch; 

    return (
        <Container className='Category'>

            <Container id='categoryTitle'>
                {title} <Icon name={iconName} size='small' color={iconColor} /> 
            </Container>
            
            <List as={Segment} animated basic relaxed >
                {mode==="notice" && 
                    <Link
                    to={`/`}
                    onClick={() => {postFetchRequest(0); sideNavToggle();}} >
                        <List.Item id='menuItem' content="About Me" />
                    </Link> 
                }
                {mode==="categories" && items.map(item => 
                    <Link
                    to={`/category/${item}`}
                    key={item}
                    onClick={() => { search("category", item); sideNavToggle(); }} >
                        <List.Item id='menuItem' content={item} />
                    </Link> 
                )}
                {mode==="recentTitles" && items.map(item => 
                    <Link 
                    to={`/${item.postId}`} 
                    key={item.postId}
                    onClick={() => {postFetchRequest(item.postId); sideNavToggle(); } } >
                        <List.Item id='menuItem' content={item.title} />
                    </Link> 
                )}
            </List>
        </Container>
    )
};

export default NavList