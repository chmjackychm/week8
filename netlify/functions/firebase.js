const firebase = require("firebase/app")
require("firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyCgAFA0MNefdgbfvWj7aA0eFzTNf4bcZdg",
  authDomain: "kiei-451-jc-bf473.firebaseapp.com",
  projectId: "kiei-451-jc-bf473",
  storageBucket: "kiei-451-jc-bf473.appspot.com",
  messagingSenderId: "1048254492895",
  appId: "1:1048254492895:web:a99fe60be345fe76bff96a"
} // replace

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase