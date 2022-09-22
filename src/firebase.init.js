// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDn4LzgohInKJ6IcMHgYtcd2XVwmwJpYN8",
  authDomain: "moon-knight-project-3.firebaseapp.com",
  projectId: "moon-knight-project-3",
  storageBucket: "moon-knight-project-3.appspot.com",
  messagingSenderId: "1081800224773",
  appId: "1:1081800224773:web:af0142bf9546ff99196c6c",
  measurementId: "G-9B9NPE2BHV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

export default  auth;

// export default analytics;