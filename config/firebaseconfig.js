import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8WswhHCwrZ-lk1NZJ3dGNmT_apThMpNg",
  authDomain: "a4-saloni.firebaseapp.com",
  projectId: "a4-saloni",
  storageBucket: "a4-saloni.firebasestorage.app",
  messagingSenderId: "522287337835",
  appId: "1:522287337835:web:a207880f1f0093d6fcbc2e",
  measurementId: "G-01PNS3ZGQK",
};

const app = initializeApp(firebaseConfig);
export const FirebaseDB = getFirestore(app);
