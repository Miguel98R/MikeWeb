<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import profile from '~/data/profile.json'
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

const collaborations = profile.collaborations as Collaboration[]
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
    <!-- Background subtle gradient glow (centered and smooth without clipping) -->
    <div
      class="absolute inset-0 opacity-5 pointer-events-none"
      style="background-image: radial-gradient(#8b5cf6 1px, transparent 1px); background-size: 50px 50px;"
    />
    <div class="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[450px] bg-tech-purple/10 rounded-full blur-3xl pointer-events-none" />

    <div class="max-w-6xl mx-auto relative z-10">
      <!-- Header Style MongoDB / Modern Tech -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div class="inline-flex items-center gap-2 px-3 py-1 mb-3 text-xs font-mono text-tech-purple border border-tech-purple/30 rounded-full bg-tech-purple/5">
            <Icon name="mdi:handshake-outline" size="16" />
            <span>PORTFOLIO_CLIENTS & PARTNERS</span>
          </div>
          <h3 class="text-3xl md:text-4xl font-bold flex items-center gap-4 text-white">
            <span class="w-2 h-10 bg-tech-purple block"></span>
            Colaboraciones & Clientes
          </h3>
          <p class="text-tech-gray mt-4 max-w-2xl text-sm sm:text-base">
            Empresas, organizaciones e instituciones con las que he colaborado desarrollando software y soluciones en producción.
          </p>
        </div>

        <div class="hidden sm:flex items-center gap-2 text-sm font-mono text-tech-purple hover:text-white transition-colors cursor-pointer self-start md:self-end">
          <span>Haz clic en un logo para ver detalles</span>
          <Icon name="mdi:arrow-right" size="18" />
        </div>
      </div>

      <!-- Modern Minimalist Logo Tiles Grid (MongoDB Style) -->
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

          <!-- Clean Centered Logo -->
          <div class="relative z-10 w-full h-full flex items-center justify-center">
            <img
              v-if="client.logo"
              :src="client.logo"
              :alt="`Logo ${client.name}`"
              class="max-h-16 sm:max-h-20 w-auto max-w-[85%] object-contain opacity-80 group-hover:opacity-100 group-hover:drop-shadow-[0_0_16px_rgba(255,255,255,0.45)] group-hover:scale-105 transition-all duration-300"
              loading="lazy"
            />
            <Icon
              v-else
              :name="client.logoIcon"
              size="48"
              class="text-white group-hover:text-tech-purple transition-colors"
            />
          </div>

          <!-- Subtle hover indicator in bottom-right corner -->
          <div class="absolute bottom-2.5 right-2.5 text-tech-purple/50 group-hover:text-tech-purple transition-colors text-[10px] font-mono opacity-0 group-hover:opacity-100 flex items-center gap-0.5">
            <Icon name="mdi:arrow-top-right" size="14" />
          </div>
        </div>

        <!-- 8th Tile: Call to Action / Open Contact Modal -->
        <div
          v-motion-slide-visible-once-bottom
          :delay="collaborations.length * 60"
          class="group relative h-32 sm:h-36 rounded-2xl border border-dashed border-tech-purple/40 bg-tech-purple/[0.03] hover:bg-tech-purple/10 hover:border-tech-purple backdrop-blur-md flex flex-col items-center justify-center p-5 cursor-pointer transition-all duration-300 hover:shadow-[0_0_35px_rgba(139,92,246,0.25)] hover:-translate-y-1.5 text-center"
          @click="openContactModal"
        >
          <div class="w-10 h-10 rounded-full bg-tech-purple/10 border border-tech-purple/30 flex items-center justify-center mb-2 group-hover:scale-110 group-hover:bg-tech-purple/20 transition-all shadow-inner">
            <Icon name="mdi:plus" size="22" class="text-tech-purple" />
          </div>
          <span class="text-xs font-mono text-gray-200 group-hover:text-white font-semibold">¿Próximo Proyecto?</span>
          <span class="text-[11px] font-mono text-tech-purple group-hover:underline mt-0.5 flex items-center gap-1">
            Trabajemos juntos <Icon name="mdi:arrow-right" size="13" />
          </span>
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
              class="relative w-full max-w-2xl bg-[#0c0c12] border border-tech-purple/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_70px_rgba(139,92,246,0.35)] max-h-[90vh] overflow-y-auto"
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

              <!-- Modal Header with Logo -->
              <div class="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-6 pr-10">
                <div class="h-24 w-44 rounded-2xl bg-white/[0.05] border border-white/15 p-3 flex items-center justify-center shrink-0 shadow-inner">
                  <img
                    v-if="selectedClient.logo"
                    :src="selectedClient.logo"
                    :alt="`Logo ${selectedClient.name}`"
                    class="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.35)]"
                  />
                  <Icon
                    v-else
                    :name="selectedClient.logoIcon"
                    size="48"
                    class="text-white"
                  />
                </div>
                <div>
                  <div class="flex flex-wrap items-center gap-2 mb-1.5">
                    <h3 class="text-2xl font-bold text-white">
                      {{ selectedClient.name }}
                    </h3>
                    <span class="text-xs font-mono border border-tech-purple/40 bg-tech-purple/10 px-2.5 py-0.5 rounded-full text-tech-purple">
                      {{ selectedClient.badge }}
                    </span>
                  </div>
                  <p class="text-xs font-mono mb-2" :class="selectedClient.accentColor">
                    {{ selectedClient.sector }}
                  </p>
                  <p class="text-xs text-tech-gray italic font-light">
                    "{{ selectedClient.tagline }}"
                  </p>
                </div>
              </div>

              <!-- Company Description -->
              <div class="mb-6 p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                <h5 class="text-xs font-mono uppercase text-tech-purple tracking-wider mb-2 flex items-center gap-1.5">
                  <Icon name="mdi:domain" size="15" />
                  Acerca de la empresa
                </h5>
                <p class="text-sm text-gray-300 leading-relaxed">
                  {{ selectedClient.description }}
                </p>
              </div>

              <!-- Services & Developments -->
              <div class="mb-6">
                <h5 class="text-xs font-mono uppercase text-tech-red tracking-wider mb-3 flex items-center gap-1.5">
                  <Icon name="mdi:code-braces-box" size="15" />
                  Desarrollos & Servicios Realizados
                </h5>
                <ul class="space-y-2.5">
                  <li
                    v-for="(service, idx) in selectedClient.services"
                    :key="idx"
                    class="flex items-start gap-3 text-sm text-gray-300 bg-white/[0.02] border border-white/5 p-3 rounded-xl hover:border-white/15 transition-colors"
                  >
                    <Icon name="mdi:check-decagram" size="18" class="text-tech-purple shrink-0 mt-0.5" />
                    <span class="leading-relaxed">{{ service }}</span>
                  </li>
                </ul>
              </div>

              <!-- Technologies Used -->
              <div>
                <h5 class="text-xs font-mono uppercase text-tech-gray tracking-wider mb-3 flex items-center gap-1.5">
                  <Icon name="mdi:layers-triple" size="15" />
                  Stack Tecnológico
                </h5>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="(tech, tIdx) in selectedClient.technologies"
                    :key="tIdx"
                    class="px-3 py-1 text-xs font-mono rounded-lg bg-white/5 border border-white/10 text-gray-200"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>
