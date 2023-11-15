import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyAqgK7MNTzmjKclRvDWsMkypsv9QFu0xyU",
  authDomain: "tourapp-cd099.firebaseapp.com",
  databaseURL: "https://tourapp-cd099-default-rtdb.firebaseio.com",
  projectId: "tourapp-cd099",
  storageBucket: "tourapp-cd099.appspot.com",
  messagingSenderId: "352473132866",
  appId: "1:352473132866:web:aa97e2b563bcb0252762db",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
