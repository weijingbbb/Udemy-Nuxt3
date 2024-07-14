<template>
    <div style="font-size: 38px; color: red;">这个是about页，使用了自定义layout。</div>
    <button @click="changLayout">切换布局</button>
</template>

<script setup>
definePageMeta({
    middleware: [
        (to, from) => {
            console.log('内联middleware------to.path:', to.path, ', form.path:', from.path);
        },
        'history',
    ],
    layout: 'default'
})
const changLayout = () => {
    setPageLayout('custom')
}
</script>

<style scoped lang="scss"></style>