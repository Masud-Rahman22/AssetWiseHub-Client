// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDv8j6jayiM59ZO4u_2bVY6l1XZtu2gfm0",
    authDomain: "assetwisehub.firebaseapp.com",
    projectId: "assetwisehub",
    storageBucket: "assetwisehub.appspot.com",
    messagingSenderId: "969175176037",
    appId: "1:969175176037:web:87c0a31b5df312ba52c78c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;