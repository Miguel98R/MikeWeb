<script setup>
import profile from '~/data/profile.json'
import { useContactModal } from '~/composables/useContactModal'

const { openContactModal } = useContactModal()
const isMenuOpen = ref(false)

const handleContactClick = () => {
  isMenuOpen.value = false
  openContactModal()
}
</script>

<template>
  <div class="min-h-screen bg-tech-black text-white selection:bg-tech-purple selection:text-white font-sans relative">
    <!-- Dynamic Circuit & Binary Tech Background -->
    <TechCyberBackground />

    <div
      class="fixed inset-0 z-0 pointer-events-none opacity-[0.025]"
      style="background-image: url(&quot;data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E&quot;);"
    />

    <header class="fixed top-0 w-full z-50 border-b border-white/5 bg-tech-black/80 backdrop-blur-md transition-all duration-300">
      <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        <NuxtLink to="/" class="text-xl font-bold tracking-tighter flex items-center gap-2 group">
          <span class="text-tech-purple font-mono group-hover:text-tech-red transition-colors">&lt;</span>
          <span>MikeRosasDev</span>
          <span class="text-tech-purple font-mono group-hover:text-tech-red transition-colors">/&gt;</span>
        </NuxtLink>

        <nav class="hidden md:flex items-center gap-7 text-sm font-medium text-tech-gray">
          <a href="#servicios" class="hover:text-white hover:scale-105 transition-all">Servicios</a>
          <a href="#skills" class="hover:text-white hover:scale-105 transition-all">Skills</a>
          <a href="#experiencia" class="hover:text-white hover:scale-105 transition-all">Experiencia</a>
          <a href="#proyectos" class="hover:text-white hover:scale-105 transition-all">Proyectos</a>
          <a href="#certificaciones" class="hover:text-white hover:scale-105 transition-all">Certificaciones</a>
          <a href="#colaboraciones" class="hover:text-white hover:scale-105 transition-all">Colaboraciones</a>
          <button
            type="button"
            class="px-3.5 py-1.5 rounded-full bg-tech-purple/10 border border-tech-purple/30 text-tech-purple hover:bg-tech-purple hover:text-white hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all font-mono text-xs cursor-pointer"
            @click="openContactModal"
          >
            Contáctame
          </button>
        </nav>

        <button class="md:hidden text-white" @click="isMenuOpen = !isMenuOpen">
          <Icon name="mdi:menu" size="24" />
        </button>
      </div>

      <div v-if="isMenuOpen" class="md:hidden bg-tech-black border-b border-white/10 p-4 absolute w-full">
        <div class="flex flex-col gap-4 text-center">
          <a href="#servicios" class="hover:text-white hover:scale-105 transition-all" @click="isMenuOpen = false">Servicios</a>
          <a href="#skills" class="hover:text-white hover:scale-105 transition-all" @click="isMenuOpen = false">Skills</a>
          <a href="#experiencia" class="hover:text-white hover:scale-105 transition-all" @click="isMenuOpen = false">Experiencia</a>
          <a href="#proyectos" class="hover:text-white hover:scale-105 transition-all" @click="isMenuOpen = false">Proyectos</a>
          <a href="#certificaciones" class="hover:text-white hover:scale-105 transition-all" @click="isMenuOpen = false">Certificaciones</a>
          <a href="#colaboraciones" class="hover:text-white hover:scale-105 transition-all" @click="isMenuOpen = false">Colaboraciones</a>
          <button
            type="button"
            class="w-full py-2 rounded-lg bg-tech-purple/10 border border-tech-purple/30 text-tech-purple hover:bg-tech-purple hover:text-white transition-all font-mono text-xs cursor-pointer"
            @click="handleContactClick"
          >
            Contáctame
          </button>
        </div>
      </div>
    </header>

    <div class="relative z-10 pt-16">
      <slot />
    </div>

    <!-- Global Contact Modal (WhatsApp & Email) -->
    <ContactModal />

  </div>
</template>

<style scoped>
/* Asegura que el scroll no tape los anclajes por culpa del header fijo */
html {
  scroll-padding-top: 5rem;
}
</style>