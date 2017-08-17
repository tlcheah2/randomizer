
/**
 * @flow
 */
import * as firebase from 'firebase'

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyA7WygqJQnw6XNcmptOM_ZWf5GARb4AiYs",
    authDomain: "randomizer-6178e.firebaseapp.com",
    databaseURL: "https://randomizer-6178e.firebaseio.com",
    projectId: "randomizer-6178e",
    storageBucket: "randomizer-6178e.appspot.com",
    messagingSenderId: "158176227891"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebase.database();

class FirebaseUtil {
    login(email, password): Promise<any> {
        return firebaseApp.auth().signInWithEmailAndPassword(email, password); 
    }

    get database() {
        return database;
    }

    
}

const singleton = new FirebaseUtil();
export default singleton;

