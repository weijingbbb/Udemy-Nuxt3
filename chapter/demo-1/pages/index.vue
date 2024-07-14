<template>
    <div>
        <LazyInfo v-if="show" />
        <div class=" m-10 py-8 px-10 bg-blue-200 round-bd">
            这个是首页, <button @click="show = !show" class="hover:text-red-600">点击加载info组件</button></div>
        <div class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">Standard glass ,3.8GHz 8-core
            10th-generation Intel Core i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory, Radeon Pro 5500
            XT with 8GB of GDDR6 memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US.</div>
        <NuxtLink to="/about">about页</NuxtLink>
    </div>
</template>

<script setup>
const show = ref(false)
</script>

<style>
.layout-enter-active, .layout-leave-active {
    transition: all .4s;
}
.layout-enter-from, .layout-leave-to {
    opacity: 0;
    filter: blur(1rem);
}
</style>
