<script setup>
import profile from '~/data/profile.json'

// Estado para menú móvil (opcional si lo deseas expandir)
const isMenuOpen = ref(false)
</script>

<template>
  <div class="min-h-screen bg-tech-black text-white selection:bg-tech-purple selection:text-white font-sans relative">

    <div class="fixed inset-0 z-0 pointer-events-none opacity-[0.03]"
         style="background-image: url('https://grainy-gradients.vercel.app/noise.svg');">
    </div>

    <header class="fixed top-0 w-full z-50 border-b border-white/5 bg-tech-black/80 backdrop-blur-md transition-all duration-300">
      <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        <NuxtLink to="/" class="text-xl font-bold tracking-tighter flex items-center gap-2 group">
          <span class="text-tech-purple font-mono group-hover:text-tech-red transition-colors">&lt;</span>
          <span>{{ profile.basics.name.split(' ')[0] }}</span>
          <span class="text-tech-purple font-mono group-hover:text-tech-red transition-colors">/&gt;</span>
        </NuxtLink>

        <nav class="hidden md:flex gap-8 text-sm font-medium text-tech-gray">
          <a href="#proyectos" class="hover:text-white hover:scale-105 transition-all">Proyectos</a>
          <a href="#servicios" class="hover:text-white hover:scale-105 transition-all">Servicios</a>
          <a :href="profile.basics.email" class="text-white bg-white/5 px-4 py-2 rounded border border-white/10 hover:border-tech-red hover:text-tech-red transition-all">
            Contáctame
          </a>
        </nav>

        <button class="md:hidden text-white" @click="isMenuOpen = !isMenuOpen">
          <Icon name="mdi:menu" size="24" />
        </button>
      </div>

      <div v-if="isMenuOpen" class="md:hidden bg-tech-black border-b border-white/10 p-4 absolute w-full">
        <div class="flex flex-col gap-4 text-center">
          <a href="#proyectos" @click="isMenuOpen = false" class="text-gray-300">Proyectos</a>
          <a href="#servicios" @click="isMenuOpen = false" class="text-gray-300">Servicios</a>
          <a :href="profile.basics.email" class="text-tech-red">Contactar</a>
        </div>
      </div>
    </header>

    <div class="relative z-10 pt-16">
      <slot />
    </div>

  </div>
</template>

<style scoped>
/* Asegura que el scroll no tape los anclajes por culpa del header fijo */
html {
  scroll-padding-top: 5rem;
}
</style>