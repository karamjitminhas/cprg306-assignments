import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYCKZrDK3HkimMSB2Y8Z0ScXJxL-nPa0o",
  authDomain: "cprg306-assignments-d3d4d.firebaseapp.com",
  projectId: "cprg306-assignments-d3d4d",
  storageBucket: "cprg306-assignments-d3d4d.firebasestorage.app",
  messagingSenderId: "222313276745",
  appId: "1:222313276745:web:37bb31ad6c974ba0d9a698"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
