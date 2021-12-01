import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA30fuIRcgeEFwMlxAtEz1lDkdGoFlJ_ZI",
  authDomain: "fortech-project.firebaseapp.com",
  databaseURL:
    "https://fortech-project-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fortech-project",
  storageBucket: "fortech-project.appspot.com",
  messagingSenderId: "116002614428",
  appId: "1:116002614428:web:c584d375298a90b6819159",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
