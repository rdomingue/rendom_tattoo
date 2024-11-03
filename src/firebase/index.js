// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBILi6r_AxgpLG14S1ogPbUJS0CsU_fcyg",
  authDomain: "vue-rendom-tattoo.firebaseapp.com",
  projectId: "vue-rendom-tattoo",
  storageBucket: "vue-rendom-tattoo.firebasestorage.app",
  messagingSenderId: "965963482686",
  appId: "1:965963482686:web:fd154aeb7e67870611736f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth  = getAuth(app);

export  { auth };

