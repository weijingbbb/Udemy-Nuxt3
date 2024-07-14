
export default defineNuxtRouteMiddleware((to, from) => {
    const id = to.params.id
    // 路由重定向
    if(id === '1'){
        return navigateTo('/')
    }
    // 中止路由
    if(id === '2'){
        return abortNavigation()
    }
    // 中止路由,附带信息
    if(id === '3'){
        return abortNavigation('没有id为3的信息')
    }
    console.log('执行了fn路由中间件');
})