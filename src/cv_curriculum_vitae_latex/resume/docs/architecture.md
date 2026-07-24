# Resume Engineering System Architecture

## Goals

The repository now contains a dedicated `resume/` subsystem that separates:

- factual content in YAML
- localized labels
- profile selection and ordering
- LaTeX presentation
- build orchestration

## Pipeline

1. YAML data files define the factual source of truth.
2. A profile file chooses language, layout, and section ordering.
3. `resume/scripts/build_resume.py` loads data, resolves the profile, and renders TeX from Jinja.
4. LaTeX macros in `resume/styles/resume-base.sty` handle visual presentation.
5. `latexmk` compiles the generated TeX into a profile-specific PDF.

## Why not build directly inside LaTeX?

LaTeX is excellent at typesetting but weak as a primary data-modeling layer.
Moving selection, ordering, and localization into YAML plus Python keeps the
templates smaller and makes multi-profile generation easier to validate.

## Why one-column first?

The first production layout is intentionally ATS-friendly:

- no sidebars
- no icon-only labels
- no floating graphics
- no tables for core content
- selectable text and hyperlinks

Additional layouts can be added later under `resume/layouts/` without forcing a
change to the data model.
