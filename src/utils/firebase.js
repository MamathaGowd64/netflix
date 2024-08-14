// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCT9JuGCtjMGStVBLax9hBweqRquRcI6aM",
  authDomain: "netflix-47b3b.firebaseapp.com",
  projectId: "netflix-47b3b",
  storageBucket: "netflix-47b3b.appspot.com",
  messagingSenderId: "154422334249",
  appId: "1:154422334249:web:18966c41d47a6b8be85d38",
  measurementId: "G-KPTMTFB8S5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();