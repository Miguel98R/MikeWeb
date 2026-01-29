<script setup>
import profile from '~/data/profile.json'

const formatDate = (date) => {
  if (date === 'Present') return 'Actualidad'
  const [year, month] = date.split('-')
  return `${month}/${year}`
}
</script>

<template>
  <section id="experiencia" class="py-28 px-6 bg-black relative">
    <div class="max-w-5xl mx-auto">

      <!-- Header -->
      <div class="mb-16">
        <h3 class="text-3xl md:text-4xl font-bold text-white flex items-center gap-4">
          <span class="w-2 h-10 bg-tech-red block"></span>
          Experiencia Profesional
        </h3>
        <p class="text-tech-gray mt-4 max-w-2xl">
          Trayectoria enfocada en liderazgo técnico, arquitectura y desarrollo de sistemas complejos.
        </p>
      </div>

      <!-- Timeline -->
      <div class="relative border-l border-white/10 pl-8 space-y-12">
        <article
            v-for="(job, index) in profile.experience"
            :key="index"
            v-motion-slide-visible-once-left
            :delay="index * 120"
            class="relative"
        >
          <!-- Dot -->
          <span class="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-tech-red shadow-[0_0_10px_#ef4444]" />

          <!-- Card -->
          <div class="border border-white/10 bg-tech-surface/60 rounded-lg p-6 hover:border-tech-red/40 transition-all">
            <div class="flex flex-wrap justify-between items-center mb-2">
              <h4 class="text-xl font-bold text-white">
                {{ job.role }}
              </h4>
              <span class="text-xs font-mono text-tech-gray">
                {{ formatDate(job.startDate) }} — {{ formatDate(job.endDate) }}
              </span>
            </div>

            <p class="text-sm text-tech-purple mb-3">
              {{ job.company }}
            </p>

            <p class="text-tech-gray text-sm leading-relaxed">
              {{ job.description }}
            </p>
          </div>
        </article>
      </div>

    </div>
  </section>
</template>