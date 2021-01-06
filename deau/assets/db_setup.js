// firebase database connection I guess?
import * as firebase from "firebase/app";
import "firebase/database";
var firebaseConfig = {
  apiKey: "AIzaSyA7E3SQoH3kQKczTNmjnQhTUlbVuVkR0Tg",
  authDomain: "deau-e5499.firebaseapp.com",
  databaseURL: "https://deau-e5499.firebaseio.com",
  projectId: "deau-e5499",
  storageBucket: "deau-e5499.appspot.com",
  messagingSenderId: "711211780953",
  appId: "1:711211780953:web:4431f3c0612d7d2e371a48"
};

const db = firebase.database();

function getMeetings(user) {
  db.ref('people/' + user).on("value",
    function (snapshot) {
      console.log(snapshot);
    },
    function (error) {
      console.log(error);
    });
}

function help() {
  console.log("help");
}