// import firebase from "firebase/app";
// const firebaseConfig = {
//   apiKey: "AIzaSyAXz3MxKlU38lWdGa5k8bro-K17yhAKpzU",
//   authDomain: "vue-taskapp.firebaseapp.com",
//   projectId: "vue-taskapp",
//   storageBucket: "vue-taskapp.appspot.com",
//   messagingSenderId: "132987943093",
//   appId: "1:132987943093:web:14c13369190ca9994da6fc"
// };
// firebase.initializeApp(firebaseConfig);

import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAXz3MxKlU38lWdGa5k8bro-K17yhAKpzU",
  authDomain: "vue-taskapp.firebaseapp.com",
  projectId: "vue-taskapp",
  storageBucket: "vue-taskapp.appspot.com",
  messagingSenderId: "132987943093",
  appId: "1:132987943093:web:14c13369190ca9994da6fc",
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth();

const signUp = (userObject) => {
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(
      auth,
      userObject.username,
      userObject.password
    )
      .then((userCredential) => {
        const user = userCredential.user;
        const userDetails = auth.currentUser;
        updateProfile(userDetails, { displayName: userObject.name });
        resolve(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        reject({errorCode, errorMessage});
      });
  });
};
const logIn = (userObject) => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, userObject.username, userObject.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        resolve(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        reject({errorCode, errorMessage});
      });
  });
};

export { firebaseApp, signUp, logIn };
