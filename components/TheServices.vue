<script setup lang="ts">
import { useLanguage } from '~/composables/useLanguage'
import { useContactModal } from '~/composables/useContactModal'

const { profile, t } = useLanguage()
const { openContactModal } = useContactModal()

const getServiceIcon = (title: string) => {
  const norm = title.toLowerCase()
  if (norm.includes('arquitectura') || norm.includes('architecture')) return 'mdi:sitemap-outline'
  if (norm.includes('chatbots') || norm.includes('ia') || norm.includes('ai')) return 'mdi:robot-excited-outline'
  if (norm.includes('backend')) return 'mdi:server-network'
  if (norm.includes('frontend')) return 'mdi:monitor-dashboard'
  if (norm.includes('full stack')) return 'mdi:layers-outline'
  if (norm.includes('devops') || norm.includes('cloud')) return 'mdi:cloud-sync-outline'
  if (norm.includes('mentoría') || norm.includes('liderazgo') || norm.includes('mentoring') || norm.includes('leadership')) return 'mdi:account-group-outline'
  return 'mdi:code-braces'
}

const getServiceTags = (footerText: string) => {
  if (!footerText) return []
  return footerText.split('·').map(t => t.trim()).filter(Boolean)
}
</script>

<template>
  <section id="servicios" class="py-28 px-6 bg-transparent relative overflow-hidden">
    <!-- Ambient background glow -->
    <div
      class="absolute inset-0 opacity-5 pointer-events-none"
      style="background-image: radial-gradient(#ef4444 1px, transparent 1px); background-size: 60px 60px;"
    />
    <div class="absolute -top-40 right-1/4 w-[500px] h-[500px] bg-tech-red/10 rounded-full blur-3xl pointer-events-none" />

    <div class="max-w-6xl mx-auto relative z-10">
      <!-- Header -->
      <div class="mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 mb-3 text-xs font-mono text-tech-red border border-tech-red/30 rounded-full bg-tech-red/5">
          <Icon name="mdi:briefcase-outline" size="16" />
          <span>{{ t.services.tag }}</span>
        </div>
        <h3 class="text-3xl md:text-4xl font-bold flex items-center gap-4 text-white">
          <span class="w-2 h-10 bg-tech-red block"></span>
          {{ t.services.title }}
        </h3>
        <p class="text-tech-gray mt-4 max-w-2xl text-sm sm:text-base">
          {{ t.services.subtitle }}
        </p>
      </div>

      <!-- Services Cards Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <article
          v-for="(service, index) in profile.services"
          :key="index"
          v-motion-slide-visible-once-bottom
          :delay="index * 70"
          class="group relative rounded-2xl border border-white/10 bg-tech-surface/75 hover:bg-tech-surface backdrop-blur-md p-7 sm:p-8 transition-all duration-300 hover:border-tech-red/50 hover:shadow-[0_0_35px_rgba(239,68,68,0.2)] hover:-translate-y-1.5 flex flex-col justify-between"
        >
          <!-- Gradient accent on hover -->
          <div
            class="absolute inset-0 rounded-2xl bg-gradient-to-br from-tech-red/15 via-transparent to-tech-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          />

          <div class="relative z-10 flex flex-col h-full">
            <!-- Icon & Number -->
            <div class="flex items-center justify-between mb-6">
              <div class="w-12 h-12 rounded-2xl bg-tech-red/10 border border-tech-red/30 flex items-center justify-center text-tech-red group-hover:scale-110 group-hover:bg-tech-red/20 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.3)] transition-all">
                <Icon :name="getServiceIcon(service.title)" size="26" />
              </div>
              <span class="text-xs font-mono text-zinc-600 group-hover:text-tech-red/80 transition-colors">
                0{{ index + 1 }}
              </span>
            </div>

            <!-- Title -->
            <h4 class="text-xl font-bold text-white mb-3 group-hover:text-tech-red transition-colors leading-snug">
              {{ service.title }}
            </h4>

            <!-- Description -->
            <p class="text-gray-300 text-sm leading-relaxed mb-6 flex-grow font-light">
              {{ service.description }}
            </p>

            <!-- Tags list -->
            <div class="flex flex-wrap gap-1.5 mb-6">
              <span
                v-for="(tag, tIdx) in getServiceTags(service.footer)"
                :key="tIdx"
                class="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/5 text-gray-300 group-hover:border-tech-red/30 group-hover:text-white transition-all"
              >
                {{ tag }}
              </span>
            </div>

            <!-- Action footer: Contact Button -->
            <div class="pt-4 border-t border-white/10 flex items-center justify-between">
              <span class="text-xs font-mono text-tech-gray">
                {{ t.services.productionReady }}
              </span>
              <button
                type="button"
                class="text-xs font-mono text-tech-red hover:text-white flex items-center gap-1 font-medium transition-colors cursor-pointer group-hover:translate-x-1 transition-transform"
                @click="openContactModal"
              >
                <span>{{ t.services.quote }}</span>
                <Icon name="mdi:arrow-right" size="14" />
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>