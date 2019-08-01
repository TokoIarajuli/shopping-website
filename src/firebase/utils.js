import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB_-YjY7dBjze8ZHD_31yzjEc3lgM-UIDs",
  authDomain: "torchwebstore-a3896.firebaseapp.com",
  databaseURL: "https://torchwebstore-a3896.firebaseio.com",
  projectId: "torchwebstore-a3896",
  storageBucket: "",
  messagingSenderId: "256787881680",
  appId: "1:256787881680:web:15d83b1c696a4a50"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
