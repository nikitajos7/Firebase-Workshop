// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDIftzzgA3PAfbaGQgdTUJcoXcWsnaR59U",
  authDomain: "tech-dev-1-5f1b2.firebaseapp.com",
  projectId: "tech-dev-1-5f1b2",
  storageBucket: "tech-dev-1-5f1b2.appspot.com",
  messagingSenderId: "728123620677",
  appId: "1:728123620677:web:7b5b06fb466a07e63f522c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
