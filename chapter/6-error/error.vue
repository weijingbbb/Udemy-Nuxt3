<template>
    <div>
        <h1>错误代码：{{ error.statusCode }}</h1>
        <h1>错误信息：{{ error.message }}</h1>
        <p>{{ error }}</p>
        <button @click="handleError">清除错误，返回产品页</button>
    </div>
</template>

<script setup>
    defineProps(['error'])
    // console.log('error-----', error);
    const handleError = () => {
        clearError({
            redirect: '/product/1'
        })
    }
</script>