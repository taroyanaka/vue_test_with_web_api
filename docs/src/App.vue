<template>
<span>{{ error_log }}</span>
<button @click="fetch_data">fetch_data</button>
<!-- <input type="text" @input="valid_info($event)" v-model="info"> -->
<input type="text" v-model="info" required="required">
<button @click="insert">insert</button>
<button @click="readall">readall</button>
<h1>{{ foo_data }}</h1>

<ul v-for="item in db_list">
    <li class="deleteid">{{ item.id }}:</li>
    <input type="text" class="deleteid info" v-model="item.info">
    <button class="update" @click="update(item.id, item.info)">update</button>
    <button class="deleteid" @click="deleteid(item.id)">deleteid</button>
</ul>

<h1>{{ db_log }}</h1>
</template>

<script>
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
    // => server-side use validatior.js https://github.com/validatorjs/validator.js/
// fetch with authentication test

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


let SERVER_URL = '';
// SERVER_URL = 'http://localhost:8800';
SERVER_URL = "https://marred-mint-art.glitch.me";
let tmp, tmp2;

export default {
    data() {
        return {
            foo_data: 'FOO123',
            info: '',
            db_list: null,
            db_log: '',
            error_log: '',
        }
    },
    // beforeMount(){
    // updated(){
    // beforeUpdate(){
    //     this.check_all_validation();
    // },
    methods: {
        // check_all_validation(){
        //     try {
        //         // https://stackoverflow.com/a/9370654
        //          this.info = validator.isLength(this.info, {min: 1, max: 3}) ? this.info : (function(){throw "error"}());
        //         // throw new Error("foo");
        //         // validator.isLength(this.info, {min: 1, max: 3}) ? "null" : throw new Error("error: isLength {min: 1, max: 3}");
        //     } catch (error) {
        //         // this.error_log = error
        //         console.error(error);
        //     }
        // },
        // valid_info(){
        //     this.info = validator.isLength(this.info, {min: 1, max: 3}) ? this.info : "error: isLength {min: 1, max: 3}";
        // },
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
    },
}

</script>

<style>
#app {
}
.deleteid {
  display: inline-block;
}
</style>
