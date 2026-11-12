<script setup lang="ts">
import { ref } from 'vue'
import { useLanguage } from '~/composables/useLanguage'
import { useContactModal } from '~/composables/useContactModal'

const { profile, t, currentLocale } = useLanguage()
const { openContactModal } = useContactModal()
const isCvDropdownOpen = ref(false)
</script>

<template>
  <section class="min-h-[85vh] flex items-center justify-center relative overflow-hidden px-4 sm:px-6 pt-20 sm:pt-24 pb-14 sm:pb-16 w-full max-w-full">
    <!-- Ambient Background Glow -->
    <div
      class="absolute inset-0 pointer-events-none opacity-10"
      style="background-image: radial-gradient(#8b5cf6 1px, transparent 1px); background-size: 50px 50px;"
    />
    <div class="absolute -top-32 right-1/4 w-full max-w-[600px] h-[350px] sm:h-[450px] bg-gradient-to-b from-tech-purple/20 via-tech-red/10 to-transparent rounded-full blur-3xl pointer-events-none" />

    <div class="max-w-6xl w-full min-w-0 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center z-10">

      <!-- LEFT: Profile & Bio (7 cols) -->
      <div class="lg:col-span-7 flex flex-col items-start w-full min-w-0">

        <!-- Back to Company link -->
        <NuxtLink
          to="/"
          class="inline-flex items-center gap-2 mb-5 text-xs font-mono text-zinc-400 hover:text-white transition-colors group min-h-[44px]"
        >
          <Icon name="mdi:arrow-left" size="16" class="group-hover:-translate-x-1 transition-transform text-tech-purple" />
          <span>{{ t.ceoPage.backHome }}</span>
        </NuxtLink>

        <!-- CEO Badge -->
        <div class="inline-flex items-center gap-2 px-3.5 py-1 mb-4 text-xs font-mono text-tech-purple border border-tech-purple/30 rounded-full bg-tech-purple/10 backdrop-blur-md max-w-full">
          <Icon name="mdi:account-tie" size="16" />
          <span class="font-bold tracking-wide">{{ t.ceoPage.badge }}</span>
        </div>

        <!-- Name -->
        <h1 class="text-2xl min-[360px]:text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-3 break-words [overflow-wrap:anywhere] w-full">
          {{ profile.basics.name }}
        </h1>

        <!-- Title / Role -->
        <h2 class="text-xl sm:text-2xl font-mono mb-6 bg-clip-text text-transparent bg-gradient-to-r from-tech-purple via-white to-tech-red font-semibold">
          {{ t.ceoPage.role }}
        </h2>

        <!-- Bio Paragraphs -->
        <p class="text-tech-gray text-base leading-relaxed mb-6 font-light max-w-2xl">
          {{ profile.basics.bio }}
        </p>

        <!-- Education Badge -->
        <div class="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 mb-8 max-w-xl">
          <Icon name="mdi:school-outline" size="20" class="text-tech-purple shrink-0" />
          <div class="text-xs text-zinc-300 font-mono">
            <span class="text-white font-bold">Centro Universitario Hidalguense A.C.</span> · Lic. en Ingeniería en Sistemas Computacionales
          </div>
        </div>

        <!-- Action Buttons: CV Download & Direct Contact -->
        <div class="flex flex-wrap items-center gap-4 mb-8">
          <!-- Bilingual CV Download Button -->
          <div class="relative inline-flex items-center">
            <a
              :href="currentLocale === 'en' ? '/CV_Jose_Miguel_Rosas_Jimenez_EN.pdf' : '/CV_Jose_Miguel_Rosas_Jimenez.pdf'"
              :download="currentLocale === 'en' ? 'CV_Jose_Miguel_Rosas_Jimenez_EN.pdf' : 'CV_Jose_Miguel_Rosas_Jimenez_ES.pdf'"
              target="_blank"
              rel="noopener noreferrer"
              class="px-5 py-3 border border-tech-red text-tech-red font-bold rounded-l-xl hover:bg-tech-red hover:text-black transition-all duration-300 flex items-center gap-2 text-sm"
              :title="currentLocale === 'en' ? 'Download Resume in English' : 'Descargar CV en Español'"
            >
              <Icon name="mdi:download" size="18" />
              <span>{{ currentLocale === 'en' ? 'Resume (EN)' : 'Descargar CV (ES)' }}</span>
            </a>

            <button
              type="button"
              class="px-3 py-3 border-y border-r border-tech-red text-tech-red hover:bg-tech-red hover:text-black rounded-r-xl transition-colors cursor-pointer"
              @click="isCvDropdownOpen = !isCvDropdownOpen"
              aria-label="Elegir idioma del CV"
            >
              <Icon name="mdi:chevron-down" size="18" :class="{ 'rotate-180': isCvDropdownOpen }" class="transition-transform" />
            </button>

            <!-- Dropdown -->
            <div
              v-if="isCvDropdownOpen"
              class="absolute top-full left-0 mt-2 w-52 bg-[#0c0c14] border border-tech-red/40 rounded-xl shadow-2xl p-1.5 z-30 flex flex-col gap-1 backdrop-blur-lg"
              @click="isCvDropdownOpen = false"
            >
              <a
                href="/CV_Jose_Miguel_Rosas_Jimenez.pdf"
                download="CV_Jose_Miguel_Rosas_Jimenez_ES.pdf"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-between px-3 py-2 text-xs font-mono rounded-lg hover:bg-tech-red/10 text-gray-200 hover:text-tech-red transition-colors"
              >
                <span>🇪🇸 CV en Español</span>
                <Icon name="mdi:download" size="14" />
              </a>
              <a
                href="/CV_Jose_Miguel_Rosas_Jimenez_EN.pdf"
                download="CV_Jose_Miguel_Rosas_Jimenez_EN.pdf"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-between px-3 py-2 text-xs font-mono rounded-lg hover:bg-tech-red/10 text-gray-200 hover:text-tech-red transition-colors"
              >
                <span>🇺🇸 Resume (English)</span>
                <Icon name="mdi:download" size="14" />
              </a>
            </div>
          </div>

          <!-- Contact CEO Button -->
          <button
            type="button"
            class="px-6 py-3 bg-tech-purple text-white font-bold rounded-xl hover:bg-opacity-90 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all flex items-center gap-2 text-sm cursor-pointer"
            @click="openContactModal"
          >
            <Icon name="mdi:chat-outline" size="18" />
            <span>Hablar con el CEO</span>
          </button>
        </div>

        <!-- Quick Nav Anchor Pills -->
        <div class="flex flex-wrap items-center gap-2 pt-4 border-t border-white/10 font-mono text-xs text-zinc-400">
          <span class="text-zinc-500 mr-1">Secciones:</span>
          <a href="#experiencia" class="px-3 py-1 rounded-full bg-white/5 hover:bg-tech-purple/20 hover:text-tech-purple transition-all border border-white/10">
            {{ t.ceoPage.navExperience }}
          </a>
          <a href="#skills" class="px-3 py-1 rounded-full bg-white/5 hover:bg-tech-purple/20 hover:text-tech-purple transition-all border border-white/10">
            {{ t.ceoPage.navSkills }}
          </a>
          <a href="#certificaciones" class="px-3 py-1 rounded-full bg-white/5 hover:bg-tech-purple/20 hover:text-tech-purple transition-all border border-white/10">
            {{ t.ceoPage.navCerts }}
          </a>
          <a href="#proyectos" class="px-3 py-1 rounded-full bg-white/5 hover:bg-tech-purple/20 hover:text-tech-purple transition-all border border-white/10">
            {{ t.ceoPage.navProjects }}
          </a>
        </div>

      </div>

      <!-- RIGHT: Quote & Professional Links Card (5 cols) -->
      <div class="lg:col-span-5 relative min-w-0 w-full" v-motion-fade-visible-once>
        <div class="rounded-2xl border border-white/10 bg-[#0f0f15]/95 backdrop-blur-xl p-8 relative overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.8)]">

          <!-- Glowing corner badge -->
          <div class="w-14 h-14 rounded-2xl bg-tech-purple/10 border border-tech-purple/30 flex items-center justify-center text-tech-purple mb-6 shadow-[0_0_20px_rgba(139,92,246,0.2)]">
            <Icon name="mdi:format-quote-open" size="32" />
          </div>

          <p class="text-gray-200 text-sm sm:text-base leading-relaxed italic mb-8 font-light">
            {{ t.ceoPage.quote }}
          </p>

          <div class="pt-6 border-t border-white/10 flex flex-col gap-4">
            <span class="text-xs font-mono uppercase text-zinc-500 tracking-wider">Perfiles & Canales Oficiales</span>
            <div class="flex items-center gap-3">
              <a
                :href="profile.basics.linkedin"
                target="_blank"
                rel="noopener"
                class="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-blue-400 hover:border-blue-400/40 hover:bg-blue-400/10 transition-all"
                title="LinkedIn"
              >
                <Icon name="simple-icons:linkedin" size="18" />
              </a>
              <a
                :href="profile.basics.github"
                target="_blank"
                rel="noopener"
                class="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white hover:border-white/40 hover:bg-white/10 transition-all"
                title="GitHub Principal"
              >
                <Icon name="simple-icons:github" size="18" />
              </a>
              <a
                :href="profile.basics.whatsapp"
                target="_blank"
                rel="noopener"
                class="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-emerald-400 hover:border-emerald-400/40 hover:bg-emerald-400/10 transition-all"
                title="WhatsApp Directo"
              >
                <Icon name="simple-icons:whatsapp" size="18" />
              </a>
              <a
                :href="profile.basics.email"
                class="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-tech-red hover:border-tech-red/40 hover:bg-tech-red/10 transition-all"
                title="Email"
              >
                <Icon name="simple-icons:gmail" size="18" />
              </a>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

