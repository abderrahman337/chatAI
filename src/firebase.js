import firebase from "firebase/app";
import 'firebase/auth'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const auth = firebase.initializeApp({
      apiKey: "AIzaSyAlo8tdHZMaeyw1Z4vvGyku_e-4syxm1Gc",
      authDomain: "chat-9ae76.firebaseapp.com",
      projectId: "chat-9ae76",
      storageBucket: "chat-9ae76.appspot.com",
      messagingSenderId: "487995584066",
      appId: "1:487995584066:web:6cf8d737dc78dc2539c7db",
      measurementId: "G-PYE60HM0TP"
    }).auth();
