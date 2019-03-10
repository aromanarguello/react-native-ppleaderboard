import React, { Component } from 'react';
import { SIGNUP_URL, SIGNIN_URL } from 'react-native-dotenv';
import { View } from 'react-native';
import SignUp from './SignUp.component';
import Login from './Login.component';
import { authService } from '../../services/api/authentication';

class Credentials extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isLogin: true
        };
        this.handleEmailInput = this.handleEmailInput.bind(this);
        this.handlePasswordInput = this.handlePasswordInput.bind(this);
        this.signUp = this.signUp.bind(this);
        this.login = this.login.bind(this);
        this.newMember = this.newMember.bind(this);
        this.backToLogin = this.backToLogin.bind(this);
    }

    handleEmailInput(val) {
        this.setState({ email: val });
    }

    handlePasswordInput(val) {
        this.setState({ password: val });
    }

    signUp() {
        const { email, password } = this.state;
        return authService(SIGNUP_URL, email, password);
    }

    login() {
        const { email, password } = this.state;
        return authService(SIGNIN_URL, email, password);
    }

    newMember() {
        this.setState({ isLogin: false });
    }

    backToLogin() {
        this.setState({ isLogin: true });
    }

    render() {
        const { isLogin } = this.state;
        return (
            <View>
                {isLogin ? (
                    <Login
                        loginHandler={this.login}
                        handleEmail={this.handleEmailInput}
                        handlePassword={this.handlePasswordInput}
                        state={this.state}
                        newMember={this.newMember}
                    />
                ) : (
                    <SignUp
                        signUpHandler={this.signUp}
                        state={this.state}
                        handlePassword={this.handlePasswordInput}
                        handleEmail={this.handleEmailInput}
                        backToLogin={this.backToLogin}
                    />
                )}
            </View>
        );
    }
}

export default Credentials;
