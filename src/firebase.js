import firebase from 'firebase'

import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBhDXgtr6gs0oFxNYsmICEz6qoElfonhD8",
  authDomain: "info-feed-react-firebase.firebaseapp.com",
  databaseURL: "https://info-feed-react-firebase-default-rtdb.firebaseio.com",
  projectId: "info-feed-react-firebase",
  storageBucket: "info-feed-react-firebase.appspot.com",
  messagingSenderId: "336631060192",
  appId: "1:336631060192:web:c31664b58316e5e03aa285"
  };

firebase.initializeApp(firebaseConfig)

export var database = firebase.database()

export default firebase.auth()



