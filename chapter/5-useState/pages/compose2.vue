<template>
    <div>
        <h1>这个是compose2页</h1>
        <div>当前的值是：<span style="font-size: 38px; color: red;">{{ counter }}</span></div>
        <button @click="add">点击值+1</button>
        <div>
            <NuxtLink to="/">去首页</NuxtLink>
        </div>
        <div>
            <NuxtLink to="/compose">去compose页</NuxtLink>
        </div>
    </div>
</template>

<script setup>
const counter = useCounter()
const add = () => {
    counter.value = counter.value + 1
}
</script>