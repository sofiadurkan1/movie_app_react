import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDDtMP3QoeCUx6dYI8MfrLZh01e9HC4iN4",
    authDomain: "react-movie-app-699c7.firebaseapp.com",
    projectId: "react-movie-app-699c7",
    storageBucket: "react-movie-app-699c7.appspot.com",
    messagingSenderId: "551495615781",
    appId: "1:551495615781:web:246a3d97b46e698572c6cc"
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