// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyC8wof0uEItfkgGZUwx_zPpJXVd00PsDJI",
  authDomain: "chat-app-c0e0d.firebaseapp.com",
  projectId: "chat-app-c0e0d",
  storageBucket: "chat-app-c0e0d.appspot.com",
  messagingSenderId: "770752870226",
  appId: "1:770752870226:web:cff2707651592bfb1f6c8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const provider=new GoogleAuthProvider()
export const db=getFirestore(app)