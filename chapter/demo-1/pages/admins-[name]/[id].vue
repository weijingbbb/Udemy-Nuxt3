<template>
    <div>
        <h1>admin-name: {{ adminname }}</h1>
        <h1>admin-id: {{ adminid }}</h1>
    </div>
</template>
<script setup>
const route = useRoute()
const adminname = route.params.name
const adminid = route.params.id
</script>