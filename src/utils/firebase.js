import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "@firebase/storage";
//import { getStorage } from "firebase/storage";
import "firebase/compat/auth";
import "firebase/compat/firestore";
//import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyAdlKKBrfgCre_Gsse61BRU-n-FZkrHW94",
  authDomain: "thyear-final.firebaseapp.com",
  projectId: "thyear-final",
  storageBucket: "thyear-final.appspot.com",
  messagingSenderId: "621442903322",
  appId: "1:621442903322:web:b48ae143caec2a47c210a3"
  
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
