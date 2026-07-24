<script setup lang="ts">
import SiteFooter from "./components/SiteFooter.vue";
import SiteHeader from "./components/SiteHeader.vue";
</script>

<template>
  <div
    class="min-h-screen bg-white text-slate-900 transition-colors duration-300 ease-elegant dark:bg-slate-950 dark:text-slate-50"
  >
    <SiteHeader />
    <main class="mx-auto max-w-6xl px-6 pb-20 pt-10 sm:px-8 lg:px-10">
      <RouterView />
    </main>
    <SiteFooter />
  </div>
</template>
