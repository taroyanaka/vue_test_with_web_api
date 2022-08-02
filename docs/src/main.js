import { createApp } from 'vue'
import App from './App.vue'

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from 'firebase/app';

// const firebaseConfig = {
//     apiKey: "AIzaSyBcOlIDP2KWbJuKM0WeMHNp-WvjTVfLt9Y",
//     authDomain: "p2auth-ea50a.firebaseapp.com",
//     projectId: "p2auth-ea50a",
//     storageBucket: "p2auth-ea50a.appspot.com",
//     messagingSenderId: "796225429484",
//     appId: "1:796225429484:web:ece56ef2fc0be28cd6eac9"
// };

// firebase.initializeApp(firebaseConfig);

// if (firebase.apps.length === 0) {
//   firebase.initializeApp(firebaseConfig);
// }

createApp(App).mount('#app')



// const google = new firebase.auth.GoogleAuthProvider();
// const github = new firebase.auth.GithubAuthProvider();
// const twitter = new firebase.auth.TwitterAuthProvider();
// const facebook = new firebase.auth.FacebookAuthProvider();




// firebase.auth().getRedirectResult().then(function(result) {
// if (result.credential) {
//     var token = result.credential.accessToken;
//     document.getElementById('quickstart-oauthtoken').textContent = token;
// } else {
//     document.getElementById('quickstart-oauthtoken').textContent = 'null';
// }
// var user = result.user;
// }).catch(function(error) {
// var errorCode = error.code;
// var errorMessage = error.message;
// var email = error.email;
// var credential = error.credential;
// if (errorCode === 'auth/account-exists-with-different-credential') {
//     alert('You have already signed up with a different auth provider for that email.');
// } else {
//     console.error(error);
// }
// });

// firebase.auth().onAuthStateChanged(function(user) {
// if (user) {
//     var displayName = user.displayName;
//     var email = user.email;
//     var emailVerified = user.emailVerified;
//     var photoURL = user.photoURL;
//     var isAnonymous = user.isAnonymous;
//     var uid = user.uid;
//     var providerData = user.providerData;
//     document.getElementById('quickstart-sign-in-status').textContent = 'Signed in';
//     document.getElementById('quickstart-sign-in').textContent = 'Sign out';
//     document.getElementById('quickstart-account-details').textContent = JSON.stringify(user, null, '  ');
// } else {
//     document.getElementById('quickstart-sign-in-status').textContent = 'Signed out';
//     document.getElementById('quickstart-sign-in').textContent = 'Sign in with Google';
//     document.getElementById('quickstart-account-details').textContent = 'null';
//     document.getElementById('quickstart-oauthtoken').textContent = 'null';
// }
// document.getElementById('quickstart-sign-in').disabled = false;
// });

// document.getElementById('quickstart-sign-in').addEventListener('click', toggleSignIn, false);