<template>
<button @click="fetch_data">fetch_data</button>
<h1>{{ foo_data }}</h1>
</template>

<script>
// local node.js express.js server setup (with hot reloading)
// server side fetch test

// sqlite3 database setup
// fetch with sqlite3(better-sqlite3)

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
            foo_data: 'FOO123'
        }
    },
    // async created (){
    //     tmp = await fetch("https://marred-mint-art.glitch.me");
    //     tmp2 = await tmp.json();
    //     await console.log(tmp2);
    //     return await tmp2;
    // },
    methods: {
        async fetch_data() {
            let tmp = await fetch(SERVER_URL);
            // let tmp = await fetch("https://marred-mint-art.glitch.me");
            let tmp2 = await tmp.json();
            console.log(tmp2);
            this.foo_data = await tmp2["id"];
        }
    },
}

</script>

<style>
#app {
}
</style>
