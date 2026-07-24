<script setup lang="ts">
import ProjectPreview from "@/components/ProjectPreview.vue";
import PublicationItem from "@/components/PublicationItem.vue";
import SectionBlock from "@/components/SectionBlock.vue";
import SocialLinks from "@/components/SocialLinks.vue";
import TimelineItem from "@/components/TimelineItem.vue";
import { useI18n } from "@/composables/useI18n";
import { awards } from "@/data/awards";
import { education } from "@/data/education";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { publications } from "@/data/publications";

const { localize, messages } = useI18n();
</script>

<template>
  <div class="space-y-0">
    <section class="flex min-h-[calc(100vh-5rem)] items-center pb-14 pt-6">
      <div class="space-y-8">
        <div class="space-y-5">
          <h1 class="text-5xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
            {{ profile.fullName }}
          </h1>
          <div class="space-y-2 text-2xl leading-tight text-slate-700 dark:text-slate-300 sm:text-3xl">
            <p v-for="role in localize(profile.roles)" :key="role">{{ role }}</p>
          </div>
          <p class="text-2xl font-medium tracking-tight text-slate-900 dark:text-slate-100 sm:text-3xl">
            {{ localize(profile.headline) }}
          </p>
          <p class="max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-400">
            {{ localize(profile.summary) }}
          </p>
        </div>

        <SocialLinks />
      </div>
    </section>

    <div id="projects">
      <SectionBlock
        :eyebrow="messages.sections.projects.eyebrow"
        :title="messages.sections.projects.title"
        :description="messages.sections.projects.description"
      >
        <div>
          <ProjectPreview v-for="project in projects" :key="project.slug" :project="project" />
        </div>
      </SectionBlock>
    </div>

    <div id="publications">
      <SectionBlock
        :eyebrow="messages.sections.publications.eyebrow"
        :title="messages.sections.publications.title"
        :description="messages.sections.publications.description"
      >
        <PublicationItem
          v-for="publication in publications"
          :key="publication.title.en"
          :publication="publication"
        />
      </SectionBlock>
    </div>

    <div id="education">
      <SectionBlock
        :eyebrow="messages.sections.education.eyebrow"
        :title="messages.sections.education.title"
        :description="messages.sections.education.description"
      >
        <div class="space-y-8">
          <TimelineItem
            v-for="item in education"
            :key="`${item.degree.en}-${item.period.en}`"
            :degree="localize(item.degree)"
            :institution="localize(item.institution)"
            :period="localize(item.period)"
            :details="localize(item.details)"
          />
        </div>
      </SectionBlock>
    </div>

    <div id="awards">
      <SectionBlock
        :eyebrow="messages.sections.awards.eyebrow"
        :title="messages.sections.awards.title"
        :description="messages.sections.awards.description"
      >
        <div class="space-y-6">
          <article
            v-for="award in awards"
            :key="`${award.year}-${award.title.en}`"
            class="grid gap-4 border-t border-slate-200/80 py-6 first:border-t-0 dark:border-slate-800/80 lg:grid-cols-[0.18fr_0.82fr]"
          >
            <p class="text-sm font-medium text-brand-500">{{ award.year }}</p>
            <div>
              <h3 class="text-xl font-semibold tracking-tight text-slate-950 dark:text-white">
                {{ localize(award.title) }}
              </h3>
              <p class="mt-2 text-sm text-slate-700 dark:text-slate-300">{{ localize(award.distinction) }}</p>
              <p class="mt-2 text-sm text-slate-500 dark:text-slate-500">{{ localize(award.organization) }}</p>
            </div>
          </article>
        </div>
      </SectionBlock>
    </div>

    <div id="contact">
      <SectionBlock
        :eyebrow="messages.sections.contact.eyebrow"
        :title="messages.sections.contact.title"
        :description="messages.sections.contact.description"
      >
        <div class="space-y-6">
          <p class="max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400">
            {{ messages.sections.contact.body }}
          </p>
          <SocialLinks />
        </div>
      </SectionBlock>
    </div>
  </div>
</template>
