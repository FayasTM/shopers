// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBP0UMgKZbcUnkHqPc6l4vAsnmv-eYngSQ",
  authDomain: "shoppers-756a0.firebaseapp.com",
  projectId: "shoppers-756a0",
  storageBucket: "shoppers-756a0.firebasestorage.app",
  messagingSenderId: "457689521461",
  appId: "1:457689521461:web:69be84a4777547465d407c"
};

// Initialize Firebase
const app =getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app, db}