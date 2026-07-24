<script setup lang="ts">
import ProjectPreview from "@/components/ProjectPreview.vue";
import PublicationItem from "@/components/PublicationItem.vue";
import SectionBlock from "@/components/SectionBlock.vue";
import SocialLinks from "@/components/SocialLinks.vue";
import TimelineItem from "@/components/TimelineItem.vue";
import { awards } from "@/data/awards";
import { education } from "@/data/education";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { publications } from "@/data/publications";
</script>

<template>
  <div class="space-y-0">
    <section class="flex min-h-[calc(100vh-5rem)] items-center pb-14 pt-6">
      <div class="space-y-8">
        <div class="space-y-5">
          <h1 class="text-5xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
            {{ profile.name }}
          </h1>
          <div class="space-y-2 text-2xl leading-tight text-slate-700 dark:text-slate-300 sm:text-3xl">
            <p v-for="role in profile.roles" :key="role">{{ role }}</p>
          </div>
          <p class="text-2xl font-medium tracking-tight text-slate-900 dark:text-slate-100 sm:text-3xl">
            {{ profile.headline }}
          </p>
          <p class="max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-400">
            {{ profile.summary }}
          </p>
        </div>

        <SocialLinks />
      </div>
    </section>

    <div id="projects">
      <SectionBlock
        eyebrow="Projects"
        title="Selected Projects"
        description="Projects are the center of this portfolio. Each entry highlights the system itself, the engineering choices behind it, and the public materials currently available."
      >
        <div>
          <ProjectPreview v-for="project in projects" :key="project.slug" :project="project" />
        </div>
      </SectionBlock>
    </div>

    <div id="publications">
      <SectionBlock
        eyebrow="Publications"
        title="Publications"
        description="Current publication record with DOI, Scholar, and ORCID references."
      >
        <PublicationItem
          v-for="publication in publications"
          :key="publication.title"
          :publication="publication"
        />
      </SectionBlock>
    </div>

    <div id="education">
      <SectionBlock
        eyebrow="Education"
        title="Education"
        description="Academic trajectory presented as a concise timeline."
      >
        <div class="space-y-8">
          <TimelineItem
            v-for="item in education"
            :key="`${item.degree}-${item.period}`"
            :degree="item.degree"
            :institution="item.institution"
            :period="item.period"
            :details="item.details"
          />
        </div>
      </SectionBlock>
    </div>

    <div id="awards">
      <SectionBlock
        eyebrow="Awards"
        title="Awards"
        description="Selected distinctions across research and academic work."
      >
        <div class="space-y-6">
          <article
            v-for="award in awards"
            :key="`${award.year}-${award.title}`"
            class="grid gap-4 border-t border-slate-200/80 py-6 first:border-t-0 dark:border-slate-800/80 lg:grid-cols-[0.18fr_0.82fr]"
          >
            <p class="text-sm font-medium text-brand-500">{{ award.year }}</p>
            <div>
              <h3 class="text-xl font-semibold tracking-tight text-slate-950 dark:text-white">
                {{ award.title }}
              </h3>
              <p class="mt-2 text-sm text-slate-700 dark:text-slate-300">{{ award.distinction }}</p>
              <p class="mt-2 text-sm text-slate-500 dark:text-slate-500">{{ award.organization }}</p>
            </div>
          </article>
        </div>
      </SectionBlock>
    </div>

    <div id="contact">
      <SectionBlock
        eyebrow="Contact"
        title="Contact"
        description="Public profiles and academic identifiers."
      >
        <div class="space-y-6">
          <p class="max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400">
            The public contact surface of this portfolio is intentionally simple and points to the professional profiles and academic records that already document the work.
          </p>
          <SocialLinks />
        </div>
      </SectionBlock>
    </div>
  </div>
</template>
