
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
const database = firebaseApp.database();
const storage = firebaseApp.storage();
class FirebaseUtil {

    createUserWithEmailAndPassword(email, password): firebase.Promise<any> {
        return firebaseApp.auth().createUserWithEmailAndPassword(email, password);
    }

    login(email, password): firebase.Promise<any> {
        return firebaseApp.auth().signInWithEmailAndPassword(email, password);
        // firebaseApp.auth().signInWithEmailAndPassword(email, password).then(() =>{
        //     console.log('success');
        // }).catch(() => {
        //     console.log('error', error.code);
        // }); 
    }

    

    get databaseRef() {
        return database;
    }

    get storageRef() {
        return storage;
    }

    
}

const singleton = new FirebaseUtil();
export default singleton;

