// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
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

/* Sing-In using Google Redirect 
  creates the sign-in with popup needs (auth, provider)
*/
export const signInwithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

/* Database Configuration */
export const db = getFirestore();
/* Create User from Sign-In 
  userAuth is the user data grabbed from the Sign-In Popup
  */
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
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
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};

/* Create user using email and password*/
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => {
  await signOut(auth);
};

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
