<template>
    <div>
        <h1>name: {{ name }}</h1>
        <h1>id: {{ id }}</h1>
        <h1>方便获取参数: {{ $route.params.id }}</h1>
    </div>
</template>
<script setup>
const route = useRoute()
const name = route.params.name
const id = route.params.id
</script>