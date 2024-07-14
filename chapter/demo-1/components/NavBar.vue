<template>
    <div>
        <nav class="navbar">
            <li class="nav-item">
                <NuxtLink to="/">首页</NuxtLink>
            </li>
            <li class="nav-item">
                <NuxtLink to="/about">about</NuxtLink>
            </li>
            <li class="nav-item">
                <NuxtLink to="/service">services</NuxtLink>
            </li>
            <li class="nav-item">
                <NuxtLink to="/pricing">pricing</NuxtLink>
            </li>
        </nav>
    </div>
</template>

<style lang="css" scoped>
.navbar {
    display: flex;
    align-items: center;
    margin: 0 20px;
    padding: 8px 10px;
    background-color: bisque;
}
.nav-item {
    margin: 0 10px;
    list-style: none;
}
</style>