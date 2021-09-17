import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAVvrBl_oyDH1FMhriYQFNL4ggc_9UpGdo",
  authDomain: "fir-movie-app-sofia.firebaseapp.com",
  databaseURL: "https://fir-movie-app-sofia-default-rtdb.firebaseio.com",
  projectId: "fir-movie-app-sofia",
  storageBucket: "fir-movie-app-sofia.appspot.com",
  messagingSenderId: "147487365244",
  appId: "1:147487365244:web:6e8c05dd47c9893d5651f9"
  });

export const createUser = async (email, password, displayName) => {
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Signed in 
          var user = userCredential.user;
          console.log('REGISTER user', user)
          // ...
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          // ..
        });

        const currentUser = firebase.auth().currentUser;
        await currentUser.updateProfile({
            displayName: displayName
          })

    } catch (error) {
        
    }

}

export const SignIn = async (email, password) => {
   await firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log('SIGNIN user', user)
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
}

export const userObserver = async (setCurrentUser) => {
    await firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          console.log('OBSERVER: ', user)
          setCurrentUser(user);
        } else {
          // User is signed out
          // ...
          setCurrentUser(null);
        }
      });
}

export const Logout = async () => {
    await firebase.auth().signOut();
}


export const SignUpProvider = async () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({
        promt : 'select_account'
      });

    firebase.auth()
      .signInWithPopup(provider)
}



export default firebaseApp;