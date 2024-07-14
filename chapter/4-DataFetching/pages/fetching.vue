<template>
    <div>这个是fetching页</div>
</template>

<script setup>
    const { data: products } = await useFetch('https://fakestoreapi.com/products')
    console.log('products: ',products.value);
</script>