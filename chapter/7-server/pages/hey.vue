<template>
    <div>
        <h1>hey页</h1>
        {{ data }}
    </div>
</template>

<script setup>
const { data } = await useFetch('/hey')


</script>

<style scoped lang="scss"></style>