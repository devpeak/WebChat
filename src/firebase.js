import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBSEY6YTRwSKVBpEu011-a77isR4wTLp6Y",
    authDomain: "chat42-61537.firebaseapp.com",
    projectId: "chat42-61537",
    storageBucket: "chat42-61537.appspot.com",
    messagingSenderId: "176756544135",
    appId: "1:176756544135:web:6145af55f3efc25dc99e22"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()