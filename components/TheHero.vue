<script setup>
import profile from '~/data/profile.json'
</script>

<template>
  <section class="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-20">
    <div class="absolute inset-0 pointer-events-none opacity-10"
         style="background-image: radial-gradient(#8b5cf6 1px, transparent 1px); background-size: 50px 50px;">
    </div>

    <div class="max-w-4xl w-full grid md:grid-cols-2 gap-12 items-center z-10">

      <!-- LEFT -->
      <div v-motion-slide-visible-once-left>
        <div
            class="inline-block px-3 py-1 mb-4 text-xs font-mono text-tech-purple border border-tech-purple/30 rounded-full bg-tech-purple/5">
          Tech_Lead_Architect_v2.0
        </div>

        <h1 class="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-white">
          {{ profile.basics.name }}
        </h1>

        <h2
            class=" font-mono mb-6 bg-clip-text text-transparent bg-gradient-to-r from-tech-purple via-white to-tech-red">
          {{ profile.basics.role }}
        </h2>

        <p class="text-tech-gray text-lg mb-8 leading-relaxed max-w-md">
          {{ profile.basics.bio }}
        </p>

        <div class="flex flex-wrap gap-4">
          <a href="#proyectos"
             class="px-8 py-3 bg-tech-purple text-white font-bold rounded-sm hover:bg-opacity-80 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all duration-300">
            Ver Proyectos
          </a>
          <a href="/public/CV_Jose_Miguel_Rosas_Jimenez.pdf" download
             class="px-8 py-3 border border-tech-red text-tech-red font-bold rounded-sm hover:bg-tech-red hover:text-black transition-all duration-300 flex items-center gap-2">
            <Icon name="mdi:download" /> CV
          </a>
        </div>
      </div>

      <!-- RIGHT -->
      <div class="relative hidden md:block" v-motion-fade-visible-once>
        <div
            class="w-full h-80 bg-gradient-to-br from-tech-purple/20 to-tech-red/20 rounded-lg backdrop-blur-sm border border-white/10 relative overflow-hidden group">

          <div class="absolute top-0 left-0 w-full h-1 bg-tech-purple shadow-[0_0_15px_#8b5cf6] animate-scan"></div>

          <div class="p-8 font-mono text-sm text-tech-purple/70">
            <p>> booting_system...</p>
            <p>> loading_core_modules...</p>
            <p class="text-white">> status: <span class="text-tech-green-400">PRODUCTION_READY</span></p>

            <div class="mt-4 p-4 border border-white/10 rounded bg-black/40">
              <code>
                const skillSet = [<br>
                &nbsp;&nbsp;'Node.js / NestJS',<br>
                &nbsp;&nbsp;'Nuxt 3 / Vue',<br>
                &nbsp;&nbsp;'MongoDB / PostgreSQL / Redis',<br>
                &nbsp;&nbsp;'AWS (EC2, ECS, S3)',<br>
                &nbsp;&nbsp;'Docker / CI-CD',<br>
                &nbsp;&nbsp;'System Architecture'<br>
                ];
              </code>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
@keyframes scan {
  0% { top: 0%; opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { top: 100%; opacity: 0; }
}
.animate-scan {
  animation: scan 3s linear infinite;
}
</style>