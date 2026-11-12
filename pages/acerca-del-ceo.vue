<template>
  <main class="bg-transparent text-white selection:bg-tech-purple selection:text-white">
    <TheCeoHero />

    <TheExperience />
    <TheSkills />
    <Certifications />
    <RepoList />

    <TheFooter />
  </main>
</template>

<script setup lang="ts">
useHead({
  title: 'Acerca del CEO · José Miguel Rosas Jiménez | MikeRosasDev',
  meta: [
    {
      name: 'description',
      content: 'Perfil profesional, trayectoria y certificaciones de José Miguel Rosas Jiménez, Tech Lead, Software Architect y CEO de MikeRosasDev.'
    }
  ],
  link: [
    { rel: 'canonical', href: 'https://mikerosasdev.com/acerca-del-ceo' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        '@id': 'https://mikerosasdev.com/#person',
        'name': 'José Miguel Rosas Jiménez',
        'alternateName': 'Miguel Rosas',
        'url': 'https://mikerosasdev.com/acerca-del-ceo',
        'jobTitle': 'Chief Executive Officer & Software Architect',
        'worksFor': {
          '@type': 'Organization',
          'name': 'MikeRosasDev Studio'
        },
        'alumniOf': {
          '@type': 'EducationalOrganization',
          'name': 'Centro Universitario Hidalguense A.C.'
        },
        'knowsAbout': [
          'Software Architecture',
          'Cloud Computing',
          'Artificial Intelligence',
          'Full Stack Development',
          'AWS',
          'DevOps'
        ]
      })
    }
  ]
})
</script>

