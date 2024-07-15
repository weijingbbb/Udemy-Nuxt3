<template>
    <div>这个是fetching页</div>
    <button @click="fetchProduct">
        获取下一条商品信息
    </button>
</template>

<script setup>
const id = ref(1)
const { data: products, refresh } = await useFetch('products/categories', {
    baseURL: 'https://fakestoreapi.com'
})
console.log('products---: ', products.value);
const fetchProduct = async () => {
    id.value = id.value + 1
    await refresh()
    console.log('refresh: ', products.value);
}
</script>