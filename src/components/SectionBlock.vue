<script setup lang="ts">
defineProps<{
  title: string;
  eyebrow?: string;
  description?: string;
}>();
</script>

<template>
  <section class="border-t border-slate-200/80 py-14 first:border-t-0 first:pt-0 dark:border-slate-800/80">
    <div class="mb-8 max-w-3xl">
      <p v-if="eyebrow" class="text-xs font-semibold uppercase tracking-[0.28em] text-brand-500">
        {{ eyebrow }}
      </p>
      <h2 class="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
        {{ title }}
      </h2>
      <p v-if="description" class="mt-4 text-base leading-7 text-slate-600 dark:text-slate-400">
        {{ description }}
      </p>
    </div>
    <slot />
  </section>
</template>
