import React, { Component } from 'react';
import { Form, Container, Message } from 'semantic-ui-react';

class LoginForm extends Component {
    state = {
        id: '',
        password: ''
    }
    onSubmit = event => {
        event.preventDefault();
        const { id, password } = this.state;
        this.props.LoginFormDispatch.authLoginRequest({id, password});
    }
    onChange = (e, {name, value}) => {
        this.setState({ [name]: value });
    }
    render() {
        const { loginRejectionCount, youAreLocked, isLoading, isLoggedIn } = this.props.LoginFormState;
        const disabled = isLoading || youAreLocked || isLoggedIn || loginRejectionCount >= 3;

        return (
            <Container text>
                <Form 
                onSubmit={this.onSubmit} 
                inverted={youAreLocked ? true : false }>
                    <Form.Input name='id' placeholder='ID' onChange={this.onChange} disabled={disabled}/>
                    <Form.Input name='password' placeholder='password' onChange={this.onChange} disabled={disabled}/>
                    <Form.Button content='LOGIN' color='blue' inverted disabled={disabled}/>
                </Form>

                {loginRejectionCount > 0 && 
                    <Message
                    warning
                    header={`You typed wrong ID or Password ${loginRejectionCount} times!`} />}
            </Container>
        )
    }
};

export default LoginForm