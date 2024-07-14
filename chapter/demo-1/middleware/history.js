
export default defineNuxtRouteMiddleware((to, from) => {
    console.log('命名middleware------目标页面:', to.path, ', 来源页面:', from.path);
})