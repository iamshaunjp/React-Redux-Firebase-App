import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Mine
const firebaseConfig = {
  apiKey: "AIzaSyAW-_kC3-GwGkmBm_rXR3UvEW3TxyesjD0",
  authDomain: "fir-tut-1-3676d.firebaseapp.com",
  databaseURL: "https://fir-tut-1-3676d.firebaseio.com",
  projectId: "fir-tut-1-3676d",
  storageBucket: "fir-tut-1-3676d.appspot.com",
  messagingSenderId: "363314507464",
  appId: "1:363314507464:web:0fd9931b47262e83"
};
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 