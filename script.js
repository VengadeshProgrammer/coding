 // Import the functions you need from the SDKs you need
import {set, getDatabase, ref, child, get} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-database.js";
import { initializeApp } from "ttps://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
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
console.log(document.querySelector(".email").value);
        var email = document.querySelector(".email");
        var password = document.querySelector(".password");
         set(ref(db, "users/"+email.value), {
                   username: email.value,
                   password: password.value,
                 });
