import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD1ag9g3-zJEk5rBi8Ucq6e2lQbUgXEIeY",
  authDomain: "auth-55b52.firebaseapp.com",
  projectId: "auth-55b52",
  storageBucket: "auth-55b52.appspot.com",
  messagingSenderId: "258928081845",
  appId: "1:258928081845:web:a04090d70071be016cf7fc",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const auth = getAuth();

export default app;
export { db, auth };
