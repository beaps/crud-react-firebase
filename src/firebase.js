import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyATef4r4YUZOyP2jKHyCcflFudae-mqYXY",
  authDomain: "crud-react-ef135.firebaseapp.com",
  databaseURL: "https://crud-react-ef135.firebaseio.com",
  projectId: "crud-react-ef135",
  storageBucket: "crud-react-ef135.appspot.com",
  messagingSenderId: "400858464796",
  appId: "1:400858464796:web:f39ec60ca027d94e0a15d9"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

// Connect to Firestore
export const db = fb.firestore();

