// Import the functions you need from the SDKs you need
import { FirebaseOptions, initializeApp } from "firebase/app";
import { EmailAuthProvider, getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig:FirebaseOptions = {
  apiKey: "AIzaSyDTimk_xYxj1SGggZIf_Z63TbKRboBTRSU",
  authDomain: "kaijobiology-club.firebaseapp.com",
  projectId: "kaijobiology-club",
  storageBucket: "kaijobiology-club.appspot.com",
  messagingSenderId: "1075803758336",
  appId: "1:1075803758336:web:1a4c83a38c54cc192f1de5",
  measurementId: "G-3566DFMLT0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new EmailAuthProvider();
export {auth , provider};