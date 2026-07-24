import { cp, mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { awards } from "../src/data/awards";
import { education } from "../src/data/education";
import { profile } from "../src/data/profile";
import { projects } from "../src/data/projects";
import { publications } from "../src/data/publications";
import { messages } from "../src/i18n/messages";
import type { Locale, Localized } from "../src/i18n/schema";

const TEMPLATE_DIR = "/Volumes/Scriptorium/1.Expeditio/cv Curriculum Vitae";
const OUTPUT_DIR = path.resolve("public/documents");
const GENERATED_DIR = path.resolve("generated/resumes");

const resolveLocalized = <T>(value: Localized<T>, locale: Locale) => value[locale];

const latexEscape = (value: string) =>
  value
    .replace(/\\/g, "\\textbackslash{}")
    .replace(/&/g, "\\&")
    .replace(/%/g, "\\%")
    .replace(/\$/g, "\\$")
    .replace(/#/g, "\\#")
    .replace(/_/g, "\\_")
    .replace(/{/g, "\\{")
    .replace(/}/g, "\\}")
    .replace(/~/g, "\\textasciitilde{}")
    .replace(/\^/g, "\\textasciicircum{}");

const stripProtocol = (value: string) => value.replace(/^https?:\/\//, "");

const buildBulletLines = (items: string[]) =>
  items
    .filter(Boolean)
    .slice(0, 3)
    .map((item) => `\\smaller{${latexEscape(item)}}`)
    .join("\n");

const buildProjectSection = (locale: Locale) =>
  projects
    .map((project) => {
      const lines = [
        resolveLocalized(project.summary, locale),
        project.motivation ? resolveLocalized(project.motivation, locale) : "",
        project.architecture ? resolveLocalized(project.architecture, locale) : ""
      ];

      return [
        `\\textsc{${latexEscape(resolveLocalized(project.title, locale))}} \\\\`,
        buildBulletLines(lines),
        "\\is"
      ].join("\n");
    })
    .join("\n\n")
    .replace(/\\is\s*$/, "");

const buildEducationSection = (locale: Locale) =>
  education
    .map((item) =>
      [
        `\\textsc{${latexEscape(resolveLocalized(item.degree, locale))}} \\\\`,
        `\\textit{${latexEscape(resolveLocalized(item.institution, locale))}} \\dates{${latexEscape(
          resolveLocalized(item.period, locale)
        )}}`,
        `\\smaller{${latexEscape(resolveLocalized(item.details, locale))}}`,
        "\\is"
      ].join("\n")
    )
    .join("\n\n")
    .replace(/\\is\s*$/, "");

const buildPublicationsSection = (locale: Locale) =>
  publications
    .map((publication) =>
      [
        `\\textsc{${latexEscape(resolveLocalized(publication.title, locale))}} \\\\`,
        `\\smaller{${latexEscape(resolveLocalized(publication.venue, locale))} (${publication.year})}`,
        `\\smaller{${latexEscape(resolveLocalized(publication.abstract, locale))}}`,
        "\\is"
      ].join("\n")
    )
    .join("\n\n")
    .replace(/\\is\s*$/, "");

const buildAwardsSection = (locale: Locale) =>
  awards
    .map((award) =>
      [
        `\\textsc{${latexEscape(resolveLocalized(award.title, locale))}} \\dates{${award.year}}`,
        `\\smaller{${latexEscape(resolveLocalized(award.distinction, locale))}}`,
        `\\smaller{${latexEscape(resolveLocalized(award.organization, locale))}}`,
        "\\is"
      ].join("\n")
    )
    .join("\n\n")
    .replace(/\\is\s*$/, "");

const buildSkillsSection = (locale: Locale) =>
  [
    "\\begin{itemize}",
    ...resolveLocalized(profile.skills, locale).map((skill) => `\\item ${latexEscape(skill)}`),
    "\\end{itemize}"
  ].join("\n");

const renderCvData = (locale: Locale) => {
  const copy = messages[locale];

  return `% AUTO-GENERATED FILE. DO NOT EDIT MANUALLY.

\\newcommand{\\cvlabelprofile}{${latexEscape(copy.labels.profile)}}
\\newcommand{\\cvlabelcontact}{${latexEscape(copy.labels.contact)}}
\\newcommand{\\cvlabelpersonalinformation}{${latexEscape(copy.labels.personalInformation)}}
\\newcommand{\\cvlabelcitizenship}{${latexEscape(copy.labels.citizenship)}}
\\newcommand{\\cvlabeladdress}{${latexEscape(copy.labels.address)}}
\\newcommand{\\cvlabellanguages}{${latexEscape(copy.labels.languages)}}
\\newcommand{\\cvlabelskills}{${latexEscape(copy.labels.skills)}}
\\newcommand{\\cvlabelprojects}{${latexEscape(copy.labels.projects)}}
\\newcommand{\\cvlabeleducation}{${latexEscape(copy.labels.education)}}
\\newcommand{\\cvlabelpublications}{${latexEscape(copy.labels.publications)}}
\\newcommand{\\cvlabelawards}{${latexEscape(copy.labels.awards)}}
\\newcommand{\\cvlabelinterests}{${latexEscape(copy.labels.interests)}}

\\newcommand{\\cvname}{${latexEscape(profile.givenName)}}
\\newcommand{\\cvsurname}{${latexEscape(profile.familyName)}}
\\newcommand{\\cvemail}{${latexEscape(profile.email)}}
\\newcommand{\\cvphone}{${latexEscape(profile.phone)}}
\\newcommand{\\cvgithub}{${latexEscape(stripProtocol(profile.github))}}
\\newcommand{\\cvlinkedin}{${latexEscape(stripProtocol(profile.linkedin))}}
\\newcommand{\\cvlattes}{${latexEscape(stripProtocol(profile.lattes))}}
\\newcommand{\\cvaddress}{${latexEscape(resolveLocalized(profile.address, locale))}}
\\newcommand{\\cvcitizenship}{${latexEscape(resolveLocalized(profile.citizenship, locale))}}
\\newcommand{\\cvlanguages}{${latexEscape(resolveLocalized(profile.languages, locale))}}

\\newcommand{\\cvprofile}{
${latexEscape(resolveLocalized(profile.resumeProfile, locale))}
}

\\newcommand{\\cvskills}{
${buildSkillsSection(locale)}
}

\\newcommand{\\cveducation}{
${buildEducationSection(locale)}
}

\\newcommand{\\cvprojects}{
${buildProjectSection(locale)}
}

\\newcommand{\\cvpublications}{
${buildPublicationsSection(locale)}
}

\\newcommand{\\cvawards}{
${buildAwardsSection(locale)}
}

\\newcommand{\\cvinterests}{
\\textit{${latexEscape(resolveLocalized(profile.interests, locale))}}
}
`;
};

const renderMain = (template: string, locale: Locale) =>
  template
    .replace(/\\usepackage\[brazil\]\{babel\}/, `\\usepackage[${locale === "en" ? "english" : "brazil"}]{babel}`)
    .replace(/\\englishfalse[^\n]*/, locale === "en" ? "\\englishtrue" : "\\englishfalse")
    .replace("\\headleft{Perfil}", "\\headleft{\\cvlabelprofile}")
    .replace("\\headleft{Contato}", "\\headleft{\\cvlabelcontact}")
    .replace("\\headleft{Informações pessoais}", "\\headleft{\\cvlabelpersonalinformation}")
    .replace("Nacionalidade: \\textbf{\\cvcitizenship} \\\\", "\\cvlabelcitizenship: \\textbf{\\cvcitizenship} \\\\")
    .replace("Endereço: {\\small \\textcolor{white}{\\cvaddress}} \\\\", "\\cvlabeladdress: {\\small \\textcolor{white}{\\cvaddress}} \\\\")
    .replace("Idiomas: \\textbf{\\cvlanguages}", "\\cvlabellanguages: \\textbf{\\cvlanguages}")
    .replace("\\headleft{Competências}", "\\headleft{\\cvlabelskills}")
    .replace("\\headright{Projetos}", "\\headright{\\cvlabelprojects}")
    .replace("\\headright{Formação Acadêmica}", "\\headright{\\cvlabeleducation}")
    .replace("\\headright{Interesses}", "\\headright{\\cvlabelinterests}")
    .replace(
      "\\headright{\\cvlabeleducation}\n\\cveducation\n\n\\headright{\\cvlabelinterests}",
      "\\headright{\\cvlabeleducation}\n\\cveducation\n\n\\headright{\\cvlabelpublications}\n\\cvpublications\n\n\\headright{\\cvlabelawards}\n\\cvawards\n\n\\headright{\\cvlabelinterests}"
    );

const compileLatex = (workDir: string, fileName: string) => {
  const result = spawnSync(
    "latexmk",
    ["-pdf", "-interaction=nonstopmode", "-halt-on-error", "-file-line-error", fileName],
    {
      cwd: workDir,
      encoding: "utf8"
    }
  );

  if (result.status !== 0) {
    throw new Error(`latexmk failed for ${fileName}\n${result.stdout}\n${result.stderr}`);
  }
};

const main = async () => {
  if (!existsSync(TEMPLATE_DIR)) {
    throw new Error(`LaTeX template directory not found: ${TEMPLATE_DIR}`);
  }

  await mkdir(OUTPUT_DIR, { recursive: true });
  await mkdir(GENERATED_DIR, { recursive: true });

  const workDir = await mkdtemp(path.join(os.tmpdir(), "portfolio-resume-"));

  try {
    await cp(TEMPLATE_DIR, workDir, { recursive: true });

    const mainTemplate = await readFile(path.join(workDir, "main.tex"), "utf8");

    for (const locale of ["pt", "en"] as const) {
      const dataFileName = locale === "pt" ? "cv_data.tex" : "cv_data_en.tex";
      const texFileName = `resume-${locale}.tex`;
      const generatedDataPath = path.join(GENERATED_DIR, dataFileName);
      const renderedMain = renderMain(mainTemplate, locale);
      const renderedData = renderCvData(locale);

      await writeFile(path.join(workDir, dataFileName), renderedData, "utf8");
      await writeFile(path.join(workDir, texFileName), renderedMain, "utf8");
      await writeFile(generatedDataPath, renderedData, "utf8");
      await writeFile(path.join(GENERATED_DIR, texFileName), renderedMain, "utf8");
      compileLatex(workDir, texFileName);

      const outputPdf = path.join(workDir, `resume-${locale}.pdf`);
      const publicPdf = path.join(OUTPUT_DIR, `resume-${locale}.pdf`);
      await cp(outputPdf, publicPdf);
    }
  } finally {
    await rm(workDir, { recursive: true, force: true });
  }
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
