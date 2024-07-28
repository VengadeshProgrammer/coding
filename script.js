 // Import the functions you need from the SDKs you need
import {set, getDatabase, ref, child, get} from "/firebase/firebase-database.js";
import { initializeApp } from "/firebase/firebase-app.js";
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
        var email = document.querySelector(".email");
        var password = document.querySelector(".password");
console.log(document.querySelector(".email").value);
         set(ref(db, "users/"+email.value), {
                   username: email.value,
                   password: password.value,
                 });
