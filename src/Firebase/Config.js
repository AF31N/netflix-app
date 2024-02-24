import firebase from 'firebase/compat/app'; // Update import statement
import 'firebase/compat/firestore'; // Update import statement for Firestore
import 'firebase/compat/auth';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAU9rbDTiw-R5JhZh1DVQPPlYTiOHfTPgI",
    authDomain: "fir-1fbbc.firebaseapp.com",
    projectId: "fir-1fbbc",
    storageBucket: "fir-1fbbc.appspot.com",
    messagingSenderId: "119479343678",
    appId: "1:119479343678:web:f18b101f3042dda5ae8f6f",
    measurementId: "G-TW4GY7THY5"
  };

  const app = firebase.initializeApp(firebaseConfig);
  export default app;