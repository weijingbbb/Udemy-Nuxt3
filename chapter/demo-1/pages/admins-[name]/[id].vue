<template>
    <div>
        <h1>admin-name: {{ adminname }}</h1>
        <h1>admin-id: {{ adminid }}</h1>
    </div>
</template>
<script setup>
definePageMeta({
    validate: (route) => {
        // 判断是否是数字
        return /^\d+$/.test(route.params.id)
    }
})
const route = useRoute()
const adminname = route.params.name
const adminid = route.params.id
</script>