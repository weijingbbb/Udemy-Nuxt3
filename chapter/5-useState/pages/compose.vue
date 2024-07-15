<template>
    <div>
        <h1>这个是compose页</h1>
        <div>当前的值是：<span style="font-size: 38px; color: red;">{{ counter }}</span></div>
        <button @click="add">点击值+1</button>
        <div>
            <NuxtLink to="/">返回首页</NuxtLink>
        </div>
        <div>
            <NuxtLink to="/compose2">去compose2页</NuxtLink>
        </div>
    </div>
</template>

<script setup>
const counter = useCounter()
const add = () => {
    counter.value = counter.value + 1
}
</script>