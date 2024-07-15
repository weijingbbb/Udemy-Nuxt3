<template>
    <div>这个是fetching-put页<div>{{ put }}</div></div>
</template>

<script setup>
const { data: put } = await useFetch('posts/1', {
    baseURL: 'https://jsonplaceholder.typicode.com',
    method: 'put',
    body: {
        title: '更新数据',
        body: '快点呀',
        userID: 99
    }
})
console.log('put---: ', put.value);
</script>