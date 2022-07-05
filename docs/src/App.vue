<template>
<button @click="fetch_data">fetch_data</button>
<input type="text" v-model="info">
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

// fetch with authentication test
// fetch with validation test

// fetch with authentication and validation test

let SERVER_URL = '';
// SERVER_URL = 'http://localhost:8800';
SERVER_URL = "https://marred-mint-art.glitch.me";
let tmp, tmp2;

// let tmp = await fetch("https://marred-mint-art.glitch.me");
// let tmp2 = await tmp.json();
// await console.log(tmp2);

export default {
    data() {
        return {
            foo_data: 'FOO123',
            info: '',
            db_list: null,
            db_log: ''
        }
    },
    // async created (){
    //     tmp = await fetch("https://marred-mint-art.glitch.me");
    //     tmp2 = await tmp.json();
    //     await console.log(tmp2);
    //     return await tmp2;
    // },
    methods: {
        async async_await_fetch_json_log_assign(FETCH_PARAM, DATA_KEY_ARRAY, KEY) {
            const FETCH_DATA = await fetch(FETCH_PARAM);
            const JSON_DATA = await FETCH_DATA.json();
            console.table(JSON_DATA);
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
            // tmp = await fetch(SERVER_URL + "/insert?info=" + this.info);
            // tmp2 = await tmp.json();
            // console.table(tmp2);
            // this.db_log = await tmp2["data"];
            // this.db_list = await tmp2["data"];
            await this.async_await_fetch_json_log_assign((SERVER_URL + "/insert?info=" + this.info), ["db_log", "db_list"], "data");
        },
        async deleteid(ID) {
            // tmp = await fetch(SERVER_URL + "/deleteid?id=" + ID);
            // tmp2 = await tmp.json();
            // console.table(tmp2);
            // this.db_log = await tmp2["data"];
            // this.db_list = await tmp2["data"];
            await this.async_await_fetch_json_log_assign((SERVER_URL + "/deleteid?id=" + ID), ["db_log", "db_list"], "data");
        },
        async update(ID, INFO) {
            // tmp = await fetch(SERVER_URL + "/update?id=" + ID + "&info=" + INFO);
            // tmp2 = await tmp.json();
            // console.table(tmp2);
            // this.db_log = await tmp2["data"];
            // this.db_list = await tmp2["data"];
            await this.async_await_fetch_json_log_assign((SERVER_URL + "/update?id=" + ID + "&info=" + INFO), ["db_log", "db_list"], "data");
        },
        async readall() {
            // tmp = await fetch(SERVER_URL + "/readall");
            // tmp2 = await tmp.json();
            // console.table(tmp2);
            // this.db_log = await tmp2["data"];
            // this.db_list = await tmp2["data"];
            await this.async_await_fetch_json_log_assign((SERVER_URL + "/readall"), ["db_log", "db_list"], "data");
            // await this.async_await_fetch_json_log_assign((SERVER_URL + "/readall"), ["db_log", "foo_data"], "data");
            // await this.async_await_fetch_json_log_assign((SERVER_URL + "/readall"), ["db_list"], "data");
        },
    },
}

</script>

<style>
#app {
}
.deleteid {
  display: inline-block; /* the default for span */
}
</style>
