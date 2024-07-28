// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOLsdxiIU8QYchtOtM8mddyFR0pZge_N4",
  authDomain: "netflixgptnith.firebaseapp.com",
  projectId: "netflixgptnith",
  storageBucket: "netflixgptnith.appspot.com",
  messagingSenderId: "459101666543",
  appId: "1:459101666543:web:5f6ae44e9c63be3d816f1a",
  measurementId: "G-KTC70D29P3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 
export const auth = getAuth();
