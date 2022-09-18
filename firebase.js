import { initializeApp } from "firebase/app";
import { getDatabase, set, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_apiKey,
  authDomain: process.env.NEXT_PUBLIC_authDomain,
  projectId: process.env.NEXT_PUBLIC_projectId,
  storageBucket: process.env.NEXT_PUBLIC_storageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
  appId: process.env.NEXT_PUBLIC_appId,
  databaseURL: process.env.NEXT_PUBLIC_database_url,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export function writeData(name, email, phone, comment) {
  const db = getDatabase(app);
  set(ref(db, "users/" + name), {
    name,
    email,
    phone,
    comment,
  }).catch((e) => alert(e));
}
