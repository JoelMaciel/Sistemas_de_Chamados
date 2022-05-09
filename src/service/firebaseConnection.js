import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD6RY4CHLVMGJv_iDw5t2xkpJ8v6TUmjOE",
  authDomain: "sistema-f008d.firebaseapp.com",
  projectId: "sistema-f008d",
  storageBucket: "sistema-f008d.appspot.com",
  messagingSenderId: "14934642986",
  appId: "1:14934642986:web:ee1ea4022d003b86210e53",
  measurementId: "G-NJMSXVBE57",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase;
