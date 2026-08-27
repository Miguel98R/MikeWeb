<script setup lang="ts">
import { ref } from 'vue'
import { useLanguage } from '~/composables/useLanguage'
import { useContactModal } from '~/composables/useContactModal'

const { currentLocale, setLanguage, toggleLanguage, t } = useLanguage()
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

    <header class="fixed top-0 w-full z-50 border-b border-white/5 bg-tech-black/85 backdrop-blur-md transition-all duration-300">
      <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        <NuxtLink to="/" class="text-xl font-bold tracking-tighter flex items-center gap-2 group">
          <span class="text-tech-purple font-mono group-hover:text-tech-red transition-colors">&lt;</span>
          <span>MikeRosasDev</span>
          <span class="text-tech-purple font-mono group-hover:text-tech-red transition-colors">/&gt;</span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center gap-6 text-sm font-medium text-tech-gray">
          <a href="#servicios" class="hover:text-white hover:scale-105 transition-all">{{ t.nav.services }}</a>
          <a href="#skills" class="hover:text-white hover:scale-105 transition-all">{{ t.nav.skills }}</a>
          <a href="#experiencia" class="hover:text-white hover:scale-105 transition-all">{{ t.nav.experience }}</a>
          <a href="#proyectos" class="hover:text-white hover:scale-105 transition-all">{{ t.nav.projects }}</a>
          <a href="#certificaciones" class="hover:text-white hover:scale-105 transition-all">{{ t.nav.certifications }}</a>
          <a href="#colaboraciones" class="hover:text-white hover:scale-105 transition-all">{{ t.nav.collaborations }}</a>

          <!-- Language Selector Pill -->
          <div class="flex items-center p-0.5 rounded-full bg-white/[0.04] border border-white/10 font-mono text-xs shadow-inner">
            <button
              type="button"
              class="px-2.5 py-1 rounded-full transition-all cursor-pointer font-bold"
              :class="currentLocale === 'es'
                ? 'bg-tech-purple text-white shadow-[0_0_12px_rgba(139,92,246,0.5)]'
                : 'text-zinc-400 hover:text-white'"
              @click="setLanguage('es')"
              title="Cambiar idioma a Español"
            >
              ES
            </button>
            <button
              type="button"
              class="px-2.5 py-1 rounded-full transition-all cursor-pointer font-bold"
              :class="currentLocale === 'en'
                ? 'bg-tech-purple text-white shadow-[0_0_12px_rgba(139,92,246,0.5)]'
                : 'text-zinc-400 hover:text-white'"
              @click="setLanguage('en')"
              title="Switch language to English"
            >
              EN
            </button>
          </div>

          <!-- Contact Modal Trigger -->
          <button
            type="button"
            class="px-3.5 py-1.5 rounded-full bg-tech-purple/10 border border-tech-purple/30 text-tech-purple hover:bg-tech-purple hover:text-white hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all font-mono text-xs cursor-pointer"
            @click="openContactModal"
          >
            {{ t.nav.contact }}
          </button>
        </nav>

        <!-- Mobile Header Controls -->
        <div class="flex md:hidden items-center gap-3">
          <!-- Mobile Language Switcher -->
          <button
            type="button"
            class="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300 hover:text-white hover:border-tech-purple/50"
            @click="toggleLanguage"
            aria-label="Toggle language"
          >
            <Icon name="mdi:translate" size="14" class="text-tech-purple" />
            <span class="font-bold uppercase text-tech-purple">{{ currentLocale }}</span>
          </button>

          <!-- Mobile Hamburger -->
          <button class="text-white p-1" @click="isMenuOpen = !isMenuOpen" aria-label="Abrir menú">
            <Icon :name="isMenuOpen ? 'mdi:close' : 'mdi:menu'" size="24" />
          </button>
        </div>
      </div>

      <!-- Mobile Dropdown Menu -->
      <div v-if="isMenuOpen" class="md:hidden bg-tech-black/95 border-b border-white/10 p-6 absolute w-full shadow-2xl backdrop-blur-xl">
        <div class="flex flex-col gap-4 text-center">
          <a href="#servicios" class="hover:text-white py-1 transition-all" @click="isMenuOpen = false">{{ t.nav.services }}</a>
          <a href="#skills" class="hover:text-white py-1 transition-all" @click="isMenuOpen = false">{{ t.nav.skills }}</a>
          <a href="#experiencia" class="hover:text-white py-1 transition-all" @click="isMenuOpen = false">{{ t.nav.experience }}</a>
          <a href="#proyectos" class="hover:text-white py-1 transition-all" @click="isMenuOpen = false">{{ t.nav.projects }}</a>
          <a href="#certificaciones" class="hover:text-white py-1 transition-all" @click="isMenuOpen = false">{{ t.nav.certifications }}</a>
          <a href="#colaboraciones" class="hover:text-white py-1 transition-all" @click="isMenuOpen = false">{{ t.nav.collaborations }}</a>

          <!-- Mobile Language Pill in Menu -->
          <div class="flex justify-center my-2">
            <div class="inline-flex items-center p-1 rounded-full bg-white/5 border border-white/10 font-mono text-xs">
              <button
                type="button"
                class="px-4 py-1 rounded-full transition-all font-bold"
                :class="currentLocale === 'es' ? 'bg-tech-purple text-white' : 'text-zinc-400'"
                @click="setLanguage('es')"
              >
                Español (ES)
              </button>
              <button
                type="button"
                class="px-4 py-1 rounded-full transition-all font-bold"
                :class="currentLocale === 'en' ? 'bg-tech-purple text-white' : 'text-zinc-400'"
                @click="setLanguage('en')"
              >
                English (EN)
              </button>
            </div>
          </div>

          <button
            type="button"
            class="w-full py-2.5 rounded-xl bg-tech-purple/10 border border-tech-purple/30 text-tech-purple hover:bg-tech-purple hover:text-white transition-all font-mono text-xs cursor-pointer"
            @click="handleContactClick"
          >
            {{ t.nav.contact }}
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