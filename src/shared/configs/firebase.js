// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDP84ci6Z256Gj0y0IKEyDx1qYVm7FWUjs",
  authDomain: "sketch-c0441.firebaseapp.com",
  projectId: "sketch-c0441",
  storageBucket: "sketch-c0441.appspot.com",
  messagingSenderId: "1087124089468",
  appId: "1:1087124089468:web:24da81519f8fc3c9d5b7f9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);

export { app, firestore, auth };
