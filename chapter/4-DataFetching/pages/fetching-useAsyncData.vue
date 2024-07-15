<template>
    <div>这个是useAsyncData页面</div>
</template>

<script setup>
    const { data } = await useAsyncData('product', async () => {
        const [products, categories, todos] = await Promise.all([
            $fetch('https://fakestoreapi.com/products'),
            $fetch('https://fakestoreapi.com/products/categories'),
            $fetch('https://jsonplaceholder.typicode.com/todos'),
        ])
        return { products, categories, todos  }
    })
    console.log(data.value);
    console.log(data.value.products);
    console.log(data.value.categories);
    console.log(data.value.todos);
</script>