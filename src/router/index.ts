import { watch } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import { messages } from "@/i18n/messages";
import type { LocalizedString } from "@/i18n/schema";
import { locale } from "@/composables/useLocale";
import HomeView from "@/views/HomeView.vue";
import ProjectDetailView from "@/views/ProjectDetailView.vue";
import ResumeView from "@/views/ResumeView.vue";

type RouteMetaLocalized = {
  title: LocalizedString;
  description: LocalizedString;
};

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: {
        en: messages.en.metadata.homeTitle,
        pt: messages.pt.metadata.homeTitle
      },
      description: {
        en: messages.en.metadata.homeDescription,
        pt: messages.pt.metadata.homeDescription
      }
    } satisfies RouteMetaLocalized
  },
  {
    path: "/projects/:slug",
    name: "project-detail",
    component: ProjectDetailView,
    meta: {
      title: {
        en: messages.en.metadata.projectTitle,
        pt: messages.pt.metadata.projectTitle
      },
      description: {
        en: messages.en.metadata.projectDescription,
        pt: messages.pt.metadata.projectDescription
      }
    } satisfies RouteMetaLocalized
  },
  {
    path: "/resume",
    name: "resume",
    component: ResumeView,
    meta: {
      title: {
        en: messages.en.metadata.resumeTitle,
        pt: messages.pt.metadata.resumeTitle
      },
      description: {
        en: messages.en.metadata.resumeDescription,
        pt: messages.pt.metadata.resumeDescription
      }
    } satisfies RouteMetaLocalized
  }
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    const section = typeof to.query.section === "string" ? to.query.section : undefined;
    if (section) {
      return {
        el: `#${section}`,
        top: 24,
        behavior: "smooth"
      };
    }

    return { top: 0, behavior: "smooth" };
  }
});

const updatePageMeta = () => {
  const currentRoute = router.currentRoute.value;
  const currentLocale = locale.value;
  const meta = currentRoute.meta as RouteMetaLocalized;
  const currentMessages = messages[currentLocale];

  document.title = `${currentMessages.metadata.siteTitle} | ${meta.title?.[currentLocale] ?? currentMessages.metadata.defaultTitle}`;

  const description = document.querySelector('meta[name="description"]');
  if (description && meta.description) {
    description.setAttribute("content", meta.description[currentLocale]);
  }
};

router.afterEach(() => {
  updatePageMeta();
});

watch(locale, () => {
  updatePageMeta();
});

export default router;
