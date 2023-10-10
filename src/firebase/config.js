// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnrXcfm2DFzzbMwVd2ty4oydZ9qSnGiB8",
  authDomain: "adrian-eb6ea.firebaseapp.com",
  projectId: "adrian-eb6ea",
  storageBucket: "adrian-eb6ea.appspot.com",
  messagingSenderId: "380430211990",
  appId: "1:380430211990:web:ad8ce8cba96769b84bdbb7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);