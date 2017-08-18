
import { AsyncStorage } from 'react-native';

export const STORAGE_KEY = {
    ACTIONS: '@Randomizer:ACTIONS',
    ACTIONS_DETAILS: '@Randomizer:ACTIONS_DETAILS'
}

class AsyncStorageUtil {

    getItem(key, callback) {

    }

    async setItem(key, value) {
        try{
            await AsyncStorage.setItem(key, value);
        } catch(error) {

        }

    }

    getAllKeys() {
        let keyIds = Object.keys(STORAGE_KEY);
        let keyValues = keyIds.map((keyId) => {
            return STORAGE_KEY[keyId];
        });
        AsyncStorage.multiGet(keyValues, (errors, stores) => {
            if(stores) {
                for(let map of stores) {
                    let key = stores[0];
                    let value = stores[1];
                }
            }
        });
    }
}

const singleton = new AsyncStorageUtil();
export default singleton;