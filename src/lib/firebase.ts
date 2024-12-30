import { FirebaseApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTHDOMAIN,
    projectId: process.env.FIREBASE_PROJECTID,
    storageBucket: process.env.FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.FIREBASE_MENSSAGINGSENDER,
    appId: process.env.FIREBASE_APPID,
    measurementId: process.env.FIREBASE_MEASUREMENTID,
};
// Initialize Firebase
// Initialize Firebase
export const app: FirebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
