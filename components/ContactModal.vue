<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useLanguage } from '~/composables/useLanguage'
import { useContactModal } from '~/composables/useContactModal'

const { t, currentLocale } = useLanguage()
const { isContactModalOpen, closeContactModal } = useContactModal()
const copiedText = ref<string | null>(null)

const copyToClipboard = async (text: string, label: string) => {
  try {
    await navigator.clipboard.writeText(text)
    copiedText.value = label
    setTimeout(() => {
      if (copiedText.value === label) {
        copiedText.value = null
      }
    }, 2500)
  } catch (e) {
    // fallback
  }
}

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && isContactModalOpen.value) {
    closeContactModal()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isContactModalOpen"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
        @click.self="closeContactModal"
      >
        <Transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="opacity-0 scale-95 translate-y-2"
          enter-to-class="opacity-100 scale-100 translate-y-0"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="opacity-100 scale-100 translate-y-0"
          leave-to-class="opacity-0 scale-95 translate-y-2"
        >
          <div
            class="relative w-full max-w-lg bg-[#0c0c12] border border-tech-purple/50 rounded-3xl p-6 sm:p-8 shadow-[0_0_70px_rgba(139,92,246,0.35)]"
            @click.stop
          >
            <!-- Close Button -->
            <button
              type="button"
              aria-label="Cerrar modal"
              class="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:bg-white/15 hover:border-white/30 text-tech-gray hover:text-white flex items-center justify-center transition-all cursor-pointer z-20"
              @click="closeContactModal"
            >
              <Icon name="mdi:close" size="20" />
            </button>

            <!-- Header -->
            <div class="mb-6">
              <div class="inline-flex items-center gap-2 px-3 py-1 mb-3 text-xs font-mono text-tech-purple border border-tech-purple/30 rounded-full bg-tech-purple/5">
                <Icon name="mdi:rocket-launch-outline" size="14" />
                <span>{{ t.contactModal.tag }}</span>
              </div>
              <h3 class="text-2xl sm:text-3xl font-bold text-white mb-2">
                {{ t.contactModal.title }}
              </h3>
              <p class="text-sm text-tech-gray leading-relaxed font-light">
                {{ t.contactModal.subtitle }}
              </p>
            </div>

            <!-- Contact Options -->
            <div class="space-y-4">
              <!-- Option 1: WhatsApp -->
              <a
                :href="currentLocale === 'en'
                  ? 'https://wa.me/527714349366?text=Hi%20Miguel,%20I%20would%20like%20to%20discuss%20a%20project'
                  : 'https://wa.me/527714349366?text=Hola%20Miguel,%20me%20gustar%C3%ADa%20platicar%20sobre%20un%20proyecto'"
                target="_blank"
                rel="noopener noreferrer"
                class="group relative flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-[#0a1a12] border border-emerald-500/30 hover:border-emerald-400 hover:bg-[#0e2419] hover:shadow-[0_0_25px_rgba(16,185,129,0.25)] transition-all duration-300 cursor-pointer"
              >
                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all">
                    <Icon name="mdi:whatsapp" size="28" />
                  </div>
                  <div>
                    <h4 class="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {{ t.contactModal.whatsappTitle }}
                    </h4>
                    <p class="text-xs text-emerald-300/80 font-mono">
                      {{ t.contactModal.whatsappSub }}
                    </p>
                  </div>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-xs font-mono text-emerald-400 group-hover:translate-x-1 transition-transform">
                    Chat
                  </span>
                  <Icon name="mdi:arrow-right" size="18" class="text-emerald-400" />
                </div>
              </a>

              <!-- Option 2: Email -->
              <div class="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-xl bg-tech-purple/10 border border-tech-purple/30 flex items-center justify-center text-tech-purple">
                      <Icon name="mdi:email-outline" size="22" />
                    </div>
                    <div>
                      <h4 class="text-sm font-bold text-white">
                        {{ t.contactModal.emailTitle }}
                      </h4>
                      <p class="text-xs text-tech-gray">
                        {{ t.contactModal.emailSub }}
                      </p>
                    </div>
                  </div>
                </div>

                <div class="flex items-center justify-between gap-2 p-3 rounded-xl bg-black/50 border border-white/5 font-mono text-xs text-tech-purple">
                  <span class="truncate">mikerosas.dev98@gmail.com</span>
                  <button
                    type="button"
                    class="px-3 py-1 rounded-lg bg-tech-purple/20 hover:bg-tech-purple text-white text-[11px] transition-all cursor-pointer shrink-0 font-sans"
                    @click="copyToClipboard('mikerosas.dev98@gmail.com', 'email')"
                  >
                    {{ copiedText === 'email' ? t.contactModal.copied : t.contactModal.copy }}
                  </button>
                </div>

                <div class="flex justify-end">
                  <a
                    href="mailto:mikerosas.dev98@gmail.com?subject=Propuesta%20de%20Proyecto%20·%20MikeRosasDev"
                    class="text-xs font-mono text-tech-gray hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <span>{{ t.contactModal.openMailClient }}</span>
                    <Icon name="mdi:open-in-new" size="13" />
                  </a>
                </div>
              </div>
            </div>

            <!-- Footer info -->
            <div class="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-500">
              <span>Pachuca, Hgo. · Remote Worldwide</span>
              <span class="text-emerald-400 flex items-center gap-1">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                Available for Projects
              </span>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>
