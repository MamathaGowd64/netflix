// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyX-5hcy5mQu7FYDCHo_hjODWIIu5Vbf4",
  authDomain: "netflix-b3de0.firebaseapp.com",
  projectId: "netflix-b3de0",
  storageBucket: "netflix-b3de0.appspot.com",
  messagingSenderId: "143113403118",
  appId: "1:143113403118:web:d69b160c7da724f8a5d1ff",
  measurementId: "G-ZMJMLG3X11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();