// Import the functions you need from the SDKs you need
import firebase from "firebase/app";

import 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCISAL_vM6rgzUPbNXGsoD_15mkK0EWECg",
  authDomain: "alunos-2af8d.firebaseapp.com",
  projectId: "alunos-2af8d",
  storageBucket: "alunos-2af8d.appspot.com",
  messagingSenderId: "770637098068",
  appId: "1:770637098068:web:eeefdcd6222097115b11c1",
  measurementId: "G-VN4X9F13KG"
};


// Initialize Firebase
if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}
export default firebase;