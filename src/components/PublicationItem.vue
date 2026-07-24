<script setup lang="ts">
import { AcademicCapIcon, IdentificationIcon } from "@heroicons/vue/24/outline";
import type { Publication } from "@/data/types";

defineProps<{
  publication: Publication;
}>();
</script>

<template>
  <article class="border-t border-slate-200/80 py-8 first:border-t-0 dark:border-slate-800/80">
    <div class="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
      <div class="max-w-3xl">
        <p class="text-sm text-slate-500 dark:text-slate-500">{{ publication.venue }} • {{ publication.year }}</p>
        <h3 class="mt-2 text-xl font-semibold tracking-tight text-slate-950 dark:text-white">
          {{ publication.title }}
        </h3>
        <p class="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
          {{ publication.authors }}
        </p>
        <p class="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
          {{ publication.abstract }}
        </p>
        <p class="mt-4 text-sm leading-7 text-slate-500 dark:text-slate-500">
          {{ publication.citation }}
        </p>
      </div>

      <div class="flex flex-wrap gap-3 text-sm">
        <a :href="publication.doi" target="_blank" rel="noreferrer" class="button-secondary">
          <AcademicCapIcon class="h-4 w-4" />
          DOI
        </a>
        <a :href="publication.scholar" target="_blank" rel="noreferrer" class="button-secondary">
          <AcademicCapIcon class="h-4 w-4" />
          Scholar
        </a>
        <a :href="publication.orcid" target="_blank" rel="noreferrer" class="button-secondary">
          <IdentificationIcon class="h-4 w-4" />
          ORCID
        </a>
      </div>
    </div>
  </article>
</template>
