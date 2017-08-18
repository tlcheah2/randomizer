/**
 * @flow
 */
import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight
} from 'react-native'
import LoginForm from './ui_components/login_form'
import FirebaseUtil from './util/firebase_util'

const styles = StyleSheet.create({
    registerScreenContainer: {
        flex: 1,
        backgroundColor: 'rgb(60, 120, 248)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    rlogo: {
        justifyContent: 'center',
        alignItems:'center',
        width: 100,
        height: 100,
        borderWidth: 4,
        borderColor: 'white'
    },
    rText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 70,
        fontWeight: 'bold'
    }
})

export default class RegisterScreen extends React.Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this._onRegisterClicked = this._onRegisterClicked.bind(this);
    }

    _onRegisterClicked(email, password) {
        let emailStr = email ? email.toString().trim() : null;
        let passwordStr = password ? password.toString().trim() : null;
        if(emailStr && passwordStr) {
            FirebaseUtil.createUserWithEmailAndPassword(email, password).then(() => {
                console.log('register successful');
                this.props.navigation.navigate('HomeDrawer');
            }).catch(() => {
                console.log('register failed');
            });
        }
    }

    render() {
        let registerForm = (<LoginForm 
            style={{marginTop: 50}} 
            submitBtnText={'REGISTER'}
            onSubmitBtnPressed={this._onRegisterClicked}
        />);
        
        return (
            <View style={styles.registerScreenContainer}>
                <View style={styles.rlogo}>
                    <Text style={styles.rText}>R</Text>
                </View>
                {registerForm}
            </View>
        )
    }
}



