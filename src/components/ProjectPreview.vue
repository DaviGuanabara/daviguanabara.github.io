<script setup lang="ts">
import { ArrowRightIcon } from "@heroicons/vue/24/outline";
import type { Project } from "@/data/types";
import { useI18n } from "@/composables/useI18n";
import { resolveAssetPath } from "@/utils/resolveAssetPath";

const props = defineProps<{
  project: Project;
}>();

const { localize, messages } = useI18n();
</script>

<template>
  <article class="grid gap-8 border-t border-slate-200/80 py-10 first:border-t-0 dark:border-slate-800/80 lg:grid-cols-[1fr_1fr] lg:items-start">
    <div class="space-y-4">
      <p class="text-xs font-semibold uppercase tracking-[0.24em] text-brand-500">{{ messages.labels.selectedProject }}</p>
      <div>
        <h3 class="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
          {{ localize(props.project.title) }}
        </h3>
        <p class="mt-3 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400">
          {{ localize(props.project.summary) }}
        </p>
      </div>
      <div class="flex flex-wrap gap-2">
        <span v-for="technology in localize(props.project.technologies)" :key="technology" class="chip">
          {{ technology }}
        </span>
      </div>
      <div v-if="props.project.links.length" class="flex flex-wrap gap-3">
        <a
          v-for="link in props.project.links"
          :key="link.href"
          :href="link.href"
          target="_blank"
          rel="noreferrer"
          class="button-secondary"
        >
          {{ localize(link.label) }}
        </a>
      </div>
      <RouterLink
        :to="`/projects/${props.project.slug}`"
        class="inline-flex items-center gap-2 text-sm font-medium text-brand-500 transition-colors hover:text-brand-400"
      >
        {{ messages.actions.viewEngineeringDetails }}
        <ArrowRightIcon class="h-4 w-4" />
      </RouterLink>
    </div>

    <img
      v-if="props.project.image"
      :src="resolveAssetPath(props.project.image)"
      :alt="`${localize(props.project.title)} preview`"
      class="w-full rounded-2xl border border-slate-200/80 bg-slate-100 object-cover dark:border-slate-800/80 dark:bg-slate-900"
      loading="eager"
      decoding="async"
    />
    <div
      v-else
      class="flex min-h-[16rem] items-center rounded-2xl border border-dashed border-slate-300 px-6 py-8 text-sm leading-7 text-slate-500 dark:border-slate-700 dark:text-slate-500"
    >
      {{ messages.media.unavailable }}
    </div>
  </article>
</template>
