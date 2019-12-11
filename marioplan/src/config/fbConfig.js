import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyDHZ89X0HGrUC0-aeVI1aUvyikmv9ZunJI",
  authDomain: "ninja-marioplan-f8363.firebaseapp.com",
  databaseURL: "https://ninja-marioplan-f8363.firebaseio.com",
  projectId: "ninja-marioplan-f8363",
  storageBucket: "ninja-marioplan-f8363.appspot.com",
  messagingSenderId: "254273020159",
  appId: "1:254273020159:web:44d8621dfe68d02d15ecca",
  measurementId: "G-2R0ZL2E50Q"
};
firebase.initializeApp(config);

export default firebase;
