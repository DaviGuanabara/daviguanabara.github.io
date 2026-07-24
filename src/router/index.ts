import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ProjectDetailView from "@/views/ProjectDetailView.vue";
import ResumeView from "@/views/ResumeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "Home",
      description:
        "Portfolio homepage of Davi Guanabara, AI Engineer, Machine Learning Engineer, and Research Engineer."
    }
  },
  {
    path: "/projects/:slug",
    name: "project-detail",
    component: ProjectDetailView,
    meta: {
      title: "Project",
      description:
        "Engineering details for selected AI and research software projects by Davi Guanabara."
    }
  },
  {
    path: "/resume",
    name: "resume",
    component: ResumeView,
    meta: {
      title: "Resume",
      description: "Resume placeholder page for Davi Guanabara."
    }
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  }
});

router.afterEach((to) => {
  document.title = `Davi Guanabara | ${String(to.meta.title ?? "Portfolio")}`;

  const description = document.querySelector('meta[name="description"]');
  if (description && to.meta.description) {
    description.setAttribute("content", String(to.meta.description));
  }
});

export default router;
