
export default defineNuxtRouteMiddleware((to, from) => {
    console.log('全局middleware------记录了一次路由导航日志：从:', from.path, '到：',to.path,);
})