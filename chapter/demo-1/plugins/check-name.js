export default defineNuxtPlugin(() => {
    addRouteMiddleware((to, from)=> {
        if(to.path === '/database'){
            return abortNavigation('没有这个页面噢')
        }
    })
    addRouteMiddleware('bbb',(to, from)=> {
        const name = to.params.name
        if(name === 'bbb'){
            return abortNavigation('不能访问bbb用户')
        }
    })
    addRouteMiddleware((to, from)=> {
        console.log('我是全局middleware，在plugins中声明了');
    }, { global: true })
})