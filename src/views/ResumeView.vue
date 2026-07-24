<script setup lang="ts">
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/24/outline";
</script>

<template>
  <section class="space-y-8">
    <header class="animate-fade-up">
      <p class="text-sm font-semibold uppercase tracking-[0.3em] text-brand-500">Resume</p>
      <h1 class="mt-4 text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">
        Public Resume Link Not Yet Added
      </h1>
      <p class="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400">
        This route is intentionally kept ready for a future public PDF or external resume link, without fabricating a document that is not yet available in the repository or verified public sources.
      </p>
    </header>

    <RouterLink to="/" class="button-secondary">
      Return home
      <ArrowTopRightOnSquareIcon class="h-4 w-4" />
    </RouterLink>
  </section>
</template>
