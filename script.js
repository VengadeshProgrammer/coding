import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";

 const firebaseConfig = {
   apiKey: "AIzaSyByiyLTKA1V8OeAnXdFf9BteRN8LsD2Bgg",
   authDomain: "absolute-totem-400311.firebaseapp.com",
   databaseURL: "https://absolute-totem-400311-default-rtdb.firebaseio.com",
   projectId: "absolute-totem-400311",
   storageBucket: "absolute-totem-400311.appspot.com",
   messagingSenderId: "430382513434",
   appId: "1:430382513434:web:942ef616f04bab9d1b00a3",
   measurementId: "G-BXHYVQEKC3"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
import {set, getDatabase, ref, child, get} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-database.js";


const db = getDatabase();
const dbRef = ref(db);

// Get references to email and password input elements
var x = document.querySelector(".email");
var y = document.querySelector(".password");

// Log the email value for debugging purposes (optional)
console.log(document.querySelector(".email").value);

// Write user data to Firebase Realtime Database (replace "users" with your desired path)
set(ref(db, "users/" + x.value), {
  username: x.value,
  password: y.value,
});

