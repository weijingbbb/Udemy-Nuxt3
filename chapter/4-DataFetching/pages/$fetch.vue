<template>
    <div>
        {{ toDo }}
        $fetch测试页
    </div>
</template>

<script setup>
const toDo = await $fetch('https://jsonplaceholder.typicode.com/todos/1')
console.log('toDo---', toDo);

</script>

<style scoped lang="scss"></style>