<template>
    <div>这个是fetching页</div>
    <button @click="fetchProduct">
        获取下一条商品信息
    </button>
</template>

<script setup>
const id = ref(1)
const { data: products, refresh } = await useFetch(() =>`https://fakestoreapi.com/products/${id.value}`)
console.log('products: ', products.value);
const fetchProduct = async () => {
    ++id.value
    await refresh()
    console.log('refresh: ', products.value);
}
</script>