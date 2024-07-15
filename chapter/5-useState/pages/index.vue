<template>
    <div>
        <h1>这个是首页</h1>
        <div>当前的值是：<span style="font-size: 38px; color: red;">{{ counter }}</span></div>
        <button @click="add">点击值+1</button>
        <div>
            <NuxtLink to="/about">去about页</NuxtLink>
        </div>
    </div>
</template>

<script setup>
const counter = useState('counter',() => 1)
const add = () => {
    counter.value = counter.value + 1
}
</script>