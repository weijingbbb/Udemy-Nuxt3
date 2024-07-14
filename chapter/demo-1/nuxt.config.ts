// https://nuxt.com/docs/api/configuration/nuxt-config
// nuxt.config.ts里的配置就是对Nuxt应用的扩展
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/scoped.css', 'animate.css'],
  modules: ['@nuxtjs/tailwindcss']
})
