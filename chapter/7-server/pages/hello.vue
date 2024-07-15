<template>
    <div>
        <h1>hello页</h1>
        {{ data }}
        {{ hi?.name }}
        {{ hi?.age }}
    </div>
</template>

<script setup>
const { data } = await useFetch('/api/hello')
const { data: hi } = await useFetch('/api/hi')


</script>

<style scoped lang="scss"></style>