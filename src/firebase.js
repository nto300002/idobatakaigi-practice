import firebase from "firebase";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCfjZSQhehhiNHuQ9pTXrsUDZ7OkS1BO88",
  authDomain: "idobatakaigi-77d9c.firebaseapp.com",
  databaseURL: "https://idobatakaigi-77d9c-default-rtdb.firebaseio.com",
  projectId: "idobatakaigi-77d9c",
  storageBucket: "idobatakaigi-77d9c.appspot.com",
  messagingSenderId: "958550790063",
  appId: "1:958550790063:web:2ddf1be09cf1c5e5a6e95a"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
export const messagesRef = database.ref('messages');

export const pushMessage = ({ name, text }) => {
  messagesRef.push({ name, text });
};
