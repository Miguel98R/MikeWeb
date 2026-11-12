<script setup lang="ts">
import { useLanguage } from '~/composables/useLanguage'
import { useContactModal } from '~/composables/useContactModal'

const { t } = useLanguage()
const { openContactModal } = useContactModal()

const getStepIcon = (num: string) => {
  if (num === '01') return 'mdi:compass-outline'
  if (num === '02') return 'mdi:code-braces'
  if (num === '03') return 'mdi:shield-check-outline'
  return 'mdi:cloud-upload-outline'
}
</script>

<template>
  <section id="metodologia" class="py-24 px-6 bg-transparent relative overflow-hidden scroll-mt-20">
    <!-- Ambient Background Glow -->
    <div
      class="absolute inset-0 opacity-5 pointer-events-none"
      style="background-image: radial-gradient(#8b5cf6 1px, transparent 1px); background-size: 55px 55px;"
    />
    <div class="absolute bottom-10 left-10 w-[450px] h-[350px] bg-tech-purple/10 rounded-full blur-3xl pointer-events-none" />

    <div class="max-w-6xl mx-auto relative z-10">

      <!-- Header -->
      <div class="mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 mb-3 text-xs font-mono text-tech-purple border border-tech-purple/30 rounded-full bg-tech-purple/5">
          <Icon name="mdi:timeline-check-outline" size="16" />
          <span>{{ t.methodology.tag }}</span>
        </div>
        <h3 class="text-3xl md:text-4xl font-bold flex items-center gap-4 text-white">
          <span class="w-2 h-10 bg-tech-purple block"></span>
          {{ t.methodology.title }}
        </h3>
        <p class="text-tech-gray mt-4 max-w-2xl text-sm sm:text-base font-light">
          {{ t.methodology.subtitle }}
        </p>
      </div>

      <!-- 4-Step Process Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        <div
          v-for="(step, index) in t.methodology.steps"
          :key="step.num"
          v-motion-slide-visible-once-bottom
          :delay="index * 80"
          class="group relative rounded-2xl border border-white/10 bg-tech-surface/80 hover:bg-[#12121a] backdrop-blur-md p-7 transition-all duration-300 hover:border-tech-purple/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.18)] hover:-translate-y-1.5 flex flex-col justify-between"
        >
          <!-- Hover top highlight -->
          <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-tech-purple to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl" />

          <div>
            <!-- Step Number & Icon -->
            <div class="flex items-center justify-between mb-6">
              <span class="text-3xl font-mono font-bold text-zinc-600 group-hover:text-tech-purple transition-colors">
                {{ step.num }}
              </span>
              <div class="w-10 h-10 rounded-xl bg-tech-purple/10 border border-tech-purple/20 flex items-center justify-center text-tech-purple group-hover:scale-110 transition-transform">
                <Icon :name="getStepIcon(step.num)" size="22" />
              </div>
            </div>

            <!-- Title -->
            <h4 class="text-lg font-bold text-white mb-3 group-hover:text-tech-purple transition-colors">
              {{ step.title }}
            </h4>

            <!-- Description -->
            <p class="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">
              {{ step.desc }}
            </p>
          </div>

          <!-- Bottom Micro Tag -->
          <div class="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-500">
            <span>Fase 0{{ index + 1 }}</span>
            <Icon name="mdi:arrow-right" size="14" class="opacity-0 group-hover:opacity-100 text-tech-purple transition-all -translate-x-1 group-hover:translate-x-0" />
          </div>
        </div>
      </div>

      <!-- Bottom Direct Contact Prompt -->
      <div class="mt-14 p-6 sm:p-8 rounded-2xl border border-white/10 bg-gradient-to-r from-tech-purple/10 via-black to-tech-red/10 flex flex-col sm:flex-row items-center justify-between gap-6 backdrop-blur-md">
        <div class="flex items-center gap-4 text-center sm:text-left">
          <div class="w-12 h-12 rounded-2xl bg-tech-purple/20 border border-tech-purple/40 flex items-center justify-center text-tech-purple shrink-0 hidden sm:flex">
            <Icon name="mdi:headset" size="24" />
          </div>
          <div>
            <h4 class="text-base sm:text-lg font-bold text-white">¿Tienes un proyecto con requerimientos específicos?</h4>
            <p class="text-xs sm:text-sm text-zinc-400 font-light">Evaluamos tu arquitectura actual o diseñamos tu solución desde cero sin costo de diagnóstico inicial.</p>
          </div>
        </div>
        <button
          type="button"
          class="px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-zinc-200 transition-all font-sans text-xs sm:text-sm shrink-0 cursor-pointer shadow-lg hover:scale-105"
          @click="openContactModal"
        >
          Iniciar Evaluación Técnica
        </button>
      </div>

    </div>
  </section>
</template>

