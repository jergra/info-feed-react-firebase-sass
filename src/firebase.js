import firebase from 'firebase'

import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDwc-QsUwe5Ln9dAQhklOnrS7BmMst3Viw",
  authDomain: "info-feed-react-firebase-sass.firebaseapp.com",
  databaseURL: "https://info-feed-react-firebase-sass-default-rtdb.firebaseio.com",
  projectId: "info-feed-react-firebase-sass",
  storageBucket: "info-feed-react-firebase-sass.appspot.com",
  messagingSenderId: "1090110775031",
  appId: "1:1090110775031:web:ddf468d63cc150ded27df2"
  };

firebase.initializeApp(firebaseConfig)

export var database = firebase.database()

export default firebase.auth()



