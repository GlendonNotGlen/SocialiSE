const firebaseConfig = {
  apiKey: "AIzaSyDbuW1Pj4UmWKA1Fb_oydWV4Onq4zrwp7I",
  authDomain: "socialise-8876e.firebaseapp.com",
  databaseURL:
    "https://socialise-8876e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "socialise-8876e",
  storageBucket: "socialise-8876e.appspot.com",
  messagingSenderId: "341981071333",
  appId: "1:341981071333:web:12b342d17ca06ee169910c",
  measurementId: "G-ZC2LFF6L3T",
};
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);
const auth = firebase.auth(app);
