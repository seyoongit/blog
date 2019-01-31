import React from 'react';
import { Button } from 'semantic-ui-react';

const AdminButton = ({AdminButtonState, AdminButtonDispatch}) => {
    const { isLoggedIn, youAreLocked } = AdminButtonState;
    const { onClick, onClickLogout } = AdminButtonDispatch;

    return (
        <div className='AdminButton'>
            <Button
            disabled={youAreLocked}
            icon='steam' 
            content={isLoggedIn ? 'LogOut' : 'Admin'} 
            size='massive'
            color='orange' 
            inverted
            compact
            onClick={isLoggedIn ? onClickLogout : onClick} />
        </div>
    )
};

export default AdminButton