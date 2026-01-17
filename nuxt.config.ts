// nuxt.config.ts
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@vueuse/motion/nuxt'
  ],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Tu Nombre | Desarrollador de Sistemas',
      meta: [
        { name: 'description', content: 'Portafolio profesional de desarrollo de sistemas y arquitectura de software.' }
      ],
      link: [
        // Opcional: Fuente 'Inter' o 'Roboto Mono' para toque tech
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&family=JetBrains+Mono:wght@400;700&display=swap' }
      ]
    }
  }
})