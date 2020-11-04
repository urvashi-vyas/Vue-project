import firebase from 'firebase/app'
require('firebase/auth')
require('firebase/firestore')

// firebase init - add your own config here

var firebaseConfig = {
  apiKey: "AIzaSyB_ZIk9Y2XSVz1da6QjjEb3EM5dYqH-aIw",
  authDomain: "vue-project-5821e.firebaseapp.com",
  databaseURL: "https://vue-project-5821e.firebaseio.com",
  projectId: "vue-project-5821e",
  storageBucket: "vue-project-5821e.appspot.com",
  messagingSenderId: "727052111458",
  appId: "1:727052111458:web:905fb6b5481426806d0b3b"
};
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')
const ingredientsCollection = db.collection('ingredients')
// export utils/refs
export {
  db,
  auth,
  usersCollection,
  ingredientsCollection,
}