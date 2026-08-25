<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useContactModal } from '~/composables/useContactModal'

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
                <span>START_A_PROJECT</span>
              </div>
              <h3 class="text-2xl sm:text-3xl font-bold text-white mb-2">
                ¿Hablamos de tu Proyecto?
              </h3>
              <p class="text-sm text-tech-gray leading-relaxed font-light">
                Elige tu canal preferido para iniciar la conversación. Te responderé a la brevedad para evaluar requerimientos y arquitectura.
              </p>
            </div>

            <!-- Contact Options -->
            <div class="space-y-4">
              <!-- Option 1: WhatsApp -->
              <a
                href="https://wa.me/527714349366?text=Hola%20Miguel,%20me%20gustar%C3%ADa%20platicar%20sobre%20un%20proyecto"
                target="_blank"
                rel="noopener noreferrer"
                class="group relative flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-[#0a1a12] border border-emerald-500/30 hover:border-emerald-400 hover:bg-[#0e2419] hover:shadow-[0_0_25px_rgba(16,185,129,0.25)] transition-all duration-300 cursor-pointer"
              >
                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all">
                    <Icon name="mdi:whatsapp" size="28" />
                  </div>
                  <div>
                    <h4 class="text-base font-bold text-white group-hover:text-emerald-300 transition-colors flex items-center gap-2">
                      WhatsApp
                      <span class="text-[10px] font-mono font-normal px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">Respuesta rápida</span>
                    </h4>
                    <p class="text-xs font-mono text-gray-400 mt-0.5">
                      +52 771 434 9366
                    </p>
                  </div>
                </div>

                <div class="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:translate-x-1 transition-transform">
                  <Icon name="mdi:arrow-top-right" size="18" />
                </div>
              </a>

              <!-- Option 2: Email -->
              <a
                href="mailto:mikerosas.dev98@gmail.com?subject=Propuesta%20de%20Proyecto%20-%20MikeRosasDev"
                class="group relative flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-[#140f1f] border border-tech-purple/30 hover:border-tech-purple hover:bg-[#1a1329] hover:shadow-[0_0_25px_rgba(139,92,246,0.25)] transition-all duration-300 cursor-pointer"
              >
                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 rounded-xl bg-tech-purple/10 border border-tech-purple/30 flex items-center justify-center text-tech-purple group-hover:scale-110 group-hover:bg-tech-purple/20 transition-all">
                    <Icon name="mdi:email-outline" size="26" />
                  </div>
                  <div>
                    <h4 class="text-base font-bold text-white group-hover:text-tech-purple transition-colors flex items-center gap-2">
                      Correo Electrónico
                      <span class="text-[10px] font-mono font-normal px-2 py-0.5 rounded-full bg-tech-purple/10 border border-tech-purple/20 text-tech-purple">Propuestas formales</span>
                    </h4>
                    <p class="text-xs font-mono text-gray-400 mt-0.5">
                      mikerosas.dev98@gmail.com
                    </p>
                  </div>
                </div>

                <div class="w-9 h-9 rounded-lg bg-tech-purple/10 flex items-center justify-center text-tech-purple group-hover:translate-x-1 transition-transform">
                  <Icon name="mdi:arrow-top-right" size="18" />
                </div>
              </a>
            </div>

            <!-- Quick copy helpers -->
            <div class="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-tech-gray">
              <span>¿Copiar datos?</span>
              <div class="flex gap-2">
                <button
                  type="button"
                  class="px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 hover:text-white border border-white/10 transition-colors cursor-pointer"
                  @click="copyToClipboard('7714349366', 'phone')"
                >
                  {{ copiedText === 'phone' ? '✓ Teléfono copiado' : 'Copiar Tel' }}
                </button>
                <button
                  type="button"
                  class="px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 hover:text-white border border-white/10 transition-colors cursor-pointer"
                  @click="copyToClipboard('mikerosas.dev98@gmail.com', 'email')"
                >
                  {{ copiedText === 'email' ? '✓ Email copiado' : 'Copiar Email' }}
                </button>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>
