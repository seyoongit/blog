import React, { Component } from 'react';
import { Menu, Button } from 'semantic-ui-react';

class SocialMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ButtonConfigs: [
                { color: 'facebook', icon: 'facebook', size: 'small', circular: true, onClick: this.onClickFB },
                { color: 'twitter', icon: 'twitter', size: 'small', circular: true },
                { color: 'google plus', icon: 'google', size: 'small', circular: true },
                { color: 'yellow', icon: 'comment', size: 'small', circular: true, },
            ]
        }
    }
    render() {
        const { isLoggedIn } = this.props.SocialMenuState;
        const { ButtonConfigs } = this.state;

        return (
            <Menu.Menu position='right'>
                {isLoggedIn && 
                    <Menu.Item as={Button} onClick={this.onClickLogout} content='Logout' color='red' inverted /> 
                }    
                {!isLoggedIn &&
                    ButtonConfigs.map((config, index) => <Menu.Item content={ <Button {...config}/> } key={index}/>)
                }
            </Menu.Menu>
        )
    }
};

export default SocialMenu;


