<template>
  <main class="bg-transparent text-white selection:bg-tech-purple selection:text-white">
    <!-- Corporate Company Hero -->
    <TheCompanyHero />

    <!-- Services & Solutions -->
    <TheServices />

    <!-- Methodology & Workflow -->
    <TheMethodology />

    <!-- Enterprise Clients & Case Studies -->
    <TheCollaborations />

    <!-- Production-Grade Tech Stack -->
    <TheCompanyStack />

    <!-- Why Us / Value Proposition -->
    <TheValueProps />

    <!-- Global Footer -->
    <TheFooter />
  </main>
</template>

<script setup lang="ts">
useHead({
  title: 'MikeRosasDev Studio · Ingeniería de Software, Agentes de IA & Arquitectura Cloud',
  meta: [
    {
      name: 'description',
      content: 'Estudio de arquitectura de software, desarrollo web y móvil, agentes de IA e infraestructura cloud en AWS para empresas y startups.'
    }
  ],
  link: [
    { rel: 'canonical', href: 'https://mikerosasdev.com' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Organization',
            '@id': 'https://mikerosasdev.com/#organization',
            'url': 'https://mikerosasdev.com',
            'name': 'MikeRosasDev Studio',
            'description': 'Estudio de arquitectura de software, soluciones en la nube y agentes de inteligencia artificial para empresas.',
            'founder': {
              '@type': 'Person',
              'name': 'José Miguel Rosas Jiménez',
              'jobTitle': 'CEO & Software Architect'
            },
            'sameAs': [
              'https://github.com/Miguel98R',
              'https://linkedin.com/in/josemiguelrosas'
            ]
          },
          {
            '@type': 'WebSite',
            '@id': 'https://mikerosasdev.com/#website',
            'url': 'https://mikerosasdev.com',
            'name': 'MikeRosasDev Studio',
            'publisher': {
              '@id': 'https://mikerosasdev.com/#organization'
            },
            'inLanguage': ['es', 'en']
          }
        ]
      })
    }
  ]
})
</script>
