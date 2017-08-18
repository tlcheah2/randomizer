import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Button,
  ActivityIndicator,
  Image,
  TouchableHighlight,
  FlatList
} from 'react-native';
import ImagePicker from 'react-native-image-picker'
import ListItem from './ui_components/list_item'
import AsyncStorageUtil, {STORAGE_KEY} from './util/async_storage_util'
export default class HomeScreen extends React.Component {

    static navigationOptions = {
        headerLeft: null,
        title: 'Home',
        // headerRight: 
        //     <TouchableHighlight 
        //         onPress={() => {
        //             this.setState({visible: true})
        //         }}>
        //     <Text style={{color: 'red'}}>Add</Text>
        // </TouchableHighlight>,
    }

    constructor(props) {
        super(props);
        this._itemOnPressed = this._itemOnPressed.bind(this);
    }

    componentDidMount() {
        let actionArray = ['What you want to eat?', 'What you want to wear?'];
        // console.log('actionArray Str', JSON.stringify(actionArray));
        // AsyncStorageUtil.setItem(STORAGE_KEY.ACTIONS, JSON.stringify(actionArray));
        AsyncStorageUtil.getAllKeys();
    }

    _itemOnPressed(id) {
        console.log('itemOnOressed', id);
    }
    
    render() {
        return (
            <View style={styles.homeScreenContainer}>
                <FlatList
                    data={[{id: 1, key: 'What you plan to wear today?'}]}
                    renderItem={({item}) => 
                        <ListItem 
                            id={item.id} 
                            content={item.key} 
                            onPressed={this._itemOnPressed} 
                        />
                    }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    homeScreenContainer: {
        flex: 1,
        backgroundColor: 'white'
    }
})