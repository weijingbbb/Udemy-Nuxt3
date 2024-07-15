// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  // 运行时配置
  runtimeConfig: {
    api: process.env.API_KEY,
    // 服务端才能访问的配置
    selectKey: 'abc',
    // 公开的配置，客户端就可以访问了
    public: {
      name: 'bbb',
      address: '1/2/3'
    }
  }
})
