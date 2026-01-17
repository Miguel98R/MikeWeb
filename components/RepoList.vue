<script setup>
import profile from '~/data/profile.json'

// Nota: Idealmente esto vendría de tu composable useGitStats.ts
// Aquí simulamos la respuesta para la UI
const repos = ref([
  { id: 1, name: 'sistema-ventas-pos', desc: 'Sistema de punto de venta con Nuxt y Node.', tech: 'Vue', url: '#', provider: 'github' },
  { id: 2, name: 'api-gateway-microservices', desc: 'Gateway para orquestar microservicios.', tech: 'TypeScript', url: '#', provider: 'gitlab' },
  { id: 3, name: 'docker-dev-env', desc: 'Entornos de desarrollo automatizados.', tech: 'Shell', url: '#', provider: 'github' },
  { id: 4, name: 'inventory-manager', desc: 'Gestión de inventarios en tiempo real.', tech: 'NestJS', url: '#', provider: 'gitlab' },
])
</script>

<template>
  <section id="proyectos" class="py-24 px-6 relative">
    <div class="max-w-6xl mx-auto">
      <div class="flex justify-between items-end mb-12">
        <h3 class="text-3xl font-bold flex items-center gap-3">
          <span class="w-2 h-8 bg-tech-purple block"></span>
          Repositorios
        </h3>
        <div class="flex gap-4 text-sm font-mono">
          <a :href="profile.basics.github" target="_blank" class="hover:text-tech-purple transition-colors flex items-center gap-1">
            <Icon name="mdi:github" /> GitHub
          </a>
          <span class="text-gray-700">|</span>
          <a :href="profile.basics.gitlab" target="_blank" class="hover:text-tech-red transition-colors flex items-center gap-1">
            <Icon name="mdi:gitlab" /> GitLab
          </a>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <article v-for="repo in repos" :key="repo.id"
                 class="border border-white/10 bg-tech-surface/50 p-6 hover:bg-tech-surface transition-colors group">
          <div class="flex justify-between items-start mb-4">
            <div class="flex items-center gap-2">
              <Icon :name="repo.provider === 'github' ? 'mdi:github' : 'mdi:gitlab'"
                    class="opacity-50 group-hover:opacity-100 transition-opacity"
                    :class="repo.provider === 'github' ? 'text-white' : 'text-orange-500'" />
              <h4 class="font-bold text-lg text-white group-hover:text-tech-purple transition-colors">{{ repo.name }}</h4>
            </div>
            <span class="text-xs font-mono border border-white/20 px-2 py-1 rounded text-tech-gray">
              {{ repo.tech }}
            </span>
          </div>

          <p class="text-tech-gray text-sm mb-6">{{ repo.desc }}</p>

          <a :href="repo.url" class="text-xs font-bold uppercase tracking-widest text-white hover:text-tech-red flex items-center gap-2">
            Ver Código <Icon name="mdi:arrow-right" />
          </a>
        </article>
      </div>
    </div>
  </section>
</template>