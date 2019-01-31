import React from 'react';
import { Menu, Button } from 'semantic-ui-react';

const Toggler = ({ TogglerDispatch }) => {
    const { onClick } = TogglerDispatch;
    
    return (
        <Menu secondary borderless>
            <Menu.Item position='right'>
                <Button
                icon='x'
                color='orange'
                size='big'
                inverted 
                onClick={onClick} />
            </Menu.Item>
        </Menu>
    )
};

export default Toggler