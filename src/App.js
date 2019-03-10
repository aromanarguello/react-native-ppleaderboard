import React, { Component } from 'react';
// eslint-disable-next-line
import { firebase } from '@firebase/app';
import { View } from 'react-native';
import {
    FIREBASE_API_KEY,
    AUTH_DOMAIN,
    DATABASE_URL,
    FIREBASE_PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGING_SENDER_ID
} from 'react-native-dotenv';
import { Credentials } from './components/index';

class App extends Component {
    componentDidMount() {
        firebase.initializeApp({
            apiKey: FIREBASE_API_KEY,
            authDomain: AUTH_DOMAIN,
            databaseURL: DATABASE_URL,
            projectId: FIREBASE_PROJECT_ID,
            storageBucket: STORAGE_BUCKET,
            messagingSenderId: MESSAGING_SENDER_ID
        });
    }
    render() {
        return (
            <View>
                <Credentials />
            </View>
        );
    }
}

export default App;
