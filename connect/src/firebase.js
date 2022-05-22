// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyACFzIBz4Ci7RzkY3zxquQdyGVeIt6loXM",
    authDomain: "connect-55d84.firebaseapp.com",
    projectId: "connect-55d84",
    storageBucket: "connect-55d84.appspot.com",
    messagingSenderId: "926781749882",
    appId: "1:926781749882:web:9dad73c93f7987530c19c3",
    measurementId: "G-VM4RJDHH07"
  };
  const firebaseApp = firebase.initializeApp
  (firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth(); 
  const provider = new firebase.auth.
  GoogleAuthProvider();

  export { auth, provider };
  export default db;
    