import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCpB5WoEeVJv_YVYog1w3ArZr_y7dB2Bdg",
  authDomain: "aiinterviewer-aadc8.firebaseapp.com",
  projectId: "aiinterviewer-aadc8",
  storageBucket: "aiinterviewer-aadc8.firebasestorage.app",
  messagingSenderId: "632653484050",
  appId: "1:632653484050:web:3d66d97bbdc8e028eac8cb",
  measurementId: "G-ZP4Y59B1S7"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);