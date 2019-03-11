import { StyleSheet } from 'react-native';
import { styleProps } from '../../utils/styles/helpers';

const {
    colors: { blue }
} = styleProps;

export const styles = StyleSheet.create({
    container: {
        padding: 30,
        paddingTop: 100,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        height: 100,
        width: 100,
        justifyContent: 'center',
        flexDirection: 'row',
        paddingTop: 20
    },
    button: {
        margin: 10,
        width: 150,
        marginLeft: 100,
        borderColor: blue,
        borderWidth: 2
    },
    signUpButtons: {
        margin: 10,
        width: 150,
        borderColor: blue,
        borderWidth: 2
    },
    loginButtonContainer: {
        height: 100,
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'column',
        paddingTop: 20
    },
    signUpText: {
        width: 150,
        justifyContent: 'center',
        paddingTop: 15,
        marginLeft: 100
    }
});
