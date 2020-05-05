import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBPkdA-ZMQIsmeLGmWk3_EP8eoLWTGLz4E",
    authDomain: "i-did-approach-ido.firebaseapp.com",
    databaseURL: "https://i-did-approach-ido.firebaseio.com",
    projectId: "i-did-approach-ido",
    storageBucket: "i-did-approach-ido.appspot.com",
    messagingSenderId: "377712225512",
    appId: "1:377712225512:web:0b6281efdf74b3ff306d5d"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;