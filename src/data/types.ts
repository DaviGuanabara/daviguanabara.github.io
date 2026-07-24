import type { Localized, LocalizedString } from "@/i18n/schema";

export type SocialLink = {
  label: LocalizedString;
  href: string;
};

export type Profile = {
  fullName: string;
  givenName: string;
  familyName: string;
  roles: Localized<string[]>;
  headline: LocalizedString;
  summary: LocalizedString;
  location: LocalizedString;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  lattes: string;
  orcid: string;
  scholar: string;
  address: LocalizedString;
  citizenship: LocalizedString;
  languages: LocalizedString;
  resumeProfile: LocalizedString;
  skills: Localized<string[]>;
  interests: LocalizedString;
  socials: SocialLink[];
};

export type ProjectLink = {
  type: "github" | "demo" | "paper" | "documentation" | "video" | "slides";
  label: LocalizedString;
  href: string;
};

export type Project = {
  slug: string;
  title: LocalizedString;
  summary: LocalizedString;
  motivation?: LocalizedString;
  problem?: LocalizedString;
  architecture?: LocalizedString;
  engineeringDecisions?: Localized<string[]>;
  lessonsLearned?: Localized<string[]>;
  technologies: Localized<string[]>;
  links: ProjectLink[];
  image?: string;
  architectureDiagram?: string;
  screenshots: string[];
  publication?: LocalizedString;
};

export type Publication = {
  title: LocalizedString;
  venue: LocalizedString;
  year: string;
  authors: LocalizedString;
  abstract: LocalizedString;
  citation: LocalizedString;
  doi: string;
  scholar: string;
  orcid: string;
};

export type Education = {
  degree: LocalizedString;
  institution: LocalizedString;
  url?: string;
  period: LocalizedString;
  details: LocalizedString;
};

export type Award = {
  year: string;
  title: LocalizedString;
  distinction: LocalizedString;
  organization: LocalizedString;
};
