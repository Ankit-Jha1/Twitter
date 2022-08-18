// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "twitter-4494c.firebaseapp.com",
  projectId: "twitter-4494c",
  storageBucket: "twitter-4494c.appspot.com",
  messagingSenderId: "665559924295",
  appId: "1:665559924295:web:251e46b837cd810906fb62"
};

// Initialize Firebase
// conditional -> only initialize when no app is initialized or get the initialized app
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };