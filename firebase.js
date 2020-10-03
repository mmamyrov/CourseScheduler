import * as firebase from 'firebase';

import "firebase/database";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6hL218MtFKGxzmokYLhdC2jTO6gxjoFw",
  authDomain: "coursescheduler-cs397.firebaseapp.com",
  databaseURL: "https://coursescheduler-cs397.firebaseio.com",
  projectId: "coursescheduler-cs397",
  storageBucket: "coursescheduler-cs397.appspot.com",
  messagingSenderId: "233933096287",
  appId: "1:233933096287:web:4702872f8e4ffeaa0222ea",
  measurementId: "G-6K93C4NP3P"
};

firebase.initializeApp(firebaseConfig);

export { firebase };
