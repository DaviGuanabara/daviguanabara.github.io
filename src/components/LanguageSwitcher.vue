<script setup lang="ts">
import { useI18n } from "@/composables/useI18n";

const { locale, messages, setLocale } = useI18n();
</script>

<template>
  <div
    class="inline-flex items-center gap-1 rounded-2xl border border-slate-300 bg-white p-1 dark:border-slate-700 dark:bg-slate-900"
    :aria-label="messages.language.switcherLabel"
  >
    <button
      type="button"
      class="rounded-xl px-3 py-2 text-xs font-semibold transition-colors"
      :class="locale === 'en'
        ? 'bg-brand-500 text-slate-950'
        : 'text-slate-600 hover:text-brand-500 dark:text-slate-300 dark:hover:text-brand-400'"
      @click="setLocale('en')"
    >
      EN
    </button>
    <button
      type="button"
      class="rounded-xl px-3 py-2 text-xs font-semibold transition-colors"
      :class="locale === 'pt'
        ? 'bg-brand-500 text-slate-950'
        : 'text-slate-600 hover:text-brand-500 dark:text-slate-300 dark:hover:text-brand-400'"
      @click="setLocale('pt')"
    >
      PT
    </button>
  </div>
</template>
