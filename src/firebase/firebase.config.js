// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyByPZE18Cd8K3uLUT9vk6FAIi5qgH61VUQ",
    authDomain: process.env.REACT_APP_authDomain,
    projectId: "dragon-news-de5e7",
    storageBucket: "dragon-news-de5e7.appspot.com",
    messagingSenderId: "1016343743501",
    appId: "1:1016343743501:web:2a6d29ff0a70acc1bb5944"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;