<script setup lang="ts">
import { ref } from 'vue'
import { useLanguage } from '~/composables/useLanguage'

const { profile, t, currentLocale } = useLanguage()
const isCvDropdownOpen = ref(false)
</script>

<template>
  <section class="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-20">
    <div class="absolute inset-0 pointer-events-none opacity-10"
         style="background-image: radial-gradient(#8b5cf6 1px, transparent 1px); background-size: 50px 50px;">
    </div>

    <div class="max-w-4xl w-full grid md:grid-cols-2 gap-12 items-center z-10">

      <!-- LEFT -->
      <div v-motion-slide-visible-once-left>
        <div
            class="inline-block px-3 py-1 mb-4 text-xs font-mono text-tech-purple border border-tech-purple/30 rounded-full bg-tech-purple/5">
          {{ t.hero.tag }}
        </div>

        <h1 class="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-white">
          {{ profile.basics.name }}
        </h1>

        <h2
            class="font-mono mb-6 bg-clip-text text-transparent bg-gradient-to-r from-tech-purple via-white to-tech-red">
          {{ profile.basics.role }}
        </h2>

        <p class="text-tech-gray text-lg mb-8 leading-relaxed max-w-md">
          {{ profile.basics.bio }}
        </p>

        <div class="flex flex-wrap items-center gap-4">
          <a href="#proyectos"
             class="px-7 py-3 bg-tech-purple text-white font-bold rounded-lg hover:bg-opacity-80 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all duration-300">
            {{ t.hero.viewProjects }}
          </a>

          <!-- Bilingual CV Download Button with Split Selector -->
          <div class="relative inline-flex items-center">
            <!-- Main Button: Downloads currently active language CV -->
            <a
              :href="currentLocale === 'en' ? '/CV_Jose_Miguel_Rosas_Jimenez_EN.pdf' : '/CV_Jose_Miguel_Rosas_Jimenez.pdf'"
              :download="currentLocale === 'en' ? 'CV_Jose_Miguel_Rosas_Jimenez_EN.pdf' : 'CV_Jose_Miguel_Rosas_Jimenez_ES.pdf'"
              class="px-5 py-3 border border-tech-red text-tech-red font-bold rounded-l-lg hover:bg-tech-red hover:text-black transition-all duration-300 flex items-center gap-2"
              :title="currentLocale === 'en' ? 'Download Resume in English' : 'Descargar CV en Español'"
            >
              <Icon name="mdi:download" size="18" />
              <span>{{ currentLocale === 'en' ? 'Resume (EN)' : 'CV (ES)' }}</span>
            </a>

            <!-- Dropdown Toggle Button for switching CV language -->
            <button
              type="button"
              class="px-2.5 py-3 border-y border-r border-tech-red text-tech-red hover:bg-tech-red hover:text-black rounded-r-lg transition-colors cursor-pointer"
              @click="isCvDropdownOpen = !isCvDropdownOpen"
              aria-label="Elegir idioma del CV"
            >
              <Icon name="mdi:chevron-down" size="18" :class="{ 'rotate-180': isCvDropdownOpen }" class="transition-transform" />
            </button>

            <!-- Dropdown Menu -->
            <div
              v-if="isCvDropdownOpen"
              class="absolute top-full left-0 mt-2 w-48 bg-[#0c0c14] border border-tech-red/40 rounded-xl shadow-2xl p-1.5 z-30 flex flex-col gap-1 backdrop-blur-lg"
              @click="isCvDropdownOpen = false"
            >
              <a
                href="/CV_Jose_Miguel_Rosas_Jimenez.pdf"
                download="CV_Jose_Miguel_Rosas_Jimenez_ES.pdf"
                class="flex items-center justify-between px-3 py-2 text-xs font-mono rounded-lg hover:bg-tech-red/10 text-gray-200 hover:text-tech-red transition-colors"
              >
                <span>🇪🇸 CV en Español</span>
                <Icon name="mdi:download" size="14" />
              </a>
              <a
                href="/CV_Jose_Miguel_Rosas_Jimenez_EN.pdf"
                download="CV_Jose_Miguel_Rosas_Jimenez_EN.pdf"
                class="flex items-center justify-between px-3 py-2 text-xs font-mono rounded-lg hover:bg-tech-red/10 text-gray-200 hover:text-tech-red transition-colors"
              >
                <span>🇺🇸 Resume (English)</span>
                <Icon name="mdi:download" size="14" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- RIGHT -->
      <div class="relative hidden md:block" v-motion-fade-visible-once>
        <div
            class="w-full h-80 bg-gradient-to-br from-tech-purple/20 to-tech-red/20 rounded-lg backdrop-blur-sm border border-white/10 relative overflow-hidden group">

          <div class="absolute top-0 left-0 w-full h-1 bg-tech-purple shadow-[0_0_15px_#8b5cf6] animate-scan"></div>

          <div class="p-8 font-mono text-sm text-tech-purple/70">
            <p>> booting_system...</p>
            <p>> loading_core_modules...</p>
            <p class="text-white">> status: <span class="text-tech-green-400">{{ t.hero.status }}</span></p>

            <div class="mt-4 p-4 border border-white/10 rounded bg-black/40">
              <code>
                {{ t.hero.codeSnippetTitle }}<br>
                &nbsp;&nbsp;'Node.js / NestJS',<br>
                &nbsp;&nbsp;'Nuxt 3 / Vue',<br>
                &nbsp;&nbsp;'MongoDB / PostgreSQL / Redis',<br>
                &nbsp;&nbsp;'AWS (EC2, ECS, S3)',<br>
                &nbsp;&nbsp;'Docker / CI-CD',<br>
                &nbsp;&nbsp;'System Architecture'<br>
                ];
              </code>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
@keyframes scan {
  0% { top: 0%; opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { top: 100%; opacity: 0; }
}
.animate-scan {
  animation: scan 3s linear infinite;
}
</style>