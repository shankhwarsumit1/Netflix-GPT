// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDoW8vqY5TkjT4RuWBT5Sx0FkXnsihNZM",
  authDomain: "netflix-gpt-c49b7.firebaseapp.com",
  projectId: "netflix-gpt-c49b7",
  storageBucket: "netflix-gpt-c49b7.firebasestorage.app",
  messagingSenderId: "704985340199",
  appId: "1:704985340199:web:7af90fbc40916c3461f102",
  measurementId: "G-SCQWKST77E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();