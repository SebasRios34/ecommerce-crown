// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDE4KVrtKTRD1ibLQz2MFdA1y5JXaHFp6Q",
  authDomain: "ecommerce-crown-db-b4748.firebaseapp.com",
  projectId: "ecommerce-crown-db-b4748",
  storageBucket: "ecommerce-crown-db-b4748.appspot.com",
  messagingSenderId: "1041666930609",
  appId: "1:1041666930609:web:4e9944df6cfd46efe2ef90",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
//select_account --> everytime a user interacts with the page needs to sign-in
provider.setCustomParameters({
  prompt: "select_account",
});

/* Sign-In Options */
export const auth = getAuth();
/* Sing-In using Google Popup 
  creates the sign-in with popup needs (auth, provider)
*/
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

/* Database Configuration */
export const db = getFirestore();
/* Create User from Sign-In 
  userAuth is the user data grabbed from the Sign-In Popup
  */
export const createUserDocumentFromAuth = async (userAuth) => {
  //Initializing User References with doc(name of getFirestore, collection name, unique ID)
  const userDocRef = doc(db, "users", userAuth.uid);

  //Snapshot help us retrieve data from a user reference
  const userSnapshot = await getDoc(userDocRef);

  //if user does not exist... create user
  if (!userSnapshot.exists()) {
    //data grabbed from user data authetication
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      //create user using setDoc(document reference, {name, email, date created})
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};
