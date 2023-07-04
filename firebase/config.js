// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from "firebase/app";
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBU7_K562xJhfGf_jsAboT4kBVmHFL7gYo",
  authDomain: "react-native-hw-17ed3.firebaseapp.com",
  projectId: "react-native-hw-17ed3",
  storageBucket: "react-native-hw-17ed3.appspot.com",
  messagingSenderId: "951460214092",
  appId: "1:951460214092:web:e2c3b2a870ba7d15510be9",
  // apiKey: "AIzaSyBU7_K562xJhfGf_jsAboT4kBVmHFL7gYo",
  // authDomain: "react-native-hw-17ed3.firebaseapp.com",
  // databaseURL: "https://project-id.firebaseio.com", //Нет
  // projectId: "react-native-hw-17ed3",
  // storageBucket: "react-native-hw-17ed3.appspot.com",
  // messagingSenderId: "951460214092",
  // appId: "1:951460214092:web:e2c3b2a870ba7d15510be9",
  // measurementId: "G-measurement-id", //Нет
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
