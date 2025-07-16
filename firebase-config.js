// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDP05NGrLSDWZ9ItSgIuf4TPSX6LhQh_tA",
  authDomain: "gen-lang-client-0227847209.firebaseapp.com",
  projectId: "gen-lang-client-0227847209",
  storageBucket: "gen-lang-client-0227847209.firebasestorage.app",
  messagingSenderId: "778908946281",
  appId: "1:778908946281:web:97e09c14faccc30fa237f8",
  measurementId: "G-RSY79PBTHG"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
