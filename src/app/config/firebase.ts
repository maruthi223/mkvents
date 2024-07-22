import { initializeApp } from "firebase/app";
import 'firebase/firestore'
import {  getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mk-events-2024.firebaseapp.com",
  projectId: "mk-events-2024",
  storageBucket: "mk-events-2024.appspot.com",
  messagingSenderId: "1008565148905",
  appId: "1:1008565148905:web:e365ce6f7012de3800a478"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);