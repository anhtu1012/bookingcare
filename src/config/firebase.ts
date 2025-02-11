// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRv9J88Sn7IPmnpy4nZao5YwyWxAUuSUg",
  authDomain: "bookingcare-5cdfc.firebaseapp.com",
  projectId: "bookingcare-5cdfc",
  storageBucket: "bookingcare-5cdfc.appspot.com",
  messagingSenderId: "717314666915",
  appId: "1:717314666915:web:2ca735288fd84ab350ea16",
  measurementId: "G-GY2EXBNFH1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
