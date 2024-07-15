<template>
    <div>
        <h1>错误代码：{{ error.statusCode }}</h1>
        <h1>错误信息：{{ error.message }}</h1>
        <p>{{ error }}</p>
    </div>
</template>

<script setup>
    defineProps(['error'])
    console.log('error-----', error);
</script>