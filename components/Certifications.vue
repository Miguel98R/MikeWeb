<script setup>
import profile from '~/data/profile.json'
</script>

<template>
  <section class="py-24 px-6 bg-tech-black border-t border-white/5">
    <div class="max-w-4xl mx-auto text-center">
      <h3 class="text-2xl font-bold mb-10 text-white">Certificaciones & Logros</h3>

      <div class="space-y-4">
        <a v-for="(cert, index) in profile.certifications" :key="index"
           :href="cert.url"
           target="_blank"
           class="block bg-tech-surface p-6 border-l-4 border-transparent hover:border-tech-purple hover:bg-white/5 transition-all duration-300 text-left group">
          <div class="flex justify-between items-center">
            <div>
              <h4 class="text-lg font-bold text-white group-hover:text-tech-purple transition-colors">
                {{ cert.title }}
              </h4>
              <p class="text-sm text-tech-gray mt-1">Emitido por: {{ cert.issuer }}</p>
            </div>
            <span class="text-xs font-mono text-tech-gray border border-white/10 px-3 py-1 rounded">
              {{ cert.date }}
            </span>
          </div>
        </a>
      </div>

      <div class="mt-8">
        <a :href="profile.basics.linkedin" target="_blank"
           class="text-sm text-tech-gray hover:text-blue-400 underline decoration-dotted">
          Ver todas en LinkedIn
        </a>
      </div>
    </div>
  </section>
</template>