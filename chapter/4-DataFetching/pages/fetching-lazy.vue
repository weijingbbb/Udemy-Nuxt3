<template>
    <div>
        <div>这个是fetching-post页</div>
        <h1 v-if="status === 'pending'">请求中</h1>
        <div v-else>{{ posts }}</div>
    </div>
</template>

<script setup>
/**
 * 在常规的页面跳转中，（默认行为）假使请求没有完成，是不能进入此页面的
 * 如果使用了lazy，则可以进入，期间可以访问请求的状态，
 * 同时设置一些请求中的状态UI，例如loading等
*/

// 视频上的教程使用的是pedding，但这个属性被弃用了，使用status
const { data: posts, status } = await useFetch('products/1', {
    baseURL: 'https://fakestoreapi.com',
    lazy: true,
})
console.log('posts---: ', posts.value);
</script>