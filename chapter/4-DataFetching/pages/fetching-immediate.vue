<template>
    <div>
        <div>这个是fetching-immediate</div>
        <div>这里渲染结果：{{ posts }}</div>
        <button @click="execute">请求数据呀</button>
    </div>
</template>

<script setup>
// immediate，默认初始化时不调用请求，把执行的权力交给用户调用
// default设置默认数据
// 进行参数转换
const { data: posts, execute } = await useFetch('products/1', {
    baseURL: 'https://fakestoreapi.com',
    immediate: false,
    default: (product) => {
        product = '没有数据呀，点击进行请求呀！'
        return product
    },
    transform: (product) => {
        return {
            ...product,
            title: '转换后的标题呀'
        }
    },
    pick: ['title']
})
console.log('posts---: ', posts.value);
</script>