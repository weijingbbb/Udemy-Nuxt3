<template>
    <div>
        <LazyInfo v-if="show" />
        <div class=" m-10 py-8 px-10 bg-blue-200 round-bd">
            这个是首页, <button @click="show = !show" class="hover:text-red-600">点击加载info组件</button></div>
        <div></div>
        <NuxtLink to="/about">about页</NuxtLink>
    </div>
</template>

<script setup>
const show = ref(false)
</script>

<style scoped lang="scss"></style>