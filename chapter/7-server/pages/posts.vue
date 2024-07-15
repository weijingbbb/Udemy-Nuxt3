<template>
    <div>
        <button @click="getPosts">获取</button>
        <button @click="addPosts">添加</button>
        <button @click="editPosts">修改</button>
        <button @click="delPosts">删除</button>
        <h2>{{ result }}</h2>
    </div>
</template>

<script setup>
const result = ref(null)

const getPosts = async () => {
    const { data } = await useFetch('/api/posts')
    result.value = data

}
const addPosts = async () => {
    const { data } = await useFetch('/api/posts', {
        method: 'post',
        body: {
            post: {
                id: 5,
                title: '555'
            }
        }
    })
    result.value = data
}
const editPosts = async () => {
    const { data } = await useFetch('/api/posts', {
        method: 'put',
        body: {
            id: 2,
            title: 'new 222 title'
        }
    })
    result.value = data

}
const delPosts = async () => {
    const { data } = await useFetch('/api/posts', {
        method: 'delete',
        body: {
            id: 3
        }
    })
    result.value = data
}
</script>