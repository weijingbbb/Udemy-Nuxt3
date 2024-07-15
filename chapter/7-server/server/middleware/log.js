export default defineEventHandler((event) => {
    console.log('api-log:',getRequestURL(event));
})