<template>
    <div>
        <div class="animate__animated animate__bounce" style="font-size: 38px; color: red;">这个是about页，使用了自定义layout。
        </div>
        <button @click="changLayout">切换布局</button>
        <div>测试about的局部样式</div>
    </div>
</template>

<script setup>
import '~/assets/about.css';
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

<style scoped>
@import '~/assets/scoped.css';
</style>