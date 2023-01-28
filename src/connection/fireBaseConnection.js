
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBHclYOvdqIKBFuEYF6dRUaQ_gNqDGRGpE",
  authDomain: "chat-test-3d724.firebaseapp.com",
  projectId: "chat-test-3d724",
  storageBucket: "chat-test-3d724.appspot.com",
  messagingSenderId: "716290122428",
  appId: "1:716290122428:web:e2f7476aabf3af0400e6b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app)
export const auth = getAuth(app)
export const db = getFirestore(app)

