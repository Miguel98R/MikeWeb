<script setup>
import profile from '~/data/profile.json'
</script>

<template>
  <section class="py-24 px-6 bg-tech-black">
    <div class="max-w-6xl mx-auto">
      <h3 class="text-3xl font-bold mb-12 flex items-center gap-3">
        <span class="w-2 h-8 bg-tech-red block"></span>
        Mis Servicios
      </h3>

      <div class="grid md:grid-cols-3 gap-6">
        <div v-for="(service, index) in profile.services" :key="index"
             class="group relative bg-tech-surface p-8 border border-white/5 hover:border-transparent transition-all duration-300"
             v-motion-slide-visible-once-bottom
             :delay="index * 100">

          <div class="absolute inset-0 -z-10 bg-gradient-to-br from-tech-purple to-tech-red opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300"></div>

          <div class="bg-tech-surface h-full relative z-10">
            <Icon :name="service.icon" size="40" class="text-tech-purple mb-6 group-hover:text-white transition-colors" />
            <h4 class="text-xl font-bold text-white mb-3">{{ service.title }}</h4>
            <p class="text-tech-gray text-sm leading-relaxed">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>