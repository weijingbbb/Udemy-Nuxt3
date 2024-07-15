<template>
    <div>
        {{ product }}
    </div>
</template>

<script setup>
const route = useRoute()
const id = route.params.id
const { data: product, error } = await useFetch(`https://fakestoreapi.com/products/${id}`)

if(!product.value) {
    throw createError({
        statusCode: 404,
        message: '没有找到这个页面'
    })
}
</script>

<style scoped lang="scss"></style>