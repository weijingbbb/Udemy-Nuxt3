<script setup>
    const rank = useState('rank', () => {
        return shallowRef({
            num: 3
        })
    })
    const chang = () => {
        rank.value.num = 7
    }
</script>

<template>
    <div>
        <div>目前排名是: {{ rank }}</div>
        <button @click="chang">点击上升排名</button>
    </div>
</template>