<template>
    <div>
        <div>这个是fetching-cache页</div>
        <div>{{ posts }}</div>
        <NuxtLink to="/">返回首页</NuxtLink>
    </div>
</template>

<script setup>
/**
 * key 每个请求，都会有一个key，这个可以在Nuxt的工具中查看
 * getCachedData，假定在已知需要请求的数据，不会改变的情况下，
 *      初次进行进行数据请求
 *      再次进入页面，会根据请求的key进行缓存查找，不再发起新请求
*/
const nuxtApp = useNuxtApp()
const id = ref(1)
const { data: posts } = await useFetch(() => `products/${id.value}`, {
    baseURL: 'https://fakestoreapi.com',
    getCachedData: key => {
        return nuxtApp.payload.data[key] || nuxtApp.static.data[key];
    }
})


console.log('posts---: ', posts.value)
</script>