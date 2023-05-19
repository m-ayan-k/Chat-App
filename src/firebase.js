import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAUvt2J22y_mkA4hucyhTW8r5mRCwX7vgo",
    authDomain: "botchat-17c0d.firebaseapp.com",
    projectId: "botchat-17c0d",
    storageBucket: "botchat-17c0d.appspot.com",
    messagingSenderId: "822290990646",
    appId: "1:822290990646:web:503c271177394325217a97"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()