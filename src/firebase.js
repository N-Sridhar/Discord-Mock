import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCrMKsjwlELk_T_jL6TaqhyaENYuwY8KL8",
  authDomain: "discord-mock.firebaseapp.com",
  databaseURL: "https://discord-mock.firebaseio.com",
  projectId: "discord-mock",
  storageBucket: "discord-mock.appspot.com",
  messagingSenderId: "585527864217",
  appId: "1:585527864217:web:1f311ee6c4fbd831eec108",
  measurementId: "G-PZR4DX44L9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const providerFb = new firebase.auth.FacebookAuthProvider();
providerFb.addScope("user_birthday");

export { auth, provider, providerFb };
export default db;
