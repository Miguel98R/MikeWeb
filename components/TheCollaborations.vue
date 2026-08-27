<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useLanguage } from '~/composables/useLanguage'
import { useContactModal } from '~/composables/useContactModal'

interface Collaboration {
  id: string
  name: string
  sector: string
  logo?: string
  logoIcon: string
  badge: string
  color: string
  accentColor: string
  tagline: string
  description: string
  services: string[]
  technologies: string[]
}

const { profile, t } = useLanguage()
const collaborations = computed(() => profile.value.collaborations as Collaboration[])
const selectedClient = ref<Collaboration | null>(null)
const isModalOpen = ref(false)

const { openContactModal } = useContactModal()

const openModal = (client: Collaboration) => {
  selectedClient.value = client
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  setTimeout(() => {
    if (!isModalOpen.value) {
      selectedClient.value = null
    }
  }, 200)
}

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && isModalOpen.value) {
    closeModal()
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
  <section id="colaboraciones" class="py-28 px-6 bg-transparent relative overflow-hidden">
    <!-- Background subtle gradient glow -->
    <div
      class="absolute inset-0 opacity-5 pointer-events-none"
      style="background-image: radial-gradient(#8b5cf6 1px, transparent 1px); background-size: 50px 50px;"
    />
    <div class="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[450px] bg-tech-purple/10 rounded-full blur-3xl pointer-events-none" />

    <div class="max-w-6xl mx-auto relative z-10">
      <!-- Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div class="inline-flex items-center gap-2 px-3 py-1 mb-3 text-xs font-mono text-tech-purple border border-tech-purple/30 rounded-full bg-tech-purple/5">
            <Icon name="mdi:handshake-outline" size="16" />
            <span>{{ t.collaborations.tag }}</span>
          </div>
          <h3 class="text-3xl md:text-4xl font-bold flex items-center gap-4 text-white">
            <span class="w-2 h-10 bg-tech-purple block"></span>
            {{ t.collaborations.title }}
          </h3>
          <p class="text-tech-gray mt-4 max-w-2xl text-sm sm:text-base">
            {{ t.collaborations.subtitle }}
          </p>
        </div>

        <div class="hidden sm:flex items-center gap-2 text-sm font-mono text-tech-purple hover:text-white transition-colors cursor-pointer self-start md:self-end">
          <span>{{ t.collaborations.hint }}</span>
          <Icon name="mdi:arrow-right" size="18" />
        </div>
      </div>

      <!-- Modern Minimalist Logo Tiles Grid -->
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        <div
          v-for="(client, index) in collaborations"
          :key="client.id"
          v-motion-slide-visible-once-bottom
          :delay="index * 60"
          class="group relative h-32 sm:h-36 rounded-2xl border border-white/10 bg-[#0f0f15]/90 hover:bg-[#151520] backdrop-blur-md flex items-center justify-center p-6 cursor-pointer transition-all duration-300 hover:border-tech-purple/60 hover:shadow-[0_0_35px_rgba(139,92,246,0.22)] hover:-translate-y-1.5 overflow-hidden"
          @click="openModal(client)"
        >
          <!-- Subtle hover corner glow -->
          <div
            class="absolute inset-0 bg-gradient-to-br from-tech-purple/15 via-transparent to-tech-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          />

          <!-- Badge sector -->
          <span class="absolute top-3 left-3 text-[10px] font-mono text-zinc-500 group-hover:text-tech-purple transition-colors truncate max-w-[80%]">
            {{ client.badge }}
          </span>

          <!-- Logo Container -->
          <div class="relative z-10 flex flex-col items-center justify-center text-center transition-transform duration-300 group-hover:scale-105">
            <template v-if="client.logo">
              <img
                :src="client.logo"
                :alt="client.name"
                class="max-h-12 max-w-[130px] object-contain transition-all duration-300 group-hover:brightness-110"
                loading="lazy"
                onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
              />
              <!-- Fallback if image fails -->
              <div class="hidden flex-col items-center gap-2">
                <Icon :name="client.logoIcon || 'mdi:domain'" size="28" class="text-tech-purple" />
                <span class="text-sm font-bold text-white tracking-wide font-mono">{{ client.name }}</span>
              </div>
            </template>
            <template v-else>
              <Icon :name="client.logoIcon || 'mdi:domain'" size="32" class="text-tech-purple mb-1.5" />
              <span class="text-sm font-bold text-white tracking-wide font-mono">{{ client.name }}</span>
            </template>
          </div>

          <!-- Bottom Action Hint -->
          <div class="absolute bottom-2.5 right-3 text-[11px] font-mono text-zinc-500 group-hover:text-white flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all">
            <Icon name="mdi:arrow-top-right" size="13" />
          </div>
        </div>
      </div>
    </div>

    <!-- Client Detail Modal -->
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
          v-if="isModalOpen && selectedClient"
          class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
          @click.self="closeModal"
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
              class="relative w-full max-w-2xl bg-[#0c0c12] border border-tech-purple/50 rounded-3xl p-6 sm:p-8 shadow-[0_0_70px_rgba(139,92,246,0.35)] overflow-hidden max-h-[90vh] overflow-y-auto"
              @click.stop
            >
              <!-- Close Button -->
              <button
                type="button"
                aria-label="Cerrar modal"
                class="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:bg-white/15 hover:border-white/30 text-tech-gray hover:text-white flex items-center justify-center transition-all cursor-pointer z-20"
                @click="closeModal"
              >
                <Icon name="mdi:close" size="20" />
              </button>

              <!-- Modal Header -->
              <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6 pr-8">
                <div class="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center p-2.5 shrink-0 shadow-inner">
                  <img
                    v-if="selectedClient.logo"
                    :src="selectedClient.logo"
                    :alt="selectedClient.name"
                    class="max-h-12 max-w-full object-contain"
                  />
                  <Icon v-else :name="selectedClient.logoIcon" size="32" class="text-tech-purple" />
                </div>
                <div>
                  <div class="flex flex-wrap items-center gap-2 mb-1">
                    <span class="text-xs font-mono px-2.5 py-0.5 rounded-full bg-tech-purple/10 border border-tech-purple/30 text-tech-purple font-medium">
                      {{ selectedClient.badge }}
                    </span>
                    <span class="text-xs font-mono text-zinc-500">
                      {{ selectedClient.sector }}
                    </span>
                  </div>
                  <h4 class="text-2xl font-bold text-white tracking-tight">
                    {{ selectedClient.name }}
                  </h4>
                </div>
              </div>

              <!-- Tagline & Description -->
              <div class="mb-6 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                <p class="text-sm font-semibold text-tech-purple mb-2">
                  {{ selectedClient.tagline }}
                </p>
                <p class="text-sm text-gray-300 leading-relaxed font-light">
                  {{ selectedClient.description }}
                </p>
              </div>

              <!-- Services Performed List -->
              <div class="mb-6">
                <h5 class="text-xs font-mono text-tech-gray uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Icon name="mdi:check-circle-outline" size="16" class="text-tech-purple" />
                  <span>{{ t.collaborations.modalServicesTitle }}</span>
                </h5>
                <ul class="space-y-2">
                  <li
                    v-for="(service, sIdx) in selectedClient.services"
                    :key="sIdx"
                    class="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300 leading-relaxed font-light"
                  >
                    <span class="w-1.5 h-1.5 rounded-full bg-tech-purple mt-2 shrink-0" />
                    <span>{{ service }}</span>
                  </li>
                </ul>
              </div>

              <!-- Technologies Chip Grid -->
              <div class="mb-8">
                <h5 class="text-xs font-mono text-tech-gray uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Icon name="mdi:code-tags" size="16" class="text-tech-purple" />
                  <span>{{ t.collaborations.modalTechTitle }}</span>
                </h5>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="(tech, tIdx) in selectedClient.technologies"
                    :key="tIdx"
                    class="px-3 py-1 text-xs font-mono rounded-lg bg-tech-purple/10 border border-tech-purple/30 text-purple-300 font-medium"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>

              <!-- Modal Footer Action -->
              <div class="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
                <button
                  type="button"
                  class="text-xs font-mono text-tech-gray hover:text-white transition-colors cursor-pointer"
                  @click="closeModal"
                >
                  {{ t.collaborations.close }}
                </button>
                <button
                  type="button"
                  class="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-tech-purple text-white font-medium hover:bg-opacity-85 hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] transition-all text-xs font-mono flex items-center justify-center gap-2 cursor-pointer"
                  @click="closeModal(); openContactModal();"
                >
                  <span>{{ t.collaborations.startSimilarProject }}</span>
                  <Icon name="mdi:arrow-right" size="14" />
                </button>
              </div>
            </div>
          </Transition>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>
