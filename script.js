import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
 const firebaseConfig = {
  apiKey: "AIzaSyC3ZAshe1SOP3xvtuBADQhxetJap_UYelE",
  authDomain: "rockpaper-c307a.firebaseapp.com",
  databaseURL: "https://rockpaper-c307a-default-rtdb.firebaseio.com",
  projectId: "rockpaper-c307a",
  storageBucket: "rockpaper-c307a.appspot.com",
  messagingSenderId: "809194481630",
  appId: "1:809194481630:web:497723eb749f8f356a9f4f",
  measurementId: "G-PZ8264ZEVR" 
};


 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
import {set, getDatabase, ref, child, get} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-database.js"; 
const db = getDatabase();
const dbRef = ref(db);
document.querySelector(".enter").addEventListener("click", ()=>{
 // Get references to email and password input elements
var x = document.querySelector(".email");
var y = document.querySelector(".password");
var xx = encodeURIComponent(x.value);
 var yy = encodeURIComponent(y.value);
// Write user data to Firebase Realtime Database (replace "users" with your desired path)
set(ref(db, "users/" + xx), {
  username:xx,
  password: yy,
});


})
