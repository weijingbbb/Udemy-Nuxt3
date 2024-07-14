<template>
    <div>
        <h1>捕获所有参数: {{ words }}</h1>
    </div>
</template>
<script setup>
const words = useRoute().params.words
</script>