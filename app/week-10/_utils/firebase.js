import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkoT79L-hO1zaypNJjzAGMkp_avu4YJCA",
  authDomain: "week-9-2b0ba.firebaseapp.com",
  projectId: "week-9-2b0ba",
  storageBucket: "week-9-2b0ba.appspot.com", 
  messagingSenderId: "387446572518",
  appId: "1:387446572518:web:926fe59d95ec9588c18227",
};

// Initialize Firebase //
const app = initializeApp(firebaseConfig);

// REQUIRED for authentication //
export const auth = getAuth(app);
export const db = getFirestore(app);
