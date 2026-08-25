<script setup lang="ts">
import profile from '~/data/profile.json'
import { useGitStats } from '~/composables/useGitStats'

const { repos } = useGitStats()

const getLangColor = (tech: string) => {
  const norm = tech.toLowerCase()
  if (norm.includes('javascript') || norm.includes('js')) return 'bg-yellow-400'
  if (norm.includes('typescript') || norm.includes('ts')) return 'bg-blue-400'
  if (norm.includes('vue') || norm.includes('nuxt')) return 'bg-emerald-400'
  if (norm.includes('shell') || norm.includes('bash')) return 'bg-green-400'
  if (norm.includes('css')) return 'bg-pink-400'
  if (norm.includes('node')) return 'bg-emerald-500'
  if (norm.includes('pug')) return 'bg-amber-600'
  return 'bg-tech-purple'
}

const getTechTags = (tech: string) => {
  if (!tech) return []
  return tech.split(/[/,]/).map(t => t.trim()).filter(Boolean)
}
</script>

<template>
  <section id="proyectos" class="py-28 px-6 bg-transparent relative overflow-hidden">
    <!-- Ambient glow -->
    <div class="absolute top-1/3 -right-32 w-96 h-96 bg-tech-purple/10 rounded-full blur-3xl pointer-events-none" />

    <div class="max-w-6xl mx-auto relative z-10">
      <!-- Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div class="inline-flex items-center gap-2 px-3 py-1 mb-3 text-xs font-mono text-tech-purple border border-tech-purple/30 rounded-full bg-tech-purple/5">
            <Icon name="mdi:git" size="16" />
            <span>OPEN_SOURCE & REPOSITORIES</span>
          </div>
          <h3 class="text-3xl md:text-4xl font-bold flex items-center gap-4 text-white">
            <span class="w-2 h-10 bg-tech-purple block"></span>
            Algunos Repositorios
          </h3>
          <p class="text-tech-gray mt-4 max-w-2xl text-sm sm:text-base">
            Proyectos de código abierto, herramientas y librerías públicas disponibles en GitHub.
          </p>
        </div>

        <!-- GitHub Profile Links -->
        <div class="flex flex-wrap gap-3 self-start md:self-end">
          <a
            :href="profile.basics.github"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 hover:border-tech-purple/50 hover:bg-tech-purple/10 text-xs font-mono text-gray-300 hover:text-white transition-all shadow-sm"
          >
            <Icon name="mdi:github" size="18" class="text-white" />
            <span>GitHub Principal</span>
            <Icon name="mdi:arrow-top-right" size="13" class="text-tech-purple" />
          </a>
          <a
            :href="profile.basics.gitlab"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 hover:border-tech-red/50 hover:bg-tech-red/10 text-xs font-mono text-gray-300 hover:text-white transition-all shadow-sm"
          >
            <Icon name="mdi:github" size="18" class="text-white" />
            <span>GitHub Dev</span>
            <Icon name="mdi:arrow-top-right" size="13" class="text-tech-red" />
          </a>
        </div>
      </div>

      <!-- Repositories Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <a
          v-for="(repo, index) in repos"
          :key="repo.id"
          :href="repo.url"
          target="_blank"
          rel="noopener noreferrer"
          v-motion-slide-visible-once-bottom
          :delay="index * 60"
          class="group relative rounded-2xl border border-white/10 bg-tech-surface/75 hover:bg-tech-surface backdrop-blur-md p-6 sm:p-7 transition-all duration-300 hover:border-tech-purple/50 hover:shadow-[0_0_35px_rgba(139,92,246,0.2)] hover:-translate-y-1.5 flex flex-col justify-between"
        >
          <!-- Hover subtle gradient -->
          <div
            class="absolute inset-0 rounded-2xl bg-gradient-to-br from-tech-purple/10 via-transparent to-tech-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          />

          <div class="relative z-10">
            <!-- Top Row: Folder / Git Icon & Visibility Badge -->
            <div class="flex items-center justify-between gap-2 mb-5">
              <div class="w-10 h-10 rounded-xl bg-tech-purple/10 border border-tech-purple/30 flex items-center justify-center text-tech-purple group-hover:scale-110 group-hover:bg-tech-purple/20 transition-all shadow-inner">
                <Icon name="mdi:source-repository" size="20" />
              </div>

              <span class="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                <Icon name="mdi:lock-open-outline" size="12" />
                Público
              </span>
            </div>

            <!-- Repo Name -->
            <h4 class="text-lg sm:text-xl font-bold font-mono text-white group-hover:text-tech-purple transition-colors mb-2.5 break-words">
              {{ repo.name }}
            </h4>

            <!-- Description -->
            <p class="text-gray-300 text-sm leading-relaxed mb-6 font-light">
              {{ repo.desc }}
            </p>

            <!-- Tech Tags Chips -->
            <div class="flex flex-wrap gap-1.5 mb-5">
              <span
                v-for="(tag, tIdx) in getTechTags(repo.tech)"
                :key="tIdx"
                class="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/[0.04] border border-white/5 text-gray-300 group-hover:border-tech-purple/30 transition-colors"
              >
                <span class="w-1.5 h-1.5 rounded-full" :class="getLangColor(tag)" />
                {{ tag }}
              </span>
            </div>
          </div>

          <!-- Bottom Row: Code Link Action -->
          <div class="relative z-10 pt-3.5 border-t border-white/10 flex items-center justify-between text-xs font-mono text-tech-purple group-hover:text-white transition-colors">
            <span class="text-tech-gray flex items-center gap-1.5 group-hover:text-gray-200 transition-colors">
              <Icon name="mdi:github" size="16" />
              Ver Repositorio
            </span>
            <span class="flex items-center gap-1 group-hover:translate-x-1 transition-transform font-bold text-tech-purple">
              Explorar
              <Icon name="mdi:arrow-top-right" size="14" />
            </span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>