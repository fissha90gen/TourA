import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyDGF5oWyThkQ3VKP9FexoPRWqbEReiGUA8",
  authDomain: "tourapp-e6330.firebaseapp.com",
  databaseURL: "https://tourapp-e6330-default-rtdb.firebaseio.com",
  projectId: "tourapp-e6330",
  storageBucket: "tourapp-e6330.appspot.com",
  messagingSenderId: "902373195552",
  appId: "1:902373195552:web:d15e013c248ec4daede145",
  measurementId: "G-497L0C354V",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
