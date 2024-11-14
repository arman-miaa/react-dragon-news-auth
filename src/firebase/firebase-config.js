// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYXDUvv6C-Nl5LqSbSFlsn-SPxLgCN5z8",
  authDomain: "dragon-news-7468e.firebaseapp.com",
  projectId: "dragon-news-7468e",
  storageBucket: "dragon-news-7468e.firebasestorage.app",
  messagingSenderId: "605600621200",
  appId: "1:605600621200:web:1d4beff052d759f5e6ee15",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
// const auth = getAuth(app)
// export default auth;
