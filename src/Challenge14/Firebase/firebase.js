import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyA9XFOrU3GCq4pOphvrr_bvkt_phW7sP6I",
  authDomain: "challenge14-76ce3.firebaseapp.com",
  projectId: "challenge14-76ce3",
  storageBucket: "challenge14-76ce3.appspot.com",
  messagingSenderId: "18346087328",
  appId: "1:18346087328:web:199d326bc9498a0543cac5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
