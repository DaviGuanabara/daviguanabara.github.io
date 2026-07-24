<script setup lang="ts">
import { AcademicCapIcon, IdentificationIcon } from "@heroicons/vue/24/outline";
import { useI18n } from "@/composables/useI18n";
import type { Publication } from "@/data/types";

const props = defineProps<{
  publication: Publication;
}>();

const { localize, messages } = useI18n();
</script>

<template>
  <article class="border-t border-slate-200/80 py-8 first:border-t-0 dark:border-slate-800/80">
    <div class="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
      <div class="max-w-3xl">
        <p class="text-sm text-slate-500 dark:text-slate-500">{{ localize(props.publication.venue) }} • {{ props.publication.year }}</p>
        <h3 class="mt-2 text-xl font-semibold tracking-tight text-slate-950 dark:text-white">
          {{ localize(props.publication.title) }}
        </h3>
        <p class="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
          {{ localize(props.publication.authors) }}
        </p>
        <p class="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
          {{ localize(props.publication.abstract) }}
        </p>
        <p class="mt-4 text-sm leading-7 text-slate-500 dark:text-slate-500">
          {{ localize(props.publication.citation) }}
        </p>
      </div>

      <div class="flex flex-wrap gap-3 text-sm">
        <a :href="props.publication.doi" target="_blank" rel="noreferrer" class="button-secondary">
          <AcademicCapIcon class="h-4 w-4" />
          {{ messages.actions.doi }}
        </a>
        <a :href="props.publication.scholar" target="_blank" rel="noreferrer" class="button-secondary">
          <AcademicCapIcon class="h-4 w-4" />
          {{ messages.actions.scholar }}
        </a>
        <a :href="props.publication.orcid" target="_blank" rel="noreferrer" class="button-secondary">
          <IdentificationIcon class="h-4 w-4" />
          {{ messages.actions.orcid }}
        </a>
      </div>
    </div>
  </article>
</template>
