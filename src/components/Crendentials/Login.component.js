import React from 'react';
import { View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { styles } from './Crendentials.styles';

const { container, button, loginButtonContainer, signUpText } = styles;

const a = false;
const Login = ({
    handleEmail,
    handlePassword,
    loginHandler,
    newMember,
    state: { email, password }
}) => (
    <View style={container}>
        <Input
            placeholder="Enter email"
            errorStyle={{ color: 'red' }}
            value={email}
            errorMessage={a ? 'ENTER A VALID ERROR HERE' : null}
            onChangeText={val => handleEmail(val)}
        />
        <Input
            placeholder="Enter Password"
            errorStyle={{ color: 'red' }}
            errorMessage={a ? 'ENTER A VALID ERROR HERE' : null}
            value={password}
            onChangeText={val => handlePassword(val)}
        />
        <View style={loginButtonContainer}>
            <Button
                buttonStyle={button}
                large
                bordered
                onPress={() => loginHandler()}
                title="Login"
                type="outline"
            />
            <Text onPress={() => newMember()} style={signUpText}>
                Not a member? Sign up!
            </Text>
        </View>
    </View>
);

export default Login;
