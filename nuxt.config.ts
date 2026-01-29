// nuxt.config.ts
export default defineNuxtConfig({
    devtools: { enabled: false },

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

    app: {
        head: {
            title: 'Jose Miguel Rosas | Tech Lead & Software Architect',
            titleTemplate:  'Jose Miguel Rosas · Tech Lead & Software Architect',

            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },

                // SEO base
                {
                    name: 'description',
                    content:
                        'Portafolio profesional de Miguel Rosas, Tech Lead y Software Architect con más de 5 años de experiencia en desarrollo Full Stack, arquitecturas escalables, AWS y aplicaciones web y móviles.'
                },
                {
                    name: 'keywords',
                    content:
                        'Jose Miguel Rosas, Tech Lead, Software Architect, Full Stack Developer, Node.js, NestJS, Nuxt, Vue, AWS, Docker, arquitectura de software'
                },
                { name: 'author', content: 'José Miguel Rosas Jiménez' },
                { name: 'robots', content: 'index, follow' },
                { name: 'theme-color', content: '#050505' },

                // Open Graph (LinkedIn / WhatsApp)
                {
                    property: 'og:title',
                    content: 'Miguel Rosas · Tech Lead & Software Architect'
                },
                {
                    property: 'og:description',
                    content:
                        'Arquitectura, desarrollo y escalamiento de software listo para producción. Backend, frontend, cloud y liderazgo técnico.'
                },
                { property: 'og:type', content: 'website' },
                { property: 'og:url', content: 'https://mikerosasdev.com' },
                {
                    property: 'og:image',
                    content: 'https://mikerosasdev.com/images/logo_mike.png'
                },

                // Twitter / X
                { name: 'twitter:card', content: 'summary_large_image' },
                {
                    name: 'twitter:title',
                    content: 'Miguel Rosas · Tech Lead & Software Architect'
                },
                {
                    name: 'twitter:description',
                    content:
                        'Portafolio profesional de Miguel Rosas. Desarrollo Full Stack, arquitectura de software y soluciones cloud en AWS.'
                },
                {
                    name: 'twitter:image',
                    content: 'https://mikerosasdev.com/images/logo_mike.png'
                }
            ],

            link: [
                { rel: 'canonical', href: 'https://mikerosasdev.com' },
                { rel: 'icon', type: 'image/png', href: 'images/logo_mike.ico' },
                {
                    rel: 'stylesheet',
                    href:
                        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=JetBrains+Mono:wght@400;700&display=swap'
                }
            ]
        }
    }
})