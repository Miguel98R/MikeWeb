<script setup lang="ts">
import { useLanguage } from '~/composables/useLanguage'
import { useContactModal } from '~/composables/useContactModal'

const { t } = useLanguage()
const { openContactModal } = useContactModal()
</script>

<template>
  <section class="min-h-[90vh] flex items-center justify-center relative overflow-hidden px-4 sm:px-6 pt-20 sm:pt-24 pb-14 sm:pb-16 w-full max-w-full">
    <!-- Ambient Tech Glow Background (Clipped inside overflow-hidden) -->
    <div
      class="absolute inset-0 pointer-events-none opacity-10"
      style="background-image: radial-gradient(#8b5cf6 1px, transparent 1px); background-size: 40px 40px;"
    />
    <div class="absolute -top-32 left-1/2 -translate-x-1/2 w-full max-w-[650px] h-[350px] sm:h-[450px] bg-gradient-to-b from-tech-purple/20 to-tech-red/10 rounded-full blur-3xl pointer-events-none" />

    <div class="max-w-6xl w-full min-w-0 grid lg:grid-cols-12 gap-10 lg:gap-8 items-center z-10">

      <!-- LEFT: Value Proposition & CTAs (7 cols) -->
      <div class="lg:col-span-7 flex flex-col items-start w-full min-w-0">

        <!-- Tech Studio Badge -->
        <div class="inline-flex items-center gap-2 px-3 py-1 mb-5 text-[11px] sm:text-xs font-mono text-tech-purple border border-tech-purple/30 rounded-full bg-tech-purple/10 backdrop-blur-md shadow-[0_0_15px_rgba(139,92,246,0.2)] max-w-full">
          <span class="w-2 h-2 rounded-full bg-tech-purple animate-ping shrink-0" />
          <span class="font-bold tracking-wide truncate">{{ t.companyHero.tag }}</span>
        </div>

        <!-- Main Headline (Fluid responsive typography) -->
        <h1 class="text-2xl min-[360px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.2] sm:leading-[1.1] mb-5 sm:mb-6 break-words [overflow-wrap:anywhere] w-full">
          {{ t.companyHero.title }}
        </h1>

        <!-- Subtitle -->
        <p class="text-tech-gray text-xs sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 max-w-2xl font-light w-full">
          {{ t.companyHero.subtitle }}
        </p>

        <!-- High-Impact Action CTAs (Stack on mobile, row on tablet/desktop) -->
        <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto mb-8 sm:mb-10">
          <!-- Primary CTA: Cotizar Proyecto -->
          <button
            type="button"
            class="w-full sm:w-auto min-h-[44px] px-7 py-3.5 bg-tech-purple text-white font-bold rounded-xl hover:bg-opacity-90 hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer font-sans text-sm sm:text-base"
            @click="openContactModal"
          >
            <Icon name="mdi:rocket-launch-outline" size="20" />
            <span>{{ t.companyHero.ctaQuote }}</span>
          </button>

          <!-- Secondary CTA: Casos de Éxito -->
          <a
            href="#colaboraciones"
            class="w-full sm:w-auto min-h-[44px] px-5 py-3.5 border border-white/15 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/30 text-white font-medium rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            <Icon name="mdi:briefcase-check-outline" size="20" class="text-tech-red" />
            <span>{{ t.companyHero.ctaCases }}</span>
          </a>

          <!-- CEO Pill Link -->
          <NuxtLink
            to="/acerca-del-ceo"
            class="w-full sm:w-auto min-h-[44px] px-4 py-3.5 border border-tech-purple/30 text-zinc-300 hover:text-white hover:border-tech-purple hover:bg-tech-purple/10 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 font-mono text-xs"
          >
            <Icon name="mdi:account-tie" size="18" class="text-tech-purple" />
            <span>{{ t.companyHero.ctaCeo }}</span>
            <Icon name="mdi:arrow-right" size="14" class="text-zinc-500" />
          </NuxtLink>
        </div>

        <!-- Metrics Grid (Responsive 2 cols mobile, 4 cols tablet/desktop) -->
        <div class="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-5 sm:pt-6 border-t border-white/10">
          <div>
            <div class="text-xl sm:text-2xl lg:text-3xl font-mono font-bold text-white tracking-tight">
              {{ t.companyHero.metrics.exp }}
            </div>
            <div class="text-[11px] sm:text-xs text-zinc-400 font-sans mt-0.5 leading-snug">
              {{ t.companyHero.metrics.expLabel }}
            </div>
          </div>
          <div>
            <div class="text-xl sm:text-2xl lg:text-3xl font-mono font-bold text-tech-purple tracking-tight">
              {{ t.companyHero.metrics.projects }}
            </div>
            <div class="text-[11px] sm:text-xs text-zinc-400 font-sans mt-0.5 leading-snug">
              {{ t.companyHero.metrics.projectsLabel }}
            </div>
          </div>
          <div>
            <div class="text-xl sm:text-2xl lg:text-3xl font-mono font-bold text-tech-red tracking-tight">
              {{ t.companyHero.metrics.uptime }}
            </div>
            <div class="text-[11px] sm:text-xs text-zinc-400 font-sans mt-0.5 leading-snug">
              {{ t.companyHero.metrics.uptimeLabel }}
            </div>
          </div>
          <div>
            <div class="text-xl sm:text-2xl lg:text-3xl font-mono font-bold text-emerald-400 tracking-tight">
              {{ t.companyHero.metrics.clean }}
            </div>
            <div class="text-[11px] sm:text-xs text-zinc-400 font-sans mt-0.5 leading-snug">
              {{ t.companyHero.metrics.cleanLabel }}
            </div>
          </div>
        </div>

      </div>

      <!-- RIGHT: Interactive Enterprise Architecture Monitor (5 cols) -->
      <div class="lg:col-span-5 relative w-full min-w-0">
        <div class="w-full rounded-2xl bg-[#0b0b12]/90 border border-white/10 backdrop-blur-xl p-4 sm:p-6 lg:p-7 relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] group">

          <!-- Top Cyber Scan Line -->
          <div class="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-tech-purple to-transparent shadow-[0_0_15px_#8b5cf6] animate-scan" />

          <!-- Terminal Bar -->
          <div class="flex items-center justify-between pb-3.5 mb-4 border-b border-white/10 font-mono text-xs gap-2">
            <div class="flex items-center gap-1.5 min-w-0">
              <span class="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block shrink-0" />
              <span class="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block shrink-0" />
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block shrink-0" />
              <span class="text-zinc-500 ml-1 text-[11px] truncate">{{ t.companyHero.terminal.title }}</span>
            </div>
            <span class="flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold text-[10px] shrink-0">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {{ t.companyHero.terminal.status }}
            </span>
          </div>

          <!-- Architecture Visual Stack Blocks -->
          <div class="space-y-2.5 font-mono text-xs">
            <!-- Node 1 -->
            <div class="p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-tech-purple/50 transition-all flex items-center justify-between gap-2">
              <div class="flex items-center gap-2.5 min-w-0">
                <div class="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-tech-purple/10 border border-tech-purple/30 flex items-center justify-center text-tech-purple shrink-0">
                  <Icon name="mdi:layers-triple-outline" size="16" />
                </div>
                <div class="min-w-0">
                  <div class="font-bold text-white text-xs truncate">01 Core Architecture</div>
                  <div class="text-[10px] sm:text-[11px] text-zinc-400 truncate">NestJS · Nuxt 3 · TypeScript</div>
                </div>
              </div>
              <span class="text-[9px] sm:text-[10px] text-tech-purple bg-tech-purple/10 px-2 py-0.5 rounded shrink-0">Scalable</span>
            </div>

            <!-- Node 2 -->
            <div class="p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-tech-red/50 transition-all flex items-center justify-between gap-2">
              <div class="flex items-center gap-2.5 min-w-0">
                <div class="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-tech-red/10 border border-tech-red/30 flex items-center justify-center text-tech-red shrink-0">
                  <Icon name="mdi:robot-excited-outline" size="16" />
                </div>
                <div class="min-w-0">
                  <div class="font-bold text-white text-xs truncate">02 AI Agents & Chatbots</div>
                  <div class="text-[10px] sm:text-[11px] text-zinc-400 truncate">WhatsApp Cloud · RAG · LLMs</div>
                </div>
              </div>
              <span class="text-[9px] sm:text-[10px] text-tech-red bg-tech-red/10 px-2 py-0.5 rounded shrink-0">Smart</span>
            </div>

            <!-- Node 3 -->
            <div class="p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-blue-500/50 transition-all flex items-center justify-between gap-2">
              <div class="flex items-center gap-2.5 min-w-0">
                <div class="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                  <Icon name="mdi:aws" size="16" />
                </div>
                <div class="min-w-0">
                  <div class="font-bold text-white text-xs truncate">03 Cloud & DevOps</div>
                  <div class="text-[10px] sm:text-[11px] text-zinc-400 truncate">AWS (ECS/EC2) · Docker · CI/CD</div>
                </div>
              </div>
              <span class="text-[9px] sm:text-[10px] text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded shrink-0">99.9% Up</span>
            </div>

            <!-- Node 4 -->
            <div class="p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/50 transition-all flex items-center justify-between gap-2">
              <div class="flex items-center gap-2.5 min-w-0">
                <div class="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <Icon name="mdi:database-sync-outline" size="16" />
                </div>
                <div class="min-w-0">
                  <div class="font-bold text-white text-xs truncate">04 High Reliability Data</div>
                  <div class="text-[10px] sm:text-[11px] text-zinc-400 truncate">PostgreSQL · MongoDB · Redis</div>
                </div>
              </div>
              <span class="text-[9px] sm:text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded shrink-0">Fast I/O</span>
            </div>
          </div>

          <!-- Terminal Footer -->
          <div class="mt-4 pt-3.5 border-t border-white/5 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-zinc-500">
            <span class="flex items-center gap-1.5">
              <span class="text-tech-purple">&gt;</span> ready_for_deployment
            </span>
            <span class="text-zinc-600">Enterprise SLA</span>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>
