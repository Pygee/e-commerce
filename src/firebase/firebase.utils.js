import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAtOMoCux31vjaX8tX1L5phiSrDyE9Ievw",
  authDomain: "online-store-38bde.firebaseapp.com",
  databaseURL: "https://online-store-38bde.firebaseio.com",
  projectId: "online-store-38bde",
  storageBucket: "online-store-38bde.appspot.com",
  messagingSenderId: "210230383899",
  appId: "1:210230383899:web:dcf30817320ea295b52fbe"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
