<script setup lang="ts">
import { useLanguage } from '~/composables/useLanguage'

const { t } = useLanguage()
</script>

<template>
  <section class="py-24 px-6 bg-transparent relative overflow-hidden">
    <div
      class="absolute inset-0 opacity-5 pointer-events-none"
      style="background-image: radial-gradient(#ef4444 1px, transparent 1px); background-size: 50px 50px;"
    />
    <div class="absolute top-1/2 right-10 w-[400px] h-[400px] bg-tech-red/10 rounded-full blur-3xl pointer-events-none" />

    <div class="max-w-6xl mx-auto relative z-10">

      <!-- Header -->
      <div class="mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 mb-3 text-xs font-mono text-tech-red border border-tech-red/30 rounded-full bg-tech-red/5">
          <Icon name="mdi:star-four-points-outline" size="16" />
          <span>{{ t.valueProps.tag }}</span>
        </div>
        <h3 class="text-3xl md:text-4xl font-bold flex items-center gap-4 text-white">
          <span class="w-2 h-10 bg-tech-red block"></span>
          {{ t.valueProps.title }}
        </h3>
        <p class="text-tech-gray mt-4 max-w-2xl text-sm sm:text-base font-light">
          {{ t.valueProps.subtitle }}
        </p>
      </div>

      <!-- Grid -->
      <div class="grid md:grid-cols-2 gap-6 sm:gap-8">
        <div
          v-for="(item, index) in t.valueProps.items"
          :key="index"
          v-motion-slide-visible-once-bottom
          :delay="index * 70"
          class="group rounded-2xl border border-white/10 bg-tech-surface/80 hover:bg-[#12121a] backdrop-blur-md p-7 sm:p-8 transition-all duration-300 hover:border-tech-red/40 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)] hover:-translate-y-1 relative"
        >
          <div class="flex items-start gap-5">
            <div class="w-12 h-12 rounded-2xl bg-tech-red/10 border border-tech-red/25 flex items-center justify-center text-tech-red group-hover:scale-110 group-hover:bg-tech-red/20 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.3)] transition-all shrink-0">
              <Icon :name="item.icon" size="24" />
            </div>
            <div>
              <h4 class="text-lg sm:text-xl font-bold text-white mb-2.5 group-hover:text-tech-red transition-colors">
                {{ item.title }}
              </h4>
              <p class="text-zinc-400 text-sm leading-relaxed font-light">
                {{ item.desc }}
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

