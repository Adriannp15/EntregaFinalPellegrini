// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAQzDjnCKgp3tXyAcLRPBxmcc7eiDInjs",
  authDomain: "nutrishop-883e5.firebaseapp.com",
  projectId: "nutrishop-883e5",
  storageBucket: "nutrishop-883e5.appspot.com",
  messagingSenderId: "229305781514",
  appId: "1:229305781514:web:be19cbb17c641de95bbef3"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);