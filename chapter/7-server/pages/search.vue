<template>
    <div>
        <h1>search页</h1>
        访问的名字为：{{ name }}
    </div>
</template>

<script setup>
    const { data: name } = await useFetch('/user/search', {
        server: false,
        method: 'post',
    })


</script>

<style scoped lang="scss"></style>