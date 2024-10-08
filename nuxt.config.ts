// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  modules: ["@nuxtjs/tailwindcss"],

  css: [
    '@/assets/css/main.css',
  ],

  compatibilityDate: "2024-08-03",
})