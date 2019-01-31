import React from 'react';
import { Button } from 'semantic-ui-react';
import classNames from 'classnames';

const Search = ({ mobile=false, SearchState, SearchDispatch }) => {

    const size = mobile ? 'medium' : 'massive';
    const { isScrolledUp, isSideNavOpen } = SearchState;
    const { onClick } = SearchDispatch;
    return (     
        <Button
        className={classNames('Search', !isSideNavOpen && isScrolledUp ? 'leftShow' : 'leftHide' )}
        icon='search'
        color='blue'
        size={size} 
        inverted
        circular
        onClick={onClick} />
    )
};

export default Search;