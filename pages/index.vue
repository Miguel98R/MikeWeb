<template>
  <main class="bg-transparent text-white selection:bg-tech-purple selection:text-white">
    <TheHero />

    <TheServices />
    <TheSkills />
    <TheExperience />
    <RepoList />
    <Certifications />
    <TheCollaborations />

    <TheFooter />
  </main>
</template>

<script setup lang="ts">
useHead({
  title: 'MikeRosasDev · Tech Lead & Software Architect',
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
            '@type': 'WebSite',
            '@id': 'https://mikerosasdev.com/#website',
            'url': 'https://mikerosasdev.com',
            'name': 'MikeRosasDev',
            'description': 'Portafolio profesional de Miguel Rosas, Tech Lead y Software Architect.',
            'inLanguage': ['es', 'en']
          },
          {
            '@type': 'Person',
            '@id': 'https://mikerosasdev.com/#person',
            'name': 'José Miguel Rosas Jiménez',
            'alternateName': 'Miguel Rosas',
            'url': 'https://mikerosasdev.com',
            'jobTitle': 'Tech Lead & Software Architect',
            'knowsAbout': [
              'Software Architecture',
              'Full Stack Development',
              'DevOps',
              'AWS',
              'Node.js',
              'Nuxt',
              'NestJS',
              'Docker',
              'Kubernetes'
            ],
            'sameAs': [
              'https://github.com/Miguel98R',
              'https://linkedin.com/in/mikerosasdev'
            ]
          }
        ]
      })
    }
  ]
})
</script>