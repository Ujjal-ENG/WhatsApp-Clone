import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCc2YGqpTgoxTLiSCK44et0_AHfm3xWPSg",
  authDomain: "whatsapp-clone-93220.firebaseapp.com",
  projectId: "whatsapp-clone-93220",
  storageBucket: "whatsapp-clone-93220.appspot.com",
  messagingSenderId: "1031390298621",
  appId: "1:1031390298621:web:5ac43fb2e3e868e0f89994"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage().ref("images");
const audioStorage = firebase.storage().ref("audio");
const createTimestamp = firebase.firestore.FieldValue.serverTimestamp;
const serverTimestamp = firebase.database.ServerValue.TIMESTAMP;

export {
  db,
  auth,
  provider,
  storage,
  audioStorage,
  createTimestamp,
  serverTimestamp,
};
