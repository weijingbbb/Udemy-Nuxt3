<template>
    <div>
        <h1>rec页</h1>
        访问的名字为：{{ name }}
    </div>
</template>

<script setup>
    let userName
    if(process.client) {
        userName = prompt('需要访问的名字')
    }

    const { data: name } = await useFetch('/user/rec-user', {
        server: false,
        method: 'post',
        body: {
            name: userName
        }
    })


</script>

<style scoped lang="scss"></style>