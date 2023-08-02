import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCcrs-iiwCkzseRzFTEJaxW9L25OyHZaiM",
  authDomain: "test-ba1d3.firebaseapp.com",
  databaseURL:
    "https://test-ba1d3-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "test-ba1d3",
  storageBucket: "test-ba1d3.appspot.com",
  messagingSenderId: "869558778807",
  appId: "1:869558778807:web:251d5b6a883b0df1254632",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
