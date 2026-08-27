<script setup lang="ts">
import { computed } from 'vue'
import { useLanguage } from '~/composables/useLanguage'

const { profile, t } = useLanguage()

const certifications = computed(() => profile.value.certifications || [])

const getIssuerIcon = (issuer: string) => {
  const norm = issuer.toLowerCase()
  if (norm.includes('mongo')) return 'simple-icons:mongodb'
  if (norm.includes('amazon') || norm.includes('aws')) return 'simple-icons:amazonaws'
  if (norm.includes('google')) return 'mdi:google'
  if (norm.includes('udemy')) return 'simple-icons:udemy'
  if (norm.includes('freecodecamp')) return 'simple-icons:freecodecamp'
  if (norm.includes('cisco')) return 'simple-icons:cisco'
  return 'mdi:certificate-outline'
}

const getIssuerColor = (issuer: string) => {
  const norm = issuer.toLowerCase()
  if (norm.includes('mongo')) return 'text-emerald-400'
  if (norm.includes('amazon') || norm.includes('aws')) return 'text-amber-400'
  if (norm.includes('google')) return 'text-blue-400'
  if (norm.includes('udemy')) return 'text-purple-400'
  if (norm.includes('freecodecamp')) return 'text-teal-400'
  if (norm.includes('cisco')) return 'text-cyan-400'
  return 'text-tech-purple'
}
</script>

<template>
  <section id="certificaciones" class="py-28 px-6 bg-transparent relative overflow-hidden">
    <!-- Ambient glow -->
    <div class="absolute bottom-1/4 -right-32 w-96 h-96 bg-tech-purple/10 rounded-full blur-3xl pointer-events-none" />

    <div class="max-w-6xl mx-auto relative z-10">
      <!-- Header -->
      <div class="mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 mb-3 text-xs font-mono text-tech-red border border-tech-red/30 rounded-full bg-tech-red/5">
          <Icon name="mdi:certificate-outline" size="16" />
          <span>{{ t.certifications.tag }}</span>
        </div>
        <h3 class="text-3xl md:text-4xl font-bold flex items-center gap-4 text-white">
          <span class="w-2 h-10 bg-tech-red block"></span>
          {{ t.certifications.title }}
        </h3>
        <p class="text-tech-gray mt-4 max-w-2xl text-sm sm:text-base">
          {{ t.certifications.subtitle }}
        </p>
      </div>

      <!-- Certifications Cards Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <a
          v-for="(cert, index) in certifications"
          :key="index"
          :href="cert.url"
          target="_blank"
          rel="noopener noreferrer"
          v-motion-slide-visible-once-bottom
          :delay="index * 60"
          class="group relative rounded-2xl border border-white/10 bg-tech-surface/70 hover:bg-tech-surface backdrop-blur-md p-6 transition-all duration-300 hover:border-tech-purple/50 hover:shadow-[0_0_35px_rgba(139,92,246,0.2)] hover:-translate-y-1.5 flex flex-col justify-between"
        >
          <!-- Hover subtle gradient -->
          <div
            class="absolute inset-0 rounded-2xl bg-gradient-to-br from-tech-purple/10 via-transparent to-tech-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          />

          <div class="relative z-10">
            <!-- Top Row: Issuer Badge & Date -->
            <div class="flex items-center justify-between gap-2 mb-4">
              <div class="flex items-center gap-2">
                <div class="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform" :class="getIssuerColor(cert.issuer)">
                  <Icon :name="getIssuerIcon(cert.issuer)" size="20" />
                </div>
                <span class="text-xs font-mono text-gray-300 font-medium">
                  {{ cert.issuer }}
                </span>
              </div>

              <span class="text-[11px] font-mono text-tech-gray border border-white/10 bg-white/[0.03] px-2.5 py-0.5 rounded-full">
                {{ cert.date }}
              </span>
            </div>

            <!-- Certification Title -->
            <h4 class="text-base sm:text-lg font-bold text-white group-hover:text-tech-purple transition-colors mb-3 leading-snug">
              {{ cert.title }}
            </h4>

            <!-- Skills Chips -->
            <div v-if="cert.skills && cert.skills.length" class="flex flex-wrap gap-1.5 mb-5">
              <span
                v-for="(skill, sIdx) in cert.skills"
                :key="sIdx"
                class="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/5 text-gray-300 group-hover:text-white transition-colors"
              >
                {{ skill }}
              </span>
            </div>
          </div>

          <!-- Bottom: Verify Link -->
          <div class="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-tech-purple group-hover:text-white transition-colors">
            <span>{{ t.certifications.viewCredential }}</span>
            <Icon name="mdi:arrow-top-right" size="14" class="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </a>
      </div>

    </div>
  </section>
</template>