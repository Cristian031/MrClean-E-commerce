import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyAqhssBEdcuBC0f1HgwFsb6T9N_OPC6txw",
  authDomain: "mrclean-ecommerce-9b3f3.firebaseapp.com",
  projectId: "mrclean-ecommerce-9b3f3",
  storageBucket: "mrclean-ecommerce-9b3f3.appspot.com",
  messagingSenderId: "992143996519",
  appId: "1:992143996519:web:68a1bd1e8dfd7938ef86c2"
};

// Inicializa Firebase
initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();
const storage = getStorage();


export { auth, db, storage };
