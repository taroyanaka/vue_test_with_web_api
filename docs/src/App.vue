<template>
<img src="/google_signin_buttons/web/2x/btn_google_signin_light_normal_web@2x.png" class="login" value="googleLogin" @click="toggleSignIn" />

<button @click="debug">debug</button>

<!-- <template v-for='(obj, key, index) in login_data'>
    <div>{{key}} is {{obj[key]}}</div>
</template> -->
<ul>
  <!-- <li v-for="value in login_data ? login_data : null"> -->
  <!-- <li v-for="(value, key, index) in login_data ? login_data : null"> -->
  <li v-for="(value, key, index) in login_data">
  <!-- <li v-for="(obj, key, index) in login_data"> -->
    <!-- {{ value }} -->
    <div>{{key}} is: {{value}}</div>
  </li>
</ul>

<h1>login_result is: {{ login_result }}</h1>
<h1>now you are: {{ is_logging_in ? "loggin in" : "not loggin in" }}</h1>

<h1>login_data is:{{ login_data }}</h1>
<h1>login_error is: {{ login_error }}</h1>

<!-- <h2 class="my_uuid"><span>uuid:</span>{{ my_uuid }}</h2> -->
<!-- <h2 class="login_result"><span>login_data:</span>{{ login_result }}</h2> -->
<!-- <button @click="check_login">check_login</button> -->
<!-- <input type="button" name="" class="sign_out" value="sign_out" @click="sign_out"> -->

<!-- <input type="button" name="" class="login" value="googleLogin" @click="any_login('google')"> => google is localhost OK github pages OK -->
<!-- <input type="button" name="" class="login" value="googleLogin" @click="googleLogin"> => google is localhost OK github pages OK -->
<!-- <input type="button" name="" class="login" value="githubLogin" @click="githubLogin"> => github is localhost OK github pages NG -->
<!-- <input type="button" name="" class="login" value="twitterLogin" @click="twitterLogin"> => twitter is localhost OK github pages OK -->
<!-- <input type="button" name="" class="login" value="facebookLogin" @click="facebookLogin"> => facebook is localhost OK github pages NG -->

<button @click="fetch_data">fetch_data</button>

<input class="insert" type="text" v-model="info" minlength="1" maxlength="30" required>

<button @click="insert" :class="{ insert_button_class_for_initial_display_none: true, insert_invalid: this.insert_validation_check()  }">insert</button>
<button @click="readall">readall</button>

<h1>{{ foo_data }}</h1>


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
            my_uuid: null,
            login_result: null,
            is_logging_in: false,
            login_data: null,
            login_error: null,
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
        // await this.firebase_auth_onAuthStateChanged();
        // await this.debug();
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
async debug(){
    // vue.js and all of JS framework is suck, that make more problem than solve.
    // https://stackoverflow.com/a/50313951
    // let SELF = this;
    console.log("onAuthStateChanged is this????? in debug()");
    await console.table([this.login_result, this.login_data, this.login_error]);
},

async firebase_auth_signOut_and_all_login_property_clear() {
    const all_login_property_clear = () => {
        this.login_result = null;
        this.is_logging_in = false;
        this.login_data = null;
        this.login_error = null;
    };
    await firebase.auth().signOut();
    all_login_property_clear();
},
async toggleSignIn() {
    // firebase.auth().currentUser ? firebase.auth().signOut() : firebase.auth().signInWithRedirect((new firebase.auth.GoogleAuthProvider()));
    firebase.auth().currentUser ? this.firebase_auth_signOut_and_all_login_property_clear() : firebase.auth().signInWithRedirect((new firebase.auth.GoogleAuthProvider()));
},
async firebase_auth_getRedirectResult() {
    await firebase.auth().getRedirectResult().then((RESULT) => {
        console.log("getRedirectResult is this?????", res);
        this.login_result = RESULT;
        this.is_logging_in = RESULT["user"] === null ? false : true;
    }).catch((error) => {
        this.is_logging_in = false;
        this.login_error = ERROR;
        ERROR.code === 'auth/account-exists-with-different-credential' ? alert('You have already signed up with a different auth provider for that email.') : console.error(error);
    });
},
async firebase_auth_onAuthStateChanged() {
    let SELF = this;
    const get_user_data_object = (USER) => {
        const user_keys = [
            // "refreshToken",
            "uid",
            "displayName",
            // "photoURL",
            // "email",
            // "emailVerified",
            // "phoneNumber",
            // "isAnonymous",
            // "tenantId",
            // "metadata",
            // "providerData",
        ];
        return R.fromPairs(
            user_keys.map(KEY=>[KEY, USER[KEY]])
        )
    };
    await firebase.auth().onAuthStateChanged(USER => {
        console.log("onAuthStateChanged is this?????");
        if (USER) { SELF.login_data = get_user_data_object(USER) };
        if (USER) { SELF.is_logging_in = true };
    });
},
async initApp() {
    await this.firebase_auth_getRedirectResult();
    await this.firebase_auth_onAuthStateChanged();
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