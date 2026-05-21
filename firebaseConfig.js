// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCfS8_isqypSowk3C6Bc1BTFekgt1CYqQ",
  authDomain: "meumundo-ab065.firebaseapp.com",
  projectId: "meumundo-ab065",
  storageBucket: "meumundo-ab065.firebasestorage.app",
  messagingSenderId: "1003780249603",
  appId: "1:1003780249603:web:450fa3feeb5f97c2f0d636",
  measurementId: "G-8RQ78JW4V3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);