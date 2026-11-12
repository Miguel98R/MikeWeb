<script setup lang="ts">
import { useLanguage } from '~/composables/useLanguage'

const { t } = useLanguage()

const getCategoryIcon = (index: number) => {
  if (index === 0) return 'mdi:server'
  if (index === 1) return 'mdi:monitor-cellphone'
  if (index === 2) return 'mdi:cloud-sync'
  return 'mdi:brain'
}
</script>

<template>
  <section id="stack" class="py-24 px-6 bg-transparent relative overflow-hidden scroll-mt-20">
    <div
      class="absolute inset-0 opacity-5 pointer-events-none"
      style="background-image: radial-gradient(#8b5cf6 1px, transparent 1px); background-size: 50px 50px;"
    />
    <div class="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[350px] bg-tech-purple/10 rounded-full blur-3xl pointer-events-none" />

    <div class="max-w-6xl mx-auto relative z-10">

      <!-- Header -->
      <div class="mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 mb-3 text-xs font-mono text-tech-purple border border-tech-purple/30 rounded-full bg-tech-purple/5">
          <Icon name="mdi:code-json" size="16" />
          <span>{{ t.companyStack.tag }}</span>
        </div>
        <h3 class="text-3xl md:text-4xl font-bold flex items-center gap-4 text-white">
          <span class="w-2 h-10 bg-tech-purple block"></span>
          {{ t.companyStack.title }}
        </h3>
        <p class="text-tech-gray mt-4 max-w-2xl text-sm sm:text-base font-light">
          {{ t.companyStack.subtitle }}
        </p>
      </div>

      <!-- Categories Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(cat, index) in t.companyStack.categories"
          :key="cat.name"
          v-motion-slide-visible-once-bottom
          :delay="index * 60"
          class="rounded-2xl border border-white/10 bg-tech-surface/85 backdrop-blur-md p-6 flex flex-col justify-between hover:border-tech-purple/40 hover:shadow-[0_0_25px_rgba(139,92,246,0.15)] transition-all duration-300"
        >
          <div>
            <div class="w-10 h-10 rounded-xl bg-tech-purple/10 border border-tech-purple/20 flex items-center justify-center text-tech-purple mb-4">
              <Icon :name="getCategoryIcon(index)" size="20" />
            </div>
            <h4 class="text-base font-bold text-white mb-1.5">{{ cat.name }}</h4>
            <p class="text-xs text-zinc-400 mb-5 font-light leading-relaxed">{{ cat.desc }}</p>

            <div class="flex flex-wrap gap-1.5">
              <span
                v-for="item in cat.items"
                :key="item"
                class="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/5 text-gray-300 hover:border-tech-purple/30 hover:text-white transition-all"
              >
                {{ item }}
              </span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

