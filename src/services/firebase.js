// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4TqPeZ1mP7vE2UQdPZDZdDT1znbrzCxU",
  authDomain: "task-bb9f1.firebaseapp.com",
  projectId: "task-bb9f1",
  storageBucket: "task-bb9f1.appspot.com",
  messagingSenderId: "794217000434",
  appId: "1:794217000434:web:06748b7400c950d4ad8f6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);