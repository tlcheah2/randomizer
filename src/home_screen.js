import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Button,
  ActivityIndicator,
  Image
} from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.homeScreenContainer}>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    homeScreenContainer: {
        flex: 1,
        backgroundColor: 'red'
    }
})