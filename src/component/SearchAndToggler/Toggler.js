import React from 'react'
import { Button } from 'semantic-ui-react'
import classNames from 'classnames';

const Toggler = ({ mobile=false, TogglerState, TogglerDispatch}) => {
    
    const size = mobile ? 'medium' : 'massive';
    const { isScrolledUp, isSideNavOpen } = TogglerState;
    const { onClick } = TogglerDispatch;
    return ( 
        <Button
        className={classNames('Toggler', !isSideNavOpen && isScrolledUp ? 'rightShow' : 'rightHide' )}
        icon='content'
        color='orange'
        size={size}
        inverted 
        floated='right'
        onClick={onClick} /> 
    )
};

export default Toggler;