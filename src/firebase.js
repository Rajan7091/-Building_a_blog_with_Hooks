import firebase from 'firebase/compat/app';
//import 'firebase/compat/auth';
import 'firebase/compat/firestore';
  const firebaseConfig = {
    apiKey: "AIzaSyD4jLjgNhkyGIVcorBgzwlH28AU6W1JMYQ",
    authDomain: "react-blog-eeb86.firebaseapp.com",
    projectId: "react-blog-eeb86",
    storageBucket: "react-blog-eeb86.appspot.com",
    messagingSenderId: "592430999213",
    appId: "1:592430999213:web:7a3f530334062a984cc824"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const firestore=firebase.firestore();