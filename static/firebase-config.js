import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, 
         GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC68therWFedwz4CEbJyM4ywBdgO86BvB8",
  authDomain: "irespond-7f0be.firebaseapp.com",
  projectId: "irespond-7f0be",
  storageBucket: "irespond-7f0be.appspot.com",
  messagingSenderId: "502088500304",
  appId: "1:502088500304:web:2e1b4a56bee2714dfb7d55",
  measurementId: "G-0JYXD4QETG"
};

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const db = getFirestore(app);

export { auth, provider, db };