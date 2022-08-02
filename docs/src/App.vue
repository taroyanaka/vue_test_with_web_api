<template>
<img src="/google_signin_buttons/web/2x/btn_google_signin_light_normal_web@2x.png" class="login" value="googleLogin" @click="toggleSignIn" />

<button @click="debug">debug</button>
<h1>{{ login_state }}</h1>

<!-- <h2 class="my_uuid"><span>uuid:</span>{{ my_uuid }}</h2> -->
<!-- <h2 class="login_result"><span>login_state:</span>{{ login_result }}</h2> -->
<!-- <button @click="check_login">check_login</button> -->
<!-- <input type="button" name="" class="sign_out" value="sign_out" @click="sign_out"> -->

<!-- <input type="button" name="" class="login" value="googleLogin" @click="any_login('google')"> => google is localhost OK github pages OK -->
<!-- <input type="button" name="" class="login" value="googleLogin" @click="googleLogin"> => google is localhost OK github pages OK -->
<!-- <input type="button" name="" class="login" value="githubLogin" @click="githubLogin"> => github is localhost OK github pages NG -->
<!-- <input type="button" name="" class="login" value="twitterLogin" @click="twitterLogin"> => twitter is localhost OK github pages OK -->
<!-- <input type="button" name="" class="login" value="facebookLogin" @click="facebookLogin"> => facebook is localhost OK github pages NG -->

<span>{{ error_log }}</span>
<button @click="fetch_data">fetch_data</button>

<input class="insert" type="text" v-model="info" minlength="1" maxlength="30" required>

<button @click="insert" :class="{ insert_button_class_for_initial_display_none: true, insert_invalid: this.insert_validation_check()  }">insert</button>
<button @click="readall">readall</button>

<h1>{{ foo_data }}</h1>

<h1>{{ login_state }}</h1>

<ul v-for="item in db_list">
    <li class="deleteid">{{ item.id }}:</li>
    <input type="text" v-model="item.info" :class="{ update: true, deleteid: true, info: true}" minlength="1" maxlength="30" required>

    <button @click="update(item.id, item.info)" :class="{ update_invalid: this.update_validation_check() ? true : false }">update</button>
    <button class="deleteid" @click="deleteid(item.id)">deleteid</button>
</ul>

<h1>{{ db_log }}</h1>
</template>

<script>
// document.querySelector("#app").__vue_app__._component.methods.debug()



// local node.js express.js server setup (with hot reloading)
// => ☑️
// server side fetch test
// => ☑️

// sqlite3 database setup
// => ☑️
// fetch with sqlite3(better-sqlite3)
// => ☑️

// fetch with validation test
    // => client-side use only HTML form validation https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
    // => ☑️
    // => server-side use validatior.js https://github.com/validatorjs/validator.js/
    // => ☑️
// fetch with authentication test
    // => uid from firebase authentication
        // => https://gist.github.com/taroyanaka/1275ccf0f7adc549fcf01cdb19f2afd6

            // I need to refactoring this code like this.
            // => https://github.com/firebase/quickstart-js/blob/master/auth/google-redirect.html

                // initApp fn, onload(vue mount?) : .getRedirectResult() and .onAuthStateChanged() =>
                    // toggleSignIn fn, onclick : .signInWithRedirect(provider) or .signOut() =>
                        // initApp fn, onload(vue mount?) : .getRedirectResult() and .onAuthStateChanged()


// fetch with authentication and validation test

// should I do CSRF protection?
// https://garafu.blogspot.com/2017/04/nodejs-express-csrfprotection.html




// validator.isLength(str [, options])
// validator.isLength(str {min:0, max: undefined})
// validator.isLength(str {min:0, max: 2})
// options is an object which defaults to {min:0, max: undefined}. Note: this function takes into account surrogate pairs.


// before hack, change ALLOW ORIGIN on glitch.com server.js for http://localhost
// function allowOrigin(res){
// ===>   res.header("Access-Control-Allow-Origin", "https://taroyanaka.github.io");
// ===>   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");  
// }


