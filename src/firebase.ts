// src/firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCUKyc1Hm9Jzg5PMpwtI0F6P1cv181549w",
  authDomain: "rentright-app.firebaseapp.com",
  projectId: "rentright-app",
  storageBucket: "rentright-app.firebasestorage.app",
  messagingSenderId: "943405078996",
  appId: "1:943405078996:web:538307414600d0ba705e41"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
