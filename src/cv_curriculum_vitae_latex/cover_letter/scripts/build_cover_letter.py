#!/usr/bin/env python3

from __future__ import annotations

import argparse
import re
import subprocess
from pathlib import Path
from typing import Any

import yaml
from jinja2 import Environment, FileSystemLoader


ROOT = Path(__file__).resolve().parents[2]
COVER_LETTER_DIR = ROOT / "cover_letter"
TEMPLATE_DIR = COVER_LETTER_DIR / "templates"
DATA_DIR = COVER_LETTER_DIR / "data"
COMPANIES_DIR = COVER_LETTER_DIR / "companies"
BUILD_DIR = ROOT / "build" / "cover_letters"


def load_yaml(path: Path) -> dict[str, Any]:
    with path.open("r", encoding="utf-8") as handle:
        data = yaml.safe_load(handle)
    if not isinstance(data, dict):
        raise ValueError(f"Expected mapping in {path}")
    return data


def load_markdown(path: Path) -> str:
    return path.read_text(encoding="utf-8").strip()


def split_paragraphs(markdown_text: str) -> list[str]:
    paragraphs = [part.strip() for part in re.split(r"\n\s*\n", markdown_text) if part.strip()]
    if len(paragraphs) < 4:
        raise ValueError("Cover letter markdown must include salutation, body, closing, and signature.")
    return paragraphs


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


def parse_letter(markdown_text: str) -> dict[str, Any]:
    paragraphs = split_paragraphs(markdown_text)
    return {
        "salutation": paragraphs[0],
        "body_paragraphs": paragraphs[1:-2],
        "closing": paragraphs[-2],
        "signature": paragraphs[-1],
    }


def render_letter(company: dict[str, Any], letter_parts: dict[str, Any]) -> str:
    environment = Environment(
        loader=FileSystemLoader(str(TEMPLATE_DIR)),
        autoescape=False,
        trim_blocks=True,
        lstrip_blocks=True,
    )
    environment.filters["tex"] = tex_escape
    template = environment.get_template("letter.tex.j2")
    return template.render(
        company=company,
        rendered_date=company["date"],
        salutation=letter_parts["salutation"],
        body_paragraphs=letter_parts["body_paragraphs"],
        closing=letter_parts["closing"],
        signature=letter_parts["signature"],
    )


def compile_tex(tex_path: Path) -> None:
    subprocess.run(
        [
            "latexmk",
            "-pdf",
            "-interaction=nonstopmode",
            f"-output-directory={BUILD_DIR}",
            str(tex_path),
        ],
        cwd=ROOT,
        check=True,
    )


def build(company_slug: str, compile_pdf: bool) -> Path:
    company = load_yaml(COMPANIES_DIR / f"{company_slug}.yaml")
    body_path = DATA_DIR / company["body_file"]
    letter_parts = parse_letter(load_markdown(body_path))

    BUILD_DIR.mkdir(parents=True, exist_ok=True)
    tex_path = BUILD_DIR / f"{company['output_name']}.tex"
    tex_path.write_text(render_letter(company, letter_parts), encoding="utf-8")

    if compile_pdf:
        compile_tex(tex_path)

    return tex_path


def main() -> None:
    parser = argparse.ArgumentParser(description="Build a cover letter PDF.")
    parser.add_argument("--company", required=True, help="Company slug, e.g. lockheed-martin")
    parser.add_argument("--no-compile", action="store_true", help="Render TeX but skip PDF compilation")
    args = parser.parse_args()

    tex_path = build(args.company, compile_pdf=not args.no_compile)
    print(tex_path)


if __name__ == "__main__":
    main()
