<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{
  error: NuxtError
}>()

useHead({
  title: `${props.error?.statusCode || 404} · Página no encontrada`,
  meta: [
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="min-h-screen bg-[#050505] text-white font-sans flex items-center justify-center px-6 relative overflow-hidden">
    <div
      class="fixed inset-0 z-0 pointer-events-none opacity-[0.03]"
      style="background-image: url(&quot;data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E&quot;);"
    />

    <div class="relative z-10 max-w-lg w-full text-center p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl shadow-2xl">
      <div class="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-red-500/10 border border-red-500/30 mb-6 text-red-400">
        <span class="font-mono text-3xl font-bold">{{ error?.statusCode || 404 }}</span>
      </div>

      <h1 class="text-2xl md:text-3xl font-bold mb-3 tracking-tight">
        {{ error?.statusCode === 404 ? 'Página no encontrada' : 'Ocurrió un error inesperado' }}
      </h1>

      <p class="text-zinc-400 text-sm mb-8 leading-relaxed">
        {{ error?.statusCode === 404
          ? 'La ruta a la que intentas acceder no existe, ha sido movida o ya no está disponible.'
          : (error?.message || 'Ha ocurrido un error en el servidor.') }}
      </p>

      <button
        type="button"
        @click="handleError"
        class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold transition-all shadow-lg shadow-purple-600/20 cursor-pointer"
      >
        <span>&larr; Volver al inicio</span>
      </button>
    </div>
  </div>
</template>
