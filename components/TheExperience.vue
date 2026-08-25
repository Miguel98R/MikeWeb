<script setup>
import profile from '~/data/profile.json'

const formatDate = (date) => {
  if (date === 'Present') return 'Actualidad'
  const [year, month] = date.split('-')
  return `${month}/${year}`
}

const isCurrentRole = (endDate) => endDate === 'Present'
</script>

<template>
  <section id="experiencia" class="py-28 px-6 bg-transparent relative overflow-hidden">
    <!-- Ambient glows -->
    <div class="absolute top-1/4 -left-32 w-96 h-96 bg-tech-red/10 rounded-full blur-3xl pointer-events-none" />
    <div class="absolute bottom-1/4 -right-32 w-96 h-96 bg-tech-purple/10 rounded-full blur-3xl pointer-events-none" />

    <div class="max-w-5xl mx-auto relative z-10">
      <!-- Header -->
      <div class="mb-20">
        <div class="inline-flex items-center gap-2 px-3 py-1 mb-3 text-xs font-mono text-tech-red border border-tech-red/30 rounded-full bg-tech-red/5">
          <Icon name="mdi:timeline-text-outline" size="16" />
          <span>CAREER & TRACK_RECORD</span>
        </div>
        <h3 class="text-3xl md:text-4xl font-bold text-white flex items-center gap-4">
          <span class="w-2 h-10 bg-tech-red block"></span>
          Experiencia Profesional
        </h3>
        <p class="text-tech-gray mt-4 max-w-2xl text-sm sm:text-base">
          Línea del tiempo y trayectoria enfocada en liderazgo técnico, arquitectura escalable y desarrollo de sistemas en producción.
        </p>
      </div>

      <!-- Timeline with Cards Layout -->
      <div class="relative">
        <!-- Central Spine / Line (Left on mobile, Center on desktop) -->
        <div
          class="absolute top-4 bottom-8 left-5 md:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-tech-red via-tech-purple/60 to-transparent z-0"
        />

        <div class="space-y-12 sm:space-y-16">
          <div
            v-for="(job, index) in profile.experience"
            :key="index"
            v-motion-slide-visible-once-bottom
            :delay="index * 90"
            class="relative flex flex-col md:flex-row items-start md:items-center w-full"
            :class="index % 2 === 0 ? 'md:flex-row-reverse' : ''"
          >
            <!-- Timeline Node / Point -->
            <div
              class="absolute left-5 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-[#0a0a0f] border-2 transition-transform duration-300 group-hover:scale-110 shadow-lg"
              :class="isCurrentRole(job.endDate)
                ? 'border-tech-red shadow-[0_0_20px_rgba(239,68,68,0.4)]'
                : 'border-white/20'"
            >
              <span
                v-if="isCurrentRole(job.endDate)"
                class="absolute inset-0 rounded-full bg-tech-red/20 animate-ping pointer-events-none"
              />
              <Icon
                :name="isCurrentRole(job.endDate) ? 'mdi:rocket-launch' : 'mdi:briefcase-outline'"
                size="18"
                :class="isCurrentRole(job.endDate) ? 'text-tech-red' : 'text-gray-300'"
              />
            </div>

            <!-- Card Container (Left on desktop for odd, Right for even, always right on mobile) -->
            <div
              class="w-full pl-14 sm:pl-16 md:pl-0 md:w-[calc(50%-2.5rem)]"
            >
              <article
                class="group relative rounded-2xl border border-white/10 bg-tech-surface/75 hover:bg-tech-surface backdrop-blur-md p-6 sm:p-7 transition-all duration-300 hover:border-tech-red/50 hover:shadow-[0_0_35px_rgba(239,68,68,0.2)] hover:-translate-y-1 flex flex-col justify-between"
              >
                <!-- Subtle gradient glow on hover -->
                <div
                  class="absolute inset-0 rounded-2xl bg-gradient-to-br from-tech-red/10 via-transparent to-tech-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                />

                <div class="relative z-10">
                  <!-- Header: Company & Date badge -->
                  <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div class="flex items-center gap-2 text-tech-red font-mono text-sm font-semibold tracking-wide">
                      <Icon name="mdi:domain" size="18" class="shrink-0" />
                      <span>{{ job.company }}</span>
                    </div>

                    <!-- Date Pill -->
                    <span
                      class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono border transition-colors"
                      :class="isCurrentRole(job.endDate)
                        ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 font-medium'
                        : 'bg-white/5 border-white/10 text-tech-gray'"
                    >
                      <span v-if="isCurrentRole(job.endDate)" class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      {{ formatDate(job.startDate) }} — {{ formatDate(job.endDate) }}
                    </span>
                  </div>

                  <!-- Role Title -->
                  <h4 class="text-xl sm:text-2xl font-bold text-white group-hover:text-tech-red transition-colors mb-3">
                    {{ job.role }}
                  </h4>

                  <!-- Description -->
                  <p class="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
                    {{ job.description }}
                  </p>
                </div>

                <!-- Footer of Card -->
                <div class="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-tech-gray">
                  <span class="flex items-center gap-1.5 text-tech-gray group-hover:text-gray-200 transition-colors">
                    <Icon name="mdi:check-decagram" size="16" class="text-tech-red" />
                    Entorno Productivo
                  </span>
                  <span class="text-[11px] font-mono text-tech-red/80">
                    Etapa {{ profile.experience.length - index }}
                  </span>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>