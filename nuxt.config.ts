// nuxt.config.ts
export default defineNuxtConfig({
    devtools: { enabled: false },

    devServer: {
        port:3070
    },
    vite: {
        server: {
            allowedHosts: true
        },

    },

    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/icon',
        '@vueuse/motion/nuxt'
    ],

    icon: {
        provider: 'iconify',
        mode: 'auto'
    },

    css: ['~/assets/css/main.css'],

    routeRules: {
        '/home': { redirect: { to: '/', statusCode: 301 } },
        '/docs/**': { redirect: { to: '/CV_Jose_Miguel_Rosas_Jimenez.pdf', statusCode: 301 } },
        '/email_success': { redirect: { to: '/', statusCode: 301 } },
        '/email_error': { redirect: { to: '/', statusCode: 301 } }
    },

    app: {
        head: {
            title: 'MikeRosasDev · Tech Lead & Software Architect',
            titleTemplate: (title) =>
                title && title !== 'MikeRosasDev · Tech Lead & Software Architect'
                    ? `${title} · Jose Miguel Rosas`
                    : 'MikeRosasDev · Tech Lead & Software Architect',

            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },

                {
                    name: 'description',
                    content:
                        'Portafolio profesional de Miguel Rosas, Tech Lead y Software Architect con más de 5 años de experiencia en desarrollo Full Stack, arquitecturas escalables y AWS.'
                },
                {
                    name: 'keywords',
                    content:
                        'Jose Miguel Rosas, Tech Lead, Software Architect, Full Stack Developer, Node.js, NestJS, Nuxt, AWS'
                },
                { name: 'author', content: 'José Miguel Rosas Jiménez' },
                { name: 'robots', content: 'index, follow' },
                { name: 'theme-color', content: '#050505' },

                { property: 'og:title', content: 'Miguel Rosas · Tech Lead & Software Architect' },
                {
                    property: 'og:description',
                    content:
                        'Arquitectura, desarrollo y escalamiento de software listo para producción.'
                },
                { property: 'og:type', content: 'website' },
                { property: 'og:url', content: 'https://mikerosasdev.com' },
                {
                    property: 'og:image',
                    content: 'https://mikerosasdev.com/images/logo_mike.png'
                },

                { name: 'twitter:card', content: 'summary_large_image' }
            ],

            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/images/logo_mike.ico' },
                {
                    rel: 'stylesheet',
                    href:
                        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=JetBrains+Mono:wght@400;700&display=swap'
                }
            ]
        }
    }
})