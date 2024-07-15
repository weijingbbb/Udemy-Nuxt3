export default defineEventHandler(
    async (event) =>{
        // 可以重定向到其他页面
        await sendRedirect(event, '/posts')
    }
)