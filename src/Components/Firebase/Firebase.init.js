// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBF6grz_o25u_IKwVpiCXhGAzzyE7f40Mo",
  authDomain: "workspace-auth-41078.firebaseapp.com",
  projectId: "workspace-auth-41078",
  storageBucket: "workspace-auth-41078.firebasestorage.app",
  messagingSenderId: "87497636533",
  appId: "1:87497636533:web:4fc7fda564a2775466dcfc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);