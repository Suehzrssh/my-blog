// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjdQl_WnwcG3rNY8pfZ2DkbuYrf5UOx3I",
  authDomain: "my-blog-eb089.firebaseapp.com",
  projectId: "my-blog-eb089",
  storageBucket: "my-blog-eb089.appspot.com",
  messagingSenderId: "229703395646",
  appId: "1:229703395646:web:7f791456374dc749d5a46f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();