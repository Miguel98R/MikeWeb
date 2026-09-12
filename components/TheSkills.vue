<script setup lang="ts">
import { computed } from 'vue'
import { useLanguage } from '~/composables/useLanguage'

const { profile, t } = useLanguage()

interface SkillGroupConfig {
  key: string
  icon: string
  color: string
  accentBg: string
  accentBorder: string
}

const skillGroupConfigs: SkillGroupConfig[] = [
  {
    key: 'backend',
    icon: 'mdi:server',
    color: 'text-emerald-400',
    accentBg: 'bg-emerald-500/10',
    accentBorder: 'border-emerald-500/30'
  },
  {
    key: 'frontend',
    icon: 'mdi:monitor-dashboard',
    color: 'text-cyan-400',
    accentBg: 'bg-cyan-500/10',
    accentBorder: 'border-cyan-500/30'
  },
  {
    key: 'ai_technologies',
    icon: 'mdi:robot-excited-outline',
    color: 'text-purple-400',
    accentBg: 'bg-purple-500/10',
    accentBorder: 'border-purple-500/30'
  },
  {
    key: 'devops_cloud',
    icon: 'mdi:cloud-cog-outline',
    color: 'text-amber-400',
    accentBg: 'bg-amber-500/10',
    accentBorder: 'border-amber-500/30'
  },
  {
    key: 'databases',
    icon: 'mdi:database',
    color: 'text-blue-400',
    accentBg: 'bg-blue-500/10',
    accentBorder: 'border-blue-500/30'
  },
  {
    key: 'mobile',
    icon: 'mdi:cellphone-link',
    color: 'text-teal-400',
    accentBg: 'bg-teal-500/10',
    accentBorder: 'border-teal-500/30'
  },
  {
    key: 'tools',
    icon: 'mdi:tools',
    color: 'text-tech-red',
    accentBg: 'bg-tech-red/10',
    accentBorder: 'border-tech-red/30'
  },
  {
    key: 'methodologies',
    icon: 'mdi:compass-outline',
    color: 'text-indigo-400',
    accentBg: 'bg-indigo-500/10',
    accentBorder: 'border-indigo-500/30'
  }
]

const skillGroups = computed(() => {
  const titles = t.value.skills.groupTitles as Record<string, string>
  return skillGroupConfigs.map(g => ({
    ...g,
    title: titles[g.key] || g.key
  }))
})

const getSkills = (key: string) => {
  return (profile.value.skills as Record<string, string[]>)[key] || []
}
</script>

<template>
  <section id="skills" class="py-28 px-6 bg-transparent relative overflow-hidden scroll-mt-20">
    <!-- Ambient glow -->
    <div class="absolute -top-32 left-1/4 w-96 h-96 bg-tech-purple/10 rounded-full blur-3xl pointer-events-none" />

    <div class="max-w-6xl mx-auto relative z-10">
      <!-- Header -->
      <div class="mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 mb-3 text-xs font-mono text-tech-purple border border-tech-purple/30 rounded-full bg-tech-purple/5">
          <Icon name="mdi:code-tags" size="16" />
          <span>{{ t.skills.tag }}</span>
        </div>
        <h3 class="text-3xl md:text-4xl font-bold text-white flex items-center gap-4">
          <span class="w-2 h-10 bg-tech-purple block"></span>
          {{ t.skills.title }}
        </h3>
        <p class="text-tech-gray mt-4 max-w-2xl text-sm sm:text-base">
          {{ t.skills.subtitle }}
        </p>
      </div>

      <!-- Skills Cards Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div
          v-for="(group, index) in skillGroups"
          :key="group.key"
          v-motion-slide-visible-once-bottom
          :delay="index * 60"
          class="group relative rounded-2xl border border-white/10 bg-tech-surface/75 hover:bg-tech-surface backdrop-blur-md p-6 transition-all duration-300 hover:border-tech-purple/50 hover:shadow-[0_0_35px_rgba(139,92,246,0.18)] hover:-translate-y-1.5 flex flex-col justify-between"
        >
          <!-- Hover subtle gradient -->
          <div
            class="absolute inset-0 rounded-2xl bg-gradient-to-br from-tech-purple/10 via-transparent to-tech-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          />

          <div class="relative z-10">
            <!-- Group Header with Icon and count badge -->
            <div class="flex items-center justify-between gap-3 mb-5">
              <div class="flex items-center gap-3">
                <div
                  class="w-10 h-10 rounded-xl flex items-center justify-center border transition-transform group-hover:scale-110 shadow-inner"
                  :class="[group.accentBg, group.accentBorder, group.color]"
                >
                  <Icon :name="group.icon" size="22" />
                </div>
                <h4 class="text-base font-bold text-white group-hover:text-tech-purple transition-colors">
                  {{ group.title }}
                </h4>
              </div>

              <span class="text-[10px] font-mono text-zinc-500 bg-white/[0.03] border border-white/10 px-2 py-0.5 rounded-full">
                {{ getSkills(group.key).length }}
              </span>
            </div>

            <!-- Skills List Chips -->
            <ul class="flex flex-wrap gap-2 mb-2">
              <li
                v-for="(skill, i) in getSkills(group.key)"
                :key="i"
                class="px-2.5 py-1 text-xs font-mono rounded-lg border border-white/10 bg-white/[0.02] text-gray-300 hover:text-white hover:border-tech-purple/60 hover:bg-tech-purple/10 hover:shadow-[0_0_12px_rgba(139,92,246,0.25)] transition-all cursor-default"
              >
                {{ skill }}
              </li>
            </ul>
          </div>

          <!-- Bottom micro-indicator -->
          <div class="relative z-10 pt-3 mt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-500">
            <span>{{ t.skills.production }}</span>
            <span class="text-tech-purple">✓ 100%</span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>