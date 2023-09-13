// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAABVLDH3lIMG5SvmC3rvhkZNXQ-6nGB8M",
  authDomain: "cars-doctor-auth-practice.firebaseapp.com",
  projectId: "cars-doctor-auth-practice",
  storageBucket: "cars-doctor-auth-practice.appspot.com",
  messagingSenderId: "1089288180465",
  appId: "1:1089288180465:web:5ccc4d54a1404137c00f50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;