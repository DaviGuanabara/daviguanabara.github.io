<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { projects } from "@/data/projects";
import { resolveAssetPath } from "@/utils/resolveAssetPath";

const route = useRoute();

const project = computed(() => projects.find((item) => item.slug === route.params.slug));
</script>

<template>
  <section v-if="project" class="space-y-12">
    <header class="space-y-6 border-b border-slate-200/80 pb-10 dark:border-slate-800/80">
      <RouterLink to="/" class="text-sm font-medium text-brand-500 hover:text-brand-400">
        Back to home
      </RouterLink>
      <div class="space-y-4">
        <p class="text-xs font-semibold uppercase tracking-[0.28em] text-brand-500">Project Documentation</p>
        <h1 class="max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
          {{ project.title }}
        </h1>
        <p class="max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400">
          {{ project.summary }}
        </p>
      </div>
      <div class="flex flex-wrap gap-2">
        <span v-for="technology in project.technologies" :key="technology" class="chip">
          {{ technology }}
        </span>
      </div>
    </header>

    <div class="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
      <div class="space-y-9">
        <section v-if="project.problem">
          <h2 class="text-xl font-semibold tracking-tight text-slate-950 dark:text-white">Problem</h2>
          <p class="mt-3 text-base leading-8 text-slate-600 dark:text-slate-400">{{ project.problem }}</p>
        </section>

        <section v-if="project.motivation">
          <h2 class="text-xl font-semibold tracking-tight text-slate-950 dark:text-white">Motivation</h2>
          <p class="mt-3 text-base leading-8 text-slate-600 dark:text-slate-400">{{ project.motivation }}</p>
        </section>

        <section v-if="project.architecture">
          <h2 class="text-xl font-semibold tracking-tight text-slate-950 dark:text-white">Architecture</h2>
          <p class="mt-3 text-base leading-8 text-slate-600 dark:text-slate-400">{{ project.architecture }}</p>
        </section>

        <section v-if="project.engineeringDecisions?.length">
          <h2 class="text-xl font-semibold tracking-tight text-slate-950 dark:text-white">Engineering Decisions</h2>
          <ul class="mt-4 space-y-3 text-base leading-8 text-slate-600 dark:text-slate-400">
            <li v-for="decision in project.engineeringDecisions" :key="decision">{{ decision }}</li>
          </ul>
        </section>

        <section v-if="project.lessonsLearned?.length">
          <h2 class="text-xl font-semibold tracking-tight text-slate-950 dark:text-white">Lessons Learned</h2>
          <ul class="mt-4 space-y-3 text-base leading-8 text-slate-600 dark:text-slate-400">
            <li v-for="lesson in project.lessonsLearned" :key="lesson">{{ lesson }}</li>
          </ul>
        </section>
      </div>

      <aside class="space-y-5">
        <img
          v-if="project.architectureDiagram || project.image"
          :src="resolveAssetPath(project.architectureDiagram ?? project.image)"
          :alt="`${project.title} project visual`"
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
            {{ link.label }}
          </a>
        </div>

        <p v-if="project.publication" class="text-sm leading-7 text-slate-500 dark:text-slate-500">
          {{ project.publication }}
        </p>
      </aside>
    </div>

    <section v-if="project.screenshots.length" class="space-y-5">
      <h2 class="text-xl font-semibold tracking-tight text-slate-950 dark:text-white">Images</h2>
      <div class="grid gap-6 lg:grid-cols-2">
        <img
          v-for="screenshot in project.screenshots"
          :key="screenshot"
          :src="resolveAssetPath(screenshot)"
          :alt="`${project.title} image`"
          class="w-full rounded-2xl border border-slate-200/80 dark:border-slate-800/80"
          loading="lazy"
        />
      </div>
    </section>
  </section>

  <section v-else class="space-y-4">
    <p class="text-sm font-medium text-brand-500">Project not found</p>
    <RouterLink to="/" class="button-secondary">Return home</RouterLink>
  </section>
</template>
