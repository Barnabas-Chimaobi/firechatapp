import firebase from "firebase";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA9W5bgL8USEZD9Skqgq5TZvPRk-LW4GhY",
    authDomain: "chatapp2-f204e.firebaseapp.com",
    databaseURL: "https://chatapp2-f204e.firebaseio.com",
    projectId: "chatapp2-f204e",
    storageBucket: "chatapp2-f204e.appspot.com",
    messagingSenderId: "924619193492",
    appId: "1:924619193492:web:0318956509b05a22014881",
    measurementId: "G-E5F2ZE6FW5"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;

