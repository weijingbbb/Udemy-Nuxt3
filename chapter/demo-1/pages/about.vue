<template>
    <div>这个是about页<NuxtLink to="/">首页</NuxtLink></div>
</template>

<script setup>
definePageMeta({
    middleware: [
        (to, from) => {
            console.log('内联middleware------to.path:', to.path, ', form.path:', from.path);
        },
        'history',
    ]
})
</script>

<style scoped lang="scss"></style>