<template>
    <div>
        <Head>
            <Title>{{ i }} - Service页呀</Title>
        </Head>
        <div style="font-size: 38px; color: green;">service页</div>
        <button @click="i++">点击标题+1</button>
    </div>
</template>

<script setup>
    // useSeoMeta({
    //     title: '服务页',
    //     meta: [
    //         {
    //             name: '这个是服务页的name',
    //             content: '这个是服务页的content'
    //         }
    //     ]
    // })
    const i = ref(0)

</script>

<style scoped>
.page-enter-active, .page-leave-active {
    transition: all .4s;
}
.page-enter-from, .page-leave-to {
    opacity: 0;
    filter: blur(1rem);
}
</style>