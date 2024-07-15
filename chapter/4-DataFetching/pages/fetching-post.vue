<template>
    <div>这个是fetching-post页<div>{{ posts }}</div></div>
</template>

<script setup>
const { data: posts } = await useFetch('posts', {
    baseURL: 'https://jsonplaceholder.typicode.com',
    method: 'post',
    body: {
        title: '哈啰',
        body: '你好呀',
        userID: 99
    },
    params: {
        aaa: 'aaa',
        bbb: 'bbb'
    },
    // query: {
    //     ccc: 'ccc',
    //     ddd: 'ddd'
    // }
    timeout: 5000
})
console.log('posts---: ', posts.value);
</script>