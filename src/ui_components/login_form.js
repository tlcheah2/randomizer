/**
 * @flow
 */
import React from 'react'
import {
    StyleSheet,
    View,
    TextInput,
    TouchableHighlight,
    Text
} from 'react-native'
import ScreenUtil from '../util/screen_util'

const styles = StyleSheet.create({
    loginFormContainer: {
        width: ScreenUtil.getWidth() * 0.9,
        borderRadius: 5,
        backgroundColor: 'white'
    },
    textInputStyle: {
        margin: 10,
        borderColor: 'grey',
        borderBottomWidth: 1,
        height: 40,
    },
    loginButton: {
        height: 50,
        margin: 10,
        backgroundColor: 'rgb(60, 120, 248)',
        justifyContent: 'center'
    },
    loginText: {
        textAlign:'center',
        color:'white'
    }
})

export default class LoginForm extends React.Component {

    constructor(props){
        super(props);
        this._onLoginPress = this._onLoginPress.bind(this);
        this.state = {
            email: '',
            password: ''
        }
    }

    _onLoginPress() {
        this.props.onSubmitBtnPressed && this.props.onSubmitBtnPressed(this.state.email, this.state.password);
    }

    render() {
        const {submitBtnText} = this.props;
        return (
            <View style={[styles.loginFormContainer, this.props.style]}>
                <TextInput
                    style={styles.textInputStyle}
                    value={this.state.email}
                    onChangeText={(text) => this.setState({email: text})}
                    placeholder={'Email'}
                    placeholderTextColor={'grey'}
                />
                <TextInput 
                    style={styles.textInputStyle}
                    value={this.state.password}
                    onChangeText={(text) => this.setState({password: text})}
                    placeholder={'Password'}
                    secureTextEntry={true}
                    placeholderTextColor={'grey'}
                />
                 <TouchableHighlight
                    style={styles.loginButton}
                    underlayColor={'rgba(60, 120, 248, 0.8)'}
                    onPress={this._onLoginPress}>
                    <Text style={styles.loginText}>{submitBtnText}</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

LoginForm.propTypes = {
    style: React.PropTypes.object,
    submitBtnText: React.PropTypes.string,
    onSubmitBtnPressed: React.PropTypes.func
}


