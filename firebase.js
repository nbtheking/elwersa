import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: process.env.BASE_ID,
  authDomain: "elwersa-8a62d.firebaseapp.com",
  projectId: "elwersa-8a62d",
  storageBucket: "elwersa-8a62d.appspot.com",
  messagingSenderId: "430508155679",
  appId: "1:430508155679:web:86e26762f06b88b567462a",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);