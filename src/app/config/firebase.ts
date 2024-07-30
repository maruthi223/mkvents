import { initializeApp } from "firebase/app";
import 'firebase/firestore'
import 'firebase/storage'
import "firebase/auth";
import 'firebase/database'
import {  getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mk-events-2024.firebaseapp.com",
  projectId: "mk-events-2024",
  databaseURL: "https://mk-events-2024-default-rtdb.asia-southeast1.firebasedatabase.app",
  storageBucket: "mk-events-2024.appspot.com",
  messagingSenderId: "1008565148905",
  appId: "1:1008565148905:web:e365ce6f7012de3800a478"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const fb = getDatabase(app);