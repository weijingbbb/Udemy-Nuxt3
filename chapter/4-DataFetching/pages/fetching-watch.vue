<template>
    <div>
        <div>这个是fetching-watch页</div>
        <div>{{ posts }}</div>
        <button @click="add">点击增加id呀： {{ id }}</button>
    </div>
</template>

<script setup>
/**
 * watch: [], 监听链接中使用的值，每次发生改变时，都会执行一遍请求
 * watch: [id], 被监听的id属性，每次发生改变时，都会执行一遍请求
 * watch: false, 即使id属性改变，也不会重新发起请求，只会执行第一次
*/
const id = ref(1)
const id222 = ref(1)
const { data: posts, status } = await useFetch(() => `products/${id.value}`, {
    baseURL: 'https://fakestoreapi.com',
    watch: [id],
})
onNuxtReady(() => {
    setInterval(() => {
        id222.value = id222.value + 1
        console.log(id222.value);
    }, 1000)
})

const add = () => {
    id.value = id.value + 1
}
console.log('posts---: ', posts.value);
</script>