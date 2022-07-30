import { createApp } from 'vue'
import App from './App.vue'

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBcOlIDP2KWbJuKM0WeMHNp-WvjTVfLt9Y",
    authDomain: "p2auth-ea50a.firebaseapp.com",
    projectId: "p2auth-ea50a",
    storageBucket: "p2auth-ea50a.appspot.com",
    messagingSenderId: "796225429484",
    appId: "1:796225429484:web:ece56ef2fc0be28cd6eac9"
};

// firebase.initializeApp(firebaseConfig);

// if (firebase.apps.length === 0) {
//   firebase.initializeApp(firebaseConfig);
// }

createApp(App).mount('#app')



// const google = new firebase.auth.GoogleAuthProvider();
// const github = new firebase.auth.GithubAuthProvider();
// const twitter = new firebase.auth.TwitterAuthProvider();
// const facebook = new firebase.auth.FacebookAuthProvider();


