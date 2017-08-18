
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Button,
  ActivityIndicator,
  Image
} from 'react-native';
import * as firebase from 'firebase'
import ScreenUtil from './util/screen_util'
import FirebaseUtil from './util/firebase_util'

export default class SplashScreen extends React.Component {
    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props); 
        // FirebaseUtil.login('tekloon@hotmail.com', '123456').then(() => {
        //     console.log('login success');
        //     this.props.navigation.navigate('Home');
        // }).catch(() => {
        //     console.log('login failure');
        // })
    }

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('Home');
        }, 0);
    }

    render() {
        return (
            <View style={styles.splashScreenContainer}>
                <Text style={styles.splashText}>R</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    splashScreenContainer: {
        flex: 1,
        backgroundColor: 'rgb(60, 120, 248)',
        justifyContent: 'center'
    },
    splashText: {
        textAlign: 'center',
        color: 'white',
        fontSize: ScreenUtil.getHeight() / 3
    }
})