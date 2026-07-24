<script setup lang="ts">
import { ArrowDownTrayIcon, ArrowTopRightOnSquareIcon } from "@heroicons/vue/24/outline";
import { computed } from "vue";
import { useI18n } from "@/composables/useI18n";
import { resumePaths } from "@/data/resume";

const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, "");
const { locale, messages } = useI18n();
const resumeUrl = computed(() => `${baseUrl}${resumePaths[locale.value]}`);
</script>

<template>
  <section class="space-y-8">
    <header class="animate-fade-up">
      <p class="text-sm font-semibold uppercase tracking-[0.3em] text-brand-500">{{ messages.metadata.resumeTitle }}</p>
      <h1 class="mt-4 text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">
        {{ messages.resume.title }}
      </h1>
      <p class="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400">
        {{ messages.resume.description }}
      </p>
    </header>

    <div class="flex flex-wrap gap-3">
      <a :href="resumeUrl" download class="button-primary">
        <ArrowDownTrayIcon class="h-4 w-4" />
        {{ messages.actions.downloadResume }}
      </a>
      <a :href="resumeUrl" target="_blank" rel="noreferrer" class="button-secondary">
        <ArrowTopRightOnSquareIcon class="h-4 w-4" />
        {{ messages.actions.openPdf }}
      </a>
      <RouterLink to="/" class="button-secondary">
        {{ messages.actions.returnHome }}
      </RouterLink>
    </div>
  </section>
</template>
