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
const SERVER_URL = 'http://localhost:8800';
let tmp, tmp2;

export default {
    data() {
        return {
            foo_data: 'FOO123'
        }
    },
    methods: {
        async fetch_data() {
            tmp = await fetch(SERVER_URL);
            tmp2 = await tmp.json();
            this.foo_data = await tmp2["id"];
        }
    },
}

</script>

<style>
#app {
}
</style>
