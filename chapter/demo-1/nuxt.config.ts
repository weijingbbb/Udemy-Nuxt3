// https://nuxt.com/docs/api/configuration/nuxt-config
// nuxt.config.ts里的配置就是对Nuxt应用的扩展
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/scoped.css', 'animate.css'],
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=2',
      title: '章节3的demo合集',
      meta: [
        {
          name: 'description',
          content: '有路由、校验器、layout这些知识呀'
        }
      ],
      link: [
        {
          rel: 'shortlink',
          href: '~/assets/base.css'
        }
      ]
    },
    // 布局的过渡效果
    layoutTransition: {
      name: 'layout',
      mode: 'out-in'
    },
    // 单页面的过渡效果
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  }
})