// https://taroyanaka.github.io/javascript/HTML/p2.html
const firebaseConfig = {
    apiKey: "AIzaSyBcOlIDP2KWbJuKM0WeMHNp-WvjTVfLt9Y",
    authDomain: "p2auth-ea50a.firebaseapp.com",
    projectId: "p2auth-ea50a",
    storageBucket: "p2auth-ea50a.appspot.com",
    messagingSenderId: "796225429484",
    appId: "1:796225429484:web:ece56ef2fc0be28cd6eac9"
};

firebase.initializeApp(firebaseConfig);
let displayName;
let email;
let emailVerified;
let photoURL;
let isAnonymous;
let uid;
let providerData;
let token;
let user;
let errorCode;
let errorMessage;
let credential;
let res;



// window.onload = function() {
//     initApp();
// };




// firebase.auth().languageCode = 'ja';
// window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
//         'size': 'invisible',
//         'callback': (response) => {
//             // reCAPTCHA solved, allow signInWithPhoneNumber.
//             onSignInSubmit();
//         }
//     });
// window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');




let SERVER_URL = '';
SERVER_URL = 'http://localhost:8800';
// SERVER_URL = "https://marred-mint-art.glitch.me";
let tmp, tmp2;

export default {
    data() {
        return {
            foo_data: 'FOO123',
            info: '',
            db_list: null,
            db_log: '',
            error_log: '',
            my_uuid: null,
            login_result: null,
            login_state: null,
// insert_validation_data: true,
            // validation_result: '',
        }
    },
    // beforeMount(){
    // updated(){
    async created(){
        // await this.initApp();
    },
    async beforeMount(){
        // await this.initApp();
    },
    async mounted(){
        // document.querySelector(".insert_button_class_for_initial_display_none").style = 'display: none;'
        await this.initApp();
        await this.debug();
    },
    async beforeUpdate(){
        // await this.debug();
    },
    async updated(){
        // await this.initApp();
        await this.debug();
    },
    methods: {
        async async_await_fetch_json_log_assign(FETCH_PARAM, DATA_KEY_ARRAY, KEY) {
            const FETCH_DATA = await fetch(FETCH_PARAM);
            const JSON_DATA = await FETCH_DATA.json();
            console.table(JSON_DATA);
            if (JSON_DATA.message !== "success") return
            // https://stackoverflow.com/a/37576787
            for (const DATA_KEY of DATA_KEY_ARRAY) {
                this[DATA_KEY] = JSON_DATA[KEY];
            }
        },
        async fetch_data() {
            // tmp = await fetch(SERVER_URL);
            // tmp2 = await tmp.json();
            // console.log(tmp2);
            // this.foo_data = await tmp2["id"];
            await this.async_await_fetch_json_log_assign(SERVER_URL, ["foo_data"], "id");
        },
        async insert() {
            await this.async_await_fetch_json_log_assign((SERVER_URL + "/insert?info=" + this.info), ["db_log", "db_list"], "data");
            // await this.async_await_fetch_json_log_assign((SERVER_URL + "/insert?info=" + this.check_all_validation()), ["db_log", "db_list"], "data");
        },
        async deleteid(ID) {
            await this.async_await_fetch_json_log_assign((SERVER_URL + "/deleteid?id=" + ID), ["db_log", "db_list"], "data");
        },
        async update(ID, INFO) {
            await this.async_await_fetch_json_log_assign((SERVER_URL + "/update?id=" + ID + "&info=" + INFO), ["db_log", "db_list"], "data");
        },
        async readall() {
            await this.async_await_fetch_json_log_assign((SERVER_URL + "/readall"), ["db_log", "db_list"], "data");
        },
insert_validation_check(){
    return Array.from(document.querySelectorAll("input.insert")).map(V=>V.validity.valid).some(x=> x === false )
},
update_validation_check(){
    return Array.from(document.querySelectorAll("input.update")).map(V=>V.validity.valid).some(x=> x === false )
},
// https://p2auth-ea50a.firebaseapp.com/__/auth/handler
// https://qiita.com/sl2/items/2815e62aaf2baea2f589
// https://blog.katsubemakito.net/firebase/firebase-authentication-facebook-web1
// async any_login(service) {
//     switch (service) {
//         case "google": await firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider()); break;
//         case "github": await firebase.auth().signInWithRedirect(new firebase.auth.GithubAuthProvider()); break;
//         case "twitter": await firebase.auth().signInWithRedirect(new firebase.auth.TwitterAuthProvider()); break;
//         case "facebook": await firebase.auth().signInWithRedirect(new firebase.auth.FacebookAuthProvider()); break;
//     }
//     await check_login();


// },
// async check_login() {
//     await firebase.auth().onAuthStateChanged(async user => {
//         this.my_uuid = (await user) ? user.uid : "public";
//         this.login_result = (await user) ? "now login" : "now not login";
//     });
// },
// async sign_out() {
//     await firebase.auth().signOut();
//     await check_login();
// },

async debug(){
    // vue.js and all of JS framework is suck, that make more problem than solve.
    // https://stackoverflow.com/a/50313951
    let SELF = this;
    const set_to_global_value = (USER) => {
        displayName = USER.displayName;
        email = USER.email;
        emailVerified = USER.emailVerified;
        photoURL = USER.photoURL;
        isAnonymous = USER.isAnonymous;
        uid = USER.uid;
        providerData = USER.providerData;
    };
    await firebase.auth().onAuthStateChanged((USER)=> {
        if (USER) {
                set_to_global_value(USER);
                console.log("onAuthStateChanged is this????? in debug()");
                // https://stackoverflow.com/a/50313951
                SELF.login_state = JSON.stringify([
                    USER.displayName,
                    USER.email,
                    USER.emailVerified,
                    USER.photoURL,
                    USER.isAnonymous,
                    USER.uid,
                    USER.providerData,
                ]);
                console.log(SELF.login_state);
        }
    });
    const all_auth_val_array = await [displayName, email, emailVerified, photoURL, isAnonymous, uid, providerData, token, user, errorCode, errorMessage, credential];
    await console.table(all_auth_val_array);
},

async toggleSignIn() {
    firebase.auth().currentUser ? firebase.auth().signOut() : firebase.auth().signInWithRedirect(provider);
},
async initApp() {
    const show_error = (ERROR) => console.log([ERROR.code, ERROR.message, ERROR.email, ERROR.credential]);
    await firebase.auth().getRedirectResult().then((RESULT) => {
        res = RESULT;
        console.log("getRedirectResult is this?????", res);
        if (RESULT.credential) { token = RESULT.credential.accessToken }
        user = RESULT.user;
    }).catch((error) => {
        show_error(error);
        ERROR.code === 'auth/account-exists-with-different-credential' ? alert('You have already signed up with a different auth provider for that email.') : console.error(error);
    });


    console.log(res);

    let SELF = this;
    await firebase.auth().onAuthStateChanged(function(user) {
    res = user;
    if (user) {
            console.log("onAuthStateChanged is this?????");
            displayName = user.displayName;
            email = user.email;
            emailVerified = user.emailVerified;
            photoURL = user.photoURL;
            isAnonymous = user.isAnonymous;
            uid = user.uid;
            providerData = user.providerData;

            SELF.login_state = [
                user.displayName,
                user.email,
                user.emailVerified,
                user.photoURL,
                user.isAnonymous,
                user.uid,
                user.providerData,
            ]
            // this.debug();
            // this.login_state = JSON.stringify(displayName);
            // this.check_login2(displayName);

            // console.log(this.login_state);
    } else {
    }
    });

    // this.login_state = await JSON.stringify(displayName);
    await console.log(res);
},
    },
}

</script>

<style>
#app {
}
.deleteid {
  display: inline-block;
}
.insert_invalid {
    display: none;
}
.update_invalid {
    display: none;
}
.login{
    /* width: 100%; */
    height: 2.5rem;
}
</style>