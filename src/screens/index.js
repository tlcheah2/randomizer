import { Navigation } from 'react-native-navigation';

import SplashScreen from '../splash_screen'
import HomeScreen from '../home_screen'

export function registerScreens() {
    Navigation.registerComponent('SplashScreen', () => SplashScreen);
    Navigation.registerComponent('Home', () => HomeScreen);
}