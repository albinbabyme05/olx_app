import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDY6ih20BHOJARmCNpcZPVkGLMFC4MFomw",
    authDomain: "olxapp-4cc6f.firebaseapp.com",
    projectId: "olxapp-4cc6f",
    storageBucket: "olxapp-4cc6f.firebasestorage.app",
    messagingSenderId: "573872398829",
    appId: "1:573872398829:web:22dd5e912da64afd9fc7e4",
    measurementId: "G-DE6NTRW3YF"
  };

export default firebase.initializeApp(firebaseConfig);