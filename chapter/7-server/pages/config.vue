<template>
    <div>
        <button @click="test">访问test接口</button>
    </div>
</template>

<script setup>
const config = useRuntimeConfig()
console.log('address: ',config.public.address);
console.log('selectKey: ',config.selectKey);

$fetch('/api/test')

</script>

<style scoped lang="scss"></style>