import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyA5y1bSTMuLOrNG8x9pAXLrsXUvsm8SXcM",
    authDomain: "olx-clone-6c2e1.firebaseapp.com",
    projectId: "olx-clone-6c2e1",
    storageBucket: "olx-clone-6c2e1.appspot.com",
    messagingSenderId: "520571502410",
    appId: "1:520571502410:web:83c6934239a8973df6cbb3",
    measurementId: "G-89FYTFMLDE"
  };

  export const Firebase = firebase.initializeApp(firebaseConfig)