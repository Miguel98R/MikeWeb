<script setup>
import profile from '~/data/profile.json'
</script>

<template>
  <footer class="py-12 border-t border-white/10 bg-black text-center">
    <div class="max-w-4xl mx-auto px-6">
      <h2 class="text-2xl font-bold text-white mb-8">¿Hablamos de tu próximo proyecto?</h2>

      <div class="flex justify-center gap-8 mb-10">
        <a :href="profile.basics.email" title="Email" class="text-tech-gray hover:text-tech-red hover:scale-110 transition-all duration-300">
          <Icon name="mdi:email" size="32" />
        </a>
        <a :href="profile.basics.whatsapp" title="WhatsApp" class="text-tech-gray hover:text-green-500 hover:scale-110 transition-all duration-300">
          <Icon name="mdi:whatsapp" size="32" />
        </a>
        <a :href="profile.basics.linkedin" title="LinkedIn" class="text-tech-gray hover:text-blue-500 hover:scale-110 transition-all duration-300">
          <Icon name="mdi:linkedin" size="32" />
        </a>
        <a :href="profile.basics.facebook" title="Facebook" class="text-tech-gray hover:text-blue-600 hover:scale-110 transition-all duration-300">
          <Icon name="mdi:facebook" size="32" />
        </a>
      </div>

      <p class="text-xs text-zinc-600 font-mono">
        © {{ new Date().getFullYear() }} {{ profile.basics.name }}. Built with Nuxt 3 & Tailwind.
      </p>
    </div>
  </footer>
</template>