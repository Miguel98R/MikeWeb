<script setup>
import profile from '~/data/profile.json'
</script>

<template>
  <section id="servicios" class="py-28 px-6 bg-tech-black relative overflow-hidden">
    <!-- Background detail -->
    <div
        class="absolute inset-0 opacity-5 pointer-events-none"
        style="background-image: radial-gradient(#ef4444 1px, transparent 1px); background-size: 60px 60px;"
    />

    <div class="max-w-6xl mx-auto relative z-10">
      <!-- Header -->
      <div class="mb-16">
        <h3 class="text-3xl md:text-4xl font-bold flex items-center gap-4 text-white">
          <span class="w-2 h-10 bg-tech-red block"></span>
          Servicios Profesionales
        </h3>
        <p class="text-tech-gray mt-4 max-w-2xl">
          Diseño, desarrollo y escalamiento de soluciones tecnológicas orientadas a
          producción, rendimiento y crecimiento del negocio.
        </p>
      </div>

      <!-- Services grid -->
      <div class="grid md:grid-cols-3 gap-8">
        <article
            v-for="(service, index) in profile.services"
            :key="index"
            v-motion-slide-visible-once-bottom
            :delay="index * 120"
            class="group relative rounded-lg border border-white/10 bg-tech-surface/60 backdrop-blur-sm p-8 transition-all duration-300 hover:border-tech-purple/40"
        >
          <!-- Gradient accent -->
          <div
              class="absolute inset-0 rounded-lg bg-gradient-to-br from-tech-purple/20 to-tech-red/20
                   opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          />

          <!-- Content -->
          <div class="relative z-10 flex flex-col h-full">
            <!-- Title -->
            <h4 class="text-xl font-bold text-white mb-4 group-hover:text-tech-purple transition-colors">
              {{ service.title }}
            </h4>

            <!-- Description -->
            <p class="text-tech-gray text-sm leading-relaxed mb-8 flex-grow">
              {{ service.description }}
            </p>

            <!-- Footer (dinámico por servicio) -->
            <div class="pt-4 border-t border-white/10 text-xs font-mono text-tech-gray">
              {{ service.footer }}
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>