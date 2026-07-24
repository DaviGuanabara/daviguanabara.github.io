<script setup lang="ts">
import { MoonIcon, SunIcon } from "@heroicons/vue/24/outline";
import { useTheme } from "@/composables/useTheme";

const { theme, toggleTheme } = useTheme();
</script>

<template>
  <button
    type="button"
    class="inline-flex rounded-2xl border border-slate-300 bg-white p-2 text-slate-700 transition-all duration-300 hover:border-brand-400 hover:text-brand-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-brand-500 dark:hover:text-brand-400"
    :aria-label="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
    @click="toggleTheme"
  >
    <SunIcon v-if="theme === 'dark'" class="h-5 w-5" />
    <MoonIcon v-else class="h-5 w-5" />
  </button>
</template>
