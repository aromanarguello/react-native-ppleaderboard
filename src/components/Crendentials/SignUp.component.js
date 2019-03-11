import React from 'react';
import { View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { styles } from './Crendentials.styles';

const { container, signUpButtons, buttonContainer } = styles;

const a = false;
const SignUp = ({
    signUpHandler,
    state: { email, password },
    handlePassword,
    handleEmail,
    backToLogin
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
        <View style={buttonContainer}>
            <Button
                buttonStyle={signUpButtons}
                large
                bordered
                onPress={() => signUpHandler()}
                title="Sign Up"
                type="outline"
            />
            <Button
                onPress={() => backToLogin()}
                buttonStyle={signUpButtons}
                large
                bordered
                title="Back"
                type="outline"
            />
        </View>
    </View>
);

export default SignUp;
