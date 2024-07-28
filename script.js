// Import the functions you need from the SDKs you need
import { set, getDatabase, ref, child, get } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";

// Your Firebase configuration (replace with your actual project details)
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
const db = getDatabase();
const dbRef = ref(db);

// Get references to email and password input elements
var email = document.querySelector(".email");
var password = document.querySelector(".password");

// Log the email value for debugging purposes (optional)
console.log(document.querySelector(".email").value);

// Write user data to Firebase Realtime Database (replace "users" with your desired path)
set(ref(db, "users/" + email.value), {
  username: email.value,
  password: password.value
});

