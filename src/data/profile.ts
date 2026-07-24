import type { Profile } from "./types";
import { resumePath } from "./resume";

export const profile: Profile = {
  name: "Davi Guanabara de Aragão",
  roles: ["AI Engineer", "PhD Researcher"],
  headline: "Building intelligent systems.",
  summary:
    "I am an AI Engineer and PhD researcher at the Aeronautics Institute of Technology (ITA). My work focuses on machine learning, autonomous systems, optimization, and research software engineering.",
  location: "Instituto Tecnológico de Aeronáutica (ITA), Brazil",
  socials: [
    { label: "GitHub", href: "https://github.com/DaviGuanabara" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/davi-guanabara-91b3ab82/" },
    { label: "Google Scholar", href: "https://scholar.google.com/scholar?q=%22Davi+Guanabara+de+Arag%C3%A3o%22" },
    { label: "ORCID", href: "https://orcid.org/0009-0006-7634-6018" },
    { label: "Lattes", href: "https://lattes.cnpq.br/5079017129840047" },
    { label: "Resume", href: resumePath }
  ]
};
