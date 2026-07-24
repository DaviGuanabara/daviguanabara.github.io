<script setup lang="ts">
import {
  ArrowDownTrayIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  IdentificationIcon,
  LinkIcon
} from "@heroicons/vue/24/outline";
import { profile } from "@/data/profile";

const icons = {
  GitHub: LinkIcon,
  LinkedIn: GlobeAltIcon,
  "Google Scholar": GlobeAltIcon,
  ORCID: IdentificationIcon,
  Lattes: DocumentTextIcon,
  Resume: ArrowDownTrayIcon
} as const;

const resolveHref = (href: string) => {
  if (href.startsWith("http://") || href.startsWith("https://")) {
    return href;
  }

  if (href.startsWith("/")) {
    const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, "");
    return `${baseUrl}/#${href}`;
  }

  return href;
};
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <a
      v-for="item in profile.socials"
      :key="item.label"
      :href="resolveHref(item.href)"
      :target="item.href.startsWith('http') ? '_blank' : undefined"
      :rel="item.href.startsWith('http') ? 'noreferrer' : undefined"
      :class="item.label === 'Resume' ? 'button-primary' : 'button-secondary'"
    >
      <component :is="icons[item.label as keyof typeof icons] ?? LinkIcon" class="h-4 w-4" />
      {{ item.label }}
    </a>
  </div>
</template>
