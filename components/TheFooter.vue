<script setup>
import profile from '~/data/profile.json'
</script>

<template>
  <footer id="contacto" class="py-14 border-t border-white/10 bg-black text-center">
    <div class="max-w-4xl mx-auto px-6">

      <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">
        ¿Hablamos de tu próximo proyecto?
      </h2>

      <p class="text-tech-gray mb-10 max-w-xl mx-auto">
        Arquitectura, desarrollo y escalamiento de software listo para producción.
      </p>

      <div class="flex justify-center gap-10 mb-10">
        <!-- Email -->
        <a
            :href="`mailto:${profile.basics.email}`"
            title="Email"
            class="text-tech-gray hover:text-tech-red hover:scale-110 transition-all"
        >
          <Icon name="simple-icons:gmail" size="26" />
        </a>

        <!-- WhatsApp -->
        <a
            :href="profile.basics.whatsapp"
            target="_blank"
            rel="noopener"
            title="WhatsApp"
            class="text-tech-gray hover:text-green-500 hover:scale-110 transition-all"
        >
          <Icon name="simple-icons:whatsapp" size="26" />
        </a>

        <!-- LinkedIn -->
        <a
            :href="profile.basics.linkedin"
            target="_blank"
            rel="noopener"
            title="LinkedIn"
            class="text-tech-gray hover:text-blue-500 hover:scale-110 transition-all"
        >
          <Icon name="simple-icons:linkedin" size="26" />
        </a>

        <!-- GitHub -->
        <a
            :href="profile.basics.github"
            target="_blank"
            rel="noopener"
            title="GitHub"
            class="text-tech-gray hover:text-white hover:scale-110 transition-all"
        >
          <Icon name="simple-icons:github" size="26" />
        </a>
      </div>

      <div class="flex flex-col gap-2 items-center text-xs text-zinc-600 font-mono">
        <p>
          © {{ new Date().getFullYear() }} {{ profile.basics.name }} · MikeRosasDev
        </p>
        <NuxtLink to="/aviso-de-privacidad" class="hover:text-tech-purple transition-colors underline">
          Aviso de Privacidad
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>