<script setup lang="ts">
import { ArrowDownTrayIcon, ArrowTopRightOnSquareIcon } from "@heroicons/vue/24/outline";
import { resumePath } from "@/data/resume";

const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, "");
const resumeUrl = `${baseUrl}${resumePath}`;
</script>

<template>
  <section class="space-y-8">
    <header class="animate-fade-up">
      <p class="text-sm font-semibold uppercase tracking-[0.3em] text-brand-500">Resume</p>
      <h1 class="mt-4 text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">
        Resume Ready For Download
      </h1>
      <p class="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400">
        The resume is now published as a PDF asset inside the portfolio repository, which keeps the download lightweight and fully compatible with GitHub Pages.
      </p>
    </header>

    <div class="flex flex-wrap gap-3">
      <a :href="resumeUrl" download class="button-primary">
        <ArrowDownTrayIcon class="h-4 w-4" />
        Download resume
      </a>
      <a :href="resumeUrl" target="_blank" rel="noreferrer" class="button-secondary">
        <ArrowTopRightOnSquareIcon class="h-4 w-4" />
        Open PDF
      </a>
      <RouterLink to="/" class="button-secondary">
        Return home
      </RouterLink>
    </div>
  </section>
</template>
