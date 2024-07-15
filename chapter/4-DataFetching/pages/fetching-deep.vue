<template>
    <div>
        <div>这个是fetching-deep页</div>
        <div>{{ prosucts }}</div>
        <div>prosucts.title的值为:{{ prosucts.title }}</div>
        <div>prosucts.rating.rate的值为:{{ prosucts.rating.rate }}</div>
        <button @click="changeTitle">改变对象的title值</button>
        <button @click="changeRating">改变对象的rating值</button>
    </div>
</template>

<script setup>
const a = {
    "id": 1,
    "title":
        "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
        "rate": 3.9,
        "count": 120
    }
}
/**
 * 深浅引用的科普： 假设有一个对象 obj，其中包含一个数组 arr。进行浅引用复制时，复制后的对象 objCopy 仍然指向相同的数组 arr，而进行深引用复制时，复制后的对象 objCopy 包含一个新的数组，与原始数组无关。
 * 总的来说，浅引用复制只复制了引用，而深引用复制则复制了实际的值，使得原始对象和复制后的对象之间相互独立。在编程中，根据需求选择合适的引用方式非常重要，以避免意外的数据修改和影响。
 * 
 * deep: 返回深引用对象中的数据（默认为 true ）。
 * 它可以设置为 false 以在浅引用对象中返回数据，如果数据不需要深度响应，则可以提高性能
*/
const id = ref(1)
const { data: prosucts } = await useFetch(() => `products/${id.value}`, {
    baseURL: 'https://fakestoreapi.com',
    deep: false,
    // server: false
})

const changeRating = () => {
    prosucts.value.rating.rate = '改变了哟'
    setTimeout(() => {
        console.log('prosucts.rating.rate的新值为：',prosucts.value.rating.rate);
    }, 500);
}
const changeTitle = () => {
    prosucts.value.title = '改变了哟-title'
    setTimeout(() => {
        console.log('prosucts.title的新值为：',prosucts.value.title);
    }, 500);
}


console.log('prosucts---: ', prosucts.value)
</script>