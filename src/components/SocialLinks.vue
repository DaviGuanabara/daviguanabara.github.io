<script setup lang="ts">
import {
  ArrowDownTrayIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  IdentificationIcon,
  LinkIcon
} from "@heroicons/vue/24/outline";
import { computed } from "vue";
import { useI18n } from "@/composables/useI18n";
import { profile } from "@/data/profile";
import { resumePaths } from "@/data/resume";

const icons = {
  GitHub: LinkIcon,
  LinkedIn: GlobeAltIcon,
  "Google Scholar": GlobeAltIcon,
  ORCID: IdentificationIcon,
  Lattes: DocumentTextIcon,
  Resume: ArrowDownTrayIcon
} as const;

const { locale, localize } = useI18n();
const currentResumePath = computed(() => resumePaths[locale.value]);

const isAssetLink = (href: string) => href.startsWith("/documents/") || /\.[a-z0-9]+$/i.test(href);

const resolveHref = (href: string) => {
  if (href.startsWith("http://") || href.startsWith("https://")) {
    return href;
  }

  if (href.startsWith("/")) {
    const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, "");
    return isAssetLink(href) ? `${baseUrl}${href}` : `${baseUrl}/#${href}`;
  }

  return href;
};

const isExternalLink = (href: string) => href.startsWith("http://") || href.startsWith("https://");

const items = computed(() =>
  profile.socials.map((item) => ({
    ...item,
    iconKey: item.label.en,
    href: item.href === resumePaths.en ? currentResumePath.value : item.href,
    label: localize(item.label)
  }))
);
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <a
      v-for="item in items"
      :key="item.iconKey"
      :href="resolveHref(item.href)"
      :target="isExternalLink(item.href) ? '_blank' : undefined"
      :rel="isExternalLink(item.href) ? 'noreferrer' : undefined"
      :download="item.href === currentResumePath ? '' : undefined"
      :class="item.href === currentResumePath ? 'button-primary' : 'button-secondary'"
    >
      <component :is="icons[item.iconKey as keyof typeof icons] ?? LinkIcon" class="h-4 w-4" />
      {{ item.label }}
    </a>
  </div>
</template>
