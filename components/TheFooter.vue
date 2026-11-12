<script setup lang="ts">
import { useLanguage } from '~/composables/useLanguage'
import { useContactModal } from '~/composables/useContactModal'

const { profile, t } = useLanguage()
const { openContactModal } = useContactModal()

const emailHref = computed(() => {
  const email = profile.value.basics.email || ''
  return email.startsWith('mailto:') ? email : `mailto:${email}`
})
</script>

<template>
  <footer id="contacto" class="py-12 sm:py-16 border-t border-white/10 bg-[#040407] text-center relative overflow-hidden w-full max-w-full">
    <!-- Ambient subtle glow -->
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[600px] h-[180px] sm:h-[200px] bg-tech-purple/10 rounded-full blur-3xl pointer-events-none" />

    <div class="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 w-full">

      <div class="inline-flex items-center gap-2 px-3 py-1 mb-4 text-xs font-mono text-tech-purple border border-tech-purple/30 rounded-full bg-tech-purple/5">
        <Icon name="mdi:sparkles" size="14" />
        <span>ENTERPRISE COLLABORATION</span>
      </div>

      <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 break-words">
        {{ t.footer.title }}
      </h2>

      <p class="text-tech-gray mb-8 max-w-xl mx-auto text-sm sm:text-base font-light">
        {{ t.footer.subtitle }}
      </p>

      <!-- Action Button to open Modal -->
      <div class="mb-10 flex justify-center">
        <button
          type="button"
          class="w-full sm:w-auto px-8 py-3.5 bg-tech-purple text-white font-bold rounded-xl hover:bg-opacity-90 hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] hover:-translate-y-0.5 transition-all text-sm font-sans cursor-pointer inline-flex items-center justify-center gap-2 min-h-[44px]"
          @click="openContactModal"
        >
          <Icon name="mdi:message-text-outline" size="18" />
          <span>{{ t.footer.ctaButton }}</span>
        </button>
      </div>

      <!-- Quick Nav Links -->
      <div class="flex flex-wrap justify-center items-center gap-6 mb-10 text-xs font-mono text-zinc-400">
        <NuxtLink to="/#servicios" class="hover:text-white transition-colors">Servicios</NuxtLink>
        <NuxtLink to="/#metodologia" class="hover:text-white transition-colors">Metodología</NuxtLink>
        <NuxtLink to="/#colaboraciones" class="hover:text-white transition-colors">Clientes</NuxtLink>
        <NuxtLink to="/#stack" class="hover:text-white transition-colors">Stack</NuxtLink>
        <NuxtLink to="/acerca-del-ceo" class="text-tech-purple hover:underline font-bold">Acerca del CEO</NuxtLink>
        <NuxtLink to="/aviso-de-privacidad" class="hover:text-white transition-colors">Privacidad</NuxtLink>
      </div>

      <!-- Social / Direct Channels -->
      <div class="flex justify-center gap-8 mb-10">
        <!-- Email -->
        <a
          :href="emailHref"
          title="Email"
          class="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-tech-gray hover:text-tech-red hover:border-tech-red/40 hover:bg-tech-red/10 hover:scale-110 transition-all"
        >
          <Icon name="simple-icons:gmail" size="20" />
        </a>

        <!-- WhatsApp -->
        <a
          :href="profile.basics.whatsapp"
          target="_blank"
          rel="noopener"
          title="WhatsApp"
          class="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-tech-gray hover:text-emerald-400 hover:border-emerald-400/40 hover:bg-emerald-400/10 hover:scale-110 transition-all"
        >
          <Icon name="simple-icons:whatsapp" size="20" />
        </a>

        <!-- LinkedIn -->
        <a
          :href="profile.basics.linkedin"
          target="_blank"
          rel="noopener"
          title="LinkedIn"
          class="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-tech-gray hover:text-blue-400 hover:border-blue-400/40 hover:bg-blue-400/10 hover:scale-110 transition-all"
        >
          <Icon name="simple-icons:linkedin" size="20" />
        </a>

        <!-- GitHub -->
        <a
          :href="profile.basics.github"
          target="_blank"
          rel="noopener"
          title="GitHub"
          class="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-tech-gray hover:text-white hover:border-white/40 hover:bg-white/10 hover:scale-110 transition-all"
        >
          <Icon name="simple-icons:github" size="20" />
        </a>
      </div>

      <!-- Copyright -->
      <div class="flex flex-col sm:flex-row justify-between items-center gap-3 pt-6 border-t border-white/5 text-xs text-zinc-500 font-mono">
        <p>© {{ new Date().getFullYear() }} MikeRosasDev Studio · José Miguel Rosas Jiménez</p>
        <p class="text-[11px] text-zinc-600">High-Performance Software & AI Systems</p>
      </div>

    </div>
  </footer>
</template>
