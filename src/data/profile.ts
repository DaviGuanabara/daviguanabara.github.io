import type { Profile } from "./types";
import { resumePaths } from "./resume";

export const profile: Profile = {
  fullName: "Davi Guanabara de Aragão",
  givenName: "Davi",
  familyName: "Guanabara de Aragão",
  roles: {
    en: ["AI Engineer", "PhD Researcher"],
    pt: ["Engenheiro de IA", "Pesquisador de Doutorado"]
  },
  headline: {
    en: "Building intelligent systems.",
    pt: "Construindo sistemas inteligentes."
  },
  summary: {
    en:
      "I am an AI Engineer and PhD researcher at the Aeronautics Institute of Technology (ITA). My work focuses on machine learning, autonomous systems, optimization, and research software engineering.",
    pt:
      "Sou engenheiro de IA e pesquisador de doutorado no Instituto Tecnológico de Aeronáutica (ITA). Meu trabalho se concentra em aprendizado de máquina, sistemas autônomos, otimização e engenharia de software para pesquisa."
  },
  location: {
    en: "Instituto Tecnológico de Aeronáutica (ITA), Brazil",
    pt: "Instituto Tecnológico de Aeronáutica (ITA), Brasil"
  },
  email: "davi_guanabara@live.com",
  phone: "+55 85 9 8673-6026",
  github: "https://github.com/DaviGuanabara",
  linkedin: "https://www.linkedin.com/in/davi-guanabara-91b3ab82/",
  lattes: "https://lattes.cnpq.br/5079017129840047",
  orcid: "https://orcid.org/0009-0006-7634-6018",
  scholar: "https://scholar.google.com/scholar?q=%22Davi+Guanabara+de+Arag%C3%A3o%22",
  address: {
    en: "Sao Paulo, Brazil",
    pt: "Sao Paulo, Brasil"
  },
  citizenship: {
    en: "Brazilian",
    pt: "Brasileiro"
  },
  languages: {
    en: "English (CEFR B2, DET score: 115)",
    pt: "Inglês (CEFR B2, DET score: 115)"
  },
  resumeProfile: {
    en:
      "Work focused on intelligent systems with emphasis on decision problems and machine learning. Experience in reinforcement learning, simulation-driven engineering, and applied research for autonomous systems.",
    pt:
      "Atuação em sistemas inteligentes com foco em problemas de decisão e aprendizado de máquina. Experiência em desenvolvimento de soluções baseadas em aprendizado por reforço e simulação, com interesse em pesquisa aplicada e sistemas autônomos."
  },
  skills: {
    en: [
      "Python (PyTorch)",
      "Reinforcement and supervised learning in simulation-driven settings",
      "Deep learning",
      "Modeling and experimentation in simulated environments"
    ],
    pt: [
      "Python (PyTorch)",
      "Aprendizado por reforço e supervisionado aplicado em simulação",
      "Aprendizado profundo",
      "Modelagem e experimentação em ambientes simulados"
    ]
  },
  interests: {
    en:
      "Intelligent systems, data science, decision-making under uncertainty, simulation, and autonomous systems.",
    pt:
      "Sistemas inteligentes, ciência de dados, tomada de decisão sob incerteza, simulação e sistemas autônomos."
  },
  socials: [
    {
      label: { en: "GitHub", pt: "GitHub" },
      href: "https://github.com/DaviGuanabara"
    },
    {
      label: { en: "LinkedIn", pt: "LinkedIn" },
      href: "https://www.linkedin.com/in/davi-guanabara-91b3ab82/"
    },
    {
      label: { en: "Google Scholar", pt: "Google Scholar" },
      href: "https://scholar.google.com/scholar?q=%22Davi+Guanabara+de+Arag%C3%A3o%22"
    },
    {
      label: { en: "ORCID", pt: "ORCID" },
      href: "https://orcid.org/0009-0006-7634-6018"
    },
    {
      label: { en: "Lattes", pt: "Lattes" },
      href: "https://lattes.cnpq.br/5079017129840047"
    },
    {
      label: { en: "Resume", pt: "Currículo" },
      href: resumePaths.en
    }
  ]
};
