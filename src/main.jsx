import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
 
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqhssBEdcuBC0f1HgwFsb6T9N_OPC6txw",
  authDomain: "mrclean-ecommerce-9b3f3.firebaseapp.com",
  projectId: "mrclean-ecommerce-9b3f3",
  storageBucket: "mrclean-ecommerce-9b3f3.appspot.com",
  messagingSenderId: "992143996519",
  appId: "1:992143996519:web:68a1bd1e8dfd7938ef86c2"
};

// Initialize Firebase
 initializeApp(firebaseConfig);

 const auth = getAuth();

createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>,
)
