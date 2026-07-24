<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "@/composables/useI18n";
import { projects } from "@/data/projects";
import { resolveAssetPath } from "@/utils/resolveAssetPath";

const route = useRoute();
const { localize, messages } = useI18n();

const project = computed(() => projects.find((item) => item.slug === route.params.slug));
</script>

<template>
  <section v-if="project" class="space-y-12">
    <header class="space-y-6 border-b border-slate-200/80 pb-10 dark:border-slate-800/80">
      <RouterLink to="/" class="text-sm font-medium text-brand-500 hover:text-brand-400">
        {{ messages.actions.backToHome }}
      </RouterLink>
      <div class="space-y-4">
        <p class="text-xs font-semibold uppercase tracking-[0.28em] text-brand-500">{{ messages.labels.projectDocumentation }}</p>
        <h1 class="max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
          {{ localize(project.title) }}
        </h1>
        <p class="max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400">
          {{ localize(project.summary) }}
        </p>
      </div>
      <div class="flex flex-wrap gap-2">
        <span v-for="technology in localize(project.technologies)" :key="technology" class="chip">
          {{ technology }}
        </span>
      </div>
    </header>

    <div class="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
      <div class="space-y-9">
        <section v-if="project.problem">
          <h2 class="text-xl font-semibold tracking-tight text-slate-950 dark:text-white">{{ messages.labels.problem }}</h2>
          <p class="mt-3 text-base leading-8 text-slate-600 dark:text-slate-400">{{ localize(project.problem) }}</p>
        </section>

        <section v-if="project.motivation">
          <h2 class="text-xl font-semibold tracking-tight text-slate-950 dark:text-white">{{ messages.labels.motivation }}</h2>
          <p class="mt-3 text-base leading-8 text-slate-600 dark:text-slate-400">{{ localize(project.motivation) }}</p>
        </section>

        <section v-if="project.architecture">
          <h2 class="text-xl font-semibold tracking-tight text-slate-950 dark:text-white">{{ messages.labels.architecture }}</h2>
          <p class="mt-3 text-base leading-8 text-slate-600 dark:text-slate-400">{{ localize(project.architecture) }}</p>
        </section>

        <section v-if="project.engineeringDecisions && localize(project.engineeringDecisions).length">
          <h2 class="text-xl font-semibold tracking-tight text-slate-950 dark:text-white">{{ messages.labels.engineeringDecisions }}</h2>
          <ul class="mt-4 space-y-3 text-base leading-8 text-slate-600 dark:text-slate-400">
            <li v-for="decision in localize(project.engineeringDecisions)" :key="decision">{{ decision }}</li>
          </ul>
        </section>

        <section v-if="project.lessonsLearned && localize(project.lessonsLearned).length">
          <h2 class="text-xl font-semibold tracking-tight text-slate-950 dark:text-white">{{ messages.labels.lessonsLearned }}</h2>
          <ul class="mt-4 space-y-3 text-base leading-8 text-slate-600 dark:text-slate-400">
            <li v-for="lesson in localize(project.lessonsLearned)" :key="lesson">{{ lesson }}</li>
          </ul>
        </section>
      </div>

      <aside class="space-y-5">
        <img
          v-if="project.architectureDiagram || project.image"
          :src="resolveAssetPath(project.architectureDiagram ?? project.image)"
          :alt="`${localize(project.title)} project visual`"
          class="w-full rounded-2xl border border-slate-200/80 dark:border-slate-800/80"
        />

        <div v-if="project.links.length" class="flex flex-wrap gap-3">
          <a
            v-for="link in project.links"
            :key="link.href"
            :href="link.href"
            target="_blank"
            rel="noreferrer"
            class="button-secondary"
          >
            {{ localize(link.label) }}
          </a>
        </div>

        <p v-if="project.publication" class="text-sm leading-7 text-slate-500 dark:text-slate-500">
          {{ localize(project.publication) }}
        </p>
      </aside>
    </div>

    <section v-if="project.screenshots.length" class="space-y-5">
      <h2 class="text-xl font-semibold tracking-tight text-slate-950 dark:text-white">{{ messages.labels.images }}</h2>
      <div class="grid gap-6 lg:grid-cols-2">
        <img
          v-for="screenshot in project.screenshots"
          :key="screenshot"
          :src="resolveAssetPath(screenshot)"
          :alt="`${localize(project.title)} image`"
          class="w-full rounded-2xl border border-slate-200/80 dark:border-slate-800/80"
          loading="lazy"
        />
      </div>
    </section>
  </section>

  <section v-else class="space-y-4">
    <p class="text-sm font-medium text-brand-500">{{ messages.labels.projectNotFound }}</p>
    <RouterLink to="/" class="button-secondary">{{ messages.actions.returnHome }}</RouterLink>
  </section>
</template>
