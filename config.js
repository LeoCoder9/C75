import firebase from "firebase"
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyBY2dm_Cg0EmTt7YRSlnhtmP9wI4jhiFkI",
  authDomain: "e-library-app-c0b34.firebaseapp.com",
  projectId: "e-library-app-c0b34",
  storageBucket: "e-library-app-c0b34.appspot.com",
  messagingSenderId: "465434409446",
  appId: "1:465434409446:web:0ffd5a134d5261cb3c3e27"
};
  
  if(! firebase.apps.length)
  firebase.initializeApp(firebaseConfig)

  export default firebase.firestore()