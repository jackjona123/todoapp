import firebase from "firebase";

const firebaseApp = firebase.initializeApp ({
  apiKey: "AIzaSyCIW8rD_DV1lxtwuO60l4ShmNnYYY5a3Xc",
  authDomain: "to-dowebsite.firebaseapp.com",
  projectId: "to-dowebsite",
  storageBucket: "to-dowebsite.appspot.com",
  messagingSenderId: "764765104146",
  appId: "1:764765104146:web:a963fb8b57875ed56910cb",
  measurementId: "G-4XLR8S12RQ"
});

const db = firebaseApp.firestore();

export {db};