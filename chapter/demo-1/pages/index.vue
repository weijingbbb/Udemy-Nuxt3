<template>
    <div>
        <LazyInfo v-if="show"/>
        这个是首页, <button @click="show = !show">点击加载info组件</button>
        <div></div>
        <NuxtLink to="/about">about页</NuxtLink>
    </div>
</template>

<script setup>
const show = ref(false)
</script>

<style scoped lang="scss"></style>