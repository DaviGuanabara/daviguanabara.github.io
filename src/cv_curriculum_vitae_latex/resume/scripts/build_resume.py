#!/usr/bin/env python3

from __future__ import annotations

import argparse
import subprocess
from dataclasses import dataclass
from pathlib import Path
from typing import Any

import yaml
from jinja2 import Environment, FileSystemLoader


ROOT = Path(__file__).resolve().parents[2]
RESUME_DIR = ROOT / "resume"
DATA_DIR = RESUME_DIR / "data"
PROFILES_DIR = RESUME_DIR / "profiles"
LANG_DIR = RESUME_DIR / "languages"
TEMPLATE_DIR = RESUME_DIR / "templates"
GENERATED_DIR = RESUME_DIR / "generated"
BUILD_DIR = ROOT / "build" / "resume"


def load_yaml(path: Path) -> Any:
    with path.open("r", encoding="utf-8") as handle:
        return yaml.safe_load(handle)


def tex_escape(value: Any) -> str:
    text = str(value)
    replacements = {
        "\\": r"\textbackslash{}",
        "&": r"\&",
        "%": r"\%",
        "$": r"\$",
        "#": r"\#",
        "_": r"\_",
        "{": r"\{",
        "}": r"\}",
        "~": r"\textasciitilde{}",
        "^": r"\textasciicircum{}",
    }
    for old, new in replacements.items():
        text = text.replace(old, new)
    return text


def localized_text(value: Any, lang: str) -> Any:
    if isinstance(value, dict):
        if lang in value:
            return value[lang]
        if "en" in value:
            return value["en"]
        if "pt" in value:
            return value["pt"]
    return value


def make_date_range(start: str | None, end: str | None, labels: dict[str, Any]) -> str:
    start_value = start or ""
    end_value = end or ""
    if isinstance(end_value, str) and end_value.lower() == "present":
        end_value = labels["current"]
    if not start_value:
        return str(end_value)
    if not end_value:
        return str(start_value)
    return f"{start_value}--{end_value}"


def index_items(items: list[dict[str, Any]]) -> dict[str, dict[str, Any]]:
    return {item["id"]: item for item in items}


def localized_list(items: list[Any], lang: str) -> list[str]:
    result: list[str] = []
    for item in items:
      result.append(str(localized_text(item, lang)))
    return result


def prepare_sections(profile: dict[str, Any], labels: dict[str, Any], datasets: dict[str, Any], lang: str) -> list[dict[str, Any]]:
    experience_by_id = index_items(datasets["experience"]["items"])
    education_by_id = index_items(datasets["education"]["items"])
    project_by_id = index_items(datasets["projects"]["items"])

    default_ids = {
        "experience": [item["id"] for item in datasets["experience"]["items"]],
        "education": [item["id"] for item in datasets["education"]["items"]],
        "projects": [item["id"] for item in datasets["projects"]["items"]],
    }

    rendered_sections: list[dict[str, Any]] = []
    for section in profile["sections"]:
        section_type = section["type"]
        if section_type == "experience":
            items = []
            for item_id in section.get("ids", default_ids["experience"]):
                item = dict(experience_by_id[item_id])
                item["date_range"] = make_date_range(item.get("start"), item.get("end"), labels)
                items.append(item)
            rendered_sections.append({"type": section_type, "items": items})
        elif section_type == "education":
            items = []
            for item_id in section.get("ids", default_ids["education"]):
                item = dict(education_by_id[item_id])
                item["date_range"] = make_date_range(item.get("start"), item.get("end"), labels)
                items.append(item)
            rendered_sections.append({"type": section_type, "items": items})
        elif section_type == "projects":
            items = [project_by_id[item_id] for item_id in section.get("ids", default_ids["projects"])]
            rendered_sections.append({"type": section_type, "items": items})
        else:
            rendered_sections.append({"type": section_type})
    return rendered_sections


def enrich_skills(skills: dict[str, Any], lang: str) -> dict[str, Any]:
    groups = []
    for group in skills["groups"]:
        group_copy = dict(group)
        group_copy["localized_items"] = localized_list(group["items"], lang)
        groups.append(group_copy)
    return {"groups": groups}


@dataclass
class BuildContext:
    profile: dict[str, Any]
    person: dict[str, Any]
    skills: dict[str, Any]
    labels: dict[str, Any]
    language: dict[str, Any]
    rendered_sections: list[dict[str, Any]]
    lang: str


def render_resume(context: BuildContext) -> str:
    env = Environment(loader=FileSystemLoader(str(TEMPLATE_DIR)), autoescape=False, trim_blocks=True, lstrip_blocks=True)
    env.filters["tex"] = tex_escape
    template = env.get_template("resume.tex.j2")
    return template.render(
        profile=context.profile,
        person=context.person,
        skills=context.skills,
        labels=context.labels,
        language=context.language,
        rendered_sections=context.rendered_sections,
        lang=context.lang,
    )


def compile_tex(tex_path: Path, output_dir: Path) -> None:
    output_dir.mkdir(parents=True, exist_ok=True)
    command = [
        "latexmk",
        "-pdf",
        "-interaction=nonstopmode",
        f"-output-directory={output_dir}",
        str(tex_path),
    ]
    subprocess.run(command, cwd=ROOT, check=True)


def build(profile_name: str, compile_pdf: bool) -> Path:
    profile = load_yaml(PROFILES_DIR / f"{profile_name}.yaml")
    lang = profile["language"]
    language = load_yaml(LANG_DIR / f"{lang}.yaml")
    labels = language["labels"]

    datasets = {
        "person": load_yaml(DATA_DIR / "person.yaml"),
        "skills": load_yaml(DATA_DIR / "skills.yaml"),
        "education": load_yaml(DATA_DIR / "education.yaml"),
        "experience": load_yaml(DATA_DIR / "experience.yaml"),
        "projects": load_yaml(DATA_DIR / "projects.yaml"),
    }

    rendered_sections = prepare_sections(profile, labels, datasets, lang)
    context = BuildContext(
        profile=profile,
        person=datasets["person"],
        skills=enrich_skills(datasets["skills"], lang),
        labels=labels,
        language=language,
        rendered_sections=rendered_sections,
        lang=lang,
    )

    GENERATED_DIR.mkdir(parents=True, exist_ok=True)
    tex_path = GENERATED_DIR / f"{profile_name}.tex"
    tex_path.write_text(render_resume(context), encoding="utf-8")

    if compile_pdf:
        compile_tex(tex_path, BUILD_DIR / profile_name)

    return tex_path


def main() -> None:
    parser = argparse.ArgumentParser(description="Build a resume profile.")
    parser.add_argument("--profile", required=True, help="Profile name, e.g. industry-pt")
    parser.add_argument("--no-compile", action="store_true", help="Render TeX but skip PDF compilation")
    args = parser.parse_args()
    tex_path = build(args.profile, compile_pdf=not args.no_compile)
    print(tex_path)


if __name__ == "__main__":
    main()
