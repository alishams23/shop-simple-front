// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    '~/assets/css/WebFonts/css/fontiran.css',
    '~/assets/css/WebFonts/css/style.css',
    '~/assets/css/style.css',
    '~/assets/css/custom.css',
],
devServer: {
  port: 3002,
},
modules: [
  'vue3-carousel-nuxt'
]
})
