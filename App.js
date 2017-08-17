import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Button,
  ActivityIndicator,
  Image
} from 'react-native';
import * as firebase from 'firebase';
import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens'

registerScreens();

Navigation.startSingleScreenApp({
  screen: {
    screen: 'SplashScreen',
    title: 'Splash',
    navigatorStyle: {},
    navigatorButtons: {}  
  }
})

// import SplashScreen from './src/splash_screen'
// // Initialize Firebase
// // const firebaseConfig = {
// //     apiKey: "AIzaSyA7WygqJQnw6XNcmptOM_ZWf5GARb4AiYs",
// //     authDomain: "randomizer-6178e.firebaseapp.com",
// //     databaseURL: "https://randomizer-6178e.firebaseio.com",
// //     projectId: "randomizer-6178e",
// //     storageBucket: "randomizer-6178e.appspot.com",
// //     messagingSenderId: "158176227891"
// //   };
// // const firebaseApp = firebase.initializeApp(firebaseConfig);
// // const database = firebase.database();

// // async function login() {
// //   try {
// //     await firebaseApp.auth().signInWithEmailAndPassword(email, password); 
// //     // this.setState({ backgroundColor: 'red' })
// //     } catch (error) {
// //       console.log('error', error);
// //     }
// // }

// export default class App extends React.Component {

//   constructor(props) {
//     super(props);
//     this._onRandomPressed = this._onRandomPressed.bind(this);
//     this.state = {
//       isLoading: false,
//       imageUrl: '',
//       backgroundColor: 'white'
//     }
//   }

//   async login(email, password) {
//     try {
//       await firebaseApp.auth().signInWithEmailAndPassword(email, password);
     
//       // this.setState({ backgroundColor: 'red' })
//     } catch (error) {
//       this.setState({ backgroundColor: 'yellow' })
//       console.log('error', error);
//     }
//     // .then((success) => {
//     //   console.log('success', success);
//     // }).catch((error) => {
//     //   console.log('error', error);
//     // })
//   }

//   _onRandomPressed() {
//     this.setState({isLoading: true});
    
//     database.ref('clothes/1').once('value').then((snapshot) => {
//       let cloth = snapshot.val();
//       this.setClothImage(cloth.imageName);
//     }).catch((error) => {
//       console.log('error', error);
//     });
//   }

//   setClothImage(imageName) {
//     const storage = firebaseApp.storage();
//     let imageRef = storage.ref(imageName);
//     imageRef.getDownloadURL().then((url) => {
//       console.log('url', url);
//       this.setState({imageUrl: url})
//     }).catch((error) => {
//       console.log('error', error);
//     })
//   }

//   render() {
//     return (
//       <SplashScreen />
//       // <View style={[styles.container, {backgroundColor: this.state.backgroundColor}]}>
//       //   <Button
//       //     onPress={this._onRandomPressed}
//       //     title="Random It!"
//       //     color="#841584"
//       //   />
//       //   <ActivityIndicator animating={this.state.isLoading} />
//       //   <Image
//       //     onError={(error) => {
//       //       console.log('error', error);
//       //     }} 
//       //     style={{width: 50, height: 50}} 
//       //     source={{uri: 'https://firebasestorage.googleapis.com/v0/b/randomizer-6178e.appspot.com/o/fos-navy-img.jpg'}} />
//       // </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
