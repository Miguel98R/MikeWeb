<script setup>
import profile from '~/data/profile.json'

const skillGroups = [
  { key: 'backend', title: 'Backend' },
  { key: 'frontend', title: 'Frontend' },
  { key: 'mobile', title: 'Mobile' },
  { key: 'databases', title: 'Databases' },
  { key: 'devops_cloud', title: 'DevOps & Cloud' },
  { key: 'tools', title: 'Tools' },
  { key: 'methodologies', title: 'Methodologies' } ,
  { key: 'ai_technologies', title: 'Tecnologías de IA y Construcción de ChatBots Inteligentes' }
]
</script>

<template>
  <section id="skills" class="py-28 px-6 bg-tech-black relative">
    <div class="max-w-6xl mx-auto">

      <!-- Header -->
      <div class="mb-16">
        <h3 class="text-3xl md:text-4xl font-bold text-white flex items-center gap-4">
          <span class="w-2 h-10 bg-tech-purple block"></span>
          Skills Técnicos
        </h3>
        <p class="text-tech-gray mt-4 max-w-2xl">
          Stack sólido enfocado en arquitectura, rendimiento y software listo para producción.
        </p>
      </div>

      <!-- Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
            v-for="(group, index) in skillGroups"
            :key="group.key"
            v-motion-slide-visible-once-bottom
            :delay="index * 100"
            class="border border-white/10 bg-tech-surface/60 rounded-lg p-6 hover:border-tech-purple/40 transition-all"
        >
          <h4 class="text-lg font-bold text-white mb-4">
            {{ group.title }}
          </h4>

          <ul class="flex flex-wrap gap-2">
            <li
                v-for="(skill, i) in profile.skills[group.key]"
                :key="i"
                class="px-3 py-1 text-xs font-mono rounded border border-white/10 text-tech-gray hover:text-white hover:border-tech-purple transition-colors"
            >
              {{ skill }}
            </li>
          </ul>
        </div>
      </div>

    </div>
  </section>
</template>