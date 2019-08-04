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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  console.log(firestore.doc("user/123123"));

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
