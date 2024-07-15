<template>
    <div>这个是fetching-patch页<div>{{ posts }}</div></div>
</template>

<script setup>
const { data: posts } = await useFetch('posts/1', {
    baseURL: 'https://jsonplaceholder.typicode.com',
    method: 'patch',
    body: {
        title: '打补丁',
    }
})
console.log('posts---: ', posts.value);
</script>