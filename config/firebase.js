// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJWIbsaUCo7ixahZzr53r6K2-UJEcIdIA",
  authDomain: "com-chat-eab59.firebaseapp.com",
  projectId: "com-chat-eab59",
  storageBucket: "com-chat-eab59.appspot.com",
  messagingSenderId: "259143818205",
  appId: "1:259143818205:web:33ebb758ea7dd1e237b434"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getFirestore(app);