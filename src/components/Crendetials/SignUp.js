import React, { Component } from 'react';
// eslint-disable-next-line
import firebase from '@firebase/auth';
import { View, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { SIGNUP_URL } from 'react-native-dotenv';

const styles = StyleSheet.create({
    container: {
        padding: 30,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        height: 100,
        width: 80,
        justifyContent: 'center'
    }
});

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    signUp() {
        const { email, password } = this.state;
        return fetch(SIGNUP_URL, {
            method: 'POST',
            body: JSON.stringify({
                email,
                password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(apiResponse => {
                console.log(apiResponse).catch(err => console.log(err));
            });
    }

    render() {
        const a = false;
        return (
            <View style={styles.container}>
                <Input
                    placeholder="Enter email"
                    errorStyle={{ color: 'red' }}
                    value={this.state.email}
                    errorMessage={a ? 'ENTER A VALID ERROR HERE' : null}
                    onChangeText={val => this.setState({ email: val })}
                />
                <Input
                    placeholder="Enter Password"
                    errorStyle={{ color: 'red' }}
                    errorMessage={a ? 'ENTER A VALID ERROR HERE' : null}
                    value={this.state.password}
                    onChangeText={val => this.setState({ password: val })}
                />
                <View style={styles.buttonContainer}>
                    <Button
                        large
                        bordered
                        onPress={() => this.signUp()}
                        title="Sign Up"
                    />
                </View>
            </View>
        );
    }
}

export default SignUp;
