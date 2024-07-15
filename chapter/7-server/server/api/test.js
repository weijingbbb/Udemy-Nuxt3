export default defineEventHandler(async(event) => {
    
    const config = await useRuntimeConfig(event)
    const { selectKey, api } = config
    console.log('selectKey---', selectKey, 'apiKey-----',api );
})