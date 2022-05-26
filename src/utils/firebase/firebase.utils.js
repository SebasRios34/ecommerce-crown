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

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
