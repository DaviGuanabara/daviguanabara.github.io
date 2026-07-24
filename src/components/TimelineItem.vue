<script setup lang="ts">
defineProps<{
  degree: string;
  institution: string;
  period: string;
  details: string;
}>();
</script>

<template>
  <article class="relative pl-8">
    <span class="absolute left-0 top-1 h-3 w-3 rounded-full bg-brand-500"></span>
    <span class="absolute left-[5px] top-5 h-full w-px bg-slate-300 dark:bg-slate-700"></span>
    <div class="py-2">
      <h3 class="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">
        {{ degree }}
      </h3>
      <p class="mt-2 text-sm font-medium text-brand-500">{{ period }}</p>
      <p class="mt-2 text-sm text-slate-700 dark:text-slate-300">{{ institution }}</p>
      <p class="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
        {{ details }}
      </p>
    </div>
  </article>
</template>
