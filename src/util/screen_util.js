import {Dimensions} from 'react-native'
const {width, height} = Dimensions.get('window');

class ScreenUtil {
    
    getWidth() {
        return width;
    }

    getHeight() {
        return height;
    }
}

const singleton = new ScreenUtil();
export default singleton;