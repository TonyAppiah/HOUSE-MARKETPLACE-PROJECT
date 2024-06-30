// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3o1C6Fv2lFl5Vj__vn8WID4t0y1_BiCE",
  authDomain: "house-marketplace-app-a430f.firebaseapp.com",
  projectId: "house-marketplace-app-a430f",
  storageBucket: "house-marketplace-app-a430f.appspot.com",
  messagingSenderId: "519956866952",
  appId: "1:519956866952:web:df1aedb7e91af2b2993c3d",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
