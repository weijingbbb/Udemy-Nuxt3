<template>
    <div>
        <div>这个是fetching-immediate</div>
        <button @click="execute">请求数据呀</button>
    </div>
</template>

<script setup>
// immediate，默认初始化时不调用请求，把执行的权力交给用户调用
const { data: posts, execute } = await useFetch('products/1', {
    baseURL: 'https://fakestoreapi.com',
    immediate: false,
})
console.log('posts---: ', posts.value);
</script>