<script setup lang="ts">
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import { computed, ref } from "vue";
import ThemeToggle from "./ThemeToggle.vue";

const isOpen = ref(false);
const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, "");

const links = computed(() => [
  { label: "Projects", to: `${baseUrl}/#projects` },
  { label: "Publications", to: `${baseUrl}/#publications` },
  { label: "Education", to: `${baseUrl}/#education` },
  { label: "Awards", to: `${baseUrl}/#awards` },
  { label: "Contact", to: `${baseUrl}/#contact` }
]);
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur transition-colors duration-300 dark:border-slate-800/80 dark:bg-slate-950/85"
  >
    <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
      <RouterLink to="/" class="text-base font-semibold tracking-tight text-slate-900 transition-colors dark:text-slate-100">
        Davi Guanabara
      </RouterLink>

      <nav class="hidden items-center gap-6 md:flex" aria-label="Primary navigation">
        <a
          v-for="link in links"
          :key="link.to"
          :href="link.to"
          class="nav-link"
        >
          {{ link.label }}
        </a>
        <ThemeToggle />
      </nav>

      <div class="flex items-center gap-3 md:hidden">
        <ThemeToggle />
        <button
          type="button"
          class="inline-flex rounded-2xl border border-slate-300 p-2 text-slate-700 transition-colors hover:border-brand-400 hover:text-brand-500 dark:border-slate-700 dark:text-slate-200"
          :aria-expanded="isOpen"
          aria-label="Toggle navigation menu"
          @click="isOpen = !isOpen"
        >
          <Bars3Icon v-if="!isOpen" class="h-5 w-5" />
          <XMarkIcon v-else class="h-5 w-5" />
        </button>
      </div>
    </div>

    <nav
      v-if="isOpen"
      class="border-t border-slate-200/80 px-6 py-4 dark:border-slate-800/80 md:hidden"
      aria-label="Mobile navigation"
    >
      <div class="flex flex-col gap-4">
        <a
          v-for="link in links"
          :key="link.to"
          :href="link.to"
          class="nav-link"
          @click="isOpen = false"
        >
          {{ link.label }}
        </a>
      </div>
    </nav>
  </header>
</template>
