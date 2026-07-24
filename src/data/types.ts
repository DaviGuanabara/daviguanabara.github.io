export type SocialLink = {
  label: string;
  href: string;
};

export type Profile = {
  name: string;
  roles: string[];
  headline: string;
  summary: string;
  location: string;
  socials: SocialLink[];
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  motivation?: string;
  problem?: string;
  architecture?: string;
  engineeringDecisions?: string[];
  lessonsLearned?: string[];
  technologies: string[];
  links: ProjectLink[];
  image?: string;
  architectureDiagram?: string;
  screenshots: string[];
  publication?: string;
};

export type Publication = {
  title: string;
  venue: string;
  year: string;
  authors: string;
  abstract: string;
  citation: string;
  doi: string;
  scholar: string;
  orcid: string;
};

export type Education = {
  degree: string;
  institution: string;
  period: string;
  details: string;
};

export type Award = {
  year: string;
  title: string;
  distinction: string;
  organization: string;
};
