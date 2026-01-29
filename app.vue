<template>
  <div>
    <NuxtLoadingIndicator color="var(--tech-red)" :height="3" />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>

</script>

<style>
/* Transiciones globales entre páginas (si agregas más en el futuro) */
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>